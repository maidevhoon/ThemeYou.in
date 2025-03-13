
import React from 'react';
import { Button } from '@/components/ui/button';
import { Scan } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FloatingActionButton = () => {
  const { toast } = useToast();

  const handleScanClick = () => {
    toast({
      title: "Scan My Room",
      description: "This feature would activate your camera to scan your room and suggest color themes.",
    });
  };

  return (
    <Button
      onClick={handleScanClick}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg animate-float p-0 flex items-center justify-center"
    >
      <Scan className="h-6 w-6" />
    </Button>
  );
};

export default FloatingActionButton;
