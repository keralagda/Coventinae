"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Ship, Calendar, Info, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function ModularNav() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Ship, label: "Offerings", href: "/offerings" },
    { 
      icon: Calendar, 
      label: "Book", 
      href: "https://www.makemytrip.com/hotels/hotel-details/?hotelId=202509041234313026&checkin=11012025&checkout=11022025&country=IN&city=CTXKU&openDetail=true&currency=INR&roomStayQualifier=2e0e&locusId=CTXKU&locusType=city&region=in&funnelName=HOMESTAY&rsc=1e2e&mpn=false&source_caller=sdk&af_siteid=com.makemytrip&shortlink=uxcto0kz&af_referrer_uid=1741702049799-945352577942225197&c=hotel_detail&pid=share_app&deep_link_value=https%3A%2F%2Fwww.makemytrip.com%2Fhotels%2Fhotel-details%3FhotelId%3D202509041234313026%26checkin%3D11012025%26checkout%3D11022025%26country%3DIN%26city%3DCTXKU%26openDetail%3Dtrue%26currency%3DINR%26roomStayQualifier%3D2e0e%26locusId%3DCTXKU%26locusType%3Dcity%26region%3Din%26funnelName%3DHOMESTAY%26rsc%3D1e2e%26mpn%3Dfalse",
      external: true 
    },
    { icon: Info, label: "About", href: "/about" },
    { icon: Phone, label: "Contact", href: "/contact" },
  ]

  return (
    <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm">
      <nav className="bg-[#03090F]/80 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-2xl shadow-black/40">
        <ul className="flex items-center justify-around">
          {navItems.map((item, i) => {
            const isActive = pathname === item.href
            const Icon = item.icon

            return (
              <li key={i}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  className={cn(
                    "flex flex-col items-center gap-1 p-2 transition-all duration-300 rounded-full min-w-[64px]",
                    isActive 
                      ? "text-golden-bronze bg-white/5" 
                      : "text-white/60 hover:text-white"
                  )}
                >
                  <Icon className={cn("h-5 w-5", isActive && "animate-pulse")} />
                  <span className="text-[10px] font-medium uppercase tracking-tighter">
                    {item.label}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
