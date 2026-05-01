"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams, notFound } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
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

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params?.category as string;

  const category = projectsData[categoryId];

  if (!category) {
    notFound();
  }

  return (
    <main className="w-full min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center text-muted hover:text-foreground mb-8 transition-colors text-sm tracking-widest uppercase"
        >
          <FiArrowLeft className="mr-2" />
          Back to Categories
        </Link>
      </div>

      {/* HEADER */}
      <section className="py-8 px-6 md:px-12 text-center max-w-4xl mx-auto mb-12">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{category.title}</h1>
          <p className="text-lg text-muted">Choose your perfect apartment size</p>
        </motion.div>
      </section>

      {/* UNITS GRID */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {category.units.map((unit) => (
            <motion.div
              key={unit.id}
              variants={fadeIn}
              className="group bg-card border border-border hover:border-foreground/20 transition-all duration-500 overflow-hidden rounded-2xl hover:shadow-xl flex flex-col h-full hover:-translate-y-2"
            >
              <div className="relative h-64 w-full overflow-hidden shrink-0">
                <Image
                  src={unit.gallery[0]}
                  alt={unit.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow border-t border-border">
                <h3 className="text-xl font-bold mb-3">{unit.title}</h3>
                <p className="text-muted mb-8 flex-grow text-sm leading-relaxed">
                  {unit.subtext}
                </p>
                <Link
                  href={`/projects/${category.id}/${unit.id}`}
                  className="mt-auto inline-flex items-center justify-center w-full px-6 py-4 border border-border text-foreground font-medium text-sm tracking-widest uppercase rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}
