'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Volume2, VolumeX, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import { playJarvisBeep, speakJarvisVoice } from '@/utils/soundEffects';

const BOOT_STEPS = [
  'INITIALIZING...',
  'LOADING PERSONAL SYSTEM...',
  'AUTHENTICATING USER...',
  'DEEPAK.VANKA',
  'SYSTEM ONLINE',
  'WELCOME, VISITOR'
];

export default function OpeningLoader() {
  const [promptUser, setPromptUser] = useState<boolean>(true);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [bootingStarted, setBootingStarted] = useState<boolean>(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if user already made choice in session
    const storedChoice = sessionStorage.getItem('jarvis_experience_mode');
    if (storedChoice) {
      setPromptUser(false);
      setAudioEnabled(storedChoice === 'audio');
      setBootingStarted(true);
    }
  }, []);

  const startSequence = (enableAudio: boolean) => {
    sessionStorage.setItem('jarvis_experience_mode', enableAudio ? 'audio' : 'silent');
    setAudioEnabled(enableAudio);
    setPromptUser(false);
    setBootingStarted(true);

    if (enableAudio) {
      playJarvisBeep('startup');
      speakJarvisVoice(
        "Welcome to Deepak's portfolio. I'm JARVIS, your AI guide. Let's explore his work, skills, projects, and achievements."
      );
    }
  };

  useEffect(() => {
    if (!bootingStarted) return;

    const timer = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < BOOT_STEPS.length - 1) {
          if (audioEnabled) playJarvisBeep('beep');
          return prev + 1;
        } else {
          clearInterval(timer);
          if (audioEnabled) playJarvisBeep('activation');
          setTimeout(() => setIsDone(true), 600);
          return prev;
        }
      });
    }, 450);

    return () => clearInterval(timer);
  }, [bootingStarted, audioEnabled]);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-slate-100 font-mono select-none overflow-hidden"
      >
        {/* Fine background grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />

        {promptUser ? (
          /* Initial Holographic Prompt: INITIALIZE AI EXPERIENCE? */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 p-8 rounded-3xl glass-panel border-2 border-emerald-500/40 bg-slate-950/95 max-w-md text-center shadow-[0_0_50px_rgba(0,255,136,0.2)] font-sans"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/20">
              <Cpu className="w-8 h-8 animate-pulse" />
            </div>

            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
              JARVIS AI ENGINE v4.2
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-3 font-mono">
              INITIALIZE AI EXPERIENCE?
            </h3>

            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              Enable the professional JARVIS AI voice guide and interactive sound effects for a cinematic tour.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono">
              <button
                onClick={() => startSequence(true)}
                data-cursor="ACTIVATE"
                className="py-3.5 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 text-white font-bold text-xs uppercase tracking-widest shadow-lg shadow-emerald-500/30 hover:opacity-95 transition-all border border-emerald-300/40 flex items-center justify-center gap-2"
              >
                <Volume2 className="w-4 h-4" />
                <span>[ ACTIVATE ]</span>
              </button>

              <button
                onClick={() => startSequence(false)}
                data-cursor="SILENT"
                className="py-3.5 px-4 rounded-2xl glass-panel border border-white/10 text-slate-300 hover:text-white hover:border-emerald-500/40 font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <VolumeX className="w-4 h-4 text-slate-400" />
                <span>[ ENTER SILENTLY ]</span>
              </button>
            </div>
          </motion.div>
        ) : (
          /* System Boot Terminal Sequence */
          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center">
            <div className="relative w-20 h-20 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-emerald-500/30 border-t-emerald-400 animate-spin" />
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.5)]">
                <Cpu className="w-7 h-7 text-emerald-100 animate-pulse" />
              </div>
            </div>

            <div className="w-full p-4 rounded-2xl glass-panel border border-emerald-500/30 bg-slate-900/90 shadow-2xl mb-4">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-emerald-500/20">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] text-emerald-400 tracking-widest uppercase font-bold">
                  BOOT SEQUENCE // JARVIS ONLINE
                </span>
              </div>

              <div className="min-h-[32px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentStepIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="text-xs sm:text-sm font-bold tracking-wider text-emerald-300 uppercase"
                  >
                    {BOOT_STEPS[currentStepIndex]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden border border-emerald-500/20">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{
                  width: `${((currentStepIndex + 1) / BOOT_STEPS.length) * 100}%`,
                }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
