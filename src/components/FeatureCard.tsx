
import React from 'react';
import { cn } from "@/lib/utils";
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon: Icon, title, description, className }: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        "p-6 rounded-2xl glass-card hover-scale transition-all duration-300",
        className
      )}
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
        <Icon className="text-primary h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
