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
  isSolo?: boolean;
  year: string;
  shortDescription: string;
  fullDescription: string;
  videoUrl?: string;
  fallbackPoster: string;
  tags: string[];
  techStack: ('vercel' | 'react' | 'jsx' | 'tsx' | 'python' | 'mysql' | 'docker' | 'git' | 'github')[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
  features: string[];
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'toothalie-clinic-suite',
    title: 'Toothalie Dental Clinic System',
    subtitle: 'Full-cycle clinic management with live queueing & push sync',
    category: 'Solo Project',
    isSolo: true,
    year: '2025',
    shortDescription:
      'End-to-end dental clinic management system featuring real-time appointment booking, doctor queues, and cross-platform push notifications via WebSockets and Firebase.',
    fullDescription:
      'Architected cross-platform clinic operations with React web management and React Native mobile clients, powered by Symfony API backend, real-time doctor queue streaming, and automated SMS appointment reminders.',
    videoUrl: toothalieVideo,
    fallbackPoster: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80',
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
    year: '2026',
    shortDescription:
      'Engineered modular SMS NORSU frontend pipelines using React, TypeScript, and TanStack Query, featuring multi-step registration funnels and automated client-side PDF export.',
    fullDescription:
      'Engineered at the NORSU Management Information System (MIS) & Electronic Data Processing (EDP) Unit. Built modular frontend services including multi-step student registration funnels, dynamic loadslip viewers, and automated client-side PDF/image export pipelines with TanStack Query optimistic caching.',
    videoUrl: smsVideo,
    fallbackPoster: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    tags: ['React', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'Docker', 'REST API'],
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
    year: '2026',
    shortDescription:
      'Domain-specific agentic RAG assistant for Negros Oriental State University featuring stateful LangGraph workflows, FAISS semantic search, and NetworkX campus pathfinding.',
    fullDescription:
      'Architected around a stateful graph execution model using LangGraph and FastAPI. Features unified intent routing, hallucination-evaluating critic loops, NetworkX Dijkstra campus navigation, academic schedule synthesis, and privacy-guarded MySQL telemetry.',
    videoUrl: nielVideo,
    fallbackPoster: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tags: ['LangGraph', 'FastAPI', 'FAISS', 'Python', 'React', 'NetworkX', 'RAG Pipeline'],
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
    year: '2025',
    shortDescription:
      'Addresses the lack of safe, scam-free student gig opportunities with milestone escrow protection. Selected as a Top 25 Regional Finalist out of 146 startup entries in the DICT Philippine Startup Challenge 9 (Region VII) (Project on hold).',
    fullDescription:
      'Conceived to eliminate rampant payment ghosting and informal gig fraud affecting university students seeking odd-jobs and peer freelance work. TaskBuddy establishes a protected campus micro-economy featuring milestone-based escrow holds, role-based access control (RBAC), and verified student profiles. Built with Python/FastAPI and React, TaskBuddy was selected into the prestigious Top 25 Regional Finalists out of 146 competing startup entries from 23 universities at the DICT Philippine Startup Challenge 9 (PSC 9, Central Visayas), and recognized as a 2025 Visayas Startup Awards Finalist (currently on hold).',
    videoUrl: '',
    fallbackPoster: taskbuddyPoster,
    tags: ['On Hold', 'DICT PSC 9 Finalist', 'FastAPI', 'React', 'Tailwind CSS', 'MySQL', 'JWT Auth'],
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
    isSolo: true,
    year: '2024',
    shortDescription:
      'Retro arcade browser game developed and exhibited for the 2024 CASICAS Game Showcase, featuring CRT aesthetics, multi-lane obstacle dodging, and university phrase-collection gameplay.',
    fullDescription:
      'Developed in 2024 upon invitation to showcase at the university event "CASICAS". Built using pure vanilla JavaScript (ES6+) and custom CSS CRT scanline shaders, the game features dynamic multi-velocity enemy spawning with road warning indicators, real-time AABB collision detection, active power-ups (Speed & Immunity), and a campus phrase-collection mechanic ("I LOVE NEGROS ORIENTAL STATE UNIVERSITY").',
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

