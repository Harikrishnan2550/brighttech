"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/services/authService";
import { Lock, User, Sun, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    try {
      setLoading(true);
      const data = await loginAdmin(form.username, form.password);
      localStorage.setItem("token", data.token);
      router.push("/admin/dashboard");
    } catch (error) {
      console.error(error);
      setErrorMsg("Invalid username or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-transparent px-6 relative overflow-hidden text-gray-900 dark:text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-brand-red/5 blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md relative group">
        {/* Glow border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-brand-red rounded-3xl blur opacity-15 group-hover:opacity-25 transition duration-500" />
        
        {/* Card */}
        <div className="relative bg-white dark:bg-[#121212]/80 border border-gray-200 dark:border-white/5 p-10 rounded-3xl backdrop-blur-md shadow-2xl shadow-black/10 dark:shadow-black/60">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <Link href="/" className="inline-flex items-center gap-2.5 mx-auto group-hover:scale-105 transition-transform duration-300">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-red to-brand-orange flex items-center justify-center">
                <Sun size={20} className="text-white animate-pulse-slow" />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white font-heading">
                Brighttech <span className="text-brand-orange">Solar</span>
              </span>
            </Link>
            <h1 className="text-2xl font-bold font-heading text-gray-900 dark:text-white tracking-tight">
              Console Control
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-widest flex items-center justify-center gap-1.5">
              <ShieldCheck size={12} className="text-brand-orange" />
              <span>Security Portal</span>
            </p>
          </div>

          {errorMsg && (
            <div className="mb-6 p-4 rounded-xl bg-brand-red/10 border border-brand-red/20 text-brand-red text-xs text-center">
              {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={submitHandler} className="space-y-5">
            
            {/* Username Input */}
            <div className="space-y-1.5">
              <label className="text-xxs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Username</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 dark:text-gray-500">
                  <User size={16} />
                </span>
                <input
                  type="text"
                  placeholder="admin_id"
                  className="w-full bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-900 dark:text-white text-sm rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-brand-orange focus:bg-gray-100 dark:focus:bg-white/10 transition-all font-light"
                  value={form.username}
                  onChange={(e) => setForm({ ...form, username: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-1.5">
              <label className="text-xxs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400 dark:text-gray-500">
                  <Lock size={16} />
                </span>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-100/50 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-900 dark:text-white text-sm rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-brand-orange focus:bg-gray-100 dark:focus:bg-white/10 transition-all font-light"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-brand-orange to-brand-red text-white py-4 rounded-xl text-xs font-semibold uppercase tracking-wider hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shadow-md shadow-brand-red/10"
            >
              {loading ? (
                <span>Verifying credentials...</span>
              ) : (
                <>
                  <span>Sign In</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>

          </form>

        </div>
      </div>
    </main>
  );
}