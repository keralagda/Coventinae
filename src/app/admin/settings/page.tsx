import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { 
    Key, 
    Globe, 
    Bell, 
    ShieldCheck, 
    Save
} from "lucide-react"

export default function SettingsPage() {
    return (
        <div className="flex-1 space-y-6 p-8">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
                    <p className="text-muted-foreground mt-2">
                        Configure your platform and manage API integrations.
                    </p>
                </div>
                <Button className="bg-pine-teal text-white flex items-center gap-2">
                    <Save className="h-4 w-4" /> Save Changes
                </Button>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                <Card className="border-ink-black/5 shadow-sm overflow-hidden">
                    <CardHeader className="bg-porcelain border-b border-ink-black/5">
                        <CardTitle className="flex items-center gap-2 text-ink-black font-bold">
                            <Globe className="h-5 w-5 text-pine-teal" /> General Configuration
                        </CardTitle>
                        <CardDescription>Basic platform settings and branding.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 p-6">
                        <div className="space-y-2">
                            <Label htmlFor="siteName" className="text-xs font-bold uppercase tracking-wider text-ink-black/50">Site Name</Label>
                            <Input id="siteName" defaultValue="Coventina AI" className="border-ink-black/10 focus:border-pine-teal focus:ring-1 focus:ring-pine-teal" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="contactEmail" className="text-xs font-bold uppercase tracking-wider text-ink-black/50">Contact Email</Label>
                            <Input id="contactEmail" defaultValue="contact@coventina.ai" className="border-ink-black/10 focus:border-pine-teal focus:ring-1 focus:ring-pine-teal" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-ink-black/5 shadow-sm overflow-hidden">
                    <CardHeader className="bg-porcelain border-b border-ink-black/5">
                        <CardTitle className="flex items-center gap-2 text-ink-black font-bold">
                            <Key className="h-5 w-5 text-pine-teal" /> API Integrations
                        </CardTitle>
                        <CardDescription>Manage your AI provider keys.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 p-6">
                        <div className="space-y-2">
                            <Label htmlFor="openaiKey" className="text-xs font-bold uppercase tracking-wider text-ink-black/50">OpenAI API Key</Label>
                            <Input id="openaiKey" type="password" value="••••••••••••••••" readOnly className="bg-porcelain border-ink-black/5 font-mono text-xs" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cerebrasKey" className="text-xs font-bold uppercase tracking-wider text-ink-black/50">Cerebras API Key</Label>
                            <Input id="cerebrasKey" type="password" value="••••••••••••••••" readOnly className="bg-porcelain border-ink-black/5 font-mono text-xs" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="mistralKey" className="text-xs font-bold uppercase tracking-wider text-ink-black/50">Mistral API Key</Label>
                            <Input id="mistralKey" type="password" value="••••••••••••••••" readOnly className="bg-porcelain border-ink-black/5 font-mono text-xs" />
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-ink-black/5 shadow-sm overflow-hidden opacity-80 grayscale-[0.5]">
                    <CardHeader className="bg-porcelain border-b border-ink-black/5">
                        <CardTitle className="flex items-center gap-2 text-ink-black font-bold">
                            <Bell className="h-5 w-5 text-pine-teal" /> Notifications
                        </CardTitle>
                        <CardDescription>Manage system and email alerts.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground italic bg-porcelain p-4 rounded-xl border border-dashed border-ink-black/10">Notification preferences coming soon...</p>
                    </CardContent>
                </Card>

                <Card className="border-ink-black/5 shadow-sm overflow-hidden opacity-80 grayscale-[0.5]">
                    <CardHeader className="bg-porcelain border-b border-ink-black/5">
                        <CardTitle className="flex items-center gap-2 text-ink-black font-bold">
                            <ShieldCheck className="h-5 w-5 text-pine-teal" /> Security
                        </CardTitle>
                        <CardDescription>RBAC and platform security settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6">
                        <p className="text-sm text-muted-foreground italic bg-porcelain p-4 rounded-xl border border-dashed border-ink-black/10">Security modules are under development.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
