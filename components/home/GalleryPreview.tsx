"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    image: "/images/gallery1.jpg",
    title: "Vivid Solar Meadows",
    category: "Utility Scale",
    specs: "40 MW Tracker Grid"
  },
  {
    image: "/images/gallery2.jpg",
    title: "EcoTech Headquarters",
    category: "Commercial Roof",
    specs: "350 kW Smart Array"
  },
  {
    image: "/images/gallery3.jpg",
    title: "Ananthagiri Residency",
    category: "Residential Grid",
    specs: "15 kW Net Meter System"
  },
  {
    image: "/images/gallery4.jpg",
    title: "Solar Backup Vault",
    category: "Battery Storage",
    specs: "100 kWh Tesla Pack"
  }
];

export default function GalleryPreview() {
  return (
    <section className="py-36 relative bg-white dark:bg-transparent overflow-hidden border-t border-gray-100 dark:border-white/10 transition-colors duration-500">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#E30613]/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20">
          <div className="space-y-4">
            <span className="text-xs font-heading font-bold tracking-widest uppercase text-[#B5050C] dark:text-[#E30613] block">
              Our Projects
            </span>
            <h2 className="text-4xl sm:text-5xl font-heading font-extrabold tracking-tight text-[#1A1816] dark:text-white leading-tight">
              Recent <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B5050C] to-[#E30613] italic font-heading font-normal">Installations</span>
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#1A1816] dark:text-white group bg-[#1A1816]/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-[#1A1816] dark:hover:border-white hover:bg-[#1A1816] dark:hover:bg-white hover:text-white dark:hover:text-[#1A1816] px-5 py-3.5 rounded-xl transition-all duration-300 cursor-pointer"
          >
            View Full Gallery
            <ArrowRight size={14} className="text-[#B5050C] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3D Perspective Grid Wrapper */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-1000">
          {PROJECTS.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -10,
                rotateX: 8,
                rotateY: -8,
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)"
              }}
              transition={{ type: "spring", stiffness: 150, damping: 18 }}
              style={{
                marginTop: idx % 2 === 0 ? "0px" : "24px"
              }}
              className="group relative h-[420px] overflow-hidden rounded-[2rem] bg-[#121212] border border-gray-200/50 dark:border-white/10 shadow-2xl cursor-pointer"
            >
              {/* Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-w-768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Light overlay mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-white/10 opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Info Block overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <span className="text-[9px] font-heading font-extrabold uppercase tracking-[0.2em] text-black bg-white/80 px-4.5 py-2 rounded-full border border-black/10 w-fit backdrop-blur-md">
                  {item.category}
                </span>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-sans text-black/60 uppercase tracking-widest">{item.specs}</p>
                    <h3 className="text-xl font-heading font-extrabold text-black tracking-wide leading-none">
                      {item.title}
                    </h3>
                  </div>

                  {/* Trigger tag */}
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 font-sans">
                    <span className="w-8 h-8 rounded-full bg-black/5 border border-black/10 flex items-center justify-center">
                      <Eye size={14} className="text-black" />
                    </span>
                    <span>Explore</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}