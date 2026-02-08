import { 
    Users as UsersIcon, 
    UserPlus, 
    Search, 
    MoreHorizontal,
    Shield,
    Mail
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

const SAMPLE_USERS = [
    { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active" },
    { name: "Bob Wilson", email: "bob@example.com", role: "Viewer", status: "Inactive" },
]

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

            <div className="rounded-md border bg-white">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {SAMPLE_USERS.map((user) => (
                            <TableRow key={user.email}>
                                <TableCell>
                                    <div className="flex items-center gap-3">
                                        <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-ink-black">
                                            {user.name[0]}
                                        </div>
                                        <div>
                                            <div className="font-medium">{user.name}</div>
                                            <div className="text-xs text-muted-foreground">{user.email}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-3 w-3 text-pine-teal" />
                                        {user.role}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                                        user.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-gray-50 text-gray-600'
                                    }`}>
                                        {user.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
