import toothalieVideo from '../assets/videos/Toothalie.mp4';
import smsVideo from '../assets/videos/SMS.mp4';
import nielVideo from '../assets/videos/NIEL.mp4';
import norsuSurfersVideo from '../assets/videos/NorsuSurfers.mp4';
import norsuSurfersPoster from '../assets/images/norsu-surfers-poster.png';
import taskbuddyPoster from '../assets/images/TaskBuddy Pitch Deck.png';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Web App' | 'Solo Project' | 'AI / Data' | 'Game' | 'Design System' | 'Interactive 3D';
  role: string;
  isSolo?: boolean;
  year: string;
  shortDescription: string;
  fullDescription: string;
  videoUrl?: string;
  fallbackPoster?: string;
  tags: string[];
  techStack: ('vercel' | 'react' | 'jsx' | 'tsx' | 'python' | 'mysql' | 'docker' | 'git' | 'github')[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  features: string[];
}

export interface RoleBadgeStyle {
  dot: string;
  text: string;
  border: string;
  badgeBg: string;
}

export const getRoleBadgeStyle = (role?: string): RoleBadgeStyle => {
  if (!role) {
    return {
      dot: 'bg-neutral-400',
      text: 'text-neutral-300',
      border: 'border-neutral-800',
      badgeBg: 'bg-neutral-950',
    };
  }
  const lower = role.toLowerCase();
  if (lower.includes('ceo')) {
    return {
      dot: 'bg-amber-400',
      text: 'text-amber-300',
      border: 'border-amber-400/40',
      badgeBg: 'bg-neutral-950',
    };
  }
  if (lower.includes('lead')) {
    return {
      dot: 'bg-sky-400',
      text: 'text-sky-300',
      border: 'border-sky-400/40',
      badgeBg: 'bg-neutral-950',
    };
  }
  if (lower.includes('frontend')) {
    return {
      dot: 'bg-emerald-400',
      text: 'text-emerald-300',
      border: 'border-emerald-400/40',
      badgeBg: 'bg-neutral-950',
    };
  }
  return {
    dot: 'bg-teal-400',
    text: 'text-teal-300',
    border: 'border-teal-400/40',
    badgeBg: 'bg-neutral-950',
  };
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'toothalie-clinic-suite',
    title: 'Toothalie Dental Clinic System',
    subtitle: 'Full-cycle clinic management with live queueing & push sync',
    category: 'Solo Project',
    role: 'Solo Full Stack Developer',
    isSolo: true,
    year: '2025',
    shortDescription:
      'Solo Full Stack Developer for an end-to-end dental clinic management system featuring real-time appointment booking, doctor queues, and cross-platform push notifications via WebSockets and Firebase.',
    fullDescription:
      'Sole developer architecting cross-platform clinic operations with React web management and React Native mobile clients, powered by Symfony API backend, real-time doctor queue streaming, and automated SMS appointment reminders.',
    videoUrl: toothalieVideo,
    fallbackPoster: '',
    tags: ['Solo Project', 'React', 'React Native', 'Symfony', 'WebSockets', 'Firebase', 'MySQL'],
    techStack: ['react', 'jsx', 'mysql', 'docker', 'git', 'github'],
    liveUrl: 'https://github.com/clintestrellanes/toothalie',
    githubUrl: 'https://github.com/clintestrellanes/toothalie',
    metrics: 'Real-time WebSocket Push Sync',
    features: ['Interactive chair queue visualizer', 'Digital dental charting grid', 'Cross-platform FCM push notifications'],
  },
  {
    id: 'sms-norsu',
    title: 'Student Management System (SMS) NORSU',
    subtitle: 'Enterprise university student management system & registration funnels',
    category: 'Web App',
    role: 'Frontend Developer',
    year: '2026',
    shortDescription:
      'Frontend Developer responsible for engineering modular SMS NORSU web pipelines using React, TypeScript, and TanStack Query, featuring multi-step registration funnels and automated client-side PDF export.',
    fullDescription:
      'Served as Frontend Developer at the NORSU Management Information System (MIS) & Electronic Data Processing (EDP) Unit. Engineered modular client-side architectures including multi-step student registration funnels, dynamic loadslip viewers, and automated client-side PDF/image export pipelines with TanStack Query optimistic caching.',
    videoUrl: smsVideo,
    fallbackPoster: '',
    tags: ['Frontend Developer', 'React', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'Docker', 'REST API'],
    techStack: ['react', 'tsx', 'docker', 'git', 'github'],
    liveUrl: 'https://github.com/clintestrellanes',
    githubUrl: 'https://github.com/clintestrellanes',
    metrics: 'University-Wide Enrollment System',
    features: ['Multi-step registration funnels', 'Dynamic loadslip viewer & PDF exporter', 'TanStack Query optimistic data sync'],
  },
  {
    id: 'niel-agentic-rag',
    title: 'NIEL — Agentic AI University Assistant',
    subtitle: 'Stateful multi-agent RAG & campus navigation system for NORSU',
    category: 'AI / Data',
    role: 'Lead Developer & Full Stack Developer',
    year: '2026',
    shortDescription:
      'Lead Developer & Full Stack Developer architecting Negros Oriental State University\'s domain-specific agentic RAG assistant with stateful LangGraph workflows, FAISS semantic search, and NetworkX campus pathfinding.',
    fullDescription:
      'Served as Lead Developer and Full Stack Developer, steering system architecture from research to implementation. Built around a stateful graph execution model using LangGraph and FastAPI, integrating unified intent routing, hallucination-evaluating critic loops, NetworkX Dijkstra campus navigation, academic schedule synthesis, and privacy-guarded MySQL telemetry.',
    videoUrl: nielVideo,
    fallbackPoster: '',
    tags: ['Lead Developer', 'Full Stack Developer', 'LangGraph', 'FastAPI', 'FAISS', 'Python', 'React', 'NetworkX'],
    techStack: ['python', 'react', 'tsx', 'docker', 'git', 'github'],
    liveUrl: 'https://github.com/clintestrellanes',
    githubUrl: 'https://github.com/clintestrellanes',
    metrics: 'Stateful LangGraph • FAISS Semantic Search • Multi-Agent',
    features: ['Stateful LangGraph multi-agent routing', 'Self-correcting synthesizer & critic loop', 'NetworkX Dijkstra campus map navigation'],
  },
  {
    id: 'taskbuddy-marketplace',
    title: 'TaskBuddy — Micro-Tasking Platform',
    subtitle: 'DICT PSC 9 Regional Finalist • Campus gig marketplace (On Hold)',
    category: 'Web App',
    role: 'CEO & Lead Developer',
    year: '2025',
    shortDescription:
      'CEO & Lead Developer spearheading TaskBuddy to eliminate student gig scams and ghosting through milestone escrow protection. Selected as Top 25 Regional Finalist out of 146 startup entries in DICT PSC 9 (Region VII).',
    fullDescription:
      'Served as CEO and Lead Developer, conceiving the product vision, technical architecture, and business execution to eliminate rampant payment ghosting and informal gig fraud affecting university students. Led full-stack engineering with Python/FastAPI and React, establishing a protected campus micro-economy featuring milestone escrow holds, role-based access control (RBAC), and verified student profiles. Selected into the Top 25 Regional Finalists out of 146 competing entries from 23 universities at the DICT Philippine Startup Challenge 9 (PSC 9, Central Visayas) and 2025 Visayas Startup Awards Finalist.',
    videoUrl: '',
    fallbackPoster: taskbuddyPoster,
    tags: ['CEO & Lead Dev', 'DICT PSC 9 Finalist', 'FastAPI', 'React', 'Tailwind CSS', 'MySQL', 'JWT Auth'],
    techStack: ['python', 'react', 'tsx', 'mysql', 'vercel', 'git', 'github'],
    liveUrl: 'https://github.com/clintestrellanes/taskbuddy',
    githubUrl: 'https://github.com/clintestrellanes/taskbuddy',
    metrics: 'Top 25 of 146 in DICT PSC 9 (Region VII)',
    features: [
      'Selected into the Top 25 Regional Finalists out of 146 entries at DICT PSC 9 (Central Visayas)',
      'Solves student gig scams & ghosting via milestone escrow holds',
      'Granular role-based access control (RBAC) for student workers and clients',
      'Instant quote bidding pipeline with built-in delivery verification',
    ],
  },
  {
    id: 'norsu-surfers',
    title: 'NORSU Surfers — Retro Arcade Web Game',
    subtitle: 'Exhibited retro arcade runner built for the CASICAS 2024 Game Showcase',
    category: 'Solo Project',
    role: 'Solo Developer & Creator',
    isSolo: true,
    year: '2024',
    shortDescription:
      'Solo Developer & Creator for an arcade browser game developed and exhibited for the CASICAS Game Showcase, featuring CRT aesthetics, multi-lane obstacle dodging, and university phrase-collection gameplay.',
    fullDescription:
      'Developed as Solo Developer in 2024 upon invitation to showcase at the university event "CASICAS". Built using pure vanilla JavaScript (ES6+) and custom CSS CRT scanline shaders, the game features dynamic multi-velocity enemy spawning with road warning indicators, real-time AABB collision detection, active power-ups (Speed & Immunity), and a campus phrase-collection mechanic ("I LOVE NEGROS ORIENTAL STATE UNIVERSITY").',
    videoUrl: norsuSurfersVideo,
    fallbackPoster: norsuSurfersPoster,
    tags: ['Solo Project', 'JavaScript (ES6+)', 'Game Loop', 'CSS3 CRT Shaders', 'Arcade', 'AABB Collision', 'HTML5 Audio'],
    techStack: ['git', 'github', 'vercel'],
    liveUrl: 'https://github.com/clintestrellanes/Norsu_Surfers',
    githubUrl: 'https://github.com/clintestrellanes/Norsu_Surfers',
    metrics: 'Solo Project • Invited Exhibitor @ CASICAS 2024',
    features: [
      'Official game entry exhibited at the CASICAS 2024 showcase',
      'Dynamic multi-speed enemy spawning with lane warning indicators',
      'University phrase letter collection with real-time AABB collision & power-up systems',
    ],
  },
];

