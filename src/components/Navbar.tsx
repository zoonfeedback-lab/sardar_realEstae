"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  return (
    <>
      {/* ── Navbar Bar ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md py-4 border-b border-border shadow-lg"
            : "bg-gradient-to-b from-black/50 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/SRD-ESTATE_logo.png"
              alt="Sardar Estate"
              width={160}
              height={160}
              className={`h-10 md:h-12 w-auto transition-all duration-300 ${
                mounted && isScrolled && resolvedTheme === "light" ? "brightness-0 invert-0" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Links (Centered) */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                  isScrolled
                    ? "text-muted hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop: Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
          </div>

          {/* Mobile: Hamburger Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-foreground hover:bg-foreground/10"
                : "text-white hover:bg-white/15"
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile Menu (Portal — renders at body root, escaping nav stacking context) ── */}
      {mounted &&
        createPortal(<MobileMenu isOpen={mobileMenuOpen} onClose={closeMenu} />, document.body)}
    </>
  );
}

/* ═══════════════════════════════════════════════════
   Mobile Menu — separate component for cleanliness
   ═══════════════════════════════════════════════════ */
function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { resolvedTheme } = useTheme();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] md:hidden"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Slide-in Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-background shadow-2xl flex flex-col overflow-hidden"
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-6 h-[72px] border-b border-border shrink-0">
              <Image
                src="/SRD-ESTATE_logo.png"
                alt="Sardar Estate"
                width={120}
                height={120}
                className={`h-12 w-auto transition-all ${
                  resolvedTheme === "light" ? "brightness-0 invert-0" : "brightness-0 invert"
                }`}
              />
              <button
                onClick={onClose}
                className="p-2 -mr-2 text-foreground rounded-xl hover:bg-foreground/10 transition-colors"
                aria-label="Close menu"
              >
                <FiX size={22} />
              </button>
            </div>

            {/* ── Navigation Links ── */}
            <div className="flex-1 flex flex-col px-4 py-6 space-y-1 overflow-y-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + index * 0.06, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="group flex items-center justify-between text-[17px] font-medium text-foreground py-4 px-4 rounded-xl hover:bg-foreground/5 active:bg-foreground/10 transition-all duration-200 tracking-wide"
                  >
                    {link.name}
                    <FiArrowRight
                      size={16}
                      className="text-muted opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* ── Footer: Theme Toggle ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="px-6 py-5 border-t border-border shrink-0"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted font-medium uppercase tracking-widest">
                  Theme
                </span>
                <ThemeToggle />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
