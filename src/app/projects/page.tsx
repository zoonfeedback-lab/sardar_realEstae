"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { projectsData } from "@/data/projectsData";

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

export default function ProjectsPage() {
  const categories = Object.values(projectsData);

  return (
    <main className="w-full min-h-screen bg-background pt-24 pb-12">
      {/* HEADER */}
      <section className="py-16 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Property Categories</h1>
          <p className="text-lg text-muted">Explore different types of investment opportunities</p>
        </motion.div>
      </section>

      {/* CATEGORY GRID */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={fadeIn}
              className="group bg-card border border-border hover:border-foreground/20 transition-all duration-500 overflow-hidden rounded-2xl hover:shadow-xl flex flex-col h-full cursor-pointer hover:-translate-y-2"
            >
              <div className="relative h-72 w-full overflow-hidden shrink-0">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{category.title}</h3>
                <p className="text-muted mb-8 flex-grow">
                  {category.description}
                </p>
                <Link
                  href={`/projects/${category.id}`}
                  className="mt-auto inline-flex items-center justify-center w-full px-6 py-4 border border-border text-foreground font-medium text-sm tracking-widest uppercase rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
                >
                  Explore <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
