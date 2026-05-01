"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md py-4 border-b border-border shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-heading font-bold tracking-tight text-foreground z-[60]"
        >
          Sardar Estate
        </Link>

        {/* Desktop Links (Centered) */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors uppercase tracking-wider"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop: Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
        </div>

        {/* Mobile: Hamburger Button Only */}
        <button
          className="md:hidden z-[60] p-2 text-foreground rounded-lg hover:bg-foreground/10 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[55] md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel — slides in from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute top-0 right-0 w-[80%] max-w-sm h-full bg-background border-l border-border shadow-2xl flex flex-col"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-border">
                <span className="text-lg font-heading font-bold text-foreground">
                  Menu
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-foreground rounded-lg hover:bg-foreground/10 transition-colors"
                  aria-label="Close menu"
                >
                  <FiX size={22} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 flex flex-col px-6 py-8 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-lg font-medium text-foreground hover:text-accent py-4 px-4 rounded-xl hover:bg-foreground/5 transition-all duration-200 tracking-wide"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Theme Toggle — inside menu at the bottom */}
              <div className="px-6 py-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted font-medium uppercase tracking-wider">
                    Theme
                  </span>
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
