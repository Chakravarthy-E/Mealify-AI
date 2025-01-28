"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { INGREDIENTS } from "@/constants/ingredients";

export default function IngredientsSelector({
  onIngredientsChange,
}: {
  onIngredientsChange: (ingredients: string[]) => void;
}) {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  const handleIngredientChange = (ingredient: string, checked: boolean) => {
    const newIngredients = checked
      ? [...selectedIngredients, ingredient]
      : selectedIngredients.filter((item) => item !== ingredient);
    setSelectedIngredients(newIngredients);
    onIngredientsChange(newIngredients);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Select Ingredients</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {INGREDIENTS.map((ingredient) => (
          <div key={ingredient} className="flex items-center space-x-2">
            <Checkbox
              id={ingredient}
              checked={selectedIngredients.includes(ingredient)}
              onCheckedChange={(checked) =>
                handleIngredientChange(ingredient, !!checked)
              }
            />
            <Label
              htmlFor={ingredient}
              className="cursor-pointer hover:text-muted-foreground hover:underline"
            >
              {ingredient}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}
