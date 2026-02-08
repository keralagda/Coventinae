import { Metadata } from "next"
import ContactContent from "@/components/public/ContactContent"

export const metadata: Metadata = {
  title: "Contact Us | Book Your Cruise",
  description: "Get in touch with Coventina for bookings and inquiries. Reach us via phone, email, or visit our office in Noida."
}

export default function ContactPage() {
  return <ContactContent />
}
