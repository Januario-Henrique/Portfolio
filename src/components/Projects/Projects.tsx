import React, { useState } from "react";
import { FEATURED_PROJECTS, Project } from "../../data/projects";
import { ProjectModal } from "./ProjectModal";
import {
  Github,
  ExternalLink,
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Workflow,
  BookOpen,
} from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Separate MotoSys and Student Management System as flagship spotlight projects
  const motosys = FEATURED_PROJECTS.find((p) => p.id === "motosys")!;
  const sms = FEATURED_PROJECTS.find((p) => p.id === "student-management-system")!;
  const otherFeatured = FEATURED_PROJECTS.filter(
    (p) => p.id !== "motosys" && p.id !== "student-management-system"
  );

  return (
    <section id="projects" className="py-24 bg-[#0D1117] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            03. Portfolio Showcase
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Real-world software engineering implementations focusing on full-stack architecture,
            mobile dispatching, database design, and API integrations.
          </p>
        </div>

        {/* FLAGSHIP PROJECT 1: MotoSys */}
        <div className="mb-14">
          <div className="bg-[#111827] border border-white/10 hover:border-emerald-500/40 rounded-3xl overflow-hidden transition-all shadow-xl shadow-black/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image side */}
              <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[320px] bg-[#0A0A0A] overflow-hidden group">
                <img
                  src={motosys.image}
                  alt={motosys.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-mono font-bold bg-emerald-500 text-slate-950 px-3 py-1 rounded-full shadow-md">
                    Flagship Mobile Project
                  </span>
                </div>
              </div>

              {/* Details side */}
              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-emerald-400">
                    <span>Ride-Hailing & Mobility Management</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {motosys.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {motosys.description}
                  </p>

                  {/* Architecture Flow Card */}
                  <div className="bg-[#151B23] border border-white/5 rounded-xl p-4 mb-6">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      System Architecture Flow
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-emerald-400">
                      <span>Mobile Application</span>
                      <span className="text-slate-600">→</span>
                      <span>React Native / Expo</span>
                      <span className="text-slate-600">→</span>
                      <span>Auth Layer</span>
                      <span className="text-slate-600">→</span>
                      <span>Backend & DB</span>
                      <span className="text-slate-600">→</span>
                      <span>Cloud Services</span>
                    </div>
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {motosys.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-[#151B23] border border-white/5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Key Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 mb-6">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      Passenger & Rider Dual Flows
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      Interactive Route Navigation
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      Dynamic Fare & Ride Management
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      Cloud Database Synchronization
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(motosys)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </button>
                  <a
                    href={motosys.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-[#151B23] hover:bg-[#1f2937] border border-white/5 rounded-lg transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FLAGSHIP PROJECT 2: Student Management System */}
        <div className="mb-14">
          <div className="bg-[#111827] border border-white/10 hover:border-emerald-500/40 rounded-3xl overflow-hidden transition-all shadow-xl shadow-black/40">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Details side */}
              <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between order-2 lg:order-1">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-xs font-mono text-emerald-400">
                    <span>Full Stack · Database · RBAC</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {sms.name}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {sms.description}
                  </p>

                  {/* Architecture Flow Card */}
                  <div className="bg-[#151B23] border border-white/5 rounded-xl p-4 mb-6">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Full-Stack Architecture & Security
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono text-emerald-400">
                      <span>Next.js App Router</span>
                      <span className="text-slate-600">→</span>
                      <span>Supabase RBAC Auth</span>
                      <span className="text-slate-600">→</span>
                      <span>PostgreSQL RLS</span>
                      <span className="text-slate-600">→</span>
                      <span>Attendance Analytics</span>
                    </div>
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {sms.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-[#151B23] border border-white/5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Key Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 mb-6">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      Role-Based Access Control (RBAC)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      Student & Teacher Portals
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      Attendance & Leave Workflows
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      Academic Statistics & Charts
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setSelectedProject(sms)}
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </button>
                  <a
                    href={sms.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-[#151B23] hover:bg-[#1f2937] border border-white/5 rounded-lg transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Image side */}
              <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[320px] bg-[#0A0A0A] overflow-hidden group order-1 lg:order-2">
                <img
                  src={sms.image}
                  alt={sms.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent lg:hidden" />
                <div className="absolute top-4 right-4">
                  <span className="text-xs font-mono font-bold bg-emerald-500 text-slate-950 px-3 py-1 rounded-full shadow-md">
                    Academic Full-Stack
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* OTHER FEATURED PROJECTS: Up Skills Hub, MLH Gemini Hackathon, Weather App */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherFeatured.map((project) => (
            <div
              key={project.id}
              className="bg-[#111827] border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                    {project.subtitle.split(" ")[0]} Project
                  </span>
                  {project.badge && (
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-amber-500/10 text-amber-300 border border-amber-500/20 rounded">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-300 bg-[#151B23] border border-white/5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[11px] font-mono text-slate-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/5 transition-colors"
                  aria-label={`${project.name} GitHub Repository`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
