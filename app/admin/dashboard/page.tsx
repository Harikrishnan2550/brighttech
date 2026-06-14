"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getGallery, deleteGallery } from "@/services/galleryService";
import { Sun, LogOut, Trash2, FolderOpen, Image as ImageIcon, Layers, Wifi, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const router = useRouter();
  const [gallery, setGallery] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiOnline, setApiOnline] = useState(true);

  useEffect(() => {
    // Check auth
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
      return;
    }
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const data = await getGallery();
      setGallery(data.gallery);
      setApiOnline(true);
    } catch (err) {
      console.error("API error during gallery fetch: ", err);
      setApiOnline(false);
    } finally {
      setLoading(false);
    }
  };

  const deleteHandler = async (id: string) => {
    if (!confirm("Are you sure you want to delete this gallery item?")) return;

    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    try {
      await deleteGallery(id, token);
      fetchGallery();
    } catch (err) {
      console.error(err);
      alert("Failed to delete item.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  return (
    <main className="min-h-screen bg-transparent text-gray-700 dark:text-gray-300 relative overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] pointer-events-none" />

      {/* Header bar */}
      <header className="border-b border-gray-200 dark:border-white/5 bg-white/80 dark:bg-[#121212]/40 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-red to-brand-orange flex items-center justify-center">
              <Sun size={18} className="text-white animate-pulse-slow" />
            </div>
            <span className="text-sm font-bold text-gray-900 dark:text-white font-heading uppercase tracking-widest">
              Solaris Admin
            </span>
          </Link>
          
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:text-brand-red hover:bg-brand-red/10 hover:border-brand-red/25 transition-all cursor-pointer"
          >
            <span>Log Out</span>
            <LogOut size={14} />
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-12 px-6 space-y-10 relative z-10">
        
        {/* Title & Connection Status */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-heading text-gray-900 dark:text-white tracking-tight">
              Console Control
            </h1>
            <p className="text-sm text-gray-500 font-light mt-1">Manage project portfolios and customer submissions.</p>
          </div>
          
          {/* Server Indicator */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider ${
            apiOnline 
              ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400" 
              : "bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400"
          }`}>
            <Wifi size={14} className={apiOnline ? "animate-pulse" : ""} />
            <span>{apiOnline ? "API Engine Online" : "Using Static Portfolio"}</span>
          </div>
        </div>

        {/* Metric widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#121212]/50 border border-gray-200 dark:border-white/5 flex items-center gap-4 shadow-sm dark:shadow-none">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center border border-brand-orange/10 text-brand-orange shrink-0">
              <ImageIcon size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white font-heading">{gallery.length}</p>
              <p className="text-xxs uppercase tracking-wider text-gray-500 font-medium mt-0.5">Gallery Projects</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-[#121212]/50 border border-gray-200 dark:border-white/5 flex items-center gap-4 shadow-sm dark:shadow-none">
            <div className="w-12 h-12 rounded-xl bg-brand-red/10 flex items-center justify-center border border-brand-red/10 text-brand-red shrink-0">
              <Layers size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white font-heading">
                {new Set(gallery.map(item => item.category)).size}
              </p>
              <p className="text-xxs uppercase tracking-wider text-gray-500 font-medium mt-0.5">Active Categories</p>
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-[#121212]/50 border border-gray-200 dark:border-white/5 flex items-center gap-4 shadow-sm dark:shadow-none">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/10 text-emerald-500 dark:text-emerald-400 shrink-0">
              <ShieldAlert size={20} />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white font-heading">Secure</p>
              <p className="text-xxs uppercase tracking-wider text-gray-500 font-medium mt-0.5">SSL Protocol Active</p>
            </div>
          </div>
        </div>

        {/* Data Card Wrapper */}
        <div className="rounded-3xl bg-white dark:bg-[#121212]/40 border border-gray-200 dark:border-white/5 overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/40">
          
          <div className="p-6 border-b border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-[#121212]/20 flex items-center justify-between">
            <h3 className="font-bold text-gray-900 dark:text-white tracking-tight flex items-center gap-2">
              <FolderOpen size={16} className="text-brand-orange" />
              <span>Project Inventory</span>
            </h3>
          </div>

          {loading ? (
            <div className="py-20 text-center text-sm text-gray-500">
              Loading inventory records...
            </div>
          ) : gallery.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-white/5 bg-gray-50/30 dark:bg-white/2 text-xxs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                    <th className="p-6">Thumbnail</th>
                    <th className="p-6">Project Title</th>
                    <th className="p-6">Category Classification</th>
                    <th className="p-6 text-right">Operations</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                  {gallery.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50/50 dark:hover:bg-white/2 transition-colors">
                      <td className="p-6">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-sm">
                          <img
                            src={item.image}
                            alt=""
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback for broken uploads
                              (e.target as HTMLImageElement).src = "/images/gallery1.jpg";
                            }}
                          />
                        </div>
                      </td>
                      <td className="p-6 font-semibold text-gray-900 dark:text-white tracking-tight">
                        {item.title}
                      </td>
                      <td className="p-6 text-sm">
                        <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-6 text-right">
                        <button
                          onClick={() => deleteHandler(item._id)}
                          className="inline-flex items-center justify-center w-9 h-9 rounded-xl text-gray-400 dark:text-gray-400 hover:text-white hover:bg-brand-red bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5 transition-all cursor-pointer"
                          aria-label={`Delete ${item.title}`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-20 text-center space-y-4">
              <ImageIcon size={36} className="text-gray-600 mx-auto" />
              <p className="text-gray-500 dark:text-gray-400">Inventory is empty.</p>
            </div>
          )}
        </div>
        
      </div>
    </main>
  );
}