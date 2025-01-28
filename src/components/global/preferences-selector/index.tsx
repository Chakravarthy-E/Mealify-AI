"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const PREFERENCES = [
  "Vegetarian",
  "Vegan",
  "Gluten-Free",
  "Dairy-Free",
  "Low-Carb",
  "Keto",
  "Paleo",
  "Spicy",
];

function PreferencesSelector({
  onPreferencesChange,
}: {
  onPreferencesChange: (preferences: string[]) => void;
}) {
  const [selectedPreferences, setSelectedPreferences] = useState<string[]>([]);

  const handlePreferenceChange = (preference: string, checked: boolean) => {
    const newPreferences = checked
      ? [...selectedPreferences, preference]
      : selectedPreferences.filter((item) => item !== preference);
    setSelectedPreferences(newPreferences);
    onPreferencesChange(newPreferences);
  };
  return (
    <div className="space-y-2">
      <h3 className="font-semibold">Dietary Preferences</h3>
      {PREFERENCES.map((preference) => (
        <div key={preference} className="flex space-x-3">
          <Checkbox
            id={preference}
            checked={selectedPreferences.includes(preference)}
            onCheckedChange={(checked) =>
              handlePreferenceChange(preference, !!checked)
            }
          />
          <Label htmlFor={preference}>{preference}</Label>
        </div>
      ))}
    </div>
  );
}

export default PreferencesSelector;
