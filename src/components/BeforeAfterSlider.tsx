
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className
}: BeforeAfterSliderProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(percent, 0), 100));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const percent = (x / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(percent, 0), 100));
    }
  };

  return (
    <div 
      className={cn(
        "relative w-full h-[400px] overflow-hidden rounded-2xl", 
        className
      )}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Full width) */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={beforeImage} 
          alt="Before" 
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {beforeLabel}
        </span>
      </div>
      
      {/* After Image (Variable width based on slider) */}
      <div 
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img 
          src={afterImage} 
          alt="After" 
          className="absolute h-full object-cover right-0"
          style={{ width: `${100 * (100 / sliderPosition)}%` }}
        />
        <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
          {afterLabel}
        </span>
      </div>
      
      {/* Slider Control */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="w-6 h-1 bg-primary rounded-full transform rotate-90"></div>
          <div className="absolute w-6 h-1 bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
