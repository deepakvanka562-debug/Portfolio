'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Check if device supports fine pointer / mouse
    const checkMobile = () => {
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isNarrow = window.innerWidth < 768;
      setIsMobile(hasTouch && isNarrow);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hovered element
      const target = e.target as HTMLElement | null;
      const cursorTarget = target?.closest('[data-cursor]') as HTMLElement | null;

      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Expandable Circle */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center border border-cyan-400/60 bg-cyan-500/10 backdrop-blur-[2px] shadow-[0_0_20px_rgba(6,182,212,0.3)] pointer-events-none"
        animate={{
          x: position.x - (isHovered ? 36 : 14),
          y: position.y - (isHovered ? 36 : 14),
          width: isHovered ? 72 : 28,
          height: isHovered ? 72 : 28,
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.2 }}
      >
        {cursorText && (
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-300 select-none">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Inner Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-cyan-400 pointer-events-none shadow-[0_0_8px_#00F0FF]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 35, stiffness: 450, mass: 0.1 }}
      />
    </div>
  );
}
