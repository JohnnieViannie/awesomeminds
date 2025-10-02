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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-accent/20" />
      
      <div className="relative container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            <span className="font-body text-primary-foreground/80 font-medium uppercase tracking-wider text-xs sm:text-sm">
              Be Part of the Movement
            </span>
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4 sm:mb-6">
            Join the Crew <span className="text-accent">(Get Involved)</span>
          </h2>
          <p className="font-body text-base sm:text-lg lg:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            AMS is a movement — and there's space for you. Together, we're building Uganda's first integrated mental health ecosystem.
          </p>
        </div>

        {/* Movement Highlights */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-primary-foreground/10 backdrop-blur-sm rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-base sm:text-lg text-primary-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-primary-foreground/80 text-xs sm:text-sm px-2">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ways to Get Involved */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {involvement.map((way, index) => {
            const Icon = way.icon;
            const isAccent = way.color === "accent";
            
            return (
              <Card key={index} className="border-0 shadow-strong bg-card/90 backdrop-blur-sm hover:bg-card transition-smooth group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 ${
                    isAccent ? 'bg-accent/10' : 'bg-primary/10'
                  }`}>
                    <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  
                  <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-foreground mb-3 sm:mb-4">
                    {way.title}
                  </h3>
                  
                  <p className="font-body text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                    {way.description}
                  </p>
                  
                  <Button 
                    variant={isAccent ? "accent" : "default"}
                    className="w-full group"
                  >
                    {way.action}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-6 sm:mb-8">
            <h3 className="font-heading font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-primary-foreground mb-4 sm:mb-6 px-4">
              Ready to Make Mental Health Simple, Scalable, and Real?
            </h3>
            <p className="font-body text-sm sm:text-base lg:text-lg text-primary-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Whether you're a funder looking for measurable impact, an NGO seeking innovation, or a young person ready to be part of change — let's build something awesome together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                Let's Build Something Awesome
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button variant="outline_accent" size="xl" className="w-full sm:w-auto">
                Explore Opportunities
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
          
          <p className="text-primary-foreground/60 text-xs sm:text-sm px-4">
            Contact us: hello@awesomemind.org | +256 XXX XXX XXX
          </p>
        </div>
      </div>
    </section>
  );
}
