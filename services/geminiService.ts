
import { GoogleGenAI } from "@google/genai";

const CV_CONTEXT = `
You are the AI Assistant for Joel Mathew's professional portfolio. 
Joel is an Operations Management specialist currently pursuing a Master in Management at emlyon business school.
His key strengths:
- 45 months experience in Operations (KSA)
- Managed $30M Oil & Gas turnarounds with 2000+ staff
- Expertise in Primavera P6, Power BI, SAP, and SQL
- Lean Six Sigma Green Belt
- Fluent in English (C2), Beginner in French (B2)
- Black Belt in Kung Fu (shows discipline)

Answer questions about Joel professionally and concisely. If you don't know something from the CV, suggest contacting him directly at joel.mathew@edu.em-lyon.com.
`;

export async function askCareerAssistant(question: string) {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp', // Fast and reliable for text
      contents: question,
      config: {
        systemInstruction: CV_CONTEXT,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "I'm sorry, I couldn't process that. Please contact Joel directly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The career assistant is currently unavailable. Please try again later or reach out to Joel via email.";
  }
}
