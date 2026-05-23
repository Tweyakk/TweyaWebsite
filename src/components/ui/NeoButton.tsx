"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface NeoButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "glass" | "icon";
  size?: "sm" | "md" | "lg" | "icon";
}

const NeoButton = forwardRef<HTMLButtonElement, NeoButtonProps>(
  ({ children, className, variant = "primary", size = "md", ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg overflow-hidden";
    
    const variants = {
      primary: "bg-foreground text-background border-2 border-transparent hover:bg-white hover:text-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.25)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none",
      secondary: "bg-surface text-foreground border-2 border-white/10 hover:border-white/30 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.2)] hover:-translate-y-1 hover:-translate-x-1 active:translate-y-0 active:translate-x-0 active:shadow-none",
      glass: "bg-white/5 backdrop-blur-md border border-white/10 text-foreground hover:bg-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05),0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[inset_0_0_30px_rgba(255,255,255,0.1),0_8px_40px_rgba(0,0,0,0.6)]",
      icon: "bg-surface/50 text-foreground border border-white/10 hover:bg-white/10 backdrop-blur-sm rounded-full",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      icon: "p-3",
    };

    return (
      <motion.button
        ref={ref}
        layout
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[rgba(255,255,255,0)] via-white/10 to-[rgba(255,255,255,0)] -translate-x-[100%] group-hover:animate-[shimmer_1.5s_infinite]" />
      </motion.button>
    );
  }
);

NeoButton.displayName = "NeoButton";

export { NeoButton };
