import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  console.warn("NEXT_PUBLIC_GEMINI_API_KEY is not set. AI features may not work.");
}

export const ai = new GoogleGenAI({ apiKey: apiKey || "" });

export const SYSTEM_INSTRUCTION = `You are CivicGuide AI, a helpful and neutral civic assistant. 
Your goal is to help users navigate the election process, voting registration, and timelines.
Always provide accurate, non-partisan information.
If you are unsure of specific dates for a current year, refer the user to official sources like Vote.org or USA.gov.
Keep your tone encouraging and professional.
Use markdown for formatting.`;
