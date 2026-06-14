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
              <Sun size={20} className="text-[#1A1816] dark:text-white animate-spin-slow" />
              <span className="text-lg font-bold tracking-wider text-[#1A1816] dark:text-white uppercase font-heading">
                Solaris
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-white/70 font-light">
              Powering homes, businesses, and industries across India with high-efficiency next-generation solar energy systems. Est. 2010.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
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
                    className="hover:text-[#1A1816] dark:hover:text-white transition-colors duration-200 flex items-center gap-1.5 group text-gray-500 dark:text-white/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#1A1816] dark:bg-white scale-0 group-hover:scale-100 transition-transform duration-200" />
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
                <MapPin size={18} className="text-gray-500 dark:text-white/80 shrink-0 mt-0.5" />
                <span className="text-gray-500 dark:text-white/70">
                  Brighttech Solar Plaza, Suite 402, NH-66 Bypass, Kochi, Kerala, India
                </span>
              </li>
              <li className="flex items-center gap-3.5">
                <Phone size={18} className="text-gray-500 dark:text-white/80 shrink-0" />
                <a href="tel:+914842500600" className="hover:text-[#1A1816] dark:hover:text-white transition-colors text-gray-500 dark:text-white/70">
                  +91 484 2500 600
                </a>
              </li>
              <li className="flex items-center gap-3.5">
                <Mail size={18} className="text-gray-500 dark:text-white/80 shrink-0" />
                <a href="mailto:info@brighttechsolar.com" className="hover:text-[#1A1816] dark:hover:text-white transition-colors text-gray-500 dark:text-white/70">
                  info@brighttechsolar.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div>
            <h4 className="text-xs font-semibold text-gray-800 dark:text-white uppercase tracking-wider mb-6">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-500 dark:text-white/70 mb-4 leading-relaxed font-light">
              Subscribe to receive updates on solar technology, energy savings, and recent projects.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 text-gray-800 dark:text-white text-sm rounded-xl py-3 px-4 outline-none focus:border-[#1A1816] dark:focus:border-white focus:bg-white/10 dark:focus:bg-white/15 transition-all placeholder:text-gray-400 dark:placeholder:text-white/40"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1A1816] dark:bg-white text-white dark:text-[#1A1816] py-3 rounded-xl text-xs font-bold uppercase tracking-wider hover:bg-[#1A1816]/90 dark:hover:bg-white/90 active:scale-98 transition-all cursor-pointer"
              >
                Subscribe
              </button>
            </form>
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
                className="hover:text-[#1A1816] dark:hover:text-white transition-colors font-medium underline decoration-dotted whitespace-nowrap"
              >
                winshine infotech
              </a>
            </span>
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1A1816] dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1A1816] dark:hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}