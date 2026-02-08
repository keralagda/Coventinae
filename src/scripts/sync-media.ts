import { v2 as cloudinary } from 'cloudinary';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const prisma = new PrismaClient();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');

async function syncMedia() {
  console.log('🚀 Starting Media Synchronization...');
  
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('❌ Images directory not found:', IMAGES_DIR);
    return;
  }

  const files = fs.readdirSync(IMAGES_DIR);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|webp|gif)$/i.test(file) && fs.statSync(path.join(IMAGES_DIR, file)).isFile()
  );

  console.log(`📂 Found ${imageFiles.length} images to sync.`);

  for (const file of imageFiles) {
    const filePath = path.join(IMAGES_DIR, file);
    
    try {
      console.log(`📤 Uploading: ${file}...`);
      
      const result = await cloudinary.uploader.upload(filePath, {
        folder: 'coventina/public',
        use_filename: true,
        unique_filename: false,
      });

      await prisma.media.upsert({
        where: { publicId: result.public_id },
        update: {
          url: result.secure_url,
          fileName: file,
          fileSize: result.bytes,
          format: result.format,
          width: result.width,
          height: result.height,
          type: result.resource_type,
        },
        create: {
          url: result.secure_url,
          publicId: result.public_id,
          fileName: file,
          fileSize: result.bytes,
          format: result.format,
          width: result.width,
          height: result.height,
          type: result.resource_type,
          folder: 'coventina/public',
        },
      });

      console.log(`✅ Synced: ${file} -> ${result.secure_url}`);
    } catch (error) {
      console.error(`❌ Failed to sync ${file}:`, error);
    }
  }

  console.log('✨ Synchronization Complete!');
}

syncMedia()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
