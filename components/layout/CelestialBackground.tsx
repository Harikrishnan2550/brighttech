"use client";

import { useEffect, useState } from "react";

interface Star {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
}

export default function CelestialBackground() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [stars, setStars] = useState<Star[]>([]);

  // Monitor theme switch mutations on html tag
  useEffect(() => {
    setIsDarkTheme(document.documentElement.classList.contains("dark"));
    
    const observer = new MutationObserver(() => {
      setIsDarkTheme(document.documentElement.classList.contains("dark"));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    
    return () => observer.disconnect();
  }, []);

  // Generate stars array on client mount only to prevent Next.js hydration warnings
  useEffect(() => {
    if (!isDarkTheme) return;

    // Generate stars only if dark theme is active, to save resources
    const generatedStars = Array.from({ length: 65 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 1.8 + 0.6,
      delay: Math.random() * 6
    }));
    setStars(generatedStars);
  }, [isDarkTheme]);

  if (!isDarkTheme) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-1000">
      {/* Violet & Night Sky Blue Ambient Glow Nebulas */}
      <div className="absolute top-10 right-10 w-[700px] h-[700px] rounded-full dark-glow-violet blur-[140px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-20 left-10 w-[600px] h-[600px] rounded-full dark-glow-blue blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full dark-glow-violet blur-[130px] opacity-40 pointer-events-none z-0" />

      {/* Stars particles */}
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            "--twinkle-duration": `${Math.random() * 3 + 2}s`
          } as React.CSSProperties}
        />
      ))}

      {/* Shooting comets (passing shooting stars) */}
      <div className="comet" style={{ left: "15%", top: "10%", "--comet-duration": "10s" } as React.CSSProperties} />
      <div className="comet" style={{ left: "45%", top: "5%", "--comet-duration": "14s", animationDelay: "3s" } as React.CSSProperties} />
      <div className="comet" style={{ left: "70%", top: "20%", "--comet-duration": "8s", animationDelay: "6s" } as React.CSSProperties} />
      <div className="comet" style={{ left: "30%", top: "60%", "--comet-duration": "12s", animationDelay: "8s" } as React.CSSProperties} />
      <div className="comet" style={{ left: "80%", top: "75%", "--comet-duration": "9s", animationDelay: "11s" } as React.CSSProperties} />
    </div>
  );
}
