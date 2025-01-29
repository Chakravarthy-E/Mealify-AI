"use client";

import { useState } from "react";
import ReactMarkDown from "react-markdown";
import remarkGfm from "remark-gfm";
import IngredientsSelector from "@/components/global/ingredients-selector";
import PreferencesSelector from "@/components/global/preferences-selector";
import { Button } from "@/components/ui/button";
import { useGenerateRecipe } from "@/hooks/generate-recipe";

export default function Home() {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [preferences, setPreferences] = useState<string[]>([]);
  const {
    mutate: generateRecipe,
    data,
    isPending,
    error,
  } = useGenerateRecipe();

  const handleGenerateRecipe = () => {
    generateRecipe({ ingredients: ingredients, preferences: preferences });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 font-outfit">
      <h1 className="text-2xl font-bold text-center font-outfit">
        Personalized Recipe Generator
      </h1>

      <div className="space-y-4">
        <IngredientsSelector onIngredientsChange={setIngredients} />
        <PreferencesSelector onPreferencesChange={setPreferences} />
      </div>

      <div className="flex justify-center">
        <Button
          onClick={handleGenerateRecipe}
          disabled={isPending}
          className="px-6 py-3 font-nunito"
        >
          {isPending ? "Loading..." : "Generate Recipe"}
        </Button>
      </div>

      {error && (
        <div className="mt-4 text-red-600 text-center">{error.message}</div>
      )}

      {error && <p style={{ color: "red" }}>{error.message}</p>}
      {data && (
        <ReactMarkDown remarkPlugins={[remarkGfm]}>{data.recipe}</ReactMarkDown>
      )}
    </div>
  );
}
