import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { InfiniteSpiral } from './InfiniteSpiral';
import { TechItem, TECH_ITEMS, TechLogo, TechId } from './TechLogos';
import { Mail, ArrowUpRight, Copy, Check, Github, Linkedin, Facebook } from 'lucide-react';

import me from '../assets/me.jpg';

interface AboutTechSectionProps {
  onSelectTechForFilter?: (tech: TechItem) => void;
  selectedTechId?: string | null;
}

const getTechSvgDataUri = (id: TechId): string => {
  switch (id) {
    case 'typescript':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="%233178C6"/><path d="M12.5 12.875V11.25H4.5V12.875H7.375V19.5H9.625V12.875H12.5ZM13.875 17.5C14.375 18.25 15.25 18.75 16.375 18.75C17.625 18.75 18.5 18.125 18.5 17.125C18.5 14.75 14.125 15.25 14.125 12.375C14.125 10.75 15.375 9.75 17.125 9.75C18.25 9.75 19.125 10.125 19.75 10.875L18.375 12.125C18 11.625 17.5 11.375 16.875 11.375C16 11.375 15.5 11.75 15.5 12.375C15.5 14.625 19.875 14.125 19.875 17C19.875 18.875 18.375 20.375 16.25 20.375C14.875 20.375 13.625 19.625 13 18.625L13.875 17.5Z" fill="white"/></svg>';
    case 'python':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9 2C8.4 2 8.6 3.5 8.6 3.5v1.6h3.4v.5H5.2S2 5.3 2 8.8c0 3.5 2.8 3.4 2.8 3.4h1.6V9.8c0-2.6 2.1-2.5 2.1-2.5h3.5s3.2.1 3.2-3.2c0-2.1-3.3-2.1-3.3-2.1zm-2 1.1c.5 0 .9.4.9.9s-.4.9-.9.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9z" fill="%233776AB"/><path d="M12.1 22c3.5 0 3.3-1.5 3.3-1.5v-1.6h-3.4v-.5h6.8s3.2.4 3.2-3.2c0-3.5-2.8-3.4-2.8-3.4h-1.6v2.4c0 2.6-2.1 2.5-2.1 2.5h-3.5s-3.2-.1-3.2 3.2c0 2.1 3.3 2.1 3.3 2.1zm2-1.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="%23FFD438"/></svg>';
    case 'fastapi':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="%23009688"/><path d="M12.8 5L7 13.5H12L11.2 19L17 10.5H12L12.8 5Z" fill="white"/></svg>';
    case 'react':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23 23 20.46"><circle cx="0" cy="0" r="2.05" fill="%23087EA4"/><g stroke="%23087EA4" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>';
    case 'reactnative':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="4.5" y="1.5" width="15" height="21" rx="3" fill="%230F172A" stroke="%2361DAFB" stroke-width="1.5"/><line x1="10" y1="3.8" x2="14" y2="3.8" stroke="%2361DAFB" stroke-width="1" stroke-linecap="round" opacity="0.85"/><circle cx="12" cy="11.8" r="1.15" fill="%2361DAFB"/><g stroke="%2361DAFB" stroke-width="0.85" fill="none"><ellipse cx="12" cy="11.8" rx="4.5" ry="1.7"/><ellipse cx="12" cy="11.8" rx="4.5" ry="1.7" transform="rotate(60 12 11.8)"/><ellipse cx="12" cy="11.8" rx="4.5" ry="1.7" transform="rotate(120 12 11.8)"/></g><line x1="9.5" y1="19.8" x2="14.5" y2="19.8" stroke="%2361DAFB" stroke-width="1.2" stroke-linecap="round" opacity="0.85"/></svg>';
    case 'symfony':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="%23000000"/><path d="M14.6 8.5C13.8 7.8 12.5 7.6 11.3 7.9C9.4 8.4 8.2 10 8.4 11.7C8.6 13.3 9.9 14.3 11.5 14.6L12.3 14.8C13.4 15 14 15.6 13.9 16.4C13.8 17.3 12.8 17.8 11.6 17.6C10.5 17.4 9.7 16.7 9.4 15.9L7.8 16.6C8.3 18.2 9.7 19.3 11.4 19.5C13.6 19.8 15.3 18.6 15.5 16.6C15.7 14.7 14.5 13.7 12.8 13.4L12 13.2C11.1 13 10.3 12.6 10.2 11.8C10.1 11.1 10.7 10.4 11.7 10.2C12.6 10 13.3 10.3 13.8 10.8L14.6 8.5Z" fill="white"/></svg>';
    case 'mysql':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.5 4.5C19.5 3.1 16.1 2 12 2S4.5 3.1 4.5 4.5V7C4.5 8.4 7.9 9.5 12 9.5s7.5-1.1 7.5-2.5V4.5z" fill="%2300758F"/><path d="M19.5 9.5C19.5 10.9 16.1 12 12 12s-7.5-1.1-7.5-2.5V12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V9.5z" fill="%23005A6F"/><path d="M19.5 14.5c0 1.4-3.4 2.5-7.5 2.5s-7.5-1.1-7.5-2.5V17c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-2.5z" fill="%23F29111"/></svg>';
    case 'firebase':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.5 17.5L6.8 3.5l3.2 6.1L4.5 17.5zm15 0L17.2 9.6l-2.7-5.1-3 5.6 5.8 7.4h2.2z" fill="%23FFA000"/><path d="M4.5 17.5l7 4 5.8-4-5.8-11.2-7 11.2z" fill="%23FFCA28"/></svg>';
    case 'docker':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.5 13.5c0 4 3 7 9 7 7 0 10-4.5 10-8-1 0-2 .5-3 .5-1.5 0-2.5-1.2-2.5-1.2s-1.5 1.7-4 1.7c-4 0-5.5-.5-9.5 0z" fill="%232496ED"/><rect x="5.5" y="10.5" width="2" height="2" rx="0.3" fill="%232496ED"/><rect x="8" y="10.5" width="2" height="2" rx="0.3" fill="%232496ED"/><rect x="10.5" y="10.5" width="2" height="2" rx="0.3" fill="%232496ED"/><rect x="8" y="8" width="2" height="2" rx="0.3" fill="%232496ED"/><rect x="10.5" y="8" width="2" height="2" rx="0.3" fill="%232496ED"/><rect x="13" y="10.5" width="2" height="2" rx="0.3" fill="%232496ED"/></svg>';
    case 'git':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.6 11L13 2.4a1.8 1.8 0 0 0-2.6 0L8.6 4.2l2.3 2.3c.5-.2 1.1 0 1.5.4.6.6.6 1.6 0 2.2-.4.4-1 .5-1.5.4L8.6 11.8v4.2c.3.2.6.4.8.8.5.8.2 2-.7 2.5s-2-.2-2.5-1.1c-.5-.9-.2-2 .7-2.5.3-.2.7-.3 1.1-.2v-4.2c-.4.1-.8 0-1.1-.2-.9-.5-1.2-1.6-.7-2.5.3-.5.8-.8 1.3-.9L5.2 5.7 1.4 9.5a1.8 1.8 0 0 0 0 2.6L10 20.7a1.8 1.8 0 0 0 2.6 0l9-8.8a1.8 1.8 0 0 0 0-2.6" fill="%23F05032"/></svg>';
    case 'github':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.8 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.2 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5 0-5.5-4.5-10-10-10z" fill="%23181717"/></svg>';
    default:
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="%23262626"/></svg>';
  }
};

export const AboutTechSection: React.FC<AboutTechSectionProps> = ({
  onSelectTechForFilter,
  selectedTechId,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = 'clintjayestrellanes17@gmail.com';

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const spiralItems = useMemo(() => {
    return TECH_ITEMS.map((tech) => ({
      id: tech.id,
      name: tech.name,
      label: tech.name,
      category: tech.category,
      alt: `${tech.name} logo`,
      src: getTechSvgDataUri(tech.id),
      icon: <TechLogo id={tech.id} size={36} />,
      onClick: () => onSelectTechForFilter?.(tech),
    }));
  }, [onSelectTechForFilter]);

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-white text-[#111111] px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 border-t border-neutral-200/80 select-text"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Headline, Photo + Bio, Contact + Socials */}
          <div className="lg:col-span-7 flex flex-col">
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.12] sm:leading-[1.08] font-display max-w-2xl mb-8 sm:mb-12"
            >
              Building practical software and applied AI systems with clean structure, reliable code, and genuine utility.
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Photo */}
              <div className="sm:col-span-5 max-w-[280px] sm:max-w-none mx-auto sm:mx-0 w-full">
                <div className="relative aspect-[4/5] rounded-xl sm:rounded-none overflow-hidden bg-neutral-950">
                  <img
                    src={me}
                    alt="Clint Jay Estrellanes"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale contrast-125"
                  />
                </div>
              </div>

              {/* Bio Paragraphs */}
              <div className="sm:col-span-7 space-y-4 text-xs sm:text-[13px] leading-relaxed text-neutral-700">
                <p>
                  I&apos;m <strong className="font-bold text-neutral-950">Clint Jay Estrellanes</strong>, an Information Technology senior at Negros Oriental State University and a DOST-SEI scholar based in Dumaguete City.
                </p>
                <p>
                  I am deeply passionate about <strong className="font-semibold text-neutral-900">AI engineering</strong> and the intersection between dependable software architecture and applied intelligence. Rather than treating AI as a superficial novelty, I focus on engineering practical, end-to-end systems—integrating Retrieval-Augmented Generation (RAG), vector search, and agentic workflows into production-ready platforms built with Python, TypeScript, React, Next.js, and Docker.
                </p>
                <p>
                  My work spans leading development on <strong className="font-semibold text-neutral-900">NIEL</strong> (as Lead Developer & Full Stack Developer for NORSU&apos;s agentic RAG assistant), building modular client-side architectures for the university&apos;s <strong className="font-semibold text-neutral-900">Student Management System (SMS)</strong> as Frontend Developer, and serving as <strong className="font-semibold text-neutral-900">CEO & Lead Developer</strong> of TaskBuddy (DICT PSC 9 Regional Finalist). Whether architecting multi-agent graphs or engineering production web applications, I build with a clear compass: clean structure, deterministic execution, and real-world utility over hype.
                </p>
              </div>
            </div>

            {/* Bottom Row: Direct Contact & Social Links (under photo) + Quote (under bio) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start mt-10 pt-4">
              
              {/* Contact & Social Links */}
              <div className="sm:col-span-5 space-y-3">
                <span className="block text-xs font-bold text-neutral-950 lowercase tracking-tight">
                  contact & profiles
                </span>
                
                {/* Email Address */}
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                  <a
                    href={`mailto:${email}`}
                    className="text-xs text-neutral-800 hover:text-black hover:underline underline-offset-2 break-all"
                  >
                    {email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    title="Copy email"
                    className="p-1 text-neutral-400 hover:text-neutral-900 transition-colors"
                  >
                    {copiedEmail ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                {/* Social Profiles */}
                <div className="pt-2 flex flex-col gap-2">
                  <a
                    href="https://github.com/clintestrellanes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between text-xs text-neutral-700 hover:text-neutral-950 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                      <span>GitHub</span>
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-neutral-950 transition-colors" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/clint-jay-estrellanes-564957282/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between text-xs text-neutral-700 hover:text-neutral-950 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                      <span>LinkedIn</span>
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-neutral-950 transition-colors" />
                  </a>

                  <a
                    href="https://www.facebook.com/clintjay.estrellanes.7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between text-xs text-neutral-700 hover:text-neutral-950 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Facebook className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
                      <span>Facebook</span>
                    </span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-neutral-950 transition-colors" />
                  </a>
                </div>
              </div>

              {/* Quote Block */}
              <div className="sm:col-span-7">
                <blockquote className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-950 leading-tight font-display">
                  “Clarity, reliable data, and steady execution matter far more than unnecessary complexity.”
                </blockquote>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Education, Experience, and Floating Tech Stack */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10 lg:pl-6">
            
            {/* Education Section */}
            <div>
              <h3 className="text-xs font-bold text-neutral-950 lowercase tracking-tight mb-5 sm:mb-6">
                education
              </h3>
              
              <div className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[95px_1fr] gap-x-3 sm:gap-x-4 items-start text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 leading-tight pt-0.5">
                    2023 -<br />PRESENT
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-neutral-950 leading-tight">B.S. Information Technology</h4>
                    <p className="text-neutral-600 text-[11px]">Negros Oriental State University (NORSU)</p>
                    <p className="text-neutral-500 text-[11px]">DOST-SEI Scholar • 4th Year Senior</p>
                  </div>
                </div>

                <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[95px_1fr] gap-x-3 sm:gap-x-4 items-start text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 leading-tight pt-0.5">
                    2026
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-neutral-950 leading-tight">Big Data & AI Training</h4>
                    <p className="text-neutral-600 text-[11px]">Silliman University - Hannam University / KOICA</p>
                    <p className="text-neutral-500 text-[11px]">120-hour specialized program</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-xs font-bold text-neutral-950 lowercase tracking-tight mb-5 sm:mb-6">
                experience
              </h3>

              <div className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[95px_1fr] gap-x-3 sm:gap-x-4 items-start text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 leading-tight pt-0.5">
                    2026 -<br />TODAY
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-neutral-950 leading-tight">Frontend Developer</h4>
                    <p className="text-neutral-600 text-[11px]">NORSU MIS & EDP Unit (SMS Enrollment System)</p>
                    <p className="text-neutral-500 text-[11px]">Registration funnels, loadslip PDF pipelines (React, TS)</p>
                  </div>
                </div>

                <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[95px_1fr] gap-x-3 sm:gap-x-4 items-start text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 leading-tight pt-0.5">
                    2026
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-neutral-950 leading-tight">Lead Developer & Full Stack</h4>
                    <p className="text-neutral-600 text-[11px]">NIEL — Agentic AI University Assistant</p>
                    <p className="text-neutral-500 text-[11px]">LangGraph multi-agent RAG, FAISS search, Dijkstra map</p>
                  </div>
                </div>

                <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[95px_1fr] gap-x-3 sm:gap-x-4 items-start text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 leading-tight pt-0.5">
                    2024 -<br />TODAY
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-neutral-950 leading-tight">CEO & Lead Developer</h4>
                    <p className="text-neutral-600 text-[11px]">TaskBuddy (DICT PSC 9 Regional Finalist)</p>
                    <p className="text-neutral-500 text-[11px]">Escrow micro-economy, student gig platform (FastAPI & React)</p>
                  </div>
                </div>

                <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[95px_1fr] gap-x-3 sm:gap-x-4 items-start text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 leading-tight pt-0.5">
                    2026
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-neutral-950 leading-tight">Faculty Evaluation Platform</h4>
                    <p className="text-neutral-600 text-[11px]">Capstone Project (QUAMC)</p>
                    <p className="text-neutral-500 text-[11px]">Full-stack development (Symfony & React)</p>
                  </div>
                </div>

                <div className="grid grid-cols-[80px_1fr] sm:grid-cols-[95px_1fr] gap-x-3 sm:gap-x-4 items-start text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 leading-tight pt-0.5">
                    2026
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-neutral-950 leading-tight">Cyber Defense Competitor</h4>
                    <p className="text-neutral-600 text-[11px]">Army CDX TRON & DICT HackForGov</p>
                    <p className="text-neutral-500 text-[11px]">Blue-team analysis & CTF challenges</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right: Floating Logos Tech Stack */}
            <div className="pt-8 border-t border-neutral-200/80">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="text-xs font-bold text-neutral-950 lowercase tracking-tight">
                  tech stack & tools
                </h3>
                <span className="text-[10px] font-mono text-neutral-400">
                  {selectedTechId ? `Selected: ${selectedTechId}` : ''}
                </span>
              </div>

              <div className="w-full relative h-[270px] sm:h-[320px] flex items-center justify-center bg-transparent overflow-hidden">
                <InfiniteSpiral
                  items={spiralItems}
                  speed={0.45}
                  direction="up"
                  animationMode="all"
                  radius={135}
                  cardWidth={56}
                  cardHeight={56}
                  verticalSpacing={48}
                  cardsPerTurn={6}
                  perspective={850}
                  pauseOnHover={true}
                  className="h-full w-full"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutTechSection;