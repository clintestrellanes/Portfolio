import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { InfiniteSpiral } from './InfiniteSpiral';
import { TechItem, TECH_ITEMS, TechLogo, TechId } from './TechLogos';
import { Mail, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';

import me from '../assets/me.jpg';

interface AboutTechSectionProps {
  onOpenConnect: () => void;
  onSelectTechForFilter?: (tech: TechItem) => void;
  selectedTechId?: string | null;
}

const getTechSvgDataUri = (id: TechId): string => {
  switch (id) {
    case 'vercel':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polygon points="12,2 22,20 2,20" fill="%23000000"/></svg>';
    case 'react':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23 23 20.46"><circle cx="0" cy="0" r="2.05" fill="%23087EA4"/><g stroke="%23087EA4" stroke-width="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>';
    case 'jsx':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="%23087EA4"/><text x="32" y="32" font-family="monospace" font-size="18" font-weight="900" text-anchor="middle" fill="white">&lt;/&gt;</text><text x="32" y="50" font-family="sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="white">JSX</text></svg>';
    case 'tsx':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="%233178C6"/><text x="32" y="32" font-family="monospace" font-size="20" font-weight="900" text-anchor="middle" fill="white">TS</text><text x="32" y="50" font-family="sans-serif" font-size="14" font-weight="800" text-anchor="middle" fill="white">TSX</text></svg>';
    case 'python':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.9 2C8.4 2 8.6 3.5 8.6 3.5v1.6h3.4v.5H5.2S2 5.3 2 8.8c0 3.5 2.8 3.4 2.8 3.4h1.6V9.8c0-2.6 2.1-2.5 2.1-2.5h3.5s3.2.1 3.2-3.2c0-2.1-3.3-2.1-3.3-2.1zm-2 1.1c.5 0 .9.4.9.9s-.4.9-.9.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9z" fill="%233776AB"/><path d="M12.1 22c3.5 0 3.3-1.5 3.3-1.5v-1.6h-3.4v-.5h6.8s3.2.4 3.2-3.2c0-3.5-2.8-3.4-2.8-3.4h-1.6v2.4c0 2.6-2.1 2.5-2.1 2.5h-3.5s-3.2-.1-3.2 3.2c0 2.1 3.3 2.1 3.3 2.1zm2-1.1c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="%23FFD438"/></svg>';
    case 'mysql':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.5 4.5C19.5 3.1 16.1 2 12 2S4.5 3.1 4.5 4.5V7C4.5 8.4 7.9 9.5 12 9.5s7.5-1.1 7.5-2.5V4.5z" fill="%2300758F"/><path d="M19.5 9.5C19.5 10.9 16.1 12 12 12s-7.5-1.1-7.5-2.5V12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V9.5z" fill="%23005A6F"/><path d="M19.5 14.5c0 1.4-3.4 2.5-7.5 2.5s-7.5-1.1-7.5-2.5V17c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-2.5z" fill="%23F29111"/></svg>';
    case 'docker':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.5 13.5c0 4 3 7 9 7 7 0 10-4.5 10-8-1 0-2 .5-3 .5-1.5 0-2.5-1.2-2.5-1.2s-1.5 1.7-4 1.7c-4 0-5.5-.5-9.5 0z" fill="%232496ED"/><rect x="5.5" y="10.5" width="2" height="2" rx="0.3" fill="%232496ED"/><rect x="8" y="10.5" width="2" height="2" rx="0.3" fill="%232496ED"/><rect x="10.5" y="10.5" width="2" height="2" rx="0.3" fill="%232496ED"/><rect x="8" y="8" width="2" height="2" rx="0.3" fill="%232496ED"/><rect x="10.5" y="8" width="2" height="2" rx="0.3" fill="%232496ED"/><rect x="13" y="10.5" width="2" height="2" rx="0.3" fill="%232496ED"/></svg>';
    case 'git':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.6 11L13 2.4a1.8 1.8 0 0 0-2.6 0L8.6 4.2l2.3 2.3c.5-.2 1.1 0 1.5.4.6.6.6 1.6 0 2.2-.4.4-1 .5-1.5.4L8.6 11.8v4.2c.3.2.6.4.8.8.5.8.2 2-.7 2.5s-2-.2-2.5-1.1c-.5-.9-.2-2 .7-2.5.3-.2.7-.3 1.1-.2v-4.2c-.4.1-.8 0-1.1-.2-.9-.5-1.2-1.6-.7-2.5.3-.5.8-.8 1.3-.9L5.2 5.7 1.4 9.5a1.8 1.8 0 0 0 0 2.6L10 20.7a1.8 1.8 0 0 0 2.6 0l9-8.8a1.8 1.8 0 0 0 0-2.6" fill="%23F05032"/></svg>';
    case 'github':
      return 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.8 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.2 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.5 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5 0-5.5-4.5-10-10-10z" fill="%23181717"/></svg>';
  }
};

export const AboutTechSection: React.FC<AboutTechSectionProps> = ({
  onOpenConnect,
  onSelectTechForFilter,
  selectedTechId,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = 'clintestrellanes@gmail.com';

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
      className="relative w-full min-h-screen bg-white text-[#111111] px-6 sm:px-12 lg:px-16 py-20 border-t border-neutral-200/80 select-text"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main 2-Column Editorial Grid matching Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Headline, Photo + Bio, Contact + Quote */}
          <div className="lg:col-span-7 flex flex-col">
            
            {/* Top Headline: Direct, purposeful, no buzzword inflation */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-950 leading-[1.08] font-display max-w-2xl mb-12"
            >
              Building practical software with clean structure, reliable code, and genuine utility.
            </motion.h2>

            {/* Middle Row: Photo (Left) and Grounded Bio Paragraphs (Right) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start">
              {/* Photo */}
              <div className="sm:col-span-5">
                <div className="relative aspect-[4/5] rounded-none overflow-hidden bg-neutral-950">
                  <img
                    src={me}
                    alt="Clint Jay Estrellanes"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter grayscale contrast-125"
                  />
                </div>
              </div>

              {/* Bio Paragraphs: Modest, informative, focused on learning & building */}
              <div className="sm:col-span-7 space-y-4 text-xs sm:text-[13px] leading-relaxed text-neutral-700">
                <p>
                  I&apos;m <strong className="font-bold text-neutral-950">Clint Jay Estrellanes</strong>, an Information Technology senior at Negros Oriental State University and a DOST-SEI scholar based in Dumaguete City.
                </p>
                <p>
                  My focus is on full-stack web development, software engineering fundamentals, and practical application security. Most of my day-to-day work involves building tools with TypeScript, React, Next.js, Python, and Docker.
                </p>
                <p>
                  I enjoy solving everyday operational problems through software—whether developing student platforms during my internship, collaborating on our startup project TaskBuddy, or exploring cyber defense in team competitions. I value simplicity, maintainability, and learning how systems work from the ground up.
                </p>
              </div>
            </div>

            {/* Bottom Row: Contact (under photo) + Grounded Quote (under bio) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-start mt-10 pt-4">
              {/* Contact Block */}
              <div className="sm:col-span-5 space-y-3">
                <span className="block text-xs font-bold text-neutral-950 lowercase tracking-tight">
                  contact
                </span>
                
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

                <div className="pt-2">
                  <button
                    onClick={onOpenConnect}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Let&apos;s Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Quote Block */}
              <div className="sm:col-span-7">
                <blockquote className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950 leading-tight font-display">
                  “Clarity, reliable data, and steady execution matter far more than unnecessary complexity.”
                </blockquote>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Education, Experience, and Floating Tech Stack */}
          <div className="lg:col-span-5 space-y-10 lg:pl-6">
            
            {/* Education Section */}
            <div>
              <h3 className="text-xs font-bold text-neutral-950 lowercase tracking-tight mb-6">
                education
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-[95px_1fr] gap-x-4 items-start text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 leading-tight pt-0.5">
                    2023 -<br />PRESENT
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-neutral-950 leading-tight">B.S. Information Technology</h4>
                    <p className="text-neutral-600 text-[11px]">Negros Oriental State University (NORSU)</p>
                    <p className="text-neutral-500 text-[11px]">DOST-SEI Scholar • 4th Year Senior</p>
                  </div>
                </div>

                <div className="grid grid-cols-[95px_1fr] gap-x-4 items-start text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 leading-tight pt-0.5">
                    2026
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-neutral-950 leading-tight">Big Data & AI Training</h4>
                    <p className="text-neutral-600 text-[11px]">Hannam University / KOICA</p>
                    <p className="text-neutral-500 text-[11px]">120-hour specialized program</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-xs font-bold text-neutral-950 lowercase tracking-tight mb-6">
                experience
              </h3>

              <div className="space-y-6">
                {/* Role 1 */}
                <div className="grid grid-cols-[95px_1fr] gap-x-4 items-start text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 leading-tight pt-0.5">
                    2026 -<br />TODAY
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-neutral-950 leading-tight">Software Engineering Intern</h4>
                    <p className="text-neutral-600 text-[11px]">NORSU MIS & EDP Unit</p>
                    <p className="text-neutral-500 text-[11px]">Internal web tools (React, TypeScript, Laravel)</p>
                  </div>
                </div>

                {/* Role 2 */}
                <div className="grid grid-cols-[95px_1fr] gap-x-4 items-start text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 leading-tight pt-0.5">
                    2024 -<br />TODAY
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-neutral-950 leading-tight">Developer & Co-Founder</h4>
                    <p className="text-neutral-600 text-[11px]">TaskBuddy</p>
                    <p className="text-neutral-500 text-[11px]">Micro-tasking web app (FastAPI, React, MySQL)</p>
                  </div>
                </div>

                {/* Role 3 */}
                <div className="grid grid-cols-[95px_1fr] gap-x-4 items-start text-xs">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 leading-tight pt-0.5">
                    2026
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-neutral-950 leading-tight">Faculty Evaluation Platform</h4>
                    <p className="text-neutral-600 text-[11px]">Capstone Project (QUAMC)</p>
                    <p className="text-neutral-500 text-[11px]">Full-stack development (Symfony & React)</p>
                  </div>
                </div>

                {/* Role 4 */}
                <div className="grid grid-cols-[95px_1fr] gap-x-4 items-start text-xs">
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

              {/* Clean borderless canvas with floating 3D logos */}
              <div className="w-full relative h-[320px] flex items-center justify-center bg-transparent overflow-hidden">
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