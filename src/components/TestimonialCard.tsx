
import React from 'react';
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  imageSrc?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  imageSrc,
  className
}: TestimonialCardProps) => {
  return (
    <div className={cn(
      "glass-card p-6 rounded-2xl hover-scale",
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="mb-4 text-4xl text-primary">"</div>
        <p className="flex-grow mb-6 italic text-foreground">{quote}</p>
        
        <div className="flex items-center">
          {imageSrc && (
            <div className="mr-4">
              <img 
                src={imageSrc} 
                alt={author} 
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <h4 className="font-medium">{author}</h4>
            {role && <p className="text-sm text-muted-foreground">{role}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
