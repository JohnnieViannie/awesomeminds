import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram,
  Heart,
  ArrowRight
} from "lucide-react";

const quickLinks = [
  { label: "Our Work", href: "#" },
  { label: "The Blueprint", href: "#" },
  { label: "Expertise", href: "#" },
  { label: "Impact Stories", href: "#" }
];

const services = [
  { label: "Wellness Café", href: "#" },
  { label: "AMS Studio", href: "#" },
  { label: "KeepChatty", href: "#" },
  { label: "Partnerships", href: "#" }
];

const involvement = [
  { label: "Partner with Us", href: "#" },
  { label: "Support Our Work", href: "#" },
  { label: "Volunteer/Intern", href: "#" },
  { label: "Share Your Story", href: "#" }
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }, 
  { icon: Instagram, href: "#", label: "Instagram" }
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">AMS</h3>
                <p className="text-primary-foreground/80 text-sm">Awesome Mind Speaks</p>
              </div>
            </div>
            
            <p className="font-body text-primary-foreground/80 mb-6 leading-relaxed">
              Uganda's first mental health innovation studio. Making complex challenges simple, scalable, and real.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>hello@awesomemind.org</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>+256 XXX XXX XXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="font-body text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href}
                    className="font-body text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Get Involved</h4>
            <ul className="space-y-3 mb-8">
              {involvement.map((way, index) => (
                <li key={index}>
                  <a 
                    href={way.href}
                    className="font-body text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {way.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-primary-foreground/20 mt-16 pt-12">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="font-heading font-bold text-2xl mb-4">
              Stay in the Loop with AMS
            </h4>
            <p className="font-body text-primary-foreground/80 mb-8">
              Get updates on our latest programs, impact stories, and opportunities to join the movement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                placeholder="Your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="accent" className="shrink-0">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-primary-foreground/60 text-sm text-center md:text-left">
              © 2024 Awesome Mind Speaks (AMS). All rights reserved. Made with ❤️ in Uganda.
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          
          <div className="text-center mt-4 pt-4 border-t border-primary-foreground/10">
            <p className="font-heading font-medium text-accent text-sm">
              "Your challenge → Our design → Scalable solution → Impact always."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}