"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

interface Brand {
  name: string;
  color: string; // Tailwind color class or hex for hover shadow/border
  glowColor: string; // HEX code for glow shadow
  logoPath: string;
  specs: string[];
}

export default function TrustedBrands() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDarkTheme(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const BRANDS: Brand[] = [
    {
      name: "Tata Solar",
      color: "group-hover:border-[#005A9C]/45",
      glowColor: "rgba(0, 90, 156, 0.15)",
      specs: ["High reliability under low light.", "Tier-1 global performance rating.", "30-year structural output warranty."],
      logoPath: "/tata.png"
    },
    {
      name: "Waaree",
      color: "group-hover:border-[#0DB02B]/45",
      glowColor: "rgba(13, 176, 43, 0.15)",
      specs: ["State-of-the-art half-cut cell technology.", "Extremely high module efficiency (up to 22.5%).", "Anti-PID resistive layer protection."],
      logoPath: "/waaree.png"
    },
    {
      name: "Adani Solar",
      color: "group-hover:border-[#1F2937]/45",
      glowColor: "rgba(31, 41, 55, 0.15)",
      specs: ["High wind & heavy snow load resilience.", "Bifacial power generation density.", "Robust dual-glass encapsulation."],
      logoPath: "/adani.png"
    },
    {
      name: "V-Guard",
      color: "group-hover:border-[#B89047]/45",
      glowColor: "rgba(184, 144, 71, 0.15)",
      specs: ["High-durability pure sine wave stabilizers.", "Advanced thermal protection architecture.", "Rapid switchover diagnostic circuits."],
      logoPath: "/vguard.png"
    }
  ];

  return (
    <section className="py-28 relative bg-white dark:bg-transparent overflow-hidden border-t border-gray-100 dark:border-white/10 transition-colors duration-500" aria-label="Brand partners section">
      {/* Visual background overlay grids */}
      <div className="absolute inset-0 dotted-matrix opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#E30613]/[0.01] dark:bg-brand-red/[0.01] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <span className="text-xs font-heading font-bold tracking-widest uppercase text-[#B5050C] dark:text-[#E30613] block">
            Premium Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight text-[#1A1816] dark:text-white leading-tight">
            Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5050C] to-[#E30613] italic font-heading font-normal pr-2">Equipment Partners</span>
          </h2>
          <p className="text-gray-600 dark:text-white/60 font-sans font-light text-sm leading-relaxed">
            We collaborate with India's leading manufacturers to power your commercial arrays, home layouts, and hybrid grid infrastructures with zero-compromise product guarantees.
          </p>
        </div>

        {/* Brand Integration Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRANDS.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -6, 
                boxShadow: `0 20px 40px -15px ${brand.glowColor}`,
              }}
              className={`group p-8 rounded-[2rem] border premium-glass transition-all duration-300 flex flex-col justify-between h-[370px] ${brand.color}`}
            >
              <div className="space-y-6">
                {/* Brand Logo Container */}
                <div className="h-24 flex items-center justify-center border-b border-gray-200/50 dark:border-white/5 pb-4">
                  <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100/50 flex items-center justify-center h-20 w-full" style={{ colorScheme: "only light" }}>
                    <img
                      src={brand.logoPath}
                      alt={brand.name}
                      className="max-h-14 max-w-[85%] object-contain"
                    />
                  </div>
                </div>

                {/* Integration Details */}
                <div className="space-y-1">
                  <h3 className="text-lg font-heading font-extrabold text-[#1A1816] dark:text-white leading-none tracking-wide">
                    {brand.name}
                  </h3>
                </div>

                {/* Specs bullets */}
                <ul className="space-y-2 pt-1">
                  {brand.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300 font-sans font-normal leading-relaxed">
                      <ShieldCheck size={14} className="text-[#E30613] dark:text-brand-orange shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action explore tag */}
              <div className="flex items-center gap-1.5 text-xxs font-bold text-gray-400 group-hover:text-[#E30613] dark:group-hover:text-brand-orange uppercase tracking-wider font-heading transition-colors mt-4">
                <span>Verified equipment</span>
                <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
