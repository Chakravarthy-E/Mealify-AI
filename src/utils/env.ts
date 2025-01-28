import { z } from "zod";

const envSchema = z.object({
  GEMINI_API: z.string(),
  DATABASE_URL: z.string(),
  INGREDIENTS_API_KEY: z.string(),
});

export const env = envSchema.parse(process.env);
