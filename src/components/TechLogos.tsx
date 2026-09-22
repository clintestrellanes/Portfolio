import React from 'react';

export type TechId = 'vercel' | 'react' | 'jsx' | 'tsx' | 'python' | 'mysql' | 'docker' | 'git' | 'github';

export interface TechItem {
  id: TechId;
  name: string;
  category: string;
  color: string;
  bgLight: string;
  description: string;
  level: string;
}

export const TECH_ITEMS: TechItem[] = [
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'Edge & Cloud Hosting',
    color: '#000000',
    bgLight: 'bg-neutral-100 text-neutral-900 border-neutral-300',
    description: 'Serverless deployment, edge rendering, and CI/CD workflows',
    level: 'Production Ready',
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend Library',
    color: '#087EA4',
    bgLight: 'bg-sky-50 text-sky-900 border-sky-200',
    description: 'Component architecture, concurrent hooks, and modern state machines',
    level: 'Advanced Specialist',
  },
  {
    id: 'jsx',
    name: 'JSX',
    category: 'Component Syntax',
    color: '#23272F',
    bgLight: 'bg-cyan-50 text-cyan-900 border-cyan-200',
    description: 'Declarative UI markup, virtual DOM rendering, and design token binding',
    level: 'Expert',
  },
  {
    id: 'tsx',
    name: 'TSX',
    category: 'Typed Components',
    color: '#3178C6',
    bgLight: 'bg-blue-50 text-blue-900 border-blue-200',
    description: 'Strict end-to-end type safety, generic props, and compile-time validation',
    level: 'Expert',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Backend & Data',
    color: '#3776AB',
    bgLight: 'bg-amber-50 text-amber-900 border-amber-200',
    description: 'FastAPI, automated data pipelines, scripting, and AI model orchestration',
    level: 'Advanced',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'Relational Database',
    color: '#00758F',
    bgLight: 'bg-teal-50 text-teal-900 border-teal-200',
    description: 'ACID transactional schemas, relational indexing, and performant query tuning',
    level: 'Proficient',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Containerization',
    color: '#2496ED',
    bgLight: 'bg-blue-50 text-blue-900 border-blue-200',
    description: 'Isolated multi-stage container builds, docker-compose, and reproducible envs',
    level: 'Production Ready',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Version Control',
    color: '#F05032',
    bgLight: 'bg-orange-50 text-orange-900 border-orange-200',
    description: 'Distributed tree management, interactive rebasing, and branching hygiene',
    level: 'Expert',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Collaborative Hub',
    color: '#181717',
    bgLight: 'bg-neutral-100 text-neutral-900 border-neutral-300',
    description: 'GitHub Actions, automated test suites, PR reviews, and open-source contribution',
    level: 'Daily Driver',
  },
];

interface TechLogoProps {
  id: TechId;
  size?: number;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ id, size = 32, className = '' }) => {
  switch (id) {
    case 'vercel':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path d="M12 2L22 20H2L12 2Z" fill="currentColor" />
        </svg>
      );

    case 'react':
      return (
        <svg
          width={size}
          height={size}
          viewBox="-11.5 -10.23174 23 20.46348"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <circle cx="0" cy="0" r="2.05" fill="#087EA4" />
          <g stroke="#087EA4" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'jsx':
      return (
        <div
          style={{ width: size, height: size }}
          className={`flex flex-col items-center justify-center font-mono font-black text-cyan-600 rounded bg-cyan-100/70 border border-cyan-300 leading-none ${className}`}
        >
          <span className="text-[10px] tracking-tighter">&lt;/&gt;</span>
          <span className="text-[9px] font-bold">JSX</span>
        </div>
      );

    case 'tsx':
      return (
        <div
          style={{ width: size, height: size }}
          className={`flex flex-col items-center justify-center font-mono font-black text-blue-600 rounded bg-blue-100/70 border border-blue-300 leading-none ${className}`}
        >
          <span className="text-[10px] tracking-tighter">TS</span>
          <span className="text-[9px] font-bold">TSX</span>
        </div>
      );

    case 'python':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M11.91 2C8.38 2 8.6 3.53 8.6 3.53V5.13H12.03V5.64H5.16S2 5.28 2 8.81C2 12.35 4.76 12.18 4.76 12.18H6.41V9.82C6.41 7.23 8.55 7.28 8.55 7.28H11.95S15.19 7.35 15.19 4.12C15.2 2 11.91 2 11.91 2ZM9.95 3.12C10.42 3.12 10.8 3.5 10.8 3.97C10.8 4.44 10.42 4.82 9.95 4.82C9.48 4.82 9.1 4.44 9.1 3.97C9.1 3.5 9.48 3.12 9.95 3.12Z"
            fill="#3776AB"
          />
          <path
            d="M12.09 22C15.62 22 15.4 20.47 15.4 20.47V18.87H11.97V18.36H18.84S22 18.72 22 15.19C22 11.65 19.24 11.82 19.24 11.82H17.59V14.18C17.59 16.77 15.45 16.72 15.45 16.72H12.05S8.81 16.65 8.81 19.88C8.8 22 12.09 22 12.09 22ZM14.05 20.88C13.58 20.88 13.2 20.5 13.2 20.03C13.2 19.56 13.58 19.18 14.05 19.18C14.52 19.18 14.9 19.56 14.9 20.03C14.9 20.5 14.52 20.88 14.05 20.88Z"
            fill="#FFD438"
          />
        </svg>
      );

    case 'mysql':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M19.5 4.5C19.5 3.12 16.14 2 12 2C7.86 2 4.5 3.12 4.5 4.5V7C4.5 8.38 7.86 9.5 12 9.5C16.14 9.5 19.5 8.38 19.5 7V4.5Z"
            fill="#00758F"
          />
          <path
            d="M19.5 9.5C19.5 10.88 16.14 12 12 12C7.86 12 4.5 10.88 4.5 9.5V12C4.5 13.38 7.86 14.5 12 14.5C16.14 14.5 19.5 13.38 19.5 12V9.5Z"
            fill="#005A6F"
          />
          <path
            d="M19.5 14.5C19.5 15.88 16.14 17 12 17C7.86 17 4.5 15.88 4.5 14.5V17C4.5 18.38 7.86 19.5 12 19.5C16.14 19.5 19.5 18.38 19.5 17V14.5Z"
            fill="#F29111"
          />
        </svg>
      );

    case 'docker':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M2.5 13.5C2.5 17.5 5.5 20.5 11.5 20.5C18.5 20.5 21.5 16 21.5 12.5C20.5 12.5 19.5 13 18.5 13C17 13 16 11.8 16 11.8C16 11.8 14.5 13.5 12 13.5C8 13.5 6.5 13 2.5 13.5Z"
            fill="#2496ED"
          />
          <rect x="5.5" y="10.5" width="2" height="2" rx="0.3" fill="#2496ED" />
          <rect x="8" y="10.5" width="2" height="2" rx="0.3" fill="#2496ED" />
          <rect x="10.5" y="10.5" width="2" height="2" rx="0.3" fill="#2496ED" />
          <rect x="8" y="8" width="2" height="2" rx="0.3" fill="#2496ED" />
          <rect x="10.5" y="8" width="2" height="2" rx="0.3" fill="#2496ED" />
          <rect x="13" y="10.5" width="2" height="2" rx="0.3" fill="#2496ED" />
        </svg>
      );

    case 'git':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            d="M21.62 10.95L13.05 2.38C12.55 1.88 11.73 1.88 11.23 2.38L9.42 4.19L11.72 6.49C12.24 6.32 12.85 6.44 13.26 6.85C13.88 7.47 13.88 8.47 13.27 9.09C12.86 9.5 12.27 9.63 11.75 9.47L9.48 11.74V16.03C9.79 16.19 10.06 16.44 10.24 16.76C10.74 17.63 10.44 18.75 9.57 19.25C8.7 19.75 7.58 19.45 7.08 18.58C6.58 17.71 6.88 16.59 7.75 16.09C8.08 15.9 8.46 15.82 8.84 15.87V11.66C8.46 11.71 8.08 11.63 7.75 11.44C6.88 10.94 6.58 9.82 7.08 8.95C7.38 8.43 7.88 8.1 8.42 8.02L6.14 5.74L2.38 9.5C1.88 10 1.88 10.82 2.38 11.32L10.95 19.89C11.45 20.39 12.27 20.39 12.77 19.89L21.62 11.04C22.12 10.54 22.12 9.72 21.62 9.22"
            fill="#F05032"
          />
        </svg>
      );

    case 'github':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017C2 16.446 4.843 20.198 8.805 21.52C9.305 21.611 9.487 21.303 9.487 21.036C9.487 20.797 9.479 20.165 9.474 19.324C6.692 19.932 6.105 17.973 6.105 17.973C5.651 16.815 5.001 16.505 5.001 16.505C4.094 15.88 5.07 15.892 5.07 15.892C6.074 15.962 6.602 16.93 6.602 16.93C7.493 18.47 8.938 18.026 9.508 17.768C9.6 17.118 9.858 16.674 10.144 16.422C7.923 16.168 5.589 15.304 5.589 11.451C5.589 10.354 5.978 9.456 6.619 8.751C6.516 8.497 6.175 7.472 6.717 6.091C6.717 6.091 7.556 5.82 9.467 7.124C10.264 6.901 11.115 6.789 11.961 6.785C12.806 6.789 13.658 6.901 14.457 7.124C16.366 5.82 17.203 6.091 17.203 6.091C17.747 7.472 17.406 8.497 17.303 8.751C17.947 9.456 18.332 10.354 18.332 11.451C18.332 15.315 15.993 16.165 13.766 16.414C14.124 16.724 14.444 17.336 14.444 18.272C14.444 19.617 14.432 20.702 14.432 21.036C14.432 21.306 14.611 21.618 15.12 21.517C19.08 20.194 21.92 16.444 21.92 12.017C21.92 6.484 17.442 2 12 2Z"
            fill="currentColor"
          />
        </svg>
      );

    default:
      return null;
  }
};
