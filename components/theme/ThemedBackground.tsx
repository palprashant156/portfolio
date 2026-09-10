"use client";

import { useTheme } from "./ThemeContext";

/**
 * ThemedBackground — particle / glow effect that reacts to theme
 * Colors use CSS variables (--particle-color, --hero-glow-1/2) set by ThemeContext
 * Transitions 700ms ease so decorative elements animate with page theme switch
 */
export default function ThemedBackground() {
  const { theme } = useTheme();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "var(--bg-gradient)", transition: "background 700ms ease" }}
    >
      {/* Gradient base already via var(--bg-gradient) */}

      {/* Blurred glow orbs — match hero glows but global, transition with theme */}
      <div
        className="absolute left-1/2 top-[-10%] h-[600px] w-[900px] -translate-x-1/2 rounded-full blur-[120px] opacity-60"
        style={{ background: "var(--hero-glow-1)", transition: "background 700ms ease" }}
      />
      <div
        className="absolute left-1/2 top-[10%] h-[400px] w-[700px] -translate-x-1/2 rounded-full blur-[100px] opacity-30"
        style={{ background: "var(--hero-glow-2)", transition: "background 700ms ease" }}
      />

      {/* Particle field — 24 floating dots, color via --particle-color */}
      <div className="absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => {
          // Deterministic pseudo-random based on index for stable hydration
          const left = (i * 37) % 100;
          const top = (i * 57 + 13) % 100;
          const size = 1 + (i % 3) * 0.8;
          const delay = (i * 0.4) % 6;
          const duration = 8 + (i % 4) * 2;
          const opacity = 0.35 + (i % 5) * 0.12;
          return (
            <span
              key={i}
              className="absolute rounded-full animate-[themedFloat_var(--duration)_ease-in-out_infinite]"
              style={
                {
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size * 4}px`,
                  height: `${size * 4}px`,
                  background: "var(--particle-color)",
                  opacity,
                  boxShadow: "0 0 8px var(--particle-color)",
                  transition: "background 700ms ease, box-shadow 700ms ease",
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  // CSS variable for duration not supported directly in inline, use style
                  ["--duration" as any]: `${duration}s`,
                } as React.CSSProperties
              }
            />
          );
        })}
      </div>

      {/* Subtle vignette to tie theme together */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 60%, var(--surface) 100%)`,
          opacity: 0.35,
          transition: "background 700ms ease",
        }}
      />

      <style>{`
        @keyframes themedFloat {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-18px) translateX(6px); }
          50% { transform: translateY(-8px) translateX(-4px); }
          75% { transform: translateY(-22px) translateX(3px); }
        }
      `}</style>
    </div>
  );
}
