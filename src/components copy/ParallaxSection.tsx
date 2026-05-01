"use client";

import { motion } from "framer-motion";

export default function ParallaxSection() {
  return (
    <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* 
        Using CSS background-attachment: fixed for simple, performant parallax.
        It falls back gracefully on mobile devices.
      */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      
      {/* Dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30 z-10" />

      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight"
        >
          Designed for Modern Living
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl"
        >
          Smart layouts, elegant design, and future-ready homes
        </motion.p>
      </div>
    </section>
  );
}
