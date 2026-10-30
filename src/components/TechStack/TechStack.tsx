import React, { useState } from "react";
import { TECH_CATEGORIES } from "../../data/technologies";
import {
  Code,
  Server,
  Layers,
  Database,
  KeyRound,
  Terminal,
  Cpu,
  CheckCircle2,
} from "lucide-react";

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryIcons: Record<string, React.ElementType> = {
    languages: Code,
    backend: Server,
    frontend: Layers,
    databases: Database,
    "auth-cloud": KeyRound,
    tools: Terminal,
    discipline: Cpu,
  };

  const filteredCategories =
    activeCategory === "all"
      ? TECH_CATEGORIES
      : TECH_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
              02. Technical Toolkit
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Technology Stack & Methodologies
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Modern languages, frameworks, databases, and engineering principles I utilize across
              full-stack, backend, and mobile applications.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#111827] border border-white/10 rounded-xl overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-emerald-500 text-slate-950 font-semibold shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Categories
            </button>
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? "bg-emerald-500 text-slate-950 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Code;
            return (
              <div
                key={category.id}
                className="bg-[#111827] border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-[#151B23] border border-white/10 flex items-center justify-center text-emerald-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-200 bg-[#151B23] border border-white/5 hover:border-emerald-500/40 hover:text-emerald-300 rounded-lg transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/70" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-emerald-400/80 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Applied in Projects</span>
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
