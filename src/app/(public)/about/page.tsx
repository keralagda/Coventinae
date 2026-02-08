import { Metadata } from "next"
import AboutContent from "@/components/public/AboutContent"

export const metadata: Metadata = {
  title: "About Us | Our Story & Cuisine",
  description: "Learn about the Coventina journey, our commitment to luxury and comfort, and the exquisite multi-cuisine dining experience we offer on the backwaters."
}

export default function AboutPage() {
  return <AboutContent />
}
