
import React from 'react';
import Navbar from '@/components/Navbar';
import ColorDisplay from '@/components/ColorDisplay';
import FeatureCard from '@/components/FeatureCard';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import GradientButton from '@/components/GradientButton';
import HowItWorks from '@/components/HowItWorks';
import TestimonialCard from '@/components/TestimonialCard';
import FloatingActionButton from '@/components/FloatingActionButton';
import Footer from '@/components/Footer';
import { 
  Palette, 
  Brain, 
  LayoutDashboard, 
  Zap, 
  Droplet, 
  Scan, 
  ArrowRight,
  Heart
} from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FloatingActionButton />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient">Transform Your Space</span> with AI-Powered Color Therapy
              </h1>
              <p className="text-xl mb-8 text-muted-foreground">
                Discover scientifically-backed color palettes that enhance your mood, productivity, and wellbeing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton size="lg" className="text-md">
                  Scan My Room
                </GradientButton>
                <GradientButton size="lg" className="text-md" variant="outline" gradientFrom="from-theme-mint" gradientTo="to-theme-soft-blue">
                  Explore Color Palettes
                </GradientButton>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 -right-20 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-soft"></div>
              <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-300/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-soft animation-delay-2000"></div>
              
              <div className="glass-card p-4 rounded-2xl relative z-10 animate-float shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <img 
                      src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000" 
                      alt="Living room transformation" 
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=500" 
                      alt="Bedroom sample" 
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=500" 
                      alt="Kitchen sample" 
                      className="w-full h-32 object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="mt-4 bg-white/20 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Mood Enhancing Palette</h3>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">AI Generated</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded-full bg-theme-lavender"></div>
                    <div className="w-8 h-8 rounded-full bg-theme-mint"></div>
                    <div className="w-8 h-8 rounded-full bg-theme-soft-blue"></div>
                    <div className="w-8 h-8 rounded-full bg-theme-peach"></div>
                    <div className="w-8 h-8 rounded-full bg-theme-soft-pink"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-theme-lavender/20 to-theme-soft-blue/20 -z-10"></div>
      </section>
      
      {/* Color Therapy Section */}
      <section className="py-20 bg-gradient-to-b from-white to-theme-lavender/20 dark:from-theme-dark dark:to-theme-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Experience the Power of Color</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Colors affect your mood, productivity, and well-being. Discover palettes designed with color psychology principles.
            </p>
          </div>
          
          <ColorDisplay className="mb-12" />
          
          <div className="text-center">
            <p className="mb-6 italic text-muted-foreground">
              "Color is a power which directly influences the soul." - Wassily Kandinsky
            </p>
            <GradientButton>
              Explore All Color Moods <ArrowRight className="ml-2 h-4 w-4" />
            </GradientButton>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Theme You</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform offers unique features to transform your space with scientifically-backed color psychology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Brain}
              title="AI-Powered Analysis"
              description="Our advanced AI analyzes your space and recommends optimal color combinations based on your room's layout and lighting."
            />
            <FeatureCard 
              icon={Palette}
              title="Color Psychology"
              description="Scientifically-backed color recommendations to improve your mood, productivity, and overall well-being."
            />
            <FeatureCard 
              icon={LayoutDashboard}
              title="Visualization Tools"
              description="See how different color palettes transform your space before making any changes."
            />
            <FeatureCard 
              icon={Zap}
              title="Instant Results"
              description="Get instant color recommendations and visualizations with our fast and intuitive interface."
            />
            <FeatureCard 
              icon={Droplet}
              title="Personalized Palettes"
              description="Receive color palettes tailored to your preferences, style, and desired mood effects."
            />
            <FeatureCard 
              icon={Scan}
              title="Room Scanner"
              description="Simply scan your room with your phone camera to get started with personalized recommendations."
            />
          </div>
        </div>
      </section>
      
      {/* Before/After Section */}
      <section className="py-20 bg-gradient-to-b from-theme-mint/20 to-white dark:from-theme-dark/80 dark:to-theme-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See the Transformation</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Witness how our color recommendations can dramatically transform your space
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=1000" 
              afterImage="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000" 
              beforeLabel="Before Theme You"
              afterLabel="After Theme You"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <HowItWorks />
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-theme-soft-blue/20 dark:from-theme-dark dark:to-theme-dark/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover how Theme You has transformed spaces and lives
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Theme You completely transformed my home office. The colors they recommended have improved my productivity and mood while working."
              author="Sarah Johnson"
              role="Interior Designer"
            />
            <TestimonialCard 
              quote="I was skeptical about color therapy, but after using Theme You's recommendations in my bedroom, I've been sleeping better than ever."
              author="Michael Chen"
              role="Software Engineer"
            />
            <TestimonialCard 
              quote="As a therapist, I recommend Theme You to clients dealing with anxiety. The color palettes have made a noticeable difference in their home environments."
              author="Dr. Emily Rodriguez"
              role="Clinical Psychologist"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="get-started" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto glass-card p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Space?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Join thousands of users who have improved their wellbeing with Theme You's AI-powered color therapy
              </p>
              <GradientButton size="lg" className="text-md">
                Get Started for Free <Heart className="ml-2 h-4 w-4" />
              </GradientButton>
              <p className="mt-4 text-sm text-muted-foreground">
                No credit card required. Free 14-day trial.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
