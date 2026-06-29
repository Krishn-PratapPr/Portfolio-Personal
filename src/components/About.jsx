import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaServer, FaMapMarkerAlt } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/constants';

export default function About() {
  const { about } = PERSONAL_INFO;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section id="about" className="py-10 md:py-14 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sora tracking-tight text-white mb-4">
            About Me
          </h2>
          <div className="h-[3px] w-12 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Grid Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Text Column */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <h3 className="text-2xl font-bold font-sora text-white">
              Passionate about building impactful technologies.
            </h3>
            
            <p className="text-zinc-400 font-inter font-light text-base md:text-lg leading-relaxed">
              {about.introduction}
            </p>

            {/* List of Details with Custom Bullets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {about.details.map((detail, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-sm font-inter text-zinc-300 font-light leading-normal">
                    {detail}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Card Column */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center w-full"
          >
            <div className="w-full max-w-md glass-premium rounded-2xl p-8 relative overflow-hidden group">
              {/* Highlight gradient bar */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-accent" />
              
              <h4 className="text-lg font-bold font-sora text-white mb-6 flex items-center space-x-2">
                <span>Quick Snapshot</span>
              </h4>

              {/* Snapshot details list */}
              <div className="space-y-6 text-left">
                {/* Education */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-primary shrink-0">
                    <FaGraduationCap size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold font-inter">Education</p>
                    <p className="text-sm font-medium text-white font-sora mt-0.5">BE Computer Science</p>
                    <p className="text-xs text-zinc-400 font-inter">Final Year Student</p>
                  </div>
                </div>

                {/* Primary Focus */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-accent shrink-0">
                    <FaCode size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold font-inter">Focus</p>
                    <p className="text-sm font-medium text-white font-sora mt-0.5">Full Stack Development</p>
                  </div>
                </div>

                {/* Secondary Focus */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-success shrink-0">
                    <FaServer size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold font-inter">learning</p>
                    <p className="text-sm font-medium text-white font-sora mt-0.5">Cloud Computing & Docker</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-orange-400 shrink-0">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zinc-500 font-semibold font-inter">Location</p>
                    <p className="text-sm font-medium text-white font-sora mt-0.5">{PERSONAL_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
