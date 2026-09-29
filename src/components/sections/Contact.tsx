"use client";

import { motion } from "framer-motion";
import { personalData } from "@/data/personal";
import { Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900/50">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Have an idea?<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Let&apos;s build it.</span>
          </h2>
          <p className="text-lg text-zinc-400 mb-8 max-w-lg mx-auto">
            Whether it&apos;s a web application, analytics dashboard, or AI-powered product, I&apos;m always interested in building something meaningful.
          </p>

          <div className="bg-zinc-900/50 border border-blue-500/30 rounded-2xl p-6 md:p-8 mb-12 max-w-2xl mx-auto shadow-[0_0_30px_rgba(59,130,246,0.1)]">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 flex items-center justify-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Available for Freelance Projects
            </h3>
            <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
              Looking to build a premium, interactive website? Let&apos;s collaborate. 
              My standard engagement terms are structured professionally: <strong className="text-white">50% upfront</strong> to commence development, and the remaining <strong className="text-white">50% upon successful handover</strong> of the completed product.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 w-full">
            <a href={`mailto:${personalData.email}`} className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                <Mail className="w-5 h-5 group-hover:text-blue-400" />
              </div>
              <span className="text-lg">{personalData.email}</span>
            </a>
            <a href={`tel:${personalData.phone.replace(/\s+/g, '')}`} className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                <Phone className="w-5 h-5 group-hover:text-blue-400" />
              </div>
              <span className="text-lg">{personalData.phone}</span>
            </a>
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-zinc-300 hover:text-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:text-blue-400" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <span className="text-lg">GitHub Profile</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
