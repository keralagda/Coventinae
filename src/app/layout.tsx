import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourceSerif = Source_Serif_4({ subsets: ["latin"], variable: "--font-source-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://coventina.net"),
  title: {
    default: "Coventina | Luxury Houseboat & Corporate Events",
    template: "%s | Coventina"
  },
  description: "Experience the colorful world of Coventina. Luxury houseboat cruises, corporate events, and wedding parties in Kerala.",
  openGraph: {
    title: "Coventina | Luxury Houseboat & Corporate Events",
    description: "Experience the colorful world of Coventina. Luxury houseboat cruises, corporate events, and wedding parties in Kerala.",
    url: "https://coventina.net",
    siteName: "Coventina",
    images: [
      {
        url: "/images/beed3.jpg", // Using an existing image as default og:image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sourceSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
