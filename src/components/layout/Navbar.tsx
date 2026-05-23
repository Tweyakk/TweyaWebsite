"use client";

import { motion } from "framer-motion";
import { Home, FolderOpen, Mail, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Contact", href: "#contact", icon: Mail },
];

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = navItems.map((item) => item.href.substring(1));
      let current = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:bottom-10"
    >
      <motion.nav 
        layout
        className={cn(
          "flex items-center gap-2 p-2 rounded-2xl transition-all duration-500",
          scrolled ? "bg-white/10 backdrop-blur-xl border border-white/20 shadow-glass" : "bg-white/5 backdrop-blur-md border border-white/10"
        )}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative p-3 rounded-xl transition-all duration-300 group overflow-hidden",
                isActive ? "text-background" : "text-foreground hover:text-white"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white rounded-xl z-0 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              
              <div className="relative z-10 flex items-center gap-2">
                <item.icon className={cn("w-5 h-5 transition-transform duration-300 group-hover:scale-110", isActive && "text-black")} />
                <span className={cn(
                  "hidden md:block text-sm font-medium transition-all duration-300",
                  isActive ? "opacity-100 max-w-[100px]" : "opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[100px]"
                )}>
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </motion.nav>
    </motion.div>
  );
};
