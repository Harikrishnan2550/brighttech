"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, ChevronRight } from "lucide-react";

interface LayerData {
  id: string;
  num: string;
  title: string;
  techTitle: string;
  desc: string;
  specs: { label: string; value: string }[];
  color: string;
}

const LAYERS: LayerData[] = [
  {
    id: "perc-shield",
    num: "01",
    title: "Photovoltaic Shield",
    techTitle: "Monocrystalline PERC Solid-State Core",
    desc: "Passivated Emitter Rear Cell (PERC) wafer arrays configured with low-reflection anti-soiling textures. Optimizes photon capture angles and maximizes valence electron mobility under low-irradiance spectral distributions.",
    specs: [
      { label: "Cell Conversion Efficiency", value: "24.2%" },
      { label: "Temperature Coefficient", value: "-0.34%/°C" },
      { label: "Spectral Capture Range", value: "300 - 1200 nm" }
    ],
    color: "#E30613",
  },
  {
    id: "inverter-routing",
    num: "02",
    title: "Micro-Grid Routing",
    techTitle: "Module-Level Maximum Power Point Tracking (MPPT)",
    desc: "Decentralized high-frequency micro-inverter topology with phase-locked loop (PLL) synchronization. Controls power clipping ratios and implements autonomous rapid safety cut-offs at the junction level.",
    specs: [
      { label: "MPPT Tracking Accuracy", value: "99.8%" },
      { label: "Grid Sync Response", value: "< 0.1 ms" },
      { label: "Total Harmonic Distortion", value: "< 2.0%" }
    ],
    color: "#E30613",
  },
  {
    id: "storage-vault",
    num: "03",
    title: "Storage Integration",
    techTitle: "Lithium Iron Phosphate (LiFePO4) Thermal Bank",
    desc: "Decentralized energy storage system (ESS) modules featuring active liquid cooling and battery management system (BMS) controls. Safely stores daytime peak offsets for overnight critical load shedding.",
    specs: [
      { label: "Nominal Module Capacity", value: "15.4 kWh" },
      { label: "Round-Trip Efficiency", value: "96.5%" },
      { label: "Operational Lifespan", value: "8,000 Cycles" }
    ],
    color: "#E30613",
  },
  {
    id: "structural-anchoring",
    num: "04",
    title: "Anchoring Substrate",
    techTitle: "Anodized Aero-Grade Structural Chassis",
    desc: "Precision-extruded structural framing engineered to distribute static dead-load weight and absorb wind shear stresses. Treated with double-anodization coatings to defend against localized galvanic corrosion.",
    specs: [
      { label: "Wind Shear Tolerance", value: "240 km/h" },
      { label: "Chassis Static Load Cap", value: "5400 Pa" },
      { label: "Anodization Thickness", value: "25 microns" }
    ],
    color: "#E30613",
  }
];

export default function HowItWorks() {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Sync theme
  useEffect(() => {
    const observer = new MutationObserver(() => {
      document.documentElement.classList.contains("dark");
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Handle Internal Desktop Scroll
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollY = container.scrollTop;
    const height = container.clientHeight;
    // Calculate which card is currently in view based on scroll position
    const index = Math.round(scrollY / height);
    if (index !== activeLayerIndex) setActiveLayerIndex(index);
  };

  // Handle Click Navigation (Works for both Desktop and Mobile)
  const handleSelect = (index: number, id: string) => {
    setActiveLayerIndex(index);
    if (window.innerWidth >= 1024 && scrollRef.current) {
      // Desktop: Scroll the inner container
      scrollRef.current.scrollTo({ top: index * scrollRef.current.clientHeight, behavior: "smooth" });
    } else {
      // Mobile: Scroll the main window to the stacked card
      const el = document.getElementById(`mobile-card-${id}`);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    // ── SECTION WRAPPER ──
    // Desktop: Exactly 1 screen tall (h-[100dvh]). No extra white space.
    // Mobile: Normal height (h-auto) to allow natural scrolling.
    <section className="relative w-full h-auto lg:h-[100dvh] bg-[#fdfdfd] dark:bg-[#0a0a0a]" aria-label="Interactive Subsystem Explorer">
      
      {/* ════════════════════════════════════════════════════════ */}
      {/* ── DESKTOP VIEW (Locked Overlay + Internal Scrolling) ── */}
      {/* ════════════════════════════════════════════════════════ */}

      {/* STATIC LEFT OVERLAY */}
      <div className="hidden lg:flex absolute inset-0 z-10 pointer-events-none flex-col justify-center">
        <div className="max-w-[90rem] mx-auto w-full px-12">
          
          <div className="mb-12 pointer-events-auto">
            <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#E30613] block mb-3">
              Architectural Layer Explorer
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
              Interactive <span className="text-[#E30613] italic font-medium">Subsystem Explorer</span>
            </h2>
          </div>

          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-5 flex flex-col gap-5 pointer-events-auto">
              {LAYERS.map((layer, index) => {
                const isActive = activeLayerIndex === index;
                return (
                  <button
                    key={layer.id}
                    onClick={() => handleSelect(index, layer.id)}
                    className={`w-full text-left px-8 py-6 rounded-[2rem] transition-all duration-300 flex items-center justify-between cursor-pointer group shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-none border ${
                      isActive 
                        ? "bg-white dark:bg-[#151515] border-transparent scale-[1.02]" 
                        : "bg-white/60 dark:bg-[#111] border-transparent hover:border-gray-200 dark:hover:border-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-6">
                      <span className={`font-extrabold text-2xl transition-colors ${isActive ? "text-[#E30613]" : "text-gray-300 dark:text-gray-700"}`}>
                        {layer.num}
                      </span>
                      <div>
                        <h4 className={`text-[15px] font-bold uppercase tracking-wider transition-colors ${isActive ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400"}`}>
                          {layer.title}
                        </h4>
                        <p className={`text-[10px] font-mono uppercase tracking-widest mt-1 transition-colors ${isActive ? "text-gray-500 dark:text-gray-400" : "text-gray-400 dark:text-gray-600"}`}>
                          {layer.specs[0].value}
                        </p>
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isActive ? "bg-[#E30613] text-white shadow-lg shadow-[#E30613]/20" : "bg-gray-100 dark:bg-white/5 text-gray-400 group-hover:bg-gray-200 dark:group-hover:bg-white/10"}`}>
                      <ChevronRight size={20} strokeWidth={isActive ? 3 : 2} />
                    </div>
                  </button>
                );
              })}
            </div>
            {/* Empty right column in overlay to reveal the scrolling track underneath */}
            <div className="col-span-7" />
          </div>

        </div>
      </div>

      {/* SCROLLING RIGHT TRACK */}
      {/* Natively handles scrolling. Cannot be broken by CSS bugs. */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="hidden lg:block w-full h-full overflow-y-auto snap-y snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] z-0 scroll-smooth relative"
      >
        {LAYERS.map((layer) => (
          <div key={layer.id} className="w-full h-full snap-center flex flex-col justify-center">
            <div className="max-w-[90rem] mx-auto w-full px-12 grid grid-cols-12 gap-16 items-center">
              <div className="col-span-5" /> {/* Spacer for left menu */}
              
              <div className="col-span-7">
                <div className="bg-white dark:bg-[#151515] p-12 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-50 dark:border-white/5 flex flex-col min-h-[420px]">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#E30613] flex items-center justify-center text-white shadow-md shadow-[#E30613]/20">
                      <Cpu size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#E30613] block mb-0.5">Active Subsystem</span>
                      <span className="text-[13px] font-bold text-gray-900 dark:text-white uppercase tracking-wider">{layer.title}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                      {layer.techTitle}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 font-light text-[16px] leading-relaxed max-w-2xl">
                      {layer.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100 dark:border-white/5 mt-auto">
                    {layer.specs.map((spec, i) => (
                      <div key={i} className="relative pl-4 border-l-2 border-[#E30613]">
                        <p className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.15em] mb-1.5">{spec.label}</p>
                        <p className="text-lg font-extrabold text-gray-900 dark:text-white tracking-tight">{spec.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>


      {/* ════════════════════════════════════════════════════ */}
      {/* ── MOBILE VIEW (Normal Native Scrolling Stack) ─── */}
      {/* ════════════════════════════════════════════════════ */}
      <div className="block lg:hidden px-6 py-20">
        
        {/* Header */}
        <div className="mb-10">
          <span className="text-[11px] font-bold tracking-[0.15em] uppercase text-[#E30613] block mb-3">
            Architectural Layer Explorer
          </span>
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
            Interactive <span className="text-[#E30613] italic font-medium">Subsystem Explorer</span>
          </h2>
        </div>

        {/* Menu Controls */}
        <div className="flex flex-col gap-4 mb-16">
          {LAYERS.map((layer, index) => {
            const isActive = activeLayerIndex === index;
            return (
              <button
                key={layer.id}
                onClick={() => handleSelect(index, layer.id)}
                className={`w-full text-left px-6 py-5 rounded-[1.5rem] transition-all border ${
                  isActive 
                    ? "bg-white dark:bg-[#151515] border-[#E30613] shadow-md" 
                    : "bg-white/60 dark:bg-[#111] border-transparent"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-extrabold text-xl ${isActive ? "text-[#E30613]" : "text-gray-300 dark:text-gray-700"}`}>
                    {layer.num}
                  </span>
                  <h4 className={`text-[13px] font-bold uppercase tracking-wider ${isActive ? "text-gray-900 dark:text-white" : "text-gray-500"}`}>
                    {layer.title}
                  </h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Stacked Content Cards */}
        <div className="flex flex-col gap-8">
          {LAYERS.map((layer) => (
            <div 
              key={layer.id} 
              id={`mobile-card-${layer.id}`}
              className="bg-white dark:bg-[#151515] p-6 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E30613] flex items-center justify-center text-white shadow-md shadow-[#E30613]/20">
                  <Cpu size={20} strokeWidth={2} />
                </div>
                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E30613] block mb-0.5">Active Subsystem</span>
                  <span className="text-[12px] font-bold text-gray-900 dark:text-white uppercase tracking-wider">{layer.title}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
                  {layer.techTitle}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 font-light text-[14px] leading-relaxed">
                  {layer.desc}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 pt-6 border-t border-gray-100 dark:border-white/5">
                {layer.specs.map((spec, i) => (
                  <div key={i} className="relative pl-4 border-l-2 border-[#E30613]">
                    <p className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.15em] mb-1">{spec.label}</p>
                    <p className="text-base font-extrabold text-gray-900 dark:text-white tracking-tight">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}