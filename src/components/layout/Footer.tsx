"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="w-full py-10 mt-20 border-t border-white/10 relative z-10 bg-background/50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm text-white/50"> Status Online</span>
        </div>

        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} TweyaInc. All rights reserved.
        </p>

        <div className="text-sm text-white/50 flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};
