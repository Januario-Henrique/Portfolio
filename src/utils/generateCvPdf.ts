import { jsPDF } from "jspdf";
import { PROFILE } from "../data/social";
import { TECH_CATEGORIES } from "../data/technologies";
import { FEATURED_PROJECTS, JAVA_ENGINEERING_PROJECTS } from "../data/projects";
import { EDUCATION_DATA } from "../data/education";

export function generateAndDownloadCvPdf() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 14;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  function checkPageBreak(requiredSpace = 20) {
    if (y + requiredSpace > pageHeight - margin) {
      doc.addPage();
      y = margin;
    }
  }

  const primaryColor = [16, 185, 129]; // Emerald #10B981
  const darkText = [17, 24, 39]; // Gray-900 #111827
  const mutedText = [75, 85, 99]; // Gray-600 #4B5563
  const lineLight = [229, 231, 235]; // Gray-200 #E5E7EB

  // 1. HEADER
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text(PROFILE.name.toUpperCase(), margin, y);
  y += 6.5;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(PROFILE.mainTitle, margin, y);
  y += 5.5;

  // Contact line
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
  const contactText = `${PROFILE.location}  |  ${PROFILE.email}  |  github.com/${PROFILE.githubUsername}  |  linkedin.com/in/januario-henrique-98335a314`;
  doc.text(contactText, margin, y);
  y += 5;

  // Divider line
  doc.setDrawColor(lineLight[0], lineLight[1], lineLight[2]);
  doc.setLineWidth(0.4);
  doc.line(margin, y, margin + contentWidth, y);
  y += 5.5;

  // Professional Statement
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("PROFESSIONAL SUMMARY", margin, y);
  y += 4.5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  const splitStatement = doc.splitTextToSize(PROFILE.statement, contentWidth);
  doc.text(splitStatement, margin, y);
  y += splitStatement.length * 4.2 + 4;

  // 2. EDUCATION
  checkPageBreak(30);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("EDUCATION", margin, y);
  y += 4.5;

  EDUCATION_DATA.forEach((edu) => {
    checkPageBreak(25);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text(`${edu.degree} — ${edu.field}`, margin, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(edu.status, margin + contentWidth - 45, y);
    y += 4;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(`${edu.institution} • ${edu.location}`, margin, y);
    y += 4;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    const splitEdu = doc.splitTextToSize(edu.description, contentWidth);
    doc.text(splitEdu, margin, y);
    y += splitEdu.length * 3.8 + 3.5;
  });

  // 3. TECHNICAL COMPETENCIES
  checkPageBreak(38);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("TECHNICAL SKILLS & COMPETENCIES", margin, y);
  y += 4.5;

  TECH_CATEGORIES.forEach((cat) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text(`${cat.name}: `, margin, y);
    const catWidth = doc.getTextWidth(`${cat.name}: `);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    const skillsText = cat.skills.join(", ");
    doc.text(skillsText, margin + catWidth, y);
    y += 4;
  });
  y += 3;

  // 4. SELECTED SOFTWARE ENGINEERING PROJECTS
  checkPageBreak(45);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("SELECTED SOFTWARE ENGINEERING PROJECTS", margin, y);
  y += 4.5;

  FEATURED_PROJECTS.slice(0, 3).forEach((proj) => {
    checkPageBreak(32);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    doc.text(`${proj.name} — ${proj.subtitle}`, margin, y);
    y += 3.8;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(proj.technologies.slice(0, 5).join(" • "), margin, y);
    y += 3.8;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(darkText[0], darkText[1], darkText[2]);
    const descLines = doc.splitTextToSize(proj.description, contentWidth);
    doc.text(descLines, margin, y);
    y += descLines.length * 3.8 + 1;

    proj.features.slice(0, 3).forEach((f) => {
      checkPageBreak(10);
      const bText = `•  ${f}`;
      const splitB = doc.splitTextToSize(bText, contentWidth - 4);
      doc.text(splitB, margin + 2, y);
      y += splitB.length * 3.6 + 0.8;
    });
    y += 2.5;
  });

  // Enterprise Java Projects
  checkPageBreak(30);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  doc.text("Java Desktop Enterprise Suite (Hotel & Church Management)", margin, y);
  y += 3.8;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text("Java • JDBC • Hibernate ORM • MySQL • DAO Pattern • JFreeChart", margin, y);
  y += 3.8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(darkText[0], darkText[1], darkText[2]);
  const javaDesc =
    "Developed robust multi-tier desktop solutions implementing the Data Access Object (DAO) architecture, transactional consistency, relational constraints, and dynamic statistical reporting.";
  const splitJava = doc.splitTextToSize(javaDesc, contentWidth);
  doc.text(splitJava, margin, y);
  y += splitJava.length * 3.8 + 2;

  // Footers on all pages
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(mutedText[0], mutedText[1], mutedText[2]);
    doc.text(
      `Januario Henrique — Curriculum Vitae  |  https://januario-henrique.vercel.app`,
      margin,
      pageHeight - 7
    );
    doc.text(
      `Page ${i} of ${totalPages}`,
      pageWidth - margin - 18,
      pageHeight - 7
    );
  }

  // Save / trigger browser download
  doc.save("Januario-Henrique-CV.pdf");
}
