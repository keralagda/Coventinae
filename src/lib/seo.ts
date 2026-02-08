export interface SEOAuditResult {
  score: number
  issues: string[]
  details: {
    wordCount: number
    keywordDensity: number
    hasTitle: boolean
    hasMeta: boolean
  }
}

export function analyzeSEO(content: string, keyword: string): SEOAuditResult {
  const issues: string[] = []
  let score = 100

  // 1. Word Count
  const wordCount = content.split(/\s+/).length
  if (wordCount < 300) {
    score -= 10
    issues.push("Content is too short (under 300 words).")
  }

  // 2. Keyword Density
  const regex = new RegExp(keyword, "gi")
  const matchCount = (content.match(regex) || []).length
  const density = matchCount / wordCount
  
  if (matchCount === 0) {
      score -= 20
      issues.push(`Keyword "${keyword}" not found in content.`)
  } else if (density > 0.05) {
      score -= 10
      issues.push("Keyword stuffing detected (> 5% density).")
  }

  // 3. Structure (Basic checks)
  const hasTitle = content.includes("# ")
  if (!hasTitle) {
      score -= 10
      issues.push("Missing H1 title tag (Markdown '#').")
  }

  return {
    score: Math.max(0, score),
    issues,
    details: {
      wordCount,
      keywordDensity: parseFloat((density * 100).toFixed(2)),
      hasTitle,
      hasMeta: true // Placeholder
    }
  }
}
