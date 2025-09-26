import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-youth-community.jpg";
import { ArrowRight, Users, Heart, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/30" />
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        <div className="flex-1 text-center lg:text-left lg:pr-12 z-10">
          <div className="mb-6 flex items-center justify-center lg:justify-start gap-2 text-primary-foreground/80">
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium uppercase tracking-wider">Mental Health Innovation Studio</span>
          </div>
          
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 leading-tight">
            We dare to make{" "}
            <span className="text-accent bg-accent/10 px-3 py-1 rounded-lg inline-block">
              complex things simple
            </span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl text-primary-foreground/90 mb-4 leading-relaxed max-w-2xl">
            Welcome to <strong>Awesome Mind Speaks (AMS)</strong> — Uganda's first mental health innovation studio.
          </p>
          
          <p className="font-body text-lg text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl">
            We turn complex challenges into simple, practical, and scalable solutions for youth, NGOs, startups, and funders.
          </p>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 mb-8 max-w-2xl">
            <p className="font-heading text-xl md:text-2xl font-semibold text-accent mb-2">
              "Mental health made simple, scalable, and real."
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="hero" size="xl" className="group">
              Explore Our World
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button variant="outline_accent" size="xl">
              Join the Crew
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-sm">5000+ Youth Reached</span>
            </div>
            <div className="w-px h-6 bg-primary-foreground/30" />
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" />
              <span className="text-sm">20+ Partnerships</span>
            </div>
          </div>
        </div>
        
        <div className="flex-1 mt-12 lg:mt-0">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-accent rounded-3xl opacity-20 blur-2xl" />
            <img 
              src={heroImage} 
              alt="Youth community engaged in mental health activities"
              className="relative w-full h-auto rounded-3xl shadow-strong object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}