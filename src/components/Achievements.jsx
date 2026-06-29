import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaAward } from 'react-icons/fa';

export default function Achievements() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  return (
    <section id="achievements" className="py-10 md:py-14 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sora tracking-tight text-white mb-4">
            Achievements
          </h2>
          <div className="h-[3px] w-12 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Achievements Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-premium rounded-3xl p-8 md:p-10 border border-zinc-800 relative overflow-hidden group text-left space-y-6"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent" />
          
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-yellow-400 shrink-0">
              <FaTrophy size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold font-sora text-white">
                Program Completion
              </h3>
              <p className="text-sm text-zinc-300 font-inter font-light">
                Successfully completed the <strong>Amroha Police Cyber Security Internship Program (2026)</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 pt-4 border-t border-zinc-800/40">
            <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-green-400 shrink-0">
              <FaAward size={20} />
            </div>
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold font-sora text-white">
                Project Recognition
              </h3>
              <p className="text-sm text-zinc-300 font-inter font-light">
                Received an official <strong>Project Recognition Letter</strong> for developing the <strong>Email Header Analyzer</strong> flagship cybersecurity tool.
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
