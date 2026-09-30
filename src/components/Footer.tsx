import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { LogoStrip, PatternBar } from "@/components/layout/ui";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const explore = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "The School of Connection", href: "/school" },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Be Awesome Space", href: "/be-awesome" },
  { label: "Ideas, Stories & Learning", href: "/ideas" },
  { label: "Get Involved", href: "/get-involved" },
];

const workWithUs = [
  { label: "Partner With Us", href: "/get-involved" },
  { label: "Hire Us", href: "/get-involved" },
  { label: "Support Our Work", href: "/get-involved" },
  { label: "Create With Us", href: "/get-involved" },
  { label: "Fund Be Awesome Space", href: "/be-awesome" },
];

const policies = [
  { label: "Safeguarding", href: "/safeguarding" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Code of Conduct", href: "/code-of-conduct" },
  { label: "Volunteer Role Description", href: "/volunteer" },
];

const connect = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <img src="/logo.png" alt="Awesome Mind Speaks Logo" className="h-24 w-auto mb-6 bg-white rounded-full p-1" />
            <p className="font-heading font-bold text-lg mb-3">Connection shouldn't be left to chance.</p>
            <p className="font-body text-primary-foreground/80 text-sm leading-relaxed">
              Awesome Mind Speaks designs experiences, spaces and opportunities for young people aged 15–35 in Uganda to connect, build relationships, belong and improve their wellbeing.
            </p>
            <p className="font-heading font-semibold mt-4">Connection by Design.</p>
            <p className="font-body text-sm mt-6 italic text-primary-foreground/80">
              The School of Connection
            </p>
            <p className="font-body text-sm text-primary-foreground/70">
              Learning how to create spaces, experiences and communities where people connect, participate and belong.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {explore.map((link) => (
                <li key={link.href + link.label}>
                  <Link to={link.href} className="font-body text-primary-foreground/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Work with us</h4>
            <ul className="space-y-3">
              {workWithUs.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="font-body text-primary-foreground/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Connect</h4>
            <div className="flex gap-3 mb-8">
              {connect.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <h4 className="font-heading font-semibold text-lg mb-3">Newsletter</h4>
            <NewsletterSignup tone="dark" className="mb-6" />
            <h4 className="font-heading font-semibold text-lg mb-6">Policies</h4>
            <ul className="space-y-3">
              {policies.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="font-body text-primary-foreground/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <LogoStrip tile="w-6 h-6" />
        </div>
        <p className="font-heading font-semibold mt-8 text-center">
          Every young person carries a spark. We exist to help that spark come alive with others.
        </p>
      </div>

      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <p className="font-body text-primary-foreground/60 text-sm text-center">
            © 2026 Awesome Mind Speaks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
