import { 
    UserPlus, 
    Search, 
    MoreHorizontal,
    Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table"

interface User {
    name: string;
    email: string;
    role: string;
    status: string;
}

const SAMPLE_USERS: User[] = [] // Reset to zero-state for production readiness

export default function UsersPage() {
    return (
        <div className="flex-1 space-y-6 p-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Users & Roles</h2>
                    <p className="text-muted-foreground mt-2">
                        Manage your team and their access permissions.
                    </p>
                </div>
                <Button className="bg-pine-teal text-white flex items-center gap-2">
                    <UserPlus className="h-4 w-4" /> Add User
                </Button>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search users by name or email..." className="pl-10" />
                </div>
                <Button variant="outline">Filter</Button>
            </div>

            <div className="rounded-2xl border border-ink-black/5 bg-white shadow-xl overflow-hidden">
                <Table>
                    <TableHeader className="bg-porcelain">
                        <TableRow className="border-ink-black/5 hover:bg-transparent">
                            <TableHead className="font-bold text-ink-black uppercase tracking-wider text-[10px]">User</TableHead>
                            <TableHead className="font-bold text-ink-black uppercase tracking-wider text-[10px]">Role</TableHead>
                            <TableHead className="font-bold text-ink-black uppercase tracking-wider text-[10px]">Status</TableHead>
                            <TableHead className="font-bold text-ink-black uppercase tracking-wider text-[10px] text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {SAMPLE_USERS.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={4} className="h-32 text-center text-muted-foreground italic bg-porcelain/20">
                                    No team members found. Start by adding your first user.
                                </TableCell>
                            </TableRow>
                        ) : (
                            SAMPLE_USERS.map((user) => (
                                <TableRow key={user.email} className="hover:bg-porcelain/50 border-ink-black/5 transition-colors group">
                                    <TableCell className="py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-9 w-9 rounded-full bg-pine-teal/10 flex items-center justify-center font-bold text-pine-teal border border-pine-teal/20 group-hover:bg-pine-teal group-hover:text-white transition-all">
                                                {user.name[0]}
                                            </div>
                                            <div>
                                                <div className="font-bold text-ink-black tracking-tight">{user.name}</div>
                                                <div className="text-[10px] text-muted-foreground font-semibold uppercase">{user.email}</div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4">
                                        <div className="flex items-center gap-2 text-xs font-bold text-ink-black/70">
                                            <Shield className="h-3 w-3 text-pine-teal" />
                                            {user.role}
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-4">
                                        <span className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-tight shadow-sm ${
                                            user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                                        }`}>
                                            {user.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-right py-4">
                                        <Button variant="ghost" size="icon" className="hover:bg-porcelain text-ink-black/40 hover:text-pine-teal">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
