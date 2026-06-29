import React from 'react';
import { motion } from 'framer-motion';
import { FaRegFilePdf } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/constants';

export default function Resume() {
  return (
    <section id="resume" className="py-10 md:py-14 relative">
      {/* Background soft light accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sora tracking-tight text-white mb-4">
            Curriculum Vitae
          </h2>
          <div className="h-[3px] w-12 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Premium CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-premium rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group border border-zinc-800"
        >
          {/* Subtle glow border */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="max-w-xl mx-auto space-y-6">
            
            {/* PDF File graphic */}
            <div className="w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 text-primary flex items-center justify-center mx-auto mb-4 group-hover:border-primary/40 transition-colors duration-300">
              <FaRegFilePdf size={28} />
            </div>

            <h3 className="text-xl md:text-2xl font-bold font-sora text-white">
              Interested in collaborating or hiring?
            </h3>
            
            <p className="text-zinc-400 font-inter font-light text-sm md:text-base leading-relaxed">
              Explore my background, education history, technical skills, and completed projects in detail. Download my updated resume below.
            </p>

            {/* Actions */}
            <div className="pt-4">
              <motion.a
                href={PERSONAL_INFO.resumeUrl}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-3 px-8 py-4 font-semibold text-sm rounded-full bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-primary/35 transition-all duration-300"
              >
                <span>Download Resume</span>
                <FaRegFilePdf size={16} />
              </motion.a>
            </div>

            {/* Quick Note */}
            <p className="text-[11px] text-zinc-500 font-inter">
              Format: PDF | Size: ~120 KB
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
