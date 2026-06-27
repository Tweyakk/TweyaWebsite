"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className, variant = "light", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          variant === "light" ? "neo-panel" : "neo-panel-dark",
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

// Preserved component name 'GlassCard' for backward compatibility with existing imports,
// even though the style is now Neobrutalism.
export { GlassCard };
