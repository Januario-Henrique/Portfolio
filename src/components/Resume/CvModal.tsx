import React, { useEffect } from "react";
import { PROFILE } from "../../data/social";
import { TECH_CATEGORIES } from "../../data/technologies";
import { FEATURED_PROJECTS, JAVA_ENGINEERING_PROJECTS } from "../../data/projects";
import { EDUCATION_DATA } from "../../data/education";
import { X, Download, Printer, ExternalLink, Mail, MapPin, Github, Linkedin, CheckCircle2 } from "lucide-react";
import { generateAndDownloadCvPdf } from "../../utils/generateCvPdf";

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    try {
      generateAndDownloadCvPdf();
    } catch (err) {
      console.warn("Client-side PDF generator fallback to static asset:", err);
      const link = document.createElement("a");
      link.href = PROFILE.cvPath;
      link.download = "Januario-Henrique-CV.pdf";
      link.click();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div className="relative w-full max-w-4xl bg-[#0D1117] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 bg-[#161B22] shrink-0 no-print">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Curriculum Vitae
            </span>
            <span id="resume-title" className="text-sm font-bold text-white hidden sm:inline">
              {PROFILE.name} — Full ATS Resume
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-[#21262D] hover:text-white rounded-lg transition-colors cursor-pointer"
              title="Print Resume or Save as PDF via Browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer shadow-sm"
              title="Baixar arquivo PDF completo"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors ml-2 cursor-pointer"
              aria-label="Close resume viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sub-bar with confirmation */}
        <div className="bg-emerald-950/30 border-b border-emerald-500/20 px-6 py-2 text-[11px] text-emerald-300 flex items-center justify-between no-print">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Formato oficial completo para recrutadores (ATS-friendly)</span>
          </span>
          <span className="text-slate-400 font-mono text-[10px]">Updated October 2026</span>
        </div>

        {/* Document Body (Clean, ATS-style Printable Layout) */}
        <div className="cv-document-body p-8 sm:p-12 overflow-y-auto bg-[#0A0A0A] text-slate-200 font-sans space-y-8">
          {/* Header Block */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">{PROFILE.name}</h1>
            <p className="text-base font-semibold text-emerald-400 mt-1">
              {PROFILE.mainTitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mt-3 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {PROFILE.location}
              </span>
              <span>•</span>
              <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-1 hover:text-white">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                {PROFILE.email}
              </a>
              <span>•</span>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-white">
                GitHub: @{PROFILE.githubUsername}
              </a>
              <span>•</span>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
                LinkedIn Profile
              </a>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4 max-w-3xl">
              {PROFILE.statement}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-4 pb-1 border-b border-white/10">
              Education
            </h2>
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.field} className="space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-sm font-bold text-white">{edu.field} — {edu.degree}</h3>
                    <p className="text-xs text-slate-400">{edu.institution}, {edu.location}</p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">{edu.status}</span>
                </div>
                <p className="text-xs text-slate-300">{edu.description}</p>
              </div>
            ))}
          </div>

          {/* Core Technical Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-4 pb-1 border-b border-white/10">
              Selected Software Engineering Projects
            </h2>

            <div className="space-y-5">
              {FEATURED_PROJECTS.slice(0, 3).map((p) => (
                <div key={p.id} className="space-y-1.5">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <h3 className="text-sm font-bold text-white">
                      {p.name} <span className="text-xs font-normal text-slate-400">({p.subtitle})</span>
                    </h3>
                    <span className="text-[11px] font-mono text-emerald-400">
                      {p.technologies.slice(0, 3).join(" • ")}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{p.description}</p>
                  <ul className="list-disc list-inside text-xs text-slate-400 space-y-0.5">
                    {p.features.slice(0, 3).map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Java projects highlight */}
              <div className="space-y-1.5 pt-2">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-white">
                    Hotel & Church Enterprise Systems <span className="text-xs font-normal text-slate-400">(Java Desktop Suite)</span>
                  </h3>
                  <span className="text-[11px] font-mono text-emerald-400">Java • JDBC • Hibernate • MySQL • DAO</span>
                </div>
                <p className="text-xs text-slate-300">
                  Developed enterprise management desktop solutions applying the Data Access Object (DAO) pattern,
                  relational constraints, and transactional persistence.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold mb-4 pb-1 border-b border-white/10">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {TECH_CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-0.5">
                  <span className="font-bold text-white">{cat.name}: </span>
                  <span className="text-slate-300">{cat.skills.join(", ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
