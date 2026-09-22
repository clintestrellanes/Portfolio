import React from 'react';
import { ShinyText } from './ShinyText';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] text-white px-6 sm:px-12 lg:px-16 py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[220px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-neutral-800">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Clint Jay C. Estrellanes
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="mailto:clintestrellanes@gmail.com"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-mono hover:text-white hover:border-neutral-500 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>clintestrellanes@gmail.com</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>
            © 2026 Clint Jay C. Estrellanes. All rights reserved.
          </div>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
