import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  School, 
  MessageSquare, 
  Handshake,
  TrendingUp,
  Heart,
  ArrowRight,
  Quote
} from "lucide-react";

const impactStats = [
  {
    number: "5000+",
    label: "Young People Reached",
    description: "Through programs, workshops, and digital platforms",
    icon: Users,
    color: "primary"
  },
  {
    number: "50+", 
    label: "Schools & Workplaces",
    description: "Trained on mental health awareness and integration",
    icon: School,
    color: "accent"
  },
  {
    number: "20+",
    label: "National Partnerships",
    description: "With NGOs, UN agencies, and youth networks",
    icon: Handshake,
    color: "primary"
  },
  {
    number: "6+",
    label: "Policy Dialogues",
    description: "Shaping policy and amplifying youth voices",
    icon: TrendingUp,
    color: "accent"
  }
];

const testimonials = [
  {
    quote: "I never thought talking about mental health could feel this normal. The café is my safe space to just be me.",
    author: "16-year-old student",
    role: "Wellness Café Participant"
  },
  {
    quote: "KeepChatty lets me chat with someone who actually listens, without feeling judged. It's so easy to use and really helps.",
    author: "22-year-old university student", 
    role: "KeepChatty User"
  },
  {
    quote: "The workshops and peer groups taught me how to cope with stress and stay connected with friends. I feel stronger now.",
    author: "18-year-old community member",
    role: "Youth Program Participant"
  },
  {
    quote: "AMS made learning about mental health fun. I actually look forward to sessions, and it's changed how I see myself and others.",
    author: "20-year-old youth leader",
    role: "Peer Support Champion"
  }
];

const keyImpacts = [
  "Reduced stigma through lifestyle-driven youth programs",
  "Scaled access via KeepChatty digital platform", 
  "Smarter, more efficient funding outcomes for NGOs & donors",
  "Laying foundations for Uganda's first integrated mental health ecosystem"
];

export function Impact() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-6">
            Receipts <span className="text-accent">(Impact & Portfolio)</span>
          </h2>
          <p className="font-body text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Proof, not promises. We've been on the ground, in schools, communities, and online — and the results speak for themselves.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;
            const isAccent = stat.color === "accent";
            
            return (
              <Card key={index} className="border-0 shadow-soft hover:shadow-medium transition-smooth text-center bg-card">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                    isAccent ? 'bg-accent/10' : 'bg-primary/10'
                  }`}>
                    <Icon className={`w-8 h-8 ${isAccent ? 'text-accent' : 'text-primary'}`} />
                  </div>
                  
                  <div className={`font-heading font-bold text-4xl mb-2 ${
                    isAccent ? 'text-accent' : 'text-primary'
                  }`}>
                    {stat.number}
                  </div>
                  
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                    {stat.label}
                  </h3>
                  
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Impact Areas */}
        <div className="bg-gradient-primary rounded-3xl p-8 md:p-12 mb-20 text-primary-foreground">
          <h3 className="font-heading font-bold text-3xl text-center mb-8">
            Impact Return: Better outcomes, smarter systems
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {keyImpacts.map((impact, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0 mt-2" />
                <span className="font-body text-primary-foreground/90 leading-relaxed">
                  {impact}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-3xl text-center text-foreground mb-4">
            But Don't Take Our Word For It…
          </h3>
          <p className="font-body text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here's what young people actually feel about AMS:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-soft bg-card relative overflow-hidden">
                <CardContent className="p-8">
                  <Quote className="w-8 h-8 text-accent/30 mb-4" />
                  
                  <blockquote className="font-body text-lg text-foreground mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ROI + ROP Section */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl text-foreground mb-6">
              ROI + ROP (Return on Investment + Return on Impact)
            </h3>
            <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
              We know funders and partners want both impact + value.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="border-0 shadow-soft bg-primary/5">
              <CardContent className="p-8">
                <h4 className="font-heading font-bold text-2xl text-primary mb-4">ROI</h4>
                <ul className="space-y-3">
                  {[
                    "Transparent financial systems",
                    "Clear deliverables", 
                    "Efficient project management"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-soft bg-accent/5">
              <CardContent className="p-8">
                <h4 className="font-heading font-bold text-2xl text-accent mb-4">ROP</h4>
                <ul className="space-y-3">
                  {[
                    "Real stories, measurable outcomes",
                    "Stigma reduction programs",
                    "Long-term sustainable change"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-6 inline-block mb-8">
              <p className="font-heading text-xl font-semibold text-foreground">
                "Your challenge → Our design → Scalable solution → Impact always."
              </p>
            </div>
            
            <Button variant="accent" size="lg">
              Share Your Story & Inspire Change
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}