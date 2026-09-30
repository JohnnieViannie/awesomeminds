import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/layout/motion";
import { LogoRingBand } from "@/components/LogoRingBand";
import { cn } from "@/lib/utils";

/* Bauhaus colour dots stand in for faces, so no photo repeats elsewhere on the site */
const avatars = ["bg-accent", "bg-primary", "bg-plum", "bg-pink"];

/* Wave curve: white below it, logo-ring tiles along its edge */
const VIEWBOX = { x: 0, y: -30, width: 1440, height: 530 };
const WAVE_POINTS: [number, number][] = [
  [0, 20], [400, 10], [760, 270], [1100, 370], [1260, 415], [1380, 380], [1440, 340],
];
const WAVE_WHITE = "M0,20 C400,10 760,270 1100,370 C1260,415 1380,380 1440,340 L1440,500 L0,500 Z";

/* Small Bauhaus signature: circle, square, triangle */
function ShapeMark() {
  return (
    <span aria-hidden className="inline-flex items-center gap-1.5">
      <span className="w-3 h-3 rounded-full bg-accent" />
      <span className="w-3 h-3 bg-cobalt" />
      <span className="w-3 h-3 bg-plum [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
    </span>
  );
}

/* Playful stat card: springs in, floats, avatars pop, number counts up then bounces */
function StatCard() {
  const reduce = useReducedMotion();
  const countDelay = 0.9;
  const countDuration = 2;

  return (
    <motion.div
      className="hidden md:block absolute right-6 xl:right-10 bottom-6 xl:bottom-[9%] z-10"
      initial={reduce ? false : { opacity: 0, y: 40, scale: 0.6, rotate: -8 }}
      animate={{ opacity: 1, y: 0, scale: 1, rotate: -2 }}
      transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.5 }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <motion.div
          className="relative flex items-center gap-4 bg-white rounded-2xl shadow-strong px-5 py-4 cursor-default"
          whileHover={reduce ? undefined : { scale: 1.06, rotate: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 12 }}
        >
          {/* Orbiting Bauhaus shapes */}
          <motion.span
            aria-hidden
            className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-accent"
            animate={reduce ? undefined : { scale: [1, 1.25, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden
            className="absolute -bottom-2 left-1/3 w-4 h-4 bg-cobalt"
            animate={reduce ? undefined : { rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.span
            aria-hidden
            className="absolute -top-3 right-4 w-5 h-5 bg-plum [clip-path:polygon(50%_0,100%_100%,0_100%)]"
            animate={reduce ? undefined : { y: [0, -5, 0], rotate: [0, 12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="flex -space-x-3">
            {avatars.map((fill, i) => (
              <motion.span
                key={fill}
                aria-hidden
                className={cn("relative w-10 h-10 rounded-full border-2 border-white", fill)}
                initial={reduce ? false : { scale: 0, y: 12 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 12, delay: 0.8 + i * 0.12 }}
                whileHover={reduce ? undefined : { y: -6, scale: 1.15, zIndex: 10 }}
              />
            ))}
          </div>
          <div>
            <motion.div
              className="origin-left"
              initial={false}
              animate={reduce ? undefined : { scale: [1, 1.3, 0.95, 1.08, 1] }}
              transition={{ duration: 0.7, delay: countDelay + countDuration * 0.85 }}
            >
              <CountUp
                to={5000}
                suffix="+"
                duration={countDuration}
                delay={countDelay}
                className="block font-heading font-black text-2xl text-plum leading-none tabular-nums"
              />
            </motion.div>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
              </span>
              Young people since 2019
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function BauhausHero() {
  return (
    <section data-no-reveal className="px-2 pt-2 bg-background">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-white">
        {/* Photo fills the first screen; the wave only takes its lower edge */}
        <div className="relative h-[64svh] min-h-[420px] sm:h-[78svh] xl:h-[calc(100svh-0.5rem)] xl:min-h-[640px] xl:max-h-[1000px]">
          <img
            src="/img_6.png"
            alt="An Awesome Mind Speaks facilitator in conversation with a young person"
            className="absolute inset-x-0 top-0 bottom-[2px] w-full h-[calc(100%-2px)] object-cover object-[center_28%]"
          />

          <svg
            aria-hidden
            className="absolute -bottom-px left-0 w-full h-[24%] sm:h-[34%] xl:h-[42%]"
            viewBox="0 -30 1440 530"
            preserveAspectRatio="none"
          >
            <path d={WAVE_WHITE} fill="white" />
          </svg>
          <LogoRingBand
            curve={WAVE_POINTS}
            viewBox={VIEWBOX}
            className="absolute -bottom-px left-0 w-full h-[24%] sm:h-[34%] xl:h-[42%]"
          />

          {/* Floating stat card on the wave edge */}
          <StatCard />
        </div>

        {/* Headline sits on the wave inside the first screen; the rest follows below */}
        <div className="relative z-10 -mt-6 sm:-mt-20 xl:-mt-[min(24vh,240px)] max-w-[46rem] xl:max-w-[60rem] px-6 sm:px-10 xl:px-14 pb-12 sm:pb-16 animate-fade-up">
          <p className="flex items-center gap-3 font-heading font-bold text-sm uppercase tracking-widest text-plum mb-3">
            <ShapeMark /> Connection by Design
          </p>
          <h1 className="font-heading font-black text-[2.5rem] sm:text-6xl xl:text-[3.4rem] 2xl:text-[4rem] text-primary leading-[1.05] mb-8">
            Connection shouldn't <br className="hidden xl:block" />
           be left to{" "}
            <span className="relative inline-block">
              <span className="relative z-10">chance.</span>
              <span aria-hidden className="absolute left-0 bottom-1 w-full h-3 sm:h-4 bg-accent" />
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            We design experiences, spaces and opportunities for young people aged 15–35 in Uganda to connect,
            belong and thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg" className="rounded-full h-12 px-8 text-base">
              <Link to="/impact">Explore our work</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full h-12 px-8 text-base border-2 border-plum text-plum hover:bg-plum hover:text-white"
            >
              <Link to="/get-involved">Partner with us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
