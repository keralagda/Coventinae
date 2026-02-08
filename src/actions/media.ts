'use server';

import cloudinary from '@/lib/cloudinary';
import { prisma } from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { Media } from '@/types/media';

// Defensive type for Prisma Client extension to handle IDE sync lag without using 'any'
interface PrismaWithMedia {
  media: {
    create: (args: { data: Omit<Media, 'id' | 'createdAt' | 'updatedAt'> }) => Promise<Media>;
    findMany: (args: { orderBy?: { createdAt: 'asc' | 'desc' } }) => Promise<Media[]>;
    delete: (args: { where: { id: string } }) => Promise<Media>;
  };
}

const db = prisma as unknown as PrismaWithMedia;

export async function uploadMedia(formData: FormData): Promise<{ success: boolean; data?: Media; error?: string }> {
  try {
    const file = formData.get('file') as File;
    if (!file) {
      return { success: false, error: 'No file provided' };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert to base64 for Cloudinary
    const fileBase64 = `data:${file.type};base64,${buffer.toString('base64')}`;

    console.log(`Uploading to Cloudinary: ${file.name}`);

    const result = await cloudinary.uploader.upload(fileBase64, {
      folder: 'coventina-website',
      resource_type: 'auto',
    });

    // Save to database
    const media = await db.media.create({
      data: {
        url: result.secure_url,
        publicId: result.public_id,
        fileName: file.name,
        fileSize: result.bytes,
        format: result.format,
        width: result.width,
        height: result.height,
        type: result.resource_type,
        folder: result.folder,
      },
    });

    revalidatePath('/admin/media');
    return { success: true, data: media };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    return { success: false, error: 'Failed to upload to Cloudinary' };
  }
}

export async function getMedia(): Promise<{ success: boolean; data: Media[]; error?: string }> {
  try {
    const media = await db.media.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return { success: true, data: media };
  } catch (error) {
    console.error('Database fetch error:', error);
    return { success: false, data: [], error: 'Failed to fetch media' };
  }
}

export async function deleteMedia(id: string, publicId: string) {
  try {
    // Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId);

    // Delete from database
    await db.media.delete({
      where: { id },
    });

    revalidatePath('/admin/media');
    return { success: true };
  } catch (error) {
    console.error('Cloudinary delete error:', error);
    return { success: false, error: 'Failed to delete media' };
  }
}
