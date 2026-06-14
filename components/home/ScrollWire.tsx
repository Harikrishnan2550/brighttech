"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function ScrollWire() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Smooth scroll progression using a spring transition
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001
  });

  // Map the scroll progress directly to the y-coordinate of the moving plasma orb (0 to 100 within viewBox)
  const orbY = useTransform(smoothProgress, [0, 1], [0, 100]);

  useEffect(() => {
    setIsDarkTheme(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDarkTheme(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute top-[72vh] md:top-[68vh] bottom-[42vh] md:bottom-[42vh] right-8 lg:right-[72px] w-6 md:w-8 z-30 pointer-events-none">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 32 100">
        <defs>
          {/* Scroll progress mask */}
          <mask id="scroll-mask" maskUnits="userSpaceOnUse">
            <motion.line
              x1="16"
              y1="0"
              x2="16"
              y2="100"
              stroke="white"
              strokeWidth="10"
              strokeLinecap="round"
              style={{ pathLength: smoothProgress }}
            />
          </mask>

          {/* Realistic Cylindrical Metal Conduit Pipe Gradient */}
          <linearGradient id="metal-conduit-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4A4A4F" />
            <stop offset="30%" stopColor="#9C9CA3" />
            <stop offset="50%" stopColor="#E2E2E6" />
            <stop offset="70%" stopColor="#8C8C91" />
            <stop offset="100%" stopColor="#3A3A3D" />
          </linearGradient>

          {/* Chrome Metal Mounting Bracket Gradient */}
          <linearGradient id="bracket-metal-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2A2A2D" />
            <stop offset="25%" stopColor="#7A7A7F" />
            <stop offset="50%" stopColor="#D2D2D6" />
            <stop offset="75%" stopColor="#6C6C71" />
            <stop offset="100%" stopColor="#1E1E20" />
          </linearGradient>

          {/* Neon Volumetric Glow Filter */}
          <filter id="neon-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="1.5" result="blur1" />
            <feGaussianBlur stdDeviation="4" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glowing wire core gradient */}
          <linearGradient id="wire-glow-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isDarkTheme ? "#FF3B30" : "#E30613"} />
            <stop offset="50%" stopColor={isDarkTheme ? "#910208" : "#B5050C"} />
            <stop offset="100%" stopColor={isDarkTheme ? "#FF3B30" : "#E30613"} />
          </linearGradient>

          {/* Repeating Mounting Clips Pattern */}
          <pattern id="conduit-mounts" width="32" height="6" patternUnits="userSpaceOnUse">
            {/* Horizontal wall-mount bracket clip */}
            <rect
              x="6"
              y="1"
              width="20"
              height="3"
              rx="1"
              fill="url(#bracket-metal-grad)"
              stroke="#1A1816"
              strokeWidth="0.25"
            />
            {/* Screws on left/right wings */}
            <circle cx="9" cy="2.5" r="0.4" fill="#1A1816" />
            <circle cx="23" cy="2.5" r="0.4" fill="#1A1816" />
          </pattern>
        </defs>

        {/* 1. Structural metal pipe casing (conduit background, always visible) */}
        <line
          x1="16"
          y1="0"
          x2="16"
          y2="100"
          stroke="url(#metal-conduit-grad)"
          strokeWidth="4"
        />

        {/* 2. Top and Bottom Conduit Junction Boxes (Finished starting/ending connectors) */}
        {/* Top fitting cap */}
        <rect
          x="10"
          y="0"
          width="12"
          height="6"
          rx="1.5"
          fill="url(#bracket-metal-grad)"
          stroke="#1A1816"
          strokeWidth="0.5"
        />
        <circle
          cx="16"
          cy="3"
          r="1"
          fill={isDarkTheme ? "#FF3B30" : "#E30613"}
          className="animate-pulse"
        />

        {/* Bottom fitting cap */}
        <rect
          x="10"
          y="94"
          width="12"
          height="6"
          rx="1.5"
          fill="url(#bracket-metal-grad)"
          stroke="#1A1816"
          strokeWidth="0.5"
        />
        <circle
          cx="16"
          cy="97"
          r="1"
          fill={isDarkTheme ? "#FF3B30" : "#E30613"}
          className="animate-pulse"
        />

        {/* 3. Overlaid mounting bracket pattern clips (spaced along the conduit) */}
        <rect
          x="0"
          y="0"
          width="32"
          height="100"
          fill="url(#conduit-mounts)"
          className="opacity-80"
        />

        {/* 4. Volumetric Glowing Energy Core & Current pulses masked by scroll progress */}
        <g mask="url(#scroll-mask)">
          {/* Neon Glowing conduit core (with soft gaussian volumetric glow) */}
          <line
            x1="16"
            y1="0"
            x2="16"
            y2="100"
            stroke="url(#wire-glow-gradient)"
            strokeWidth="2"
            filter="url(#neon-glow)"
            className={isDarkTheme ? "animate-voltage-hum-purple" : "animate-voltage-hum-gold"}
          />

          {/* Primary fast electron pulses (High-velocity bright dots) */}
          <line
            x1="16"
            y1="0"
            x2="16"
            y2="100"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeDasharray="10 35"
            className="animate-wire-flow-fast"
          />

          {/* Secondary slow/background charge pulses (Subtle, medium spacing) */}
          <line
            x1="16"
            y1="0"
            x2="16"
            y2="100"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeLinecap="round"
            strokeDasharray="4 20"
            className="animate-wire-flow-slow opacity-60"
          />
        </g>

        {/* 5. Interactive Glowing Energy Orb (Plasma Ball) that travels with the scroll position */}
        {/* Glowing aura */}
        <motion.circle
          cx="16"
          cy={orbY}
          r="7"
          fill="url(#wire-glow-gradient)"
          filter="url(#neon-glow)"
          className="opacity-90"
        />
        {/* Core spark center */}
        <motion.circle
          cx="16"
          cy={orbY}
          r="2.5"
          fill="#ffffff"
        />
        {/* Orbiting Spark Ring */}
        <motion.g style={{ y: orbY }}>
          <circle
            cx="16"
            cy="0"
            r="11"
            stroke={isDarkTheme ? "#FF3B30" : "#E30613"}
            strokeWidth="0.75"
            strokeDasharray="3 4"
            className="animate-spin-slow origin-[16px_0px]"
          />
          <circle
            cx="16"
            cy="0"
            r="8"
            stroke="#ffffff"
            strokeWidth="0.5"
            strokeDasharray="2 6"
            className="animate-spin-reverse origin-[16px_0px] opacity-80"
          />
        </motion.g>
      </svg>
    </div>
  );
}
