'use server'

import { z } from "zod"
import { prisma } from "@/lib/prisma" // Ensure you have a prisma client instance exported from lib/prisma.ts

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type FormState = {
  message: string;
  errors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    message?: string[];
  };
  success?: boolean;
}

export async function submitContact(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
      success: false
    }
  }

  try {
    await prisma.contactInquiry.create({
      data: {
        firstName: validatedFields.data.firstName,
        lastName: validatedFields.data.lastName,
        email: validatedFields.data.email,
        message: validatedFields.data.message,
        status: "PENDING"
      }
    })

    return {
      message: "Thank you! Your message has been sent successfully.",
      success: true
    }
  } catch (error) {
    console.error("Failed to submit contact form:", error)
    return {
      message: "Something went wrong. Please try again later.",
      success: false
    }
  }
}
