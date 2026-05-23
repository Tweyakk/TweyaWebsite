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
    <div className="fixed inset-0 z-[-2] h-full w-full bg-background overflow-hidden pointer-events-none">
      {/* Ambient Glow */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-background bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      
      {/* Grid Pattern with slight parallax effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,rgba(255,255,255,0)_1px),linear-gradient(to_bottom,#80808012_1px,rgba(255,255,255,0)_1px)] bg-[size:24px_24px]"
      ></motion.div>
      
      {/* Moving gradient orbs for cinematic depth using Framer Motion */}
      <motion.div 
        animate={{
          x: ["0%", "5%", "-5%", "0%"],
          y: ["0%", "-5%", "5%", "0%"],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px] mix-blend-screen"
      ></motion.div>
      
      <motion.div 
        animate={{
          x: ["0%", "-5%", "5%", "0%"],
          y: ["0%", "5%", "-5%", "0%"],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px] mix-blend-screen"
      ></motion.div>
    </div>
  );
};
