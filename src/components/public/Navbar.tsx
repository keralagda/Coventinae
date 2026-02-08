"use client"

import Link from "next/link"

export function Navbar() {

  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Offerings", href: "/offerings" },
    { title: "Booking", href: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=202509041234313026&checkin=11012025&checkout=11022025&country=IN&city=CTXKU&openDetail=true&currency=INR&roomStayQualifier=2e0e&locusId=CTXKU&locusType=city&region=in&funnelName=HOMESTAY&rsc=1e2e&mpn=false&source_caller=sdk&af_siteid=com.makemytrip&shortlink=uxcto0kz&af_referrer_uid=1741702049799-945352577942225197&c=hotel_detail&pid=share_app&deep_link_value=https%3A%2F%2Fwww.makemytrip.com%2Fhotels%2Fhotel-details%3FhotelId%3D202509041234313026%26checkin%3D11012025%26checkout%3D11022025%26country%3DIN%26city%3DCTXKU%26openDetail%3Dtrue%26currency%3DINR%26roomStayQualifier%3D2e0e%26locusId%3DCTXKU%26locusType%3Dcity%26region%3Din%26funnelName%3DHOMESTAY%26rsc%3D1e2e%26mpn%3Dfalse", external: true },
    { title: "About Us", href: "/about" },
    { title: "Career", href: "/career" },
    { title: "Contact", href: "/contact" },
  ]

  return (
    <nav className="absolute top-0 w-full z-50 transition-all duration-300 bg-[#03090F]/30 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white tracking-widest font-serif">
          COVENTINA
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <Link 
                key={i} 
                href={link.href} 
                target={link.external ? "_blank" : "_self"}
                className="text-white/80 hover:text-white text-sm uppercase tracking-wide transition-colors font-medium"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Mobile Nav - Hidden (Replaced by ModularNav) */}
        <div className="lg:hidden pointer-events-none opacity-0 select-none">
          {/* Legacy menu hidden to prioritize modular app-like nav */}
        </div>
      </div>
    </nav>
  )
}
