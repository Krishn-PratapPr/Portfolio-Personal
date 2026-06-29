import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

export default function Experience() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  return (
    <section id="experience" className="py-10 md:py-14 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-sora tracking-tight text-white mb-4">
            Experience
          </h2>
          <div className="h-[3px] w-12 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Experience Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-premium rounded-3xl p-8 md:p-10 border border-zinc-800 relative overflow-hidden group text-left"
        >
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent" />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-2 md:space-y-0">
            <div>
              <h3 className="text-xl md:text-2xl font-bold font-sora text-white">
                Cyber Security Intern
              </h3>
              <p className="text-sm font-semibold text-primary font-inter mt-1">
                Amroha Police Cyber Security Internship Program (APCSIP 2026)
              </p>
            </div>
            <div className="flex items-center space-x-2 text-zinc-500 font-inter text-xs font-semibold shrink-0">
              <FaCalendarAlt />
              <span>June 2026</span>
            </div>
          </div>

          <h4 className="text-xs uppercase tracking-wider text-zinc-500 font-semibold font-inter mb-4">
            Responsibilities
          </h4>

          <ul className="space-y-3.5 font-inter">
            <li className="flex items-start space-x-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm text-zinc-300 font-light leading-normal">
                Developed an <strong>Email Header Analyzer</strong> cybersecurity tool.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm text-zinc-300 font-light leading-normal">
                Worked on in-depth email forensic analysis to trace sender identities and route servers.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm text-zinc-300 font-light leading-normal">
                Studied and analyzed email security concepts.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm text-zinc-300 font-light leading-normal">
                Conducted cybersecurity research.
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-sm text-zinc-300 font-light leading-normal">
                Gained practical exposure to cybercrime awareness.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
