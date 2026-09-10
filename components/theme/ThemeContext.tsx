"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { themes, Theme, ThemeId, defaultThemeId, getThemeById } from "./themeConfig";

interface ThemeContextType {
  theme: Theme;
  themeId: ThemeId;
  setTheme: (id: ThemeId) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

function applyThemeVariables(theme: Theme) {
  const root = document.documentElement;
  // Core spec variables (required)
  root.style.setProperty("--bg-gradient", theme.gradient);
  root.style.setProperty("--bg-stops", theme.background.join(", "));
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-hover", theme.accentHover);
  root.style.setProperty("--text-primary", theme.textColor);
  root.style.setProperty("--text-secondary", theme.textSecondary);
  root.style.setProperty("--text-muted", theme.textMuted);
  // Light / dark aware text (for alternating sections)
  root.style.setProperty("--text-on-dark", theme.textOnDark);
  root.style.setProperty("--text-on-light", theme.textOnLight);
  root.style.setProperty("--text-secondary-on-dark", theme.textSecondaryOnDark);
  root.style.setProperty("--text-secondary-on-light", theme.textSecondaryOnLight);
  root.style.setProperty("--text-muted-on-dark", theme.textMutedOnDark);
  root.style.setProperty("--text-muted-on-light", theme.textMutedOnLight);
  // Extended surfaces for full page transition
  root.style.setProperty("--surface", theme.surface);
  root.style.setProperty("--surface-dark", theme.surfaceDark);
  root.style.setProperty("--surface-light", theme.surfaceLight);
  root.style.setProperty("--surface-light-container", theme.surfaceLightContainer);
  root.style.setProperty("--surface-container", theme.surfaceContainer);
  root.style.setProperty("--surface-container-high", theme.surfaceContainerHigh);
  root.style.setProperty("--border-color", theme.border);
  root.style.setProperty("--border-light", theme.borderLight);
  root.style.setProperty("--particle-color", theme.particle);
  root.style.setProperty("--hero-glow-1", theme.heroGlow1);
  root.style.setProperty("--hero-glow-2", theme.heroGlow2);
  // Legacy Tailwind mapped vars (so existing bg-* classes transition via CSS vars)
  root.style.setProperty("--tw-bg-background", theme.surface);
  root.style.setProperty("--tw-canvas-dark", theme.surfaceDark);
  root.style.setProperty("--tw-canvas-pure-black", theme.surfaceDark);
  root.style.setProperty("--tw-canvas-card-dark", theme.surface);
  root.style.setProperty("--tw-surface-container", theme.surfaceContainer);
  root.style.setProperty("--tw-on-surface", theme.textOnDark);
  // data attribute for CSS hooks
  root.setAttribute("data-theme", theme.id);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeId] = useState<ThemeId>(defaultThemeId);
  const [mounted, setMounted] = useState(false);

  // Load persisted theme
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as ThemeId | null;
    const initial = saved && themes.some((t) => t.id === saved) ? saved : defaultThemeId;
    setThemeId(initial);
    setMounted(true);
  }, []);

  const theme = getThemeById(themeId);

  // Apply CSS variables whenever theme changes
  useEffect(() => {
    if (!mounted) return;
    applyThemeVariables(theme);
    localStorage.setItem("portfolio-theme", themeId);
  }, [theme, themeId, mounted]);

  // Also apply on mount before hydration flash — ensure variables exist even before JS
  useEffect(() => {
    applyThemeVariables(theme);
  }, [theme]);

  const setTheme = useCallback((id: ThemeId) => {
    setThemeId(id);
  }, []);

  // Prevent flash of default before persisted loads — still render but with opacity 0 until mounted? Not needed, we apply immediately.
  return (
    <ThemeContext.Provider value={{ theme, themeId, setTheme, themes }}>
      {/* Inject initial theme style to avoid FOUC before JS loads */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(() => { try { const s = localStorage.getItem('portfolio-theme'); const v = s || '${defaultThemeId}'; document.documentElement.setAttribute('data-theme', v); } catch {} })()`,
        }}
      />
      {children}
    </ThemeContext.Provider>
  );
}
