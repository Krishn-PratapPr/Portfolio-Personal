import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/constants';

export default function Hero() {
  const roles = PERSONAL_INFO.roles;
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typewriter Easing Effect
  useEffect(() => {
    if (subIndex === roles[roleIndex].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2500); // Wait on completed text
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 100); // Faster delete than type

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, roleIndex, roles]);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[90vh] flex items-center justify-center py-16 md:py-24 overflow-hidden"
    >
      {/* Background radial gradient mesh */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-primary/10 blur-[100px] md:blur-[150px] pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[500px] h-[350px] md:h-[500px] rounded-full bg-accent/10 blur-[100px] md:blur-[130px] pointer-events-none -z-10" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Content Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium text-zinc-400 font-inter">
              Available for Internships & Software Engineer Roles
            </span>
          </div>

          <div className="space-y-3">
            <h4 className="text-zinc-400 text-lg md:text-xl font-medium tracking-wide">
              Hi, I'm
            </h4>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight font-sora text-white leading-tight">
              {PERSONAL_INFO.name}
            </h1>
            <div className="h-8 md:h-10 flex items-center">
              <p className="text-lg sm:text-xl md:text-2xl font-bold font-sora text-zinc-300">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {roles[roleIndex].substring(0, subIndex)}
                </span>
                <span className="typing-cursor select-none"></span>
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-text-secondary max-w-xl font-inter font-light leading-relaxed">
            {PERSONAL_INFO.roleDescription}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="px-6 py-3 font-medium text-sm rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 scale-100 hover:scale-105 active:scale-95"
            >
              View Projects
            </a>
            <a
              href={PERSONAL_INFO.resumeUrl}
              download
              className="px-6 py-3 font-medium text-sm rounded-full border border-zinc-700 bg-zinc-900/50 text-white hover:bg-zinc-800 hover:border-zinc-500 transition-all duration-300 scale-100 hover:scale-105 active:scale-95"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Graphic Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-5 flex justify-center lg:justify-end items-center"
        >
          <div className="relative group w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 animate-float">
            
            {/* Pulsing Gradient Glow Rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-accent opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary to-accent opacity-30 group-hover:opacity-60 transition-opacity duration-500 blur-sm" />

            {/* Circular Avatar Container */}
            <div className="absolute inset-1.5 rounded-full overflow-hidden bg-gradient-to-br from-indigo-950 via-zinc-950 to-purple-950 border border-zinc-800 flex items-center justify-center">
              <img 
                src={PERSONAL_INFO.profileImg} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover object-center" 
              />
            </div>
            
            {/* Micro floating cards for accents */}
            <div className="absolute -right-4 top-1/4 p-3 bg-zinc-900/90 border border-zinc-800/80 rounded-xl shadow-lg backdrop-blur-md hidden sm:block">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Interests</p>
              <p className="text-xs font-semibold text-white font-sora">Cloud & Containers</p>
            </div>
            <div className="absolute -left-6 bottom-1/4 p-3 bg-zinc-900/90 border border-zinc-800/80 rounded-xl shadow-lg backdrop-blur-md hidden sm:block">
              <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Primary</p>
              <p className="text-xs font-semibold text-white font-sora">Full Stack Dev</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
