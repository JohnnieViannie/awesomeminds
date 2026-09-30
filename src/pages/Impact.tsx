import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  MarkerTitle,
  PatternBar,
  Section,
  TextLink,
} from "@/components/layout/ui";
import { BubbleCluster, CountUp, Reveal } from "@/components/layout/motion";
import { cn } from "@/lib/utils";

const reach = [
  {
    to: 5000,
    suffix: "+",
    label: "Young people reached",
    style: "bg-primary text-white rounded-tl-[4rem] lg:col-span-2",
  },
  {
    to: 20,
    suffix: "+",
    label: "Experiences designed and delivered",
    style: "bg-plum text-white rounded-br-[4rem]",
  },
  {
    to: 20,
    suffix: "+",
    label: "Partnerships and collaborations",
    style: "bg-pink text-plum rounded-tr-[4rem]",
  },
  {
    to: 60,
    suffix: "",
    label: "Teachers trained",
    style: "bg-accent text-white rounded-bl-[4rem]",
  },
  {
    to: 1000,
    suffix: "",
    label: "Menstrual cups provided",
    style: "bg-cobalt text-white rounded-tl-[4rem]",
  },
  {
    to: 30,
    suffix: "",
    label: "Cultural and religious leaders trained",
    style:
      "bg-card border-2 border-plum text-plum rounded-br-[4rem] lg:col-span-2",
  },
];

const lenses = [
  {
    title: "Connection",
    body: "Did people meet and form meaningful connections?",
  },
  {
    title: "Belonging",
    body: "Did they feel seen, heard, valued and part of something?",
  },
  {
    title: "Skills",
    body: "Did they build cognitive, social or emotional skills?",
  },
  {
    title: "Participation",
    body: "Did they feel more confident contributing?",
  },
  {
    title: "Wellbeing",
    body: "Did relevant aspects of their wellbeing improve?",
  },
  { title: "Continuity", body: "Did it continue after the experience?" },
];

const change = [
  {
    title: "Dialogue",
    body: "Space to speak and be heard → connection and participation.",
  },
  {
    title: "Play & Creativity",
    body: "Lowers barriers between strangers → confidence and belonging.",
  },
  {
    title: "Shared Experiences",
    body: "A reason to return → relationships and community.",
  },
  {
    title: "Cognitive Skills-Building",
    body: "Problem-solving and communication → skills and participation.",
  },
  {
    title: "Repeated Opportunities",
    body: "Time to deepen → friendship, collaboration, belonging.",
  },
];

const voices = [
  "I made a good friend and we have plans.",
  "I spoke for the first time in a crowd.",
  "I feel less anxious.",
  "I got a gig.",
];

const moments = [
  { src: "/img_49.png", text: "A student finds the confidence to speak." },
  {
    src: "/img_9.png",
    text: "A group of strangers becomes a team of collaborators.",
  },
  {
    src: "/img_4.png",
    text: "Someone arrives alone and finds a reason to return.",
  },
];

const levels = [
  { name: "Reach", src: "/img_65.png", height: "h-[48%]", base: "bg-pink text-plum" },
  { name: "Experience", src: "/img_62.png", height: "h-[64%]", base: "bg-accent text-white" },
  { name: "Change", src: "/img_67.png", height: "h-[82%]", base: "bg-plum text-white" },
  { name: "Continuity", src: "/img_8.png", height: "h-full", base: "bg-primary text-white" },
];

const marks = [
  "rounded-full bg-accent",
  "bg-cobalt",
  "bg-plum [clip-path:polygon(50%_0,100%_100%,0_100%)]",
  "rounded-tl-full bg-pink",
];
const solid = ["bg-primary", "bg-plum", "bg-accent", "bg-cobalt", "bg-pink"];

/* Four photos cut as quarter-circles that meet to form one round flower */
function FourLeaf() {
  const leaves = [
    { src: "/img_12.png", shape: "rounded-tl-full" },
    { src: "/img_14.png", shape: "rounded-tr-full" },
    { src: "/img_28.png", shape: "rounded-bl-full" },
    { src: "/img_16.png", shape: "rounded-br-full" },
  ];
  return (
    <div className="relative w-full max-w-[min(30rem,58vh)] mx-auto aspect-square">
      <div
        aria-hidden
        className="absolute -inset-4 rounded-full border-4 border-dashed border-pink"
      />
      {/* Fixed 2x2: each quarter is a square cell the photo fills, whatever the photo's own shape */}
      <div className="relative grid grid-cols-2 grid-rows-2 gap-3 w-full h-full">
        {leaves.map((leaf, i) => (
          <Reveal key={leaf.src} delay={i * 0.12} drift={0} className="relative min-h-0 min-w-0">
            <img
              src={leaf.src}
              alt=""
              className={cn(
                "absolute inset-0 w-full h-full object-cover shadow-medium",
                leaf.shape,
              )}
            />
          </Reveal>
        ))}
      </div>
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="w-[26%] aspect-square rounded-full bg-plum border-8 border-white shadow-strong grid place-items-center text-white text-center">
          <span className="font-heading font-black leading-none text-xl sm:text-2xl">
            2019
            <span className="block text-[0.6rem] sm:text-xs font-bold uppercase tracking-widest text-pink mt-1">
              since
            </span>
          </span>
        </div>
      </div>
      <span
        aria-hidden
        className="absolute -right-2 top-[8%] w-8 h-8 bg-accent [clip-path:polygon(50%_0,100%_100%,0_100%)] animate-bauhaus-float"
      />
    </div>
  );
}

export default function Impact() {
  return (
    <div className="min-h-screen bg-background font-body pt-2">
      {/* Hero */}
      <section className="relative overflow-hidden mx-2 rounded-[1.75rem] pt-28 sm:pt-32 pb-20 bg-white border border-border">
        <div
          aria-hidden
          className="absolute left-0 top-0 w-20 sm:w-28 lg:w-36 aspect-square rounded-br-full bg-accent"
        />
        <div
          aria-hidden
          className="absolute left-0 bottom-0 w-14 sm:w-20 aspect-square rounded-tr-full bg-plum"
        />
        <div
          aria-hidden
          className="absolute left-[44%] top-0 w-28 sm:w-36 h-14 sm:h-[4.5rem] rounded-b-full bg-pink hidden md:block"
        />
        <div
          aria-hidden
          className="absolute -right-20 -bottom-20 w-56 h-56 sm:w-72 sm:h-72 rounded-full bauhaus-rings-blue"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 pattern-bar-full"
        />
        <div className="relative container mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <Reveal>
              <p className="font-heading font-bold uppercase tracking-widest text-sm text-accent mb-4">
                Our impact
              </p>
              <h1 className="font-heading font-black text-5xl md:text-7xl leading-none text-primary mb-6">
                Connection leaves a{" "}
                <span className="relative inline-block">
                  <span
                    aria-hidden
                    className="absolute inset-x-[-0.1em] bottom-[0.05em] h-[0.4em] bg-pink -rotate-2"
                  />
                  <span className="relative">mark.</span>
                </span>
              </h1>
              <PatternBar className="mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-lg mb-8">
                Since 2019, we've designed spaces where young people can
                connect, participate, belong and improve their wellbeing. The
                numbers tell part of the story.
              </p>
              <div className="flex gap-8">
                <div>
                  <CountUp
                    to={5000}
                    suffix="+"
                    className="block font-heading font-black text-4xl text-primary"
                  />
                  <p className="text-sm text-muted-foreground">young people</p>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <CountUp
                    to={20}
                    suffix="+"
                    className="block font-heading font-black text-4xl text-accent"
                  />
                  <p className="text-sm text-muted-foreground">experiences</p>
                </div>
              </div>
            </Reveal>
          </div>
          <FourLeaf />
        </div>
      </section>

      {/* Reach: bento of counting tiles */}
      <Section>
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <MarkerTitle className="mb-4" accent="Reach">
              Our
            </MarkerTitle>
            <PatternBar />
          </div>
          <p className="text-muted-foreground max-w-xs">
            Who showed up, and what we put in their hands.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reach.map((item, i) => (
            <Reveal
              key={item.label}
              delay={(i % 4) * 0.08}
              className={cn(
                "relative overflow-hidden p-7 min-h-[11rem] flex flex-col justify-end",
                item.style,
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "absolute right-5 top-5 w-6 h-6 opacity-70",
                  marks[i % marks.length],
                  "bg-white/40",
                )}
              />
              <CountUp
                to={item.to}
                suffix={item.suffix}
                className="block font-heading font-black text-5xl sm:text-6xl leading-none mb-2"
              />
              <p className="font-heading font-semibold opacity-90">
                {item.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Reach is not impact */}
      <Section className="bg-secondary">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">
          {/* Photo bubbles fill the whole left column */}
          <BubbleCluster
            images={[
              { src: "/img_1.png", alt: "Young people connecting at an Awesome Mind Speaks experience" },
              { src: "/img_63.png", alt: "" },
              { src: "/img_35.png", alt: "" },
              { src: "/img_23.png", alt: "" },
            ]}
            className="max-w-[min(100%,80vh)] mx-auto order-last lg:order-first"
          />
          <div>
            <Reveal>
              <MarkerTitle className="mb-6 text-primary" accent="impact">
                Reach is not
              </MarkerTitle>
              <PatternBar className="mb-6" />
              <p className="text-lg text-muted-foreground line-through decoration-accent decoration-4 mb-1">
                Attendance tells us who showed up.
              </p>
              <p className="text-xl font-heading font-bold text-plum mb-4">
                It doesn't tell us what happened.
              </p>
              <p className="mb-6">So we look at six things instead.</p>
            </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {lenses.map((lens, i) => (
              <Reveal
                key={lens.title}
                delay={(i % 2) * 0.08 + Math.floor(i / 2) * 0.06}
                className="bg-white rounded-2xl p-4 shadow-soft flex gap-3"
              >
                <span
                  aria-hidden
                  className={cn("shrink-0 w-6 h-6 mt-0.5", marks[i % marks.length])}
                />
                <div>
                  <h3 className="font-heading font-bold text-base text-primary">
                    {lens.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{lens.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          </div>
        </div>
      </Section>

      {/* Moments we design for */}
      <Section className="relative overflow-hidden bg-plum text-white">
        <div
          aria-hidden
          className="absolute -left-20 -top-20 w-56 h-56 rounded-full bauhaus-rings opacity-70"
        />
        <div className="relative">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="font-heading font-bold uppercase tracking-widest text-sm text-pink mb-4">
              These are the moments we design for
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-5xl leading-tight">
              What happens when people connect?
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-10">
            {moments.map((m, i) => (
              <Reveal
                key={m.src}
                delay={i * 0.15}
                drift={i === 1 ? -25 : 25}
                className="text-center"
              >
                <div className="relative w-[min(100%,15rem)] mx-auto aspect-square mb-6">
                  <div
                    aria-hidden
                    className={cn(
                      "absolute inset-0 rounded-full translate-x-3 translate-y-3",
                      ["bg-accent", "bg-cobalt", "bg-pink"][i],
                    )}
                  />
                  <img
                    src={m.src}
                    alt=""
                    className="relative w-full h-full object-cover rounded-full border-[6px] border-white"
                  />
                </div>
                <p className="font-heading font-bold text-xl max-w-xs mx-auto">
                  {m.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* From activities to change: activity -> what it does -> what it builds */}
      <Section>
        <Reveal className="mb-12">
          <MarkerTitle className="mb-4" accent="change">
            From activities to
          </MarkerTitle>
          <PatternBar />
        </Reveal>
        <div className="space-y-4">
          {change.map((item, i) => {
            const [how, result] = item.body.replace(/\.$/, "").split(" → ");
            return (
              <Reveal
                key={item.title}
                delay={i * 0.06}
                className="grid md:grid-cols-[16rem_1fr_auto_1fr] gap-3 md:gap-5 items-center bg-card border border-border rounded-3xl p-4 md:p-5"
              >
                <span
                  className={cn(
                    "rounded-full px-5 py-3 font-heading font-bold text-white text-center",
                    solid[i % solid.length],
                    i % solid.length === 4 && "text-plum",
                  )}
                >
                  {item.title}
                </span>
                <p className="text-muted-foreground md:px-2">{how}</p>
                <span
                  aria-hidden
                  className="hidden md:block w-12 h-1 rounded-full bg-gradient-to-r from-plum/20 to-accent relative after:absolute after:right-[-4px] after:top-1/2 after:-translate-y-1/2 after:border-y-[7px] after:border-y-transparent after:border-l-[10px] after:border-l-accent"
                />
                <p className="font-heading font-semibold text-plum first-letter:uppercase">
                  {result}
                </p>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Measurement approach: four rising levels */}
      <Section className="bg-cobalt/10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <MarkerTitle className="mb-6 text-primary" accent="approach">
                Our measurement
              </MarkerTitle>
              <PatternBar className="mb-8" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl font-heading font-semibold mb-6">
                We measure what we create, what people experience and what
                continues.
              </p>
              <p className="text-lg text-muted-foreground">
                Four levels, for every programme. We combine numbers with
                participant stories and follow-up, and we're honest about what
                we can and can't claim caused what.
              </p>
            </Reveal>
          </div>
          {/* Four rising arches: each level is a photo standing on a coloured base */}
          <div
            className="flex items-end gap-3 sm:gap-4 h-[min(55vh,26rem)]"
            role="img"
            aria-label="Four levels of measurement: reach, experience, change, continuity"
          >
            {levels.map((level, i) => (
              <Reveal
                key={level.name}
                delay={i * 0.12}
                drift={i % 2 ? -15 : 15}
                className={cn("flex-1 flex flex-col", level.height)}
              >
                <div className="relative flex-1 min-h-0 overflow-hidden rounded-t-full border-4 border-b-0 border-white shadow-medium">
                  <img
                    src={level.src}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div
                  className={cn(
                    "h-20 rounded-b-2xl flex flex-col items-center justify-center text-center px-1",
                    level.base,
                  )}
                >
                  <span className="font-heading font-black text-2xl leading-none opacity-70">
                    {i + 1}
                  </span>
                  <span className="font-heading font-bold text-xs sm:text-sm">
                    {level.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* School of Connection tracking */}
      <Section>
        <Reveal className="relative overflow-hidden bg-primary text-white rounded-[2.5rem] rounded-tl-[5rem] p-8 sm:p-12 grid md:grid-cols-[auto_1fr] gap-8 items-center">
          <div
            aria-hidden
            className="absolute -right-12 -bottom-12 w-44 h-44 rounded-full bauhaus-rings opacity-60"
          />
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full bg-pink translate-x-3 -translate-y-3"
            />
            <div aria-hidden className="relative w-full h-full rounded-full border-[6px] border-white bauhaus-rings" />
          </div>
          <div className="relative">
            <p className="font-heading font-bold uppercase tracking-widest text-sm text-pink mb-3">
              Learning & practice
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl mb-4">
              The School of Connection
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mb-6">
              We track participation, competency and application after the
              programme, not just completion.
            </p>
            <TextLink to="/school" className="text-white hover:text-pink">
              Explore The School of Connection
            </TextLink>
          </div>
        </Reveal>
      </Section>

      {/* Participant voices: speech bubbles */}
      <Section className="bg-secondary">
        <Reveal className="text-center mb-12">
          <MarkerTitle className="mb-4 text-primary" accent="voices">
            Participant
          </MarkerTitle>
          <PatternBar className="mx-auto" />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-start">
          {voices.map((quote, i) => (
            <Reveal
              key={quote}
              delay={i * 0.1}
              drift={i % 2 ? -20 : 20}
              className={cn(
                "relative p-7 pt-10 rounded-[2rem] shadow-medium",
                [
                  "bg-primary text-white rounded-bl-none",
                  "bg-white text-plum rounded-br-none lg:mt-10",
                  "bg-accent text-white rounded-bl-none",
                  "bg-plum text-white rounded-br-none lg:mt-10",
                ][i],
              )}
            >
              <span
                aria-hidden
                className="absolute -top-6 left-6 font-heading font-black text-7xl leading-none text-pink"
              >
                “
              </span>
              <p className="font-heading font-bold text-xl leading-snug">
                {quote}
              </p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Gallery teaser */}
      <Section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
          <Reveal>
            <MarkerTitle className="mb-6" accent="moments">
              See the
            </MarkerTitle>
            <PatternBar className="mb-8" />
            <p className="text-lg text-muted-foreground mb-8">
              People, stories and moments from our experiences.
            </p>
            <Button asChild size="lg" variant="accent" className="rounded-full">
              <Link to="/gallery">Visit the gallery</Link>
            </Button>
          </Reveal>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {[
              { fill: "bg-pink", cls: "h-40 sm:h-56 rounded-t-full rounded-b-2xl" },
              { fill: "bg-primary", cls: "h-52 sm:h-72 rounded-3xl rounded-tr-[4rem]" },
              { fill: "bauhaus-stripes-coral", cls: "h-36 sm:h-48 rounded-full" },
              { fill: "bg-plum", cls: "h-48 sm:h-64 rounded-b-full rounded-t-2xl" },
            ].map((p, i) => (
              <Reveal
                key={p.fill}
                delay={i * 0.1}
                drift={i % 2 ? -30 : 30}
                className="flex-1 max-w-[10rem]"
              >
                <Link to="/gallery" aria-label="Open the gallery">
                  <span aria-hidden className={cn("block w-full shadow-medium border-4 border-white", p.cls, p.fill)} />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
