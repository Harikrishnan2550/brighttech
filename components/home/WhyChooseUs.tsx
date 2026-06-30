"use client";

import { useRef, useState, useEffect } from "react";
import { Cpu, ShieldCheck, Award, Leaf } from "lucide-react";
import { motion, Variants, useInView } from "framer-motion";

function CircularProgress({ percent, strokeColor = "#E30613" }: { percent: number; strokeColor?: string }) {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <svg className="w-14 h-14 transform -rotate-90 shrink-0" viewBox="0 0 50 50">
      <circle
        cx="25"
        cy="25"
        r={radius}
        fill="none"
        stroke="rgba(227, 6, 19, 0.08)"
        strokeWidth="3"
      />
      <motion.circle
        ref={ref}
        cx="25"
        cy="25"
        r={radius}
        fill="none"
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={inView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </svg>
  );
}

const features = [
  {
    icon: <Cpu className="w-5 h-5 text-[#B5050C] dark:text-[#E30613]" />,
    percent: 100,
    strokeColor: "#E30613",
    title: "Premium Hardware",
    desc: "Deploying tier-1 passivated solar matrices combined with our own certified EDIX & XL PLUS inverters."
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-[#B5050C] dark:text-[#E30613]" />,
    percent: 100,
    strokeColor: "#B5050C",
    title: "KSEB Sync Support",
    desc: "Complete end-to-end liaison management for seamless net-metering synchronization and lightning fast regulatory approvals."
  },
  {
    icon: <Award className="w-5 h-5 text-[#B5050C] dark:text-[#E30613]" />,
    percent: 100,
    strokeColor: "#E30613",
    title: "ISO 9001 Certified",
    desc: "Rigorous corporate structural execution parameters conforming to strict international quality standards management guidelines."
  },
  {
    icon: <Leaf className="w-5 h-5 text-[#B5050C] dark:text-[#E30613]" />,
    percent: 96,
    strokeColor: "#B5050C",
    title: "After-Sales Care",
    desc: "A wide-reaching technical support grid deployed across Kerala, providing rapid-response system audits and health care checks."
  }
];

export default function WhyChooseUs() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDarkTheme(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="py-36 bg-white dark:bg-transparent text-[#1A1816] dark:text-white relative overflow-hidden border-t border-gray-100 dark:border-white/10 transition-colors duration-500">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#E30613]/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-24">
          <span className="text-xs font-heading font-bold tracking-widest uppercase text-[#B5050C] dark:text-[#E30613] block">
            Why Trust Our Systems
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-[#1A1816] dark:text-white leading-tight">
            Delivering Reliable Futures <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5050C] to-[#E30613] italic font-heading font-normal">With Innovation</span>
          </h2>
          <p className="text-gray-600 dark:text-white/70 font-sans font-light text-base sm:text-lg">
            Over 16 years of dedicated engineering expertise across Kerala, establishing premium and durable alternative power infrastructure.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{ 
                y: -6,
                borderColor: "rgba(227, 6, 19, 0.45)",
                boxShadow: "0 20px 40px -15px rgba(227, 6, 19, 0.12)"
              }}
              style={{ y: index % 2 === 0 ? 0 : 20 }}
              className="group relative rounded-[2rem] p-8 border transition-all duration-300 flex flex-col justify-between h-[340px] cursor-pointer premium-glass"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E30613]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-[#E30613]/5 dark:bg-white/10 border border-[#E30613]/15 dark:border-white/10 flex items-center justify-center group-hover:scale-105 group-hover:bg-[#E30613]/10 transition-all duration-300">
                  {item.icon}
                </div>
                <CircularProgress percent={item.percent} strokeColor={item.strokeColor} />
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <h3 className="text-lg font-heading font-extrabold text-[#1A1816] dark:text-white tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono text-[#B5050C] dark:text-[#E30613] font-bold">
                    {item.percent}%
                  </span>
                </div>

                <p className="text-xs text-gray-500 dark:text-white/60 leading-relaxed font-sans font-light">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}