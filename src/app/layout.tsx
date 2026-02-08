import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif" })

export const metadata: Metadata = {
  title: "Coventina AI",
  description: "Luxury Cruise & AI Marketing Suite",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
