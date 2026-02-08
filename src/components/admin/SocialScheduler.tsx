"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

export function SocialScheduler() {
  const [date, setDate] = React.useState<Date>()
  const [platform, setPlatform] = React.useState("")
  const [content, setContent] = React.useState("")

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle className="text-ink-black font-bold">Schedule New Post</CardTitle>
          <CardDescription>Create and schedule content for social platforms.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label>Platform</Label>
                <Select onValueChange={setPlatform}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Platform" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="twitter">X (Twitter)</SelectItem>
                    </SelectContent>
                </Select>
            </div>

             <div className="space-y-2">
                <Label>Date</Label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                                "w-full justify-start text-left font-normal border-ink-black/10",
                                !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4 text-pine-teal" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 border-ink-black/5 bg-white shadow-2xl">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
             </div>

            <div className="space-y-2">
                <Label>Caption</Label>
                <Textarea 
                    placeholder="Write your caption here..." 
                    className="min-h-[150px] border-ink-black/10 transition-all focus:border-pine-teal focus:ring-1 focus:ring-pine-teal"
                    value={content}
                    onChange={(e) => setContent(e.target.value)} 
                />
            </div>
            
            <Button className="w-full bg-pine-teal text-white hover:bg-pine-teal/90 shadow-lg shadow-pine-teal/20">Schedule Post</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>How your post will look on {platform || "social media"}.</CardDescription>
        </CardHeader>
        <CardContent>
            {/* Mock Preview */}
            <div className="border rounded-lg p-4 max-w-sm mx-auto bg-white dark:bg-black shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                    <div>
                        <div className="text-sm font-semibold">Coventina AI</div>
                        <div className="text-xs text-muted-foreground">{platform}</div>
                    </div>
                </div>
                <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-md mb-3 flex items-center justify-center text-muted-foreground">
                    Image Preview
                </div>
                <div className="text-sm">
                    <span className="font-semibold mr-1">coventina_ai</span>
                    {content || "Your caption will appear here..."}
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}
