import React from "react";
import { JAVA_ENGINEERING_PROJECTS } from "../../data/projects";
import {
  Coffee,
  Database,
  Layers,
  CheckCircle2,
  FolderGit2,
  Cpu,
} from "lucide-react";

export const JavaProjects: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            <Coffee className="w-4 h-4 text-emerald-400" />
            <span>Enterprise Architecture & OOP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
            Java & Software Engineering Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Desktop systems and enterprise architecture foundations built in Java demonstrating
            Object-Oriented Programming (OOP), CRUD architectures, DAO pattern isolation,
            Hibernate ORM, and relational database design.
          </p>
        </div>

        {/* 3-Column Card Grid (Clean, balanced, less prominent than flagship mobile/web apps) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JAVA_ENGINEERING_PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#111827] border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-emerald-400">{proj.category}</span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Database className="w-3 h-3 text-emerald-500/70" />
                    <span>MySQL / Relational</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{proj.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-5">
                  {proj.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono text-emerald-300/90 bg-[#151B23] border border-emerald-500/20 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Engineering Highlights */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block tracking-wider">
                    Core Technical Features
                  </span>
                  {proj.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-1.5 text-xs text-slate-300">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architectural Principles Badge */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-1">
                {proj.principles.slice(0, 2).map((principle) => (
                  <span
                    key={principle}
                    className="text-[10px] font-mono text-slate-400 bg-[#0D1117] px-2 py-1 rounded"
                  >
                    {principle}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
