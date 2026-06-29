import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touchscreen devices to disable cursor glow
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 250); // Centers the 500px gradient container
      mouseY.set(e.clientY - 250);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-15"
        style={{
          x: glowX,
          y: glowY,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(139, 92, 246, 0.15) 50%, rgba(0,0,0,0) 80%)',
        }}
      />
    </motion.div>
  );
}
