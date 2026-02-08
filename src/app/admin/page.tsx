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
            <div className="text-3xl font-bold text-ink-black tracking-tighter">$0.00</div>
            <p className="text-xs text-muted-foreground mt-1">0% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-ink-black/5 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-ink-black uppercase tracking-tight">Subscriptions</CardTitle>
            <Users className="h-4 w-4 text-pine-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-ink-black tracking-tighter">0</div>
            <p className="text-xs text-muted-foreground mt-1">0% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-ink-black/5 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-ink-black uppercase tracking-tight">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-pine-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-ink-black tracking-tighter">0</div>
            <p className="text-xs text-muted-foreground mt-1">0% from last month</p>
          </CardContent>
        </Card>
        <Card className="border-ink-black/5 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-ink-black uppercase tracking-tight">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-pine-teal" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-ink-black tracking-tighter">0</div>
            <p className="text-xs text-muted-foreground mt-1">No active sessions</p>
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
            <div className="space-y-8 h-full flex items-center justify-center">
                <div className="text-center py-10">
                    <p className="text-sm font-medium text-muted-foreground italic">No recent inquiries to display.</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
