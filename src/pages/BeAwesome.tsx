import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MarkerTitle, PatternBar, Section } from "@/components/layout/ui";
import { BubbleCluster, CountUp, Reveal } from "@/components/layout/motion";
import { cn } from "@/lib/utils";

const ways = [
  { title: "Work Club", tag: "Work + social connection", body: "Bring your laptop and get things done alongside other people." },
  { title: "Skill Swap", tag: "Skills + peer learning", body: "Teach a skill, learn one, meet someone." },
  { title: "Connection Circle", tag: "Conversation + belonging", body: "Real conversation, no networking performance." },
  { title: "Gig Lab", tag: "Networks + opportunity", body: "Meet future collaborators and clients." },
  { title: "Happy Hour", tag: "Social connection + leisure", body: "Music, conversation, no agenda." },
  { title: "Creative Lab", tag: "Creativity + collaboration", body: "Music, photography, painting, storytelling." },
];

const involve = [
  { title: "Come", body: "Be one of the first people through the door." },
  { title: "Create", body: "Bring your skills, ideas or creative energy." },
  { title: "Partner", body: "Help us test a new model for connection." },
  { title: "Fund", body: "Support the development, launch and learning of the first Be Awesome Space." },
];

const journey = ["Meet", "Participate", "Learn", "Create", "Collaborate", "Return", "Belong"];
const experiment = ["Build", "Test", "Learn", "Prove", "Grow"];

const wayStyles = [
  "bg-primary text-white rounded-tl-[3rem]",
  "bg-plum text-white rounded-br-[3rem]",
  "bg-accent text-white rounded-tr-[3rem]",
  "bg-pink text-plum rounded-bl-[3rem]",
  "bg-cobalt text-white rounded-tl-[3rem]",
  "bg-card border-2 border-plum text-plum rounded-br-[3rem]",
];
const solid = ["bg-primary", "bg-plum", "bg-accent", "bg-cobalt", "bg-pink", "bg-primary", "bg-plum"];
const marks = [
  "rounded-full bg-white/80",
  "bg-white/80",
  "bg-white/80 [clip-path:polygon(50%_0,100%_100%,0_100%)]",
  "rounded-tl-full bg-plum/70",
  "rounded-full border-4 border-white/80",
  "rounded-b-full bg-plum",
];

/* Hero mosaic: a 6x5 grid of photo tiles (three large, five small) and soft Bauhaus shape tiles.
   Each tile is placed explicitly as [column start, column span, row start, row span]. */
const heroTiles: { area: [number, number, number, number]; src?: string; shape?: string }[] = [
  { area: [2, 2, 1, 2], src: "/img_71.png" },
  { area: [4, 1, 1, 1], shape: "bg-primary rounded-2xl" },
  { area: [5, 1, 1, 1], shape: "rounded-tr-full bg-pink/50" },
  { area: [1, 1, 2, 1], shape: "bauhaus-stripes-coral rounded-2xl" },
  { area: [4, 2, 2, 2], src: "/img_27.png" },
  { area: [6, 1, 2, 1], shape: "rounded-l-full bg-cobalt/25" },
  { area: [1, 1, 3, 1], shape: "rounded-tl-full bg-accent/30" },
  { area: [2, 1, 3, 1], shape: "bg-plum rounded-2xl" },
  { area: [3, 1, 3, 1], shape: "rounded-br-full bg-plum/20" },
  { area: [6, 1, 3, 1], shape: "bg-accent/80 rounded-tl-full" },
  { area: [2, 1, 4, 1], shape: "bg-pink rounded-2xl" },
  { area: [3, 2, 4, 2], shape: "bauhaus-rings rounded-full" },
  { area: [5, 1, 4, 1], shape: "bg-cobalt rounded-br-full" },
  { area: [6, 1, 4, 1], shape: "rounded-full bg-cobalt/20" },
  { area: [2, 1, 5, 1], shape: "rounded-bl-full bg-pink/50" },
];

function HeroMosaic() {
  return (
    <div className="grid grid-cols-6 grid-rows-5 gap-2 sm:gap-3 w-full max-w-[min(40rem,80vh)] mx-auto aspect-[6/5]">
      {heroTiles.map((t, i) => {
        const [col, colSpan, row, rowSpan] = t.area;
        const big = colSpan > 1;
        return (
          <div key={i} style={{ gridColumn: `${col} / span ${colSpan}`, gridRow: `${row} / span ${rowSpan}` }}>
            <Reveal
              delay={(col + row) * 0.05}
              drift={0}
              className={cn("relative w-full h-full overflow-hidden", t.shape ?? (big ? "rounded-3xl" : "rounded-2xl"), t.src && "shadow-soft")}
            >
              {t.src && <img src={t.src} alt="" className="absolute inset-0 w-full h-full object-cover" />}
            </Reveal>
          </div>
        );
      })}
    </div>
  );
}

export default function BeAwesome() {
  return (
    <div className="min-h-screen bg-background font-body pt-2">
      {/* Hero: modelled on the About hero. Shapes hug the edges, one big photo, short text */}
      <section className="relative overflow-hidden mx-2 rounded-[1.75rem] pt-28 sm:pt-32 pb-20 bg-white border border-border">
        <div aria-hidden className="absolute left-0 top-0 w-16 sm:w-24 aspect-square rounded-br-full bg-accent" />
        <div aria-hidden className="absolute left-0 bottom-0 w-20 sm:w-28 lg:w-32 aspect-square rounded-tr-full bg-cobalt" />
        <div aria-hidden className="absolute left-0 bottom-0 w-10 sm:w-14 lg:w-16 aspect-square rounded-tr-full bauhaus-stripes-coral" />
        <div aria-hidden className="absolute left-[44%] top-0 w-28 sm:w-36 h-14 sm:h-[4.5rem] rounded-b-full bg-plum hidden md:block" />
        <div aria-hidden className="absolute right-0 bottom-0 w-20 sm:w-28 lg:w-32 aspect-square rounded-tl-full bg-cobalt" />
        <div aria-hidden className="absolute right-0 bottom-0 w-10 sm:w-14 lg:w-16 aspect-square rounded-tl-full bauhaus-stripes-coral" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 pattern-bar-full" />
        <div className="relative container mx-auto px-6 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-14 h-14 rounded-full bg-accent text-white grid place-items-center font-heading font-black text-xs leading-tight text-center shadow-medium">
                  Jinja
                </span>
                <p className="font-heading font-bold uppercase tracking-widest text-sm text-accent">Be Awesome Space</p>
              </div>
              <h1 className="font-heading font-black text-5xl md:text-7xl leading-none text-primary mb-6">
                A place to find your{" "}
                <span className="relative inline-block">
                  <span aria-hidden className="absolute inset-x-[-0.15em] bottom-[0.05em] h-[0.45em] bg-pink -rotate-2" />
                  <span className="relative">people.</span>
                </span>
              </h1>
              <PatternBar className="mb-8 max-w-xs" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl font-heading font-semibold text-foreground mb-4">Work, play, create, connect and belong.</p>
              <p className="text-lg text-muted-foreground max-w-lg mb-8">
                We're building a collaborative third space in Jinja, designed around what happens between people. Not a café. Not a coworking space. Not a bar.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="accent" className="rounded-full">
                  <Link to="/get-involved">Support the Space</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-plum text-plum bg-transparent hover:bg-plum hover:text-white">
                  <a href="#ways">Six ways in</a>
                </Button>
              </div>
            </Reveal>
          </div>

          <HeroMosaic />
        </div>
      </section>

      {/* Why it matters + the social problem */}
      <Section>
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <Reveal>
              <MarkerTitle className="mb-6 text-primary" accent="matters">
                Why it
              </MarkerTitle>
              <PatternBar className="mb-8" />
              <p className="text-2xl font-heading font-semibold mb-6">The opportunity gap is also a connection gap.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground mb-6">
                Young people need places to meet people, exchange knowledge, practise skills, and find collaborators, not just formal programmes. A designer meets a photographer. A freelancer finds community. A conversation leads to an opportunity. Be Awesome is designed to create more of these moments, on purpose.
              </p>
              <p className="text-lg border-l-4 border-accent pl-4">
                You can be surrounded by people and still feel alone. For us, connection and opportunity aren't separate. Be Awesome is designed around that intersection.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Reveal drift={20} className="col-span-2 h-[min(30vh,15rem)] overflow-hidden rounded-3xl rounded-tl-[4rem]">
              <img src="/img_42.png" alt="A room full of young people" className="w-full h-full object-cover" />
            </Reveal>
            <Reveal delay={0.1} className="bg-plum text-white p-6 rounded-3xl rounded-bl-[3rem]">
              <p className="font-heading font-black text-4xl sm:text-5xl">
                1 in <CountUp to={6} duration={1.2} />
              </p>
              <p className="text-sm text-white/85 mt-2">people worldwide experience loneliness</p>
            </Reveal>
            <Reveal delay={0.2} className="bg-accent text-white p-6 rounded-3xl rounded-tr-[3rem]">
              <p className="font-heading font-black text-4xl sm:text-5xl">
                1 in <CountUp to={5} duration={1.2} />
              </p>
              <p className="text-sm text-white/90 mt-2">adolescents and young adults</p>
            </Reveal>
            <Reveal delay={0.3} className="col-span-2">
              <p className="text-xs text-muted-foreground">Source: WHO Commission on Social Connection, 2025.</p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Connection by Design, in one room */}
      <Section className="relative overflow-hidden bg-plum text-white">
        <div aria-hidden className="absolute -left-20 -bottom-20 w-56 h-56 rounded-full bauhaus-rings opacity-70" />
        <div className="relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-heading font-bold uppercase tracking-widest text-sm text-pink mb-4">Connection by Design, in one room</p>
            <h2 className="font-heading font-black text-3xl sm:text-5xl leading-tight">From stranger to belonging.</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-12">
            {journey.map((step, i) => (
              <Reveal key={step} delay={i * 0.08} drift={0} className="flex items-center gap-3 sm:gap-4">
                <span
                  className={cn(
                    "px-5 py-3 rounded-full font-heading font-bold text-lg border-4 border-white/20",
                    i === journey.length - 1 ? "bg-white text-plum" : cn(solid[i], i === 4 ? "text-plum" : "text-white")
                  )}
                >
                  {step}
                </span>
                {i < journey.length - 1 && <span aria-hidden className="text-pink font-black text-2xl">→</span>}
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center">
            <p className="text-lg text-white/85 max-w-2xl mx-auto">
              We're not promising every conversation becomes a job. We're creating the conditions for it, and measuring whether it happens.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Six ways in: two roomy rows of three, with a band of photos between them */}
      <Section id="ways">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <MarkerTitle className="mb-4" accent="community">
            Six ways into the
          </MarkerTitle>
          <PatternBar className="mx-auto mb-5" />
          <p className="text-lg text-muted-foreground">Pick one. Come back for another.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ways.slice(0, 3).map((w, i) => (
            <WayTile key={w.title} way={w} i={i} />
          ))}
        </div>
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-6 lg:gap-8 my-6 lg:my-8">
          <Reveal drift={0} className="relative h-64 lg:h-80 overflow-hidden rounded-3xl rounded-tl-[4rem]">
            <img src="/img_47.png" alt="A facilitator leading a lively session" className="absolute inset-0 w-full h-full object-cover" />
          </Reveal>
          <Reveal delay={0.1} drift={0} className="relative h-64 lg:h-80 overflow-hidden rounded-3xl rounded-br-[4rem]">
            <div aria-hidden className="absolute inset-0 bg-plum grid grid-cols-3 gap-4 p-8">
              <span className="rounded-full bg-pink" />
              <span className="bauhaus-stripes-coral rounded-tl-full" />
              <span className="rounded-full bauhaus-rings" />
            </div>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ways.slice(3).map((w, i) => (
            <WayTile key={w.title} way={w} i={i + 3} />
          ))}
        </div>
      </Section>

      {/* More than a social space + Why Jinja */}
      <Section className="bg-secondary">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
          <BubbleCluster
            images={[
              { src: "/img_43.png", alt: "Young people gathered in a circle outdoors" },
              { src: "/img_54.png", alt: "" },
              { src: "/img_55.png", alt: "" },
              null,
            ]}
            className="max-w-[min(100%,70vh)] mx-auto order-last lg:order-first"
          />
          <div className="space-y-6">
            <Reveal>
              <MarkerTitle className="mb-6 text-primary" accent="Jinja?">
                Why
              </MarkerTitle>
              <PatternBar className="mb-6" />
              <p className="text-lg text-muted-foreground">
                Jinja already has the people: young professionals, students, creatives, freelancers and entrepreneurs. What's missing isn't another place to consume. It's somewhere people can find each other.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="bg-white rounded-3xl rounded-tr-[3rem] p-6 shadow-soft">
              <h3 className="font-heading font-black text-xl text-primary mb-2">More than a social space</h3>
              <p className="text-muted-foreground">
                Be Awesome sits at the intersection of connection, creativity and opportunity, helping someone move, one relationship at a time, from isolated to connected, skilled, collaborating and participating.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* The experiment + fundraising goal */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Reveal>
              <MarkerTitle className="mb-6" accent="building">
                An experiment worth
              </MarkerTitle>
              <PatternBar className="mb-8" />
              <p className="text-lg text-muted-foreground mb-8">
                We'll measure who comes, who returns, what gets created, and whether people feel they belong. What we learn will shape how we design experiences everywhere else in Uganda.
              </p>
            </Reveal>
            {/* Five rising steps */}
            <div className="flex items-end gap-2 sm:gap-3 h-40" role="img" aria-label="Build, test, learn, prove, grow">
              {experiment.map((step, i) => (
                <Reveal
                  key={step}
                  delay={i * 0.1}
                  drift={0}
                  className={cn(
                    "flex-1 flex items-end justify-center pb-3 rounded-t-2xl font-heading font-bold text-xs sm:text-sm",
                    ["h-[36%] bg-pink text-plum", "h-[52%] bg-accent text-white", "h-[68%] bg-cobalt text-white", "h-[84%] bg-plum text-white", "h-full bg-primary text-white"][i]
                  )}
                >
                  {step}
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1} className="relative overflow-hidden bg-accent text-white rounded-[2.5rem] rounded-tl-[5rem] p-8 sm:p-10">
            <div aria-hidden className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bauhaus-rings opacity-50" />
            <div aria-hidden className="absolute right-6 top-6 w-24 h-24 rounded-full border-4 border-white bg-pink grid place-items-center"><span className="w-1/2 aspect-square bg-plum [clip-path:polygon(50%_0,100%_100%,0_100%)]" /></div>
            <p className="relative font-heading font-bold uppercase tracking-widest text-sm text-white/80 mb-3">We're building it</p>
            <p className="relative font-heading font-black text-6xl sm:text-7xl mb-2">
              $<CountUp to={50000} />
            </p>
            <p className="relative text-lg text-white/90 mb-2">Our initial fundraising goal.</p>
            <p className="relative text-white/80 mb-8">Be Awesome Space is being developed in Jinja, Uganda.</p>
            <Button asChild size="lg" className="relative rounded-full bg-white text-accent hover:bg-pink hover:text-plum">
              <Link to="/get-involved">Support the Space</Link>
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* Get involved */}
      <Section className="relative overflow-hidden bg-cobalt/10">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <MarkerTitle className="mb-4 text-primary" accent="Be Awesome">
            Get involved with
          </MarkerTitle>
          <PatternBar className="mx-auto" />
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {involve.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-medium transition-shadow">
              <div className="relative h-36 overflow-hidden">
                <div aria-hidden className={cn("absolute inset-0 transition-transform duration-700 group-hover:scale-105", ["bg-pink", "bauhaus-stripes-coral", "bg-plum", "bauhaus-rings"][i])} />
                <span aria-hidden className={cn("absolute left-5 -bottom-5 w-10 h-10 rounded-full border-4 border-white", solid[i])} />
              </div>
              <div className="p-6 pt-8">
                <h3 className="font-heading font-black text-2xl text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="text-center">
          <p className="font-heading font-black text-2xl sm:text-3xl text-plum">
            Work. Play. Create. Connect. <span className="text-accent">Belong.</span>
          </p>
        </Reveal>
      </Section>
    </div>
  );
}

function WayTile({ way, i }: { way: (typeof ways)[number]; i: number }) {
  return (
    <Reveal delay={(i % 3) * 0.1} className={cn("relative overflow-hidden p-8 lg:p-10 flex flex-col min-h-[17rem]", wayStyles[i])}>
      <span aria-hidden className={cn("absolute right-8 top-8 w-9 h-9", marks[i])} />
      <span className="font-heading font-black text-5xl leading-none opacity-30 mb-6">{String(i + 1).padStart(2, "0")}</span>
      <p className="text-xs font-heading font-bold uppercase tracking-widest opacity-80 mb-3">{way.tag}</p>
      <h3 className="font-heading font-black text-3xl mb-3">{way.title}</h3>
      <p className="text-base opacity-90 leading-relaxed">{way.body}</p>
    </Reveal>
  );
}
