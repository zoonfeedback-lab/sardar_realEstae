"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FiCheckCircle, FiShield, FiUsers, FiAward, FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import FloorPlansSection from "@/components/FloorPlansSection";
import ParallaxSection from "@/components/ParallaxSection";
import GallerySection from "@/components/GallerySection";

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

export default function Home() {
  return (
    <main className="w-full">
      {/* 1. HERO SECTION — always dark for cinematic impact */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900 via-black to-black opacity-80" />
        <div 
          className="absolute inset-0 z-[-1] bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center"
          style={{ filter: "brightness(0.4)" }}
        />

        <div className="z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
          >
            Find Your Dream Property With Confidence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl"
          >
            Premium plots, secure investments, and trusted real estate services by Sardar Estate
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-12"
          >
            <Link
              href="#projects"
              className="px-8 py-4 bg-white text-black font-medium text-sm tracking-widest uppercase rounded-full hover:bg-gray-200 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              Explore Projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-4 bg-transparent border border-white/30 text-white font-medium text-sm tracking-widest uppercase rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-sm text-gray-400 tracking-widest uppercase"
          >
            Trusted by 100+ satisfied clients
          </motion.p>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Sardar Estate</h2>
            <p className="text-muted text-lg mb-8 leading-relaxed">
              Sardar Estate is a trusted real estate platform dedicated to helping clients find premium residential and commercial properties. We focus on transparency, reliability, and long-term investment value.
            </p>
            <ul className="space-y-4">
              {[
                "Verified property listings",
                "Transparent documentation process",
                "Expert market guidance",
                "Client-focused approach",
              ].map((item, i) => (
                <li key={i} className="flex items-center text-muted">
                  <FiCheckCircle className="text-foreground mr-3 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
            }}
            className="relative h-[500px] w-full"
          >
            <div className="absolute inset-0 bg-card rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern Office Building"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. PROPERTY CATEGORIES SECTION */}
      <section id="projects" className="py-24 px-6 md:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore Property Types</h2>
            <p className="text-muted text-lg">Discover our premium investment opportunities tailored to your needs</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                id: "high-rise",
                name: "High Rise Apartments",
                desc: "Modern vertical living with premium amenities and breathtaking views.",
                img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                id: "hotel-apartments",
                name: "Hotel Apartments",
                desc: "Fully serviced suites offering world-class hospitality and passive income.",
                img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                id: "farm-houses",
                name: "Farm Houses",
                desc: "Expansive green estates for weekend retreats and sustainable living.",
                img: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((category, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                className="group bg-background border border-border hover:border-foreground/20 transition-all duration-500 overflow-hidden rounded-2xl hover:shadow-xl flex flex-col h-full cursor-pointer hover:-translate-y-2"
              >
                <div className="relative h-72 w-full overflow-hidden shrink-0">
                  <Image
                    src={category.img}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-accent transition-colors">{category.name}</h3>
                  <p className="text-muted mb-8 flex-grow">
                    {category.desc}
                  </p>
                  <Link
                    href={`/projects/${category.id}`}
                    className="mt-auto inline-block w-full text-center px-6 py-4 border border-border text-foreground font-medium text-sm tracking-widest uppercase rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
                  >
                    Explore Category
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-foreground hover:text-muted font-medium text-sm tracking-widest uppercase transition-colors group"
            >
              Explore All Projects 
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. FLOOR PLANS SECTION */}
      <FloorPlansSection />

      {/* 5. PARALLAX SECTION */}
      <ParallaxSection />

      {/* 6. GALLERY SECTION */}
      <GallerySection />

      {/* 7. WHY CHOOSE US SECTION */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Sardar Estate</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: FiShield,
              title: "Verified Properties",
              desc: "Every listing is carefully verified for authenticity and legal clarity",
            },
            {
              icon: FiAward,
              title: "Secure Investment",
              desc: "We help you invest in high-value and safe opportunities",
            },
            {
              icon: FiUsers,
              title: "Professional Team",
              desc: "Experienced agents with deep market knowledge",
            },
            {
              icon: FiCheckCircle,
              title: "Client Satisfaction",
              desc: "Our priority is long-term trust, not short-term deals",
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="p-8 bg-card border border-border hover:border-foreground/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center flex flex-col items-center rounded-xl"
            >
              <feature.icon className="text-4xl text-foreground mb-6 font-light" />
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 8. CALL TO ACTION SECTION */}
      <section className="py-24 px-6 md:px-12 bg-card border-y border-border text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Invest in Your Future?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-muted text-lg mb-10"
          >
            Contact us today and let our experts guide you to the best opportunities
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              href="#contact"
              className="px-8 py-4 bg-foreground text-background font-medium text-sm tracking-widest uppercase rounded-full hover:opacity-90 transition-all duration-300"
            >
              Contact Us
            </Link>
            <a
              href="tel:+920000000000"
              className="px-8 py-4 bg-transparent border border-border text-foreground font-medium text-sm tracking-widest uppercase rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
            >
              Call Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* 9. CONTACT PREVIEW SECTION */}
      <section id="contact" className="py-24 px-6 md:px-12 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center p-8 bg-card border border-border rounded-xl">
            <FiPhone className="text-3xl mb-4" />
            <h4 className="text-lg font-bold mb-2">Phone</h4>
            <p className="text-muted">+92 XXX XXX XXXX</p>
          </div>
          <div className="flex flex-col items-center p-8 bg-card border border-border rounded-xl">
            <FiMail className="text-3xl mb-4" />
            <h4 className="text-lg font-bold mb-2">Email</h4>
            <p className="text-muted">info@sardarestate.com</p>
          </div>
          <div className="flex flex-col items-center p-8 bg-card border border-border rounded-xl">
            <FiMapPin className="text-3xl mb-4" />
            <h4 className="text-lg font-bold mb-2">Location</h4>
            <p className="text-muted text-center">Abbottabad, Pakistan</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-foreground text-background font-medium text-sm tracking-widest uppercase rounded-full hover:opacity-90 transition-all duration-300"
          >
            Go to Contact Page
          </Link>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-card border-t border-border py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4">Sardar Estate</h3>
            <p className="text-muted max-w-sm">
              Trusted real estate solutions for modern investments
            </p>
          </div>
          
          <div className="flex flex-col space-y-3 md:items-center">
            <Link href="/" className="text-muted hover:text-foreground transition-colors">Home</Link>
            <Link href="/projects" className="text-muted hover:text-foreground transition-colors">Projects</Link>
            <Link href="/contact" className="text-muted hover:text-foreground transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col space-y-3 md:items-end">
            <a href="tel:+920000000000" className="text-muted hover:text-foreground transition-colors">+92 XXX XXX XXXX</a>
            <a href="mailto:info@sardarestate.com" className="text-muted hover:text-foreground transition-colors">info@sardarestate.com</a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sardar Estate. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
