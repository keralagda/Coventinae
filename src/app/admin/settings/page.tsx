import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { 
    Settings as SettingsIcon, 
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

            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Globe className="h-5 w-5" /> General Configuration
                        </CardTitle>
                        <CardDescription>Basic platform settings and branding.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="siteName">Site Name</Label>
                            <Input id="siteName" defaultValue="Coventina AI" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="contactEmail">Contact Email</Label>
                            <Input id="contactEmail" defaultValue="contact@coventina.ai" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Key className="h-5 w-5" /> API Integrations
                        </CardTitle>
                        <CardDescription>Manage your AI provider keys.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="openaiKey">OpenAI API Key</Label>
                            <Input id="openaiKey" type="password" value="••••••••••••••••" readOnly />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="cerebrasKey">Cerebras API Key</Label>
                            <Input id="cerebrasKey" type="password" value="••••••••••••••••" readOnly />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="mistralKey">Mistral API Key</Label>
                            <Input id="mistralKey" type="password" value="••••••••••••••••" readOnly />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="h-5 w-5" /> Notifications
                        </CardTitle>
                        <CardDescription>Manage system and email alerts.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground italic">Notification preferences coming soon...</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ShieldCheck className="h-5 w-5" /> Security
                        </CardTitle>
                        <CardDescription>RBAC and platform security settings.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground italic">Security modules are under development.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
