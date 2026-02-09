"use client"

import { toast } from "sonner"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AIProvider } from "@/lib/ai"

export function ContentEditor() {
  const [topic, setTopic] = useState("")
  const [generatedContent, setGeneratedContent] = useState("")
  const [loading, setLoading] = useState(false)
  const [keywords, setKeywords] = useState<string[]>([])
  const [provider, setProvider] = useState<AIProvider>("openai")

  const handleGenerate = async () => {
    if (!topic) {
        toast.error("Please enter a topic first.")
        return
    }
    setLoading(true)
    setGeneratedContent("")
    setKeywords([])
    
    try {
      // 1. Generate Keywords
      const kwRes = await fetch("/api/ai/generate", {
        method: "POST",
        body: JSON.stringify({ type: "keywords", topic, provider }),
      })
      const kwData = await kwRes.json()
      
      if (kwData.error) {
        throw new Error(kwData.error)
      }
      
      if (kwData.result) {
          setKeywords(kwData.result)
          toast.success("Keywords generated successfully!")
      }

      // 2. Generate Content
      const prompt = `Write a comprehensive, SEO-optimized blog post about "${topic}". Use the following keywords: ${kwData.result?.join(", ")}. Format in Markdown.`
      const textRes = await fetch("/api/ai/generate", {
        method: "POST",
        body: JSON.stringify({ type: "text", prompt, provider }),
      })
      const textData = await textRes.json()
      
      if (textData.error) {
        throw new Error(textData.error)
      }

      if (textData.result) {
          setGeneratedContent(textData.result)
          toast.success("Content generated successfully!")
      }

    } catch (error: unknown) {
      console.error("Generation failed", error)
      const errorMessage = error instanceof Error ? error.message : "Failed to generate content. Please check your API keys."
      toast.error(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-2 space-y-4">
        <Card className="border-ink-black/5 shadow-sm overflow-hidden">
            <CardHeader className="bg-porcelain border-b border-ink-black/5">
                <CardTitle className="text-ink-black font-bold">AI Content Generator</CardTitle>
                <CardDescription>Enter a topic to generate an SEO-optimized article.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
                <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-48">
                            <Label htmlFor="provider" className="text-xs font-bold uppercase tracking-wider text-ink-black/50">AI Provider</Label>
                            <Select value={provider} onValueChange={(val: AIProvider) => setProvider(val)}>
                                <SelectTrigger id="provider" className="border-ink-black/10 focus:ring-pine-teal">
                                    <SelectValue placeholder="Select Provider" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="openai">OpenAI (GPT-4)</SelectItem>
                                    <SelectItem value="cerebras">Cerebras (Llama 3.1)</SelectItem>
                                    <SelectItem value="mistral">Mistral (Large)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex-1 space-y-2">
                            <Label htmlFor="topic" className="text-xs font-bold uppercase tracking-wider text-ink-black/50">Topic</Label>
                            <div className="flex gap-2">
                                <Input 
                                    id="topic" 
                                    placeholder="e.g., Luxury Houseboat Experiences in Kerala" 
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                    className="border-ink-black/10 focus:border-pine-teal focus:ring-1 focus:ring-pine-teal"
                                />
                                <Button onClick={handleGenerate} disabled={loading} className="bg-pine-teal text-white hover:bg-pine-teal/90 transition-all font-bold">
                                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
                                    Generate
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="space-y-2">
                    <Label htmlFor="content" className="text-xs font-bold uppercase tracking-wider text-ink-black/50">Generated Content (Markdown)</Label>
                    <Textarea 
                        id="content" 
                        className="min-h-[400px] font-mono text-sm border-ink-black/10 focus:border-pine-teal focus:ring-1 focus:ring-pine-teal bg-porcelain/30" 
                        value={generatedContent}
                        onChange={(e) => setGeneratedContent(e.target.value)}
                    />
                </div>
            </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <Card className="border-ink-black/5 shadow-sm overflow-hidden">
            <CardHeader className="bg-porcelain border-b border-ink-black/5">
                <CardTitle className="text-ink-black font-bold">SEO Intelligence</CardTitle>
                <CardDescription>AI-extracted keywords for this topic.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <div className="flex flex-wrap gap-2">
                    {keywords.length > 0 ? (
                        keywords.map((kw, i) => (
                            <Badge key={i} variant="secondary" className="bg-pine-teal/10 text-pine-teal border-pine-teal/20 font-bold uppercase text-[10px] tracking-tight hover:bg-pine-teal hover:text-white transition-colors">{kw}</Badge>
                        ))
                    ) : (
                        <p className="text-sm text-muted-foreground italic">No keywords generated yet.</p>
                    )}
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
