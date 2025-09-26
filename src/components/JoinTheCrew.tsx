import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Handshake, 
  Heart, 
  Users,
  ArrowRight,
  Sparkles,
  Coffee,
  MessageSquare,
  Lightbulb
} from "lucide-react";

const involvement = [
  {
    title: "Partner with us",
    description: "NGOs, funders, startups, businesses — let's co-create.",
    icon: Handshake,
    color: "primary",
    action: "Start Partnership"
  },
  {
    title: "Support our work", 
    description: "Help launch the Wellness Café, scale KeepChatty, and grow AMS Studio.",
    icon: Heart,
    color: "accent",
    action: "Support AMS"
  },
  {
    title: "Volunteer / Intern",
    description: "Be part of Uganda's coolest mental health movement.",
    icon: Users,
    color: "primary",
    action: "Join Team"
  }
];

const highlights = [
  {
    icon: Coffee,
    title: "Wellness Café",
    description: "Launch stigma-free spaces for youth connection"
  },
  {
    icon: MessageSquare,
    title: "KeepChatty Platform", 
    description: "Scale digital mental health support"
  },
  {
    icon: Lightbulb,
    title: "AMS Studio",
    description: "Co-design bold mental health projects"
  }
];

export function JoinTheCrew() {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-accent/20" />
      
      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="font-body text-primary-foreground/80 font-medium uppercase tracking-wider text-sm">
              Be Part of the Movement
            </span>
          </div>
          
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
            Join the Crew <span className="text-accent">(Get Involved)</span>
          </h2>
          <p className="font-body text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            AMS is a movement — and there's space for you. Together, we're building Uganda's first integrated mental health ecosystem.
          </p>
        </div>

        {/* Movement Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl mb-4">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-primary-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ways to Get Involved */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {involvement.map((way, index) => {
            const Icon = way.icon;
            const isAccent = way.color === "accent";
            
            return (
              <Card key={index} className="border-0 shadow-strong bg-card/90 backdrop-blur-sm hover:bg-card transition-smooth group">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    isAccent ? 'bg-accent/10' : 'bg-primary/10'
                  }`}>
                    <Icon className={`w-8 h-8 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
                    {way.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground mb-8 leading-relaxed">
                    {way.description}
                  </p>
                  
                  <Button 
                    variant={isAccent ? "accent" : "default"}
                    className="w-full group"
                  >
                    {way.action}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-3xl p-8 md:p-12 mb-8">
            <h3 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Ready to Make Mental Health Simple, Scalable, and Real?
            </h3>
            <p className="font-body text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Whether you're a funder looking for measurable impact, an NGO seeking innovation, or a young person ready to be part of change — let's build something awesome together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" className="group">
                Let's Build Something Awesome
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline_accent" size="xl">
                Explore Opportunities
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <p className="text-primary-foreground/60 text-sm">
            Contact us: hello@awesomemind.org | +256 XXX XXX XXX
          </p>
        </div>
      </div>
    </section>
  );
}