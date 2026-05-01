"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import FloorPlanCard, { FloorPlanProps } from "./FloorPlanCard";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const featuredPlans: FloorPlanProps[] = [
  {
    id: "5-marla-modern",
    title: "5 Marla House Plan",
    specs: { beds: 3, baths: 4, kitchens: 1 },
    shortDesc: "Efficient layout designed for modern family living with optimal space utilization.",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "10-marla-luxury",
    title: "10 Marla Luxury Plan",
    specs: { beds: 5, baths: 6, kitchens: 2 },
    shortDesc: "Spacious luxury design featuring double-height lobby and large windows.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "1-kanal-premium",
    title: "1 Kanal Premium Plan",
    specs: { beds: 6, baths: 7, kitchens: 2 },
    shortDesc: "The ultimate premium lifestyle layout with expansive lawns and servant quarters.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function FloorPlansSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore Floor Plans</h2>
          <p className="text-muted text-lg">Visualize layouts and find the perfect space for your needs</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {featuredPlans.map((plan) => (
            <motion.div key={plan.id} variants={fadeIn} className="h-full">
              <FloorPlanCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="/floor-plans"
            className="inline-flex items-center text-foreground hover:text-muted font-medium text-sm tracking-widest uppercase transition-colors group"
          >
            View All Floor Plans 
            <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
