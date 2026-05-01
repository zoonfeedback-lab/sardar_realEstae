"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import FloorPlanCard, { FloorPlanProps } from "@/components/FloorPlanCard";

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

const allPlans: FloorPlanProps[] = [
  {
    id: "5-marla-modern",
    title: "5 Marla House Plan",
    specs: { beds: 3, baths: 4, kitchens: 1 },
    area: "1125 sq ft",
    price: "Starting from PKR 1.5 Crore",
    shortDesc: "Efficient layout designed for modern family living with optimal space utilization.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "10-marla-luxury",
    title: "10 Marla Luxury Plan",
    specs: { beds: 5, baths: 6, kitchens: 2 },
    area: "2250 sq ft",
    price: "Starting from PKR 2.8 Crore",
    shortDesc: "Spacious luxury design featuring double-height lobby and large windows.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "1-kanal-premium",
    title: "1 Kanal Premium Plan",
    specs: { beds: 6, baths: 7, kitchens: 2 },
    area: "4500 sq ft",
    price: "Starting from PKR 5.5 Crore",
    shortDesc: "The ultimate premium lifestyle layout with expansive lawns and servant quarters.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "2-kanal-mansion",
    title: "2 Kanal Mansion Plan",
    specs: { beds: 8, baths: 9, kitchens: 3 },
    area: "9000 sq ft",
    price: "Starting from PKR 12 Crore",
    shortDesc: "A palatial layout designed for maximum luxury, featuring indoor pools and home theaters.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "3-marla-compact",
    title: "3 Marla Compact Plan",
    specs: { beds: 2, baths: 2, kitchens: 1 },
    area: "675 sq ft",
    price: "Starting from PKR 80 Lacs",
    shortDesc: "Perfect for small families or young professionals, focusing on vertical living.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "commercial-plaza",
    title: "Commercial Plaza Layout",
    specs: { beds: 0, baths: 4, kitchens: 0 },
    area: "5000 sq ft",
    price: "Starting from PKR 15 Crore",
    shortDesc: "Open floor plan optimized for retail spaces and corporate offices.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  }
];

export default function FloorPlansPage() {
  return (
    <main className="w-full min-h-screen bg-background pt-24 pb-12">
      {/* HEADER */}
      <section className="py-16 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Floor Plans</h1>
          <p className="text-lg text-muted">Choose layouts that match your lifestyle</p>
        </motion.div>
      </section>

      {/* FLOOR PLAN GRID */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allPlans.map((plan) => (
            <motion.div key={plan.id} variants={fadeIn} className="h-full">
              <FloorPlanCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-12 px-6 border-t border-border text-center">
        <Link
          href="/"
          className="inline-flex items-center text-foreground hover:text-muted font-medium text-sm tracking-widest uppercase transition-colors group"
        >
          <FiArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </section>
    </main>
  );
}
