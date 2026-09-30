import { Button } from "@/components/ui/button";
import { Quote, Heart, Star, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function StoriesSection() {
    // State to track visibility of elements
    const [visibleElements, setVisibleElements] = useState({
        heading: false,
        card1: false,
        card2: false,
        card3: false,
        button: false,
    });

    // Refs for elements
    const headingRef = useRef<HTMLHeadingElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

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
            { threshold: 0.3 } // Trigger when 30% of the element is visible
        );

        // Observe each element
        const elements = [
            { ref: headingRef, key: "heading" },
            { ref: card1Ref, key: "card1" },
            { ref: card2Ref, key: "card2" },
            { ref: card3Ref, key: "card3" },
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

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-teal-700">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Heading */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="font-heading font-black text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 leading-tight">
                        <span className="inline-block">Stories  </span>
                        <span className="relative inline-block text-accent ml-2">
                            in Action
                            <span className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-0 w-full h-2 sm:h-3 lg:h-4  bg-amber-400 transform -rotate-3 transition-all duration-500 hover:scale-110 hover:rotate-3" />
                        </span>
                    </h2>
                </div>

                {/* Testimonials Grid */}
                <div className="relative space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-6 lg:gap-8">
                    {/* Testimonial 1 */}
                    <div
                        ref={card1Ref}
                        className={`relative bg-white p-6 sm:p-8 rounded-xl shadow-2xl transform md:-rotate-2 hover:scale-105 hover:shadow-3xl transition-all duration-500 ${visibleElements.card1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        <Quote className="absolute -top-4 -left-4 w-10 h-10 text-amber-400 transform rotate-12" />
                        <p className="font-body text-lg sm:text-xl md:text-2xl text-gray-900 font-medium italic mb-4">
                            “The Awe-some Café is my safe space to just be me.”
                        </p>
                        <p className="font-semibold text-base sm:text-lg text-teal-700">– 16-year-old student</p>
                        <Heart className="absolute -bottom-4 -right-4 w-8 h-8 text-teal-600 animate-pulse" />
                    </div>

                    {/* Testimonial 2 */}
                    <div
                        ref={card2Ref}
                        className={`relative bg-amber-400 p-6 sm:p-8 rounded-xl shadow-2xl transform md:rotate-2 hover:scale-105 hover:shadow-3xl transition-all duration-600 ${visibleElements.card2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        <Quote className="absolute -top-4 -left-4 w-10 h-10 text-white transform -rotate-12" />
                        <p className="font-body text-lg sm:text-xl md:text-2xl text-gray-900 font-medium italic mb-4">
                            “KeepChatty lets me chat with someone who actually listens, without feeling judged.”
                        </p>
                        <p className="font-semibold text-base sm:text-lg text-teal-700">– 22-year-old university student</p>
                        <MessageCircle className="absolute -bottom-4 -right-4 w-8 h-8 text-teal-600 animate-pulse" />
                    </div>

                    {/* Testimonial 3 */}
                    <div
                        ref={card3Ref}
                        className={`relative bg-white p-6 sm:p-8 rounded-xl shadow-2xl transform md:-rotate-1 hover:scale-105 hover:shadow-3xl transition-all duration-700 ${visibleElements.card3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                            }`}
                    >
                        <Quote className="absolute -top-4 -left-4 w-10 h-10 text-amber-400 transform rotate-6" />
                        <p className="font-body text-lg sm:text-xl md:text-2xl text-gray-900 font-medium italic mb-4">
                            “AMS made learning about mental health fun. I look forward to sessions, and it’s changed how I see myself and others.”
                        </p>
                        <p className="font-semibold text-base sm:text-lg text-teal-700">– 20-year-old youth leader</p>
                        <Star className="absolute -bottom-4 -right-4 w-8 h-8 text-teal-600 animate-pulse" />
                    </div>
                </div>

                {/* CTA Button */}
          
            </div>
        </section>
    );
}