import { jsPDF } from "jspdf";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create PDF document (A4, points/mm)
const doc = new jsPDF({
  orientation: "portrait",
  unit: "mm",
  format: "a4",
});

const pageWidth = 210;
const pageHeight = 297;
const margin = 15;
const contentWidth = pageWidth - margin * 2;
let y = margin;

function checkPageBreak(requiredSpace = 20) {
  if (y + requiredSpace > pageHeight - margin) {
    doc.addPage();
    y = margin;
  }
}

// Styling colors
const primaryColor = [16, 185, 129]; // Emerald #10B981
const darkText = [17, 24, 39]; // Gray-900 #111827
const mutedText = [75, 85, 99]; // Gray-600 #4B5563
const lineLight = [229, 231, 235]; // Gray-200 #E5E7EB

// 1. HEADER
doc.setTextColor(darkText[0], darkText[1], darkText[2]);
doc.setFont("helvetica", "bold");
doc.setFontSize(22);
doc.text("JANUARIO HENRIQUE", margin, y);
y += 7;

doc.setFont("helvetica", "bold");
doc.setFontSize(11);
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.text("Software Engineering Student | Full Stack & Backend Developer", margin, y);
y += 6;

// Contact info bar
doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
const contactLine = "Kigali, Rwanda  |  januarioinocenciohenriques@gmail.com  |  github.com/Januario-Henrique  |  linkedin.com/in/januario-henrique-98335a314";
doc.text(contactLine, margin, y);
y += 6;

// Thin divider
doc.setDrawColor(lineLight[0], lineLight[1], lineLight[2]);
doc.setLineWidth(0.4);
doc.line(margin, y, margin + contentWidth, y);
y += 6;

// Summary / Profile
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.text("PROFESSIONAL SUMMARY", margin, y);
y += 5;

doc.setFont("helvetica", "normal");
doc.setFontSize(9);
doc.setTextColor(darkText[0], darkText[1], darkText[2]);
const summaryText =
  "Software Engineering student and aspiring Full Stack & Backend Developer based in Kigali, Rwanda. Passionate about architecting scalable systems, robust REST APIs, modern web and mobile applications, and reliable database designs. Solid foundation in Object-Oriented Programming, UML system modeling, database normalization, and agile software development lifecycle.";
const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
doc.text(splitSummary, margin, y);
y += splitSummary.length * 4.5 + 4;

// 2. EDUCATION
checkPageBreak(30);
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.text("EDUCATION", margin, y);
y += 5;

doc.setFont("helvetica", "bold");
doc.setFontSize(9.5);
doc.setTextColor(darkText[0], darkText[1], darkText[2]);
doc.text("Bachelor of Science in Software Engineering", margin, y);
doc.setFont("helvetica", "normal");
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.text("In Progress (Expected 2026/2027)", margin + contentWidth - 48, y);
y += 4.5;

doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
doc.setFontSize(8.5);
doc.text("University Studies — Kigali, Rwanda", margin, y);
y += 4.5;

doc.setTextColor(darkText[0], darkText[1], darkText[2]);
const eduDesc =
  "Core Coursework: Object-Oriented Analysis & Design, Data Structures & Algorithms, Database Systems, Software Architecture, System Modeling (UML, Sequence & State Diagrams), Distributed Computing, Operating Systems, Web Technologies.";
const splitEdu = doc.splitTextToSize(eduDesc, contentWidth);
doc.text(splitEdu, margin, y);
y += splitEdu.length * 4 + 4;

// 3. TECHNICAL COMPETENCIES
checkPageBreak(40);
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.text("TECHNICAL SKILLS & COMPETENCIES", margin, y);
y += 5;

const skills = [
  { category: "Programming Languages", items: "Java, TypeScript, JavaScript, SQL, HTML5, CSS3, Python (Basics)" },
  { category: "Backend & APIs", items: "Node.js, Express, RESTful APIs, Supabase, JWT Authentication, Spring Boot (Learning)" },
  { category: "Frontend & Mobile", items: "React, Next.js, React Native, Expo, Tailwind CSS, Responsive Design" },
  { category: "Databases & Storage", items: "PostgreSQL, MySQL, Supabase, Database Normalization (3NF), ERD Design" },
  { category: "Software Engineering", items: "OOP, Design Patterns (DAO, MVC), UML (Class/Sequence), BPMN, Agile, SDLC" },
  { category: "DevOps & Tools", items: "Git, GitHub, Postman, Vite, Vercel, Docker (Foundations), Linux / Bash" },
];

skills.forEach((s) => {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8.5);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.text(`${s.category}: `, margin, y);
  const catWidth = doc.getTextWidth(`${s.category}: `);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(s.items, margin + catWidth, y);
  y += 4.5;
});
y += 3;

// 4. SELECTED PROJECTS
checkPageBreak(50);
doc.setFont("helvetica", "bold");
doc.setFontSize(10);
doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
doc.text("FEATURED SOFTWARE ENGINEERING PROJECTS", margin, y);
y += 5;

const projects = [
  {
    title: "MotoSys — Smart Moto-Taxi Transit & Booking System",
    tech: "React Native • Expo • TypeScript • Supabase • PostgreSQL",
    bullets: [
      "Engineered a full-featured transit platform with distinct passenger and rider interfaces for dispatching and fare estimation.",
      "Designed PostgreSQL database schemas with Row Level Security (RLS) and real-time transit state synchronization via Supabase.",
      "Implemented geolocation mapping and responsive mobile UX optimized for African urban mobility.",
    ],
  },
  {
    title: "Student Management System — Academic Administration Platform",
    tech: "Node.js • Express • PostgreSQL • React • TypeScript • JWT",
    bullets: [
      "Developed an institutional management platform with Role-Based Access Control (Admin, Faculty, Student).",
      "Architected normalized relational database schemas (3NF) managing enrollment, grading, and attendance records.",
      "Built secure RESTful API endpoints with input validation, token-based authentication, and audit logs.",
    ],
  },
  {
    title: "Java Enterprise Desktop Suite (Hotel & Church Management Systems)",
    tech: "Java • JDBC • Hibernate ORM • MySQL • DAO Pattern • JFreeChart",
    bullets: [
      "Built robust multi-tier desktop enterprise solutions adhering to the Data Access Object (DAO) pattern.",
      "Ensured ACID transactional consistency and relational integrity across room bookings and member records.",
      "Integrated automated reporting, dynamic charting (JFreeChart), and reliable database backup/restore procedures.",
    ],
  },
  {
    title: "Up Skills Hub — Educational Portal & Internship Platform",
    tech: "React • TypeScript • Tailwind CSS • REST APIs",
    bullets: [
      "Designed an accessible career development and internship placement hub featuring intuitive category filtering.",
      "Built modern responsive layouts using CSS Grid and Flexbox with zero-dependency accessible component patterns.",
    ],
  },
];

projects.forEach((proj) => {
  checkPageBreak(35);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.text(proj.title, margin, y);
  y += 4;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(proj.tech, margin, y);
  y += 4;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  proj.bullets.forEach((b) => {
    checkPageBreak(12);
    const bulletText = `•  ${b}`;
    const splitB = doc.splitTextToSize(bulletText, contentWidth - 4);
    doc.text(splitB, margin + 2, y);
    y += splitB.length * 3.8 + 1;
  });
  y += 2.5;
});

// Footer on all pages
const totalPages = doc.getNumberOfPages();
for (let i = 1; i <= totalPages; i++) {
  doc.setPage(i);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  doc.text(
    `Januario Henrique — Curriculum Vitae  |  Portfolio: https://januario-henrique.vercel.app`,
    margin,
    pageHeight - 8
  );
  doc.text(
    `Page ${i} of ${totalPages}`,
    pageWidth - margin - 18,
    pageHeight - 8
  );
}

// Write to public/assets/Januario-Henrique-CV.pdf
const targetDir = path.resolve(__dirname, "../public/assets");
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}
const targetPath = path.resolve(targetDir, "Januario-Henrique-CV.pdf");
const pdfOutput = doc.output("arraybuffer");
fs.writeFileSync(targetPath, Buffer.from(pdfOutput));

console.log(`[SUCCESS] Generated professional CV PDF at: ${targetPath}`);
console.log(`[FILE SIZE] ${fs.statSync(targetPath).size} bytes`);
