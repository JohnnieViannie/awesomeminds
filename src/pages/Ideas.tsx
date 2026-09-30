import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MarkerTitle, PatternBar, Section } from "@/components/layout/ui";
import { Reveal } from "@/components/layout/motion";
import { motion, useReducedMotion } from "framer-motion";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { cn } from "@/lib/utils";

const topics = [
  "Connection & Belonging",
  "Young People",
  "Wellbeing",
  "Creativity",
  "Participation",
  "Our Work",
  "Be Awesome Space",
];

/* Upcoming pieces, each tagged with the topics it touches and given its own cover photo */
const nextWriting = [
  { title: "What does it actually mean to design for connection?", topics: ["Connection & Belonging", "Our Work"], src: "/img_69.png" },
  { title: "Why loneliness isn't solved by simply telling young people to socialise", topics: ["Young People", "Wellbeing", "Connection & Belonging"], src: "/img_41.png" },
  { title: "What a third space actually is, and why Jinja needs one", topics: ["Be Awesome Space", "Connection & Belonging"], src: "/img_58.png" },
  { title: "What the NEET numbers don't tell us", topics: ["Young People", "Participation"], src: "/img_45.png" },
  { title: "Six zones, one room: designing Be Awesome Space", topics: ["Be Awesome Space", "Creativity"], src: "/img_48.png" },
  { title: "Why Skill Swap has no teacher", topics: ["Participation", "Creativity", "Our Work"], src: "/img_46.png" },
  { title: "What six editions of the Generational Perspective Dialogue taught us", topics: ["Our Work", "Participation"], src: "/img_57.png" },
];

/* Chip colours per topic; the pink one needs dark text to stay readable */
const topicColors = ["bg-primary", "bg-plum", "bg-accent", "bg-cobalt", "bg-pink !text-plum", "bg-plum", "bg-accent"];
const topicMarks = [
  "rounded-full bg-accent",
  "bg-cobalt",
  "bg-plum [clip-path:polygon(50%_0,100%_100%,0_100%)]",
  "rounded-tl-full bg-pink",
  "rounded-full border-4 border-primary",
  "bg-accent [clip-path:polygon(0_0,100%_0,0_100%)]",
  "rounded-b-full bg-plum",
];
const cardCorners = ["rounded-tl-[4rem]", "rounded-tr-[3rem]", "rounded-bl-[3rem]", "rounded-br-[3rem]"];

/* Mind map: one conversation in the middle, the seven topics orbiting it on drawn-in lines.
   Nodes sit on a circle; positions are percentages of the square so it scales cleanly. */
function TopicMap({ onPick }: { onPick: (topic: string) => void }) {
  const reduce = useReducedMotion();
  const nodes = topics.map((topic, i) => {
    const angle = (-90 + (360 / topics.length) * i) * (Math.PI / 180);
    return { topic, x: 50 + 39 * Math.cos(angle), y: 50 + 39 * Math.sin(angle) };
  });
  return (
    <div className="relative hidden md:block w-full max-w-[min(38rem,68vh)] mx-auto aspect-square">
      <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 w-full h-full overflow-visible">
        <circle cx="50" cy="50" r="39" fill="none" stroke="hsl(var(--plum) / 0.12)" strokeWidth="0.4" strokeDasharray="1 2" />
        {nodes.map((n, i) => (
          <motion.line
            key={n.topic}
            x1="50"
            y1="50"
            x2={n.x}
            y2={n.y}
            stroke="hsl(var(--plum) / 0.35)"
            strokeWidth="0.5"
            strokeLinecap="round"
            initial={reduce ? false : { pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }}
          />
        ))}
      </svg>

      {/* Centre: the conversation */}
      <div className="absolute left-1/2 top-1/2 w-[44%] aspect-square -translate-x-1/2 -translate-y-1/2">
        <div aria-hidden className="absolute -inset-[8%] rounded-full bauhaus-rings opacity-90" />
        <Reveal drift={0} className="relative w-full h-full">
          <img
            src="/img_52.png"
            alt="Two young people deep in conversation"
            className="w-full h-full object-cover rounded-full border-[6px] border-white shadow-strong"
          />
        </Reveal>
      </div>

      {/* Topic nodes */}
      {nodes.map((n, i) => (
        <div key={n.topic} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
          <motion.button
            type="button"
            onClick={() => onPick(n.topic)}
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.5 + i * 0.08 }}
            className={cn(
              "inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 rounded-full font-heading font-bold text-xs lg:text-sm shadow-medium border-4 border-white text-white",
              topicColors[i]
            )}
          >
            <span aria-hidden className="w-2.5 h-2.5 rounded-full bg-white/80" />
            {n.topic}
          </motion.button>
        </div>
      ))}
    </div>
  );
}

export default function Ideas() {
  const [active, setActive] = useState<string | null>(null);
  const shown = active ? nextWriting.filter((w) => w.topics.includes(active)) : nextWriting;
  const pick = (topic: string) => {
    setActive(topic);
    document.getElementById("writing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background font-body pt-2">
      {/* Hero: headline beside a mind map of topics radiating from one conversation */}
      <section className="relative overflow-hidden mx-2 rounded-[1.75rem] pt-28 sm:pt-32 pb-16 lg:pb-20 bg-white border border-border">
        <div aria-hidden className="absolute left-0 top-0 w-20 sm:w-28 aspect-square rounded-br-full bg-cobalt" />
        <div aria-hidden className="absolute right-[-10%] top-[6%] w-[60vw] max-w-[44rem] aspect-square rounded-full bg-secondary hidden lg:block" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 pattern-bar-full" />
        <div className="relative container mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-6 items-center">
          <div>
            <Reveal>
              <p className="font-heading font-bold uppercase tracking-widest text-sm text-accent mb-4">Ideas, Stories & Learning</p>
              <h1 className="font-heading font-black text-4xl md:text-6xl leading-[1.05] text-primary mb-6">
                We're learning what it takes to design for{" "}
                <span className="relative inline-block">
                  <span aria-hidden className="absolute inset-x-[-0.1em] bottom-[0.05em] h-[0.4em] bg-pink -rotate-2" />
                  <span className="relative">connection.</span>
                </span>
              </h1>
              <PatternBar className="mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-xl mb-8">
                Ideas from the field, reflections from our work, and conversations about connection, belonging, young people, wellbeing, creativity and participation.
              </p>
              <div className="flex items-center gap-6">
                <Button asChild size="lg" variant="accent" className="rounded-full">
                  <a href="#writing">See what's coming</a>
                </Button>
                <p className="font-heading font-semibold text-plum">
                  <span className="font-black text-2xl">{nextWriting.length}</span> pieces ·{" "}
                  <span className="font-black text-2xl">{topics.length}</span> topics
                </p>
              </div>
            </Reveal>
          </div>

          <TopicMap onPick={pick} />

          {/* Small screens: the topics as a simple wrap of pills */}
          <div className="flex flex-wrap gap-2 md:hidden">
            {topics.map((topic, i) => (
              <button
                key={topic}
                type="button"
                onClick={() => pick(topic)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-plum/15 font-heading font-bold text-sm text-plum"
              >
                <span aria-hidden className={cn("w-3.5 h-3.5 shrink-0", topicMarks[i])} />
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* What we're writing next */}
      <Section id="writing">
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <MarkerTitle className="mb-4" accent="next">
              What we're writing about
            </MarkerTitle>
            <PatternBar />
          </div>
          <p className="text-muted-foreground">
            {active ? `${shown.length} piece${shown.length === 1 ? "" : "s"} on ${active}` : `${nextWriting.length} pieces in the works`}
          </p>
        </Reveal>

        {/* Topic bar stays in reach while scrolling the pieces */}
        <div className="sticky top-[5.25rem] z-20 -mx-4 sm:mx-0 mb-8 px-4 sm:px-2 py-2 bg-background/90 backdrop-blur rounded-full">
          <div className="flex gap-2 overflow-x-auto [scrollbar-width:none]">
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-pressed={active === null}
              className={cn(
                "shrink-0 px-4 py-2 rounded-full font-heading font-bold text-sm border-2 transition-colors",
                active === null ? "bg-plum border-plum text-white" : "bg-white border-plum/15 text-plum hover:border-plum"
              )}
            >
              All
            </button>
            {topics.map((topic, i) => (
              <button
                key={topic}
                type="button"
                onClick={() => setActive(active === topic ? null : topic)}
                aria-pressed={active === topic}
                className={cn(
                  "shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full font-heading font-bold text-sm border-2 transition-colors",
                  active === topic ? cn("border-transparent text-white", topicColors[i]) : "bg-white border-plum/15 text-plum hover:border-plum"
                )}
              >
                <span aria-hidden className={cn("w-3.5 h-3.5 shrink-0", active === topic ? "bg-white/80 rounded-full" : topicMarks[i])} />
                {topic}
              </button>
            ))}
          </div>
        </div>

        {shown.length === 0 ? (
          <div className="text-center bg-secondary rounded-3xl p-12">
            <p className="font-heading font-bold text-xl text-plum mb-2">Nothing on this topic yet.</p>
            <p className="text-muted-foreground">It's on our list. Try another topic for now.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {shown.map((w, i) => {
              const featured = i === 0 && !active;
              return (
                <Reveal
                  key={w.title}
                  delay={(i % 3) * 0.08}
                  className={cn(
                    "group flex flex-col bg-card border border-border rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow",
                    cardCorners[i % cardCorners.length],
                    featured && "sm:col-span-2 lg:row-span-2"
                  )}
                >
                  <div className={cn("relative overflow-hidden", featured ? "h-56 sm:h-72 lg:h-full lg:min-h-[20rem]" : "h-44")}>
                    <img
                      src={w.src}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <div className="flex flex-wrap gap-2">
                      {w.topics.slice(0, 2).map((t) => (
                        <span key={t} className={cn("px-3 py-1 rounded-full text-xs font-heading font-bold text-white", topicColors[topics.indexOf(t)])}>
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className={cn("font-heading font-black text-primary leading-snug", featured ? "text-2xl sm:text-3xl" : "text-lg")}>{w.title}</h3>
                    <p className="text-sm font-heading font-semibold text-accent">Coming soon</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        )}
      </Section>

      {/* Newsletter (Brevo) */}
      <Section className="relative overflow-hidden bg-secondary">
        <div aria-hidden className="absolute -right-12 -top-12 w-40 h-40 rounded-full bauhaus-rings-blue opacity-40" />
        <div aria-hidden className="absolute left-[8%] bottom-8 w-8 h-8 bg-accent [clip-path:polygon(50%_0,100%_100%,0_100%)] animate-bauhaus-float hidden md:block" />
        <Reveal className="relative max-w-2xl mx-auto text-center">
          <p className="font-heading font-bold uppercase tracking-widest text-sm text-accent mb-3">Newsletter</p>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-primary mb-4">Read them first.</h2>
          <p className="text-lg text-muted-foreground mb-8">New ideas, stories and learning from our work, straight to your inbox.</p>
          <NewsletterSignup className="max-w-xl mx-auto" />
        </Reveal>
      </Section>

      {/* Close */}
      <Section>
        <Reveal
          drift={0}
          className="relative overflow-hidden bg-plum text-white rounded-[2.5rem] rounded-tr-[6rem] p-8 sm:p-12 grid md:grid-cols-[1.3fr_1fr] gap-10 items-center"
        >
          <div aria-hidden className="absolute -left-16 -bottom-16 w-48 h-48 rounded-full bauhaus-rings opacity-60" />
          <div className="relative">
            <p className="font-heading font-bold uppercase tracking-widest text-sm text-pink mb-4">Think with us</p>
            <h2 className="font-heading font-black text-4xl sm:text-5xl leading-tight mb-5">
              Got an idea about{" "}
              <span className="relative inline-block">
                <span aria-hidden className="absolute inset-x-[-0.1em] bottom-[0.05em] h-[0.4em] bg-accent -rotate-2" />
                <span className="relative">connection?</span>
              </span>
            </h2>
            <p className="text-lg text-white/85 max-w-md mb-8">
              We learn best in conversation. Share a story, a question or a collaboration idea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="accent" className="rounded-full">
                <Link to="/get-involved">Get in touch</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-white text-plum hover:bg-pink">
                <Link to="/about">Read our story</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-56 sm:h-64">
            <Reveal delay={0.1} drift={20} className="absolute left-0 top-0 w-[55%] h-[80%]">
              <div aria-hidden className="w-full h-full rounded-[2rem] rounded-br-none border-[6px] border-white bauhaus-stripes-coral" />
            </Reveal>
            <Reveal delay={0.25} drift={-20} className="absolute right-0 bottom-0 w-[50%] h-[70%]">
              <div aria-hidden className="w-full h-full rounded-[2rem] rounded-tl-none border-[6px] border-white bg-pink grid place-items-center"><span className="w-1/3 aspect-square rounded-full bg-accent" /></div>
            </Reveal>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
