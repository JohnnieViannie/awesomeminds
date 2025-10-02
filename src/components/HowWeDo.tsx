import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Ear, Lightbulb, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Listen & Stabilize",
    subtitle: "Reason for Action",
    description: "We hear the \"why\" behind every challenge.",
    details: [
      "Deep engagement with youth to understand needs",
      "Consultation with funders & service providers", 
      "Mapping gaps and opportunities in existing systems"
    ],
    icon: Ear,
    color: "primary"
  },
  {
    number: "2", 
    title: "Co-Design & Rethink",
    subtitle: "Battle Plan",
    description: "We craft solutions that fit real lives, never one-size-fits-all.",
    details: [
      "Co-creation workshops with youth & communities",
      "Human-centered design thinking",
      "Prototype testing and iterative improvement"
    ],
    icon: Lightbulb,
    color: "accent"
  },
  {
    number: "3",
    title: "Accelerate & Scale", 
    subtitle: "Implementation",
    description: "We grow what works, so youth get support and funders see real impact.",
    details: [
      "Full project management for organizations",
      "Monitoring, evaluation & learning systems",
      "Continuous refinement for sustainability"
    ],
    icon: Rocket,
    color: "primary"
  }
];

export function HowWeDo() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            The Blueprint <span className="text-accent">(How We Do It)</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
            We don't complicate things. We simplify + amplify.
          </p>
          <div className="bg-accent/10 border border-accent/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 inline-block mx-4">
            <p className="font-heading text-sm sm:text-base lg:text-lg font-semibold text-accent">
              "We dare to make complex things simple — every project customized, measurable, and scalable."
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isAccent = step.color === "accent";
            
            return (
              <Card key={index} className={`relative overflow-hidden border-0 shadow-soft hover:shadow-strong transition-smooth ${
                isAccent ? 'bg-gradient-accent text-accent-foreground' : 'bg-gradient-primary text-primary-foreground'
              }`}>
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6 ${
                    isAccent ? 'bg-accent-foreground/20' : 'bg-primary-foreground/20'
                  }`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  
                  <div className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 ${
                    isAccent ? 'text-accent-foreground/30' : 'text-primary-foreground/30'
                  }`}>
                    {step.number}
                  </div>
                  
                  <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl mb-2">
                    {step.title}
                  </h3>
                  <p className={`font-medium mb-3 sm:mb-4 text-sm sm:text-base ${
                    isAccent ? 'text-accent-foreground/80' : 'text-primary-foreground/80'
                  }`}>
                    {step.subtitle}
                  </p>
                  <p className={`font-body mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base ${
                    isAccent ? 'text-accent-foreground/90' : 'text-primary-foreground/90'
                  }`}>
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2 sm:space-y-3 text-left">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className={`flex items-start gap-2 sm:gap-3 text-xs sm:text-sm ${
                        isAccent ? 'text-accent-foreground/80' : 'text-primary-foreground/80'
                      }`}>
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${
                          isAccent ? 'bg-accent-foreground/60' : 'bg-primary-foreground/60'
                        }`} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-muted/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
          <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl text-foreground mb-6 sm:mb-8">
            Why It Works
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {[
              { title: "Youth-Centered", desc: "Solutions grounded in lived experience" },
              { title: "Customizable", desc: "No one-size-fits-all; each project adapts to context" },
              { title: "Integrated", desc: "Combines physical spaces, digital tools, and systemic projects" },
              { title: "Impact-Driven", desc: "Every intervention is measurable, meaningful, and scalable" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <h4 className="font-heading font-semibold text-base sm:text-lg text-primary mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <Button variant="default" size="lg" className="w-full sm:w-auto">
            See How We Make Mental Health Simple
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}