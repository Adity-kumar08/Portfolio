"use client";

import { motion } from "framer-motion";
import { certificatesData } from "@/data/certificates";
import { Award } from "lucide-react";

export const Certificates = () => {
  return (
    <section id="certificates" className="py-24 md:py-32 bg-zinc-950 relative border-t border-zinc-900/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Certifications
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Professional certifications and completed courses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {certificatesData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-6 md:p-8 hover:bg-zinc-900/60 hover:border-zinc-700/80 transition-all flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-blue-900/20 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                {cert.title}
              </h3>
              <p className="text-zinc-400 font-medium mb-1">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
