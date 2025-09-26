import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import wellnessCafeImage from "@/assets/wellness-cafe.jpg";
import keepChattyImage from "@/assets/keepchatty-app.jpg";
import amsStudioImage from "@/assets/ams-studio.jpg";
import { Coffee, MessageSquare, Lightbulb, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Wellness Café",
    subtitle: "A stigma-free, lifestyle-driven hub",
    description: "For youth to connect, talk, and recharge in a safe, creative environment.",
    image: wellnessCafeImage,
    icon: Coffee,
    features: [
      "Peer sessions & mentorship circles",
      "Art & creativity workshops", 
      "Community events & wellness challenges",
      "All five senses wellbeing approach"
    ]
  },
  {
    title: "AMS Studio",
    subtitle: "Consultancy + innovation space",
    description: "For NGOs, funders, startups, and businesses to design and scale bold mental health projects.",
    image: amsStudioImage,
    icon: Lightbulb,
    features: [
      "Human-centered design workshops",
      "Project management & consultancy",
      "Incubation & innovation support",
      "Finance & control systems"
    ]
  },
  {
    title: "KeepChatty",
    subtitle: "Digital mental health platform",
    description: "Co-created with youth (13–30), making personalized support cool, relatable, and accessible.",
    image: keepChattyImage,
    icon: MessageSquare,
    features: [
      "Chat with peers & professionals",
      "Personalized tips & guidance",
      "Accessible anytime, anywhere",
      "Youth-friendly & stigma-free"
    ]
  }
];

export function WhatWeDo() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            The Playground <span className="text-accent">(What We Do)</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            This is where mental health meets lifestyle, innovation, and impact.
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-2xl p-6 inline-block">
            <p className="font-heading text-lg font-semibold text-primary">
              "Your challenge. Our design. Scalable solution — impact always."
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-smooth bg-card/80 backdrop-blur-sm">
                <div className="relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-3 rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent font-medium mb-3">{service.subtitle}</p>
                  <p className="font-body text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="accent" size="lg">
            Explore All Our Spaces & Tools
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}