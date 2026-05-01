"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { FiMaximize2 } from "react-icons/fi";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    alt: "Luxury Exterior",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Modern Interior",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Spacious Living Room",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Premium Bedroom",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Luxury Bathroom",
    span: "col-span-1 md:col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 md:px-12 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Project Gallery</h2>
          <p className="text-muted text-lg">A glimpse into premium living and architectural excellence</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4"
        >
          {galleryImages.map((img) => (
            <motion.div
              key={img.id}
              variants={fadeIn}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${img.span} border border-border`}
              onClick={() => setSelectedImg(img.src)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <FiMaximize2 size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4"
          onClick={() => setSelectedImg(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white text-xl bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-[60]"
            onClick={() => setSelectedImg(null)}
          >
            ✕
          </button>
          <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center">
            <Image
              src={selectedImg}
              alt="Gallery Preview"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
