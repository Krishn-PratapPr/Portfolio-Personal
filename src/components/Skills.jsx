import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../data/skills';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <section id="skills" className="py-10 md:py-14 relative bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sora tracking-tight text-white mb-4">
            Technical Skills
          </h2>
          <div className="h-[3px] w-12 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {SKILLS_DATA.map((cat, idx) => (
            <motion.div 
              key={cat.category}
              variants={categoryVariants}
              className="space-y-6"
            >
              {/* Category Header */}
              <h3 className="text-lg md:text-xl font-bold font-sora text-left text-zinc-300 pl-2 border-l-2 border-primary">
                {cat.category}
              </h3>

              {/* Skills Card Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -6, scale: 1.03 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="group relative flex flex-col items-center justify-center p-6 rounded-2xl glass border border-zinc-800/60 hover:border-primary/45 transition-colors cursor-default"
                    >
                      {/* Interactive glow effect in the card background */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Icon */}
                      <div className="relative mb-3 text-3xl transition-transform duration-300 group-hover:scale-110">
                        <Icon className={skill.color} />
                      </div>

                      {/* Skill Name */}
                      <span className="relative text-sm font-semibold text-zinc-400 font-inter group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
