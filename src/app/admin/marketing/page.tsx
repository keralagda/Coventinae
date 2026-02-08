import { SocialScheduler } from "@/components/admin/SocialScheduler"

export default function MarketingPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Social Media Suite</h2>
      </div>
      <SocialScheduler />
    </div>
  )
}
