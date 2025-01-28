"use client";

import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const INGREDIENTS = [
  "Chicken",
  "Beef",
  "Fish",
  "Eggs",
  "Milk",
  "Cheese",
  "Tomatoes",
  "Onions",
  "Garlic",
  "Potatoes",
  "Rice",
  "Pasta",
  "Spinach",
  "Carrots",
  "Broccoli",
  "Bell Peppers",
  "Olive Oil",
  "Butter",
  "Flour",
  "Sugar",
];

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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {INGREDIENTS.map((ingredient) => (
          <div key={ingredient} className="flex items-center space-x-2">
            <Checkbox
              id={ingredient}
              checked={selectedIngredients.includes(ingredient)}
              onCheckedChange={(checked) =>
                handleIngredientChange(ingredient, !!checked)
              }
            />
            <Label htmlFor={ingredient}>{ingredient}</Label>
          </div>
        ))}
      </div>
    </div>
  );
}
