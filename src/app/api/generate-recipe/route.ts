import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { env } from "@/utils/env";

const genAI = new GoogleGenerativeAI(env.GEMINI_API!);

export async function POST(request: Request) {
  const { ingredients, preferences } = await request.json();

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = `Generate a recipe using these ingredients: ${ingredients.join(
    ", "
  )} that is ${preferences.join(", ")}`;

  try {
    const result = await model.generateContent(prompt);
    const recipe = result.response.text();
    return NextResponse.json({ recipe });
  } catch (error) {
    console.log(error);
  }
}
