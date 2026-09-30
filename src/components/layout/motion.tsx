import { useEffect, useId, useRef, useState, type ReactNode, type RefObject } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

/* Moves from +distance to -distance px while the element travels up through the viewport */
function useScrollDrift(ref: RefObject<HTMLElement | null>, distance: number) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return useTransform(scrollYProgress, [0, 1], [distance, -distance]);
}

/* Fades and lifts its children into place each time they scroll into view,
   and keeps them drifting gently with the scroll while on screen */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  drift = 20,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  drift?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.25 });
  const enterY = useMotionValue(reduce ? 0 : y);
  const opacity = useMotionValue(reduce ? 1 : 0);
  const driftY = useScrollDrift(ref, reduce ? 0 : drift);
  const combinedY = useTransform(() => enterY.get() + driftY.get());

  useEffect(() => {
    if (reduce) return;
    const transition = { duration: 0.7, delay: inView ? delay : 0, ease: EASE };
    const moving = animate(enterY, inView ? 0 : y, transition);
    const fading = animate(opacity, inView ? 1 : 0, transition);
    return () => {
      moving.stop();
      fading.stop();
    };
  }, [inView, reduce, delay, y, enterY, opacity]);

  return (
    <motion.div ref={ref} data-reveal className={className} style={{ y: combinedY, opacity }}>
      {children}
    </motion.div>
  );
}

/* Counts from `from` up to `to` each time it scrolls into view */
export function CountUp({
  to,
  from = 0,
  duration = 1.8,
  delay = 0,
  prefix = "",
  suffix = "",
  separator = true,
  className,
}: {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : from);

  useEffect(() => {
    if (reduce) return;
    if (!inView) {
      setValue(from);
      return;
    }
    const controls = animate(from, to, {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, from, to, duration, delay]);

  const text = separator ? value.toLocaleString("en-US") : String(value);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  );
}

/* Any heading/paragraph/list item that isn't already animated fades up each time it scrolls into view */
const TEXT_SELECTOR = "h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption";
const TEXT_SKIP = "nav,footer,[data-reveal],[data-no-reveal],.animate-fade-up,[role=dialog],[role=menu],[data-radix-popper-content-wrapper],[data-sonner-toaster]";

export function TextReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        let i = 0;
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.intersectionRatio >= 0.15) {
            el.style.transitionDelay = `${Math.min(i++, 5) * 80}ms`;
            el.classList.add("text-reveal-in");
          } else if (!entry.isIntersecting) {
            // Only reset once fully off screen, so the 24px drop can't bounce it back in
            el.style.transitionDelay = "0ms";
            el.classList.remove("text-reveal-in");
          }
        }
      },
      { threshold: [0, 0.15], rootMargin: "0px 0px -40px 0px" }
    );

    const scan = () => {
      document.querySelectorAll<HTMLElement>(TEXT_SELECTOR).forEach((el) => {
        if (el.hasAttribute("data-text-reveal") || el.closest(TEXT_SKIP)) return;
        // A list item already fading up carries its paragraphs with it
        if (el.parentElement?.closest("[data-text-reveal]")) return;
        el.setAttribute("data-text-reveal", "");
        io.observe(el);
      });
    };

    let frame = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    scan();
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(frame);
      mo.disconnect();
      io.disconnect();
    };
  }, []);

  return null;
}

/* Capsules laid out upright in a 100x100 box, then tilted 45deg as a group; each shows its slice of the one photo */
const PILLS = [
  { x: 17, y: 22, h: 58 },
  { x: 39.5, y: 4, h: 54 },
  { x: 39.5, y: 60, h: 36 },
  { x: 62, y: 16, h: 31 },
  { x: 62, y: 49, h: 32 },
];
const PILL_W = 21;

export function PillMosaic({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const reduce = useReducedMotion();
  const id = useId().replace(/[^a-zA-Z0-9]/g, "");
  const ref = useRef<HTMLDivElement>(null);
  // SVG user units: neighbouring pills slide past each other as you scroll
  const up = useScrollDrift(ref, reduce ? 0 : 6);
  const down = useScrollDrift(ref, reduce ? 0 : -6);
  return (
    <div ref={ref} className={className}>
      <svg viewBox="0 0 100 100" role="img" aria-label={alt} className="w-full h-auto overflow-visible">
        <defs>
          {PILLS.map((p, i) => (
            <clipPath key={i} id={`${id}-pill-${i}`}>
              <rect x={p.x} y={p.y} width={PILL_W} height={p.h} rx={PILL_W / 2} transform="rotate(45 50 50)" />
            </clipPath>
          ))}
        </defs>
        {PILLS.map((_, i) => (
          <motion.g key={i} style={{ y: i % 2 ? down : up }}>
          <motion.g
            initial={reduce ? false : { opacity: 0, x: -8, y: 8 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.1 + i * 0.1, ease: EASE }}
          >
            <image
              href={src}
              x="0"
              y="0"
              width="100"
              height="100"
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${id}-pill-${i})`}
            />
          </motion.g>
          </motion.g>
        ))}
        {/* Floating dots in the brand colours */}
        <circle cx="10" cy="22" r="2" className="fill-pink" />
        <circle cx="97" cy="50" r="2.4" className="fill-accent" />
        <circle cx="8" cy="84" r="1.8" className="fill-cobalt" />
        <circle cx="88" cy="10" r="1.4" className="fill-plum" />
      </svg>
    </div>
  );
}

/* One large photo circle with two smaller ones orbiting it, over a fading halftone dot field */
export function CircleCluster({
  images,
  className,
}: {
  images: [{ src: string; alt: string }, { src: string; alt: string }, { src: string; alt: string }];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [main, right, left] = images;
  const ref = useRef<HTMLDivElement>(null);
  // Different speeds give the circles depth as the page scrolls
  const slow = useScrollDrift(ref, reduce ? 0 : 20);
  const fast = useScrollDrift(ref, reduce ? 0 : 60);
  const against = useScrollDrift(ref, reduce ? 0 : -40);
  const pop = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, scale: 0.7 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: false, amount: 0.3 },
    transition: { type: "spring" as const, stiffness: 180, damping: 18, delay },
  });
  const photo = "w-full h-full object-cover rounded-full";
  return (
    <div ref={ref} className={cn("relative aspect-square w-full", className)}>
      <div aria-hidden className="absolute inset-[0%_14%_10%_0%] halftone-dots" />
      <motion.div {...pop(0)} style={{ y: slow }} className="absolute left-[8%] top-[14%] w-[68%] aspect-square rounded-full shadow-strong">
        <img src={main.src} alt={main.alt} className={photo} />
      </motion.div>
      <motion.div {...pop(0.25)} style={{ y: against }} className="absolute right-0 top-[8%] w-[34%] aspect-square rounded-full border-4 border-white shadow-medium">
        <img src={right.src} alt={right.alt} className={photo} />
      </motion.div>
      <motion.div {...pop(0.4)} style={{ y: fast }} className="absolute left-0 bottom-[2%] w-[28%] aspect-square rounded-full border-4 border-white shadow-medium">
        <img src={left.src} alt={left.alt} className={photo} />
      </motion.div>
      <motion.span {...pop(0.5)} style={{ y: fast }} aria-hidden className="absolute left-[14%] top-[6%] w-[4%] aspect-square rounded-full bg-accent" />
      <motion.span {...pop(0.55)} style={{ y: against }} aria-hidden className="absolute right-[40%] top-[4%] w-[4%] aspect-square rounded-full border-2 border-cobalt" />
      <motion.span {...pop(0.6)} aria-hidden className="absolute right-[10%] bottom-[14%] w-[3%] aspect-square rounded-full bg-plum" />
    </div>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className}>
      <path d="M12 0C13 7 17 11 24 12C17 13 13 17 12 24C11 17 7 13 0 12C7 11 11 7 12 0Z" fill="currentColor" />
    </svg>
  );
}

/* 2x2 photo grid: each outer corner swept round, L-shaped colour frames on two corners, a badge where the photos meet */
const quadFills = ["bg-pink", "bauhaus-stripes", "bg-plum", "bauhaus-stripes-coral"];

export function PhotoQuad({ images, className }: { images: ({ src: string; alt: string } | null)[]; className?: string }) {
  const reduce = useReducedMotion();
  const corners = ["rounded-tl-[4.5rem]", "rounded-tr-[4.5rem]", "rounded-bl-[4.5rem]", "rounded-br-[4.5rem]"];
  const offsets = [
    { x: -24, y: -24 },
    { x: 24, y: -24 },
    { x: -24, y: 24 },
    { x: 24, y: 24 },
  ];
  const ref = useRef<HTMLDivElement>(null);
  // Columns slide in opposite directions as the page scrolls
  const leftCol = useScrollDrift(ref, reduce ? 0 : 24);
  const rightCol = useScrollDrift(ref, reduce ? 0 : -24);
  return (
    <div ref={ref} className={cn("relative p-4", className)}>
      <div aria-hidden className="absolute top-0 left-0 w-2/5 h-2/5 border-t-[10px] border-l-[10px] border-plum rounded-tl-[6rem]" />
      <div aria-hidden className="absolute bottom-0 right-0 w-2/5 h-2/5 border-b-[10px] border-r-[10px] border-accent rounded-br-[6rem]" />
      <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
        {images.slice(0, 4).map((img, i) => (
          <motion.div key={i} style={{ y: i % 2 ? rightCol : leftCol }}>
          {img ? (
          <motion.img
            src={img.src}
            alt={img.alt}
            initial={reduce ? false : { opacity: 0, ...offsets[i] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: EASE }}
            className={cn("w-full h-[min(20vh,11rem)] sm:h-[min(26vh,14rem)] object-cover rounded-2xl shadow-medium", corners[i])}
          />
          ) : (
            <div aria-hidden className={cn("w-full h-[min(20vh,11rem)] sm:h-[min(26vh,14rem)] rounded-2xl", corners[i], quadFills[i])} />
          )}
          </motion.div>
        ))}
      </div>
      <div aria-hidden className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.4, rotate: -90 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.55 }}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-plum border-[5px] border-white shadow-strong grid place-items-center"
      >
        <div className="w-4/5 h-4/5 rounded-full border-2 border-dashed border-pink grid place-items-center">
          <Sparkle className="w-8 h-8 text-accent" />
        </div>
      </motion.div>
      </div>
      <Sparkle className="absolute -left-2 bottom-10 w-8 h-8 text-cobalt" />
      <Sparkle className="absolute left-6 bottom-2 w-4 h-4 text-plum" />
    </div>
  );
}

type Photo = { src: string; alt: string };

/* Tall capsule photo with a shorter one cut into its lower left, plus a line drawing of two people connecting.
   `border` should match the section background so the small capsule looks cut out. */
export function CapsulePair({
  large,
  small,
  border = "border-background",
  className,
}: {
  large: Photo;
  small: Photo;
  border?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative h-[min(62vh,30rem)] max-w-lg w-full mx-auto", className)}>
      <svg
        aria-hidden
        viewBox="0 0 120 80"
        fill="none"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute left-[2%] top-[2%] w-[30%] stroke-plum"
      >
        <circle cx="18" cy="42" r="8" />
        <path d="M4 76c0-10 6-18 14-18s14 8 14 18" />
        <circle cx="58" cy="42" r="8" />
        <path d="M44 76c0-10 6-18 14-18s14 8 14 18" />
        <path d="M26 24C40 6 70 2 96 12" />
        <path d="M86 4l10 8-11 6" />
        <path d="M104 44l4-8 4 8-8 0" className="stroke-accent" />
      </svg>
      <Reveal drift={30} className="absolute right-0 top-[3%] w-[66%] h-[94%]">
        <img src={large.src} alt={large.alt} className="w-full h-full object-cover rounded-full shadow-strong" />
      </Reveal>
      <Reveal delay={0.2} drift={-40} className="absolute left-[4%] bottom-0 w-[48%] h-[64%]">
        <img
          src={small.src}
          alt={small.alt}
          className={cn("w-full h-full object-cover rounded-full border-[6px] shadow-strong", border)}
        />
      </Reveal>
      <div aria-hidden className="absolute right-[-2%] bottom-[14%] w-5 h-5 rounded-full bg-accent" />
      <div aria-hidden className="absolute left-[44%] top-[6%] w-4 h-4 rounded-full border-[3px] border-cobalt" />
    </div>
  );
}

/* Three staggered rounded photos joined by an arrow badge and a linked-rings pill, with sparkles and dots around them */
export function PhotoTrio({ images, className }: { images: [Photo, Photo, Photo]; className?: string }) {
  const [first, second, third] = images;
  const frame = "w-full h-full object-cover rounded-[2rem] border-[6px] border-white shadow-strong";
  return (
    <div className={cn("relative h-[min(62vh,30rem)] max-w-lg w-full mx-auto", className)}>
      <Reveal drift={20} className="absolute left-[8%] top-[2%] w-[46%] h-[50%] rounded-[2rem] bg-cobalt/20">
        <img src={first.src} alt={first.alt} className={frame} />
      </Reveal>
      <Reveal delay={0.15} drift={-30} className="absolute right-[2%] top-[20%] w-[42%] h-[48%] rounded-[2rem] bg-pink/60">
        <img src={second.src} alt={second.alt} className={frame} />
      </Reveal>
      <Reveal delay={0.3} drift={40} className="absolute left-[2%] bottom-[2%] w-[44%] h-[42%] rounded-[2rem] bg-accent/20">
        <img src={third.src} alt={third.alt} className={frame} />
      </Reveal>

      {/* Arrow badge on the first photo's corner */}
      <div aria-hidden className="absolute left-[46%] top-0 w-14 h-14 rounded-full bg-pink border-4 border-white shadow-medium grid place-items-center">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 stroke-plum">
          <path d="M7 7l10 10M17 9v8H9" />
        </svg>
      </div>
      {/* Linked rings pill where the lower photos meet */}
      <div aria-hidden className="absolute left-[38%] bottom-[34%] px-4 py-2 rounded-full bg-plum border-4 border-white shadow-medium">
        <svg viewBox="0 0 52 20" fill="none" strokeWidth="2.5" className="w-14 h-5 stroke-white">
          <circle cx="10" cy="10" r="7" />
          <circle cx="26" cy="10" r="7" />
          <circle cx="42" cy="10" r="7" />
        </svg>
      </div>

      <Sparkle className="absolute left-0 top-[44%] w-6 h-6 text-cobalt animate-bauhaus-float" />
      <Sparkle className="absolute right-[36%] bottom-[14%] w-5 h-5 text-accent animate-bauhaus-float [animation-delay:-3s]" />
      <span aria-hidden className="absolute right-[10%] top-[8%] w-4 h-4 rounded-full bg-plum/70" />
      <span aria-hidden className="absolute right-[14%] bottom-[10%] w-6 h-6 rounded-full bg-cobalt/40" />
    </div>
  );
}

/* Photo bubbles of different sizes, each on a coloured circle, floating over a slanted panel with loose dots */
export function BubbleCluster({ images, className }: { images: [Photo, Photo, Photo, Photo | null]; className?: string }) {
  const bubbles = [
    { pos: "left-0 top-[34%] w-[56%]", back: "bg-accent", drift: 20 },
    { pos: "right-0 top-[10%] w-[44%]", back: "bg-pink", drift: -25 },
    { pos: "left-[16%] top-0 w-[30%]", back: "bg-[linear-gradient(90deg,hsl(var(--pink))_50%,hsl(var(--cobalt))_50%)]", drift: 35 },
    { pos: "right-[6%] bottom-0 w-[30%]", back: "bg-cobalt/30", drift: -35 },
  ];
  return (
    <div className={cn("relative w-full aspect-square", className)}>
      <div aria-hidden className="absolute inset-y-0 left-[4%] right-0 bg-white/70 [clip-path:polygon(0_0,100%_0,82%_100%,0_100%)] rounded-3xl" />
      {bubbles.map((b, i) => (
        <Reveal key={i} delay={i * 0.12} drift={b.drift} className={cn("absolute aspect-square", b.pos)}>
          <div aria-hidden className={cn("absolute inset-0 rounded-full scale-[1.08]", b.back)} />
          {images[i] ? (
            <img src={images[i]!.src} alt={images[i]!.alt} className="relative w-full h-full object-cover rounded-full shadow-medium" />
          ) : (
            <div aria-hidden className="relative w-full h-full rounded-full bauhaus-rings" />
          )}
        </Reveal>
      ))}
      <span aria-hidden className="absolute left-[8%] top-[20%] w-[9%] aspect-square rounded-full bg-accent/80 animate-bauhaus-float" />
      <span aria-hidden className="absolute left-[56%] top-[2%] w-[8%] aspect-square rounded-full bg-cobalt animate-bauhaus-float [animation-delay:-2s]" />
      <span aria-hidden className="absolute left-[50%] bottom-[8%] w-[7%] aspect-square rounded-full bg-plum/80 animate-bauhaus-float [animation-delay:-4s]" />
      <span aria-hidden className="absolute left-[20%] bottom-[0%] w-[4%] aspect-square rounded-full bg-pink" />
    </div>
  );
}
