"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Download, Loader2 } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Determine if it's an internal file (starts with /)
    const isInternal = project.downloadUrl?.startsWith("/");
    
    // Show premium interaction feedback
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500); // Revert after interaction
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4 + index * 0.5, ease: "easeInOut" }}
        className="h-full"
      >
        <GlassCard className="h-full flex flex-col p-6 group relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <span className={cn(
              "px-2 py-1 text-xs font-medium rounded-md uppercase tracking-wider",
              project.status === "completed" && "bg-emerald-500/20 text-emerald-300",
              project.status === "in-progress" && "bg-blue-500/20 text-blue-300",
              project.status === "planned" && "bg-amber-500/20 text-amber-300"
            )}>
              {project.status}
            </span>
            <span className="text-xs text-white/40 uppercase tracking-widest">{project.category}</span>
          </div>
          
          <div className="flex gap-2 items-center relative z-20">
            {/* Standard hover-visible buttons */}
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-transparent hover:border-white/10">
                  <Code2 className="w-4 h-4" />
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-transparent hover:border-white/10">
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {/* Premium, always-visible Download button */}
            {project.downloadUrl && (
              <motion.a 
                href={project.downloadUrl} 
                target="_blank" 
                rel="noreferrer"
                download={project.downloadUrl.startsWith("/")}
                onClick={handleDownloadClick}
                className="relative flex items-center justify-center p-[10px] rounded-full overflow-hidden bg-white/5 border border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)] group/btn ml-2"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {/* Idle rotating energy effect (conic gradient) */}
                <motion.div 
                  className="absolute inset-[-150%] z-0"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  style={{
                    background: "conic-gradient(from 0deg, rgba(255,255,255,0) 70%, rgba(255,255,255,0.4) 100%)",
                  }}
                />
                
                {/* Inner glass masking layer */}
                <div className="absolute inset-[1px] bg-black/60 backdrop-blur-xl rounded-full z-10 transition-colors duration-300 group-hover/btn:bg-black/40" />
                
                {/* Pulse glow on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover/btn:opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.3),inset_0_0_15px_rgba(255,255,255,0.2)] transition-opacity duration-300 z-10" />

                {/* Animated Icon */}
                <motion.div
                  className="relative z-20 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <AnimatePresence mode="wait">
                    {isDownloading ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Loader2 className="w-[18px] h-[18px] text-white animate-spin" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="download"
                        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Download className="w-[18px] h-[18px] text-white" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all">
          {project.title}
        </h3>
        
        <p className="text-white/60 text-sm mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto relative z-10">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-xs bg-black/40 border border-white/10 rounded-md text-white/70">
              {tech}
            </span>
          ))}
        </div>
      </GlassCard>
      </motion.div>
    </motion.div>
  );
};
