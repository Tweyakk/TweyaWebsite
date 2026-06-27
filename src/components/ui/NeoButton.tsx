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
    // Removed `transition-all` and `duration-300` to prevent Framer Motion warnings.
    // Handling hover scaling purely via motion's whileHover & whileTap.
    const baseStyles = "relative inline-flex items-center justify-center font-bold overflow-hidden select-none outline-none focus:ring-2 focus:ring-surface focus:ring-offset-2 focus:ring-offset-background border-[3px]";

    const variants = {
      primary: "bg-surface text-[#0A1228] border-[#0A1228] rounded-xl shadow-neo hover:bg-white active:shadow-neo-active",
      secondary: "bg-[#0A1228] text-surface border-surface rounded-xl shadow-neo-light hover:bg-[#0F172A] active:shadow-neo-active",
      glass: "bg-transparent text-surface border-surface rounded-xl hover:bg-surface/10",
      icon: "bg-surface text-[#0A1228] border-[#0A1228] rounded-xl shadow-neo hover:bg-white active:shadow-neo-active",
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
        whileHover={{
          x: variant !== "glass" ? -2 : 0,
          y: variant !== "glass" ? -2 : 0,
        }}
        whileTap={{ 
          x: variant !== "glass" ? 4 : 0, 
          y: variant !== "glass" ? 4 : 0,
          scale: 0.98 
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);

NeoButton.displayName = "NeoButton";

export { NeoButton };
