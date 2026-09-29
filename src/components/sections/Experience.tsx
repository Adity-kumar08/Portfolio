"use client";

import { motion } from "framer-motion";
import { experienceData, ideathonData } from "@/data/experience";
import { Briefcase, Lightbulb } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Experience
          </h2>
          <p className="text-zinc-400 max-w-2xl text-lg">
            Professional roles and technical internships.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="lg:col-span-2 flex flex-col gap-8">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-10 before:content-[''] before:absolute before:left-[11px] before:top-10 before:bottom-0 before:w-px before:bg-zinc-800 last:before:hidden"
              >
                <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center z-10">
                  <Briefcase className="w-3 h-3 text-blue-400" />
                </div>
                
                <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 md:p-8 hover:border-zinc-700/80 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100">{exp.role}</h3>
                      <div className="text-lg font-medium text-zinc-400 mt-1">{exp.company} <span className="text-zinc-600 font-normal text-sm ml-2">({exp.location})</span></div>
                    </div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-300 self-start sm:self-auto">
                      {exp.status === "Ongoing" ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                          {exp.duration}
                        </>
                      ) : (
                        exp.duration
                      )}
                    </div>
                  </div>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.focusAreas.map((area) => (
                      <span key={area} className="text-xs font-medium text-zinc-300 bg-zinc-800/50 px-3 py-1 rounded-full border border-zinc-700/50">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-900/20 to-indigo-900/10 border border-blue-900/30 rounded-2xl p-6 md:p-8 relative overflow-hidden h-full"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                <Lightbulb className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{ideathonData.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-8">
                {ideathonData.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {ideathonData.skills.map((skill) => (
                  <span key={skill} className="text-xs font-medium text-blue-300 bg-blue-900/20 border border-blue-800/30 px-3 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
