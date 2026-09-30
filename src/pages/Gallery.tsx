import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { MarkerTitle, PatternBar, Section } from "@/components/layout/ui";
import { Reveal } from "@/components/layout/motion";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Moment = { src: string; title?: string; caption?: string };

/* Story photos matched to what they show */
const stories: Moment[] = [
  { src: "/img_27.png", title: "Generations in conversation.", caption: "Young people and older adults came together to listen and understand one another." },
  { src: "/img_12.png", title: "A room full of voices.", caption: "LoudHer created a space where young women could express themselves and be heard." },
  { src: "/img_39.png", title: "Strangers, five minutes in.", caption: "Action Circles turn a room of strangers into a shared experience." },
  { src: "/o.jpg", title: "A reason to come back.", caption: "Repeated experiences give new connections somewhere to grow." },
];

/* Every other unique photo in /public, shown once each: the first twenty ride the hero strip, the rest fill the mosaic.
   (img_50, 64, 70, 72, 73, 74 were duplicates of older photos and sit in public/_duplicates.) */
const DUPLICATES = new Set([50, 64, 70, 72, 73, 74]);
const storySrcs = new Set(stories.map((st) => st.src));
const allPhotos: Moment[] = Array.from({ length: 76 }, (_, i) => i + 1)
  .filter((n) => !DUPLICATES.has(n))
  .map((n) => ({ src: `/img_${n}.png` }))
  .filter((m) => !storySrcs.has(m.src));
const stripPhotos: Moment[] = allPhotos.slice(0, 20);
const moments: Moment[] = allPhotos.slice(20);

/* Colour theme per story card, each with its own rounded corner and accent shape */
const storyThemes = [
  { card: "bg-plum text-white", corner: "rounded-3xl rounded-tl-[4rem]", shape: "-right-8 -bottom-8 w-24 h-24 rounded-full bauhaus-rings opacity-50" },
  { card: "bg-primary text-white", corner: "rounded-3xl rounded-tr-[4rem]", shape: "right-0 bottom-0 w-16 h-16 rounded-tl-full bg-pink" },
  { card: "bg-accent text-white", corner: "rounded-3xl rounded-bl-[4rem]", shape: "-right-3 -bottom-3 w-16 h-16 bg-plum [clip-path:polygon(50%_0,100%_100%,0_100%)]" },
  { card: "bg-pink text-plum", corner: "rounded-3xl rounded-br-[4rem]", shape: "right-4 top-4 w-12 h-12 rounded-full bauhaus-stripes" },
];

/* Mosaic: photos with a repeating rhythm of big, tall and wide tiles, plus a Bauhaus colour tile every eighth cell */
const spanRhythm = ["col-span-2 row-span-2", "", "row-span-2", "", "col-span-2", "", "", "row-span-2", "", "col-span-2", ""];
const shapeTiles: ReactNode[] = [
  <div className="w-full h-full bg-plum grid place-items-center"><div className="w-1/2 aspect-square rounded-full bg-pink" /></div>,
  <div className="w-full h-full bauhaus-stripes-coral" />,
  <div className="w-full h-full bg-cobalt"><div className="w-full h-full bg-accent rounded-tl-full" /></div>,
  <div className="w-full h-full bg-pink grid place-items-center"><div className="w-1/2 aspect-square bg-primary [clip-path:polygon(50%_0,100%_100%,0_100%)]" /></div>,
];
const mosaic: ({ photo: Moment; span: string } | { tile: ReactNode; span: string })[] = moments.flatMap((photo, i) => {
  const cell = { photo, span: spanRhythm[i % spanRhythm.length] };
  return i % 8 === 7 ? [cell, { tile: shapeTiles[Math.floor(i / 8) % shapeTiles.length], span: "" }] : [cell];
});

/* A row of portrait cards bent into a shallow bowl: cards grow and turn toward you at the edges.
   The row drifts on its own and is nudged further by page scroll, wrapping endlessly. */
function CurvedStrip({ photos, onOpen }: { photos: Moment[]; onOpen: (m: Moment) => void }) {
  const reduce = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    let frame = 0;
    let drift = 0;
    let last = performance.now();

    const render = (now: number) => {
      const width = el.clientWidth;
      const cardW = width < 640 ? 128 : width < 1024 ? 160 : 190;
      const gap = width < 640 ? 12 : 18;
      const step = cardW + gap;
      const track = photos.length * step;
      if (!reduce) drift += ((now - last) / 1000) * 40; // px per second
      last = now;
      const offset = drift + (reduce ? 0 : window.scrollY * 0.6);
      const half = width / 2;

      cards.current.forEach((card, i) => {
        if (!card) return;
        // Position relative to the centre, wrapped so the row never runs out
        let x = (((i * step - offset) % track) + track) % track;
        if (x > track / 2) x -= track;
        const d = Math.max(-1.3, Math.min(1.3, x / half));
        const turn = -d * 28;
        const grow = 1 + d * d * 0.28;
        card.style.width = `${cardW}px`;
        card.style.transform = `translate3d(${x - cardW / 2}px, -50%, 0) rotateY(${turn}deg) scale(${grow})`;
        card.style.zIndex = String(100 - Math.round(Math.abs(d) * 50));
        card.style.opacity = Math.abs(x) > half + cardW * 1.5 ? "0" : "1";
      });
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frame);
  }, [photos.length, reduce]);

  return (
    <div ref={wrap} className="relative h-[min(44vh,20rem)] sm:h-[min(48vh,24rem)] [perspective:1100px] overflow-hidden">
      {photos.map((p, i) => (
        <button
          key={p.src + i}
          ref={(node) => {
            cards.current[i] = node;
          }}
          type="button"
          onClick={() => onOpen(p)}
          aria-label={p.title ?? "Open photo"}
          className="absolute left-1/2 top-1/2 aspect-[3/4] rounded-[1.75rem] overflow-hidden shadow-strong border-4 border-white will-change-transform"
        >
          <img src={p.src} alt="" className="w-full h-full object-cover" />
        </button>
      ))}
    </div>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState<Moment | null>(null);

  return (
    <div className="min-h-screen bg-background font-body pt-2">
      {/* Hero: centred intro over a curved, drifting strip of photos */}
      <section className="relative overflow-hidden mx-2 rounded-[1.75rem] pt-28 sm:pt-32 pb-14 bg-white border border-border">
        <div aria-hidden className="absolute left-0 top-0 w-16 sm:w-24 aspect-square rounded-br-full bg-cobalt" />
        <div aria-hidden className="absolute right-0 top-0 w-12 sm:w-20 aspect-square rounded-bl-full bg-pink" />
        <div aria-hidden className="absolute left-[12%] top-[22%] w-8 h-8 bg-accent [clip-path:polygon(50%_0,100%_100%,0_100%)] animate-bauhaus-float hidden md:block" />
        <div aria-hidden className="absolute right-[14%] top-[30%] w-6 h-6 rounded-full border-4 border-plum animate-bauhaus-float [animation-delay:-3s] hidden md:block" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 pattern-bar-full" />

        <Reveal className="relative container mx-auto px-6 text-center max-w-3xl mb-8 sm:mb-10">
          <p className="font-heading font-bold uppercase tracking-widest text-sm text-accent mb-3">Gallery</p>
          <h1 className="font-heading font-black text-5xl md:text-7xl leading-none text-primary mb-5">
            People. Stories.{" "}
            <span className="relative inline-block">
              <span aria-hidden className="absolute inset-x-[-0.1em] bottom-[0.05em] h-[0.4em] bg-pink -rotate-2" />
              <span className="relative">Moments.</span>
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            What connection looks like when it's designed for: the rooms, the conversations and the people who keep coming back.
          </p>
        </Reveal>

        <CurvedStrip photos={stripPhotos} onOpen={setOpen} />

        <div className="relative flex justify-center mt-8 sm:mt-10">
          <Button asChild size="lg" variant="accent" className="rounded-full">
            <a href="#stories">Explore the stories</a>
          </Button>
        </div>
      </section>

      {/* Stories: four photo cards side by side, all in one view */}
      <Section id="stories">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <MarkerTitle className="mb-4 text-primary" accent="room">
              Stories from the
            </MarkerTitle>
            <PatternBar />
          </div>
          <p className="text-muted-foreground max-w-xs">Four moments, four programmes. Tap a photo to see it bigger.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stories.map((story, i) => (
            <Reveal
              key={story.src}
              delay={i * 0.1}
              drift={i % 2 ? -12 : 12}
              className={cn("flex flex-col overflow-hidden shadow-medium", storyThemes[i].card, storyThemes[i].corner)}
            >
              <button type="button" onClick={() => setOpen(story)} className="group relative block shrink-0 h-[min(30vh,15rem)] overflow-hidden">
                <img
                  src={story.src}
                  alt={story.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </button>
              <div className="relative flex-1 p-6 overflow-hidden">
                <div aria-hidden className={cn("absolute", storyThemes[i].shape)} />
                <span className="relative block font-heading font-black text-4xl leading-none opacity-40 mb-3">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="relative font-heading font-black text-xl leading-snug mb-2">{story.title}</h3>
                <p className="relative text-sm opacity-90">{story.caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Photo mosaic with a few Bauhaus colour tiles woven in */}
      <Section className="bg-secondary">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <MarkerTitle className="mb-4 text-primary" accent="moments">
              More
            </MarkerTitle>
            <PatternBar />
          </div>
          <p className="text-muted-foreground max-w-xs">Tap any photo to see it bigger.</p>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[9rem] sm:auto-rows-[11rem] gap-3 sm:gap-4 [grid-auto-flow:dense]">
          {mosaic.map((cell, i) =>
            "tile" in cell ? (
              <Reveal key={`tile-${i}`} delay={(i % 4) * 0.06} drift={10} className={cn("rounded-3xl overflow-hidden", cell.span)}>
                {cell.tile}
              </Reveal>
            ) : (
              <Reveal key={cell.photo.src} delay={(i % 4) * 0.06} drift={i % 2 ? -12 : 12} className={cn("rounded-3xl overflow-hidden", cell.span)}>
                <button type="button" onClick={() => setOpen(cell.photo)} aria-label="Open photo" className="group relative block w-full h-full">
                  <img
                    src={cell.photo.src}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span aria-hidden className="absolute inset-0 bg-plum/0 group-hover:bg-plum/20 transition-colors" />
                </button>
              </Reveal>
            )
          )}
        </div>
      </Section>

      {/* Close */}
      <Section>
        <Reveal
          drift={0}
          className="relative overflow-hidden bg-plum text-white rounded-[2.5rem] rounded-bl-[6rem] p-8 sm:p-12 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center"
        >
          <div aria-hidden className="absolute -right-16 -top-16 w-48 h-48 rounded-full bauhaus-rings opacity-60" />
          <div className="relative">
            <p className="font-heading font-bold uppercase tracking-widest text-sm text-pink mb-4">Your turn</p>
            <h2 className="font-heading font-black text-4xl sm:text-5xl leading-tight mb-5">
              Be in the next{" "}
              <span className="relative inline-block">
                <span aria-hidden className="absolute inset-x-[-0.1em] bottom-[0.05em] h-[0.4em] bg-accent -rotate-2" />
                <span className="relative">photo.</span>
              </span>
            </h2>
            <p className="text-lg text-white/85 max-w-md mb-8">Join an experience, bring your skills, or help us open more doors.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="accent" className="rounded-full">
                <Link to="/get-involved">Get involved</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-white text-plum hover:bg-pink">
                <Link to="/impact">See our impact</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-56 sm:h-64">
            <Reveal delay={0.1} drift={20} className="absolute left-0 top-0 w-[46%] aspect-square">
              <div aria-hidden className="w-full h-full border-[6px] border-white rounded-full bauhaus-rings" />
            </Reveal>
            <Reveal delay={0.2} drift={-20} className="absolute right-[4%] top-[8%] w-[40%] aspect-square">
              <div aria-hidden className="w-full h-full border-[6px] border-white rounded-3xl rounded-tr-[3rem] bg-pink" />
            </Reveal>
            <Reveal delay={0.3} drift={30} className="absolute left-[30%] bottom-0 w-[36%] aspect-square">
              <div aria-hidden className="w-full h-full border-[6px] border-white rounded-t-full rounded-b-3xl bauhaus-stripes-coral" />
            </Reveal>
          </div>
        </Reveal>
      </Section>

      <Dialog open={open !== null} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-4xl p-2 sm:p-3 bg-white rounded-3xl">
          <DialogTitle className="sr-only">{open?.title ?? "Gallery photo"}</DialogTitle>
          {open && (
            <figure>
              <img src={open.src} alt={open.title ?? ""} className="w-full max-h-[80vh] object-contain rounded-2xl" />
              {open.caption && (
                <figcaption className="px-3 py-3 text-muted-foreground">
                  <span className="font-heading font-bold text-foreground">{open.title}</span> {open.caption}
                </figcaption>
              )}
            </figure>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
