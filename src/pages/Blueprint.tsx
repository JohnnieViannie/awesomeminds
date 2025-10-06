import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Ear, Lightbulb, Rocket, ArrowRight, Check } from "lucide-react";

export default function Blueprint() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              The Blueprint
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              How We Do It
            </p>
            <p className="text-2xl font-semibold opacity-95">
              "We don't complicate things. We simplify + amplify."
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xl text-muted-foreground leading-relaxed">
                At AMS, every solution begins with listening to young people, understanding context, and uncovering the real challenge. From there, we design, implement, and scale mental health solutions that are practical, relatable, and sustainable.
              </p>
            </div>

            {/* The 3 Steps */}
            <div className="space-y-16">
              {/* Step 1 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                    <div>
                      <h2 className="font-heading font-bold text-2xl">Reason for Action</h2>
                      <p className="text-accent font-semibold">Listen & Stabilize</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    We start by understanding the "why" behind the challenge.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>Deep engagement with youth to hear their needs, experiences, and aspirations</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>Consultation with funders, NGOs, and service providers to understand goals</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>Mapping gaps and opportunities in existing systems</p>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary/50 border border-primary/20 rounded-2xl p-8 text-center">
                  <Ear className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-3">Deep Listening</h3>
                  <p className="text-muted-foreground">Understanding the context is often half the solution</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                    <div>
                      <h2 className="font-heading font-bold text-2xl">Battle Plan</h2>
                      <p className="text-accent font-semibold">Co-Design & Rethink</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Together, we design tailored solutions that fit real lives.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p>Co-creation workshops with youth, communities, and stakeholders</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p>Human-centered design thinking to build contextually relevant solutions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p>Prototype testing and iterative improvement for maximum impact</p>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary/50 border border-accent/20 rounded-2xl p-8 text-center lg:order-1">
                  <Lightbulb className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-3">Co-Creation</h3>
                  <p className="text-muted-foreground">Solutions may be closer than they seem, but need the right perspective</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                    <div>
                      <h2 className="font-heading font-bold text-2xl">Implementation</h2>
                      <p className="text-accent font-semibold">Accelerate & Scale</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    We bring ideas to life step by step, scaling what works.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>Full project management for NGOs, startups, and funders</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>Monitoring, evaluation, and learning to measure both return on impact and investment</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <p>Continuous refinement to ensure sustainable, equitable mental health outcomes</p>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary/50 border border-primary/20 rounded-2xl p-8 text-center">
                  <Rocket className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-xl mb-3">Scale & Grow</h3>
                  <p className="text-muted-foreground">We test, refine, and scale step by step for sustainable impact</p>
                </div>
              </div>
            </div>

            {/* Why It Works */}
            <div className="mt-20 bg-card border border-border rounded-2xl p-8">
              <h2 className="font-heading font-bold text-3xl text-center mb-8">💡 Why It Works</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2 text-primary">Youth-Centered</h3>
                  <p className="text-sm text-muted-foreground">Solutions grounded in lived experience</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2 text-accent">Customizable</h3>
                  <p className="text-sm text-muted-foreground">No one-size-fits-all; each project adapts to context</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2 text-primary">Integrated</h3>
                  <p className="text-sm text-muted-foreground">Combines physical spaces, digital tools, and systemic projects</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-2 text-accent">Impact-Driven</h3>
                  <p className="text-sm text-muted-foreground">Every intervention is measurable, meaningful, and scalable</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg">
                See How We Make Mental Health Simple
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