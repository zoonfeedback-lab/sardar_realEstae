"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiPhone, FiCheck, FiMaximize2 } from "react-icons/fi";
import { projectsData } from "@/data/projectsData";

export default function UnitDetailsPage() {
  const params = useParams();
  const categoryId = params?.category as string;
  const unitId = params?.unit as string;
  const [isZoomed, setIsZoomed] = useState(false);

  const category = projectsData[categoryId];
  if (!category) return notFound();

  const unit = category.units.find(u => u.id === unitId);
  if (!unit) return notFound();

  return (
    <main className="w-full min-h-screen bg-background pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Back Link */}
        <Link
          href={`/projects/${category.id}`}
          className="inline-flex items-center text-muted hover:text-foreground mb-8 transition-colors text-sm tracking-widest uppercase"
        >
          <FiArrowLeft className="mr-2" />
          Back to {category.title}
        </Link>

        {/* 1. HEADER */}
        <div className="mb-12 border-b border-border pb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {unit.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted"
          >
            {unit.subtext}
          </motion.p>
        </div>

        {/* 2. IMAGE GALLERY */}
        <div className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {unit.gallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="relative h-[300px] md:h-[450px] w-full rounded-2xl overflow-hidden border border-border"
            >
              <Image src={img} alt={`Gallery Image ${idx + 1}`} fill className="object-cover" />
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: Floor Plan & Features */}
          <div className="lg:col-span-7">
            {/* 3. FLOOR PLAN */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Floor Plan</h3>
              <motion.div
                className={`relative bg-card border border-border rounded-2xl overflow-hidden cursor-zoom-in transition-all duration-500 ${
                  isZoomed ? "fixed inset-4 z-50 bg-black flex items-center justify-center border-none" : "h-[400px] w-full"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <Image
                  src={unit.floorPlanImage}
                  alt="Floor Plan"
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
                    Close
                  </div>
                )}
              </motion.div>
            </div>

            {/* DESCRIPTION */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Description</h3>
              <p className="text-muted leading-relaxed">{unit.description}</p>
            </div>

            {/* 6. FEATURES */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Features & Amenities</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {unit.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-muted">
                    <FiCheck className="text-accent mt-1 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Details, Payment Plan, CTA */}
          <div className="lg:col-span-5">
            {/* 4. DETAILS GRID */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              <div className="bg-card p-6 border border-border rounded-xl">
                <p className="text-muted-foreground text-xs tracking-widest uppercase mb-2">Bedrooms</p>
                <p className="text-2xl font-bold">{unit.specs.bedrooms}</p>
              </div>
              <div className="bg-card p-6 border border-border rounded-xl">
                <p className="text-muted-foreground text-xs tracking-widest uppercase mb-2">Bathrooms</p>
                <p className="text-2xl font-bold">{unit.specs.bathrooms}</p>
              </div>
              <div className="bg-card p-6 border border-border rounded-xl">
                <p className="text-muted-foreground text-xs tracking-widest uppercase mb-2">Kitchens</p>
                <p className="text-2xl font-bold">{unit.specs.kitchens}</p>
              </div>
              <div className="bg-card p-6 border border-border rounded-xl">
                <p className="text-muted-foreground text-xs tracking-widest uppercase mb-2">Total Area</p>
                <p className="text-xl font-bold">{unit.specs.area}</p>
              </div>
            </div>

            {/* 5. PAYMENT PLAN (CRITICAL UI) */}
            <div className="bg-card border border-border rounded-2xl p-8 mb-12 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 border-b border-border pb-4">Payment Plan</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted">Total Price</span>
                  <span className="text-xl font-bold">{unit.paymentPlan.totalPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Down Payment</span>
                  <span className="text-lg font-medium">{unit.paymentPlan.downPayment}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted">Monthly Installment</span>
                  <span className="text-lg font-medium text-accent">{unit.paymentPlan.monthlyInstallment}</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="text-muted">Duration</span>
                  <span className="font-medium bg-card-foreground/10 px-3 py-1 rounded-full">{unit.paymentPlan.duration}</span>
                </div>
              </div>
            </div>

            {/* 7. CTA */}
            <div className="flex flex-col gap-4 sticky top-32">
              <Link
                href="/#contact"
                className="w-full text-center px-8 py-5 bg-foreground text-background font-bold text-sm tracking-widest uppercase rounded-full hover:opacity-90 transition-all duration-300"
              >
                Contact Now
              </Link>
              <a
                href="tel:+920000000000"
                className="w-full text-center px-8 py-5 bg-transparent border border-border text-foreground font-bold text-sm tracking-widest uppercase rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiPhone /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
