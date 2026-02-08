import { 
    CreditCard, 
    ArrowUpRight, 
    ArrowDownRight, 
    DollarSign,
    Download,
    Activity
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FinancePage() {
    return (
        <div className="flex-1 space-y-6 p-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Financials</h2>
                    <p className="text-muted-foreground mt-2">
                        Track revenue, bookings, and financial projections.
                    </p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" /> Export Report
                </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card className="border-ink-black/5 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-bold text-ink-black uppercase tracking-tight">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-pine-teal" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-ink-black tracking-tighter">$45,231.89</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <ArrowUpRight className="h-3 w-3 text-green-500" /> +20.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-ink-black/5 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-bold text-ink-black uppercase tracking-tight">Bookings</CardTitle>
                        <CreditCard className="h-4 w-4 text-pine-teal" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-ink-black tracking-tighter">+2350</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <ArrowUpRight className="h-3 w-3 text-green-500" /> +180.1% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-ink-black/5 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-bold text-ink-black uppercase tracking-tight">Avg Order Value</CardTitle>
                        <DollarSign className="h-4 w-4 text-pine-teal" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-ink-black tracking-tighter">$1,290.00</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <ArrowDownRight className="h-3 w-3 text-red-500" /> -4% from last month
                        </p>
                    </CardContent>
                </Card>
                <Card className="border-ink-black/5 shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-bold text-ink-black uppercase tracking-tight">Active Subscriptions</CardTitle>
                        <UsersIcon className="h-4 w-4 text-pine-teal" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold text-ink-black tracking-tighter">+573</div>
                        <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                            <ArrowUpRight className="h-3 w-3 text-green-500" /> +201 since last hour
                        </p>
                    </CardContent>
                </Card>
            </div>

            <Card className="col-span-4 border-ink-black/5 shadow-sm overflow-hidden">
                <CardHeader className="bg-porcelain border-b border-ink-black/5">
                    <CardTitle className="text-ink-black font-bold">Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="text-center py-20 text-muted-foreground italic bg-white flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-porcelain flex items-center justify-center animate-pulse">
                            <Activity className="h-6 w-6 text-pine-teal/30" />
                        </div>
                        Transaction history is being synchronized with the payment gateway...
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
const UsersIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
)
