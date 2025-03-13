
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends ButtonProps {
  gradientFrom?: string;
  gradientTo?: string;
  hoverScale?: boolean;
}

const GradientButton = ({
  children,
  className,
  gradientFrom = 'from-primary',
  gradientTo = 'to-purple-600',
  hoverScale = true,
  ...props
}: GradientButtonProps) => {
  return (
    <Button
      className={cn(
        `relative overflow-hidden bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white border-0`,
        hoverScale && 'hover:scale-105 transition-transform duration-300',
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Button>
  );
};

export default GradientButton;
