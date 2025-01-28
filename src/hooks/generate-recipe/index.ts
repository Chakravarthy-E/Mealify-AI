"use client";

import { useMutation } from "@tanstack/react-query";

export function useGenerateRecipe() {
  return useMutation({
    mutationKey: ["recipe"],
    mutationFn: async ({
      ingredients,
      preferences,
    }: {
      ingredients: string[];
      preferences?: string[];
    }) => {
      if (!ingredients.length) {
        throw new Error("Please select at least one ingredient.");
      }

      const response = await fetch("/api/generate-recipe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ingredients, preferences }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate recipe. Please try again.");
      }

      return response.json();
    },
  });
}
