"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function submitConsultation(data: {
  name: string;
  email: string;
  phone: string;
  date?: Date;
  message?: string;
}) {
  try {
    const consultation = await db.consultation.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: data.date,
        message: data.message,
        status: "PENDING",
      },
    });

    revalidatePath("/admin/consultations");
    return { success: true, data: consultation };
  } catch (error) {
    console.error("Error submitting consultation:", error);
    return { success: false, error: "Failed to submit consultation." };
  }
}

export async function getConsultations() {
  try {
    const consultations = await db.consultation.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, data: consultations };
  } catch (error) {
    console.error("Error fetching consultations:", error);
    return { success: false, error: "Failed to fetch consultations." };
  }
}

export async function updateConsultationStatus(id: string, status: string) {
  try {
    const consultation = await db.consultation.update({
      where: { id },
      data: { status },
    });
    revalidatePath("/admin/consultations");
    return { success: true, data: consultation };
  } catch (error) {
    console.error("Error updating consultation:", error);
    return { success: false, error: "Failed to update consultation." };
  }
}

export async function deleteConsultation(id: string) {
  try {
    await db.consultation.delete({
      where: { id },
    });
    revalidatePath("/admin/consultations");
    return { success: true };
  } catch (error) {
    console.error("Error deleting consultation:", error);
    return { success: false, error: "Failed to delete consultation." };
  }
}
