"use client";

import { useState } from "react";
import api from "@/lib/api";
import { Mail, Phone, MapPin, Clock, Sparkles, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      await api.post("/contact", form);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.log(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-transparent pt-28 sm:pt-36 pb-20 relative overflow-hidden text-gray-900 dark:text-white">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-red/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 mb-16"
        >
          <span className="text-xs font-bold tracking-widest uppercase text-brand-orange block">
            Get In Touch
          </span>
          <h1 className="text-5xl sm:text-7xl font-bold font-heading text-gray-900 dark:text-white tracking-tight">
            Contact <span className="text-gradient-accent">Us</span>
          </h1>
          <p className="max-w-2xl text-gray-600 dark:text-gray-400 font-light text-base leading-relaxed">
            Have questions about solar panel configurations, pricing structures, or warranty returns? Send us a message and our engineers will respond within 24 hours.
          </p>
        </motion.div>

        {/* 2-Column Split */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column 1: Contact Form (Grid 7 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-red rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-500" />
            
            <div className="relative p-8 sm:p-10 rounded-3xl bg-gray-50/70 dark:bg-[#121212]/60 border border-gray-200 dark:border-white/5 backdrop-blur-md shadow-sm dark:shadow-none">
              <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white tracking-tight mb-8 flex items-center gap-2">
                Send a Message
                <Sparkles size={16} className="text-brand-orange" />
              </h2>

              {success && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-650 dark:text-emerald-400 text-sm">
                  Your message has been sent successfully! Our team will contact you shortly.
                </div>
              )}

              <form onSubmit={submitHandler} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-900 dark:text-white text-sm rounded-xl py-3.5 px-4 outline-none focus:border-brand-orange focus:bg-gray-100 dark:focus:bg-white/10 transition-all"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-900 dark:text-white text-sm rounded-xl py-3.5 px-4 outline-none focus:border-brand-orange focus:bg-gray-100 dark:focus:bg-white/10 transition-all"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-900 dark:text-white text-sm rounded-xl py-3.5 px-4 outline-none focus:border-brand-orange focus:bg-gray-100 dark:focus:bg-white/10 transition-all"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      placeholder="Solar consultation query"
                      className="w-full bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-900 dark:text-white text-sm rounded-xl py-3.5 px-4 outline-none focus:border-brand-orange focus:bg-gray-100 dark:focus:bg-white/10 transition-all"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">Your Message</label>
                  <textarea
                    rows={6}
                    placeholder="Provide details about your project or query..."
                    className="w-full bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-900 dark:text-white text-sm rounded-xl py-3.5 px-4 outline-none focus:border-brand-orange focus:bg-gray-100 dark:focus:bg-white/10 transition-all resize-none"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-brand-orange to-brand-red text-white py-4 rounded-xl text-xs font-semibold uppercase tracking-wider hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-brand-red/10"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Column 2: Details Card (Grid 5 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-gray-50/50 dark:bg-[#121212]/40 border border-gray-200 dark:border-white/5 space-y-8 shadow-sm dark:shadow-none">
              <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white tracking-tight">
                Corporate Office
              </h2>
              
              <ul className="space-y-6 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0 border border-gray-200 dark:border-white/5">
                    <MapPin size={18} className="text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Our Address</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                      Brighttech Solar Plaza, Suite 402, <br />
                      NH-66 Bypass, Kochi, Kerala, India
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0 border border-gray-200 dark:border-white/5">
                    <Phone size={18} className="text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Call Representative</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                      <a href="tel:+914842500600" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                        +91 484 2500 600
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0 border border-gray-200 dark:border-white/5">
                    <Mail size={18} className="text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email Support</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                      <a href="mailto:info@brighttechsolar.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                        info@brighttechsolar.com
                      </a>
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center shrink-0 border border-gray-200 dark:border-white/5">
                    <Clock size={18} className="text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Office Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                      Mon - Sat: 9:00 AM - 6:00 PM <br />
                      Sunday: Closed
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>

      </div>
    </main>
  );
}