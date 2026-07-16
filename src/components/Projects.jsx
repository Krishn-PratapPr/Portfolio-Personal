import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAward, FaTimes, FaFileAlt, FaSync, FaInfoCircle } from 'react-icons/fa';
import { PROJECTS_DATA } from '../data/projects';

// Robust, lightweight custom Markdown Renderer Component
function Markdown({ content }) {
  if (!content) return null;

  const parseInlineStyles = (text) => {
    let parts = [{ type: 'text', content: text }];

    // 1. Process Bold: **text**
    parts = parts.flatMap(part => {
      if (part.type !== 'text') return part;
      const split = part.content.split(/\*\*(.*?)\*\*/);
      return split.map((str, idx) => ({
        type: idx % 2 === 1 ? 'bold' : 'text',
        content: str
      }));
    });

    // 2. Process Code: `code`
    parts = parts.flatMap(part => {
      if (part.type !== 'text') return part;
      const split = part.content.split(/`(.*?)`/);
      return split.map((str, idx) => ({
        type: idx % 2 === 1 ? 'code' : 'text',
        content: str
      }));
    });

    // 3. Process Links: [text](url)
    parts = parts.flatMap(part => {
      if (part.type !== 'text') return part;
      const regex = /\[(.*?)\]\((.*?)\)/g;
      const result = [];
      let lastIndex = 0;
      let match;
      while ((match = regex.exec(part.content)) !== null) {
        const before = part.content.substring(lastIndex, match.index);
        if (before) {
          result.push({ type: 'text', content: before });
        }
        result.push({ type: 'link', label: match[1], url: match[2] });
        lastIndex = regex.lastIndex;
      }
      const after = part.content.substring(lastIndex);
      if (after) {
        result.push({ type: 'text', content: after });
      }
      return result.length > 0 ? result : part;
    });

    return parts.map((part, idx) => {
      switch (part.type) {
        case 'bold':
          return <strong key={idx} className="font-semibold text-white">{part.content}</strong>;
        case 'code':
          return <code key={idx} className="bg-zinc-950 text-accent border border-zinc-800/85 rounded px-1.5 py-0.5 text-xs font-mono">{part.content}</code>;
        case 'link':
          return (
            <a key={idx} href={part.url} target="_blank" rel="noreferrer" className="text-primary hover:text-accent underline inline-flex items-center gap-1 font-medium transition-colors">
              {part.label}
            </a>
          );
        default:
          return part.content;
      }
    });
  };

  const lines = content.split('\n');
  let inCodeBlock = false;
  let codeLanguage = '';
  let codeLines = [];
  const renderedElements = [];

  lines.forEach((line, index) => {
    // Code block check
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        renderedElements.push(
          <div key={`code-block-${index}`} className="my-5 rounded-xl border border-zinc-800/80 overflow-hidden">
            <div className="flex justify-between items-center bg-zinc-950 px-4 py-2 border-b border-zinc-850 text-[10px] text-zinc-500 font-mono">
              <span>{codeLanguage || 'code'}</span>
              <span className="text-zinc-650">Terminal Output</span>
            </div>
            <pre className="bg-zinc-955 p-4 font-mono text-[11px] md:text-xs overflow-x-auto text-green-400/90 leading-relaxed max-h-[300px]">
              <code>{codeLines.join('\n')}</code>
            </pre>
          </div>
        );
        inCodeBlock = false;
        codeLines = [];
      } else {
        inCodeBlock = true;
        codeLanguage = line.trim().substring(3);
      }
      return;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      return;
    }

    // Headings
    if (line.startsWith('# ')) {
      renderedElements.push(
        <h1 key={index} className="text-2xl md:text-3xl font-extrabold font-sora text-white mt-8 mb-4 pb-2 border-b border-zinc-800/50">
          {parseInlineStyles(line.substring(2))}
        </h1>
      );
    } else if (line.startsWith('## ')) {
      renderedElements.push(
        <h2 key={index} className="text-lg md:text-xl font-bold font-sora text-white mt-7 mb-3 pb-1 border-b border-zinc-800/20">
          {parseInlineStyles(line.substring(3))}
        </h2>
      );
    } else if (line.startsWith('### ')) {
      renderedElements.push(
        <h3 key={index} className="text-base md:text-lg font-semibold font-sora text-zinc-200 mt-5 mb-2">
          {parseInlineStyles(line.substring(4))}
        </h3>
      );
    }
    // Horizontal Rule
    else if (line.trim() === '---') {
      renderedElements.push(<hr key={index} className="border-zinc-800/40 my-6" />);
    }
    // Blockquote
    else if (line.trim().startsWith('>')) {
      const textVal = line.replace(/^>\s*/, '');
      renderedElements.push(
        <blockquote key={index} className="border-l-2 border-primary bg-primary/5 px-4 py-3 my-4 rounded-r-lg text-xs md:text-sm italic text-zinc-450">
          {parseInlineStyles(textVal)}
        </blockquote>
      );
    }
    // Unordered List
    else if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
      const contentStr = line.trim().substring(2);
      renderedElements.push(
        <ul key={index} className="list-disc pl-5 text-xs md:text-sm text-zinc-300 my-1 space-y-1">
          <li>{parseInlineStyles(contentStr)}</li>
        </ul>
      );
    }
    // Ordered List
    else if (/^\d+\.\s/.test(line.trim())) {
      const contentStr = line.trim().replace(/^\d+\.\s/, '');
      renderedElements.push(
        <ol key={index} className="list-decimal pl-5 text-xs md:text-sm text-zinc-300 my-1 space-y-1">
          <li>{parseInlineStyles(contentStr)}</li>
        </ol>
      );
    }
    // Empty Line
    else if (line.trim() === '') {
      renderedElements.push(<div key={index} className="h-1.5" />);
    }
    // Normal Paragraph
    else {
      renderedElements.push(
        <p key={index} className="text-xs md:text-sm text-zinc-400 leading-relaxed my-2 text-justify">
          {parseInlineStyles(line)}
        </p>
      );
    }
  });

  return <div className="space-y-0.5">{renderedElements}</div>;
}

function ReadmeModal({ project, onClose }) {
  React.useEffect(() => {
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
      {/* Dark blur backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="w-full max-w-5xl max-h-[85vh] bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col z-10"
      >
        {/* Modal Header */}
        <div className="p-6 md:p-8 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900/60 sticky top-0 backdrop-blur-md z-20">
          <div className="text-left space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-widest text-primary px-2.5 py-1 bg-primary/10 rounded-full border border-primary/20">
              {project.category || "Project Details"}
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold font-sora text-white mt-2">
              {project.title}
            </h2>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2.5 rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700/30 hover:border-zinc-700 transition-all duration-200"
            aria-label="Close modal"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Modal Body (Scrollable Grid) */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Markdown README content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="prose prose-invert max-w-none text-left">
              <Markdown content={project.readmeContent} />
            </div>
          </div>

          {/* Right Column: Project stats & env metadata */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-0 h-fit text-left">
            {/* Live env settings dashboard */}
            {project.envDetails && (
              <div className="bg-zinc-950/80 border border-zinc-800/80 rounded-2xl p-5 space-y-4 shadow-inner relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">IoT Node Telemetry</span>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Secure Link</span>
                </div>

                <div className="space-y-2.5 font-mono text-[11px] md:text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900/50">
                    <span className="text-zinc-500">Device ID</span>
                    <span className="text-emerald-400 font-semibold">{project.envDetails.deviceId}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900/50">
                    <span className="text-zinc-500">Telemetry Sync</span>
                    <span className="text-zinc-300 flex items-center gap-1.5">
                      <FaSync className="text-primary animate-spin text-[10px] shrink-0" /> ThingSpeak (Ch: {project.envDetails.thingspeakChannel})
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900/50">
                    <span className="text-zinc-500">Payload Cargo</span>
                    <span className="text-zinc-300 font-medium">{project.envDetails.cargo}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900/50">
                    <span className="text-zinc-500">Tracking Route</span>
                    <span className="text-zinc-300 text-right">{project.envDetails.route}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900/50">
                    <span className="text-zinc-500">Active Vehicle</span>
                    <span className="text-zinc-300 text-right font-medium">{project.envDetails.vehicleName}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900/50">
                    <span className="text-zinc-500">Registration</span>
                    <span className="text-zinc-300">{project.envDetails.registration}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900/50">
                    <span className="text-zinc-500">Operator/Driver</span>
                    <span className="text-zinc-300">{project.envDetails.driver}</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-zinc-900/50">
                    <span className="text-zinc-500">Departure</span>
                    <span className="text-zinc-400">{project.envDetails.departureDate}</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-zinc-500">Status Node</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {project.envDetails.status}
                    </span>
                  </div>
                </div>

                <div className="rounded-lg bg-zinc-900/50 p-3 border border-zinc-800/40 text-[10px] text-zinc-500 leading-relaxed font-mono flex items-start gap-2">
                  <FaInfoCircle className="text-primary shrink-0 mt-0.5 text-xs" />
                  <span>
                    Decrypted from live <code className="bg-zinc-950 px-1 py-0.5 rounded border border-zinc-850">.env</code> configurations securely loaded at the runtime boundary.
                  </span>
                </div>
              </div>
            )}

            {/* Quick specifications and stacks */}
            <div className="bg-zinc-955 border border-zinc-800/50 rounded-2xl p-5 space-y-4">
              <h3 className="text-sm font-semibold font-sora text-white">Project Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-semibold font-inter text-zinc-300 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions inside side panel */}
              <div className="pt-4 border-t border-zinc-800/60 flex flex-col space-y-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center space-x-2 text-sm font-medium text-white bg-zinc-800 hover:bg-zinc-700/80 border border-zinc-700/50 rounded-xl py-3 transition-colors duration-200"
                >
                  <FaGithub size={18} />
                  <span>GitHub Repository</span>
                </a>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full flex items-center justify-center space-x-2 text-sm font-medium text-black bg-white hover:bg-zinc-200 rounded-xl py-3 transition-colors duration-200"
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
    </div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = React.useState(null);

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
                      {featuredProject.readmeContent && (
                        <button
                          onClick={() => setSelectedProject(featuredProject)}
                          className="inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-accent transition-colors py-2 cursor-pointer"
                        >
                          <FaFileAlt size={16} className="text-accent shrink-0" />
                          <span>View README</span>
                        </button>
                      )}
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
                  <div className={`relative aspect-video w-full overflow-hidden flex items-center justify-center ${
                    project.imageContain ? 'bg-zinc-950/60 p-4 border-b border-zinc-850' : ''
                  }`}>
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className={`${
                          project.imageContain 
                            ? 'max-h-full max-w-full object-contain rounded-lg shadow-md' 
                            : 'w-full h-full object-cover'
                        } transition-transform duration-500 group-hover:scale-105`}
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
                        {project.readmeContent && (
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="inline-flex items-center space-x-1.5 text-xs font-semibold text-zinc-300 hover:text-accent transition-colors cursor-pointer"
                          >
                            <FaFileAlt size={13} className="text-accent/80 shrink-0" />
                            <span>README</span>
                          </button>
                        )}
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

      <AnimatePresence>
        {selectedProject && (
          <ReadmeModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
