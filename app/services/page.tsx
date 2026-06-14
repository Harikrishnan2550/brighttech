"use client";

import Image from "next/image";
import { Sun, BatteryCharging, Wrench, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Solar Installation",
    desc: "Complete photovoltaic integration engineered for maximum yield and grid compliance.",
    icon: <Sun className="w-8 h-8 text-brand-orange" />,
    specs: [
      "Tier-1 monocrystalline half-cut cells",
      "Structural wind-load certifications",
      "Net-metering & grid integration setup",
      "Residential & large commercial designs",
    ],
  },
  {
    title: "Battery Storage",
    desc: "Integrated high-capacity lithium iron phosphate (LFP) energy storage systems.",
    icon: <BatteryCharging className="w-8 h-8 text-brand-red" />,
    specs: [
      "24/7 power backup & load shifting",
      "Hybrid & off-grid smart inverters",
      "Scalable modular battery racks",
      "Real-time charge/discharge telemetry",
    ],
  },
  {
    title: "Maintenance & Care",
    desc: "Routine testing, panel cleaning, and health-check optimizations.",
    icon: <Wrench className="w-8 h-8 text-brand-orange" />,
    specs: [
      "Thermal mapping hot-spot scans",
      "High-pressure demineralized washing",
      "Inverter diagnostic tests",
      "Fast response on-site callouts",
    ],
  },
  {
    title: "Energy Auditing",
    desc: "Detailed electricity profiling and load diagnostics to reduce baseline overheads.",
    icon: <Zap className="w-8 h-8 text-brand-red" />,
    specs: [
      "Historical bill consumption analyses",
      "Peak demand logging diagnostics",
      "Power factor correction mapping",
      "ROI projection modeling",
    ],
  },
];

const processSteps = [
  { step: "01", name: "Audit & Scoping", desc: "We review your electrical bills, structural drawings, and peak load requirements." },
  { step: "02", name: "Custom Engineering", desc: "Our engineers construct 3D layouts, shadow paths, and load calculations." },
  { step: "03", name: "Precision Assembly", desc: "Our certified technicians set up brackets, secure panel strings, and mount battery banks." },
  { step: "04", name: "Grid Sync & Care", desc: "We coordinate net-metering approvals with power utilities and activate 24/7 telemetry." },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent pt-28 sm:pt-36 pb-20 overflow-hidden text-gray-900 dark:text-white">
      {/* Background radial blurs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-brand-red/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-[300px] h-[300px] bg-brand-orange/5 blur-[100px] pointer-events-none" />

      {/* Page Header Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 mb-16"
      >
        <section className="relative h-[240px] sm:h-[300px] rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/5 shadow-md">
          {/* Background Image Banner */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/rooftop_solar.png"
              alt="Services banner"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55 dark:bg-black/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full h-full flex flex-col justify-end p-8 sm:p-12 space-y-3 text-white">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-orange block w-fit">
              Solutions Suite
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Our <span className="text-brand-orange">Services</span>
            </h1>
            <p className="max-w-2xl text-white/80 font-light text-xs sm:text-sm leading-relaxed">
              High-performance engineering designed to cut energy costs.
            </p>
          </div>
        </section>
      </motion.div>

      {/* Services Grid */}
      <section className="py-24 relative z-10 border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
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
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
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

                  <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white tracking-tight">{s.title}</h2>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">{s.desc}</p>
                  
                  {/* Specs List */}
                  <ul className="space-y-3 pt-4 border-t border-gray-200 dark:border-white/5">
                    {s.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs text-gray-700 dark:text-gray-300 font-light">
                        <CheckCircle2 size={16} className="text-brand-orange shrink-0" />
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
            className="grid md:grid-cols-4 gap-8"
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
                {/* Step badge */}
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