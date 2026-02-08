import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, CreditCard, Activity, DollarSign } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-ink-black/5 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-ink-black uppercase tracking-tight">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-pine-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-ink-black tracking-tighter">$45,231.89</div>
            <p className="text-xs text-muted-foreground mt-1">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-ink-black/5 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-ink-black uppercase tracking-tight">Subscriptions</CardTitle>
            <Users className="h-4 w-4 text-pine-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-ink-black tracking-tighter">+2350</div>
            <p className="text-xs text-muted-foreground mt-1">+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-ink-black/5 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-ink-black uppercase tracking-tight">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-pine-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-ink-black tracking-tighter">+12,234</div>
            <p className="text-xs text-muted-foreground mt-1">+19% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-ink-black/5 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-ink-black uppercase tracking-tight">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-pine-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-ink-black tracking-tighter">+573</div>
            <p className="text-xs text-muted-foreground mt-1">+201 since last hour</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-ink-black/5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-ink-black font-bold">Performance Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            {/* Chart would go here */}
            <div className="h-[300px] flex items-center justify-center text-muted-foreground bg-ink-black/5 rounded-xl border border-dashed border-ink-black/10 mx-4">
                Chart Visualization Interface
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3 border-ink-black/5 shadow-sm">
          <CardHeader>
            <CardTitle className="text-ink-black font-bold">Recent Inquiries</CardTitle>
            <div className="text-sm text-muted-foreground">
              You have 12 unread requests.
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
                {/* Recent sales list */}
                <div className="flex items-center hover:bg-ink-black/5 p-2 rounded-lg transition-colors cursor-pointer">
                    <div className="h-9 w-9 rounded-full bg-pine-teal/10 flex items-center justify-center text-pine-teal font-bold border border-pine-teal/20">
                        OM
                    </div>
                    <div className="ml-4 space-y-1">
                        <p className="text-sm font-bold text-ink-black leading-none">Olivia Martin</p>
                        <p className="text-sm text-muted-foreground font-medium">olivia.martin@email.com</p>
                    </div>
                    <div className="ml-auto font-bold text-pine-teal">+$1,999.00</div>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
