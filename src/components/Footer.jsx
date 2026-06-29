import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { PERSONAL_INFO } from '../data/constants';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="w-full bg-zinc-950/40 border-t border-zinc-900 py-8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Copyright */}
        <p className="text-xs text-zinc-500 font-inter font-light">
          &copy; {new Date().getFullYear()} Krishn Pratap Singh. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex items-center space-x-5">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub size={18} />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-[#0A66C2] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href={PERSONAL_INFO.socials.emailDirect}
            className="text-zinc-500 hover:text-primary transition-colors"
            aria-label="Email Address"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* Scroll To Top button */}
        <button
          onClick={handleScrollToTop}
          className="inline-flex items-center space-x-2 text-xs font-semibold text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/40 px-3.5 py-2 rounded-full transition-all duration-300 hover:-translate-y-1 focus:outline-none"
          aria-label="Scroll back to top"
        >
          <span>Back to Top</span>
          <FaArrowUp size={10} />
        </button>

      </div>
    </footer>
  );
}
