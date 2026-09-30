import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MarkerTitle, PatternBar, Section } from "@/components/layout/ui";
import { CapsulePair, CircleCluster, PhotoTrio, Reveal } from "@/components/layout/motion";
import { cn } from "@/lib/utils";

const learn = [
  { title: "Connect", body: "Build trust and create conditions for participation." },
  { title: "Listen & Respond", body: "Respond with affirmation, empathy and validation." },
  { title: "Understand", body: "Recognise age, context and different realities." },
  { title: "Design", body: "Choose approaches that fit the person and situation." },
  { title: "Participate", body: "Help young people contribute, not just receive." },
  { title: "Protect", body: "Safeguarding, boundaries and confidentiality." },
  { title: "Refer & Follow", body: "Know your limits, refer and follow up." },
  { title: "Reflect & Sustain", body: "Reflect on practice, sustain your own capacity." },
];

const weeks = [
  { title: "The Human Being in Front of You", body: "Connection before intervention, listening, emotional development." },
  { title: "Designing the Support Experience", body: "Turning conversation into support, applied case labs." },
  { title: "Safe to Support", body: "Safeguarding, boundaries, referral and continuity." },
  { title: "Connection Lab", body: "Simulations, competency assessment, a practice plan." },
];

const pricing = [
  { name: "Emerging Supporter", price: "UGX 350,000" },
  { name: "Professional", price: "UGX 650,000" },
  { name: "Professional Plus", price: "UGX 950,000" },
  { name: "Team / Organisation", price: "from UGX 2,750,000" },
];

const audience = [
  "Psychology students",
  "Therapists in training",
  "Counsellors in training",
  "Social workers",
  "Youth workers",
  "Peer educators",
  "Teachers",
  "Practitioners working with young people",
];

/* Bauhaus markers for the role list: circle, square, triangle, quarter-circle */
const roleMarks = [
  "rounded-full bg-accent",
  "bg-cobalt",
  "bg-plum [clip-path:polygon(50%_0,100%_100%,0_100%)]",
  "rounded-tl-full bg-pink",
];

const method = [
  { word: "Learn", node: "bg-pink text-plum", shape: <div className="absolute -right-3 -bottom-3 w-12 h-12 rounded-full bg-accent" /> },
  { word: "Practise", node: "bg-accent text-white", shape: <div className="absolute -left-2 -top-2 w-12 h-12 rounded-br-full bg-plum" /> },
  { word: "Reflect", node: "bg-cobalt text-white", shape: <div className="absolute -right-2 -top-3 w-12 h-12 bg-pink [clip-path:polygon(50%_0,100%_100%,0_100%)]" /> },
  { word: "Apply", node: "bg-white text-plum", shape: <div className="absolute -left-3 -bottom-2 w-12 h-12 rounded-full bauhaus-stripes-coral" /> },
];

const tileStyles = [
  "bg-primary text-white rounded-tl-[3rem]",
  "bg-card border-2 border-plum text-foreground rounded-br-[3rem]",
  "bg-accent text-white rounded-tr-[3rem]",
  "bg-card border-2 border-primary text-foreground rounded-bl-[3rem]",
  "bg-plum text-white rounded-br-[3rem]",
  "bg-card border-2 border-accent text-foreground rounded-tl-[3rem]",
  "bg-pink text-plum rounded-bl-[3rem]",
  "bg-card border-2 border-cobalt text-foreground rounded-tr-[3rem]",
];

const weekColors = ["bg-primary", "bg-plum", "bg-accent", "bg-cobalt"];

/* One photo per week, each cut to a different corner so the row reads as a sequence */
const weekPhotos = [
  { src: "/img_34.png", shape: "rounded-3xl rounded-tl-[4rem]" },
  { src: "/img_31.png", shape: "rounded-3xl rounded-tr-[4rem]" },
  { src: "/img_19.png", shape: "rounded-3xl rounded-bl-[4rem]" },
  { src: "/img_39.png", shape: "rounded-3xl rounded-br-[4rem]" },
];

const scale = [
  { n: 0, color: "bg-pink/50" },
  { n: 1, color: "bg-pink" },
  { n: 2, color: "bg-accent" },
  { n: 3, color: "bg-cobalt" },
  { n: 4, color: "bg-plum" },
];

const tierHeads = [
  <div className="absolute inset-0 bg-pink"><div className="absolute right-4 bottom-0 w-16 h-8 rounded-t-full bg-accent" /></div>,
  <div className="absolute inset-0 bg-primary"><div className="absolute -right-4 -top-4 w-16 h-16 rounded-full bg-pink" /></div>,
  <div className="absolute inset-0 bg-accent"><div className="absolute left-0 bottom-0 w-14 h-14 rounded-tr-full bg-plum" /></div>,
  <div className="absolute inset-0 bg-plum"><div className="absolute right-0 top-0 w-1/3 h-full bauhaus-stripes opacity-50" /></div>,
];

export default function School() {
  return (
    <div className="min-h-screen bg-background font-body pt-2">
      {/* Hero */}
      <section className="relative overflow-hidden mx-2 rounded-[1.75rem] pt-28 sm:pt-32 pb-20 bg-white border border-border">
        <div aria-hidden className="absolute left-0 top-0 w-20 sm:w-28 lg:w-36 aspect-square rounded-br-full bg-plum" />
        <div aria-hidden className="absolute left-0 bottom-0 w-24 sm:w-32 aspect-square rounded-tr-full bauhaus-stripes-coral" />
        <div aria-hidden className="absolute left-[42%] top-0 w-28 sm:w-36 h-14 sm:h-[4.5rem] rounded-b-full bg-cobalt hidden md:block" />
        <div aria-hidden className="absolute -right-20 -bottom-20 w-56 h-56 sm:w-72 sm:h-72 rounded-full bauhaus-rings" />
        <div aria-hidden className="absolute left-[46%] bottom-16 w-10 h-10 bg-accent [clip-path:polygon(50%_0,100%_100%,0_100%)] hidden lg:block animate-bauhaus-float" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 pattern-bar-full" />
        <div className="relative container mx-auto px-6 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-12 items-center">
          <div>
            <Reveal>
              <p className="font-heading font-bold uppercase tracking-widest text-sm text-accent mb-4">Powered by Awesome Mind Speaks</p>
              <h1 className="font-heading font-black text-5xl md:text-7xl leading-none text-primary mb-6">
                The School of{" "}
                <span className="relative inline-block">
                  <span aria-hidden className="absolute inset-x-[-0.1em] bottom-[0.05em] h-[0.4em] bg-pink -rotate-2" />
                  <span className="relative">Connection</span>
                </span>
              </h1>
              <PatternBar className="mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-xl font-heading font-semibold mb-6 max-w-xl">
                Learning how to create spaces, experiences and communities where people connect, participate and belong.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["3–4 weeks", "Applied learning", "Grounded in Connection by Design"].map((chip, i) => (
                  <span key={chip} className={cn("px-4 py-1.5 rounded-full font-heading font-semibold text-sm", ["bg-primary text-white", "bg-pink text-plum", "bg-plum text-white"][i])}>
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" variant="accent" className="rounded-full">
                  <Link to="/get-involved">Join the next cohort</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-plum text-plum bg-transparent hover:bg-plum hover:text-white">
                  <a href="#join">See pricing</a>
                </Button>
              </div>
            </Reveal>
          </div>
          <CircleCluster
            images={[
              { src: "/img_13.png", alt: "Practitioners learning together at The School of Connection" },
              { src: "/img_18.png", alt: "" },
              { src: "/img_20.png", alt: "" },
            ]}
            className="max-w-[min(30rem,58vh)] mx-auto"
          />
        </div>
      </section>

      {/* What it is / why it exists */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <CapsulePair
            large={{ src: "/img_33.png", alt: "A facilitator listening to a young person" }}
            small={{ src: "/img_68.png", alt: "" }}
            className="order-last lg:order-first"
          />
          <div>
            <Reveal>
              <MarkerTitle className="mb-6 text-primary" accent="it is">
                What
              </MarkerTitle>
              <PatternBar className="mb-8" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground mb-8">
                A 3–4 week applied learning programme for people who work with, support or engage young people. It focuses on the practical human skills behind meaningful support: building trust, listening well, reading a situation, and knowing your role's limits.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="relative bg-secondary rounded-3xl rounded-tr-[3rem] p-6 sm:p-8">
              <span aria-hidden className="absolute -top-5 left-6 font-heading font-black text-7xl leading-none text-accent">“</span>
              <p className="font-heading font-bold uppercase tracking-widest text-xs text-accent mb-2">Why it exists</p>
              <p className="text-lg font-heading font-semibold text-plum mb-3">
                Professional training teaches what to know. It rarely teaches the human side of being present with someone.
              </p>
              <p className="text-muted-foreground">
                The School of Connection closes that gap, turning Connection by Design into skills anyone can practise.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Who it is for */}
      <Section className="bg-secondary">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <Reveal>
              <MarkerTitle className="mb-6 text-primary" accent="for">
                Who it is
              </MarkerTitle>
              <PatternBar className="mb-8" />
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-xl font-heading font-semibold mb-8 max-w-lg">
                For anyone who works with, supports or engages young people.
              </p>
            </Reveal>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {audience.map((role, i) => (
                <li key={role}>
                  <Reveal delay={(i % 2) * 0.06 + Math.floor(i / 2) * 0.04} drift={0} className="flex items-center gap-4 bg-white rounded-2xl px-5 py-4 shadow-soft">
                    <span aria-hidden className={cn("shrink-0 w-5 h-5", roleMarks[i % roleMarks.length])} />
                    <span className="font-heading font-semibold">{role}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal className="relative overflow-hidden bg-plum text-white rounded-3xl rounded-tr-[3rem] p-6 sm:p-7">
              <div aria-hidden className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/10" />
              <p className="relative font-heading font-bold uppercase tracking-widest text-xs text-pink mb-2">What it isn't</p>
              <p className="relative text-white/90">
                A clinical qualification. It doesn't train counselling, psychotherapy or diagnosis, and doesn't replace professional education, supervision or referral protocols.
              </p>
            </Reveal>
          </div>
          <PhotoTrio
            images={[
              { src: "/img_10.png", alt: "Youth workers in a School of Connection session" },
              { src: "/img_11.png", alt: "" },
              { src: "/img_7.png", alt: "" },
            ]}
          />
        </div>
      </Section>

      {/* Method: learn -> practise -> reflect -> apply */}
      <Section className="relative overflow-hidden bg-plum text-white">
        <div aria-hidden className="absolute -right-24 -top-24 w-72 h-72 rounded-full bauhaus-rings opacity-80" />
        <div className="relative">
          <Reveal className="text-center max-w-3xl mx-auto mb-14">
            <p className="font-heading font-bold uppercase tracking-widest text-sm text-pink mb-4">Connection by Design, in practice</p>
            <h2 className="font-heading font-black text-3xl sm:text-5xl leading-tight mb-6">Meaningful support isn't only about what you say.</h2>
            <p className="text-lg text-white/85">
              Connection by Design is the approach behind everything we build. The School is how people learn and practise it, becoming more intentional about the spaces and relationships they create.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 max-w-5xl mx-auto">
            {method.map((step, i) => (
              <Reveal key={step.word} delay={i * 0.12} className="relative flex flex-col items-center text-center">
                {i < method.length - 1 && (
                  <span aria-hidden className="hidden lg:block absolute top-[4.5rem] left-[calc(50%+5rem)] right-[calc(-50%+5rem)] border-t-4 border-dashed border-pink/60" />
                )}
                <div className={cn("relative w-36 h-36 rounded-full grid place-items-center font-heading font-black text-2xl shadow-strong overflow-hidden", step.node)}>
                  {step.shape}
                  <span className="relative">{step.word}</span>
                </div>
                <span className="mt-4 font-heading font-bold text-pink">0{i + 1}</span>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center mt-12">
            <p className="text-lg text-white/85 max-w-2xl mx-auto">
              Participants learn, practise through cases and simulations, reflect on their practice, and apply what they learn.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* What you learn */}
      <Section>
        <div className="grid lg:grid-cols-[1fr_2.2fr] gap-10 lg:gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <MarkerTitle className="mb-6" accent="learn">
                What you
              </MarkerTitle>
              <PatternBar className="mb-6" />
              <p className="text-lg text-muted-foreground mb-8">Eight practical capabilities for being truly present with a young person.</p>
            </Reveal>
            {/* Two photos: a tall one and a smaller one overlapping its lower corner, over a dot field */}
            <div className="relative w-full max-w-[min(22rem,44vh)] mx-auto lg:mx-0 aspect-[5/6]">
              <div aria-hidden className="absolute -left-4 -top-4 w-2/3 h-2/3 halftone-dots" />
              <Reveal delay={0.1} drift={15} className="absolute left-0 top-0 w-[78%] h-[82%]">
                <img src="/img_66.png" alt="" className="w-full h-full object-cover rounded-[2rem] rounded-tl-[5rem] shadow-strong" />
              </Reveal>
              <Reveal delay={0.25} drift={-25} className="absolute right-0 bottom-0 w-[52%] aspect-square">
                <img src="/img_59.png" alt="" className="w-full h-full object-cover rounded-[2rem] rounded-br-[4rem] border-8 border-background shadow-strong" />
              </Reveal>
              <span aria-hidden className="absolute right-[6%] top-[6%] w-10 h-10 rounded-full bg-accent" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {learn.map((item, i) => (
              <Reveal key={item.title} delay={(i % 4) * 0.08} className={cn("p-6 flex flex-col min-h-[12rem]", tileStyles[i])}>
                <span className="font-heading font-black text-3xl opacity-50 mb-auto">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-heading font-bold text-lg mt-4 mb-1">{item.title}</h3>
                <p className="text-sm opacity-85">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Programme structure */}
      <Section className="bg-cobalt/10">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <MarkerTitle className="mb-4 text-primary" accent="structure">
            Programme
          </MarkerTitle>
          <PatternBar className="mx-auto" />
        </Reveal>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Line runs through the week badges, which sit on the photos' bottom edge (photo is h-44 = 11rem) */}
          <span aria-hidden className="hidden lg:block absolute left-[12%] right-[12%] top-[calc(11rem-2px)] h-1 rounded-full bg-gradient-to-r from-primary via-plum to-accent" />
          {weeks.map((week, i) => (
            <Reveal key={week.title} delay={i * 0.12} className="relative flex flex-col items-center text-center">
              <img
                src={weekPhotos[i].src}
                alt=""
                className={cn("w-full h-44 object-cover border-4 border-white shadow-medium", weekPhotos[i].shape)}
              />
              <div className={cn("relative z-10 -mt-10 w-20 h-20 rounded-full grid place-items-center text-white border-[6px] border-white shadow-medium", weekColors[i])}>
                <span className="font-heading font-black text-sm leading-none">
                  Week
                  <br />
                  <span className="text-2xl">{i + 1}</span>
                </span>
              </div>
              <div className="mt-6 bg-card rounded-3xl p-6 shadow-soft w-full flex-1">
                <h3 className="font-heading font-bold text-lg text-primary mb-2">{week.title}</h3>
                <p className="text-muted-foreground text-sm">{week.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Safeguarding + assessment */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal className="relative overflow-hidden bg-primary text-white rounded-3xl rounded-tl-[4rem] p-8 sm:p-10">
            <div aria-hidden className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bauhaus-rings-blue opacity-60" />
            <ShieldCheck aria-hidden className="relative w-12 h-12 text-pink mb-6" />
            <h2 className="relative font-heading font-black text-3xl mb-4">Safeguarding and boundaries</h2>
            <p className="relative text-lg text-white/90">
              Safeguarding runs through the whole programme, not just Week 3. Participants learn their role limits, and how to protect both the people they support and their own capacity to keep supporting well.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="bg-card border border-border rounded-3xl rounded-br-[4rem] p-8 sm:p-10">
            <h2 className="font-heading font-black text-3xl text-primary mb-4">How we assess</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We assess observable practice, not just completion, with a clear safety threshold on safeguarding and boundaries.
            </p>
            <div className="grid grid-cols-5 gap-2 mb-3" role="img" aria-label="Assessment scale from 0, not demonstrated, to 4, strong">
              {scale.map((step, i) => (
                <div key={step.n} className={cn("h-14 grid place-items-center font-heading font-black text-xl text-white", step.color, i === 0 && "rounded-l-full text-plum", i === scale.length - 1 && "rounded-r-full")}>
                  {step.n}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm font-heading font-semibold">
              <span className="text-muted-foreground">Not demonstrated</span>
              <span className="text-plum">Strong</span>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Join */}
      <Section id="join" className="relative overflow-hidden bg-secondary">
        <div aria-hidden className="absolute -left-16 bottom-10 w-32 h-32 rounded-full bg-accent/30" />
        <Reveal className="relative text-center max-w-2xl mx-auto mb-12">
          <MarkerTitle className="mb-4 text-primary" accent="School">
            Join the
          </MarkerTitle>
          <PatternBar className="mx-auto" />
        </Reveal>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {pricing.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1} className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-strong transition-shadow duration-300">
              <div aria-hidden className="relative h-20 overflow-hidden">{tierHeads[i]}</div>
              <div className="p-6 text-center">
                <p className="font-heading font-bold text-lg mb-3">{tier.name}</p>
                <p className="font-heading font-black text-2xl text-primary">{tier.price}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="relative flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" variant="accent" className="rounded-full">
            <Link to="/get-involved">Join the next cohort</Link>
          </Button>
          <Button asChild size="lg" className="rounded-full bg-plum text-white hover:bg-plum/90">
            <Link to="/get-involved">Bring The School to your organisation</Link>
          </Button>
        </Reveal>
      </Section>
    </div>
  );
}
