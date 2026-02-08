import { Metadata } from "next"
import OfferingsContent from "@/components/public/OfferingsContent"

export const metadata: Metadata = {
  title: "Our Offerings | Corporate & Wedding Events",
  description: "Explore our diverse offerings including Corporate Parties, Wedding Celebrations, Private Parties, and scenic Lake Tours on the Coventina luxury houseboat."
}

export default function OfferingsPage() {
  return <OfferingsContent />
}
