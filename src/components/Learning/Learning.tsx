import React from "react";
import { CURRENTLY_LEARNING, OPEN_SOURCE_INTERESTS } from "../../data/technologies";
import {
  Sparkles,
  GitBranch,
  ArrowUpRight,
  TrendingUp,
  BookMarked,
  Layers,
  Compass,
} from "lucide-react";

export const Learning: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Currently Learning Section */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <p className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
                05. Growth Mindset
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                Currently Learning
              </h2>
              <p className="text-base text-slate-300">
                A transparent view into technologies, architectures, and systems I am actively
                studying to expand my engineering capabilities.
              </p>
            </div>

            {/* Signature Motto */}
            <div className="p-3 bg-[#111827] border border-white/10 rounded-xl inline-flex items-center gap-2 text-xs font-mono text-emerald-400 shrink-0">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="font-semibold">"Always learning. Always building."</span>
            </div>
          </div>

          {/* Grid of Learning Topics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CURRENTLY_LEARNING.map((item) => (
              <div
                key={item.title}
                className="bg-[#111827] border border-white/5 hover:border-emerald-500/30 rounded-xl p-5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-white">{item.title}</h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#151B23] text-emerald-400 border border-emerald-500/20">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Source & Community Section */}
        <div className="pt-12 border-t border-white/5">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
              <GitBranch className="w-4 h-4 text-emerald-400" />
              <span>Community & Global Ecosystem</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
              Open Source & Community
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Passionate about open technology ecosystems, public transit infrastructure codebases,
              and collaborative engineering.
            </p>
            <p className="text-xs font-mono text-emerald-400/90 mt-2">
              Focus: Areas I'm Interested in Contributing To
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OPEN_SOURCE_INTERESTS.map((interest) => (
              <div
                key={interest.name}
                className="bg-[#111827] border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h4 className="text-base font-bold text-white">{interest.name}</h4>
                    <span className="text-xs font-mono text-emerald-400">{interest.domain}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#151B23] text-slate-300 border border-white/10">
                    {interest.tech}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mt-2">
                  {interest.interest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
