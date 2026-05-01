"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const heroSlides = [
  {
    src: "/hero-1.png",
    alt: "Luxury residential villas community",
    headline: "Find Your Dream Property With Confidence",
    subtitle:
      "Premium plots, secure investments, and trusted real estate services by Sardar Estate",
  },
  {
    src: "/hero-2.png",
    alt: "Modern high-rise apartments",
    headline: "Invest in Modern Living Spaces",
    subtitle:
      "High-rise apartments with world-class amenities and breathtaking city views",
  },
  {
    src: "/hero-3.png",
    alt: "Luxury farmhouse estate",
    headline: "Escape to Nature's Finest Retreats",
    subtitle:
      "Exclusive farmhouse estates surrounded by lush green mountains and serenity",
  },
  {
    src: "/hero-4.png",
    alt: "Premium gated community",
    headline: "Live in Premium Gated Communities",
    subtitle:
      "Secure, elegant townhouses with landscaped gardens and modern infrastructure",
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <section
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with crossfade */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.src}
          className="absolute inset-0 z-0"
          style={{
            opacity: index === current ? 1 : 0,
            transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className="object-cover"
            style={{ filter: "brightness(0.35)" }}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Ken Burns subtle zoom effect on active slide */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          transform: `scale(${1.05})`,
          transition: "transform 6s ease-out",
        }}
      />

      {/* Content */}
      <div className="z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
              {heroSlides[current].headline}
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
              {heroSlides[current].subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* CTA Buttons — static, don't animate with slides */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black font-medium text-sm tracking-widest uppercase rounded-full hover:bg-gray-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-transparent border border-white/30 text-white font-medium text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-sm text-gray-400 tracking-widest uppercase"
        >
          Trusted by 100+ satisfied clients
        </motion.p>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className="relative group p-1"
          >
            <div
              className={`h-1 rounded-full transition-all duration-500 ${
                index === current
                  ? "w-10 bg-white"
                  : "w-4 bg-white/40 group-hover:bg-white/70"
              }`}
            />
            {/* Progress bar on active indicator */}
            {index === current && !isPaused && (
              <div className="absolute top-1 left-0 h-1 rounded-full bg-white/30 overflow-hidden w-10">
                <div
                  className="h-full bg-white rounded-full"
                  style={{
                    animation: `progress ${SLIDE_DURATION}ms linear`,
                  }}
                />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-20 text-white/50 text-sm font-mono tracking-wider">
        <span className="text-white font-semibold">
          {String(current + 1).padStart(2, "0")}
        </span>
        <span className="mx-1">/</span>
        <span>{String(heroSlides.length).padStart(2, "0")}</span>
      </div>
    </section>
  );
}
