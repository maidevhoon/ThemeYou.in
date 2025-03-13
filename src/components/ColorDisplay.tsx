
import React from 'react';
import { cn } from "@/lib/utils";

interface ColorSwatchProps {
  color: string;
  name: string;
  mood: string;
  className?: string;
}

export const ColorSwatch = ({ color, name, mood, className }: ColorSwatchProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center p-4 rounded-xl glass-card hover-scale cursor-pointer",
        className
      )}
    >
      <div 
        className="w-20 h-20 rounded-full mb-3"
        style={{ backgroundColor: color }}
      />
      <h3 className="font-medium text-lg">{name}</h3>
      <p className="text-sm text-muted-foreground">{mood}</p>
    </div>
  );
};

interface ColorDisplayProps {
  className?: string;
}

const ColorDisplay = ({ className }: ColorDisplayProps) => {
  const colorSchemes = [
    { color: '#E5DEFF', name: 'Lavender Dream', mood: 'Calm & Peaceful' },
    { color: '#F2FCE2', name: 'Mint Refresh', mood: 'Rejuvenating' },
    { color: '#D3E4FD', name: 'Sky Serenity', mood: 'Focused & Clear' },
    { color: '#FDE1D3', name: 'Peach Harmony', mood: 'Warm & Inviting' },
    { color: '#FFDEE2', name: 'Rose Embrace', mood: 'Nurturing' },
  ];

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {colorSchemes.map((scheme) => (
          <ColorSwatch
            key={scheme.name}
            color={scheme.color}
            name={scheme.name}
            mood={scheme.mood}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorDisplay;
