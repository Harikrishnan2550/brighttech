"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight, MapPin, Sun, Moon,
  Home, LayoutGrid, Phone, Star, Heart, Bookmark, Share2
} from "lucide-react";

const SLIDES = [
  {
    src: "/images/luxury_solar_villa.png",
    alt: "Luxury solar villa estate",
    name: "Luxury Solar Villa",
    location: "Premium Estate, Chennai",
    category: "Residential",
    heading: "Power Your\nPremium Space.",
    sub: "High-efficiency monocrystalline arrays delivering continuous clean power for commercial and premium properties.",
    specs: { panels: "24 Panels", output: "450W", storage: "15 kWh", savings: "₹2.4L/yr" },
    rating: 4.9,
    desc: "This installation seamlessly blends into the estate environment, offering zero-grid independence. The architectural design makes it a perfect luxury addition."
  },
  {
    src: "/images/rooftop_solar.png",
    alt: "Premium rooftop solar array",
    name: "Rooftop Solar Array",
    location: "Skyline Tower, Bangalore",
    category: "Commercial",
    heading: "New Era Of\nClean Energy.",
    sub: "Discover bespoke solar systems designed for luxury estates — where clean energy meets architectural elegance.",
    specs: { panels: "48 Panels", output: "415W", storage: "30 kWh", savings: "₹5.1L/yr" },
    rating: 4.8,
    desc: "A state-of-the-art commercial installation maximising roof space, providing full energy independence with intelligent monitoring."
  },
  {
    src: "/images/smart_battery_vault.png",
    alt: "Smart battery storage vault",
    name: "Smart Energy Vault",
    location: "Green District, Hyderabad",
    category: "Storage",
    heading: "Store the Sun,\nOn Your Terms.",
    sub: "Decentralised smart battery systems that ensure your estate stays fully powered around the clock.",
    specs: { panels: "—", output: "20 kW", storage: "48 kWh", savings: "₹3.2L/yr" },
    rating: 4.9,
    desc: "Our flagship battery vault delivers 48 hours of backup power with AI-powered load balancing, built for premium estates."
  }
];

const LEFT_SIDEBAR = [
  { icon: Sun,        label: "Light Mode",  action: "light" },
  { icon: Moon,       label: "Dark Mode",   action: "dark" },
  { icon: Home,       label: "Home",        href: "/" },
  { icon: LayoutGrid, label: "Services",    href: "/services" },
  { icon: Phone,      label: "Contact",     href: "/contact" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const check = () => setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const setTheme = (theme: "light" | "dark") => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
    localStorage.setItem("theme", theme);
  };

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setProgress(0);
    let tick = 0;
    timerRef.current = setInterval(() => {
      tick++;
      setProgress(tick / 50);
      if (tick >= 50) {
        setActive(p => (p + 1) % SLIDES.length);
        tick = 0; setProgress(0);
      }
    }, 100);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const goTo = (i: number) => { if (i !== active) setActive(i); };

  const slide = SLIDES[active];

  // Glassmorphism classes based on theme
  const glassStrong = isDark
    ? "bg-[#111827]/80 backdrop-blur-xl border-white/10"
    : "bg-white/90 backdrop-blur-xl border-white/70";

  return (
    <section className="relative w-full h-screen min-h-[680px] overflow-hidden" aria-label="Hero">

      {/* ── Full-screen background slideshow ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div key={active + "-bg"} className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <Image src={slide.src} alt={slide.alt} fill priority className="object-cover" sizes="100vw" />
          </motion.div>
        </AnimatePresence>
        {/* Subtle vignette */}
        <div className={`absolute inset-0 transition-colors duration-700 ${isDark ? "bg-black/40" : "bg-black/20"}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* ════════ LEFT ICON SIDEBAR ════════ */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3 hidden lg:flex"
      >
        {LEFT_SIDEBAR.map(({ icon: Icon, label, action, href }, i) => {
          const isTheme = action === "light" || action === "dark";
          const isActiveTheme = (action === "dark" && isDark) || (action === "light" && !isDark);

          if (isTheme) {
            return (
              <button
                key={label}
                aria-label={label}
                onClick={() => setTheme(action as "light" | "dark")}
                className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-xl border transition-all hover:scale-110 shadow-lg ${
                  isActiveTheme
                    ? "bg-[#E30613] border-[#E30613] text-white"
                    : isDark ? "bg-black/50 border-white/10 text-white/60 hover:text-white" : "bg-white/70 border-white/60 text-[#1a1a2e]/60 hover:text-[#1a1a2e]"
                }`}
              >
                <Icon size={15} />
              </button>
            );
          }

          return (
            <Link
              key={label}
              href={href as string}
              aria-label={label}
              className={`w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-xl border transition-all hover:scale-110 shadow-lg ${
                isDark ? "bg-black/50 border-white/10 text-white/60 hover:text-white" : "bg-white/70 border-white/60 text-[#1a1a2e]/60 hover:text-[#1a1a2e]"
              }`}
            >
              <Icon size={15} />
            </Link>
          );
        })}

        {/* Vertical progress dots */}
        <div className="flex flex-col items-center gap-2 mt-4">
          {SLIDES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${active === i ? "w-1.5 h-6 bg-[#E30613]" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"}`}
            />
          ))}
        </div>
      </motion.div>

      {/* ════════ MAIN HEADING ════════ */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center pb-32 px-6 md:px-24 lg:px-[120px] max-w-5xl pointer-events-none">
        <AnimatePresence mode="wait">
          {/* Tightly grouped heading lines */}
          <motion.div key={active + "-heading"} className="flex flex-col pt-4">
            {slide.heading.split("\n").map((line, i) => (
              <div 
                key={i} 
                // Negative top margin physically pulls the bottom line into the top line
                className={`overflow-hidden py-1.5 ${i > 0 ? "-mt-2 md:-mt-4" : ""}`}
              >
                <motion.h1
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.65, delay: i * 0.1, ease: EASE }}
                  // leading-[0.85] aggressively crushes the line height
                  className="font-heading font-extrabold text-white leading-[0.85] tracking-tighter drop-shadow-2xl"
                  style={{ fontSize: "clamp(3rem, 7.5vw, 6.5rem)" }}
                >
                  {line}
                </motion.h1>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={active + "-sub"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="text-white/90 text-sm md:text-base leading-relaxed max-w-xl mt-4 drop-shadow-lg font-medium"
          >
            {slide.sub}
          </motion.p>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 mt-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E30613] animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.2em] text-white/90 uppercase font-bold drop-shadow-md">
            {slide.location}
          </span>
        </motion.div>
      </div>

      {/* ════════ STAT CARD (Centered Mobile, Left-Aligned Desktop) ════════ */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
        // Centers on mobile (left-0 right-0 mx-auto), Aligns left on md/lg to match text (md:mx-0 md:left-24 lg:left-[120px])
        className={`absolute bottom-6 md:bottom-10 left-0 right-0 mx-auto md:mx-0 md:right-auto md:left-24 lg:left-[120px] z-30 border rounded-[2rem] p-5 shadow-2xl w-[90%] max-w-[320px] ${glassStrong}`}
      >
        <p className={`text-[11px] font-heading font-bold uppercase tracking-wide mb-1.5 ${isDark ? "text-white" : "text-[#1a1a2e]"}`}>
          Find Your Solar Solution
        </p>
        <p className={`text-[10px] leading-relaxed mb-4 ${isDark ? "text-white/60" : "text-gray-500"}`}>
          Our team connects you with premium solar installations in the most sought-after locations.
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className={`text-2.5xl font-heading font-extrabold leading-none ${isDark ? "text-white" : "text-[#1a1a2e]"}`}>500+</p>
            <p className={`text-[9px] font-mono tracking-widest uppercase mt-1 ${isDark ? "text-white/50" : "text-gray-400"}`}>Installations</p>
          </div>

          {/* Avatar cluster */}
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {["#E30613", "#1a1a2e", "#FF6B6B"].map((bg, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#111827] flex items-center justify-center text-[9px] font-bold text-white z-10" style={{ backgroundColor: bg }}>
                  {["S", "B", "A"][i]}
                </div>
              ))}
            </div>
            <Link href="/contact"
              className="ml-2 w-9 h-9 rounded-full bg-[#E30613] flex items-center justify-center shadow-lg shadow-[#E30613]/30 hover:scale-110 transition-transform">
              <ArrowUpRight size={14} className="text-white" />
            </Link>
          </div>
        </div>

        {/* Mini progress bar */}
        <div className={`mt-5 h-[2px] rounded-full overflow-hidden ${isDark ? "bg-white/10" : "bg-gray-200"}`}>
          <motion.div className="h-full bg-[#E30613] rounded-full"
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.1, ease: "linear" }} />
        </div>
      </motion.div>

      {/* ════════ RIGHT DETAIL CARD (Hidden on Mobile) ════════ */}
      <div className="absolute bottom-10 right-6 lg:right-10 z-30 w-[280px] hidden xl:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={active + "-card"}
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.55, ease: EASE }}
            className={`border rounded-[2rem] p-5 shadow-2xl ${glassStrong}`}
          >
            {/* Card header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className={`text-[10px] font-mono tracking-[0.15em] text-[#E30613] uppercase font-bold mb-1.5`}>
                  {slide.category}
                </p>
                <p className={`font-heading font-extrabold text-[15px] leading-tight ${isDark ? "text-white" : "text-[#1a1a2e]"}`}>
                  {slide.name}
                </p>
              </div>
              <button className="w-9 h-9 rounded-full bg-[#E30613] flex items-center justify-center shadow-md shadow-[#E30613]/30 shrink-0 transition-transform hover:scale-105">
                <ArrowUpRight size={14} className="text-white" />
              </button>
            </div>

            {/* Location */}
            <div className={`flex items-center gap-1.5 mb-3 ${isDark ? "text-white/60" : "text-gray-500"}`}>
              <MapPin size={11} className="text-[#E30613]" />
              <span className="text-[10px] font-mono">{slide.location}</span>
            </div>

            {/* Description */}
            <p className={`text-[11px] leading-relaxed mb-5 ${isDark ? "text-white/60" : "text-gray-500"}`}>
              {slide.desc}
            </p>

            {/* Specs row */}
            <div className={`grid grid-cols-2 gap-2 rounded-2xl p-3.5 mb-5 ${isDark ? "bg-white/5" : "bg-[#f4f7fa]"}`}>
              {Object.entries(slide.specs).map(([key, val]) => (
                <div key={key} className="text-center">
                  <p className={`font-heading font-extrabold text-[13px] leading-none ${isDark ? "text-white" : "text-[#1a1a2e]"}`}>{val}</p>
                  <p className={`text-[8px] font-mono tracking-widest uppercase mt-1 ${isDark ? "text-white/40" : "text-gray-400"}`}>
                    {key === "panels" ? "Panels" : key === "output" ? "Output" : key === "storage" ? "Storage" : "Savings"}
                  </p>
                </div>
              ))}
            </div>

            {/* Action icons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Star size={12} className="text-[#ECA468] fill-[#ECA468]" />
                <span className={`text-[11px] font-bold ${isDark ? "text-white" : "text-[#1a1a2e]"}`}>{slide.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                {[Heart, Bookmark, Share2].map((Icon, i) => (
                  <button key={i} className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all hover:scale-110 ${isDark ? "bg-white/5 border-white/10 text-white/50 hover:text-white" : "bg-white border-gray-200 text-gray-400 hover:text-[#E30613] shadow-sm"}`}>
                    <Icon size={12} />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </section>
  );
}