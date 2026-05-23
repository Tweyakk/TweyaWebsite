"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { NeoButton } from "@/components/ui/NeoButton";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { socials } from "@/data/socials";

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
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
        <div className="max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2 }}
            className="flex flex-col items-center text-center space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium tracking-wide">PAGE ONLINE</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]"
            >
              Small Part of My <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20 filter drop-shadow-lg">
                Project
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl text-lg md:text-xl text-white/60 leading-relaxed font-light"
            >
              Welcome to My Website
              This is where I share my latest projects stuff.
              Everything you see here is totally free to try!
              Thank You So Much For Your Support :D
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <a href="#projects">
                <NeoButton variant="primary" size="lg">
                  Explore Work <ArrowRight className="w-5 h-5 ml-2" />
                </NeoButton>
              </a>
              <a href="#contact">
                <NeoButton variant="glass" size="lg">
                  Initialize Contact <Terminal className="w-5 h-5 ml-2" />
                </NeoButton>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex md:items-end md:justify-between space-y-6 md:space-y-0">
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4"
              >
                Project <span className="text-white/30">Archives</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, filter: "blur(5px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-white/60 max-w-xl"
              >
                Here you can find and try my latest project!. :D
              </motion.p>
            </div>

            {/* Filters & Search */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4 items-end"
            >
              <input
                type="text"
                placeholder="Search database..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:w-64 px-4 py-3 bg-black/40 border border-white/10 rounded-lg focus:outline-none focus:border-white/40 transition-colors placeholder:text-white/30"
              />
              <div className="flex gap-2">
                {["all", "web", "mobile", "coming soon"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-wider transition-all ${filter === cat
                      ? "bg-white text-black"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-white/40">
              <p>No records found matching your query.</p>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="p-8 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              You Can Find Me On
            </h2>
            <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto">
              Looking for a developer to build something extraordinary? My inbox is always open for new opportunities and collaborations.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
                  className={`flex flex-col items-center justify-center p-6 w-32 h-32 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-glass group relative overflow-hidden ${social.color}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <social.icon className="w-8 h-8 mb-4 relative z-10" />
                  <span className="text-sm font-medium relative z-10">{social.name}</span>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <a
                href="https://trakteer.id/tweya/tip"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <NeoButton variant="secondary">
                  Support By Giving Me Kentang 🍟
                </NeoButton>
              </a>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </>
  );
}
