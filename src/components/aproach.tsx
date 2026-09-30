import React, { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, Sparkles } from "lucide-react";

// Custom hook for scroll animations
function useScrollAnimation() {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return { isVisible, elementRef };
}

// Animated component wrapper
function AnimatedElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    const { isVisible, elementRef } = useScrollAnimation();

    return (
        <div
            ref={elementRef}
            className={`transition-all duration-700 ease-out ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}

interface Step {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    details: string[];
    icon: React.ComponentType<{ className?: string }>;
    color: "primary" | "accent";
}

const steps: Step[] = [
    {
        number: "1",
        title: "Understand",
        subtitle: "The Why",
        description: "We listen to young people, communities, and partners to uncover real barriers to mental well-being — from social stigma to everyday pressures and disconnection.",
        details: [
            "Engage directly with youth to identify challenges",
            "Consult with communities and partners",
            "Analyze social and systemic barriers"
        ],
        icon: Lightbulb,
        color: "primary"
    },
    {
        number: "2",
        title: "Co-Create",
        subtitle: "The How",
        description: "Together with youth, creatives, and experts, we design and prototype mental health solutions — from behavior change campaigns to digital tools, safe spaces, and community programs.",
        details: [
            "Collaborate in co-creation workshops",
            "Develop prototypes for mental health solutions",
            "Test and iterate on community-driven ideas"
        ],
        icon: Users,
        color: "accent"
    },
    {
        number: "3",
        title: "Amplify",
        subtitle: "The Impact",
        description: "We scale proven solutions, channeling mentorship, resources, and expertise into youth-led initiatives, creating a ripple effect of awareness, access, and empowerment.",
        details: [
            "Scale successful youth-led initiatives",
            "Provide mentorship and resources",
            "Measure and amplify impact"
        ],
        icon: Sparkles,
        color: "primary"
    }
];

export function ApproachSection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Animated Heading */}
                <AnimatedElement>
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 leading-tight">
                            <span className="inline-block">Our approach  </span>
                            <span className="relative inline-block text-accent ml-2">
                              to  Change
                                <span className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-0 w-full h-2 sm:h-3 lg:h-4 bg-teal-600 transform -rotate-3 transition-all duration-500 hover:scale-110 hover:rotate-3" />
                            </span>
                        </h2>
                    </div>
                </AnimatedElement>

                {/* Animated Cards with Staggered Delay */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        const isAccent = step.color === "accent";

                        return (
                            <AnimatedElement key={index} delay={(index + 1) * 100}>
                                <Card
                                    role="article"
                                    className={`relative overflow-hidden border-0 shadow-soft hover:shadow-strong transition-smooth ${isAccent ? 'bg-gradient-accent text-accent-foreground' : 'bg-gradient-primary text-primary-foreground'
                                        }`}
                                >
                                    <CardContent className="p-6 sm:p-8 text-center">
                                        <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mb-4 sm:mb-6 ${isAccent ? 'bg-accent-foreground/20' : 'bg-primary-foreground/20'
                                            }`}>
                                            <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                        </div>
                                        <div className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-3 sm:mb-4 ${isAccent ? 'text-accent-foreground/30' : 'text-primary-foreground/30'
                                            }`}>
                                            {step.number}
                                        </div>
                                        <h3 className="font-heading font-bold text-lg sm:text-xl lg:text-2xl mb-2">
                                            {step.title}
                                        </h3>
                                        <p className={`font-medium mb-3 sm:mb-4 text-sm sm:text-base ${isAccent ? 'text-accent-foreground/80' : 'text-primary-foreground/80'
                                            }`}>
                                            {step.subtitle}
                                        </p>
                                        <p className={`font-body mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base ${isAccent ? 'text-accent-foreground/90' : 'text-primary-foreground/90'
                                            }`}>
                                            {step.description}
                                        </p>
                                        <ul className="space-y-2 sm:space-y-3 text-left">
                                            {step.details.map((detail, idx) => (
                                                <li key={idx} className={`flex items-start gap-2 sm:gap-3 text-xs sm:text-sm ${isAccent ? 'text-accent-foreground/80' : 'text-primary-foreground/80'
                                                    }`}>
                                                    <div className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${isAccent ? 'bg-accent-foreground/60' : 'bg-primary-foreground/60'
                                                        }`} />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </AnimatedElement>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}