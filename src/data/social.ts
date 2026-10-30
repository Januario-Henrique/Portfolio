export interface SocialProfile {
  name: string;
  mainTitle: string;
  secondaryTitle: string;
  location: string;
  statement: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  email: string;
  status: string;
  domains: string[];
  cvPath: string;
}

export const PROFILE: SocialProfile = {
  name: "Januario Henrique",
  mainTitle: "Software Engineering Student | Full Stack & Backend Developer",
  secondaryTitle: "Software Engineering Student & Full Stack Developer",
  location: "Kigali, Rwanda",
  statement:
    "I build practical digital solutions using modern web, backend, and mobile technologies, with a strong focus on problem solving, continuous learning, and real-world software engineering.",
  github: "https://github.com/Januario-Henrique",
  githubUsername: "Januario-Henrique",
  linkedin: "https://www.linkedin.com/in/januario-henrique-98335a314/",
  email: "januarioinocenciohenriques@gmail.com",
  status: "OPEN TO OPPORTUNITIES",
  domains: ["Backend", "Full Stack", "Mobile", "AI"],
  cvPath: "/assets/Januario-Henrique-CV.pdf",
};
