import { Sparkles, Users, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// AnimatedCounter component (modified to start counting based on a prop)
function AnimatedCounter({ end, duration = 2000, suffix = "", start = false }: { end: number; duration?: number; suffix?: string; start?: boolean }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return; // Only start counting when start is true

        let startCount = 0;
        const increment = end / (duration / 16); // 60fps
        const timer = setInterval(() => {
            startCount += increment;
            if (startCount >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(Math.ceil(startCount));
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration, start]);

    return (
        <span className="inline-block animate-pulse-once">
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export function AgendaSection() {
    // State to track visibility of elements
    const [visibleElements, setVisibleElements] = useState({
        badge: false,
        heading1: false,
        heading2: false,
        paragraph: false,
        mission: false,
        goal1: false,
        goal2: false,
    });

    // Refs for text elements
    const badgeRef = useRef<HTMLDivElement>(null);
    const heading1Ref = useRef<HTMLSpanElement>(null);
    const heading2Ref = useRef<HTMLSpanElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const missionRef = useRef<HTMLDivElement>(null);
    const goal1Ref = useRef<HTMLDivElement>(null);
    const goal2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const target = entry.target;
                        setVisibleElements((prev) => ({
                            ...prev,
                            [target.getAttribute("data-section") as keyof typeof visibleElements]: true,
                        }));
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of the element is visible
        );

        // Observe each text element
        const elements = [
            { ref: badgeRef, key: "badge" },
            { ref: heading1Ref, key: "heading1" },
            { ref: heading2Ref, key: "heading2" },
            { ref: paragraphRef, key: "paragraph" },
            { ref: missionRef, key: "mission" },
            { ref: goal1Ref, key: "goal1" },
            { ref: goal2Ref, key: "goal2" },
        ];

        elements.forEach(({ ref, key }) => {
            if (ref.current) {
                ref.current.setAttribute("data-section", key);
                observer.observe(ref.current);
            }
        });

        return () => {
            elements.forEach(({ ref }) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <section className=" py-12 sm:py-16 lg:py-24 bg-amber-50 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-teal-600 rounded-full opacity-30 animate-pulse-slow -translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-accent rounded-full opacity-30 animate-pulse-slow translate-x-1/4 translate-y-1/4" />

                {/* Heading */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative z-10">
                    <div
                        ref={badgeRef}
                        className={`inline-flex items-center gap-2 sm:gap-3 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-700 ${visibleElements.badge ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 animate-pulse-slow" />
                        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-teal-600">
                            Vision for the Future
                        </span>
                    </div>
                    <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 leading-tight">
                        <span
                            ref={heading1Ref}
                            className={`inline-block transition-all duration-700 ${visibleElements.heading1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            AMS{" "}
                        </span>
                        <span
                            ref={heading2Ref}
                            className={`relative inline-block text-accent transition-all duration-700 ${visibleElements.heading2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            Agenda 2035
                            <span className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-0 w-full h-2 sm:h-3 lg:h-4 bg-teal-600 transform -rotate-3 transition-all duration-500 hover:scale-110 hover:rotate-3" />
                        </span>
                    </h2>
                    <p
                        ref={paragraphRef}
                        className={`font-body text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-700 ${visibleElements.paragraph ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                    >
                        Empowering young people to heal, connect, and thrive through bold, creative mental health solutions.
                    </p>
                </div>

                {/* Mission Statement */}
                <div
                    ref={missionRef}
                    className={`relative bg-white border-l-4 sm:border-l-8 border-accent p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 max-w-3xl mx-auto shadow-2xl rounded-xl hover:shadow-3xl hover:-translate-y-2 transition-all duration-700 ${visibleElements.mission ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <p className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 italic leading-relaxed">
                        "To make mental health <span className="text-teal-600 font-bold">simple, relatable, practical, and accessible</span> for young people — empowering them to heal, learn, connect, and thrive, while building sustainable systems that amplify youth impact."
                    </p>
                    <div className="absolute -top-4 sm:-top-5 lg:-top-6 -left-4 sm:-left-5 lg:-left-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-amber-400 rounded-full hover:scale-150 transition-transform duration-500 animate-pulse-slow" />
                    <Sparkles className="absolute -bottom-4 sm:-bottom-5 lg:-bottom-6 -right-4 sm:-right-5 lg:-right-6 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-accent animate-spin-slow" />
                </div>

                {/* Content and Image Grid */}
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {/* Goals Text */}
                    <div className="flex flex-col gap-6 sm:gap-8 order-1 lg:order-1">
                        {/* Impact Goal */}
                        <div
                            ref={goal1Ref}
                            className={`relative bg-teal-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ${visibleElements.goal1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 animate-pulse-slow flex-shrink-0" />
                                <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900">
                                    Reach <AnimatedCounter end={1000000} suffix="+" start={visibleElements.goal1} /> Young Minds
                                </h3>
                            </div>
                            <p className="font-body text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                By 2035, we'll connect with over 1 million young people across Uganda and East Africa through creative hubs, digital platforms, peer programs, and vibrant community initiatives.
                            </p>
                        </div>

                        {/* Ecosystem Goal */}
                        <div
                            ref={goal2Ref}
                            className={`relative bg-amber-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-700 ${visibleElements.goal2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                                }`}
                        >
                            <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-accent animate-pulse-slow flex-shrink-0" />
                                <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900">
                                    Amplify Youth Impact
                                </h3>
                            </div>
                            <p className="font-body text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                Every interaction builds stronger mental health ecosystems, nurtures leadership, and scales innovations that grow with communities, empowering youth to lead the change.
                            </p>
                        </div>
                    </div>

                    {/* Image Grid */}
                    <div className="relative grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 animate-fade-in-up delay-800 order-2 lg:order-2">
                        <div className="relative col-span-2 transform transition-all duration-500">
                            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl transform translate-x-3 sm:translate-x-4 lg:translate-x-6 translate-y-3 sm:translate-y-4 lg:translate-y-6 z-0 transition-transform duration-500 hover:translate-x-2 hover:translate-y-2" />
                            <img
                                src="/img_7.png"
                                alt="Young people collaborating in a creative mental health hub"
                                className="relative w-full h-auto rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl object-cover z-10 border-2 sm:border-4 border-white transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}