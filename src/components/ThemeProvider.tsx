"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Wraps the application with next-themes provider.
 * - `attribute="class"` applies a `.dark` class on <html> for Tailwind dark mode.
 * - `defaultTheme="light"` ensures first-load is the light (white) theme.
 * - `enableSystem={false}` ignores OS preference, giving the user full control.
 */
export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  );
}
