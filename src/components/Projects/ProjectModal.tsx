import React, { useEffect } from "react";
import { Project } from "../../data/projects";
import { X, Github, ExternalLink, Check, Layers, Cpu, AlertCircle, Sparkles } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div className="relative w-full max-w-4xl bg-[#0D1117] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161B22] shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Technical Case Study
            </span>
            <h3 id="case-study-title" className="text-lg font-bold text-white truncate max-w-md">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
          {/* Mockup Preview */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video bg-[#0A0A0A] max-h-72">
            <img
              src={project.image}
              alt={project.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-white drop-shadow-md">{project.name}</p>
                <p className="text-xs text-slate-300 drop-shadow-md">{project.subtitle}</p>
              </div>
              {project.highlight && (
                <span className="hidden sm:inline-block text-xs font-mono bg-emerald-500/90 text-slate-950 font-bold px-2.5 py-1 rounded-md shadow-lg">
                  {project.highlight}
                </span>
              )}
            </div>
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111827] p-5 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-semibold uppercase mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>The Engineering Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="bg-[#111827] p-5 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase mb-2">
                <Sparkles className="w-4 h-4" />
                <span>The Architectural Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline Visualization */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="bg-[#111827] p-5 rounded-xl border border-white/5">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold uppercase mb-3">
                <Layers className="w-4 h-4" />
                <span>System Architecture Flow</span>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-2">
                {project.architecture.map((layer, idx) => (
                  <React.Fragment key={layer}>
                    <div className="flex-1 bg-[#151B23] border border-white/10 p-3 rounded-lg text-center">
                      <span className="block text-[10px] font-mono text-emerald-400">
                        Layer 0{idx + 1}
                      </span>
                      <span className="text-xs font-semibold text-white mt-0.5 block">
                        {layer}
                      </span>
                    </div>
                    {idx < (project.architecture?.length ?? 0) - 1 && (
                      <span className="text-slate-600 text-center font-bold hidden sm:inline">
                        →
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Main Features */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              Core Technical Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 bg-[#151B23] p-3 rounded-lg border border-white/5"
                >
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#161B22] border-t border-white/10 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
          >
            Close
          </button>
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#21262D] hover:bg-[#30363D] rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
