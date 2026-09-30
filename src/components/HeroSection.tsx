import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Counting animation component (unchanged)
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className="inline-block animate-pulse-once">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function HeroSection() {
  // State to track visibility of elements
  const [visibleElements, setVisibleElements] = useState({
    badge: false,
    heading1: false,
    heading2: false,
    heading3: false,
    paragraph: false,
    quote: false,
    button1: false,
    button2: false,
  });

  // Refs for text elements
  const badgeRef = useRef<HTMLDivElement>(null);
  const heading1Ref = useRef<HTMLSpanElement>(null);
  const heading2Ref = useRef<HTMLSpanElement>(null);
  const heading3Ref = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);

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
      { ref: heading3Ref, key: "heading3" },
      { ref: paragraphRef, key: "paragraph" },
      { ref: quoteRef, key: "quote" },
      { ref: button1Ref, key: "button1" },
      { ref: button2Ref, key: "button2" },
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
    <section className="min-h-screen pt-20 bg-amber-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 lg:gap-12">
        {/* Image Section (unchanged) */}
        <div className="flex-1 lg:mt-0 relative w-full max-w-sm sm:max-w-md lg:max-w-lg order-first lg:order-2">
          <div className="relative grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            <div className="relative col-span-2 transform transition-all duration-500 animate-fade-in-up delay-300 w-full">
              <div className="absolute inset-0 bg-teal-600 rounded-2xl sm:rounded-3xl transform translate-x-2 sm:translate-x-3 lg:translate-x-6 translate-y-2 sm:translate-y-3 lg:translate-y-6 z-0 transition-transform duration-500 hover:translate-x-1 hover:translate-y-1" />
              <img
                src="/o.jpg"
                alt="Youth community engaged in mental health activities"
                className="relative w-full h-auto rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl object-cover z-10 border-2 sm:border-4 border-white transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative transform transition-all duration-500 animate-fade-in-up delay-500 w-full">
              <div className="absolute inset-0 bg-yellow-400 rounded-2xl sm:rounded-3xl transform -translate-x-1 sm:-translate-x-2 lg:-translate-x-4 -translate-y-1 sm:-translate-y-2 lg:-translate-y-4 z-0 transition-transform duration-500 hover:-translate-x-1 hover:-translate-y-1" />
              <img
                src="/img_1.png"
                alt="Youth community engaged in mental health activities"
                className="relative w-full h-auto rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl object-cover z-10 border-2 sm:border-4 border-white transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative transform transition-all duration-500 animate-fade-in-up delay-700 w-full">
              <div className="absolute inset-0 bg-accent rounded-2xl sm:rounded-3xl transform translate-x-1 sm:translate-x-2 lg:translate-x-4 translate-y-1 sm:translate-y-2 lg:translate-y-4 z-0 transition-transform duration-500 hover:translate-x-1 hover:translate-y-1" />
              <img
                src="/img_2.png"
                alt="Youth community engaged in mental health activities"
                className="relative w-full h-auto rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl object-cover z-10 border-2 sm:border-4 border-white transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="absolute -top-4 sm:-top-6 lg:-top-8 -right-4 sm:-right-6 lg:-right-8 bg-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg sm:shadow-xl transition-transform duration-500 z-20 animate-fade-in-up delay-1000">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-accent hover:animate-spin transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left z-10 w-full order-last lg:order-1">
          <div
            ref={badgeRef}
            className={`mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-2 sm:gap-4 bg-teal-100 px-3 sm:px-5 py-2 sm:py-3 rounded-full inline-flex shadow-lg transition-all duration-700 ${visibleElements.badge ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 animate-pulse-slow flex-shrink-0" />
            <span className="text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-wide sm:tracking-widest text-teal-600">
              Human-centered mental health for young people
            </span>
          </div>

          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 mb-4 sm:mb-6 leading-tight">
            <span
              ref={heading1Ref}
              className={`inline-block transition-all duration-700 ${visibleElements.heading1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              We make mental health{" "}
            </span>
            <span
              ref={heading2Ref}
              className={`relative inline-block text-teal-600 transition-all duration-700 ${visibleElements.heading2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              simple, real, and connected.
              <span className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-0 w-full h-2 sm:h-3 lg:h-4 bg-accent transform -rotate-2 transition-all duration-500 hover:scale-110 hover:rotate-2" />
            </span>
            <span
              ref={heading3Ref}
              className={`inline-block transition-all duration-700 ${visibleElements.heading3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
            </span>
          </h1>

          <p
            ref={paragraphRef}
            className={`font-body text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed max-w-full sm:max-w-xl mx-auto lg:mx-0 transition-all duration-700 ${visibleElements.paragraph ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <strong>Awesome Mind Speaks</strong> creates safe spaces, practical support, and real-world systems so young people can feel seen, supported, and empowered to thrive.
          </p>

          <div
            ref={quoteRef}
            className={`relative bg-white border-l-4 sm:border-l-8 border-teal-600 p-3 sm:p-4 mb-6 sm:mb-8 max-w-full sm:max-w-lg mx-auto lg:mx-0 shadow-xl sm:shadow-2xl rounded-lg sm:rounded-xl hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-700 ${visibleElements.quote ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <p className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 italic">
              “Mental health should feel human, not heavy.”
            </p>
            <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-amber-400 rounded-full hover:scale-150 transition-transform duration-500" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button
              ref={button1Ref}
              variant="default"
              size="lg"
              className={`bg-teal-700 text-white font-semibold rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base hover:bg-teal-800 group transition-all duration-700 w-full sm:w-auto ${visibleElements.button1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              Explore the work
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            <Button
              ref={button2Ref}
              variant="outline"
              size="lg"
              className={`border-2 border-teal-700 text-teal-700 font-semibold rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base hover:bg-teal-50 hover:text-teal-800 transition-all duration-700 w-full sm:w-auto ${visibleElements.button2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              Get involved
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}