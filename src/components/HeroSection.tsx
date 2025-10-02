import { Button } from "@/components/ui/button";

import { ArrowRight, Users, Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

// Counting animation component
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
  return (
    <section className="min-h-screen pt-20 bg-amber-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between min-h-screen gap-8 lg:gap-12">
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left z-10 w-full">
          <div className="mb-6 sm:mb-8 flex items-center justify-center lg:justify-start gap-2 sm:gap-4 bg-teal-100 px-3 sm:px-5 py-2 sm:py-3 rounded-full inline-flex shadow-lg animate-fade-in-up delay-100">
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 animate-pulse-slow flex-shrink-0" />
            <span className="text-[10px] sm:text-xs md:text-sm font-extrabold uppercase tracking-wide sm:tracking-widest text-teal-600">
              Uganda's Mental Health Innovators
            </span>
          </div>

          <h1 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-gray-900 mb-4 sm:mb-6 leading-tight">
            <span className="animate-fade-in-up delay-200 inline-block">We dare to make{" "}</span>
            <span className="relative inline-block text-teal-600 animate-fade-in-up delay-300">
              complex things simple
              <span className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 left-0 w-full h-2 sm:h-3 lg:h-4 bg-accent transform -rotate-2 transition-all duration-500 hover:scale-110 hover:rotate-2" />
            </span>
          </h1>

          <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed max-w-full sm:max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-400">
            <strong>Welcome to Awesome Mind Speaks (AMS)</strong> — Uganda's first human-centered mental health studio. We make mental health simple, real, and for you by connecting young people to care, empowering providers to do
            meaningful work, and helping funders turn resources into measurable, lasting impact.
          </p>

          <div className="relative bg-white border-l-4 sm:border-l-8 border-teal-600 p-3 sm:p-4 mb-6 sm:mb-8 max-w-full sm:max-w-lg mx-auto lg:mx-0 shadow-xl sm:shadow-2xl rounded-lg sm:rounded-xl hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-500">
            <p className="font-heading text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 italic">
              "Mental health made simple, relatable, and for you" —Impact always.
            </p>
            <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-amber-400 rounded-full hover:scale-150 transition-transform duration-500" />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <Button
              variant="default"
              size="lg"
              className="bg-teal-700 text-white font-semibold rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base hover:bg-teal-800 group transition-all duration-300 animate-fade-in-up delay-600 w-full sm:w-auto"
            >
              Explore Our Vision
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-teal-700 text-teal-700 font-semibold rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base hover:bg-teal-50 hover:text-teal-800 transition-all duration-300 animate-fade-in-up delay-700 w-full sm:w-auto"
            >
              Join Our Journey
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 lg:mt-0 relative w-full max-w-sm sm:max-w-md lg:max-w-lg">
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
      </div>
    </section>
  );
}
