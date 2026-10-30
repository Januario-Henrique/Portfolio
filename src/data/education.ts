export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  status: string;
  description: string;
  coreCoursework: string[];
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Bachelor of Science (In Progress)",
    field: "Software Engineering",
    institution: "University Studies",
    location: "Kigali, Rwanda",
    status: "Currently Enrolled",
    description:
      "Rigorous academic study in software design patterns, data structures & algorithms, relational database management, operating systems, distributed computing, and full-stack software development methodologies.",
    coreCoursework: [
      "Object-Oriented Programming (Java / C++)",
      "Data Structures & Algorithms",
      "Database Management Systems & SQL",
      "Software Modeling (UML / ERD / BPMN)",
      "Web Technologies & REST APIs",
      "Computer Networks & Operating Systems",
      "Software Architecture & Design Patterns",
      "Software Testing & Quality Assurance",
    ],
  },
];

export interface CertificationItem {
  name: string;
  issuer: string;
  status: "Completed" | "In Progress" | "Upcoming";
  year?: string;
  skills: string[];
}

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: "Full Stack & Backend Specialization",
    issuer: "Online Learning & Self-Directed Engineering Projects",
    status: "Completed",
    year: "2025 - 2026",
    skills: ["Node.js", "Express", "TypeScript", "React", "PostgreSQL", "Supabase"],
  },
  {
    name: "Enterprise Java & Spring Boot Fundamentals",
    issuer: "Independent Software Architecture Studies",
    status: "In Progress",
    skills: ["Java", "Spring Boot", "Hibernate", "JDBC", "REST Services"],
  },
  {
    name: "Cloud Architecture & System Design",
    issuer: "Independent Engineering Coursework",
    status: "Upcoming",
    skills: ["Docker", "Linux Administration", "System Design", "Cloud Services"],
  },
];
