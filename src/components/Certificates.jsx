import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaArrowLeft, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { CERTIFICATES_DATA } from '../data/certificates';

export default function Certificates() {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollToValue = direction === 'left' 
        ? scrollLeft - clientWidth * 0.75 
        : scrollLeft + clientWidth * 0.75;
      
      scrollContainerRef.current.scrollTo({
        left: scrollToValue,
        behavior: 'smooth'
      });
    }
  };

  const CardImagePlaceholder = ({ title, organization }) => (
    <div className="w-full h-full bg-gradient-to-br from-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-6 text-center border-b border-zinc-800">
      <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3">
        <FaAward size={20} />
      </div>
      <p className="text-xs font-semibold text-zinc-400 max-w-[180px] line-clamp-1">{organization}</p>
      <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Verified Credential</p>
    </div>
  );

  return (
    <section id="certificates" className="py-10 md:py-14 relative bg-zinc-950/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading with navigation arrows */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl md:text-4xl font-bold font-sora tracking-tight text-white mb-3">
              Certifications
            </h2>
            <div className="h-[3px] w-12 bg-gradient-to-r from-primary to-accent rounded-full mx-auto sm:mx-0"></div>
          </div>

          {/* Scrolling Actions */}
          <div className="flex space-x-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-white transition-colors hover:border-zinc-600 focus:outline-none"
              aria-label="Scroll left"
            >
              <FaArrowLeft size={14} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 text-white transition-colors hover:border-zinc-600 focus:outline-none"
              aria-label="Scroll right"
            >
              <FaArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Scrollable Row */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-8 scrollbar-none scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CERTIFICATES_DATA.map((cert) => (
            <div
              key={cert.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] snap-start"
            >
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                className="group relative h-full rounded-2xl p-[1px] bg-zinc-800/40 hover:bg-gradient-to-br hover:from-primary/30 hover:to-accent/30 transition-all duration-300 shadow-md overflow-hidden flex flex-col"
              >
                <div className="rounded-[15px] bg-zinc-900/90 backdrop-blur-md overflow-hidden flex flex-col h-full text-left">
                  
                  {/* Card Graphic Area */}
                  <div className="aspect-[4/3] w-full relative overflow-hidden">
                    {cert.imageUrl ? (
                      <img
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <CardImagePlaceholder title={cert.title} organization={cert.organization} />
                    )}
                  </div>

                  {/* Card Details Area */}
                  <div className="p-5 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-1.5">
                      <h4 className="text-sm font-semibold text-zinc-500 font-inter uppercase tracking-wide">
                        {cert.organization}
                      </h4>
                      <h3 className="text-base font-bold font-sora text-white line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                      <span className="text-xs text-zinc-500 font-inter font-medium">
                        Issued: {cert.issueDate}
                      </span>
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-white hover:text-accent transition-colors"
                      >
                        <span>Verify</span>
                        <FaExternalLinkAlt size={10} />
                      </a>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
