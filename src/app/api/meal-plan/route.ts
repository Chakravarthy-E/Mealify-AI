import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { env } from "@/utils/env";

const genAI = new GoogleGenerativeAI(env.GEMINI_API!);

export async function POST(request: Request) {
  const { preferences } = await request.json();

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Generate a 7-day meal plan based on these preferences: ${preferences}.`;
  try {
    const result = await model.generateContent(prompt);
    const mealPlan = result.response.text();
    return NextResponse.json({ mealPlan });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to generate meal plan" },
      { status: 500 }
    );
  }
}
