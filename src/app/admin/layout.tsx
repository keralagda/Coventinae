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
    <div className={`flex min-h-screen w-full bg-porcelain ${inter.className}`}>
      <div className="hidden border-r border-ink-black/5 bg-white lg:block">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
         <header className="flex h-16 items-center gap-4 border-b border-ink-black/5 bg-white/80 backdrop-blur-md px-6 sticky top-0 z-10">
            <h1 className="text-xl font-bold text-ink-black tracking-tight flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pine-teal"></span>
                Admin Dashboard
            </h1>
            <div className="ml-auto flex items-center gap-4">
                <div className="flex flex-col items-end mr-2">
                    <span className="text-sm font-semibold text-ink-black">Administrator</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Priority Access</span>
                </div>
                <div className="rounded-full bg-pine-teal/10 w-9 h-9 flex items-center justify-center border border-pine-teal/20 text-pine-teal font-bold shadow-sm">
                    A
                </div>
            </div>
         </header>
        <main className="flex flex-1 flex-col gap-8 p-6 md:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
