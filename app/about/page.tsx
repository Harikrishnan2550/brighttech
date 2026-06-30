"use client";

import Image from "next/image";
import { Leaf, Eye, Heart, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-brand-orange" />,
      title: "Sustainable Longevity",
      desc: "Committed to driving permanent, zero-emission engineering transformations across domestic and commercial landscapes."
    },
    {
      icon: <Eye className="w-6 h-6 text-brand-red" />,
      title: "Absolute Integrity",
      desc: "Transparent diagnostic audits, data-backed scoping parameters, and strict zero-hidden-clause engineering policies."
    },
    {
      icon: <Heart className="w-6 h-6 text-brand-orange" />,
      title: "Customised Engineering",
      desc: "Bespoke, high-yield alternative energy systems architectural solutions tailored specifically to structural configurations."
    }
  ];

  const milestones = [
    { year: "Legacy", title: "Enterprise Inception", desc: "Established structural root operations providing specialized localized residential energy engineering across Kerala." },
    { year: "Growth", title: "Commercial Capacity Scaling", desc: "Launched dedicated high-voltage commercial & institutional engineering arms, broadening corporate load capacities." },
    { year: "Milestone", title: "2000+ Live Installations", desc: "Successfully scaled past 2,000 active residential and commercial physical deployments across the state network." },
    { year: "2026", title: "Proprietary Ecosystem Launch", desc: "Expanded in-house production lines for EDIX & XL PLUS high-performance energy inverter arrays." }
  ];

  return (
    <main className="min-h-screen bg-transparent pb-20 overflow-hidden text-gray-900 dark:text-white">
      {/* Background lights */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-brand-red/5 blur-[100px] pointer-events-none" />

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
            src="/images/luxury_solar_villa.png"
            alt="About us banner"
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
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tighter leading-none"
            >
              About <span className="text-brand-orange italic font-normal">Us</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl text-white/95 font-sans font-light text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-md mx-auto"
            >
              Welcome to Smart Energy Living. Delivering reliable, efficient, and exceptionally long-lasting customized power matrices across structural frameworks.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* ── CORE PAGE CONTENT CONTAINER ── */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Content Columns */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="py-20 border-b border-gray-200 dark:border-white/5"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-brand-orange">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-gray-900 dark:text-white">
                With Over 15 Years of Trusted Engineering Expertise
              </h2>
              <p className="text-gray-600 dark:text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                Brighttech Solar combines breakthrough technology, technical expertise, and continuous innovation to ensure every system performs at its absolute peak for decades to come. 
              </p>
              <p className="text-gray-600 dark:text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                Operating our central headquarters from Pulamanathole, Malappuram, we specialize in advanced solar plant designs, KSEB net-metering synchronization, and our proprietary line of high-durability sine wave inverters and UPS systems under the trusted **EDIX** and **XL PLUS** brands.
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
        <section className="py-24 border-b border-gray-200 dark:border-white/5">
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
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
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
        </section>

        {/* Timeline Milestones */}
        <section className="py-24">
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
              show: { opacity: 1, transition: { staggerChildren: 0.15 } }
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
        </section>

      </div>
    </main>
  );
}