"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { ZoomIn, X, ImageIcon } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  _id: string;
  title: string;
  category: string;
  image: string;
}

const FALLBACK_GALLERY: GalleryItem[] = [
  {
    _id: "fb1",
    title: "Vivid Solar Meadows",
    category: "Utility Scale",
    image: "/images/gallery1.jpg",
  },
  {
    _id: "fb2",
    title: "EcoTech Headquarters",
    category: "Commercial Roof",
    image: "/images/gallery2.jpg",
  },
  {
    _id: "fb3",
    title: "Ananthagiri Residency",
    category: "Residential Grid",
    image: "/images/gallery3.jpg",
  },
  {
    _id: "fb4",
    title: "Solar Backup Vault",
    category: "Battery Storage",
    image: "/images/gallery4.jpg",
  },
  {
    _id: "fb5",
    title: "Alpha Industrial Grid",
    category: "Commercial Roof",
    image: "/images/rooftop_solar.png",
  },
  {
    _id: "fb6",
    title: "Residential Smart Battery Stack",
    category: "Battery Storage",
    image: "/images/smart_battery_vault.png",
  },
  {
    _id: "fb7",
    title: "Coastal Villa Solar Array",
    category: "Residential Grid",
    image: "/images/luxury_solar_villa.png",
  },
];

const CATEGORIES = ["All", "Utility Scale", "Commercial Roof", "Residential Grid", "Battery Storage"];

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await api.get("/gallery");
      if (res.data && res.data.gallery && res.data.gallery.length > 0) {
        // Map backend path prefix to full url if needed
        const mapped = res.data.gallery.map((item: any) => ({
          ...item,
          image: item.image.startsWith("http") ? item.image : `http://localhost:5000${item.image}`,
        }));
        setGallery(mapped);
      } else {
        setGallery(FALLBACK_GALLERY);
      }
    } catch (error) {
      console.log("Failed to fetch gallery, using premium fallback portfolio items:", error);
      setGallery(FALLBACK_GALLERY);
    }
  };

  const filteredGallery = selectedCategory === "All"
    ? gallery
    : gallery.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <main className="min-h-screen bg-transparent pt-28 sm:pt-36 pb-20 relative overflow-hidden text-gray-900 dark:text-white">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/5 blur-[100px] pointer-events-none" />

      {/* Hero Banner Section */}
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
              src="/images/gallery2.jpg"
              alt="Gallery banner"
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
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Projects <span className="text-brand-orange">Gallery</span>
            </h1>
            <p className="max-w-2xl text-white/80 font-light text-xs sm:text-sm leading-relaxed">
              Explore our completed rooftop setups, hybrid systems, and commercial integrations.
            </p>
          </div>
        </section>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mb-14"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-brand-orange to-brand-red text-white shadow-md shadow-brand-red/15"
                  : "bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredGallery.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item._id}
                onClick={() => setLightboxImage(item.image)}
                className="group cursor-pointer relative h-[320px] rounded-3xl overflow-hidden bg-gray-100 dark:bg-[#121212] border border-gray-200 dark:border-white/5 shadow-lg shadow-black/10 dark:shadow-black/20"
              >
                {/* Main image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-w-768px) 100vw, (max-w-1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-all duration-500 ease-out"
                />

                {/* Dark gradient mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 opacity-75 group-hover:opacity-85 transition-opacity" />

                {/* Actions & Labels */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xxs font-bold uppercase tracking-widest text-brand-orange mb-1.5 block">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold font-heading text-white tracking-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn size={16} className="text-brand-orange" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredGallery.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <ImageIcon size={48} className="text-gray-650 mx-auto" />
            <p className="text-gray-650 dark:text-gray-400">No projects found in this category.</p>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative w-full max-w-5xl h-[70vh] md:h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage}
                alt="Project inspection view"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}