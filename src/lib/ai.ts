import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "dummy-key",
});

export async function generateText(prompt: string, model: string = "gpt-4-turbo") {
  if (!process.env.OPENAI_API_KEY) {
      throw new Error("OPENAI_API_KEY is not defined in environment variables.")
  }

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: model,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("AI Generation Error:", error);
    throw new Error("Failed to generate content.");
  }
}

export async function generateSEOKeywords(topic: string) {
    const prompt = `Generate a list of high-ranking SEO keywords for the topic: "${topic}". Return the result as a JSON array of strings.`
    const result = await generateText(prompt);
    try {
        // Simple heuristic to extract JSON if the model returns text around it
        const jsonMatch = result?.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        return [];
    } catch (e) {
        return [];
    }
}
