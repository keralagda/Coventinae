import { Sidebar } from "@/components/admin/Sidebar"
import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`flex min-h-screen w-full bg-gray-50/50 dark:bg-gray-900/50 ${inter.className}`}>
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
         <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <h1 className="text-lg font-semibold">Admin Dashboard</h1>
            <div className="ml-auto flex items-center gap-4">
                {/* User Dropdown or Notifications */}
                <div className="rounded-full bg-gray-200 w-8 h-8"></div>
            </div>
         </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
