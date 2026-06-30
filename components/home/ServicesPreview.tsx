"use client";

import Link from "next/link";
import Image from "next/image";
import { Sun, BatteryCharging, Wrench, ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    num: "01",
    title: "On-Grid & Off-Grid Solar Plants",
    tag: "High-Yield Photovoltaics",
    desc: "Custom engineered alternative power integrations designed for residential complexes, industrial locations, and estates. Complete with structure layout scoping and full KSEB net-metering approvals management.",
    icon: <Sun className="w-5 h-5 text-[#B5050C] dark:text-[#FF3B30]" />,
    image: "/images/gallery1.jpg",
    alignment: "left"
  },
  {
    num: "02",
    title: "Advanced Lithium Storage Labs",
    tag: "Decentralised Energy Networks",
    desc: "Integrate high-density lithium cell storage frameworks to manage uninterrupted energy flow. Fully configured to shave structural overheads during peak utility hours and counter grid power dropouts.",
    icon: <BatteryCharging className="w-5 h-5 text-[#B5050C] dark:text-[#FF3B30]" />,
    image: "/images/gallery4.jpg",
    alignment: "right"
  },
  {
    num: "03",
    title: "Inhouse Inverters & UPS Lines",
    tag: "Proprietary Power Hardware",
    desc: "We engineer and maintain our own premium pure sine wave inverters and heavy-duty UPS options under the trusted EDIX and XL PLUS brand setups, ensuring seamless macrosecond response times and long warranty protection.",
    icon: <Wrench className="w-5 h-5 text-[#B5050C] dark:text-[#FF3B30]" />,
    image: "/images/about.jpg",
    alignment: "left"
  }
];

export default function ServicesPreview() {
  return (
    <section className="bg-white dark:bg-transparent py-32 relative overflow-hidden border-t border-gray-100 dark:border-brand-red/20 transition-colors duration-500">
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#E30613]/[0.03] dark:bg-[#FF3B30]/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4 mb-24">
          <span className="text-xs font-heading font-bold tracking-widest uppercase text-[#B5050C] dark:text-[#E30613] block">
            Core Solutions Ecosystem
          </span>
          <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-[#1A1816] dark:text-white leading-tight">
            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5050C] to-[#E30613] dark:from-[#FF3B30] dark:to-[#910208] italic font-heading font-normal">Solar Suites</span>
          </h2>
          <p className="text-gray-600 dark:text-white/70 font-sans font-light text-base sm:text-lg">
            Providing tailored transitions into clean energy frameworks through structural master planning, precision engineering, and ongoing lifecycle protection.
          </p>
        </div>

        {/* Asymmetrical Alternating Services Stack */}
        <div className="space-y-32">
          {SERVICES.map((service, index) => {
            const isLeft = service.alignment === "left";
            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Visual Image Block */}
                <div 
                  className={`lg:col-span-6 relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200/50 dark:border-brand-red/10 group cursor-pointer ${
                    isLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-transparent transition-colors duration-300" />
                  
                  <div className="absolute top-6 left-6 w-12 h-12 premium-glass backdrop-blur-md rounded-full flex items-center justify-center font-heading font-extrabold text-[#E30613] dark:text-[#FF3B30] text-lg border shadow-md">
                    {service.num}
                  </div>
                </div>

                {/* Text Description Block */}
                <div 
                  className={`lg:col-span-6 space-y-6 ${
                    isLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#B5050C] dark:text-[#E30613] font-heading font-bold">
                      <div className="w-8 h-[1px] bg-[#B5050C] dark:bg-[#E30613]" />
                      <span className="text-xxs font-heading font-extrabold uppercase tracking-[0.25em]">{service.tag}</span>
                    </div>
                    
                    <h3 className="text-3.5xl sm:text-4xl font-heading font-extrabold text-[#1A1816] dark:text-white tracking-tight leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-white/70 font-sans font-light text-base sm:text-lg leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-2.5 text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#1A1816] dark:text-white hover:text-[#B5050C] dark:hover:text-[#E30613] transition-all group relative pb-1.5"
                    >
                      <span>Explore Suite</span>
                      <ArrowUpRight size={14} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#B5050C] dark:text-[#E30613]" />
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#B5050C] to-[#E30613] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Row */}
        <div className="text-center mt-28 border-t border-gray-200/60 dark:border-white/10 pt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#1A1816] dark:text-white group bg-[#1A1816]/5 dark:bg-white/5 border border-gray-200 dark:border-brand-red/10 hover:border-[#1A1816] dark:hover:border-white hover:bg-[#1A1816] dark:hover:bg-white hover:text-white dark:hover:text-[#1A1816] px-8 py-4 rounded-xl transition-all duration-300"
          >
            View All Services Suite
            <ArrowRight size={14} className="text-[#B5050C] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}