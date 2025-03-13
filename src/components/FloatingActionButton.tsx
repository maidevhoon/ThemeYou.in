
import React from 'react';
import { Button } from '@/components/ui/button';
import { Scan, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FloatingActionButton = () => {
  const { toast } = useToast();

  const handleScanClick = () => {
    toast({
      title: "Scan My Room",
      description: "This feature would activate your camera to scan your room and suggest color themes.",
    });
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Theme You - Color Psychology for Your Space',
        text: 'Check out Theme You, an AI-powered color therapy experience for your living spaces!',
        url: window.location.href,
      })
      .then(() => {
        toast({
          title: "Shared successfully",
          description: "Thank you for sharing Theme You!",
        });
      })
      .catch((error) => {
        toast({
          title: "Sharing failed",
          description: "There was an error sharing the content.",
          variant: "destructive",
        });
        console.error('Error sharing:', error);
      });
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied to clipboard",
        description: "Share this link with your friends!",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3">
      <Button
        onClick={handleShareClick}
        className="rounded-full w-14 h-14 bg-secondary hover:bg-secondary/90 shadow-lg hover-lift p-0 flex items-center justify-center"
      >
        <Share2 className="h-6 w-6" />
      </Button>
      <Button
        onClick={handleScanClick}
        className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg animate-float p-0 flex items-center justify-center"
      >
        <Scan className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default FloatingActionButton;
