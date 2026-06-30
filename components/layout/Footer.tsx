"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Sun } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 dark:bg-[#04030A] text-gray-600 dark:text-white/80 border-t border-black/5 dark:border-white/10 overflow-hidden transition-colors duration-500">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-black/[0.01] dark:bg-white/[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <Sun size={22} className="text-brand-orange animate-spin-slow shrink-0" />
              <span className="text-base font-extrabold tracking-wider text-[#1A1816] dark:text-white uppercase font-heading">
                Brighttech Solar
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-white/70 font-light">
              Bright Tech Group of Technologies handles premium customized renewable alternative installations, commercial grids, and high-efficiency smart storage systems. Invest once. Save for years.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" }, // Fixed: Swapped Compass back to already-imported Instagram
                { icon: <Linkedin size={18} />, href: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 rounded-xl bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 flex items-center justify-center text-gray-600 dark:text-white/70 hover:text-white dark:hover:text-[#1A1816] hover:bg-[#1A1816] dark:hover:bg-white hover:border-transparent transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm font-light">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Projects Gallery", href: "/gallery" },
                { name: "Contact & Support", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-orange dark:hover:text-brand-orange transition-colors duration-200 flex items-center gap-1.5 group text-gray-500 dark:text-white/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-orange scale-0 group-hover:scale-100 transition-transform duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3.5">
                <MapPin size={18} className="text-brand-orange shrink-0 mt-0.5" />
                <span className="text-gray-500 dark:text-white/70">
                  Bright Tech Group of Technologies,<br />
                  Pulamanathole, Malappuram,<br />
                  Kerala — 679323
                </span>
              </li>
              <li className="flex flex-col gap-2 font-light">
                <div className="flex items-center gap-3.5">
                  <Phone size={18} className="text-brand-orange shrink-0" />
                  <a href="tel:+914933267222" className="hover:text-brand-orange dark:hover:text-brand-orange transition-colors text-gray-500 dark:text-white/70">
                    04933 26 72 22
                  </a>
                </div>
                <div className="flex items-center gap-3.5 pl-8">
                  <a href="tel:+918893889977" className="hover:text-brand-orange dark:hover:text-brand-orange transition-colors text-gray-500 dark:text-white/70 font-semibold">
                    8893 88 99 77
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3.5">
                <Mail size={18} className="text-brand-orange shrink-0" />
                <a href="mailto:brighttechpower@gmail.com" className="hover:text-brand-orange dark:hover:text-brand-orange transition-colors text-gray-500 dark:text-white/70 break-all text-xs sm:text-sm">
                  brighttechpower@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Information Strip */}
          <div>
            <h4 className="text-xs font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-6">
              Our Vision
            </h4>
            <p className="text-sm text-gray-500 dark:text-white/70 mb-4 leading-relaxed font-light">
              Your Roof, Your Power Plant. Providing seamless grid synchronisations alongside premium component structures across households and industrial zones.
            </p>
            <div className="p-4 rounded-xl border border-dashed border-gray-200 dark:border-white/10 bg-gray-100/50 dark:bg-white/5 text-center">
              <span className="text-xs uppercase font-bold tracking-wider text-brand-orange block">
                Brands Ecosystem
              </span>
              <span className="text-xs text-gray-500 dark:text-white/60 font-light mt-1 block">
                EDIX &bull; XL PLUS
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Strip */}
      <div className="border-t border-black/5 dark:border-white/10 py-6 bg-black/[0.02] dark:bg-black/10 text-xs text-center text-gray-400 dark:text-white/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex flex-col items-center sm:flex-row sm:items-center justify-center gap-1 sm:gap-2 text-center">
            <span>© {new Date().getFullYear()} Brighttech Solar. All Rights Reserved.</span>
            <span className="hidden sm:inline text-gray-300 dark:text-white/20">•</span>
            <span>
              Developed by{" "}
              <a 
                href="https://winshineinfotech.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-brand-orange dark:hover:text-white transition-colors font-medium underline decoration-dotted whitespace-nowrap"
              >
                winshine infotech
              </a>
            </span>
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-orange dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-orange dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}