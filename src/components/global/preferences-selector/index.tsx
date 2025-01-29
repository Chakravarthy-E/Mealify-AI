"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { PREFERENCES } from "@/constants/preferences";
import React, { useState } from "react";

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
      <h3 className="font-semibold font-outfit">Dietary Preferences</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {PREFERENCES.map((preference) => (
          <div key={preference} className="flex space-x-3 font-liter">
            <Checkbox
              id={preference}
              checked={selectedPreferences.includes(preference)}
              onCheckedChange={(checked) =>
                handlePreferenceChange(preference, !!checked)
              }
            />
            <Label
              htmlFor={preference}
              className="cursor-pointer hover:text-muted-foreground hover:underline"
            >
              {preference}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PreferencesSelector;
