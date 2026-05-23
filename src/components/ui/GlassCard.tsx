"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  neo?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, neo = true, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-xl border border-white/10",
          "shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]", // Deep shadow
          "before:absolute before:inset-0 before:z-[-1] before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-50",
          neo && "shadow-neo hover:shadow-neo-hover transition-shadow duration-300",
          className
        )}
        {...props}
      >
        <div className="relative z-10 h-full w-full">{children}</div>
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
