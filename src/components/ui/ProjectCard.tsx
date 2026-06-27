"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, Download, Loader2 } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100, damping: 20 }}
      className="group relative h-full w-full block"
    >
      <motion.div 
        className="h-full flex flex-col p-6 bg-surface text-[#0A1228] border-4 border-[#0A1228] rounded-2xl shadow-neo transition-colors duration-300 relative z-10"
        whileHover={{
          x: -4,
          y: -4,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div className="flex justify-between items-start mb-8">
          <div className="flex flex-col gap-2">
            <span className={cn(
              "self-start px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded border-2 border-[#0A1228] shadow-[2px_2px_0px_rgba(10,18,40,1)]",
              project.status === "completed" && "bg-accent-stone text-[#0A1228]",
              project.status === "in-progress" && "bg-accent-gold text-[#0A1228]",
              project.status === "planned" && "bg-accent-silver text-[#0A1228]"
            )}>
              {project.status === "completed" && "Completed"}
              {project.status === "in-progress" && "In Progress"}
              {project.status === "planned" && "Planned"}
            </span>
            <span className="text-[10px] font-bold text-[#0A1228]/60 uppercase tracking-[0.2em]">{project.category}</span>
          </div>
          
          <div className="flex gap-2 items-center">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 bg-transparent hover:bg-[#0A1228]/5 rounded border-2 border-[#0A1228] transition-colors active:translate-y-1">
                <Code2 className="w-5 h-5 text-[#0A1228]" />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center w-10 h-10 bg-transparent hover:bg-[#0A1228]/5 rounded border-2 border-[#0A1228] transition-colors active:translate-y-1">
                <ExternalLink className="w-5 h-5 text-[#0A1228]" />
              </a>
            )}
            {project.downloadUrl && (
              <motion.a 
                href={project.downloadUrl} 
                target="_blank" 
                rel="noreferrer"
                download={project.downloadUrl.startsWith("/")}
                onClick={handleDownloadClick}
                className="flex items-center justify-center w-10 h-10 bg-[#0A1228] text-surface hover:bg-[#0F172A] rounded border-2 border-[#0A1228] shadow-[2px_2px_0px_rgba(10,18,40,1)] active:translate-y-1 active:shadow-none ml-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isDownloading ? (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="download"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Download className="w-4 h-4" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.a>
            )}
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#0A1228] leading-tight tracking-tight">
          {project.title}
        </h3>
      
        <p className="text-[#0A1228]/80 text-sm md:text-base mb-10 flex-grow font-medium leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto relative z-10 pt-6 border-t-2 border-[#0A1228]/10">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-bold uppercase bg-transparent border-2 border-[#0A1228] text-[#0A1228]">
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
      
      {/* Structural base for hover effect */}
      <div className="absolute inset-0 bg-[#0A1228] rounded-2xl z-0" />
    </motion.div>
  );
};
