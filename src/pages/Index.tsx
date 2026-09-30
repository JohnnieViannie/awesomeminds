import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MarkerTitle, PatternBar, Section, TextLink } from "@/components/layout/ui";
import { CapsulePair, CircleCluster, CountUp, PhotoQuad, Reveal } from "@/components/layout/motion";
import { Partners } from "@/components/Partners";
import { BauhausHero } from "@/components/BauhausHero";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <BauhausHero />

      <Section className="relative overflow-hidden">
        <div aria-hidden className="absolute -right-24 top-10 w-64 h-64 rounded-full bg-pink/60" />
        <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
          <div>
            <Reveal>
              <MarkerTitle className="mb-6">The Problem</MarkerTitle>
              <PatternBar className="mb-8" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl font-heading font-semibold max-w-3xl mb-6">
                You can be surrounded by people and still feel alone.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-muted-foreground max-w-3xl mb-8">
                Worldwide, 1 in 6 people experience loneliness, rising to 1 in 5 among young people (WHO, 2025). In Uganda, connection is too often left to chance, not design.
              </p>
              <TextLink to="/ideas">Read what we're learning about loneliness and connection</TextLink>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Reveal className="aspect-square bg-plum text-white p-6 flex flex-col justify-end rounded-tl-[4rem]">
              <p className="font-heading font-black text-4xl sm:text-5xl">
                1 in <CountUp to={6} duration={1.2} />
              </p>
              <p className="text-sm text-white/80 mt-2">people experience loneliness</p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="translate-y-8 aspect-square bg-accent text-white p-6 flex flex-col justify-end rounded-br-[4rem]">
                <p className="font-heading font-black text-4xl sm:text-5xl">
                  1 in <CountUp to={5} duration={1.2} />
                </p>
                <p className="text-sm text-white/85 mt-2">young people feel it</p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <MarkerTitle className="mb-6 text-primary">Our Approach</MarkerTitle>
              <PatternBar className="mb-8" />
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl font-heading font-semibold mb-6">
                We build connection on purpose, not by accident.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8">
                Play, dialogue, creativity and repetition, designed into experiences so a stranger becomes a friend, and a friend becomes community.
              </p>
              <TextLink to="/about">Discover how our approach works</TextLink>
            </Reveal>
          </div>
          <CircleCluster
            images={[
              { src: "/img_38.png", alt: "Young people connecting at an Awesome Mind Speaks experience" },
              { src: "/img_22.png", alt: "" },
              { src: "/img_60.png", alt: "" },
            ]}
            className="max-w-[min(32rem,68vh)] mx-auto"
          />
        </div>
      </Section>

      <Section className="relative overflow-hidden bg-plum text-white">
        <div aria-hidden className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full bauhaus-rings" />
        <div aria-hidden className="absolute right-40 top-10 hidden lg:block w-16 h-16 bg-cobalt [clip-path:polygon(50%_0,100%_100%,0_100%)]" />
        <div className="relative">
          <Reveal>
            <p className="font-heading font-bold uppercase tracking-widest text-sm text-pink mb-3">The School of Connection</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-heading font-black text-3xl sm:text-5xl max-w-4xl mb-8 leading-tight">
              Learning how to create spaces, experiences and communities where people connect, participate and belong.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Button asChild size="lg" variant="accent" className="rounded-full">
              <Link to="/school">Explore The School of Connection</Link>
            </Button>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <MarkerTitle className="mb-6">Years of showing up</MarkerTitle>
          <PatternBar className="mb-10" />
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <Reveal className="bg-cobalt text-white p-8 rounded-tr-[3rem]">
            <CountUp to={5000} suffix="+" className="block font-heading font-black text-5xl" />
            <p className="mt-2 text-white/85">young people</p>
          </Reveal>
          <Reveal delay={0.1} className="bg-plum text-white p-8 rounded-b-[3rem]">
            <CountUp to={20} suffix="+" className="block font-heading font-black text-5xl" />
            <p className="mt-2 text-white/85">experiences</p>
          </Reveal>
          <Reveal delay={0.2} className="bg-accent text-white p-8 rounded-tl-[3rem]">
            <CountUp from={1990} to={2019} separator={false} className="block font-heading font-black text-5xl" />
            <p className="mt-2 text-white/85">showing up since</p>
          </Reveal>
        </div>
        <Reveal>
          <p className="text-lg text-muted-foreground mb-8">
            The real measure isn't attendance. It's what happens between people.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <TextLink to="/impact">See our impact</TextLink>
            <TextLink to="/ideas">Read our latest thinking</TextLink>
          </div>
        </Reveal>
      </Section>

      <Section className="relative overflow-hidden bg-cobalt/10">
        <div aria-hidden className="absolute -left-20 bottom-10 w-48 h-48 rounded-full bg-accent/80" />
        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
          <PhotoQuad
            images={[
              { src: "/img_37.png", alt: "Young people relaxing together in a creative space" },
              null,
              null,
              { src: "/img_56.png", alt: "A lively evening with music and balloons" },
            ]}
            className="order-last lg:order-first max-w-[min(32rem,78vh)] w-full mx-auto"
          />
          <div>
            <Reveal>
              <MarkerTitle className="mb-4 text-primary">Be Awesome Space</MarkerTitle>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-2xl font-heading font-semibold mb-6">A place to find your people.</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8">
                A physical third space in Jinja where young people can work, play, create, connect and belong. We're raising the funds to open the doors.
              </p>
              <TextLink to="/be-awesome">Discover Be Awesome Space</TextLink>
            </Reveal>
          </div>
        </div>
      </Section>

      
      
      <Partners />

      <Section className="relative overflow-hidden bg-secondary">
        <div aria-hidden className="absolute -left-24 -top-24 w-64 h-64 rounded-full bauhaus-rings opacity-60" />
        <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <p className="font-heading font-bold uppercase tracking-widest text-sm text-accent mb-4">Join the movement</p>
              <MarkerTitle className="mb-6 text-primary" accent="chance.">
                Connection shouldn't be left to
              </MarkerTitle>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground max-w-xl mb-10">
                Help us create more places, experiences and opportunities where young people can connect, belong and thrive.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button asChild size="lg" variant="accent" className="rounded-full">
                  <Link to="/get-involved">Partner with us</Link>
                </Button>
                <Button asChild size="lg" className="rounded-full bg-primary text-white hover:bg-primary/90">
                  <Link to="/get-involved">Support our work</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-plum text-plum bg-transparent hover:bg-plum hover:text-white">
                  <Link to="/get-involved">Get involved</Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <CapsulePair
            large={{ src: "/img_76.png", alt: "Young people taking part in an Awesome Mind Speaks session" }}
            small={{ src: "/img_75.png", alt: "" }}
            border="border-secondary"
          />
        </div>
      </Section>
    </div>
  );
};

export default Index;
