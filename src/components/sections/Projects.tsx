"use client";

import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import { ExternalLink } from "lucide-react";

export const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            A selection of my recent work in web development, AI/ML, and data analytics.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group flex flex-col gap-8 items-start bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-8 hover:border-zinc-700/80 transition-all hover:bg-zinc-900/60"
            >
              {/* Project Details */}
              <div className="w-full flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-6 bg-blue-500" />
                  <span className="text-xs font-medium text-blue-400 tracking-wider uppercase">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <div className="bg-zinc-900/50 border border-zinc-800/50 p-6 rounded-2xl mb-6 backdrop-blur-sm text-zinc-300 leading-relaxed">
                  {project.description}
                </div>
                <ul className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1 text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
