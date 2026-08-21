'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { FileText, Eye, Download, ExternalLink } from 'lucide-react';

export default function ResumeSection() {
  const { personalInfo } = portfolioData;
  const [activeTab, setActiveTab] = useState<'preview' | 'pdf'>('preview');

  return (
    <section id="resume" className="relative py-28 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(0,255,136,0.2)]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Digital Resume Panel</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight"
          >
            THE FULL <span className="gradient-text-emerald">STORY</span>
          </motion.h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mt-3 font-sans">
            Want the complete picture? View the digital document preview or download the official PDF.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-4" />
        </div>

        {/* Top Control Bar & Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 max-w-5xl mx-auto">
          {/* Mode Switcher */}
          <div className="flex items-center p-1 rounded-2xl glass-panel border border-emerald-500/30 bg-slate-950">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === 'preview'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Interactive Preview
            </button>
            <button
              onClick={() => setActiveTab('pdf')}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === 'pdf'
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              PDF Document View
            </button>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="OPEN"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass-panel border border-emerald-500/40 text-xs font-mono font-bold text-emerald-300 hover:text-white hover:border-emerald-400 transition-colors"
            >
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>OPEN MY RESUME</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href="/resume.pdf"
              download="Deepak_Vanka_Resume.pdf"
              data-cursor="DOWNLOAD"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-mono font-bold text-xs shadow-lg shadow-emerald-500/20 hover:opacity-95 transition-opacity"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD PDF</span>
            </a>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto">
          {activeTab === 'preview' ? (
            /* Digital Resume Sheet */
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white text-black rounded-xl p-8 sm:p-12 md:p-14 shadow-2xl font-serif leading-normal selection:bg-slate-200 text-sm"
              style={{ fontFamily: 'Times New Roman, Times, serif' }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase text-black mb-1">
                    DEEPAK VANKA
                  </h1>
                  <p className="text-xs text-black">
                    LinkedIn: <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="underline">{personalInfo.linkedin}</a>
                  </p>
                  <p className="text-xs text-black">
                    GitHub: <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="underline">{personalInfo.github}</a>
                  </p>
                </div>
                <div className="mt-3 sm:mt-0 sm:text-right text-xs text-black space-y-0.5">
                  <p>Email: <a href={`mailto:${personalInfo.email}`} className="underline">{personalInfo.email}</a></p>
                  <p>Mobile: {personalInfo.phone}</p>
                </div>
              </div>

              {/* PROFESSIONAL SUMMARY */}
              <div className="mb-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-xs text-black leading-relaxed text-justify">
                  Motivated Computer Science (AI & ML) student with a strong interest in software development, problem-solving, and emerging technologies. Passionate about learning new technologies and building practical projects to strengthen technical skills. A quick learner with effective communication, teamwork, and analytical abilities, eager to contribute to innovative projects while continuously growing both technically and professionally.
                </p>
              </div>

              {/* EDUCATION */}
              <div className="mb-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-3">
                  EDUCATION
                </h2>
                <div className="space-y-2.5 text-xs text-black">
                  <div>
                    <div className="flex justify-between items-baseline font-bold">
                      <span>• SRM Institute of Science and Technology (SRM IST)</span>
                      <span className="font-normal">Kattankulathur, India</span>
                    </div>
                    <div className="flex justify-between items-baseline italic text-xs pl-3">
                      <span>B.Tech - Computer Science and Engineering (AI & ML); CGPA: 8.05/10</span>
                      <span>2024 – 2028</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-bold">
                      <span>• Narayana Junior College</span>
                      <span className="font-normal">Nellore, Andhra Pradesh</span>
                    </div>
                    <div className="flex justify-between items-baseline italic text-xs pl-3">
                      <span>Class XII - Board of Intermediate Education, Andhra Pradesh; MPC; Percentage: 92.1%</span>
                      <span>2022 – 2024</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline font-bold">
                      <span>• Champion EM High School</span>
                      <span className="font-normal">Sullurupeta, Andhra Pradesh</span>
                    </div>
                    <div className="flex justify-between items-baseline italic text-xs pl-3">
                      <span>Class X - Board of Secondary Education, Andhra Pradesh; Percentage: 83.3%</span>
                      <span>2021 – 2022</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* SKILLS SUMMARY */}
              <div className="mb-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                  SKILLS SUMMARY
                </h2>
                <ul className="space-y-1 text-xs text-black">
                  <li><span className="font-bold">• Languages:</span> C, C++, Java, Python, SQL</li>
                  <li><span className="font-bold">• Web Technologies:</span> HTML, CSS, JavaScript, React.js, Node.js, Flask</li>
                  <li><span className="font-bold">• Databases:</span> MySQL, SQLite, MongoDB</li>
                  <li><span className="font-bold">• Tools:</span> Git, GitHub, Visual Studio Code, Postman, Figma</li>
                  <li><span className="font-bold">• Platforms:</span> Linux, Web, Windows</li>
                </ul>
              </div>

              {/* PROJECTS / ACADEMIC EXPERIENCE */}
              <div className="mb-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-3">
                  PROJECTS / ACADEMIC EXPERIENCE
                </h2>

                <div className="space-y-4 text-xs text-black">
                  <div>
                    <p className="font-bold text-xs mb-1">
                      • Academic Result Management System <span className="font-normal italic">(Full Stack Web Application)</span>:
                    </p>
                    <ul className="list-[circle] list-inside space-y-1 text-xs text-black pl-4 text-justify">
                      <li>Developed a full-stack academic management system with a React-based dashboard connected to a MySQL database for managing students, faculty, courses, examinations, and results.</li>
                      <li>Implemented dynamic CRUD operations for multiple database tables using reusable components and automated backend routing, enabling efficient data management.</li>
                      <li>Designed a responsive dashboard with secure JWT authentication, search functionality, and analytics to simplify academic record management.</li>
                    </ul>
                    <p className="pl-3 mt-1.5">
                      <span className="font-bold">Tech Stack:</span> React.js, Node.js, Express.js, MySQL, JavaScript, Vite, React Router, Axios, JWT
                    </p>
                  </div>

                  <div>
                    <p className="font-bold text-xs mb-1">
                      • SentiGuard AI <span className="font-normal italic">(AI-Powered Multilingual Mental Health & Regional Safety Platform)</span>:
                    </p>
                    <ul className="list-[circle] list-inside space-y-1 text-xs text-black pl-4 text-justify">
                      <li>Developed a full-stack AI-powered web platform for multilingual mental wellness monitoring, sentiment analysis, voice journaling, and real-time scam detection with support for English, Telugu, and Hindi.</li>
                      <li>Built intelligent modules for text and audio sentiment analysis, AI wellness chatbot, mood analytics dashboard, cyber threat detection, emergency support, and multilingual user experience using reusable React components and RESTful APIs.</li>
                      <li>Designed a responsive and scalable application with secure authentication, theme customization, contextual state management, and interactive data visualization to deliver an intuitive and privacy-focused user experience.</li>
                    </ul>
                    <p className="pl-3 mt-1.5">
                      <span className="font-bold">Tech Stack:</span> React.js, Vite, Tailwind CSS, Node.js, Express.js, JavaScript, REST API, React Context API, Recharts, NLP, Speech-to-Text, AI Sentiment Analysis
                    </p>
                  </div>
                </div>
              </div>

              {/* CERTIFICATIONS */}
              <div className="mb-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                  CERTIFICATIONS
                </h2>
                <p className="text-xs text-black leading-relaxed">
                  <span className="font-bold">• Programming in Java – NPTEL:</span> Successfully completed a 12-week NPTEL certification covering Java programming fundamentals, object-oriented programming (OOP), exception handling, collections, file handling, multithreading, and core Java application development.
                </p>
              </div>

              {/* ACHIEVEMENTS & LEADERSHIP */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-black border-b border-black pb-0.5 mb-2">
                  ACHIEVEMENTS & LEADERSHIP
                </h2>
                <ul className="space-y-1.5 text-xs text-black">
                  <li>
                    <span className="font-bold">• Mechanical Workshop Competition:</span> Secured 3rd place as part of a team in a Mechanical Workshop competition, demonstrating teamwork, practical problem-solving, and technical skills.
                  </li>
                  <li>
                    <span className="font-bold">• Community Connect Program:</span> Led awareness sessions for school students and coordinated with team members and schools to execute community engagement activities.
                  </li>
                  <li>
                    <span className="font-bold">• Directorate of Student Affairs (DSA) – Discipline Domain:</span> Served as an active member of the Discipline Domain, supporting campus discipline, coordinating student activities, and contributing to a safe, organized, and professional campus environment.
                  </li>
                </ul>
              </div>
            </motion.div>
          ) : (
            /* Embedded PDF Iframe Viewer */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl glass-panel border border-emerald-500/30 p-2 overflow-hidden bg-slate-950"
            >
              <iframe
                src="/resume.pdf"
                className="w-full h-[750px] rounded-2xl border-none"
                title="Deepak Vanka Resume PDF"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
