import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PatternBar({ className, full }: { className?: string; full?: boolean }) {
  return <div className={cn(full ? "pattern-bar-full" : "pattern-bar", className)} />;
}

/* Tiles modelled on the pattern band under the logo text: plum, blue, coral, pink */
const logoTiles = [
  <div className="w-full h-full bg-plum">
    <div className="w-full h-1/2 bg-cobalt [clip-path:polygon(0_0,100%_0,50%_100%)]" />
  </div>,
  <div className="w-full h-full bg-pink grid place-items-center">
    <div className="w-3/5 h-3/5 rounded-full border-[3px] border-white" />
  </div>,
  <div className="w-full h-full bauhaus-stripes" />,
  <div className="w-full h-full bg-plum overflow-hidden">
    <div className="w-[200%] h-[200%] rounded-full bauhaus-rings-blue" />
  </div>,
  <div className="w-full h-full bauhaus-stripes-coral" />,
  <div className="w-full h-full bg-cobalt">
    <div className="w-full h-full bg-plum [clip-path:polygon(50%_20%,100%_100%,0_100%)]" />
  </div>,
  <div className="w-full h-full bg-white overflow-hidden">
    <div className="w-full h-full rounded-full bg-accent translate-y-1/2" />
  </div>,
  <div className="w-full h-full bg-plum grid place-items-center">
    <div className="w-1/2 h-1/2 rounded-full bg-pink" />
  </div>,
];

export function LogoStrip({
  className,
  tile = "w-8 h-8",
  count = 60,
}: {
  className?: string;
  tile?: string;
  count?: number;
}) {
  return (
    <div aria-hidden className={cn("flex overflow-hidden", className)}>
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className={cn("shrink-0", tile)}>
          {logoTiles[i % logoTiles.length]}
        </div>
      ))}
    </div>
  );
}

/* 3x2 Bauhaus tile composition in the logo colours */
const gridTiles = [
  <div className="w-full h-full bg-plum rounded-tl-full" />,
  <div className="w-full h-full bg-pink grid place-items-center">
    <div className="w-3/5 h-3/5 rounded-full bg-accent" />
  </div>,
  <div className="w-full h-full bauhaus-stripes" />,
  <div className="w-full h-full bg-white overflow-hidden">
    <div className="w-full h-full rounded-full bg-cobalt translate-y-1/2" />
  </div>,
  <div className="w-full h-full bg-pink">
    <div className="w-full h-full bg-plum [clip-path:polygon(50%_10%,100%_100%,0_100%)]" />
  </div>,
  <div className="w-full h-full bauhaus-rings rounded-br-full" />,
];

/* Corner rings for inner-page heroes, with an optional tile grid. Parent needs `relative overflow-hidden`. */
export function PageHeroDecor({ grid = false }: { grid?: boolean }) {
  return (
    <>
      <div
        aria-hidden
        className="absolute -top-20 -right-20 w-48 h-48 sm:w-72 sm:h-72 rounded-full bauhaus-rings"
      />
      {grid && (
        <div aria-hidden className="hidden xl:grid grid-cols-3 w-36 absolute bottom-0 right-10">
          {gridTiles.map((tile, i) => (
            <div key={i} className="aspect-square">
              {tile}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export function MarkerTitle({
  children,
  as: Tag = "h2",
  className,
  accent,
}: {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  accent?: string;
}) {
  return (
    <Tag className={cn("font-heading font-black text-3xl sm:text-4xl md:text-5xl leading-tight text-primary", className)}>
      {accent ? (
        <>
          {children}{" "}
          <span className="relative inline-block">
            {accent}
            <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2 sm:h-3 bg-accent -rotate-2" />
          </span>
        </>
      ) : (
        children
      )}
    </Tag>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", className)}>
      <div className="container mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

export function TextLink({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  const classes = cn(
    "inline-flex items-center font-heading font-semibold text-primary hover:text-plum transition-colors",
    className
  );
  if (to.startsWith("mailto:") || to.startsWith("http") || to.startsWith("#")) {
    return (
      <a href={to} className={classes}>
        → {children}
      </a>
    );
  }
  return (
    <Link to={to} className={classes}>
      → {children}
    </Link>
  );
}

export function PhotoCollage({
  images,
  className,
}: {
  images: { src: string; alt: string }[];
  className?: string;
}) {
  const a = images[0];
  const b = images[1];
  const c = images[2];
  return (
    <div className={cn("relative w-full max-w-md mx-auto", className)}>
      <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
        {a && (
          <div className="relative col-span-2">
            <div className="absolute inset-0 bg-primary rounded-3xl translate-x-3 translate-y-3" />
            <img
              src={a.src}
              alt={a.alt}
              className="relative z-10 w-full h-56 sm:h-72 object-cover rounded-3xl border-4 border-white shadow-strong"
            />
          </div>
        )}
        {b && (
          <div className="relative">
            <div className="absolute inset-0 bg-plum rounded-3xl -translate-x-2 -translate-y-2" />
            <img
              src={b.src}
              alt={b.alt}
              className="relative z-10 w-full h-36 sm:h-44 object-cover rounded-3xl border-4 border-white shadow-medium"
            />
          </div>
        )}
        {c && (
          <div className="relative">
            <div className="absolute inset-0 bg-accent rounded-3xl translate-x-2 translate-y-2" />
            <img
              src={c.src}
              alt={c.alt}
              className="relative z-10 w-full h-36 sm:h-44 object-cover rounded-3xl border-4 border-white shadow-medium"
            />
          </div>
        )}
      </div>
    </div>
  );
}
