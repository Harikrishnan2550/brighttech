"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Sun, Battery, Zap } from "lucide-react";

export default function EnergyFlowHUD() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const { scrollYProgress } = useScroll();

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 26,
    restDelta: 0.001
  });

  // Map progress to the y-coordinate inside the HUD track (0 to 100px)
  const dotY = useTransform(smoothProgress, [0, 1], [0, 100]);

  useEffect(() => {
    setIsDarkTheme(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDarkTheme(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 pointer-events-none hidden md:block">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-14 h-72 rounded-full border premium-glass flex flex-col items-center justify-between py-6 px-2 shadow-2xl relative"
      >
        {/* Background reflection overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

        {/* 1. Generator Node (Solar/Sun) */}
        <div className="flex flex-col items-center space-y-1 z-10">
          <div className="w-8 h-8 rounded-full bg-[#E30613]/10 dark:bg-white/10 flex items-center justify-center border border-[#E30613]/25 dark:border-brand-red/20 shadow-sm">
            <Sun size={15} className="text-[#E30613] dark:text-[#FF3B30] animate-pulse" />
          </div>
          <span className="text-[7px] font-heading font-extrabold tracking-widest text-[#B5050C] dark:text-[#E30613] uppercase">GEN</span>
        </div>

        {/* 2. Vertical energy flow track */}
        <div className="relative w-3 h-[116px] bg-black/5 dark:bg-white/5 rounded-full border border-black/[0.03] dark:border-white/5 flex justify-center py-1">
          {/* Tracking Conduit wire */}
          <div className="absolute inset-y-1 w-0.5 bg-gray-200 dark:bg-white/10 rounded-full" />
          
          {/* Glowing flow track */}
          <motion.div 
            style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
            className="absolute top-1 w-0.5 bg-gradient-to-b from-[#E30613] to-[#B5050C] dark:from-[#FF3B30] dark:to-[#910208] rounded-full opacity-80"
          />

          {/* SVG Container for the moving plasma orb */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 12 116">
            <defs>
              <filter id="hud-neon-glow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Scrolling Plasma Orb */}
            <motion.circle
              cx="6"
              cy={useTransform(smoothProgress, [0, 1], [6, 110])}
              r="4.5"
              fill={isDarkTheme ? "#FF3B30" : "#E30613"}
              filter="url(#hud-neon-glow)"
              className="opacity-90"
            />
            <motion.circle
              cx="6"
              cy={useTransform(smoothProgress, [0, 1], [6, 110])}
              r="1.5"
              fill="#ffffff"
            />
          </svg>
        </div>

        {/* 3. Terminus Storage Node (Battery) */}
        <div className="flex flex-col items-center space-y-1 z-10">
          <span className="text-[7px] font-heading font-extrabold tracking-widest text-gray-400 dark:text-white/40 uppercase">STOR</span>
          <motion.div 
            animate={smoothProgress.get() > 0.95 ? {
              boxShadow: isDarkTheme ? "0 0 12px rgba(227, 6, 19,0.6)" : "0 0 12px rgba(227, 6, 19,0.6)",
              borderColor: isDarkTheme ? "#FF3B30" : "#E30613"
            } : {}}
            className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/10 transition-all duration-300"
          >
            <Battery size={15} className={smoothProgress.get() > 0.95 ? (isDarkTheme ? "text-[#FF3B30] animate-pulse" : "text-[#E30613] animate-pulse") : "text-gray-400 dark:text-white/40"} />
          </motion.div>
        </div>

        {/* 4. Live Telemetry floating indicator */}
        <div className="absolute -left-16 top-1/2 -translate-y-1/2 premium-glass border border-white/20 py-1.5 px-2.5 rounded-xl shadow-lg z-20 pointer-events-auto flex items-center gap-1.5 min-w-[56px] text-center justify-center">
          <Zap size={10} className="text-[#E30613] dark:text-[#FF3B30] animate-pulse shrink-0" />
          <motion.span className="text-[9px] font-mono font-bold text-[#1A1816] dark:text-white">
            {useTransform(smoothProgress, (val) => `${Math.floor(val * 100)}%`)}
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}
