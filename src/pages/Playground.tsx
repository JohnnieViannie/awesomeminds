import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Palette, Smartphone, Users, ArrowRight } from "lucide-react";
import wellnessCafeImage from "@/assets/wellness-cafe.jpg";
import keepChattyImage from "@/assets/keepchatty-app.jpg";

export default function Playground() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              The Playground
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              We dare to make complex mental health simple. And you?
            </p>
            <p className="text-lg opacity-80">
              This is where mental health meets lifestyle, innovation, and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                At AMS, we help young people heal, learn, connect, and thrive. Our spaces, programs, and digital tools are designed to make mental health practical, fun, and stigma-free — integrated into your life, in ways that feel natural:
              </p>
            </div>

            {/* The 3 Big Moves */}
            <div className="space-y-20">
              {/* Wellness Café */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Palette className="w-8 h-8 text-accent" />
                    <h2 className="font-heading font-bold text-3xl">Wellness Café & Creative Hub</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    A stigma-free, lifestyle-driven hub for youth to connect, talk, and recharge.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <p>A safe, lifestyle-integrated space to hang out, explore art, play, eat healthy, and join workshops</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <p>Peer sessions, creativity challenges, and community events that don't scream "mental health support"</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <p>A place to feel supported, connect with others, and engage all five senses in your wellbeing</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src={wellnessCafeImage} 
                    alt="Wellness Café showing youth in a comfortable, creative space"
                    className="w-full h-auto rounded-2xl shadow-medium object-cover"
                  />
                </div>
              </div>

              {/* KeepChatty */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center gap-3 mb-6">
                    <Smartphone className="w-8 h-8 text-primary" />
                    <h2 className="font-heading font-bold text-3xl">KeepChatty Digital Platform</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    A digital mental health platform co-created with youth (13–30), making personalized support cool, relatable, and accessible.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p>Chat with peers or professionals in a safe, stigma-free online space</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p>Personalized tips, tools, and guidance for wellbeing, coping, and self-care</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <p>Access mental health support anytime, anywhere, right from your phone</p>
                    </div>
                  </div>
                </div>
                <div className="relative lg:order-1">
                  <img 
                    src={keepChattyImage} 
                    alt="KeepChatty app interface showing chat and support features"
                    className="w-full h-auto rounded-2xl shadow-medium object-cover"
                  />
                </div>
              </div>

              {/* Youth Programs */}
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Users className="w-8 h-8 text-accent" />
                    <h2 className="font-heading font-bold text-3xl">Youth Programs & Engagement</h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Consultancy + innovation space for NGOs, funders, startups, and businesses to design and scale bold mental health projects.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <p>School and community sessions that make mental health relatable, practical, and interactive</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <p>Peer groups, mentorship, and games to help you practice self-care and build resilience</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <p>Learn life skills and mental wellness through fun, hands-on experiences</p>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary/50 border border-primary/20 rounded-2xl p-8">
                  <h3 className="font-heading font-semibold text-2xl mb-4 text-center">Our Goal</h3>
                  <p className="text-lg text-center text-primary font-medium">
                    Every young person has access to better mental health support that fits their life, sparks real-world connection, and inspires healing, learning, and thriving using all five senses.
                  </p>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-20 text-center">
              <div className="bg-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
                <p className="text-2xl font-heading font-semibold text-primary mb-6">
                  "Your challenge. Our design. Scalable solution — impact always."
                </p>
                <Button size="lg">
                  Explore Our Spaces & Tools
                  <ArrowRight className="w-5 h-5" />
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
