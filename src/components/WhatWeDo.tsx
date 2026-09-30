import { Heart, Users, Sparkles, Lightbulb, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ApproachSection } from "./aproach";

export function WhatWeDo() {
  // State to track visibility of elements
  const [visibleElements, setVisibleElements] = useState({
    badge: false,
    heading: false,
    subtitle: false,
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    approachTitle: false,
    understand: false,
    cocreate: false,
    amplify: false,
  });

  // Refs for text elements
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const item1Ref = useRef<HTMLDivElement>(null);
  const item2Ref = useRef<HTMLDivElement>(null);
  const item3Ref = useRef<HTMLDivElement>(null);
  const item4Ref = useRef<HTMLDivElement>(null);
  const approachTitleRef = useRef<HTMLHeadingElement>(null);
  const understandRef = useRef<HTMLDivElement>(null);
  const cocreateRef = useRef<HTMLDivElement>(null);
  const amplifyRef = useRef<HTMLDivElement>(null);

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
      { ref: headingRef, key: "heading" },
      { ref: subtitleRef, key: "subtitle" },
      { ref: item1Ref, key: "item1" },
      { ref: item2Ref, key: "item2" },
      { ref: item3Ref, key: "item3" },
      { ref: item4Ref, key: "item4" },
      { ref: approachTitleRef, key: "approachTitle" },
      { ref: understandRef, key: "understand" },
      { ref: cocreateRef, key: "cocreate" },
      { ref: amplifyRef, key: "amplify" },
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
    <section className="py-12 sm:py-16 lg:py-24 bg-amber-50 overflow-hidden relative bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-teal-600 rounded-full opacity-20 animate-pulse-slow -translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-accent rounded-full opacity-20 animate-pulse-slow translate-x-1/3 translate-y-1/3" />

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 relative z-10">
          <div
            ref={badgeRef}
            className={`inline-flex items-center gap-2 sm:gap-3 bg-white px-3 sm:px-4 py-2 sm:py-3 rounded-full shadow-lg transition-all duration-700 ${visibleElements.badge ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 animate-pulse-slow" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-teal-600">
              Our Mission
            </span>
          </div>
          <h2
            ref={headingRef}
            className={`font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4 leading-tight transition-all duration-700 ${visibleElements.heading ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <span className="inline-block">What </span>
            <span className="relative inline-block text-accent">
              We Do
              <span className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-0 w-full h-2 sm:h-3 lg:h-4 bg-teal-600 transform -rotate-3 transition-all duration-500 hover:scale-110 hover:rotate-3" />
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className={`font-body text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto transition-all duration-700 ${visibleElements.subtitle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            At AMS, we work at the intersection of <span className="text-teal-600 font-semibold">innovation, communication, and community impact</span> to make mental health accessible and empowering for young people.
          </p>
        </div>

        {/* What We Do List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div
            ref={item1Ref}
            className={`relative rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-700 overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] ${visibleElements.item1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <img
              src="/img_6.png"
              alt="Young people receiving mental health support"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl border-2 border-white transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl" /> {/* Overlay for text readability */}
            <div className="relative p-6 sm:p-8 flex flex-col h-full justify-end">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 animate-pulse-slow flex-shrink-0" />
                <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-white drop-shadow-md">
                  Support Youth
                </h3>
              </div>
              <p className="font-body text-sm sm:text-base md:text-lg text-white drop-shadow-md leading-relaxed">
                Helping young people heal, learn, connect, and thrive through tailored mental health support.
              </p>
            </div>
          </div>
          <div
            ref={item2Ref}
            className={`relative rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-700 overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] ${visibleElements.item2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <img
              src="/img_3.png"
              alt="Interactive mental health workshop"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl border-2 border-white transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl" />
            <div className="relative p-6 sm:p-8 flex flex-col h-full justify-end">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-accent animate-pulse-slow flex-shrink-0" />
                <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-white drop-shadow-md">
                  Design Programs
                </h3>
              </div>
              <p className="font-body text-sm sm:text-base md:text-lg text-white drop-shadow-md leading-relaxed">
                Creating interactive programs, campaigns, and workshops that make mental health practical, fun, and stigma-free.
              </p>
            </div>
          </div>
          <div
            ref={item3Ref}
            className={`relative rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-700 overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] ${visibleElements.item3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <img
              src="/img_8.png"
              alt="Collaboration with NGOs and innovators"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl border-2 border-white transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl" />
            <div className="relative p-6 sm:p-8 flex flex-col h-full justify-end">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600 animate-pulse-slow flex-shrink-0" />
                <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-white drop-shadow-md">
                  Partner for Impact
                </h3>
              </div>
              <p className="font-body text-sm sm:text-base md:text-lg text-white drop-shadow-md leading-relaxed">
                Collaborating with NGOs, startups, and innovators to co-create scalable, community-led mental health solutions.
              </p>
            </div>
          </div>
          <div
            ref={item4Ref}
            className={`relative rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-700 overflow-hidden min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] ${visibleElements.item4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <img
              src="/img_4.png"
              alt="Reinvesting resources into community programs"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl border-2 border-white transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 rounded-2xl" />
            <div className="relative p-6 sm:p-8 flex flex-col h-full justify-end">
              <div className="flex items-center gap-3 sm:gap-4 mb-4">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-accent animate-pulse-slow flex-shrink-0" />
                <h3 className="font-heading font-bold text-lg sm:text-xl md:text-2xl text-white drop-shadow-md">
                  Reinvest Resources
                </h3>
              </div>
              <p className="font-body text-sm sm:text-base md:text-lg text-white drop-shadow-md leading-relaxed">
                Channeling expertise and resources into community programs to expand reach and empower youth continuously.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach to Change - Redesigned for creativity with step indicators and connecting arrows */}
       <ApproachSection/>
      </div>
    </section>
  );
}