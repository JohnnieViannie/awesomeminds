import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Heart, Lightbulb, BarChart3, Globe, GraduationCap, DollarSign, ArrowRight, Users, Palette, Gamepad2 } from "lucide-react";
import wellnessCafeImage from "@/assets/wellness-cafe.jpg";

export default function Superpower() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Our Superpower
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              We dare to make complex mental health simple. And we do it through expertise that works for real people, in real life.
            </p>
          </div>
        </div>
      </section>

      {/* The Constant Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">The Constant is the Young People</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
              At AMS, young people are at the heart of everything we do — and the Wellness Café is where it all begins.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our café is more than a space — it's a safe, lifestyle-integrated hub where youth can connect, create, play, and explore their mental health in ways that feel natural. Here, we listen deeply, understand needs, and design solutions that truly fit young lives.
                </p>

                <h3 className="font-heading font-semibold text-xl mb-4">Activities include:</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Peer sessions and mentorship circles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Palette className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Creativity and art workshops</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Community events and wellness challenges</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gamepad2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-sm">Games and interactive learning</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  We also work with professional care providers to guide and support youth in need, while helping these providers find meaningful work that strengthens youth wellbeing.
                </p>

                <p className="text-muted-foreground">
                  Through this constant connection with young people, we also partner with funders, donors, and aspiring mental health leaders — turning ideas and resources into real, measurable impact, cutting through the noise, and focusing on what matters most.
                </p>
              </div>
              <div className="relative">
                <img 
                  src={wellnessCafeImage} 
                  alt="Wellness Café showing youth engaged in activities"
                  className="w-full h-auto rounded-2xl shadow-medium object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Solve Problems */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">How We Solve Problems</h2>
            <p className="text-lg text-muted-foreground mb-8">Wondering if we're cut out for your challenge?</p>
            
            <div className="bg-card border border-border rounded-2xl p-8 text-left max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                Sometimes mental health challenges feel big, messy, or complex. The first step is listening — understanding the context is often half the solution.
              </p>
              <p className="text-lg mb-6">
                Then we co-create: thinking together to find solutions that may be closer than they seem, but just need the right perspective and expertise to bring them into view.
              </p>
              <p className="text-lg">
                We test, refine, and scale step by step — ensuring solutions are practical, equitable, and sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Expertise Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">Our Key Expertise Areas</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Human-Centered Design */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-shadow">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-3">Human-Centered Design & Innovation</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Co-creation workshops, design sprints, prototyping, and ideation</p>
                  <p>• Tailored mental health solutions that stick</p>
                </div>
              </div>

              {/* Project Management */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-shadow">
                <BarChart3 className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-3">Project Design, Management & Consultancy</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• End-to-end project management: from concept to implementation and scaling</p>
                  <p>• Monitoring, evaluation & learning to ensure measurable outcomes</p>
                  <p>• Advisory support for NGOs, startups, and funders to maximize impact</p>
                </div>
              </div>

              {/* Digital Programming */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-shadow">
                <Globe className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-3">Digital Programming & Platforms</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• KeepChatty and other digital tools to reach youth wherever they are</p>
                  <p>• Personalized mental wellness support and online peer communities</p>
                </div>
              </div>

              {/* Capacity Building */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-shadow">
                <GraduationCap className="w-12 h-12 text-accent mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-3">Capacity Building & Leadership</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Training youth leaders, NGOs, and mental health professionals</p>
                  <p>• Hands-on incubation and mentorship to grow sustainable initiatives</p>
                </div>
              </div>

              {/* Finance & Control Systems */}
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-medium transition-shadow md:col-span-2 lg:col-span-1">
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-heading font-semibold text-xl mb-3">Finance & Control Systems</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• Transparent budgeting, reporting, and governance for projects</p>
                  <p>• Ensuring sustainability and accountability for funders and grantees</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button size="lg">
                See How Our Expertise Brings Mental Health Solutions to Life
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