"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ContentEditor() {
  const [topic, setTopic] = useState("")
  const [generatedContent, setGeneratedContent] = useState("")
  const [loading, setLoading] = useState(false)
  const [keywords, setKeywords] = useState<string[]>([])

  const handleGenerate = async () => {
    if (!topic) return
    setLoading(true)
    try {
      // 1. Generate Keywords
      const kwRes = await fetch("/api/ai/generate", {
        method: "POST",
        body: JSON.stringify({ type: "keywords", topic }),
      })
      const kwData = await kwRes.json()
      if (kwData.result) setKeywords(kwData.result)

      // 2. Generate Content
      const prompt = `Write a comprehensive, SEO-optimized blog post about "${topic}". Use the following keywords: ${kwData.result?.join(", ")}. Format in Markdown.`
      const textRes = await fetch("/api/ai/generate", {
        method: "POST",
        body: JSON.stringify({ type: "text", prompt }),
      })
      const textData = await textRes.json()
      if (textData.result) setGeneratedContent(textData.result)

    } catch (error) {
      console.error("Generation failed", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-2 space-y-4">
        <Card>
            <CardHeader>
                <CardTitle>AI Content Generator</CardTitle>
                <CardDescription>Enter a topic to generate an SEO-optimized article.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="topic">Topic</Label>
                    <div className="flex gap-2">
                        <Input 
                            id="topic" 
                            placeholder="e.g., Luxury Houseboat Experiences in Kerala" 
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                        />
                        <Button onClick={handleGenerate} disabled={loading}>
                            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                            Generate
                        </Button>
                    </div>
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="content">Generated Content (Markdown)</Label>
                    <Textarea 
                        id="content" 
                        className="min-h-[400px] font-mono" 
                        value={generatedContent}
                        onChange={(e) => setGeneratedContent(e.target.value)}
                    />
                </div>
            </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card>
            <CardHeader>
                <CardTitle>SEO Intelligence</CardTitle>
                <CardDescription>AI-extracted keywords for this topic.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {keywords.length > 0 ? (
                        keywords.map((kw, i) => (
                            <Badge key={i} variant="secondary">{kw}</Badge>
                        ))
                    ) : (
                        <p className="text-sm text-muted-foreground">No keywords generated yet.</p>
                    )}
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
