"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Settings,
  Users,
  CreditCard,
  FileText,
  Megaphone,
  Search,
  LogOut
} from "lucide-react"

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Consultations",
    href: "/admin/consultations",
    icon: FileText,
  },
  {
    title: "Content Studio",
    href: "/admin/content",
    icon: FileText,
  },
  {
    title: "Marketing Suite",
    href: "/admin/marketing",
    icon: Megaphone,
  },
  {
    title: "SEO Tools",
    href: "/admin/seo",
    icon: Search,
  },
  {
    title: "Users & Roles",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Financials",
    href: "/admin/finance",
    icon: CreditCard,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-4 p-4 text-sm font-medium lg:w-[280px] bg-ink-black min-h-screen text-porcelain shadow-2xl">
      <div className="flex h-[80px] items-center px-6 mb-4 border-b border-white/5">
        <Link className="flex items-center gap-3" href="/">
          <div className="w-8 h-8 rounded-lg bg-pine-teal flex items-center justify-center text-white font-bold shadow-lg shadow-pine-teal/20">
            C
          </div>
          <span className="text-lg font-bold tracking-tighter text-white uppercase italic">
            Coventina <span className="text-golden-bronze">AI</span>
          </span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto space-y-1">
        <div className="px-4 mb-2 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
            Digital Command
        </div>
        {sidebarNavItems.map((item, index) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 group relative",
                isActive 
                  ? "bg-pine-teal text-white shadow-lg shadow-pine-teal/20" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className={cn(
                "h-5 w-5 transition-transform duration-300 group-hover:scale-110",
                isActive ? "text-white" : "text-white/40 group-hover:text-pine-teal"
              )} />
              <span className="font-semibold tracking-tight">{item.title}</span>
              {isActive && (
                <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              )}
            </Link>
          )
        })}
      </div>
      <div className="mt-auto p-4 border-t border-white/5 pt-6">
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
              <LogOut className="h-4 w-4 text-white/40 group-hover:text-red-400" />
              <span className="text-xs font-bold text-white/60 group-hover:text-white">Sign Out</span>
          </div>
      </div>
    </nav>
  )
}
