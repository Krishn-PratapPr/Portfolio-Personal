import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../data/constants';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    // Validate templates placeholders before submitting
    const { serviceId, templateId, publicKey } = PERSONAL_INFO.emailJs;
    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      // Simulate submission failure if keys are unconfigured
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: true });
      }, 1000);
      return;
    }

    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: PERSONAL_INFO.name,
      },
      publicKey
    )
    .then((result) => {
      setStatus({ loading: false, success: true, error: false });
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.error(error.text);
      setStatus({ loading: false, success: false, error: true });
    });
  };

  return (
    <section id="contact" className="py-10 md:py-14 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-sora tracking-tight text-white mb-4">
            Get In Touch
          </h2>
          <div className="h-[3px] w-12 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          <p className="text-sm text-zinc-400 font-inter mt-4 max-w-lg mx-auto font-light">
            Have a question, opportunity, or project collaboration in mind? Drop me a message.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Channels */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-8 text-left"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold font-sora text-white">
                Contact Information
              </h3>
              <p className="text-zinc-400 font-inter font-light text-base leading-relaxed">
                I am actively looking for software engineering internships and junior software developer opportunities. Let's connect!
              </p>
            </div>

            {/* Visual list of channels */}
            <div className="space-y-4">
              
              {/* Email */}
              <a
                href={PERSONAL_INFO.socials.emailDirect}
                className="flex items-center space-x-4 p-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors group"
              >
                <div className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-primary shrink-0 group-hover:border-primary/45 transition-colors">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 font-inter">Email Me</p>
                  <p className="text-sm font-semibold text-white font-sora mt-0.5 break-all">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors group"
              >
                <div className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-[#0A66C2] shrink-0 group-hover:border-[#0A66C2]/45 transition-colors">
                  <FaLinkedin size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 font-inter">LinkedIn</p>
                  <p className="text-sm font-semibold text-white font-sora mt-0.5">Krishn Pratap Singh</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-4 p-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors group"
              >
                <div className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-white shrink-0 group-hover:border-white/20 transition-colors">
                  <FaGithub size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 font-inter">GitHub</p>
                  <p className="text-sm font-semibold text-white font-sora mt-0.5">
                    @{PERSONAL_INFO.socials.github.split('/').pop()}
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 rounded-2xl border border-zinc-800/60 bg-zinc-900/30 cursor-default">
                <div className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl text-orange-400 shrink-0">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 font-inter">Current Location</p>
                  <p className="text-sm font-semibold text-white font-sora mt-0.5">{PERSONAL_INFO.location}</p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex"
          >
            <div className="w-full glass-premium rounded-3xl p-8 md:p-10 border border-zinc-800 flex flex-col justify-between text-left">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <h3 className="text-xl font-bold font-sora text-white mb-2">
                  Send a Message
                </h3>

                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-semibold text-zinc-400 uppercase tracking-wide font-inter">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 focus:border-primary/50 text-white rounded-xl font-inter text-sm outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-semibold text-zinc-400 uppercase tracking-wide font-inter">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 focus:border-primary/50 text-white rounded-xl font-inter text-sm outline-none transition-colors"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-zinc-400 uppercase tracking-wide font-inter">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 focus:border-primary/50 text-white rounded-xl font-inter text-sm outline-none transition-colors resize-none"
                    placeholder="Type your message here..."
                  />
                </div>

                {/* Form feedback status alerts */}
                {status.success && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-inter">
                    ✓ Your message was sent successfully! I will get back to you soon.
                  </div>
                )}

                {status.error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-inter space-y-1">
                    <p className="font-semibold">⚠️ Submission Offline</p>
                    <p className="font-light">
                      To send via form, replace the keys in <code className="text-[10px] text-white">constants.js</code>. 
                      Alternatively, click the Email channel on the left to write directly!
                    </p>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full inline-flex items-center justify-center space-x-2.5 px-6 py-4 font-semibold text-sm rounded-xl bg-primary text-white hover:bg-primary/95 transition-all duration-300 shadow-md shadow-primary/25 disabled:bg-zinc-800 disabled:text-zinc-500 disabled:shadow-none"
                >
                  {status.loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FaPaperPlane size={12} />
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
