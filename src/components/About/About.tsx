import React, { useState } from "react";
import { DEVELOPMENT_LIFECYCLE } from "../../data/engineering";
import {
  Server,
  Database,
  Smartphone,
  Cpu,
  Globe,
  Cloud,
  Layers,
  Sparkles,
  GitBranch,
  ArrowRight,
  Workflow,
} from "lucide-react";

export const About: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const interestPillars = [
    {
      title: "Backend Engineering",
      icon: Server,
      desc: "Architecting reliable REST APIs, database persistence layers, and service orchestration.",
    },
    {
      title: "Full Stack Development",
      icon: Globe,
      desc: "Bridging reactive TypeScript frontends with typed server APIs and relational databases.",
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      desc: "Building cross-platform mobile experiences with React Native, Expo, and real-time cloud data.",
    },
    {
      title: "Software Architecture",
      icon: Layers,
      desc: "Applying object-oriented design patterns, MVC/DAO structures, and modular microservices.",
    },
    {
      title: "Databases & Storage",
      icon: Database,
      desc: "Designing normalized schemas, managing constraints, and indexing in PostgreSQL & MySQL.",
    },
    {
      title: "Artificial Intelligence",
      icon: Sparkles,
      desc: "Integrating modern LLM APIs (Gemini) with structured prompts and practical workflow automation.",
    },
    {
      title: "Open Source & Community",
      icon: GitBranch,
      desc: "Exploring open-source transit platforms (OpenTripPlanner, OneBusAway) and developer tooling.",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      desc: "Deploying production web apps, configuring environment variables, and learning Docker/Linux.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0D1117] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            01. Professional Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
            About Januario Henrique
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I am a Software Engineering student passionate about technology, problem solving,
            and building practical digital solutions. My journey combines academic knowledge
            with hands-on development through web, backend, mobile, database, AI, and
            software engineering projects.
          </p>
        </div>

        {/* Visual Concept: The Engineering Lifecycle */}
        <div className="mb-20">
          <div className="bg-[#111827] border border-white/10 rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/5 gap-4">
              <div>
                <span className="text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                  My Approach to Software Development
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Problem → Design → Code → Test → Deploy
                </h3>
              </div>
              <p className="text-xs text-slate-400 max-w-md">
                A disciplined engineering mindset ensuring every line of code addresses real user
                needs and operates predictably in production.
              </p>
            </div>

            {/* Lifecycle Stepper Navigation */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-6">
              {DEVELOPMENT_LIFECYCLE.map((step, idx) => {
                const isActive = selectedPhase === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setSelectedPhase(idx)}
                    className={`text-left p-3.5 rounded-xl transition-all border ${
                      isActive
                        ? "bg-[#151B23] border-emerald-500 shadow-md shadow-emerald-950/40"
                        : "bg-[#0A0A0A]/60 border-white/5 hover:border-white/15 hover:bg-[#151B23]/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs font-bold text-emerald-400">
                        {step.step}
                      </span>
                      {idx < DEVELOPMENT_LIFECYCLE.length - 1 && (
                        <ArrowRight className="hidden sm:inline w-3 h-3 text-slate-600" />
                      )}
                    </div>
                    <p className="text-sm font-bold text-white">{step.phase}</p>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">{step.label}</p>
                  </button>
                );
              })}
            </div>

            {/* Active Phase Deep Dive */}
            <div className="mt-6 p-5 bg-[#0D1117] rounded-xl border border-white/5">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-emerald-400">
                <Workflow className="w-4 h-4" />
                <span>Phase {DEVELOPMENT_LIFECYCLE[selectedPhase].step}: {DEVELOPMENT_LIFECYCLE[selectedPhase].label}</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {DEVELOPMENT_LIFECYCLE[selectedPhase].description}
              </p>
            </div>
          </div>
        </div>

        {/* Technical Focus Pillars */}
        <div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white">Core Engineering Interests</h3>
            <p className="text-sm text-slate-400 mt-1">
              Key domains where I apply academic theory to real-world software architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {interestPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-[#111827] hover:bg-[#151B23] border border-white/5 hover:border-emerald-500/30 rounded-xl p-5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0A0A0A] border border-white/5 flex items-center justify-center mb-4 group-hover:border-emerald-500/40 transition-colors">
                    <Icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
