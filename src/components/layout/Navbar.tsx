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
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:bottom-10"
    >
      <nav 
        className={cn(
          "flex items-center gap-2 p-2 rounded-2xl border-4 border-[#0A1228]",
          scrolled 
            ? "bg-surface shadow-[6px_6px_0px_rgba(10,18,40,0.9)]" 
            : "bg-surface shadow-[4px_4px_0px_rgba(10,18,40,0.5)]"
        )}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "relative p-3 rounded-xl group overflow-hidden flex items-center justify-center",
                isActive ? "text-[#0A1228]" : "text-[#0A1228]/50 hover:text-[#0A1228]"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-dock-pill"
                  className="absolute inset-0 bg-white border-2 border-[#0A1228] rounded-xl z-0"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              
              <div className="relative z-10 flex items-center gap-2">
                <item.icon className="w-5 h-5 font-bold" strokeWidth={isActive ? 3 : 2} />
                <span className={cn(
                  "hidden md:block text-sm font-bold tracking-wide uppercase",
                  isActive ? "block" : "hidden"
                )}>
                  {item.name}
                </span>
              </div>
            </Link>
          );
        })}
      </nav>
    </motion.div>
  );
};
