"use client";

import Image from "next/image";
import { Sparkles, Leaf, Eye, Heart, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-brand-orange" />,
      title: "Sustainability",
      desc: "Committed to driving zero-emission energy transitions across households and industries."
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-red" />,
      title: "Integrity & Transparency",
      desc: "Clear diagnostic energy audits, honest scoping, and no hidden maintenance clauses."
    },
    {
      icon: <Heart className="w-6 h-6 text-brand-orange" />,
      title: "Customer First",
      desc: "Tailored solar designs optimized for your specific power demands and structural layouts."
    }
  ];

  const milestones = [
    { year: "2010", title: "Company Founded", desc: "Started as a regional residential solar service in Kerala." },
    { year: "2015", title: "Commercial Expansion", desc: "Launched dedicated commercial & corporate engineering divisions." },
    { year: "2020", title: "40 MW Clean Energy", desc: "Crossed 40 Megawatts in cumulative clean energy grid integrations." },
    { year: "2026", title: "Smart Storage Launch", desc: "Partnered with next-gen battery manufacturers for residential ESS." }
  ];

  return (
    <main className="min-h-screen bg-transparent pt-28 sm:pt-36 pb-20 overflow-hidden text-gray-900 dark:text-white">
      {/* Background lights */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand-red/5 blur-[100px] pointer-events-none" />

      {/* Hero Banner */}
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
              src="/images/luxury_solar_villa.png"
              alt="About us banner"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/55 dark:bg-black/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 w-full h-full flex flex-col justify-end p-8 sm:p-12 space-y-3 text-white">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-widest w-fit">
              <Sparkles size={12} className="animate-pulse" />
              <span>Pioneering Solar Since 2010</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              About <span className="text-brand-orange">Us</span>
            </h1>
            <p className="max-w-2xl text-white/80 font-light text-xs sm:text-sm leading-relaxed">
              Harnessing the sun for high-performance, compliant clean energy grids.
            </p>
          </div>
        </section>
      </motion.div>

      {/* Content Columns */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="py-24 relative z-10 border-b border-gray-200 dark:border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold tracking-widest uppercase text-brand-orange">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-gray-900 dark:text-white">
              Powering Progress Through Sustainable Innovation
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              Brighttech Solar specializes in premium tier-1 solar panel integrations, smart batteries, and 24/7 monitoring. We focus on providing high return-on-investment systems engineered for local grid compliance.
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              From our main headquarters in Kochi, Kerala, we design custom systems suited for the varied climatic demands of Pan-India projects.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-red rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-500" />
            <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-black/20 dark:shadow-black/40">
              <Image
                src="/images/about.jpg"
                alt="Solar technician examining rooftop installation"
                fill
                className="object-cover"
                sizes="(max-w-1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>

        </div>
      </motion.section>

      {/* Core Values Section */}
      <section className="py-24 relative z-10 border-b border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-4 mb-20"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-brand-orange">Our Compass</span>
            <h2 className="text-4xl font-bold font-heading text-gray-900 dark:text-white">Core Values</h2>
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
            className="grid md:grid-cols-3 gap-8"
          >
            {values.map((v) => (
              <motion.div 
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                key={v.title} 
                className="p-8 rounded-3xl bg-gray-50/70 dark:bg-[#121212]/40 border border-gray-200 dark:border-white/5 space-y-6 shadow-sm dark:shadow-none"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/5 shadow-inner">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white tracking-tight">{v.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-4 mb-20"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-brand-orange">Our Journey</span>
            <h2 className="text-4xl font-bold font-heading text-gray-900 dark:text-white">Milestones & History</h2>
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
            className="relative border-l border-gray-200 dark:border-white/10 max-w-3xl mx-auto pl-8 sm:pl-12 space-y-12"
          >
            {milestones.map((m, idx) => (
              <motion.div 
                variants={{
                  hidden: { opacity: 0, x: -25 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                }}
                key={idx} 
                className="relative"
              >
                {/* Year dot trigger */}
                <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#080808] border-2 border-brand-orange flex items-center justify-center">
                  <Calendar size={10} className="text-brand-orange" />
                </div>
                <div className="space-y-2">
                  <span className="text-sm font-bold text-brand-orange tracking-widest uppercase">{m.year}</span>
                  <h3 className="text-xl font-bold font-heading text-gray-900 dark:text-white">{m.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 font-light leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}