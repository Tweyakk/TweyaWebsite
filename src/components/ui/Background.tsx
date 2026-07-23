"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Background = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-2] h-full w-full overflow-hidden pointer-events-none bg-[#0C0908]">
      {/* ========================================================
          LAYER 1: Very dark brown gradient covering the screen
          ======================================================== */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #0C0908 0%, #16100E 60%, #0C0908 100%)",
        }}
      />

      {/* ========================================================
          LAYER 2: Huge radial gradients blending softly (Low Opacity)
          ======================================================== */}
      {/* Top Left Base Glow */}
      <div 
        className="absolute top-0 left-0 w-[80vw] h-[80vh] rounded-full opacity-[0.12] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 20% 20%, #3A241A 0%, #241813 50%, transparent 100%)",
          filter: "blur(120px)",
        }}
      />
      {/* Bottom Right Base Glow */}
      <div 
        className="absolute bottom-0 right-0 w-[90vw] h-[90vh] rounded-full opacity-[0.15] pointer-events-none"
        style={{
          background: "radial-gradient(circle at 80% 80%, #5A3928 0%, #241813 60%, transparent 100%)",
          filter: "blur(140px)",
        }}
      />
      {/* Center Warm Ambient Base Glow */}
      <div 
        className="absolute top-[20%] left-[10%] w-[80vw] h-[60vh] rounded-full opacity-[0.08] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #7A543B 0%, #3A241A 70%, transparent 100%)",
          filter: "blur(160px)",
        }}
      />

      {/* ========================================================
          LAYER 3: Large blurry glossy blobs slowly floating (Framer Motion)
          ======================================================== */}
      {/* Blob A: Rich Chocolate / Accent Warm Glow */}
      <motion.div
        animate={{
          x: ["-10%", "15%", "-5%", "-10%"],
          y: ["-5%", "10%", "15%", "-5%"],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[20%] w-[55vw] h-[55vw] min-w-[450px] min-h-[450px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(122, 84, 59, 0.18) 0%, rgba(90, 57, 40, 0.08) 50%, transparent 80%)",
          filter: "blur(150px)",
        }}
      />

      {/* Blob B: Warm Dark Cocoa */}
      <motion.div
        animate={{
          x: ["10%", "-15%", "5%", "10%"],
          y: ["15%", "-5%", "-15%", "15%"],
          scale: [0.95, 1.1, 1.05, 0.95],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[15%] right-[10%] w-[60vw] h-[60vw] min-w-[500px] min-h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(90, 57, 40, 0.15) 0%, rgba(58, 36, 26, 0.05) 60%, transparent 85%)",
          filter: "blur(180px)",
        }}
      />

      {/* Blob C: Highlight Sheen Blob */}
      <motion.div
        animate={{
          x: ["-15%", "-5%", "15%", "-15%"],
          y: ["10%", "-15%", "10%", "10%"],
          scale: [1.05, 0.9, 1.15, 1.05],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] left-[50%] -translate-x-1/2 w-[50vw] h-[50vw] min-w-[400px] min-h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(122, 84, 59, 0.12) 0%, rgba(36, 24, 19, 0.04) 55%, transparent 75%)",
          filter: "blur(160px)",
        }}
      />

      {/* ========================================================
          LAYER 4: Large translucent glass reflections (subtle glass curvature)
          ======================================================== */}
      {/* Diagonal Glass Sweep Top-Left */}
      <motion.div
        animate={{
          x: ["-5%", "5%", "-5%"],
          y: ["-5%", "2%", "-5%"],
          rotate: [15, 17, 15],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[120vw] h-[45vh] pointer-events-none origin-top-left"
        style={{
          background: "linear-gradient(145deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.005) 40%, transparent 80%)",
          transform: "rotate(15deg)",
          filter: "blur(80px)",
        }}
      />

      {/* Curved Glass Refraction Ring (VisionOS inspired gloss edge) */}
      <motion.div
        animate={{
          scale: [1, 1.03, 1],
          opacity: [0.7, 0.85, 0.7],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[-20%] w-[140vw] h-[60vh] rounded-[1200px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 60%, rgba(255, 255, 255, 0.015) 75%, transparent 90%)",
          border: "1px solid rgba(255, 255, 255, 0.006)",
          filter: "blur(30px)",
        }}
      />

      {/* Bottom Right Ambient Glass Reflection */}
      <motion.div
        animate={{
          x: ["5%", "-5%", "5%"],
          y: ["5%", "-2%", "5%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-15%] right-[-15%] w-[80vw] h-[40vh] pointer-events-none"
        style={{
          background: "radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.02) 0%, rgba(122, 84, 59, 0.03) 40%, transparent 80%)",
          filter: "blur(100px)",
        }}
      />

      {/* ========================================================
          LAYER 5: Very subtle noise/grain texture
          ======================================================== */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};
