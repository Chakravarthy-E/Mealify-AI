"use client";

import React, { useState } from "react";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import PreferencesSelector from "@/components/global/preferences-selector";
import { Button } from "@/components/ui/button";
import { useGenerateMealPlan } from "@/hooks/generate-meal-plan";

function MealPlan() {
  const [preferences, setPreferences] = useState<string[]>([]);

  const {
    mutate: generateMealPlan,
    data,
    isPending,
    error,
  } = useGenerateMealPlan();

  const handleGenerateMealPlan = () => {
    generateMealPlan({ preferences: preferences });
  };
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">
        Personalized Meal Plan Generator
      </h1>

      <div className="space-y-4">
        <PreferencesSelector onPreferencesChange={setPreferences} />
      </div>

      <div className="flex justify-center">
        <Button
          onClick={handleGenerateMealPlan}
          disabled={isPending}
          className="px-6 py-3"
        >
          {isPending ? "Loading..." : "Generate Meal Plan"}
        </Button>
      </div>

      {error && (
        <div className="mt-4 text-red-600 text-center">{error.message}</div>
      )}

      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {data && (
        <ReactMarkDown remarkPlugins={[remarkGfm]}>
          {data.mealPlan}
        </ReactMarkDown>
      )}
    </div>
  );
}

export default MealPlan;
