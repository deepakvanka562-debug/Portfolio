'use client';

import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="relative p-2.5 rounded-full border border-white/10 dark:border-white/10 border-slate-300 bg-slate-900/40 dark:bg-slate-900/60 light:bg-slate-100 backdrop-blur-md text-slate-300 dark:text-slate-200 light:text-slate-700 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180, scale: [0.8, 1.1, 1] }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {theme === 'dark' ? (
          <Moon className="w-4 h-4 text-cyan-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </motion.div>
    </button>
  );
}
