import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GraduationCap, MessageCircle, Users, Heart, Building, Smartphone, TrendingUp, ArrowRight, Star } from "lucide-react";

export default function Studio() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading font-bold text-4xl md:text-6xl mb-6">
              The Studio
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Real Impact, Lasting Change
            </p>
            <p className="text-lg opacity-80">
              At AMS, we believe mental health solutions must be practical, relatable, and measurable.
            </p>
          </div>
        </div>
      </section>

      {/* Traction Overview */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8">Our Traction</h2>
            <p className="text-lg text-muted-foreground mb-12">
              We've been on the ground, in schools, communities, and online — and the results speak for themselves:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Schools & workplaces trained on mental health awareness</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">20+</div>
                <p className="text-sm text-muted-foreground">National & international partnerships with NGOs and UN agencies</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000s</div>
                <p className="text-sm text-muted-foreground">Young people engaged through peer groups and workshops</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-accent mb-2">6+</div>
                <p className="text-sm text-muted-foreground">High-impact dialogues shaping policy and youth voices</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <p className="text-xl font-heading font-semibold text-primary">
                "Your challenge. Our design. Scalable solution — impact always."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Youth-Focused Programs */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">Youth-Focused Programs</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Helping young people heal, learn, connect, and thrive
            </p>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Be Awesome Program */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h3 className="font-heading font-semibold text-xl">Be Awesome – School Mental Health Program</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Empowering primary and secondary school students with knowledge and skills to navigate adolescence, emotional wellbeing, and social transitions.
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <p>• Peer-learning sessions, school outreaches, and inter-school dialogues</p>
                  <p>• Linkage to professional mental health services for students in need</p>
                  <p>• Focus on peer support to create supportive school environments</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-sm font-semibold text-primary">Impact: 5,000+ young people reached, 60 teachers trained, interactive peer-led programs</p>
                </div>
              </div>

              {/* Generational Perspective Dialogue */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-8 h-8 text-accent" />
                  <h3 className="font-heading font-semibold text-xl">Generational Perspective Dialogue (GPD)</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  A national platform bringing youth to the center of mental health policy discussions.
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <p>• Collaborative workshops, dialogues, and advocacy efforts</p>
                  <p>• Policy shaping and systemic improvement of youth mental health programs</p>
                </div>
                <div className="bg-accent/10 rounded-lg p-3">
                  <p className="text-sm font-semibold text-accent">Impact: 5 stakeholder dialogues shaping policy, increased youth voice in mental health decision-making</p>
                </div>
              </div>

              {/* Compeer Program */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-primary" />
                  <h3 className="font-heading font-semibold text-xl">Compeer Program</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Training young people (18–25) to become mental health champions and peer supporters.
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <p>• Workshops, mentorship, and hands-on advocacy experience</p>
                  <p>• Promotes community-based mental health leadership</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-3">
                  <p className="text-sm font-semibold text-primary">Impact: Empowered 500+ young people to advocate for mental health in schools and communities</p>
                </div>
              </div>

              {/* Menstrual Justice Program */}
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-8 h-8 text-accent" />
                  <h3 className="font-heading font-semibold text-xl">Menstrual Justice Program</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Addressing menstrual health-related mental health challenges among girls in schools.
                </p>
                <div className="space-y-2 text-sm mb-4">
                  <p>• Distribution of menstrual cups and education on menstrual wellbeing</p>
                  <p>• Integration of mental health education with menstrual health support</p>
                </div>
                <div className="bg-accent/10 rounded-lg p-3">
                  <p className="text-sm font-semibold text-accent">Impact: 250 menstrual cups provided, reduced stigma, improved confidence and school attendance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Support */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">Organizational Support & Advisory</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Helping funders, NGOs, and partners integrate and scale mental health solutions
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">CEHURD</h4>
                <p className="text-sm text-muted-foreground">Mental health integration within reproductive health initiatives</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Reproductive Health Uganda</h4>
                <p className="text-sm text-muted-foreground">Holistic approaches for mental health in SRHR programs</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">GIZ Uganda</h4>
                <p className="text-sm text-muted-foreground">Youth program training on global mental health best practices</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Innovation Village</h4>
                <p className="text-sm text-muted-foreground">Incorporating mental health awareness in digital health solutions</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">UNESO</h4>
                <p className="text-sm text-muted-foreground">Stigma reduction and support for sex workers</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-4">
                <h4 className="font-semibold mb-2">Reach a Hand Uganda</h4>
                <p className="text-sm text-muted-foreground">Mental health advocacy approaches in SRHR programs</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-heading font-semibold text-xl mb-4 text-center">Impact</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Building className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm">Strengthened mental health integration across sectors and programs</p>
                </div>
                <div>
                  <TrendingUp className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-sm">Built organizational capacity for delivering youth-centered interventions</p>
                </div>
                <div>
                  <Star className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm">Provided funders with measurable ROI and systemic impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Innovation */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">Digital Innovation & AMS Studio</h2>

            <div className="space-y-12">
              {/* KeepChatty */}
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Smartphone className="w-8 h-8 text-primary" />
                  <h3 className="font-heading font-semibold text-2xl">KeepChatty – Digital Mental Health Platform</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-3 mb-6">
                      <p className="flex items-start gap-2"><span className="text-primary">•</span> Chat-based, stigma-free engagement for youth aged 13–30</p>
                      <p className="flex items-start gap-2"><span className="text-primary">•</span> Personalized self-care tools, tips, and peer support</p>
                      <p className="flex items-start gap-2"><span className="text-primary">•</span> Digital-first approach reaching youth where they are</p>
                    </div>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-primary">Impact: Expanded access, early intervention, and youth empowerment through technology</p>
                  </div>
                </div>
              </div>

              {/* AMS Studio */}
              <div className="bg-card border border-border rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-8 h-8 text-accent" />
                  <h3 className="font-heading font-semibold text-2xl">AMS Studio – Consultancy, Project Design & Management</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-3 mb-6">
                      <p className="flex items-start gap-2"><span className="text-accent">•</span> Human-centered design and innovation support</p>
                      <p className="flex items-start gap-2"><span className="text-accent">•</span> End-to-end project management for NGOs, funders, and startups</p>
                      <p className="flex items-start gap-2"><span className="text-accent">•</span> Customized monitoring, evaluation, and learning systems</p>
                    </div>
                  </div>
                  <div className="bg-accent/10 rounded-lg p-4">
                    <p className="text-sm font-semibold text-accent">Impact: Smarter funding, scalable innovations, sustainable programs, and measurable youth and systemic impact</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Moonshot */}
            <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-8 text-center">
              <h2 className="font-heading font-bold text-2xl mb-4">Our Moonshot</h2>
              <p className="text-lg opacity-90 mb-6">
                Across all initiatives — cafés, digital platforms, school programs, and advisory work — our goal is equitable mental health support where young people feel safe to heal, learn, connect, and thrive.
              </p>
              <Button variant="outline" size="lg">
                Have we impacted your life or organization? Share your story
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">But Don't Take Our Word For It…</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Here's what young people actually feel about AMS:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "I never thought talking about mental health could feel this normal. The café is my safe space to just be me."
                </p>
                <p className="text-sm font-semibold text-primary">— 16-year-old student</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "KeepChatty lets me chat with someone who actually listens, without feeling judged. It's so easy to use and really helps."
                </p>
                <p className="text-sm font-semibold text-primary">— 22-year-old university student</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "The workshops and peer groups taught me how to cope with stress and stay connected with friends. I feel stronger now."
                </p>
                <p className="text-sm font-semibold text-primary">— 18-year-old community member</p>
              </div>
              
              <div className="bg-card border border-border rounded-xl p-6">
                <p className="text-muted-foreground mb-4 italic">
                  "AMS made learning about mental health fun. I actually look forward to sessions, and it's changed how I see myself and others."
                </p>
                <p className="text-sm font-semibold text-primary">— 20-year-old youth leader</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-card border border-border rounded-2xl p-6">
                <p className="text-xl font-heading font-semibold text-primary mb-4">
                  "Your challenge. Our design. Scalable solution — impact always."
                </p>
                <Button size="lg">
                  Has AMS impacted you in any way? Share Your Story
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
