"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Landmark, ShieldCheck, Leaf, ArrowRight, FileText } from "lucide-react";

export default function RoiCalculator() {
  const [bill, setBill] = useState<number>(12000);
  const [area, setArea] = useState<number>(1800);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Monitor theme switch mutations on html tag
  useEffect(() => {
    setIsDarkTheme(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDarkTheme(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Compute values
  const capacity = Math.round((bill * 0.0007 + area * 0.0018) * 10) / 10;
  const annualSavings = Math.round(bill * 12 * 0.84);
  const capitalRecovery = Math.max(3.2, Math.min(5.8, Math.round(((capacity * 72000) / Math.max(1, annualSavings)) * 10) / 10));
  const carbonOffset = Math.round(capacity * 1.24 * 10) / 10;

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-IN").format(num);
  };

  return (
    <section className="py-36 bg-white dark:bg-transparent relative overflow-hidden border-t border-gray-100 dark:border-white/10 transition-colors duration-500" aria-label="Financial assessment calculator">
      
      {/* 1. ARCHITECTURAL DRAFT BACKGROUNDS */}
      {/* Dotted Grid Layout */}
      <div className="absolute inset-0 dotted-matrix opacity-70 pointer-events-none" />

      {/* Volumetric Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#E30613]/[0.02] dark:bg-brand-red/[0.02] blur-[150px] pointer-events-none" />

      {/* SVG Solar Angle Drafting Geometry */}
      <svg className="absolute inset-0 w-full h-full text-gray-200/50 dark:text-brand-red/[0.04] stroke-current fill-none pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <circle cx="50" cy="50" r="32" strokeWidth="0.15" />
        <circle cx="50" cy="50" r="48" strokeWidth="0.1" strokeDasharray="1 4" />
        <line x1="8" y1="50" x2="92" y2="50" strokeWidth="0.15" />
        <line x1="50" y1="8" x2="50" y2="92" strokeWidth="0.15" />
        {/* Latitude curves */}
        <path d="M 15 85 Q 50 15 85 85" strokeWidth="0.15" />
        <path d="M 15 92 Q 50 35 85 92" strokeWidth="0.1" strokeDasharray="2 2" />
        {/* Angle indicators */}
        <line x1="50" y1="50" x2="72" y2="28" strokeWidth="0.1" strokeDasharray="1 1" />
        <line x1="50" y1="50" x2="28" y2="72" strokeWidth="0.1" strokeDasharray="1 1" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="max-w-3xl space-y-4 mb-24">
          <span className="text-xs font-heading font-bold tracking-widest uppercase text-[#B5050C] dark:text-[#E30613] block">
            Financial Assessment
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-[#1A1816] dark:text-white leading-tight">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5050C] via-[#E30613] to-[#B5050C] dark:from-[#E30613] dark:via-[#FFA3A3] dark:to-[#E30613] italic font-heading font-normal">Sizing & ROI Calculator</span>
          </h2>
          <p className="text-gray-600 dark:text-white/70 font-sans font-light text-base leading-relaxed">
            Estimate your optimal system capacity, capital recovery timeline, and carbon offsets based on monthly utility cost and available structural roof layout space.
          </p>
        </div>

        {/* 2-Column Split: Controls & Financial Results */}
        <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 items-stretch">
          
          {/* Column 1: Precision Control Inputs (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-[2rem] border premium-glass">
            <div className="space-y-10">
              <div className="flex items-center gap-3 pb-4 border-b border-gray-200/60 dark:border-white/10">
                <div className="w-9 h-9 rounded-xl bg-[#E30613]/10 dark:bg-white/10 flex items-center justify-center">
                  <Calculator size={16} className="text-[#B5050C] dark:text-[#E30613]" />
                </div>
                <div>
                  <h3 className="text-sm font-heading font-extrabold text-[#1A1816] dark:text-white uppercase tracking-wider">Diagnostic inputs</h3>
                  <p className="text-[10px] font-sans text-gray-400 dark:text-white/40 tracking-wide">Adjust sliders to fit your energy profile</p>
                </div>
              </div>

              {/* Slider 1: Monthly Utility Expense */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-heading font-extrabold uppercase text-gray-500 dark:text-white/50 tracking-wider">Monthly Bill</span>
                  <span className="text-lg font-heading font-extrabold text-[#1A1816] dark:text-white">
                    INR {formatNumber(bill)}
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="50000"
                  step="500"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E30613] dark:accent-[#FF3B30] outline-none"
                />
                <div className="flex justify-between text-[9px] font-mono text-gray-400 dark:text-white/30 uppercase tracking-widest">
                  <span>Min: 3K</span>
                  <span>Max: 50K</span>
                </div>
              </div>

              {/* Slider 2: Available Roof Layout Area */}
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-heading font-extrabold uppercase text-gray-500 dark:text-white/50 tracking-wider">Roof Area</span>
                  <span className="text-lg font-heading font-extrabold text-[#1A1816] dark:text-white">
                    {formatNumber(area)} Sq. Ft.
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#E30613] dark:accent-[#FF3B30] outline-none"
                />
                <div className="flex justify-between text-[9px] font-mono text-gray-400 dark:text-white/30 uppercase tracking-widest">
                  <span>500 sq.ft</span>
                  <span>5,000 sq.ft</span>
                </div>
              </div>
            </div>

            {/* Assessment proposal CTA */}
           
          </div>

          {/* Column 2: Sleek Output Telemetry Board (7 Columns) */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 items-stretch">
            
            {/* Metric 1: System Sizing */}
            <div className="p-7 rounded-[2rem] border premium-glass flex flex-col justify-between h-[180px]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-heading font-extrabold uppercase text-gray-400 dark:text-white/40 tracking-widest">Array Sizing</span>
                <Calculator size={14} className="text-[#B5050C] dark:text-[#E30613]" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-heading font-extrabold text-[#1A1816] dark:text-white tracking-tight">
                  {capacity} <span className="text-xs font-heading font-bold uppercase tracking-wider text-gray-500 dark:text-white/40">kW Peak</span>
                </p>
                <p className="text-[9px] font-sans text-gray-500 dark:text-white/40 uppercase tracking-widest font-light leading-relaxed">
                  Calculated moncrystalline array density footprint
                </p>
              </div>
            </div>

            {/* Metric 2: Payback Timeline */}
            <div className="p-7 rounded-[2rem] border premium-glass flex flex-col justify-between h-[180px]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-heading font-extrabold uppercase text-gray-400 dark:text-white/40 tracking-widest">Capital Payback</span>
                <Landmark size={14} className="text-[#B5050C] dark:text-[#E30613]" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-heading font-extrabold text-[#1A1816] dark:text-white tracking-tight">
                  {capitalRecovery} <span className="text-xs font-heading font-bold uppercase tracking-wider text-gray-500 dark:text-white/40">Years</span>
                </p>
                <p className="text-[9px] font-sans text-gray-500 dark:text-white/40 uppercase tracking-widest font-light leading-relaxed">
                  Breakeven capital recovery offset period
                </p>
              </div>
            </div>

            {/* Metric 3: Annual Cash Savings */}
            <div className="p-7 rounded-[2rem] border premium-glass flex flex-col justify-between h-[180px]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-heading font-extrabold uppercase text-gray-400 dark:text-white/40 tracking-widest">Est. Annual Savings</span>
                <ShieldCheck size={14} className="text-[#B5050C] dark:text-[#E30613]" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-heading font-extrabold text-[#1A1816] dark:text-white tracking-tight">
                  INR {formatNumber(annualSavings)}
                </p>
                <p className="text-[9px] font-sans text-gray-500 dark:text-white/40 uppercase tracking-widest font-light leading-relaxed">
                  Sub-grid tariff displacement offset savings
                </p>
              </div>
            </div>

            {/* Metric 4: Carbon Footprint Relief */}
            <div className="p-7 rounded-[2rem] border premium-glass flex flex-col justify-between h-[180px]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-heading font-extrabold uppercase text-gray-400 dark:text-white/40 tracking-widest">Carbon Relief</span>
                <Leaf size={14} className="text-[#B5050C] dark:text-[#E30613]" />
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-heading font-extrabold text-[#1A1816] dark:text-white tracking-tight">
                  {carbonOffset} <span className="text-xs font-heading font-bold uppercase tracking-wider text-gray-500 dark:text-white/40">Tons / Yr</span>
                </p>
                <p className="text-[9px] font-sans text-gray-500 dark:text-white/40 uppercase tracking-widest font-light leading-relaxed">
                  Equivalent atmospheric CO2 reduction
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
