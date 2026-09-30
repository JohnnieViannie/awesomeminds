import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MarkerTitle, PatternBar, Section, TextLink } from "@/components/layout/ui";
import { Reveal } from "@/components/layout/motion";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { cn } from "@/lib/utils";

const pathways = [
  {
    title: "Give",
    body: "Support the experiences, programmes and spaces that bring young people together.",
    cta: "Support our work",
    to: "/be-awesome",
  },
  {
    title: "Hire us",
    body: "Bring our experience design or facilitation into your organisation.",
    cta: "Work with us",
    to: "/about",
  },
  {
    title: "Create",
    body: "Creatives, facilitators and specialists: bring your skills to something we're building.",
    cta: "Create with us",
    to: "/ideas",
  },
  {
    title: "Join",
    body: "Show up and meet people, at Be Awesome Space or a programme near you.",
    cta: "Join in",
    to: "/be-awesome",
  },
];

const pricing = [
  { name: "Emerging Supporter", price: "UGX 350,000" },
  { name: "Professional", price: "UGX 650,000" },
  { name: "Professional Plus", price: "UGX 950,000" },
  { name: "Team / Organisation", price: "from UGX 2,750,000" },
];

/* Same tile language as the About page: brand colour, one big rounded corner, a Bauhaus mark */
const tileStyles = [
  "bg-primary text-white rounded-tl-[4rem]",
  "bg-plum text-white rounded-br-[4rem]",
  "bg-accent text-white rounded-tr-[4rem]",
  "bg-pink text-plum rounded-bl-[4rem]",
];
const marks = [
  "rounded-full bg-white/80",
  "bg-white/80",
  "bg-white/80 [clip-path:polygon(50%_0,100%_100%,0_100%)]",
  "rounded-tl-full bg-plum/70",
];

export default function GetInvolved() {
  return (
    <div className="min-h-screen bg-background font-body pt-2">
      {/* Hero: modelled on the About hero. Shapes hug the edges, big photo, short text */}
      <section className="relative overflow-hidden mx-2 rounded-[1.75rem] pt-28 sm:pt-32 pb-20 bg-white border border-border">
        <div aria-hidden className="absolute right-[-6%] top-[12%] w-[70vw] max-w-[40rem] aspect-square rounded-full bg-pink/30 hidden lg:block" />
        <div aria-hidden className="absolute right-0 top-0 w-1/2 h-full halftone-dots hidden lg:block" />
        <div aria-hidden className="absolute left-0 top-0 w-16 sm:w-24 aspect-square rounded-br-full bg-cobalt" />
        <div aria-hidden className="absolute left-0 bottom-0 w-20 sm:w-28 lg:w-32 aspect-square rounded-tr-full bg-plum" />
        <div aria-hidden className="absolute left-0 bottom-0 w-10 sm:w-14 lg:w-16 aspect-square rounded-tr-full bauhaus-stripes-coral" />
        <div aria-hidden className="absolute left-[44%] top-0 w-28 sm:w-36 h-14 sm:h-[4.5rem] rounded-b-full bg-accent hidden md:block" />
        <div aria-hidden className="absolute -right-20 -bottom-20 w-56 h-56 sm:w-72 sm:h-72 rounded-full bauhaus-rings-blue" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 pattern-bar-full" />
        <div className="relative container mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-14 h-14 rounded-full bg-plum text-white grid place-items-center font-heading font-black text-xs leading-tight text-center shadow-medium">
                  Join
                  <br />
                  us
                </span>
                <p className="font-heading font-bold uppercase tracking-widest text-sm text-accent">Get Involved</p>
              </div>
              <h1 className="font-heading font-black text-5xl md:text-7xl leading-none text-primary mb-6">
                Help shape what connection{" "}
                <span className="relative inline-block">
                  <span aria-hidden className="absolute inset-x-[-0.15em] bottom-[0.05em] h-[0.45em] bg-pink -rotate-2" />
                  <span className="relative">looks like.</span>
                </span>
              </h1>
              <PatternBar className="mb-8 max-w-xs" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl font-heading font-semibold text-foreground mb-4">Give, hire, create, join, or stay in the loop.</p>
              <p className="text-lg text-muted-foreground max-w-lg mb-8">
                However you show up, you help young people in Uganda find the spaces and people where they belong.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="accent" className="rounded-full">
                  <a href="#ways">Find your way in</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-plum text-plum bg-transparent hover:bg-plum hover:text-white">
                  <a href="#stay-connected">Stay connected</a>
                </Button>
              </div>
            </Reveal>
          </div>

          {/* A tall arch photo with a round one overlapping it */}
          <div className="relative w-full max-w-[min(28rem,60vh)] mx-auto aspect-[4/5]">
            <Reveal drift={20} className="absolute left-0 top-0 w-[74%] h-[88%]">
              <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-[2rem] bg-plum" />
              <img
                src="/img_5.png"
                alt="A facilitator speaking to a room of young people"
                className="relative w-full h-full object-cover rounded-t-full rounded-b-[2rem] border-[6px] border-white shadow-strong"
              />
            </Reveal>
            <Reveal delay={0.2} drift={-30} className="absolute right-0 bottom-0 w-[46%] aspect-square">
              <img
                src="/img_44.png"
                alt="A student speaking at an inter-school dialogue"
                className="w-full h-full object-cover rounded-full border-[6px] border-white shadow-strong"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ways in */}
      <Section id="ways">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <MarkerTitle className="mb-4" accent="in">
            Find your way
          </MarkerTitle>
          <PatternBar className="mx-auto mb-5" />
          <p className="text-lg text-muted-foreground">Pick the one that fits. You can always do more than one.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pathways.map((item, i) => (
            <Reveal
              key={item.title}
              delay={(i % 2) * 0.1}
              className={cn("relative overflow-hidden p-8 lg:p-10 flex flex-col min-h-[16rem]", tileStyles[i])}
            >
              <span aria-hidden className={cn("absolute right-8 top-8 w-9 h-9", marks[i])} />
              <span className="font-heading font-black text-5xl leading-none opacity-30 mb-6">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="font-heading font-black text-3xl mb-3">{item.title}</h2>
              <p className="text-base opacity-90 leading-relaxed mb-6 max-w-md">{item.body}</p>
              <Link
                to={item.to}
                className={cn(
                  "mt-auto inline-flex self-start items-center gap-2 px-5 py-2.5 rounded-full font-heading font-bold text-sm transition-colors",
                  i === 3 ? "bg-plum text-white hover:bg-plum/90" : "bg-white text-plum hover:bg-pink"
                )}
              >
                {item.cta} →
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Stay connected: the real newsletter sign-up */}
        <div id="stay-connected" className="scroll-mt-28" />
        <Reveal
          className="relative overflow-hidden mt-6 lg:mt-8 bg-secondary rounded-[2.5rem] rounded-tr-[5rem] p-8 sm:p-12 grid lg:grid-cols-[1fr_1.2fr] gap-8 items-center"
        >
          <div aria-hidden className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bauhaus-rings opacity-40" />
          <div className="relative">
            <span className="font-heading font-black text-5xl leading-none text-plum/30">05</span>
            <h2 className="font-heading font-black text-3xl text-primary mt-4 mb-3">Stay connected</h2>
            <p className="text-muted-foreground max-w-md">Occasional stories and updates. We won't fill your inbox.</p>
          </div>
          <NewsletterSignup className="relative" />
        </Reveal>
      </Section>

      {/* Learn: The School of Connection */}
      <Section className="relative overflow-hidden bg-plum text-white">
        <div aria-hidden className="absolute -left-20 -bottom-20 w-56 h-56 rounded-full bauhaus-rings opacity-70" />
        <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <Reveal>
              <p className="font-heading font-bold uppercase tracking-widest text-sm text-pink mb-4">Learn</p>
              <h2 className="font-heading font-black text-3xl sm:text-5xl leading-tight mb-5">Build practical human connection skills.</h2>
              <p className="text-lg text-white/85 max-w-xl mb-8">
                Through The School of Connection, a 3–4 week applied programme for people who work with young people.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {pricing.map((tier, i) => (
                <Reveal key={tier.name} delay={i * 0.08} drift={0} className="bg-white/10 border border-white/15 rounded-2xl p-4">
                  <p className="font-heading font-semibold text-sm text-white/80">{tier.name}</p>
                  <p className="font-heading font-black text-xl">{tier.price}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button asChild size="lg" variant="accent" className="rounded-full">
                <Link to="/school">Join the next cohort</Link>
              </Button>
              <TextLink to="/school" className="text-white hover:text-pink">
                Explore The School of Connection
              </TextLink>
            </Reveal>
          </div>
          <Reveal delay={0.1} drift={25} className="relative w-full max-w-sm mx-auto aspect-square">
            <div aria-hidden className="absolute inset-0 rounded-full bauhaus-rings translate-x-4 translate-y-4" />
            <img
              src="/img_53.png"
              alt="A speaker addressing participants"
              className="relative w-full h-full object-cover rounded-full border-[6px] border-white shadow-strong"
            />
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
