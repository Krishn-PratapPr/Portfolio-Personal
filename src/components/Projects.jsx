import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { PROJECTS_DATA } from '../data/projects';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: 'easeOut' } 
    }
  };

  // Helper component to render fallback image graphics
  const ImagePlaceholder = ({ projectId, title }) => {
    const isFeatured = projectId === 'email-header-analyzer';
    return (
      <div className={`w-full h-full relative overflow-hidden bg-gradient-to-br ${
        isFeatured 
          ? 'from-blue-950 via-zinc-950 to-violet-950' 
          : 'from-zinc-900 via-zinc-950 to-zinc-900'
      } flex items-center justify-center border-b border-zinc-800/50 lg:border-b-0 lg:border-r`}>
        {/* Technical Vector Grid */}
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Cyber Security forensic styling for flagship */}
        {isFeatured ? (
          <div className="text-center p-6 space-y-3 z-10">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/25 flex items-center justify-center mx-auto animate-pulse">
              <span className="text-2xl text-primary">&lt;/&gt;</span>
            </div>
            <p className="text-sm font-semibold font-sora text-zinc-300 tracking-wide">{title}</p>
            <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
              Forensics Header Parser
            </div>
          </div>
        ) : (
          <div className="text-center p-6 space-y-2 z-10">
            <span className="text-xl text-accent font-semibold">&lt;dev/&gt;</span>
            <p className="text-xs font-semibold font-sora text-zinc-400">{title}</p>
          </div>
        )}
      </div>
    );
  };

  // Separate featured and normal projects
  const featuredProject = PROJECTS_DATA.find(p => p.featured);
  const regularProjects = PROJECTS_DATA.filter(p => !p.featured);

  return (
    <section id="projects" className="py-10 md:py-14 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sora tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <div className="h-[3px] w-12 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-sm text-zinc-400 font-inter mt-4 max-w-lg mx-auto font-light">
            A curated showcase of applications highlighting analytical engineering and frontend systems.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Flagship Featured Project Card (Spanned Layout) */}
          {featuredProject && (
            <motion.div
              variants={cardVariants}
              className="group relative rounded-3xl p-[1px] bg-zinc-800/40 hover:bg-gradient-to-r hover:from-primary/50 hover:to-accent/50 transition-all duration-500 shadow-xl overflow-hidden"
            >
              <div className="rounded-[23px] bg-zinc-900/90 backdrop-blur-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[350px]">
                
                {/* Visual Area */}
                <div className="lg:col-span-5 relative overflow-hidden group flex items-center justify-center bg-zinc-950/60 border-b border-zinc-800/50 lg:border-b-0 lg:border-r border-zinc-800/40">
                  {featuredProject.imageUrl ? (
                    <div className="w-full h-full flex items-center justify-center p-4 md:p-6 min-h-[300px]">
                      <img 
                        src={featuredProject.imageUrl} 
                        alt={featuredProject.title} 
                        className="max-h-full max-w-full rounded-xl object-contain shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <ImagePlaceholder projectId={featuredProject.id} title={featuredProject.title} />
                  )}
                  {/* Subtle hover zoom filter */}
                  <div className="absolute inset-0 bg-zinc-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Details Area */}
                <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between text-left space-y-6">
                  <div className="space-y-4">
                    {/* Featured label and appreciation marker */}
                    <div className="flex flex-wrap gap-3 items-center">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-primary px-2.5 py-1 bg-primary/10 rounded-full border border-primary/20">
                        {featuredProject.category || "Featured Flagship"}
                      </span>
                      {featuredProject.highlight && (
                        <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-green-400">
                          <FaAward className="text-green-500 shrink-0" />
                          <span>IPS Approved</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold font-sora text-white">
                      {featuredProject.title}
                    </h3>

                    <p className="text-zinc-400 font-inter font-light text-sm md:text-base leading-relaxed">
                      {featuredProject.description}
                    </p>

                    {featuredProject.highlight && (
                      <p className="text-xs text-green-400/90 bg-green-500/5 border border-green-500/10 p-3 rounded-xl font-inter italic">
                        {featuredProject.highlight}
                      </p>
                    )}
                  </div>

                  <div className="space-y-6">
                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.techStack.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs font-semibold font-inter text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-4 pt-2 border-t border-zinc-800/60">
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-primary transition-colors py-2"
                      >
                        <FaGithub size={18} />
                        <span>GitHub Repository</span>
                      </a>
                      {featuredProject.liveUrl && (
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-accent transition-colors py-2"
                        >
                          <FaExternalLinkAlt size={14} />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}

          {/* Regular Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regularProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative rounded-3xl p-[1px] bg-zinc-800/40 hover:bg-gradient-to-r hover:from-primary/50 hover:to-accent/50 transition-all duration-500 shadow-lg overflow-hidden flex flex-col"
              >
                <div className="rounded-[23px] bg-zinc-900/90 backdrop-blur-md overflow-hidden flex flex-col h-full">
                  
                  {/* Visual Area */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <ImagePlaceholder projectId={project.id} title={project.title} />
                    )}
                  </div>

                  {/* Details Area */}
                  <div className="p-6 flex flex-col justify-between flex-grow text-left space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold font-sora text-white">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 font-inter font-light text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span 
                            key={tech} 
                            className="text-[10px] font-semibold font-inter text-zinc-400 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-zinc-800/40">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center space-x-2 text-xs font-semibold text-zinc-300 hover:text-primary transition-colors"
                        >
                          <FaGithub size={16} />
                          <span>Code</span>
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-zinc-300 hover:text-accent transition-colors"
                          >
                            <FaExternalLinkAlt size={12} />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
