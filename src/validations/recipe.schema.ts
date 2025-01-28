import { z } from "zod";

export const createRecipeSchema = z.object({
  title: z.string(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  image: z.string().optional(),
  dietType: z.string().optional(),
  calories: z.number().optional(),
});

export type createRecipeType = z.infer<typeof createRecipeSchema>;
