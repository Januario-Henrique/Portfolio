export interface EngineeringDiscipline {
  title: string;
  tagline: string;
  topics: {
    name: string;
    description: string;
  }[];
}

export const SOFTWARE_ENGINEERING_AREAS: EngineeringDiscipline[] = [
  {
    title: "Software Design",
    tagline: "Architectural modeling, structural schematics, and process flows",
    topics: [
      {
        name: "UML (Unified Modeling Language)",
        description:
          "Formalized structural and behavioral modeling of software systems prior to coding.",
      },
      {
        name: "Class Diagrams",
        description:
          "Mapping object hierarchies, inheritance, composition, and interface contracts.",
      },
      {
        name: "Sequence Diagrams",
        description:
          "Tracing asynchronous messages and state transitions across actors and services.",
      },
      {
        name: "State Diagrams",
        description:
          "Defining finite state machines for entity lifecycles (e.g., ride dispatching).",
      },
      {
        name: "ERD (Entity Relationship Diagrams)",
        description:
          "Normalizing schemas, foreign key constraints, and relational cardinality.",
      },
      {
        name: "BPMN (Business Process Model and Notation)",
        description:
          "Mapping business workflows and multi-stakeholder operational procedures.",
      },
    ],
  },
  {
    title: "Development Principles",
    tagline: "High-cohesion implementations, clean abstractions, and secure data access",
    topics: [
      {
        name: "Object-Oriented Programming (OOP)",
        description:
          "Encapsulation, abstraction, polymorphism, and modular class hierarchies.",
      },
      {
        name: "REST API Design",
        description:
          "Idempotent HTTP methods, URI conventions, JSON resource contracts, and status codes.",
      },
      {
        name: "CRUD Architectures",
        description:
          "Structured Create-Read-Update-Delete cycles with validation and error boundaries.",
      },
      {
        name: "Authentication & Authorization",
        description:
          "Token verification (JWT), OAuth2 integration, and Role-Based Access Control (RBAC).",
      },
      {
        name: "Database Design",
        description:
          "Relational normalization, indexing strategies, primary keys, and data integrity.",
      },
    ],
  },
  {
    title: "Engineering Practices",
    tagline: "Team collaboration, methodical debugging, and continuous delivery",
    topics: [
      {
        name: "Git & Version Control",
        description:
          "Atomic commits, structured feature branching, pull request reviews, and merge conflict resolution.",
      },
      {
        name: "GitHub Ecosystem",
        description:
          "Repository management, CI/CD workflow automation, and markdown documentation.",
      },
      {
        name: "Systematic Debugging",
        description:
          "Root-cause analysis, stack trace isolation, breakpoint analysis, and reproducible test cases.",
      },
      {
        name: "Technical Documentation",
        description:
          "Clear architectural decision records, API documentation, and maintainer-friendly READMEs.",
      },
      {
        name: "Team Collaboration",
        description:
          "Agile standups, cross-functional communication, and pair programming ethos.",
      },
      {
        name: "Methodical Problem Solving",
        description:
          "Decomposing ambiguous real-world requirements into measurable technical components.",
      },
    ],
  },
];

export const DEVELOPMENT_LIFECYCLE = [
  {
    step: "01",
    phase: "Problem",
    label: "Analyze Requirements",
    description:
      "Deeply understand user friction, operational bottlenecks, domain constraints, and stakeholder needs before writing any code.",
  },
  {
    step: "02",
    phase: "Design",
    label: "Architecture & Schemas",
    description:
      "Draft UML class diagrams, database ERDs, REST contracts, and wireframes to validate architecture early.",
  },
  {
    step: "03",
    phase: "Code",
    label: "Clean Implementation",
    description:
      "Write modular, typed, readable, and maintainable software adhering to OOP, SOLID principles, and clean design patterns.",
  },
  {
    step: "04",
    phase: "Test",
    label: "Verification & Quality",
    description:
      "Verify edge cases, validate data constraints, run unit and integration tests, and conduct strict code reviews.",
  },
  {
    step: "05",
    phase: "Deploy",
    label: "Release & Monitor",
    description:
      "Containerize, configure environment variables, deploy to cloud hosts, and observe application behavior.",
  },
];
