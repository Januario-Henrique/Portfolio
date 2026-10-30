import motosysImage from "../assets/images/project_motosys_mockup_1790138892811.jpg";
import smsImage from "../assets/images/project_sms_dashboard_1790138903096.jpg";
import upSkillsImage from "../assets/images/project_upskills_hub_1790138915720.jpg";

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  architecture?: string[];
  badge?: string;
  githubUrl: string;
  liveDemoUrl?: string;
  image: string;
  isFeatured: boolean;
  highlight?: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "motosys",
    name: "MotoSys",
    subtitle: "Motorcycle Mobility & Transportation Platform",
    description:
      "MotoSys is a mobile platform designed around motorcycle transportation and service management, inspired by modern ride-hailing applications.",
    problem:
      "Motorcycle taxi mobility is the backbone of daily urban transit across East Africa, yet passengers and riders face unstructured fare haggling, lack of trip tracking, and unpredictable dispatching.",
    solution:
      "Engineered a dedicated dual-persona mobile application connecting riders and passengers with structured location dispatch, dynamic fare calculation, trip state transitions, and real-time profile management.",
    technologies: [
      "React Native",
      "Expo",
      "Expo Router",
      "TypeScript",
      "Firebase / Supabase",
      "Authentication",
      "Mobile UI/UX",
    ],
    features: [
      "User authentication with role differentiation",
      "Dedicated passenger discovery and booking flow",
      "Rider acceptance, active trip coordination, and status updates",
      "Secure login, registration, and onboarding",
      "Interactive map navigation and waypoint coordination",
      "Real-time ride management and fare estimation",
      "User profiles with rating and safety indicators",
      "Payment and settlement tracking flow",
      "Cloud database synchronization",
      "Tactile, mobile-first responsive interface",
    ],
    architecture: [
      "Mobile Application",
      "React Native / Expo",
      "Authentication Layer (JWT / OAuth)",
      "Backend / Database (PostgreSQL / Supabase)",
      "Cloud Services & Real-time WebSockets",
    ],
    image: motosysImage,
    isFeatured: true,
    githubUrl: "https://github.com/Januario-Henrique",
    liveDemoUrl: "https://github.com/Januario-Henrique",
    highlight: "Mobile Architecture + Dual-Persona UX + Ride Dispatching",
  },
  {
    id: "student-management-system",
    name: "Student Management System",
    subtitle: "Academic Management & Reporting Platform",
    description:
      "A full-stack academic management platform designed to manage students, teachers, attendance, leave requests, reports, and academic statistics.",
    problem:
      "Academic institutions often handle student attendance, grade documentation, and leave approvals via disparate physical paper ledgers or unlinked spreadsheets, producing delays and reporting errors.",
    solution:
      "Constructed a centralized full-stack web platform with strict Role-Based Access Control (RBAC), intuitive student self-service dashboards, and teacher administrative controls backed by PostgreSQL.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Google Authentication",
      "GitHub Authentication",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    features: [
      "Role-based Student and Teacher authentication",
      "Student dashboard with personal attendance summaries",
      "Digital leave request submission and approval lifecycle",
      "Teacher management console for class rosters",
      "Attendance registry and automated calculation",
      "Academic performance statistics and visual charts",
      "OAuth sign-in via Google and GitHub",
      "Relational integrity and audit tracking in PostgreSQL",
    ],
    architecture: [
      "Next.js Frontend (App Router)",
      "Role-Based Access Control Middleware",
      "Supabase Client & Auth SDK",
      "PostgreSQL Relational Tables & RLS Rules",
      "Tailwind UI & Component System",
    ],
    image: smsImage,
    isFeatured: true,
    githubUrl: "https://github.com/Januario-Henrique",
    liveDemoUrl: "https://github.com/Januario-Henrique",
    highlight: "Full Stack + Authentication + Database + Role-Based Access",
  },
  {
    id: "up-skills-hub",
    name: "Up Skills Hub",
    subtitle: "Career Training & Internship Portal",
    description:
      "A digital platform focused on training and internship opportunities, combining responsive UI/UX design with structured frontend development.",
    problem:
      "Students and early-career software developers often find it difficult to identify structured vocational internships and skills workshops that match their curriculum level.",
    solution:
      "Designed and coded a high-clarity web platform prioritizing accessibility, CSS Grid layouts, and responsive card systems derived from a custom Figma design system.",
    technologies: [
      "HTML5",
      "CSS3",
      "CSS Grid",
      "Responsive Design",
      "UI/UX Design",
      "Figma",
    ],
    features: [
      "Modular internship opportunity listings",
      "Structured CSS Grid responsive layouts across viewports",
      "Domain skill track categories and requirement filters",
      "Accessible typography hierarchy with WCAG AA compliance",
      "Design-to-code fidelity from Figma design prototypes",
    ],
    architecture: [
      "Figma Wireframing & Component Specifications",
      "Semantic HTML5 Document Structure",
      "Modular CSS3 Custom Properties & Grid Systems",
      "Mobile-First Media Breakpoints",
    ],
    image: upSkillsImage,
    isFeatured: true,
    githubUrl: "https://github.com/Januario-Henrique",
    liveDemoUrl: "https://github.com/Januario-Henrique",
    highlight: "UI/UX Design + Responsive Layouts + CSS Grid",
  },
  {
    id: "mlh-hackathon-gemini-ai",
    name: "MLH Hackathon — Gemini AI Application",
    subtitle: "Intelligent Assistant & Structured Reasoning Service",
    badge: "Hackathon Project",
    description:
      "A web application developed in a hackathon environment, integrating Google's AI ecosystem to create an AI-powered solution.",
    problem:
      "Delivering rapid, structured responses to multifaceted queries within the tight time constraints and rapid prototype demands of a hackathon.",
    solution:
      "Engineered an Express backend integrating Google AI Studio and the Gemini API, formulating optimized prompts to extract clean structured JSON outputs for client consumption.",
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "Google AI Studio",
      "Gemini API",
      "REST APIs",
    ],
    features: [
      "Google Gemini API integration with streaming response handling",
      "Backend Express proxy shielding API keys and managing payloads",
      "Engineered prompt templates for repeatable structured output",
      "Rapid turnaround under collaborative hackathon sprint conditions",
      "Responsive web interface with real-time markdown rendering",
    ],
    architecture: [
      "Client UI Interface",
      "Express.js REST Proxy Layer",
      "Google AI Studio / Gemini API Endpoint",
      "Structured Response Parsing & Output Validation",
    ],
    image: smsImage, // Clean technical visual fallback
    isFeatured: true,
    githubUrl: "https://github.com/Januario-Henrique",
    liveDemoUrl: "https://github.com/Januario-Henrique",
    highlight: "AI Integration + Backend Development + Rapid Prototyping",
  },
  {
    id: "weather-application",
    name: "Weather Application",
    subtitle: "Real-Time Meteorological Intelligence App",
    description:
      "A responsive weather application that retrieves real-time weather information from an external API and presents it through a clean and user-friendly interface.",
    problem:
      "Users need immediate, distraction-free atmospheric conditions and forecasts across international cities without sluggish page reloads.",
    solution:
      "Built a reactive single-page client utilizing Vite, React, and TypeScript with debounced query execution, error boundaries, and dynamic weather condition visuals.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "OpenWeather API",
      "CSS3",
      "REST APIs",
    ],
    features: [
      "Instant city search with query input sanitization",
      "Live metrics for temperature, humidity, wind speed, and pressure",
      "Dynamic weather state visualization based on condition codes",
      "Graceful network degradation and invalid query warnings",
      "Fluid responsive layout for mobile and desktop screens",
    ],
    architecture: [
      "React Single Page Application (Vite)",
      "Async REST Client Service",
      "OpenWeather API External Provider",
      "State Management & Local Cache Layer",
    ],
    image: upSkillsImage, // Clean technical visual fallback
    isFeatured: true,
    githubUrl: "https://github.com/Januario-Henrique",
    liveDemoUrl: "https://github.com/Januario-Henrique",
    highlight: "Frontend + API Integration + TypeScript",
  },
];

export interface JavaProject {
  id: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  principles: string[];
}

export const JAVA_ENGINEERING_PROJECTS: JavaProject[] = [
  {
    id: "hotel-management",
    name: "Hotel Management System",
    category: "Enterprise Desktop Application",
    description:
      "A comprehensive hotel administration desktop system developed in Java implementing the Data Access Object (DAO) pattern to maintain room bookings, guest registrations, billing statements, and occupancy metrics.",
    technologies: ["Java", "JDBC", "MySQL", "Swing", "DAO"],
    highlights: [
      "Room allocation & check-in/check-out workflow",
      "Guest billing calculation & receipt generation",
      "Relational schema with foreign key constraints",
      "Data Access Object (DAO) architectural separation",
    ],
    principles: [
      "Object-Oriented Programming (OOP)",
      "JDBC Transaction Management",
      "CRUD Architecture",
      "Separation of Concerns",
    ],
  },
  {
    id: "church-management",
    name: "Church Management System",
    category: "Distributed & Visual Reporting Application",
    description:
      "A multi-tiered administrative desktop system utilizing Hibernate ORM and Remote Method Invocation (RMI) for member registry, contribution bookkeeping, department scheduling, and dynamic statistical visualization via JFreeChart.",
    technologies: [
      "Java",
      "Hibernate",
      "RMI",
      "Swing",
      "MySQL",
      "JDesktopPane",
      "JFreeChart",
    ],
    highlights: [
      "Hibernate Object-Relational Mapping (ORM) and entity lifecycle",
      "Remote Method Invocation (RMI) client-server communication",
      "Statistical analytics and financial distribution charts using JFreeChart",
      "Multiple Document Interface (MDI) via Java Swing JDesktopPane",
    ],
    principles: [
      "ORM & Entity Modeling",
      "Distributed Computing Principles (RMI)",
      "Data Visualization",
      "Desktop GUI Architecture",
    ],
  },
  {
    id: "patient-management",
    name: "Patient Management System (PMIS)",
    category: "Healthcare Information System",
    description:
      "A clinical record management application engineered to coordinate medical records, outpatient consultations, diagnostic notes, and appointment calendars with strict relational constraints.",
    technologies: ["Java", "Swing", "MySQL", "Database Design", "DAO"],
    highlights: [
      "Patient medical history tracking and diagnostic logs",
      "Doctor appointment scheduling and status updates",
      "Referential integrity constraints in MySQL",
      "Modular Swing UI with input validation",
    ],
    principles: [
      "Relational Database Design",
      "Domain-Driven OOP Design",
      "Data Access Layer Isolation",
      "Data Integrity & Validation",
    ],
  },
];
