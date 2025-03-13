
import React from 'react';
import { Camera, PaintBucket, Brain, Home } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: "Scan Your Space",
    description: "Take a photo of any room in your home using our app."
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description: "Our AI analyzes your space and your mood preferences."
  },
  {
    icon: PaintBucket,
    title: "Color Recommendations",
    description: "Receive personalized color palettes based on color psychology."
  },
  {
    icon: Home,
    title: "Transform Your Space",
    description: "Visualize the transformation and implement the changes."
  }
];

const HowItWorks = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">How Theme You Works</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Transform your space in four simple steps with our AI-powered color therapy platform
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-10 left-[calc(100%-1rem)] w-[calc(100%-2rem)] h-1 bg-primary/20 z-0"></div>
            )}
            <div className="glass-card p-6 relative z-10">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-center">{step.description}</p>
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
