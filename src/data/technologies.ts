export interface TechCategory {
  id: string;
  name: string;
  description: string;
  skills: string[];
}

export const TECH_CATEGORIES: TechCategory[] = [
  {
    id: "languages",
    name: "Programming Languages",
    description: "Core languages for object-oriented, scripting, and system programming",
    skills: ["Java", "JavaScript", "TypeScript", "Python", "C", "HTML5", "CSS3", "SQL", "PL/SQL"],
  },
  {
    id: "backend",
    name: "Backend Engineering",
    description: "Server runtimes, enterprise frameworks, ORMs, and RESTful services",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs", "JDBC", "Hibernate"],
  },
  {
    id: "frontend",
    name: "Frontend & Mobile",
    description: "Modern component-driven web frameworks and cross-platform mobile runtimes",
    skills: ["React", "Next.js", "Vite", "React Native", "Expo", "Tailwind CSS"],
  },
  {
    id: "databases",
    name: "Databases & Storage",
    description: "Relational, document, and hosted cloud database architectures",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    id: "auth-cloud",
    name: "Authentication & Cloud",
    description: "Identity providers, OAuth flows, and cloud BaaS ecosystems",
    skills: ["Firebase Authentication", "Supabase Authentication", "Google Authentication", "GitHub Authentication"],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    description: "Version control, Linux environments, IDEs, and deployment platforms",
    skills: ["Git", "GitHub", "Linux", "Ubuntu", "VS Code", "IntelliJ IDEA", "NetBeans", "Vercel", "Figma"],
  },
  {
    id: "discipline",
    name: "Software Engineering Discipline",
    description: "Formal engineering practices, modeling diagrams, and architectural principles",
    skills: [
      "Object-Oriented Programming",
      "UML",
      "ERD",
      "BPMN",
      "Database Design",
      "REST API Design",
      "Authentication",
      "CRUD",
      "Responsive Design",
      "Software Architecture",
    ],
  },
];

export const CURRENTLY_LEARNING = [
  {
    title: "Spring Boot",
    focus: "Enterprise Java backend services, dependency injection, and microservice patterns",
    status: "Active Study",
  },
  {
    title: "Advanced Backend Development",
    focus: "API rate limiting, caching strategies, messaging queues, and concurrency",
    status: "Active Study",
  },
  {
    title: "Cloud Technologies",
    focus: "Cloud-native deployment, containerization, and serverless compute",
    status: "In Progress",
  },
  {
    title: "System Design",
    focus: "Scalability principles, database indexing, horizontal partitioning, and load balancing",
    status: "In Progress",
  },
  {
    title: "Artificial Intelligence",
    focus: "LLM integrations, structured schema generation, and prompt engineering workflows",
    status: "Exploration",
  },
  {
    title: "Open Source Development",
    focus: "Codebase navigation, issue triaging, and contributing to public developer tools",
    status: "Active Study",
  },
  {
    title: "Data Engineering Fundamentals",
    focus: "ETL pipelines, relational data modeling, and streaming data concepts",
    status: "Exploration",
  },
  {
    title: "Docker & Containerization",
    focus: "Multi-stage Docker builds, container networking, and reproducible environments",
    status: "Active Study",
  },
  {
    title: "Distributed Systems",
    focus: "CAP theorem, eventual consistency, RPC protocols, and fault tolerance",
    status: "Deep Dive",
  },
];

export const OPEN_SOURCE_INTERESTS = [
  {
    name: "OpenTripPlanner",
    domain: "Multimodal Transit Routing Engine",
    tech: "Java",
    interest:
      "Studying public transit graph algorithms, GTFS data processing, and performant trip planning algorithms.",
  },
  {
    name: "OneBusAway",
    domain: "Real-Time Transit Tracking",
    tech: "Java / Mobile",
    interest:
      "Exploring real-time vehicle location feeds, passenger dispatch architectures, and transit accessibility.",
  },
  {
    name: "Java & Kotlin Backend Tools",
    domain: "Developer Tooling & Frameworks",
    tech: "Java / Kotlin / Spring",
    interest:
      "Deepening understanding of asynchronous I/O, reactive streams, and community-driven server libraries.",
  },
  {
    name: "Developer Communities & Hackathons",
    domain: "Collaborative Innovation",
    tech: "Full Stack & AI",
    interest:
      "Engaging with regional developer meetups in Kigali, global MLH hackathons, and international tech communities.",
  },
];
