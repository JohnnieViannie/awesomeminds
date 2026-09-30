import { MarkerTitle, PatternBar } from "@/components/layout/ui";
import { Reveal } from "@/components/layout/motion";
import { cn } from "@/lib/utils";

const partnerLogos = [
  { src: "/eu.png", alt: "European Union" },
  { src: "/bn.jpg", alt: "Partner logo" },
  { src: "/jas.PNG", alt: "Partner logo" },
  { src: "/sweden.png", alt: "Sweden" },
  { src: "/chedu.jpg", alt: "Partner logo" },
  { src: "/iris.jpg", alt: "Iris" },
  { src: "/Covalogo.png", alt: "Cova" },
  { src: "/hand.png", alt: "Partner logo" },
  { src: "/lilac.png", alt: "Partner logo" },
  { src: "/vodologo.png", alt: "Vodo Art Society and Lab" },
  { src: "/motiv.png", alt: "Motiv" },
  { src: "/policy.png", alt: "Partner logo" },
  { src: "/dhlab.png", alt: "DH Lab" },
  { src: "/RHU.jpg", alt: "Reach A Hand Uganda" },
  { src: "/download.png", alt: "Partner logo" },
  { src: "/phau.png", alt: "PHAU" },
  { src: "/naguru.jpeg", alt: "Naguru" },
  { src: "/6.png", alt: "Partner logo" },
  { src: "/maxima.jpg", alt: "Maxima" },
];

function LogoRow({ logos, reverse }: { logos: typeof partnerLogos; reverse?: boolean }) {
  const loop = [...logos, ...logos];
  return (
    <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
      <div
        className={cn(
          "flex items-center gap-10 sm:gap-14 w-max py-3 animate-marquee hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {loop.map((logo, i) => (
          <div key={logo.src + i} className="group shrink-0 w-28 sm:w-36 flex items-center justify-center py-2">
            <img
              src={logo.src}
              alt={i < logos.length ? logo.alt : ""}
              className="w-auto h-auto max-w-full max-h-16 sm:max-h-20 object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* Heading and intro, then two rows of logos drifting in opposite directions */
export function Partners() {
  const half = Math.ceil(partnerLogos.length / 2);
  return (
    <section id="partners" aria-label="Our partners" className="relative overflow-hidden bg-white">
      <div aria-hidden className="absolute -left-16 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-pink/50" />
      <div aria-hidden className="absolute -right-10 top-10 w-20 h-20 bg-cobalt/15 [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
      <div className="relative container mx-auto px-6 pt-12 sm:pt-16 text-center max-w-3xl">
        <Reveal>
          <p className="font-heading font-bold uppercase tracking-widest text-sm text-accent mb-3">Who we build with</p>
          <MarkerTitle className="mb-4 text-primary" accent="Partners">
            Our
          </MarkerTitle>
          <PatternBar className="mx-auto mb-6" />
          <p className="text-lg text-muted-foreground">
            We work with schools, NGOs, creative hubs, startups, and youth networks to scale real-life solutions and foster systemic change, amplifying youth impact while strengthening mental health ecosystems.
          </p>
        </Reveal>
      </div>
      <div className="relative py-8 sm:py-10 space-y-1">
        <LogoRow logos={partnerLogos.slice(0, half)} />
        <LogoRow logos={partnerLogos.slice(half)} reverse />
      </div>
    </section>
  );
}
