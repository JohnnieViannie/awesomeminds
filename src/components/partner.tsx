import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function PartnersSection() {
    const [visibleElements, setVisibleElements] = useState({
        heading: false,
        moonshot: false,
        carousel: false,
        partnersText: false,
        button: false,
    });
    const [isPaused, setIsPaused] = useState(false);

    const headingRef = useRef<HTMLHeadingElement>(null);
    const moonshotRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const partnersTextRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

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
            { threshold: 0.3 }
        );

        const elements = [
            { ref: headingRef, key: "heading" },
            { ref: moonshotRef, key: "moonshot" },
            { ref: carouselRef, key: "carousel" },
            { ref: partnersTextRef, key: "partnersText" },
            { ref: buttonRef, key: "button" },
        ];

        elements.forEach(({ ref, key }) => {
            if (ref.current) {
                ref.current.setAttribute("data-section", key);
                observer.observe(ref.current);
            } else {
                console.warn(`Ref for ${key} is null`);
            }
        });

        return () => {
            elements.forEach(({ ref }) => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    // Auto-scroll effect for continuous motion
    useEffect(() => {
        if (!scrollContainerRef.current || !visibleElements.carousel || isPaused) return;

        const scrollContainer = scrollContainerRef.current;
        const scrollWidth = scrollContainer.scrollWidth;
        const clientWidth = scrollContainer.clientWidth;
        let scrollPosition = 0;
        let animationFrameId: number;

        const scroll = () => {
            scrollPosition += 2; // Adjust speed here
            if (scrollPosition >= scrollWidth - clientWidth) {
                scrollPosition = 0;
            }
            scrollContainer.scrollLeft = scrollPosition;
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [visibleElements.carousel, isPaused]);

    const images = [
        { src: "/eu.png", alt: "European Union" },
        { src: "/bn.jpg", alt: "Partner 2" },
        { src: "/jas.PNG", alt: "Partner 3" },
        { src: "/sweden.png", alt: "Sweden" },
        { src: "/chedu.jpg", alt: "Partner 5" },
        { src: "/iris.jpg", alt: "Iris" },
        { src: "/Covalogo.png", alt: "Cova" },
        { src: "/hand.png", alt: "Partner 8" },
        { src: "/lilac.png", alt: "Shopify" },
        { src: "/vodologo.png", alt: "Vodo" },
        { src: "/motiv.png", alt: "Motiv" },
        { src: "/policy.png", alt: "Policy" },
        { src: "/dhlab.png", alt: "DH Lab" },
        { src: "/RHU.jpg", alt: "RHU" },
        { src: "/download.png", alt: "Partner 14" },
        { src: "/phau.png", alt: "PHAU" },
        { src: "/naguru.jpeg", alt: "Naguru" },
        { src: "/6.png", alt: "Partner 16" },
        { src: "/maxima.jpg", alt: "Maxima" },
    ];

    // Duplicate images for seamless loop
    const duplicatedImages = [...images, ...images];

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4 sm:px-6">
              

                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 leading-tight">
                        <span className="inline-block">Our  </span>
                        <span className="relative inline-block text-accent ml-2">
                            Partners
                            <span className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-0 w-full h-2 sm:h-3 lg:h-4 bg-teal-600 transform -rotate-3 transition-all duration-500 hover:scale-110 hover:rotate-3" />
                        </span>
                    </h2>
                </div>
                <p
                    ref={partnersTextRef}
                    className={`font-body text-base sm:text-lg md:text-xl text-gray-800 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto text-center leading-relaxed transition-all duration-700 ${visibleElements.partnersText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                >
                    We work with schools, NGOs, creative hubs, startups, and youth networks to scale real-life solutions and foster systemic change — amplifying youth impact while strengthening mental health ecosystems.
                </p>

                <div
                    ref={carouselRef}
                    className={`relative transition-all duration-700 ${visibleElements.carousel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                >
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-hidden space-x-4 sm:space-x-6 py-4 scrollbar-hide"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {duplicatedImages.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-40 sm:w-56 md:w-64 lg:w-72 relative group p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 bg-white"
                            >
                                <img
                                    src={partner.src}
                                    alt={partner.alt}
                                    className="w-full h-32 sm:h-40 object-contain rounded-lg transition-transform duration-300 group-hover:rotate-3"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-teal-700 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 rounded-lg">
                                    {/* Hover overlay content if needed */}
                                </div>
                            </div>
                        ))}
                    </div>
                   
                </div>

                <div className="text-center mt-10">
                    <Button
                        ref={buttonRef}
                        variant="outline"
                        size="lg"
                        className={`border-2 border-teal-700 text-teal-700 font-semibold rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base hover:bg-teal-50 hover:text-teal-800 transition-all duration-700 w-full sm:w-auto ${visibleElements.button ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        Become a partner
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                </div>
                <div
                    ref={moonshotRef}
                    className={`text-white mt-5 bg-accent p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl mb-10 sm:mb-12 lg:mb-16 max-w-3xl mx-auto transition-all duration-700 ${visibleElements.moonshot ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
                >
                    <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl mb-4 flex items-center justify-center gap-3">
                        Our Moonshot
                    </h3>
                    <p className="font-body text-white text-lg sm:text-xl md:text-2xl text-gray-900 font-medium italic mb-4">
                        To create a world where every young person experiences mental health as simple, relatable, and empowering, building a sustainable cycle of youth mental health support, leadership, and innovation.
                    </p>
                </div>
            </div>

            <style>
                {`
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .group:hover .bg-opacity-70 {
                        backdrop-filter: blur(4px);
                    }
                    @keyframes slideIn {
                        from {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </section>
    );
}