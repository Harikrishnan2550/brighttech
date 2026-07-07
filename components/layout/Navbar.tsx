"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home as HomeIcon,
  Info,
  Briefcase,
  Image as ImageIcon,
  ChevronDown,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { subtitle: "Overview", name: "Home", href: "/", icon: HomeIcon },
  { subtitle: "Who We Are", name: "About", href: "/about", icon: Info },
  { subtitle: "What We Do", name: "Services", href: "/services", icon: Briefcase },
  { subtitle: "Portfolio", name: "Gallery", href: "/gallery", icon: ImageIcon },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (saved === "dark" || (!saved && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const next = document.documentElement.classList.toggle("dark");
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // ── INVERTED THEME LOGIC (ONLY FOR CENTER MENU) ──
  // Light Mode (isDark === false) -> Center is Black
  // Dark Mode (isDark === true) -> Center is White
  const centerBg = isDark ? "bg-white" : "bg-[#111827]";
  const centerText = isDark ? "text-[#1a1a2e]" : "text-white";
  const centerMuted = isDark ? "text-[#7a8b9e]" : "text-gray-400";
  const centerIconMuted = isDark ? "text-[#a0abb8]" : "text-gray-500";
  const svgFill = isDark ? "fill-white" : "fill-[#111827]";
  
  const arrowAccent = "text-[#F5A623]"; // Golden orange

  return (
    <>
      {/* ─── DESKTOP NAVBAR ─── */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden lg:block pointer-events-none h-40">
        <div className="w-full h-full relative px-8 pt-6 max-w-[100rem] mx-auto">
          
          {/* LEFT — Floating Logo (LARGER) */}
          <div className="absolute left-8 top-6 pointer-events-auto">
            <Link
              href="/"
              className={`flex items-center transition-all duration-300 rounded-[1.25rem] px-4 py-2 ${
                isDark ? "bg-white shadow-md" : "bg-transparent hover:scale-105"
              }`}
            >
              <Image 
                src="/logo2.png" 
                alt="Brighttech Solar Logo" 
                width={191}
                height={50}
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* CENTER — Ultra-Smooth Connected Droplet (DYNAMIC THEME) */}
          <motion.nav
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`pointer-events-auto absolute top-0 left-1/2 -translate-x-1/2 px-14 pt-6 pb-5 rounded-b-[2.5rem] flex items-center gap-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-colors duration-300 ${centerBg}`}
          >
            {/* Smooth Cubic Bézier Curve - Left */}
            <svg width="80" height="56" viewBox="0 0 80 56" className={`absolute top-0 -left-[79px] ${svgFill} transition-colors duration-300`}>
              <path d="M 0 0 L 80 0 L 80 56 C 80 24, 40 0, 0 0 Z" />
            </svg>
            
            {/* Smooth Cubic Bézier Curve - Right */}
            <svg width="80" height="56" viewBox="0 0 80 56" className={`absolute top-0 -right-[79px] ${svgFill} transition-colors duration-300`}>
              <path d="M 0 0 L 80 0 C 40 0, 0 24, 0 56 L 0 0 Z" />
            </svg>

            {/* Nav Links */}
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex flex-col items-start group relative"
                >
                  

                  {/* Bottom Line: Main text + Chevron */}
                  <div className="flex items-center gap-2 pl-[24px]">
                    <span className={`text-[15px] font-bold transition-colors ${centerText}`}>
                      {link.name}
                    </span>
                    <ChevronDown size={15} strokeWidth={3} className={`transition-transform group-hover:translate-y-0.5 ${centerText}`} />
                  </div>
                </Link>
              );
            })}
          </motion.nav>

          {/* RIGHT — Controls & Contact Pill (ALWAYS WHITE) */}
          <div className="absolute right-8 top-6 pointer-events-auto flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="rounded-[1.5rem] p-3.5 transition-transform hover:scale-105 shadow-sm bg-white text-gray-500"
            >
              {isDark ? <Sun size={20} strokeWidth={2} /> : <Moon size={20} strokeWidth={2} />}
            </button>

            {/* Contact Pill */}
            <Link
              href="/contact"
              className="flex items-center gap-3 rounded-[1.5rem] px-8 py-3.5 transition-transform hover:scale-105 group shadow-sm bg-white"
            >
              <span className="font-semibold text-[15px] text-[#1a1a2e]">
                Contact
              </span>
              <ArrowUpRight size={18} strokeWidth={2.5} className={`${arrowAccent} transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
            </Link>
          </div>

        </div>
      </header>

      {/* ─── MOBILE NAVBAR ─── */}
      <header className="fixed top-4 left-4 right-4 z-50 lg:hidden flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          /* Mobile top bar is ALWAYS WHITE, and permanently opted out of forced dark mode to prevent black logo text contrast issues */
          className="pointer-events-auto w-full h-20 flex items-center justify-between rounded-full px-6 shadow-lg bg-white border border-black/5 text-[#1a1a2e]"
          style={{ colorScheme: "only light" }}
        >
          {/* Mobile Logo Area */}
          <Link 
            href="/" 
            className="flex items-center transition-all duration-300 bg-transparent hover:scale-105"
          >
            <Image 
              src="/logo2.png" 
              alt="Brighttech Solar Logo" 
              width={130}
              height={34}
              className="object-contain"
              priority
            />
          </Link>

          {/* Right: theme + hamburger */}
          <div className="flex items-center gap-5">
            <button 
              onClick={toggleTheme} 
              aria-label="Toggle Theme" 
              className="text-gray-500 hover:text-black hover:scale-110 transition-transform"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Menu" 
              className="text-[#1a1a2e] hover:scale-110 transition-transform"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer (DYNAMIC THEME) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`fixed inset-x-4 top-[104px] z-40 rounded-[2rem] shadow-2xl lg:hidden overflow-hidden ${isDark ? "bg-white border border-black/10" : "bg-[#111827] border border-white/10"}`}
          >
            <nav className="flex flex-col p-4 gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-4 px-4 py-4 rounded-[1.25rem] transition-all ${
                      isActive ? (isDark ? "bg-gray-50" : "bg-white/5") : ""
                    }`}
                  >
                    <div className={isActive ? arrowAccent : centerIconMuted}>
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-[12px] font-semibold tracking-wide ${centerMuted}`}>
                        {link.subtitle}
                      </span>
                      <span className={`text-[16px] font-bold ${centerText}`}>
                        {link.name}
                      </span>
                    </div>
                  </Link>
                );
              })}
              {/* Contact CTA */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-6 py-4 mt-2 rounded-[1.25rem] text-[15px] font-bold border ${isDark ? "border-gray-200 text-[#1a1a2e]" : "border-white/10 text-white"}`}
              >
                <span>Contact Us</span>
                <ArrowUpRight size={22} strokeWidth={2.5} className={arrowAccent} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;