import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Users, Target, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 flex items-center justify-center gap-2">
              <Heart className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium uppercase tracking-wider opacity-90">Who We Are</span>
            </div>
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              We're Awesome Mind Speaks (AMS)
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              A human-centered mental health studio in Uganda
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We mix youth, design, and innovation to turn tricky mental health challenges into real, practical solutions that:
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-card border border-border rounded-xl p-6">
                  <Heart className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-3">Help Young People</h3>
                  <p className="text-muted-foreground">Heal, connect, and thrive through accessible mental health support</p>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <Users className="w-12 h-12 text-accent mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-3">Support Organizations</h3>
                  <p className="text-muted-foreground">NGOs & startups to grow and innovate with evidence-based solutions</p>
                </div>
                
                <div className="bg-card border border-border rounded-xl p-6">
                  <Target className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-3">Show Real Impact</h3>
                  <p className="text-muted-foreground">Help funders see impact that actually counts and creates change</p>
                </div>
              </div>

              <div className="bg-secondary/50 border border-primary/20 rounded-2xl p-8 mb-12">
                <p className="text-xl text-center font-medium text-primary">
                  👉 Your studio. Your incubator. Your partner for mental health done differently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">Our Approach</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              At AMS, it's all about young people. Their needs, their stories, their reality.
            </p>

            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg leading-relaxed mb-8">
                We also team up with mental health providers to deliver compassionate care while creating meaningful work that strengthens youth wellbeing.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                  <h3 className="font-heading font-semibold text-xl mb-3">Listen & Stabilize</h3>
                  <p className="text-muted-foreground">We hear the "why" behind every challenge</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                  <h3 className="font-heading font-semibold text-xl mb-3">Co-Design & Rethink</h3>
                  <p className="text-muted-foreground">We craft solutions that fit real lives, never one-size-fits-all</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                  <h3 className="font-heading font-semibold text-xl mb-3">Accelerate & Scale</h3>
                  <p className="text-muted-foreground">We grow what works, so youth get support and funders see real impact</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 text-center">
                <p className="text-lg font-medium mb-4">
                  👉 Café. Digital platform. System-level project. One goal:
                </p>
                <p className="text-xl text-primary font-semibold">
                  Equitable mental health support that feels good to use, easy to access, and actually works.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}