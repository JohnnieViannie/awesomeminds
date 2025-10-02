import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import wellnessCafeImage from "@/assets/wellness-cafe.jpg";
import keepChattyImage from "@/assets/keepchatty-app.jpg";
import amsStudioImage from "@/assets/ams-studio.jpg";
import { Coffee, MessageSquare, Users, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Awe-some Café & Creative Hub",
    subtitle: "A lifestyle-integrated, safe space",
    description: "to hang out, explore art, dance, play, eat healthy, and join workshops",
    image: wellnessCafeImage,
    icon: Coffee,
    features: [
      "Peer sessions, creativity challenges, and community events that don't scream 'mental health support'",
      "Engage all five senses while connecting with others and learning about your wellbeing"
    ]
  },
  {
    title: "KeepChatty Digital Platform",
    subtitle: "Safe, stigma-free online space",
    description: "Chat with peers or mental health professionals in a safe, stigma-free online space",
    image: keepChattyImage,
    icon: MessageSquare,
    features: [
      "Personalized tools, tips, and guidance for coping, self-care, and wellbeing",
      "Access support anytime, anywhere — all from your phone"
    ]
  },
  {
    title: "Youth Programs & Engagement",
    subtitle: "School and community sessions",
    description: "that make mental health relatable, interactive, and practical",
    image: amsStudioImage,
    icon: Users,
    features: [
      "Peer groups, mentorship, and games to help you practice self-care and build resilience",
      "Learn life skills and mental wellness through hands-on, fun experiences"
    ]
  }
];

export function WhatWeDo() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            The Playground <span className="text-accent"> —What We Do</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Where Mental Health Meets Real Life
          </p>
          <p className="font-body text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            We dare to make complex mental health simple. And you?
          </p>
          <p className="font-body text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            At AMS, we help young people heal, learn, connect, and thrive. Our spaces, programs, and digital tools are designed to make mental health fun, stigma-free, and practical, fitting naturally into everyday life.
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
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mb-16">
          <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-4">
              Our Aim
            </h3>
            <p className="font-body text-lg text-muted-foreground">
              Every young person has access to better mental health support that fits their life, sparks real-world connection, and inspires healing, learning, and thriving.
            </p>
          </div>
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