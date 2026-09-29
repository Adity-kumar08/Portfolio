"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/personal";
import { Code2, Database, LayoutTemplate, BrainCircuit, Server, AppWindow } from "lucide-react";

export const About = () => {
  const stack = [
    { icon: LayoutTemplate, label: "Frontend", color: "text-blue-400" },
    { icon: Server, label: "Backend", color: "text-emerald-400" },
    { icon: BrainCircuit, label: "AI / ML", color: "text-purple-400" },
    { icon: Database, label: "Data", color: "text-amber-400" },
    { icon: AppWindow, label: "APIs", color: "text-rose-400" },
    { icon: Code2, label: "Deployment", color: "text-zinc-400" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">
              About Me
            </h2>
            <div className="prose prose-invert prose-lg text-zinc-400">
              <p>{personalData.about}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 blur-3xl -z-10 rounded-full" />
            <div className="bg-zinc-900/50 border border-zinc-800/50 backdrop-blur-xl rounded-2xl p-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {stack.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-950/50 border border-zinc-800/50 hover:border-zinc-700 transition-colors group">
                  <item.icon className={`w-8 h-8 mb-3 ${item.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs font-medium text-zinc-300">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
