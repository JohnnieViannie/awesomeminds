import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-youth-community.jpg";
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
    <section className="min-h-screen bg-amber-50 overflow-hidden">
      {/* Content */}
      <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center justify-between min-h-screen gap-12">
        <div className="flex-1 text-center lg:text-left z-10">
          {/* Top Badge with Slide-In */}
          <div className="mb-8 flex items-center justify-center lg:justify-start gap-4 bg-teal-100 px-5 py-3 rounded-full inline-flex shadow-lg animate-fade-in-up delay-100">
            <Heart className="w-5 h-5 text-teal-600 animate-pulse-slow" />
            <span className="text-sm font-extrabold uppercase tracking-widest text-teal-600">
              Uganda's Mental Health Innovators
            </span>
          </div>

          {/* Headline with Staggered Fade-In */}
          <h1 className="font-heading font-black text-4xl md:text-5xl lg:text-7xl text-gray-900 mb-6 leading-tight">
            <span className="animate-fade-in-up delay-200 inline-block">Empowering{" "}</span>
            <span className="relative inline-block text-teal-600 animate-fade-in-up delay-300">
              Minds with Clarity
              <span className="absolute -bottom-4 left-0 w-full h-4 bg-pink-400 transform -rotate-2 transition-all duration-500 hover:scale-110 hover:rotate-2" />
            </span>
          </h1>

          {/* Intro Text with Fade-In */}
          <p className="font-body text-lg md:text-xl text-gray-700 mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-400">
            <strong>Awesome Mind Speaks (AMS)</strong> turns complex mental health challenges into bold, accessible solutions for youth, NGOs, and innovators.
          </p>

          {/* Quote Card with Fade-In */}
          <div className="relative bg-white border-l-8 border-teal-600 p-4 mb-8 max-w-lg mx-auto lg:mx-0 shadow-2xl rounded-xl group hover:shadow-3xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-500">
            <p className="font-heading text-[20px] md:text-xl font-semibold text-gray-800 italic">
              "Bold ideas, simple solutions, lasting impact."
            </p>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400 rounded-full group-hover:scale-150 transition-transform duration-500" />
          </div>

          {/* Buttons with Fade-In */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              variant="default"
              size="lg"
              className="bg-teal-700 text-white font-semibold rounded-full px-8 py-3 hover:bg-teal-800 group transition-all duration-300 animate-fade-in-up delay-600"
            >
              Explore Our Vision
              <Sparkles className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-teal-700 text-teal-700 font-semibold rounded-full px-8 py-3 hover:bg-teal-50 hover:text-teal-800 transition-all duration-300 animate-fade-in-up delay-700"
            >
              Join Our Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>

          {/* Stats with Counting Animation */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-gray-600">
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-md animate-fade-in-up delay-800">
              <Users className="w-6 h-6 text-teal-600 animate-spin-slow" />
              <span className="text-sm font-extrabold">
                <AnimatedCounter end={5000} duration={2500} suffix="+" /> Minds Inspired
              </span>
            </div>
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-lg shadow-md animate-fade-in-up delay-900">
              <Heart className="w-6 h-6 text-pink-400 animate-pulse-slow" />
              <span className="text-sm font-extrabold">
                <AnimatedCounter end={20} duration={2000} suffix="+" /> Impactful Partnerships
              </span>
            </div>
          </div>
        </div>

        {/* Image Section with Staggered Fade-In */}
        <div className="flex-1 mt-12 lg:mt-0 relative perspective-1000">
          <div className="relative group grid grid-cols-2 gap-6 max-w-lg mx-auto lg:mx-0">
            {/* Main Image */}
            <div className="relative col-span-2 transform transition-all duration-500 group-hover:rotate-y-12 origin-center animate-fade-in-up delay-300">
              <div className="absolute inset-0 bg-purple-600 rounded-3xl transform translate-x-6 translate-y-6 z-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
              <img
                src={heroImage}
                alt="Youth community engaged in mental health activities"
                className="relative w-full h-auto rounded-3xl shadow-2xl object-cover z-10 border-4 border-white transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Secondary Images */}
            <div className="relative transform transition-all duration-500 group-hover:rotate-x-12 origin-bottom animate-fade-in-up delay-500">
              <div className="absolute inset-0 bg-yellow-400 rounded-3xl transform -translate-x-4 -translate-y-4 z-0 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2" />
              <img
                src={heroImage}
                alt="Youth community engaged in mental health activities"
                className="relative w-full h-auto rounded-3xl shadow-2xl object-cover z-10 border-4 border-white transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="relative transform transition-all duration-500 group-hover:-rotate-x-12 origin-top animate-fade-in-up delay-700">
              <div className="absolute inset-0 bg-indigo-400 rounded-3xl transform translate-x-4 translate-y-4 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
              <img
                src={heroImage}
                alt="Youth community engaged in mental health activities"
                className="relative w-full h-auto rounded-3xl shadow-2xl object-cover z-10 border-4 border-white transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Floating Icon */}
            <div className="absolute -top-8 -right-8 bg-white p-4 rounded-full shadow-xl group-hover:animate-spin transition-transform duration-500 z-20 animate-fade-in-up delay-1000">
              <Sparkles className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Add this to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulseOnce {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-once {
          animation: pulseOnce 0.3s ease-in-out;
          display: inline-block;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-900 { animation-delay: 0.9s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  );
}