import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HandHeart, Users, Briefcase, Heart, ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              Join the Crew
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              AMS is a movement — and there's space for you
            </p>
            <p className="text-lg opacity-80">
              Let's build something awesome together
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved Options */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">How You Can Get Involved</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Partner with us */}
              <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-medium transition-shadow">
                <Briefcase className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="font-heading font-semibold text-xl mb-4">Partner with us</h3>
                <p className="text-muted-foreground mb-6">
                  NGOs, funders, startups, businesses — let's co-create solutions that help more young people access the mental health support they deserve.
                </p>
                <Button variant="outline">
                  Start Partnership
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Support our work */}
              <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-medium transition-shadow">
                <HandHeart className="w-16 h-16 text-accent mx-auto mb-6" />
                <h3 className="font-heading font-semibold text-xl mb-4">Support our work</h3>
                <p className="text-muted-foreground mb-6">
                  Help launch the Wellness Café, scale KeepChatty to reach millions of youth with stigma-free care, and grow AMS Studio.
                </p>
                <Button variant="outline">
                  Support Us
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              {/* Volunteer / Intern */}
              <div className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-medium transition-shadow">
                <Users className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="font-heading font-semibold text-xl mb-4">Volunteer / Intern</h3>
                <p className="text-muted-foreground mb-6">
                  Be part of Uganda's coolest mental health movement. Work with AMS Studio to co-design and manage projects that deliver real, lasting change.
                </p>
                <Button variant="outline">
                  Join the Team
                  <Users className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Let's Talk</h2>
              <p className="text-lg text-muted-foreground">
                Ready to make mental health simple, scalable, and real? Get in touch with us.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h3 className="font-heading font-semibold text-xl mb-6">Send us a message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name</label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name</label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Organization (Optional)</label>
                    <Input placeholder="Your organization" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">How can we help?</label>
                    <select className="w-full px-3 py-2 border border-border rounded-md bg-background">
                      <option>Partnership Opportunities</option>
                      <option>Support & Funding</option>
                      <option>Volunteer/Internship</option>
                      <option>Consultation Services</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project, organization, or how you'd like to get involved..."
                      rows={4}
                    />
                  </div>
                  <Button size="lg" className="w-full">
                    Let's Build Something Awesome
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-xl p-8">
                  <h3 className="font-heading font-semibold text-xl mb-6">Get in touch directly</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Email us</p>
                        <p className="text-muted-foreground">hello@awesomemindsspeaks.org</p>
                        <p className="text-muted-foreground">info@keepchatty.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Call us</p>
                        <p className="text-muted-foreground">+256 700 123 456</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Visit us</p>
                        <p className="text-muted-foreground">Kampala, Uganda</p>
                        <p className="text-sm text-muted-foreground">(Address provided upon appointment)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground rounded-xl p-8">
                  <h3 className="font-heading font-semibold text-xl mb-4">Our Promise</h3>
                  <p className="opacity-90 mb-4">
                    We dare to make complex things simple — every project customized, measurable, and scalable.
                  </p>
                  <div className="text-sm opacity-80">
                    <p>Response time: Within 24 hours</p>
                    <p>Initial consultation: Free</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-heading font-semibold text-lg mb-3">Follow our journey</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm">LinkedIn</Button>
                    <Button variant="outline" size="sm">Twitter</Button>
                    <Button variant="outline" size="sm">Instagram</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl mb-4">Stay in the loop with AMS</h2>
            <p className="mb-6 opacity-90">
              Get updates on our programs, impact stories, and opportunities to get involved in Uganda's mental health movement.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60"
              />
              <Button variant="outline_light">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}