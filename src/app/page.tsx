"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Search } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeoButton } from "@/components/ui/NeoButton";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6 relative z-10">
        <div className="max-w-3xl w-full flex flex-col items-center relative">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
            className="flex-1 flex flex-col items-center space-y-10 w-full"
          >
            {/* Headline */}
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-tighter leading-[0.9] text-surface text-center">
              TweyLab<br />
            </h1>

            <p className="max-w-xl text-lg md:text-2xl text-surface/80 font-medium leading-relaxed tracking-tight border-l-4 border-accent-gold pl-6">
              Just for My Passions and Hobbies as Solo Developer. Making small projects to practice my skills
            </p>

            <div className="flex flex-wrap justify-center items-center gap-6 pt-4">
              <a href="#projects">
                <NeoButton variant="primary" size="lg">
                  Explore Work <ArrowRight className="w-5 h-5 ml-2" />
                </NeoButton>
              </a>
              <a href="#contact">
                <NeoButton variant="secondary" size="lg">
                  Initialize Contact <Terminal className="w-5 h-5 ml-2" />
                </NeoButton>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="flex-1">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-surface">
                Archieves
              </h2>
              <p className="text-surface/60 max-w-xl text-xl font-medium tracking-tight border-l-4 border-surface/20 pl-6">
                My Recent Projects and a lot more to come.
              </p>
            </div>

            {/* Filters & Search */}
            <div className="flex flex-col sm:flex-row gap-6 items-end flex-shrink-0">
              {/* Premium Search input */}
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0A1228]" />
                <input
                  type="text"
                  placeholder="Search index..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-surface text-[#0A1228] border-4 border-[#0A1228] rounded-xl shadow-[4px_4px_0px_rgba(215,211,200,0.2)] focus:outline-none focus:shadow-[6px_6px_0px_rgba(215,211,200,0.3)] focus:-translate-y-1 transition-all placeholder:text-[#0A1228]/50 font-bold uppercase tracking-wider"
                />
              </div>

              {/* Segmented control filters */}
              <div className="flex bg-[#0F172A] p-2 rounded-xl border-4 border-[#0A1228] shadow-[4px_4px_0px_rgba(215,211,200,0.2)] w-full sm:w-auto overflow-x-auto">
                {["all", "web", "mobile", "coming soon"].map((cat) => {
                  const isActive = filter === cat;

                  return (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={cn(
                        "px-6 py-2 rounded-lg text-sm font-bold uppercase tracking-widest transition-all whitespace-nowrap",
                        isActive
                          ? "bg-surface text-[#0A1228] shadow-[2px_2px_0px_rgba(10,18,40,1)] border-2 border-[#0A1228]"
                          : "text-surface/50 hover:text-surface border-2 border-transparent"
                      )}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-32 text-center border-4 border-surface/10 rounded-2xl bg-[#0F172A]">
              <p className="text-2xl font-bold uppercase tracking-widest text-surface/50">0 Results Found</p>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 20 }}
          className="max-w-5xl mx-auto"
        >
          <GlassCard variant="light" className="p-12 md:p-20 text-center">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-[#0A1228] uppercase">
              My Contact
            </h2>
            <p className="text-xl text-[#0A1228]/80 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
              Hit me up on these socials. My inbox is always open
            </p>

            <div className="flex flex-wrap justify-center gap-8 mb-20">
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -6, x: -6 }}
                  whileTap={{ scale: 0.95, y: 0, x: 0 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 400, damping: 25 }}
                  className={cn(
                    "flex flex-col items-center justify-center p-8 w-40 h-40 rounded-2xl bg-[#0A1228] text-surface group relative transition-colors duration-300 shadow-neo",
                    social.color
                  )}
                >
                  <social.icon className="w-10 h-10 mb-4" strokeWidth={2.5} />
                  <span className="text-sm font-bold tracking-widest uppercase">{social.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="pt-12 border-t-4 border-[#0A1228]/10 text-left flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-[#0A1228] font-bold text-2xl tracking-tighter uppercase mb-2">Small Support Means Alot to Me</p>
                <p className="text-[#0A1228]/60 font-medium tracking-tight">Keep the servers running by get some kentang.</p>
              </div>
              <a
                href="https://trakteer.id/tweya/tip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <NeoButton variant="secondary" className="border-[#0A1228] shadow-[4px_4px_0px_rgba(212,175,55,1)] hover:shadow-[6px_6px_0px_rgba(212,175,55,1)]">
                  Support on Trakteer ☕
                </NeoButton>
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </>
  );
}
