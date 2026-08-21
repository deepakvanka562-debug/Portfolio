'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Cpu, FolderGit2, FileText, MessageSquare, Send, Sparkles } from 'lucide-react';
import { speakJarvisVoice, playJarvisBeep } from '@/utils/soundEffects';

export default function JarvisAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [messageHistory, setMessageHistory] = useState<
    { sender: 'jarvis' | 'user'; text: string }[]
  >([
    {
      sender: 'jarvis',
      text: 'JARVIS System v4.2 Online. Welcome to Deepak Vanka\'s AI Command Center. How may I assist your inspection today?',
    },
  ]);

  useEffect(() => {
    const handleOpenEvent = () => {
      setIsOpen(true);
      setMessageHistory((prev) => [
        ...prev,
        { sender: 'jarvis', text: 'Welcome back. How can I assist you?' },
      ]);
    };

    window.addEventListener('open-jarvis-panel', handleOpenEvent);
    return () => window.removeEventListener('open-jarvis-panel', handleOpenEvent);
  }, []);

  const sendQueryToBackend = async (prompt: string, targetId?: string, isPdf?: boolean) => {
    setMessageHistory((prev) => [...prev, { sender: 'user', text: prompt }]);
    setIsProcessing(true);

    try {
      // Call private backend server route POST /api/chat
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: prompt }),
      });

      const data = await res.json();
      setIsProcessing(false);

      if (data.success && data.text) {
        playJarvisBeep('beep');
        speakJarvisVoice(data.text);
        setMessageHistory((prev) => [...prev, { sender: 'jarvis', text: data.text }]);

        if (isPdf || data.actionType === 'open_resume') {
          window.open('/resume.pdf', '_blank');
        } else if (targetId || data.targetSection) {
          const sectionToScroll = targetId || data.targetSection;
          const el = document.getElementById(sectionToScroll);
          if (el) {
            const yOffset = -80;
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      } else {
        throw new Error(data.error || 'Failed to parse response');
      }
    } catch {
      setIsProcessing(false);
      const fallbackText = "JARVIS Processing: Initiating requested navigation module.";
      playJarvisBeep('beep');
      speakJarvisVoice(fallbackText);
      setMessageHistory((prev) => [...prev, { sender: 'jarvis', text: fallbackText }]);

      if (isPdf) {
        window.open('/resume.pdf', '_blank');
      } else if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isProcessing) return;
    const msg = inputText.trim();
    setInputText('');
    sendQueryToBackend(msg);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen) {
            playJarvisBeep('activation');
          }
        }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        data-cursor="JARVIS"
        aria-label="Toggle JARVIS AI Assistant"
        className="relative w-14 h-14 rounded-full bg-slate-950 border-2 border-emerald-400/80 text-emerald-400 flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.4)] backdrop-blur-xl group overflow-hidden"
      >
        <span className="absolute inset-0 rounded-full border border-emerald-400/40 animate-ping opacity-75" />
        <Bot className="w-6 h-6 group-hover:rotate-12 transition-transform text-emerald-300 relative z-10" />
      </motion.button>

      {/* Holographic AI HUD Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-18 right-0 w-[90vw] sm:w-[380px] rounded-3xl glass-panel border-2 border-emerald-500/40 bg-slate-950/95 p-5 shadow-[0_0_50px_rgba(0,255,136,0.2)] backdrop-blur-2xl text-slate-100 overflow-hidden font-sans"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/30 font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-black uppercase tracking-widest text-emerald-300">
                  JARVIS ONLINE // POST /api/chat
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-emerald-400 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat History Container */}
            <div className="h-56 overflow-y-auto space-y-2.5 pr-1 text-xs font-mono scrollbar-thin mb-3">
              {messageHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2.5 rounded-2xl ${
                    msg.sender === 'jarvis'
                      ? 'bg-emerald-950/40 border border-emerald-500/20 text-emerald-200'
                      : 'bg-slate-900 border border-white/10 text-slate-200 text-right ml-auto max-w-[85%]'
                  }`}
                >
                  <span className="text-[9px] uppercase tracking-widest block text-emerald-400 font-bold mb-0.5">
                    {msg.sender === 'jarvis' ? 'JARVIS AI' : 'USER'}
                  </span>
                  <p className="leading-relaxed font-sans">{msg.text}</p>
                </div>
              ))}
              {isProcessing && (
                <div className="p-2.5 rounded-2xl bg-emerald-950/30 text-emerald-400 text-xs font-mono animate-pulse">
                  Querying private server API...
                </div>
              )}
            </div>

            {/* Input Form */}
            <form onSubmit={handleFormSubmit} className="mb-3 flex items-center gap-2 font-mono">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask JARVIS anything..."
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs text-white focus:outline-none focus:border-emerald-400"
              />
              <button
                type="submit"
                disabled={isProcessing}
                className="p-2 rounded-xl bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Action Shortcuts */}
            <div className="space-y-1.5 pt-2 border-t border-emerald-500/20 font-mono">
              <span className="text-[10px] uppercase tracking-widest text-emerald-400/80 block mb-1">
                EXECUTIVE SHORTCUTS
              </span>
              <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                <button
                  onClick={() => sendQueryToBackend('Show my projects', 'projects')}
                  className="p-2 rounded-xl bg-slate-900 border border-emerald-500/20 text-emerald-300 hover:bg-emerald-950/50 hover:border-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <FolderGit2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Show Projects</span>
                </button>

                <button
                  onClick={() => sendQueryToBackend('Show my skills', 'skills')}
                  className="p-2 rounded-xl bg-slate-900 border border-emerald-500/20 text-emerald-300 hover:bg-emerald-950/50 hover:border-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <Cpu className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Show Skills</span>
                </button>

                <button
                  onClick={() => sendQueryToBackend('Open resume', undefined, true)}
                  className="p-2 rounded-xl bg-slate-900 border border-emerald-500/20 text-emerald-300 hover:bg-emerald-950/50 hover:border-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Open Resume</span>
                </button>

                <button
                  onClick={() => sendQueryToBackend('Contact me', 'contact')}
                  className="p-2 rounded-xl bg-slate-900 border border-emerald-500/20 text-emerald-300 hover:bg-emerald-950/50 hover:border-emerald-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Contact Me</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
