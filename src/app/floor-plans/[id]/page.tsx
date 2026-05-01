"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowLeft, FiPhone, FiCheck, FiMaximize2 } from "react-icons/fi";
import { useState } from "react";

// Mock data matching the main list
const planDetails: Record<string, any> = {
  "5-marla-modern": {
    title: "5 Marla House Plan",
    specs: { beds: 3, baths: 4, kitchens: 1, garage: 1 },
    area: "1125 sq ft",
    price: "Starting from PKR 1.5 Crore",
    description: "This 5 Marla house plan is meticulously crafted to offer maximum utility within a compact space. The ground floor features an open-concept living and dining area, a modern kitchen, and a powder room. The first floor hosts three spacious bedrooms, each with attached baths, ensuring privacy and comfort for the whole family. A dedicated car porch and a small green space at the front add to the aesthetic appeal.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    features: ["Open floor plan", "Attached baths", "Car porch", "Terrace", "Modern kitchen"],
  },
  "10-marla-luxury": {
    title: "10 Marla Luxury Plan",
    specs: { beds: 5, baths: 6, kitchens: 2, garage: 2 },
    area: "2250 sq ft",
    price: "Starting from PKR 2.8 Crore",
    description: "Designed for larger families seeking a luxurious lifestyle, this 10 Marla plan boasts a double-height entrance lobby that exudes grandeur. The layout includes two kitchens (main and grease kitchen), a spacious drawing room, and a family lounge on each floor. The master suite features a walk-in closet and a jacuzzi-ready bathroom. Large windows throughout ensure ample natural light and cross-ventilation.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    features: ["Double-height lobby", "Grease kitchen", "Servant quarter", "Walk-in closets", "2-car garage"],
  },
  "1-kanal-premium": {
    title: "1 Kanal Premium Plan",
    specs: { beds: 6, baths: 7, kitchens: 2, garage: 3 },
    area: "4500 sq ft",
    price: "Starting from PKR 5.5 Crore",
    description: "The 1 Kanal Premium Plan is the epitome of high-end living. It features expansive front and back lawns, a sprawling ground-floor entertainment area, and a majestic spiral staircase. The home includes multiple master suites, a private study, and a home theater room. The exterior design seamlessly blends contemporary architecture with timeless elegance.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    features: ["Expansive lawns", "Home theater room", "Private study", "Spiral staircase", "3-car garage", "Multiple servant quarters"],
  },
  default: {
    title: "Premium Floor Plan",
    specs: { beds: 4, baths: 5, kitchens: 1, garage: 1 },
    area: "Various sizes",
    price: "Contact for pricing",
    description: "A beautifully designed layout focusing on modern aesthetics, spacious rooms, and efficient use of natural light. This plan is fully customizable to meet your specific requirements and lifestyle needs.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
    features: ["Modern aesthetics", "Customizable layout", "Efficient space usage", "Natural lighting"],
  }
};

export default function FloorPlanDetailsPage() {
  const params = useParams();
  const id = params?.id as string;
  const [isZoomed, setIsZoomed] = useState(false);

  const plan = planDetails[id] || planDetails["default"];

  return (
    <main className="w-full min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back button */}
        <Link
          href="/floor-plans"
          className="inline-flex items-center text-muted hover:text-foreground mb-8 transition-colors text-sm tracking-widest uppercase"
        >
          <FiArrowLeft className="mr-2" />
          Back to Floor Plans
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT: Image Viewer */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`relative bg-card border border-border rounded-2xl overflow-hidden cursor-zoom-in transition-all duration-500 ${
                isZoomed ? "fixed inset-4 z-50 bg-black flex items-center justify-center border-none" : "h-[500px] md:h-[600px] w-full"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={plan.image}
                alt={plan.title}
                fill
                className={`object-contain transition-transform duration-700 ${
                  isZoomed ? "scale-100 p-4" : "scale-100 hover:scale-105 p-8"
                }`}
              />
              {!isZoomed && (
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-3 rounded-full text-white hover:bg-black/80 transition-colors">
                  <FiMaximize2 size={20} />
                </div>
              )}
              {isZoomed && (
                <div className="absolute top-4 right-4 text-white p-2 cursor-pointer bg-black/50 rounded-full z-50">
                  Close (Click anywhere)
                </div>
              )}
            </motion.div>
          </div>

          {/* RIGHT: Details */}
          <div className="lg:col-span-5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold mb-4">{plan.title}</h1>
              
              <div className="flex justify-between items-end mb-8 pb-8 border-b border-border">
                <div>
                  <p className="text-muted text-sm tracking-widest uppercase mb-1">Total Area</p>
                  <p className="text-2xl font-light">{plan.area}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-medium">{plan.price}</p>
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-card p-4 border border-border rounded-xl">
                  <p className="text-muted-foreground text-xs tracking-widest uppercase mb-1">Bedrooms</p>
                  <p className="text-2xl font-bold">{plan.specs.beds}</p>
                </div>
                <div className="bg-card p-4 border border-border rounded-xl">
                  <p className="text-muted-foreground text-xs tracking-widest uppercase mb-1">Bathrooms</p>
                  <p className="text-2xl font-bold">{plan.specs.baths}</p>
                </div>
                <div className="bg-card p-4 border border-border rounded-xl">
                  <p className="text-muted-foreground text-xs tracking-widest uppercase mb-1">Kitchens</p>
                  <p className="text-2xl font-bold">{plan.specs.kitchens}</p>
                </div>
                <div className="bg-card p-4 border border-border rounded-xl">
                  <p className="text-muted-foreground text-xs tracking-widest uppercase mb-1">Garage</p>
                  <p className="text-2xl font-bold">{plan.specs.garage}</p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">Plan Description</h3>
                <p className="text-muted leading-relaxed text-sm md:text-base">
                  {plan.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-4">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {plan.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-start text-muted text-sm">
                      <FiCheck className="text-accent mt-1 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="mt-auto pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contact"
                  className="flex-1 text-center px-8 py-4 bg-foreground text-background font-medium text-sm tracking-widest uppercase rounded-full hover:opacity-90 transition-all duration-300"
                >
                  Contact About Plan
                </Link>
                <a
                  href="tel:+920000000000"
                  className="flex-1 text-center px-8 py-4 bg-transparent border border-border text-foreground font-medium text-sm tracking-widest uppercase rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiPhone /> Call Now
                </a>
              </div>

            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
