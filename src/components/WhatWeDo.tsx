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
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            The Playground <span className="text-accent"> —What We Do</span>
          </h2>
          <p className="font-body text-lg sm:text-xl text-muted-foreground mb-3 sm:mb-4 max-w-3xl mx-auto">
            Where Mental Health Meets Real Life
          </p>
          <p className="font-body text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-3xl mx-auto">
            We dare to make complex mental health simple. And you?
          </p>
          <p className="font-body text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
            At AMS, we help young people heal, learn, connect, and thrive. Our spaces, programs, and digital tools are designed to make mental health fun, stigma-free, and practical, fitting naturally into everyday life.
          </p>
          <div className="bg-primary/10 border border-primary/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 inline-block mx-4">
            <p className="font-heading text-sm sm:text-base lg:text-lg font-semibold text-primary">
              "Your challenge. Our design. Scalable solution — impact always."
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="group overflow-hidden border-0 shadow-soft hover:shadow-strong transition-smooth bg-card/80 backdrop-blur-sm">
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary text-primary-foreground p-2 sm:p-3 rounded-full">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-accent font-medium mb-3 text-sm sm:text-base">{service.subtitle}</p>
                  <p className="font-body text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-1.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="bg-accent/10 border border-accent/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">
              Our Aim
            </h3>
            <p className="font-body text-sm sm:text-base lg:text-lg text-muted-foreground">
              Every young person has access to better mental health support that fits their life, sparks real-world connection, and inspires healing, learning, and thriving.
            </p>
          </div>
        </div>

        <div className="text-center px-4">
          <Button variant="accent" size="lg" className="w-full sm:w-auto">
            Explore All Our Spaces & Tools
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}