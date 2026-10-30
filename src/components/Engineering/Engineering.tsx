import React, { useState } from "react";
import { SOFTWARE_ENGINEERING_AREAS } from "../../data/engineering";
import {
  FileCode,
  GitBranch,
  Terminal,
  Workflow,
  Layers,
  CheckCircle2,
  Cpu,
  BookOpen,
} from "lucide-react";

export const Engineering: React.FC = () => {
  const [activeArea, setActiveArea] = useState<number>(0);

  const areaIcons = [Workflow, Layers, GitBranch];

  return (
    <section id="engineering" className="py-24 bg-[#0D1117] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            04. Formal Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Software Engineering Discipline
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Beyond writing raw code, software engineering requires rigorous modeling,
            principled architecture design, version control workflows, and thorough problem decomposition.
          </p>
        </div>

        {/* 3 Main Pillars: Design, Development, Practices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SOFTWARE_ENGINEERING_AREAS.map((area, idx) => {
            const Icon = areaIcons[idx] || Workflow;
            return (
              <div
                key={area.title}
                className="bg-[#111827] border border-white/5 hover:border-emerald-500/30 rounded-2xl p-7 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#151B23] border border-white/10 flex items-center justify-center text-emerald-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-snug">
                        {area.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                        {area.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Topics List with clean unboxed styling */}
                  <div className="space-y-4 pt-3">
                    {area.topics.map((topic) => (
                      <div key={topic.name} className="border-l-2 border-emerald-500/40 pl-3">
                        <h4 className="text-xs font-bold text-white font-mono">
                          {topic.name}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                          {topic.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{area.topics.length} formal methods</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Applied Rigor</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
