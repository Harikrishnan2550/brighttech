import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CelestialBackground from "@/components/layout/CelestialBackground";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Brighttech Solar",
  description: "Solar Energy Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable}`}
      >
        <CelestialBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}