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
    <div className="fixed inset-0 z-[-2] h-full w-full bg-[#0A1228] overflow-hidden pointer-events-none">
      {/* Deep structural grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M59 0H0V1H59V0ZM60 1V60H59V1H60Z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Abstract geometric forms */}
      <motion.div
        animate={{
          rotate: [0, 90, 180, 270, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] border border-[#131C31] rounded-full opacity-40 mix-blend-overlay"
      />

      <motion.div
        animate={{
          rotate: [360, 270, 180, 90, 0],
          x: ["0%", "-5%", "0%"],
        }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-30%] left-[-20%] w-[80%] h-[80%] bg-gradient-to-br from-[#0F172A] to-transparent opacity-60 rounded-[100px] rotate-45"
      />
      
      {/* Subtle corner light */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-gradient-to-bl from-surface/5 to-transparent blur-[100px]" />
    </div>
  );
};
