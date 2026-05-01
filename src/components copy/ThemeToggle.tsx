"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

/**
 * An animated theme toggle switch.
 * Renders a pill-shaped track with a sliding circle indicator
 * and Sun/Moon icons that crossfade based on the active theme.
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch — render nothing until client mount.
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-14 h-7" />; // placeholder to prevent layout shift

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="relative flex items-center w-14 h-7 rounded-full p-1 cursor-pointer transition-colors duration-300 border border-border bg-card"
    >
      {/* Sliding indicator */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute w-5 h-5 rounded-full bg-foreground shadow-md"
        style={{ left: isDark ? "calc(100% - 1.5rem)" : "0.25rem" }}
      />

      {/* Icons */}
      <FiSun
        size={12}
        className={`absolute left-1.5 transition-opacity duration-300 ${
          isDark ? "opacity-40 text-muted" : "opacity-100 text-amber-500"
        }`}
      />
      <FiMoon
        size={12}
        className={`absolute right-1.5 transition-opacity duration-300 ${
          isDark ? "opacity-100 text-blue-400" : "opacity-40 text-muted"
        }`}
      />
    </button>
  );
}
