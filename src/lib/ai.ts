import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "dummy-key",
});

const cerebras = new OpenAI({
    apiKey: process.env.CEREBRAS_API_KEY || "dummy-key",
    baseURL: "https://api.cerebras.ai/v1",
});

const mistral = new OpenAI({
    apiKey: process.env.MISTRAL_API_KEY || "dummy-key",
    baseURL: "https://api.mistral.ai/v1",
});

export type AIProvider = 'openai' | 'cerebras' | 'mistral';

export async function generateText(
    prompt: string, 
    provider: AIProvider = 'openai',
    model?: string
) {
    let client: OpenAI;
    let defaultModel: string;

    switch (provider) {
        case 'cerebras':
            client = cerebras;
            defaultModel = "llama3.1-70b"; // Default Cerebras model
            break;
        case 'mistral':
            client = mistral;
            defaultModel = "mistral-large-latest";
            break;
        default:
            client = openai;
            defaultModel = "gpt-4-turbo";
    }

    const selectedModel = model || defaultModel;

    try {
        const completion = await client.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: selectedModel,
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error(`AI Generation Error (${provider}):`, error);
        throw new Error(`Failed to generate content with ${provider}.`);
    }
}

export async function generateSEOKeywords(topic: string, provider: AIProvider = 'openai') {
    const prompt = `Generate a list of high-ranking SEO keywords for the topic: "${topic}". Return the result as a JSON array of strings.`
    const result = await generateText(prompt, provider);
    try {
        const jsonMatch = result?.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        return [];
    } catch (_e) {
        return [];
    }
}
