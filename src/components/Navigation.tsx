import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "School of Connection", path: "/school" },
  { name: "Impact", path: "/impact" },
  { name: "Gallery", path: "/gallery" },
  { name: "Be Awesome Space", path: "/be-awesome" },
  { name: "Ideas", path: "/ideas" },
];

/* Bauhaus marker shown next to menu items: cycles circle, square, triangle */
const markers = [
  "rounded-full bg-accent",
  "bg-cobalt",
  "bg-plum [clip-path:polygon(50%_0,100%_100%,0_100%)]",
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-4 sm:top-5 left-0 right-0 z-50 px-4 sm:px-8 lg:px-10">
      <div
        className={cn(
          "max-w-[1400px] mx-auto pl-2 pr-2 sm:pl-3 rounded-full bg-white transition-shadow duration-300",
          isScrolled || isOpen ? "shadow-strong" : "shadow-medium"
        )}
      >
        <div className="flex items-center justify-between h-14 gap-4">
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/logo.png" alt="Awesome Mind Speaks Logo" className="h-10 w-auto" />
            <span className="hidden sm:block font-heading font-bold text-lg tracking-tight text-foreground">
              Awesome Mind Speaks
            </span>
          </Link>

          <div className="hidden xl:flex items-center gap-7">
            {navItems.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "font-body text-[15px] transition-colors whitespace-nowrap",
                    active ? "font-bold text-primary" : "font-medium text-foreground hover:text-plum"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="hidden sm:inline-flex rounded-full h-10 px-6 bg-primary text-primary-foreground hover:bg-primary-dark font-body font-semibold text-[15px]"
            >
              <Link to="/get-involved">Get Involved</Link>
            </Button>
            <button
              className="xl:hidden w-10 h-10 rounded-full bg-primary text-primary-foreground grid place-items-center"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden max-w-[1400px] mx-auto mt-2 rounded-3xl bg-white shadow-strong overflow-hidden animate-fade-up">
          <div className="p-3 space-y-1">
            {[...navItems, { name: "Get Involved", path: "/get-involved" }].map((item, i) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-2xl font-heading font-semibold",
                    active ? "bg-secondary text-primary" : "text-foreground/80 hover:bg-secondary"
                  )}
                >
                  <span aria-hidden className={cn("w-3 h-3 shrink-0", markers[i % markers.length])} />
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div aria-hidden className="pattern-bar-full" />
        </div>
      )}
    </nav>
  );
}
