"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { ArrowDown } from "lucide-react";

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Technical Capabilities
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technology stack across frontend, backend, AI, and data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {skillsData.categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/60 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 text-zinc-300 text-sm font-medium rounded-lg hover:border-blue-500/50 hover:text-white transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-center text-sm font-medium tracking-widest text-zinc-500 uppercase mb-12">
            Development Flow
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
            
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent -z-10" />

            {skillsData.techStackFlow.map((step, index) => (
              <div key={step} className="flex flex-col items-center group relative z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 z-10 relative">
                  <span className="text-xs md:text-sm font-semibold text-zinc-400 group-hover:text-blue-400">{step}</span>
                </div>
                {index < skillsData.techStackFlow.length - 1 && (
                  <div className="md:hidden text-zinc-800 my-2">
                    <ArrowDown className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
