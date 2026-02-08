import { NextRequest, NextResponse } from "next/server"
import { generateText, generateSEOKeywords } from "@/lib/ai"
import { auth } from "@/auth"

export async function POST(req: NextRequest) {
  const session = await auth()
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const { type, prompt, topic, provider } = await req.json()

    if (type === "text") {
        const text = await generateText(prompt, provider)
        return NextResponse.json({ result: text })
    } else if (type === "keywords") {
        const keywords = await generateSEOKeywords(topic, provider)
        return NextResponse.json({ result: keywords })
    }

    return NextResponse.json({ error: "Invalid request type" }, { status: 400 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
