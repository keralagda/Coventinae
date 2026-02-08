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
  BarChart,
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
    <nav className="grid items-start gap-2 p-4 text-sm font-medium lg:w-[280px] lg:border-r lg:bg-gray-100/40 lg:dark:bg-gray-800/40 min-h-screen">
      <div className="flex h-[60px] items-center px-6">
        <Link className="flex items-center gap-2 font-semibold" href="/">
          <span className="">Coventina AI</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-4 text-sm font-medium">
          {sidebarNavItems.map((item, index) => {
            const Icon = item.icon
            return (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
                  pathname === item.href ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50" : ""
                )}
              >
                <Icon className="h-4 w-4" />
                {item.title}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="mt-auto p-4">
          {/* Footer or User Profile could go here */}
      </div>
    </nav>
  )
}
