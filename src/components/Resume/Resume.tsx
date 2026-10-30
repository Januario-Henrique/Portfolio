import React from "react";
import { PROFILE } from "../../data/social";
import { FileText, Download, Eye, ArrowUpRight, CheckCircle2 } from "lucide-react";

import { generateAndDownloadCvPdf } from "../../utils/generateCvPdf";

interface ResumeSectionProps {
  onOpenCvModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenCvModal }) => {
  const handleDownload = () => {
    try {
      generateAndDownloadCvPdf();
    } catch (err) {
      console.warn("Falling back to static file download:", err);
      const link = document.createElement("a");
      link.href = PROFILE.cvPath;
      link.download = "Januario-Henrique-CV.pdf";
      link.click();
    }
  };

  return (
    <section className="py-20 bg-[#0D1117] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#111827] to-[#151B23] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[100px] pointer-events-none rounded-full" />

          <div className="max-w-3xl relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-mono font-medium">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae & Qualifications</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Resume & Engineering Background
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed text-pretty">
              Interested in opportunities, collaborations, internships, open-source projects,
              and challenging software engineering problems.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all shadow-lg shadow-emerald-950/50 hover:-translate-y-0.5 cursor-pointer"
              >
                <Eye className="w-4 h-4" />
                <span>View CV</span>
              </button>

              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#1C2430] hover:bg-[#253040] border border-white/10 rounded-xl transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download CV (.PDF)</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Documento completo formatado para recrutadores e sistemas ATS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
