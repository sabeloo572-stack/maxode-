import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize only if key is present to prevent crashes in dev without key
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateEventConcept = async (userQuery: string): Promise<string> => {
  if (!ai) return "AI services are currently unavailable. Please contact our team directly.";

  try {
    const model = ai.models.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: `You are 'Max', the AI Event Specialist for Maxode Events. 
      Your tone is professional, creative, and enthusiastic.
      You help potential clients brainstorm event concepts based on their inputs.
      
      Maxode Events specializes in: Marquees, Stage, Sound/AV, Decor, Furniture, and Planning.
      Do NOT mention construction or pipelines. Only events.
      
      When a user asks for ideas, provide a brief, structured concept including:
      1. A Theme Name
      2. Suggested Atmosphere
      3. Recommended Maxode Services (e.g., "Use our Glass Marquee and Amber Lighting")
      
      Keep the response under 150 words. Format with simple Markdown.`
    });

    const response = await model.generateContent({
      contents: userQuery,
    });
    
    return response.text || "I couldn't generate a concept right now. Let's chat with a human planner!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the creative server. Please try again later.";
  }
};