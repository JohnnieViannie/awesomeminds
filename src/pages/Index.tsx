import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { WhatWeDo } from "@/components/WhatWeDo";
import { HowWeDo } from "@/components/HowWeDo";
import { Expertise } from "@/components/Expertise";
import { Impact } from "@/components/Impact";
import { JoinTheCrew } from "@/components/JoinTheCrew";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      <HeroSection />
      <WhatWeDo />
      <HowWeDo />
      <Expertise />
      <Impact />
      <JoinTheCrew />
      <Footer />
    </div>
  );
};

export default Index;
