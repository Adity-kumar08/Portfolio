"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/personal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 pointer-events-none user-select-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-blue-500" />
            <span className="text-xs md:text-sm font-medium tracking-widest text-blue-400 uppercase">
              {personalData.title} &middot; {personalData.subtitle}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
            Building digital <br className="hidden md:block" /> products <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">that turn</span><br className="hidden md:block" /> ideas into reality.
          </h1>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            I build modern web applications, analytics platforms, and AI-powered experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-50 text-zinc-950 font-medium rounded-full hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-zinc-50 font-medium rounded-full border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all flex items-center justify-center"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <div className="mt-16 flex items-center gap-3 text-sm text-zinc-500">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            {personalData.status}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
