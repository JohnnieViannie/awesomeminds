import { Users, GraduationCap, Globe, MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

// AnimatedCounter component (reused from AgendaSection)
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

export function Impact() {
  // State to track visibility of elements
  const [visibleElements, setVisibleElements] = useState({
    badge: false,
    heading: false,
    subtitle: false,
    metric1: false,
    metric2: false,
    metric3: false,
    metric4: false,
  });

  // Refs for elements
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metric1Ref = useRef<HTMLDivElement>(null);
  const metric2Ref = useRef<HTMLDivElement>(null);
  const metric3Ref = useRef<HTMLDivElement>(null);
  const metric4Ref = useRef<HTMLDivElement>(null);

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

    // Observe each element
    const elements = [
      { ref: badgeRef, key: "badge" },
      { ref: headingRef, key: "heading" },
      { ref: subtitleRef, key: "subtitle" },
      { ref: metric1Ref, key: "metric1" },
      { ref: metric2Ref, key: "metric2" },
      { ref: metric3Ref, key: "metric3" },
      { ref: metric4Ref, key: "metric4" },
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
    <section className="py-12 sm:py-16 lg:py-24 bg-amber-50 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-teal-600 rounded-full opacity-30 animate-pulse-slow -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-20 sm:h-20 lg:w-28 lg:h-28 bg-accent rounded-full opacity-30 animate-pulse-slow translate-x-1/4 translate-y-1/4" />

        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative z-10">
         
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 leading-tight">
              <span className="inline-block">Our  </span>
              <span className="relative inline-block text-accent ml-2">
                Impact
                <span className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-0 w-full h-2 sm:h-3 lg:h-4 bg-teal-600 transform -rotate-3 transition-all duration-500 hover:scale-110 hover:rotate-3" />
              </span>
            </h2>
          </div>
         
          <p
            ref={subtitleRef}
            className={`font-body text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed max-w-full sm:max-w-xl mx-auto transition-all duration-700 ${visibleElements.subtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            Discover how AMS is transforming mental health support for young people in Uganda through innovative programs and community engagement.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div
            ref={metric1Ref}
            className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-6 flex flex-col items-center text-center ${visibleElements.metric1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="relative mb-4 w-full h-32 sm:h-40 lg:h-48 overflow-hidden rounded-2xl">
              <img
                src="/img_9.png"
                alt="Young people engaged in mental health activities"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-teal-100 rounded-full">
                <Users className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">
                <AnimatedCounter end={5000} suffix="+" start={visibleElements.metric1} />
              </h3>
            </div>
            <p className="text-gray-700 text-base">Young People Engaged</p>
            <p className="text-gray-500 text-sm mt-1">Through school programs, peer sessions, and creative hubs.</p>
          </div>

          <div
            ref={metric2Ref}
            className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-6 flex flex-col items-center text-center ${visibleElements.metric2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="relative mb-4 w-full h-32 sm:h-40 lg:h-48 overflow-hidden rounded-2xl">
              <img
                src="/img_10.png"
                alt="Teachers trained in mental health support"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-yellow-100 rounded-full">
                <GraduationCap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">
                <AnimatedCounter end={60} suffix="+" start={visibleElements.metric2} />
              </h3>
            </div>
            <p className="text-gray-700 text-base">Teachers Trained</p>
            <p className="text-gray-500 text-sm mt-1">On youth mental health support.</p>
          </div>

          <div
            ref={metric3Ref}
            className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-6 flex flex-col items-center text-center ${visibleElements.metric3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="relative mb-4 w-full h-32 sm:h-40 lg:h-48 overflow-hidden rounded-2xl">
              <img
                src="/img_12.png"
                alt="Digital platforms for mental health"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-accent rounded-full">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">
                Digital Platforms
              </h3>
            </div>
            <p className="text-gray-700 text-base">Piloted</p>
            <p className="text-gray-500 text-sm mt-1">Offering personalized, stigma-free support to youth aged 13–30.</p>
          </div>

          <div
            ref={metric4Ref}
            className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-6 flex flex-col items-center text-center ${visibleElements.metric4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="relative mb-4 w-full h-32 sm:h-40 lg:h-48 overflow-hidden rounded-2xl">
              <img
                src="/img_11.png"
                alt="Community dialogues on mental health"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-teal-100 rounded-full">
                <MessageCircle className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="font-heading font-bold text-xl text-gray-900">
                Community Dialogues
              </h3>
            </div>
            <p className="text-gray-700 text-base">Initiated</p>
            <p className="text-gray-500 text-sm mt-1">Fostering conversations on mental health.</p>
          </div>
        </div>
      </div>
    </section>
  );
}