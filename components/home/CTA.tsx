"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import api from "@/lib/api";
import { ArrowUpRight, Sparkles, Send, Battery, Shield, Zap } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Homepage CTA Consultation",
    message: "",
  });

  useEffect(() => {
    setIsDarkTheme(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDarkTheme(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Track scroll position to draw sun rays
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const rayDraw = useTransform(scrollYProgress, [0.2, 0.9], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.9], [0, 0.08]);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post("/contact", form);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        subject: "Homepage CTA Consultation",
        message: "",
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={containerRef} className="py-36 relative bg-white dark:bg-transparent overflow-hidden border-t border-gray-100 dark:border-white/10 transition-colors duration-500" aria-label="Contact and consultation">
      
      {/* Scroll-Bound Glow */}
      <motion.div 
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 bg-[#E30613]/5 dark:bg-white/5 pointer-events-none transition-all duration-1000 z-0"
      />

      {/* Decorative Sunray Vector Grid */}
      <svg className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[800px] h-[320px] text-[#E30613]/20 dark:text-white/10 stroke-current fill-none z-0 pointer-events-none" viewBox="0 0 800 320">
        {/* Sun Arcs */}
        <circle cx="400" cy="320" r="60" className="opacity-15" />
        <circle cx="400" cy="320" r="140" strokeDasharray="3 3" className="opacity-15" />
        <circle cx="400" cy="320" r="220" strokeDasharray="6 6" className="opacity-20" />
        <circle cx="400" cy="320" r="300" strokeDasharray="4 8" className="opacity-10" />

        {/* Radiating Rays */}
        <motion.g style={{ pathLength: rayDraw }} strokeWidth="0.8" className="opacity-30">
          <line x1="400" y1="320" x2="0" y2="120" />
          <line x1="400" y1="320" x2="100" y2="60" />
          <line x1="400" y1="320" x2="250" y2="20" />
          <line x1="400" y1="320" x2="400" y2="0" />
          <line x1="400" y1="320" x2="550" y2="20" />
          <line x1="400" y1="320" x2="700" y2="60" />
          <line x1="400" y1="320" x2="800" y2="120" />
        </motion.g>
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-[#B5050C]/10 dark:bg-white/10 border border-[#B5050C]/20 dark:border-white/15 text-[#B5050C] dark:text-[#E30613] text-xs font-heading font-extrabold uppercase tracking-[0.25em] mx-auto shadow-sm">
            <Sparkles size={12} className="animate-pulse text-[#E30613]" />
            <span>Switch & Save Today</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-[#1A1816] dark:text-white leading-tight">
            Ready to Power Your Future <br className="hidden sm:inline" />
            {/* Added pr-2 to fix the browser clipping bug on italicized text inside clip-text vectors */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5050C] via-[#E30613] to-[#B5050C] dark:from-[#E30613] dark:via-[#FFA3A3] dark:to-[#E30613] italic font-heading font-normal pr-2">With Clean Energy?</span>
          </h2>

          <p className="max-w-xl mx-auto text-gray-600 dark:text-white/70 font-sans font-light text-sm sm:text-base leading-relaxed">
            Start lowering your electricity overheads. Schedule a consultation or send a message directly to connect with our design engineers.
          </p>
        </div>

        {/* Contact and Battery Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 items-stretch">
          
          {/* Left Column: Interactive Contact Form */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-[2rem] border premium-glass flex-1 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-heading font-extrabold text-[#1A1816] dark:text-white tracking-tight mb-6 flex items-center gap-2">
                  Request Consultation
                  <Sparkles size={15} className="text-[#E30613] animate-pulse" />
                </h3>

                {success && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-sans">
                    Consultation request submitted! We will contact you within 24 hours.
                  </div>
                )}

                <form onSubmit={submitHandler} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-heading font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full bg-[#1A1816]/5 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-[#1A1816] dark:text-white text-xs rounded-xl py-3 px-4 outline-none focus:border-[#E30613] dark:focus:border-brand-red focus:bg-white/10 transition-all font-sans"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-heading font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-[#1A1816]/5 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-[#1A1816] dark:text-white text-xs rounded-xl py-3 px-4 outline-none focus:border-[#E30613] dark:focus:border-brand-red focus:bg-white/10 transition-all font-sans"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-heading font-bold text-gray-400 uppercase tracking-widest">Message / Notes</label>
                    <textarea
                      rows={4}
                      placeholder="Briefly describe your space or consultation needs..."
                      className="w-full bg-[#1A1816]/5 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-[#1A1816] dark:text-white text-xs rounded-xl py-3 px-4 outline-none focus:border-[#E30613] dark:focus:border-brand-red focus:bg-white/10 transition-all resize-none font-sans"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#1A1816] dark:bg-white text-white dark:text-[#1A1816] py-3.5 rounded-xl text-xxs font-heading font-extrabold uppercase tracking-[0.2em] hover:bg-black dark:hover:bg-gray-100 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                  >
                    {loading ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Request Consultation</span>
                        <Send size={12} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Battery Vault Card */}
          <div className="lg:col-span-5 flex items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[2rem] border border-gray-200/50 dark:border-brand-red/20 shadow-2xl p-6 bg-white/5 backdrop-blur-sm flex-1 flex flex-col justify-between overflow-hidden group min-h-[380px]"
            >
              {/* Battery photo background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/smart_battery_vault.png"
                  alt="High tech smart battery vault storage unit"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-700 opacity-60 dark:opacity-50"
                  sizes="(max-w-768px) 100vw, 30vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#080612] via-transparent to-black/40 z-1" />
              </div>

              {/* Glowing connection node */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg z-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E30613] dark:bg-[#FF3B30] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E30613] dark:bg-[#FF3B30]"></span>
                </span>
                <span className="text-[8px] font-mono tracking-widest text-white uppercase font-bold">Cable Terminus</span>
              </div>

              {/* Battery Charge Stats Overlay */}
              <div className="relative z-10 w-full mt-12 space-y-4">
                <div className="bg-black/40 backdrop-blur-md border border-white/5 p-4.5 rounded-2xl max-w-[200px]">
                  <span className="text-[8px] font-heading font-extrabold uppercase tracking-widest text-gray-400 block mb-1">Vault Status</span>
                  <div className="flex items-center gap-2">
                    <Battery className="text-[#E30613] dark:text-[#FF3B30] animate-pulse" size={16} />
                    <span className="text-sm font-heading font-extrabold text-white tracking-tight">Active Storage</span>
                  </div>
                </div>
              </div>

              {/* Animated Glowing LED Charging Bars */}
              <div className="relative z-10 space-y-4">
                <div className="bg-black/60 backdrop-blur-lg border border-white/10 p-5 rounded-2xl space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-heading font-extrabold uppercase tracking-widest text-white/70">Storage Level</span>
                    <span className="text-[10px] font-mono font-bold text-[#E30613] dark:text-[#FF3B30] animate-pulse">
                      {isInView ? "CHARGING 96.5%" : "STANDBY 96.5%"}
                    </span>
                  </div>
                  
                  {/* Charging Meter Bar segments */}
                  <div className="grid grid-cols-5 gap-1.5 h-2">
                    {[1, 2, 3, 4, 5].map((bar) => (
                      <motion.div
                        key={bar}
                        initial={{ opacity: 0.15 }}
                        animate={isInView ? {
                          opacity: [0.15, 1, 1, 0.15],
                          backgroundColor: isDarkTheme ? "#FF3B30" : "#E30613",
                          boxShadow: isDarkTheme ? "0 0 8px rgba(227, 6, 19,0.8)" : "0 0 8px rgba(227, 6, 19,0.8)"
                        } : {
                          opacity: bar <= 4 ? 0.95 : 0.15,
                          backgroundColor: bar <= 4 ? (isDarkTheme ? "#FF3B30" : "#E30613") : "#ffffff"
                        }}
                        transition={isInView ? {
                          repeat: Infinity,
                          duration: 2.5,
                          delay: bar * 0.25,
                          ease: "easeInOut"
                        } : {}}
                        className="rounded-sm"
                      />
                    ))}
                  </div>

                  <div className="flex justify-between items-center text-[8px] text-gray-400 font-mono tracking-wider pt-1 border-t border-white/5">
                    <span className="flex items-center gap-1"><Shield size={8} /> Protected</span>
                    <span className="flex items-center gap-1"><Zap size={8} /> Net-Zero</span>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}