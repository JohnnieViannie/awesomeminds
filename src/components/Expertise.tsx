import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BarChart3, 
  Globe, 
  GraduationCap, 
  DollarSign,
  ArrowRight,
  Heart,
  Sparkles
} from "lucide-react";

const expertiseAreas = [
  {
    title: "Human-Centered Design & Innovation",
    icon: Users,
    color: "primary",
    description: "Co-creation workshops, design sprints, prototyping, and ideation for tailored mental health solutions that stick.",
    features: [
      "Co-creation workshops & design sprints",
      "Tailored mental health solutions",
      "Prototyping & ideation sessions"
    ]
  },
  {
    title: "Project Design, Management & Consultancy", 
    icon: BarChart3,
    color: "accent",
    description: "End-to-end project management from concept to implementation and scaling with measurable outcomes.",
    features: [
      "End-to-end project management",
      "Monitoring, evaluation & learning",
      "Advisory support for maximum impact"
    ]
  },
  {
    title: "Digital Programming & Platforms",
    icon: Globe,
    color: "primary", 
    description: "KeepChatty and other digital tools to reach youth wherever they are with personalized support.",
    features: [
      "KeepChatty platform development",
      "Personalized mental wellness support",
      "Online peer communities"
    ]
  },
  {
    title: "Capacity Building & Leadership",
    icon: GraduationCap,
    color: "accent",
    description: "Training youth leaders, NGOs, and mental health professionals with hands-on incubation and mentorship.",
    features: [
      "Youth leadership training",
      "NGO capacity building",
      "Hands-on incubation & mentorship"
    ]
  },
  {
    title: "Finance & Control Systems",
    icon: DollarSign,
    color: "primary",
    description: "Transparent budgeting, reporting, and governance ensuring sustainability and accountability.",
    features: [
      "Transparent budgeting & reporting",
      "Governance systems",
      "Sustainability planning"
    ]
  }
];

export function Expertise() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-accent" />
            <span className="font-body text-accent font-medium uppercase tracking-wider text-sm">
              The Constant: Young People at Heart
            </span>
          </div>
          
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Our Superpower <span className="text-accent">(Expertise)</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            We dare to make complex mental health simple. And we do it through expertise that works for real people, in real life.
          </p>
        </div>

        {/* Youth-Centered Approach */}
        <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-3xl text-primary mb-4">
              The Constant is the Young People
            </h3>
            <p className="font-body text-lg text-muted-foreground max-w-4xl mx-auto">
              At AMS, young people are at the heart of everything we do — and the Wellness Café is where it all begins. 
              Our café is more than a space — it's a safe, lifestyle-integrated hub where youth can connect, create, play, 
              and explore their mental health in ways that feel natural.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Peer sessions and mentorship circles",
              "Creativity and art workshops", 
              "Community events and wellness challenges",
              "Games and interactive learning",
              "Lifestyle activities for wellbeing",
              "Professional care provider partnerships"
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-muted-foreground">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            const isAccent = area.color === "accent";
            
            return (
              <Card key={index} className="group border-0 shadow-soft hover:shadow-strong transition-smooth bg-card overflow-hidden">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${
                    isAccent ? 'bg-accent/10' : 'bg-primary/10'
                  }`}>
                    <Icon className={`w-7 h-7 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  
                  <h3 className="font-heading font-bold text-xl text-foreground mb-4 leading-tight">
                    {area.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {area.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                          isAccent ? 'bg-accent' : 'bg-primary'
                        }`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={isAccent ? "accent" : "default"} 
                    size="sm" 
                    className="w-full group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl">
            See How Our Expertise Brings Mental Health Solutions to Life
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}