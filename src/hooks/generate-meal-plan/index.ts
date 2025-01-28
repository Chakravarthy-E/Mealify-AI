"use client";

import { useMutation } from "@tanstack/react-query";

export function useGenerateMealPlan() {
  return useMutation({
    mutationKey: ["recipe"],
    mutationFn: async ({ preferences }: { preferences: string[] }) => {
      if (!preferences.length) {
        throw new Error("Please select at least one ingredient.");
      }

      const response = await fetch("/api/meal-plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ preferences }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate meal plan. Please try again.");
      }

      return response.json();
    },
  });
}
