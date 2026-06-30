"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Sun, Battery, Settings, Zap } from "lucide-react";
import { motion, AnimatePresence, useInView, animate, Variants } from "framer-motion";

const HOTSPOTS = [
  {
    id: "panels",
    label: "PV Solar Matrix",
    icon: <Sun className="w-5 h-5" />,
    percent: 98.6,
    title: "High-Yield Passivated PERC",
    desc: "Tier-1 monocrystalline cells built with specialized low-light alignment properties. Captures optimized atmospheric irradiation to scale baseline conversion output.",
    image: "/images/gallery3.jpg",
    stats: "22.8% Energy Conversion",
    coords: { x: 50, y: 20 }
  },
  {
    id: "inverter",
    label: "Pure Sine Wave Core",
    icon: <Settings className="w-5 h-5" />,
    percent: 99.2,
    title: "Proprietary Routing Inverters",
    desc: "Bespoke engineering ecosystems built under our trusted EDIX and XL PLUS brands. Safely balances current loops between infrastructure, storage, and the KSEB network.",
    image: "/images/gallery2.jpg",
    stats: "Pure Sine Wave Output",
    coords: { x: 50, y: 50 }
  },
  {
    id: "battery",
    label: "LFP Storage Matrix",
    icon: <Battery className="w-5 h-5" />,
    percent: 100,
    title: "Smart Lithium Banks",
    desc: "Extended lifestyle Lithium Iron Phosphate (LiFePO4) storage architecture. Retains day surplus safely to power runtime requirements during high-tariff peak brackets.",
    image: "/images/gallery4.jpg",
    stats: "Modular Lithium Backup",
    coords: { x: 28, y: 78 }
  }
];

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, suffix]);

  return <span ref={ref} className="font-heading font-extrabold text-3xl sm:text-4xl text-[#1A1816] dark:text-white">0{suffix}</span>;
}

export default function AboutPreview() {
  const [activeTab, setActiveTab] = useState("panels");
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const activeSpot = HOTSPOTS.find(spot => spot.id === activeTab) || HOTSPOTS[0];

  useEffect(() => {
    setIsDarkTheme(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDarkTheme(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-32 relative overflow-hidden bg-white dark:bg-transparent border-t border-gray-100 dark:border-brand-red/20 transition-colors duration-500">
      
      {/* Dynamic violet glow in dark mode */}
      {isDarkTheme && (
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full dark-glow-violet blur-[120px] pointer-events-none animate-pulse-slow" />
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        {/* Left Column: Interactive Solar Lab Schematic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: -35 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100, damping: 15 }}
          className="lg:col-span-5 flex flex-col items-center w-full"
        >
          <div className="text-center w-full mb-6">
            <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#B5050C] dark:text-[#E30613] bg-[#B5050C]/10 dark:bg-white/10 px-4 py-2 rounded-full border border-[#B5050C]/15 dark:border-brand-red/10 shadow-sm">
              Interactive System Architecture
            </span>
          </div>

          <div className="relative w-full aspect-square max-w-[420px] rounded-3xl p-8 flex items-center justify-center border premium-glass">
            <svg viewBox="0 0 100 100" className="w-full h-full text-gray-200 dark:text-white/40 stroke-current fill-none stroke-[0.6]">
              <defs>
                <pattern id="blueprintGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.1" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#blueprintGrid)" className="text-gray-100 dark:text-brand-red/[0.03] transition-colors" />

              <polygon points="50,12 88,40 12,40" />
              <line x1="28" y1="26" x2="72" y2="26" strokeDasharray="2 2" />
              <rect x="20" y="40" width="60" height="48" rx="2" />
              <rect x="42" y="46" width="16" height="12" rx="1" />
              <circle cx="50" cy="52" r="3" />
              <rect x="22" y="70" width="12" height="15" rx="1" />
              <line x1="25" y1="74" x2="31" y2="74" />
              <line x1="25" y1="78" x2="31" y2="78" />
              <path d="M50,58 L50,94 L90,94" strokeDasharray="3 3" />

              <motion.path
                d="M50,20 L50,46"
                stroke={isDarkTheme ? "#FF3B30" : "#E30613"}
                strokeWidth="1.2"
                strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
              <motion.path
                d="M42,52 L28,52 L28,70"
                stroke={isDarkTheme ? "#910208" : "#B5050C"}
                strokeWidth="1.2"
                strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              />
            </svg>

            {HOTSPOTS.map((spot) => {
              const isActive = activeTab === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setActiveTab(spot.id)}
                  style={{ left: `${spot.coords.x}%`, top: `${spot.coords.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-20 group"
                  aria-label={`Inspect ${spot.label}`}
                >
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-all border ${
                    isActive 
                      ? "bg-[#E30613] dark:bg-[#FF3B30] text-white scale-110 shadow-lg shadow-[#E30613]/40 dark:shadow-[#FF3B30]/40 border-white dark:border-[#151221]" 
                      : "premium-glass text-gray-500 dark:text-white/60 border-gray-200/50 dark:border-brand-red/10 hover:border-[#E30613] dark:hover:border-[#FF3B30] hover:text-[#E30613] dark:hover:text-[#FF3B30]"
                  }`}>
                    {spot.icon}
                  </div>
                  <span className={`absolute -inset-2 rounded-full border pointer-events-none transition-all ${
                    isActive 
                      ? (isDarkTheme ? "border-[#FF3B30]/40 scale-100 animate-ping" : "border-[#E30613]/40 scale-100 animate-ping") 
                      : "border-transparent scale-0"
                  }`} />
                  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-[#1A1816] dark:bg-white text-white dark:text-[#1A1816] text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1.5 rounded shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 font-sans">
                    {spot.label}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Editorial Information */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 space-y-8 flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <span className="text-xs font-heading font-bold tracking-widest uppercase text-[#B5050C] dark:text-[#E30613] block">
              About Brighttech Solar
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-[#1A1816] dark:text-white leading-tight">
              Pioneering Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5050C] to-[#E30613] italic font-heading font-normal">Energy Ecosystems</span> Across Kerala
            </h2>
            <p className="text-gray-600 dark:text-white/70 font-sans font-light text-base leading-relaxed">
              We design premium high-performance solar architecture where generation, smart invertor conversion, and structural lithium storage operate as a singular unified plant. Select our schematic components to review technical features.
            </p>
          </motion.div>

          {/* Active Hotspot details card */}
          <motion.div variants={itemVariants} className="min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="p-7 rounded-3xl grid sm:grid-cols-12 gap-6 items-center border premium-glass"
              >
                <div className="sm:col-span-8 space-y-3">
                  <div className="flex items-center gap-2 text-[#B5050C] dark:text-[#E30613]">
                    <Zap size={14} className="animate-pulse" />
                    <span className="text-xxs font-heading font-bold uppercase tracking-widest">{activeSpot.label}</span>
                  </div>
                  <h4 className="text-xl font-heading font-extrabold text-[#1A1816] dark:text-white tracking-tight">
                    {activeSpot.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-white/60 font-light leading-relaxed font-sans">
                    {activeSpot.desc}
                  </p>
                  <p className="text-xs font-heading font-bold tracking-wide text-[#B5050C] dark:text-[#E30613] pt-1">
                    {activeSpot.stats}
                  </p>
                </div>

                <div className="sm:col-span-4 relative aspect-square rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-md">
                  <Image
                    src={activeSpot.image}
                    alt={activeSpot.title}
                    fill
                    className="object-cover"
                    sizes="15vw"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Numeric highlight stats strip */}
          <motion.div variants={itemVariants} className="pt-6 grid grid-cols-3 gap-6 border-t border-gray-200 dark:border-white/10">
            <div>
              <Counter value={16} suffix="+" />
              <p className="text-[10px] uppercase font-heading font-bold tracking-widest text-gray-400 dark:text-white/40 mt-1">Years Operations</p>
            </div>
            <div>
              <Counter value={2000} suffix="+" />
              <p className="text-[10px] uppercase font-heading font-bold tracking-widest text-gray-400 dark:text-white/40 mt-1">Kerala Installs</p>
            </div>
            <div>
              <Counter value={45} suffix=" MW" />
              <p className="text-[10px] uppercase font-heading font-bold tracking-widest text-gray-400 dark:text-white/40 mt-1">Clean Yield</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#1A1816] dark:text-white group bg-[#1A1816]/5 dark:bg-white/5 border border-gray-200 dark:border-brand-red/10 hover:border-[#1A1816] dark:hover:border-[#FF3B30] hover:bg-[#1A1816] dark:hover:bg-white hover:text-white dark:hover:text-[#1A1816] px-6 py-3.5 rounded-xl transition-all duration-300"
            >
              Learn More About Us
              <ArrowRight size={14} className="text-[#B5050C] dark:text-[#E30613] group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}