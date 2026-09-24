import React from 'react';
import { ShinyText } from './ShinyText';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#111111] text-white px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[200px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 pb-10 sm:pb-12 border-b border-neutral-800">
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-display">
              Clint Jay C. Estrellanes
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href="mailto:clintestrellanes@gmail.com"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-mono hover:text-white hover:border-neutral-500 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>clintestrellanes@gmail.com</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-white text-neutral-950 text-xs font-semibold hover:bg-neutral-200 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs font-mono text-neutral-500 text-center sm:text-left">
          <div>
            © 2026 Clint Jay C. Estrellanes. All rights reserved.
          </div>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
