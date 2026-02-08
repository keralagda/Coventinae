"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { AlertCircle, CheckCircle } from "lucide-react"
import { analyzeSEO, SEOAuditResult } from "@/lib/seo"

export function SEOAnalyzer() {
  const [content, setContent] = useState("")
  const [keyword, setKeyword] = useState("")
  const [result, setResult] = useState<SEOAuditResult | null>(null)

  const handleAnalyze = () => {
    if (!content || !keyword) return
    const audit = analyzeSEO(content, keyword)
    setResult(audit)
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="col-span-1">
        <CardHeader>
            <CardTitle>Content Input</CardTitle>
            <CardDescription>Paste content to audit against a target keyword.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="keyword">Target Keyword</Label>
                <Input 
                    id="keyword" 
                    placeholder="e.g., Kerala Houseboat" 
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="seo-content">Content</Label>
                <Textarea 
                    id="seo-content" 
                    className="min-h-[300px]" 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <Button onClick={handleAnalyze} className="w-full">Analyze SEO</Button>
        </CardContent>
      </Card>

      <Card className="col-span-1">
        <CardHeader>
            <CardTitle>Audit Report</CardTitle>
            <CardDescription>Real-time scoring algorithm.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            {result ? (
                <>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>SEO Score</span>
                            <span className="font-bold">{result.score}/100</span>
                        </div>
                        <Progress value={result.score} className={result.score > 80 ? "bg-green-100" : "bg-red-100"} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-lg border p-3">
                            <div className="text-xs text-muted-foreground">Word Count</div>
                            <div className="text-2xl font-bold">{result.details.wordCount}</div>
                        </div>
                        <div className="rounded-lg border p-3">
                            <div className="text-xs text-muted-foreground">Keyword Density</div>
                            <div className="text-2xl font-bold">{result.details.keywordDensity}%</div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Issues Found</Label>
                        {result.issues.length === 0 ? (
                            <div className="flex items-center gap-2 text-green-600">
                                <CheckCircle className="h-4 w-4" />
                                <span className="text-sm">No critical issues found. Great job!</span>
                            </div>
                        ) : (
                            <ul className="space-y-2">
                                {result.issues.map((issue, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm text-red-600">
                                        <AlertCircle className="h-4 w-4" />
                                        {issue}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </>
            ) : (
                <div className="flex h-full items-center justify-center text-muted-foreground">
                    Run analysis to see results.
                </div>
            )}
        </CardContent>
      </Card>
    </div>
  )
}
