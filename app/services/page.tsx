"use client";

import Image from "next/image";
import { Sun, Zap, Layers, BatteryCharging, Cpu, ShieldCheck, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "On-Grid Solar Systems",
    desc: "Maximum efficiency grid-tied solar power configurations engineered to drastically slash your KSEB electricity bills via smart net-metering technology.",
    icon: <Sun className="w-8 h-8 text-brand-orange" />,
    specs: [
      "Seamless KSEB net-metering & utility approvals",
      "Tier-1 monocrystalline half-cut cell technology",
      "High-yield solar power plant design",
      "Zero battery maintenance overheads",
    ],
  },
  {
    title: "Off-Grid Solar Systems",
    desc: "Achieve complete energy independence with autonomous standalone solar arrays engineered for uninterrupted clean power generation.",
    icon: <Zap className="w-8 h-8 text-brand-red" />,
    specs: [
      "Heavy-duty deep-cycle energy storage",
      "High-efficiency MPPT charge controllers",
      "Ideal for remote locations & power-cut zones",
      "Self-sustaining localized mini-grids",
    ],
  },
  {
    title: "Hybrid Solar Systems",
    desc: "The definitive solution combining intelligent utility grid connectivity with advanced battery backup systems to navigate peak tariffs dynamically.",
    icon: <Layers className="w-8 h-8 text-brand-orange" />,
    specs: [
      "Automated grid-to-battery smart routing",
      "Intelligent peak-load shaving mechanics",
      "Continuous emergency power failover architecture",
      "Optimised storage efficiency configurations",
    ],
  },
  {
    title: "Lithium Battery Storage",
    desc: "Next-generation high-density lithium iron phosphate (LFP) energy storage units boasting long lifecycles and rapid charging cycles.",
    icon: <BatteryCharging className="w-8 h-8 text-brand-red" />,
    specs: [
      "Integrated smart BMS architecture safety protocols",
      "Extended lifecycle durability vs lead-acid storage",
      "Deep discharge capabilities without cell degradation",
      "Space-saving modular rack mounts",
    ],
  },
  {
    title: "Inhouse Manufactured Inverters",
    desc: "Premium pure sine wave inverters engineered in-house to protect and power sensitive corporate assets and residential infrastructure effortlessly.",
    icon: <Cpu className="w-8 h-8 text-brand-orange" />,
    specs: [
      "Proprietary trusted brands: EDIX & XL PLUS",
      "Flawless clean pure sine wave performance",
      "Advanced short-circuit & thermal protection",
      "Comprehensive localized maintenance warranty",
    ],
  },
  {
    title: "Uninterruptible Power Supplies (UPS)",
    desc: "Industrial-grade heavy-duty UPS systems designed to guarantee zero microsecond operation switch delay and total asset runtime safety.",
    icon: <ShieldCheck className="w-8 h-8 text-brand-red" />,
    specs: [
      "Instantaneous millisecond power transmission transfers",
      "Custom engineered load-bearing configurations",
      "Smart micro-controller diagnostic tracking",
      "Built for harsh domestic voltage fluctuations",
    ],
  },
];

const processSteps = [
  { step: "01", name: "Audit & Scoping", desc: "We comprehensively review your KSEB energy statements, structural rooftop drawings, and baseline loads." },
  { step: "02", name: "Custom Engineering", desc: "Our specialized engineers map precise 3D shadow boundaries, panel orientations, and yield forecasts." },
  { step: "03", name: "Precision Assembly", desc: "Certified technical teams deploy heavy-duty mounting structures, secure string configurations, and balance system banks." },
  { step: "04", name: "KSEB Sync & Handover", desc: "We fast-track necessary net-metering approvals with regulatory power boards and activate monitoring telemetry." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent pb-20 overflow-hidden text-gray-900 dark:text-white">
      {/* Background radial blurs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-[300px] h-[300px] bg-brand-orange/5 blur-[100px] pointer-events-none" />

      {/* ── FULL-WIDTH TOP HERO BANNER (REDUCED HEIGHT & CENTERED CONTENT) ── */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative h-[350px] md:h-[420px] overflow-hidden bg-black rounded-b-[3rem] md:rounded-b-[6rem]"
      >
        {/* Full-width Background Image Canvas */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/rooftop_solar.png"
            alt="Services banner"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Layered dark gradients for maximum typography contrast */}
          <div className="absolute inset-0 bg-black/45 dark:bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-1" />
        </div>

        {/* Center-Aligned Content Wrapper */}
        <div className="absolute inset-0 z-10 w-full h-full flex flex-col justify-center items-center pt-16">
          <div className="max-w-3xl w-full mx-auto px-6 text-center space-y-4 text-white flex flex-col items-center">
            
            
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tighter leading-none">
              Our <span className="text-brand-orange italic font-normal">Services</span>
            </h1>
            
            <p className="max-w-xl text-white/95 font-sans font-light text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-md mx-auto">
              High-performance energy architecture designed for maximum financial savings and permanent grid security.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ── CORE PAGE SERVICES GRID ── */}
      <section className="py-24 relative z-10 border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((s) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                key={s.title}
                className="group relative rounded-3xl p-8 bg-gray-50/70 dark:bg-[#121212]/50 border border-gray-200 dark:border-white/5 hover:border-brand-orange/35 transition-all duration-300 flex flex-col justify-between shadow-sm dark:shadow-none"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gray-100 dark:bg-[#181818] border border-gray-200 dark:border-white/5 flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/10 transition-all duration-300">
                    {s.icon}
                  </div>

                  <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white tracking-tight group-hover:text-brand-orange transition-colors duration-300">{s.title}</h2>
                  
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed min-h-[64px]">{s.desc}</p>
                  
                  {/* Specs List */}
                  <ul className="space-y-3 pt-4 border-t border-gray-200 dark:border-white/5">
                    {s.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-gray-700 dark:text-gray-300 font-light">
                        <CheckCircle2 size={16} className="text-brand-orange shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Operational Process Timeline */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-4 mb-20"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-brand-orange">Project Lifecycle</span>
            <h2 className="text-4xl font-bold font-heading text-gray-900 dark:text-white">How We Deliver Results</h2>
          </motion.div>

          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-8"
          >
            {processSteps.map((p, idx) => (
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                key={idx} 
                className="p-8 rounded-3xl bg-gray-50/50 dark:bg-[#121212]/30 border border-gray-200 dark:border-white/5 relative group hover:border-brand-red/35 transition-all duration-300 shadow-sm dark:shadow-none"
              >
                <div className="absolute top-6 right-6 text-4xl font-extrabold font-heading text-gray-900/5 dark:text-white/5 group-hover:text-brand-red/10 transition-colors duration-300">
                  {p.step}
                </div>
                <div className="space-y-4 mt-6">
                  <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white">{p.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}