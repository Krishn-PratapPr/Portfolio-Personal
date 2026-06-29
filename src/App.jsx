import React from 'react';
import { motion, useScroll } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorGlow from './components/CursorGlow';

// Wrapper for scrolling entry animations
function FadeInUpSection({ children, id }) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-background text-white font-inter selection:bg-primary/30 selection:text-white relative">
      
      {/* Premium Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Mouse Follower Light Aura */}
      <CursorGlow />

      {/* Header Sticky Navbar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Hero Section */}
        <Hero />

        {/* Section Dividers and Sub-layouts with collapsed spacing gaps */}
        <div className="space-y-0">
          
          {/* About */}
          <FadeInUpSection id="about">
            <About />
          </FadeInUpSection>

          {/* Experience */}
          <FadeInUpSection id="experience">
            <Experience />
          </FadeInUpSection>

          {/* Skills */}
          <FadeInUpSection id="skills">
            <Skills />
          </FadeInUpSection>

          {/* Projects */}
          <FadeInUpSection id="projects">
            <Projects />
          </FadeInUpSection>

          {/* Achievements */}
          <FadeInUpSection id="achievements">
            <Achievements />
          </FadeInUpSection>

          {/* Resume */}
          <FadeInUpSection id="resume">
            <Resume />
          </FadeInUpSection>

          {/* Contact */}
          <FadeInUpSection id="contact">
            <Contact />
          </FadeInUpSection>

        </div>
      </main>

      {/* Footer Details */}
      <Footer />

    </div>
  );
}
