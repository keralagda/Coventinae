import { Navbar } from "@/components/public/Navbar"
import Footer from "@/components/public/Footer"
import { ModularNav } from "@/components/public/ModularNav"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-1">{children}</main>
      <ModularNav />
      <Footer />
    </div>
  )
}
