import { useRef, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MarkerTitle, PatternBar, Section, TextLink } from "@/components/layout/ui";
import { PhotoQuad, PhotoTrio, PillMosaic, Reveal } from "@/components/layout/motion";
import { cn } from "@/lib/utils";

const programmes = [
  {
    title: "Mental Health Dialogues",
    body: "Spaces to talk, listen and co-create solutions, so young people feel heard and less alone.",
  },
  {
    title: "Generational Perspective Dialogues",
    body: "Bridging young people and older generations to challenge harmful norms.",
  },
  {
    title: "Action Circles",
    body: "Games, music and shared activities that build relationships with no pressure.",
  },
  {
    title: "LoudHer",
    body: "A space for young women and girls to connect, express themselves and be heard.",
  },
  {
    title: "School Dialogues",
    body: "Students and teachers talking openly, so young people feel more supported.",
  },
  {
    title: "Referrals",
    body: "Connecting young people to appropriate support, early.",
  },
  {
    title: "Creative & Play-Based Activities",
    body: "Creativity, play and music as pathways to belonging.",
  },
];

const lessons = [
  "Information alone doesn't create connection. Presence does.",
  "People don't need to be experts to belong. They need an invitation.",
  "A single session can start a connection. Repeated opportunities give it somewhere to grow.",
  "Young people can help design the experiences intended for them.",
  "Connection can be a pathway to skills, participation, opportunity and wellbeing.",
];

const tileStyles = [
  "bg-primary text-white rounded-tl-[3rem]",
  "bg-plum text-white rounded-br-[3rem]",
  "bg-accent text-white rounded-tr-[3rem]",
  "bg-pink text-plum rounded-bl-[3rem]",
];

const strategy = [
  { word: "Create", body: "Spaces and experiences where young people feel safe to show up, express themselves and participate.", style: "bg-primary text-white rounded-tl-[4rem]" },
  { word: "Connect", body: "Opportunities for young people to meet, interact and build meaningful relationships.", style: "bg-plum text-white rounded-tr-[4rem]" },
  { word: "Improve", body: "The cognitive, social and emotional skills young people need to navigate relationships, challenges and opportunities, and to strengthen their wellbeing.", style: "bg-accent text-white rounded-bl-[4rem]" },
  { word: "Belong", body: "Repeated opportunities for connection to deepen into friendship, collaboration, community and a lasting sense of belonging.", style: "bg-pink text-plum rounded-br-[4rem]" },
];

const theory = [
  { label: "The problem", body: "Too many young people experience loneliness and social disconnection." },
  { label: "Who we work with", body: "Young people aged 15–35 in Uganda." },
  { label: "What we do", body: "We design meaningful experiences, spaces and opportunities that create the conditions for connection." },
  { label: "How we do it", body: "Through play, creative expression, shared experiences, dialogue, cognitive skills-building, participation and repeated opportunities to connect." },
  { label: "What changes", body: "Young people have greater opportunities to connect with others, build meaningful relationships and feel a sense of belonging. They develop cognitive, social and emotional skills, take part with more confidence, and gain access to support and opportunities." },
  { label: "Longer-term contribution", body: "Stronger relationships, greater belonging and improved participation, skills and wellbeing contribute to more connected young people and more connected communities." },
];

const team = [
  { name: "Don Zane Muwanguzi", role: "Founder", body: "Leads experience design, facilitation, programme development, partnerships and creative engagement." },
  { name: "Esther Nakyazi", role: "Project Assistant", body: "Supports project coordination, administration and financial management." },
  { name: "Nelson", role: "Finance & Administration", body: "Supports financial and administrative functions across the organisation." },
  { name: "Resper", role: "Administrative Assistant", body: "Supports day-to-day administration, coordination and organisational operations." },
];

const dotStyles = ["bg-primary", "bg-plum", "bg-accent", "bg-cobalt"];

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

function programmeTile(item: { title: string; body: string }, i: number) {
  return (
    <Reveal key={item.title} delay={(i % 4) * 0.08} className={cn("p-6 flex flex-col", tileStyles[i % tileStyles.length])}>
      <span className="font-heading font-black text-3xl opacity-60 mb-4">{String(i + 1).padStart(2, "0")}</span>
      <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
      <p className="text-sm opacity-90">{item.body}</p>
    </Reveal>
  );
}

/* Middle-column photos between the steps, each in a different Bauhaus shape */
const journeyPhotos = [
  {
    src: "/img_61.png",
    shape: "rounded-full aspect-square",
    backdrop: <div aria-hidden className="absolute -inset-4 rounded-full bauhaus-rings" />,
  },
  {
    src: "/img_29.png",
    shape: "rounded-t-full rounded-b-3xl aspect-[3/4]",
    backdrop: <div aria-hidden className="absolute inset-0 rounded-t-full rounded-b-3xl bg-pink translate-x-4 translate-y-4" />,
  },
  {
    src: "/o.jpg",
    shape: "rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl aspect-[4/3]",
    backdrop: <div aria-hidden className="absolute -right-4 -top-4 w-16 h-16 bg-accent [clip-path:polygon(0_0,100%_0,100%_100%)]" />,
  },
];

/* Z-shaped route through the 3x3 grid: step 1 -> 2 across, diagonal down to 3, across to 4, and so on */
const JOURNEY_PATH =
  "M 45 50 C 110 20, 190 80, 255 50 C 290 50, 10 110, 45 150 C 110 120, 190 180, 255 150 C 290 150, 10 210, 45 250 C 110 220, 190 280, 255 250";

function TheoryJourney() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const drawn = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <Section className="relative overflow-hidden">
      <div aria-hidden className="absolute -left-10 top-24 w-20 h-20 rounded-full bg-cobalt/20" />
      <Reveal className="text-center max-w-2xl mx-auto mb-14">
        <MarkerTitle className="mb-4 text-primary" accent="Change">
          Theory of
        </MarkerTitle>
        <PatternBar className="mx-auto mb-6" />
        <p className="text-lg text-muted-foreground">The road from disconnection to belonging, one step at a time.</p>
      </Reveal>

      <div ref={ref} className="relative">
        {/* The route, drawn in as you scroll (desktop) */}
        <svg
          aria-hidden
          viewBox="0 0 300 300"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full hidden lg:block pointer-events-none"
        >
          <defs>
            <linearGradient id="journey-stroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" />
              <stop offset="50%" stopColor="hsl(var(--plum))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          <path d={JOURNEY_PATH} fill="none" stroke="hsl(var(--plum) / 0.15)" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <motion.path
            d={JOURNEY_PATH}
            fill="none"
            stroke="url(#journey-stroke)"
            strokeWidth="6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: reduce ? 1 : drawn }}
          />
        </svg>

        <div className="relative grid lg:grid-cols-[1fr_0.8fr_1fr] gap-8 lg:gap-y-16 lg:gap-x-10 items-center">
          {[0, 1, 2].map((row) => (
            <JourneyRow key={row} row={row} />
          ))}
        </div>
      </div>

      {/* Destination */}
      <Reveal className="relative mt-16 max-w-3xl mx-auto bg-primary text-white rounded-[2.5rem] rounded-tr-[5rem] p-8 sm:p-10 text-center">
        <div aria-hidden className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-accent border-[6px] border-background grid place-items-center">
          <span className="w-3 h-3 rounded-full bg-white" />
        </div>
        <p className="font-heading font-bold uppercase tracking-widest text-sm text-pink mb-2">Five-year ambition</p>
        <p className="font-heading font-black text-4xl sm:text-6xl mb-4">
          2,000 <span className="text-2xl sm:text-3xl font-bold">→</span> 10,000
        </p>
        <p className="text-white/90 max-w-2xl mx-auto">
          We aim to directly support 2,000 young people to improve their wellbeing, and to contribute to advancing the wellbeing of 10,000 young people across local communities in Uganda. We'll test and refine this theory through evidence from our own practice.
        </p>
      </Reveal>
    </Section>
  );
}

function JourneyRow({ row }: { row: number }) {
  const photo = journeyPhotos[row];
  return (
    <>
      <JourneyStep index={row * 2} />
      <Reveal delay={0.1} drift={row % 2 ? -30 : 30} className="relative w-full max-w-[15rem] mx-auto">
        {photo.backdrop}
        <img src={photo.src} alt="" className={cn("relative w-full object-cover border-[6px] border-white shadow-strong", photo.shape)} />
      </Reveal>
      <JourneyStep index={row * 2 + 1} />
    </>
  );
}

function JourneyStep({ index }: { index: number }) {
  const step = theory[index];
  const color = dotStyles[index % dotStyles.length];
  return (
    <Reveal delay={index % 2 ? 0.2 : 0} className="relative bg-card rounded-3xl p-6 pt-8 shadow-medium overflow-hidden">
      <span aria-hidden className="absolute -right-2 -top-6 font-heading font-black text-8xl text-plum/5 select-none">
        {index + 1}
      </span>
      <span className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-white font-heading font-bold text-xs uppercase tracking-widest mb-3", color)}>
        Step {index + 1}
      </span>
      <h3 className="relative font-heading font-bold text-xl mb-2">{step.label}</h3>
      <p className="relative text-muted-foreground">{step.body}</p>
    </Reveal>
  );
}

/* 3x3 Bauhaus wall: community photos alternating with solid shape tiles, like the logo pattern */
const wall: ({ photo: string; shape: string } | { tile: ReactNode })[] = [
  { photo: "/img_51.png", shape: "rounded-full" },
  { tile: <div className="w-full h-full bg-plum rounded-tl-full" /> },
  { photo: "/img_17.png", shape: "rounded-2xl rounded-tr-[3rem]" },
  {
    tile: (
      <div className="w-full h-full bg-pink rounded-2xl grid place-items-center">
        <div className="w-1/2 h-1/2 rounded-full bg-accent" />
      </div>
    ),
  },
  { tile: <div className="w-full h-full rounded-t-full rounded-b-2xl bg-primary" /> },
  { tile: <div className="w-full h-full rounded-2xl bauhaus-stripes" /> },
  { tile: <div className="w-full h-full rounded-2xl rounded-bl-[3rem] bauhaus-stripes-coral" /> },
  {
    tile: (
      <div className="w-full h-full bg-cobalt rounded-2xl overflow-hidden">
        <div className="w-full h-full bg-accent [clip-path:polygon(50%_15%,100%_100%,0_100%)]" />
      </div>
    ),
  },
  { tile: <div className="w-full h-full rounded-full bauhaus-rings" /> },
];

function PeopleWall() {
  return (
    <div className="grid grid-cols-3 gap-3 max-w-[min(100%,60vh,30rem)] w-full mx-auto">
      {wall.map((cell, i) => (
        <Reveal key={i} delay={(i % 3) * 0.08 + Math.floor(i / 3) * 0.08} drift={i % 2 ? -12 : 12} className="aspect-square">
          {"photo" in cell ? (
            <img src={cell.photo} alt="" className={cn("w-full h-full object-cover border-4 border-white shadow-medium", cell.shape)} />
          ) : (
            cell.tile
          )}
        </Reveal>
      ))}
    </div>
  );
}

/* Team card with a Bauhaus "portrait": a shape composition behind the initials, different for each person */
const portraitBacks = [
  <>
    <div className="absolute inset-0 bg-primary" />
    <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-pink" />
  </>,
  <>
    <div className="absolute inset-0 bg-plum" />
    <div className="absolute left-0 bottom-0 w-24 h-24 rounded-tr-full bg-accent" />
  </>,
  <>
    <div className="absolute inset-0 bg-accent" />
    <div className="absolute right-0 top-0 w-1/2 h-full bauhaus-stripes opacity-60" />
  </>,
  <>
    <div className="absolute inset-0 bg-cobalt" />
    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-32 h-16 rounded-t-full bg-plum" />
  </>,
];

function TeamCard({ person, index }: { person: (typeof team)[number]; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="group bg-card rounded-3xl overflow-hidden border border-border shadow-soft hover:shadow-medium transition-shadow">
      <div aria-hidden className="relative h-28 overflow-hidden">
        {portraitBacks[index % portraitBacks.length]}
      </div>
      <div className="px-6 pb-6">
        <div className="relative -mt-10 mb-4 w-20 h-20 rounded-full bg-white border-4 border-white grid place-items-center font-heading font-black text-2xl text-plum shadow-medium transition-transform group-hover:scale-110">
          {initials(person.name)}
        </div>
        <h3 className="font-heading font-bold text-lg">{person.name}</h3>
        <p className="text-sm font-heading font-semibold text-accent mb-2">{person.role}</p>
        <p className="text-sm text-muted-foreground">{person.body}</p>
      </div>
    </Reveal>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-background font-body pt-2">
      {/* Hero */}
      <section className="relative overflow-hidden mx-2 rounded-[1.75rem] pt-28 sm:pt-32 pb-20 bg-white border border-border">
        {/* Bauhaus backdrop on white: shapes hug the edges and sit behind the photo, never behind the text */}
        <div aria-hidden className="absolute right-[-6%] top-[12%] w-[70vw] max-w-[40rem] aspect-square rounded-full bg-pink/30 hidden lg:block" />
        <div aria-hidden className="absolute right-0 top-0 w-1/2 h-full halftone-dots hidden lg:block" />
        <div aria-hidden className="absolute left-0 top-0 w-20 sm:w-28 lg:w-36 aspect-square rounded-br-full bg-cobalt" />
        <div aria-hidden className="absolute left-0 bottom-0 w-28 sm:w-40 lg:w-52 aspect-square rounded-tr-full bg-plum" />
        <div aria-hidden className="absolute left-0 bottom-0 w-14 sm:w-20 lg:w-24 aspect-square rounded-tr-full bauhaus-stripes-coral" />
        <div aria-hidden className="absolute left-[44%] top-0 w-28 sm:w-36 h-14 sm:h-[4.5rem] rounded-b-full bg-accent hidden md:block" />
        <div aria-hidden className="absolute -right-20 -bottom-20 w-56 h-56 sm:w-72 sm:h-72 rounded-full bauhaus-rings-blue" />
        <div aria-hidden className="absolute left-[40%] bottom-14 w-12 h-12 bg-cobalt [clip-path:polygon(50%_0,100%_100%,0_100%)] hidden lg:block animate-bauhaus-float" />
        <div aria-hidden className="absolute left-[48%] top-[30%] w-6 h-6 rounded-full border-4 border-accent hidden lg:block animate-bauhaus-float [animation-delay:-2s]" />
        <div aria-hidden className="absolute right-[4%] top-[20%] w-5 h-5 rounded-full bg-plum hidden lg:block animate-bauhaus-float [animation-delay:-4s]" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 pattern-bar-full" />
        <div className="relative container mx-auto px-6 grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-12 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-14 h-14 rounded-full bg-plum text-white grid place-items-center font-heading font-black text-xs leading-tight text-center shadow-medium">
                  Since
                  <br />
                  2019
                </span>
                <p className="font-heading font-bold uppercase tracking-widest text-sm text-accent">About us</p>
              </div>
              <h1 className="font-heading font-black text-5xl md:text-7xl leading-none text-primary mb-6">
                Our{" "}
                <span className="relative inline-block">
                  <span aria-hidden className="absolute inset-x-[-0.15em] bottom-[0.05em] h-[0.45em] bg-pink -rotate-2" />
                  <span className="relative">Story</span>
                </span>
              </h1>
              <PatternBar className="mb-8 max-w-xs" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl font-heading font-semibold text-foreground mb-4">It started with a struggle to connect.</p>
              <p className="text-lg text-muted-foreground max-w-lg">
                Since 2019 we've been designing the conditions for young people in Uganda to connect, belong and thrive.
              </p>
            </Reveal>
          </div>
          {/* Scaled rather than widened, so the photo grows without pushing the text or hero height */}
          <PillMosaic src="/img_3.png" alt="" className="w-full max-w-[min(50rem,69vh)] mx-auto scale-110 lg:scale-[1.3] origin-center" />
        </div>
      </section>

      {/* Origin */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <MarkerTitle className="mb-6 text-primary" accent="crowded room.">
                Alone in a
              </MarkerTitle>
              <PatternBar className="mb-8" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground mb-6">
                Growing up in Kampala, Don Zane Muwanguzi knew what it felt like to be alone in a crowded room. Put him in the right room, with people willing to listen without judgement, and he became fully present. That contrast raised a question: what happens when people have the right space to connect?
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-muted-foreground">
                In 2019, Awesome Mind Speaks began with a simple idea, that we need to talk about mental health. Over time, we discovered the real challenge was disconnection, and that people mostly need the right conditions to become more of who they already are. That's the idea behind{" "}
                <span className="font-heading font-semibold text-foreground">Connection by Design</span>.
              </p>
            </Reveal>
          </div>
          <PhotoTrio
            images={[
              { src: "/img_15.png", alt: "A young person alone in a crowded room" },
              { src: "/img_26.png", alt: "" },
              { src: "/img_32.png", alt: "" },
            ]}
          />
        </div>
      </Section>

      {/* Vision & mission */}
      <Section className="bg-secondary">
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal className="relative overflow-hidden bg-plum text-white p-8 sm:p-10 rounded-tl-[4rem]">
            <div aria-hidden className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bauhaus-rings opacity-80" />
            <p className="relative font-heading font-bold uppercase tracking-widest text-sm text-pink mb-4">Our Vision</p>
            <p className="relative text-xl sm:text-2xl font-heading font-semibold leading-snug">
              A world where young people grow up in communities where connection, belonging, participation and wellbeing are part of everyday life.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="relative overflow-hidden bg-primary text-white p-8 sm:p-10 rounded-br-[4rem]">
            <div aria-hidden className="absolute -right-6 -top-6 w-24 h-24 bg-accent [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
            <p className="relative font-heading font-bold uppercase tracking-widest text-sm text-pink mb-4">Our Mission</p>
            <p className="relative text-xl sm:text-2xl font-heading font-semibold leading-snug">
              To design meaningful experiences, spaces and opportunities that help young people connect, participate, belong and improve their wellbeing.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* What we do */}
      <Section>
        <Reveal>
          <MarkerTitle className="mb-3">What We Do</MarkerTitle>
          <p className="font-heading text-xl mb-4">Connection by Design in practice</p>
          <PatternBar className="mb-10" />
        </Reveal>
        {/* Mixed grid: a tall photo and a wide photo slot in among the programme tiles.
            4 columns x 3 rows on desktop: tall photo spans 2 rows, wide photo spans 2 columns. */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 [grid-auto-flow:dense]">
          <Reveal className="group relative overflow-hidden row-span-2 min-h-[20rem] rounded-tl-[4rem] rounded-br-[4rem]">
            <img
              src="/img_24.png"
              alt="Young people taking part in an Awesome Mind Speaks programme"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div aria-hidden className="absolute -right-8 -top-8 w-24 h-24 rounded-full bauhaus-rings" />
          </Reveal>

          {programmes.slice(0, 4).map((item, i) => programmeTile(item, i))}

          <Reveal delay={0.1} className="group relative overflow-hidden sm:col-span-2 min-h-[14rem] rounded-3xl rounded-tr-[4rem]">
            <img
              src="/img_40.png"
              alt="Young people connecting through play and creativity"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div aria-hidden className="absolute right-6 bottom-6 w-14 h-14 bg-pink [clip-path:polygon(50%_0,100%_100%,0_100%)] animate-bauhaus-float" />
          </Reveal>

          {programmes.slice(4).map((item, i) => programmeTile(item, i + 4))}

          <Reveal delay={0.24} className="p-6 flex flex-col justify-between gap-4 border-2 border-dashed border-plum rounded-3xl">
            <p className="font-heading font-semibold text-plum">
              The School of Connection turns what we've learned into practical training for the people who support young people.
            </p>
            <TextLink to="/school">Explore the School</TextLink>
          </Reveal>
        </div>
      </Section>

      {/* Belief */}
      <Section className="relative overflow-hidden bg-plum text-white">
        <div aria-hidden className="absolute left-[52%] top-10 hidden lg:block w-12 h-12 bg-cobalt [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
        <div className="relative grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
          <div>
            <Reveal>
              <p className="font-heading font-bold uppercase tracking-widest text-sm text-pink mb-4">The belief behind the work</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-heading font-black text-3xl sm:text-5xl leading-tight mb-8">
                Every young person carries a spark. We exist to help that spark come alive with others.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-white/85 max-w-2xl">
                Sometimes it gets covered by isolation, self-doubt, exclusion or simply not having the right people around. Our job is to create the spaces, experiences and opportunities where young people can be seen and heard, connect with others, and become more of who they already are. Because connection shouldn't happen by chance. It should be designed for.
              </p>
            </Reveal>
          </div>
          {/* "Spark": round photo inside a turning Bauhaus sunburst, with bold shapes cutting across it */}
          <div className="relative w-full max-w-[min(100%,62vh,32rem)] mx-auto aspect-square">
            <div aria-hidden className="absolute inset-0 rounded-full bauhaus-sunburst animate-bauhaus-spin" />
            <Reveal drift={20} className="absolute inset-[6%]">
              <img
                src="/img_25.png"
                alt="A young person at an Awesome Mind Speaks experience"
                className="w-full h-full object-cover rounded-full border-[6px] border-plum shadow-strong"
              />
            </Reveal>
            {/* Second, smaller photo overlapping the big one, drifting the opposite way */}
            <Reveal delay={0.2} drift={-35} className="absolute -left-[4%] bottom-[-2%] w-[38%] aspect-square">
              <div aria-hidden className="absolute inset-0 rounded-full bg-cobalt -translate-x-2 translate-y-2" />
              <img
                src="/img_30.png"
                alt=""
                className="relative w-full h-full object-cover rounded-full border-[6px] border-plum shadow-strong"
              />
            </Reveal>
            <div aria-hidden className="absolute right-[2%] top-[2%] w-[24%] aspect-square rounded-bl-full bg-pink" />
            <div aria-hidden className="absolute right-[8%] bottom-[12%] w-[12%] aspect-square rounded-full bg-accent border-4 border-plum animate-bauhaus-float" />
            <div aria-hidden className="absolute left-[10%] top-[10%] w-[7%] aspect-square rounded-full bg-white" />
          </div>
        </div>
      </Section>

      {/* Strategy */}
      <Section>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          <div>
            <Reveal>
              <MarkerTitle className="mb-6" accent="Strategy">
                Our
              </MarkerTitle>
              <PatternBar className="mb-8" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl font-heading font-semibold mb-6">Four connected ideas, happening at once.</p>
              <p className="text-lg text-muted-foreground mb-6">
                These happen at the same time, not in sequence. A young person can be creating while connecting, connecting while learning, and learning while developing a deeper sense of belonging.
              </p>
              <p className="font-heading font-bold text-xl text-primary">Create. Connect. Improve. Belong.</p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {strategy.map((item, i) => (
              <Reveal key={item.word} delay={i * 0.1} className={cn("p-6 sm:p-8", item.style)}>
                <h3 className="font-heading font-black text-3xl mb-3">{item.word}</h3>
                <p className="text-sm opacity-90">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* What we've learned */}
      <Section className="bg-cobalt/10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <PhotoQuad
            images={[
              { src: "/img_21.png", alt: "Two students reading together" },
              null,
              null,
              { src: "/img_36.png", alt: "A facilitator guiding a creative group activity" },
            ]}
            className="order-last lg:order-first max-w-lg w-full mx-auto"
          />
          <div>
            <Reveal>
              <MarkerTitle className="mb-4 text-primary">What We've Learned</MarkerTitle>
              <p className="text-lg text-muted-foreground mb-8">More than six years of practice have changed how we think.</p>
            </Reveal>
            <ol className="space-y-4 mb-8">
              {lessons.map((item, i) => (
                <li key={item}>
                  <Reveal delay={i * 0.06} className="flex gap-4 items-start">
                    <span className={cn("shrink-0 w-9 h-9 rounded-full grid place-items-center font-heading font-bold text-white", dotStyles[i % dotStyles.length])}>
                      {i + 1}
                    </span>
                    <span className="text-lg pt-1">{item}</span>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal>
              <p className="text-lg font-heading font-semibold border-l-4 border-accent pl-4">
                The biggest lesson: impact isn't only what happens in the room. It's what happens between people, and what continues afterwards.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Theory of change */}
      <TheoryJourney />

      {/* People */}
      <Section className="relative overflow-hidden bg-secondary">
        <div aria-hidden className="absolute -right-16 top-10 w-40 h-40 rounded-full bauhaus-rings-blue opacity-40" />
        <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
          <div>
            <Reveal>
              <MarkerTitle className="mb-6 text-primary" accent="People">
                Our
              </MarkerTitle>
              <PatternBar className="mb-8" />
              <p className="text-2xl font-heading font-semibold mb-6">Good work starts with people who care.</p>
            </Reveal>
            <Reveal delay={0.1} className="space-y-4 text-lg text-muted-foreground">
              <p>
                We're a small core team and a wider network of young people, creatives, facilitators, practitioners, community members and partners, combining lived experience, professional expertise, creativity and community knowledge.
              </p>
              <p className="border-l-4 border-accent pl-4">
                <span className="font-heading font-semibold text-foreground">Young people are not simply an audience.</span> Some work with us as co-creators, others on projects or paid gigs. We don't simply design for young people. We design with them.
              </p>
            </Reveal>
          </div>
          <PeopleWall />
        </div>

        <Reveal className="flex items-end justify-between gap-4 mb-6">
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-primary">Core team</h3>
          <PatternBar className="max-w-[8rem] mb-2" />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {team.map((person, i) => (
            <TeamCard key={person.name} person={person} index={i} />
          ))}
        </div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-5">
          <Reveal className="relative overflow-hidden bg-plum text-white rounded-3xl rounded-bl-[4rem] p-8">
            <h3 className="font-heading font-bold text-2xl mb-3">Board</h3>
            <p className="text-white/85 mb-6">
              A five-person Board of Directors provides governance, oversight, accountability and strategic guidance.
            </p>
            {/* One mark per board member */}
            <div aria-hidden className="flex gap-3">
              <span className="w-9 h-9 rounded-full bg-accent" />
              <span className="w-9 h-9 bg-cobalt" />
              <span className="w-9 h-9 bg-pink [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
              <span className="w-9 h-9 rounded-full border-4 border-pink" />
              <span className="w-9 h-9 rounded-tl-full bg-white" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="relative overflow-hidden bg-card border border-border rounded-3xl rounded-tr-[4rem] p-8 grid sm:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <h3 className="font-heading font-bold text-2xl text-primary mb-3">Our wider network</h3>
              <p className="text-muted-foreground mb-3">
                For specific projects we bring in collaborators, from creative production and facilitation to specialist expertise and lived experience, including Coolbricks, Once Upon A Beach and Collaboration 360.
              </p>
              <p className="font-heading font-semibold text-accent">We don't build everything ourselves. We build with people.</p>
            </div>
            <div className="flex -space-x-5">
              {["bg-primary", "bg-plum", "bauhaus-stripes-coral", "bg-pink"].map((fill) => (
                <span key={fill} aria-hidden className={cn("w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-medium", fill)} />
              ))}
              <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent text-white border-4 border-white shadow-medium grid place-items-center font-heading font-black text-lg">
                +
              </span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Close */}
      <Section>
        <Reveal
          drift={0}
          className="relative overflow-hidden bg-plum text-white rounded-[2.5rem] rounded-tr-[6rem] px-6 sm:px-12 pt-12 lg:py-14 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-end lg:items-center"
        >
          <div aria-hidden className="absolute -left-16 -top-16 w-48 h-48 rounded-full bauhaus-rings opacity-70" />
          <div aria-hidden className="absolute right-[45%] top-8 w-10 h-10 bg-cobalt [clip-path:polygon(50%_0,100%_100%,0_100%)] hidden lg:block animate-bauhaus-float" />
          <div className="relative lg:pb-0 pb-2">
            <p className="font-heading font-bold uppercase tracking-widest text-sm text-pink mb-4">Open the door</p>
            <h2 className="font-heading font-black text-4xl sm:text-5xl leading-tight mb-5">
              Build connection{" "}
              <span className="relative inline-block">
                <span aria-hidden className="absolute inset-x-[-0.1em] bottom-[0.05em] h-[0.4em] bg-accent -rotate-2" />
                <span className="relative">with us.</span>
              </span>
            </h2>
            <p className="text-lg text-white/85 max-w-md mb-8">
              Partner with us, support the work, or see who we already build with.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="accent" className="rounded-full">
                <Link to="/get-involved">Get involved</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-white text-plum hover:bg-pink">
                <Link to="/#partners">Meet our partners</Link>
              </Button>
            </div>
          </div>
          {/* Three doorway arches rising left to right, each with a coloured arch behind */}
          <div className="relative flex items-end justify-center gap-3 sm:gap-4 h-[min(48vh,22rem)] -mb-px">
            {[
              { fill: "bauhaus-stripes-coral", h: "h-[62%]", back: "bg-pink" },
              { fill: "bg-pink", h: "h-[82%]", back: "bg-accent" },
              { src: "/img_2.png", h: "h-full", back: "bg-cobalt" },
            ].map((door, i) => (
              <Reveal key={i} delay={0.1 + i * 0.12} drift={10 + i * 12} className={cn("relative w-1/3 max-w-[9.5rem]", door.h)}>
                <div aria-hidden className={cn("absolute inset-0 rounded-t-full -translate-y-3 translate-x-2", door.back)} />
                {door.src ? (
                  <img src={door.src} alt="The Awesome Mind Speaks team" className="relative w-full h-full object-cover rounded-t-full border-4 border-b-0 border-white" />
                ) : (
                  <div aria-hidden className={cn("relative w-full h-full rounded-t-full border-4 border-b-0 border-white", door.fill)} />
                )}
              </Reveal>
            ))}
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
