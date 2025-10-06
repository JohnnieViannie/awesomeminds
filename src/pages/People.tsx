import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Lightbulb, ArrowRight } from "lucide-react";

export default function People() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 px-4">
              The People
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed px-4">
              Meet the minds, hearts, and hands behind AMS
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed px-4">
                At Awesome Mind Speaks (AMS), we are a collective of passionate young people, mental health professionals, creatives, and innovators dedicated to making mental health simple, relatable, and accessible for everyone.
              </p>
            </div>

            {/* Our Team */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 px-4">
                Our Team
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-shadow">
                  <Users className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-lg sm:text-xl mb-2">Youth Leaders</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Young changemakers driving innovation and leading peer-to-peer mental health initiatives
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-shadow">
                  <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-lg sm:text-xl mb-2">Mental Health Professionals</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Experienced counselors and therapists providing guidance and compassionate care
                  </p>
                </div>

                <div className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-medium transition-shadow sm:col-span-2 lg:col-span-1">
                  <Lightbulb className="w-12 h-12 sm:w-16 sm:h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-lg sm:text-xl mb-2">Designers & Innovators</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Creative minds co-designing solutions that are practical, relatable, and impactful
                  </p>
                </div>
              </div>
            </div>

            {/* Our Values */}
            <div className="mb-16 sm:mb-20">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 px-4">
                What Drives Us
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-secondary/50 border border-primary/20 rounded-xl p-6 sm:p-8">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl mb-3 text-primary">Youth-Centered</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Young people are at the heart of everything we do. Their voices, experiences, and needs guide our approach and solutions.
                  </p>
                </div>

                <div className="bg-secondary/50 border border-accent/20 rounded-xl p-6 sm:p-8">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl mb-3 text-accent">Human-Centered</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    We believe in co-creation, empathy, and designing solutions that fit real lives, not templates.
                  </p>
                </div>

                <div className="bg-secondary/50 border border-primary/20 rounded-xl p-6 sm:p-8">
                  <h3 className="font-heading font-semibold text-lg sm:text-xl mb-3 text-primary">Impact-Driven</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Every initiative is designed to be practical, measurable, and sustainable — creating lasting change for individuals and systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Join Us Section */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-10 lg:p-12 text-center">
              <h2 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6">
                Want to Be Part of the Crew?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Whether you're a young person passionate about mental health, a professional looking to contribute, or an innovator ready to co-create — there's a place for you at AMS.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Button variant="hero" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  Join the Crew
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <Button variant="outline_accent" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  Learn More About Us
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
