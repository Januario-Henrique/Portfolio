import React from "react";
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from "../../data/education";
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle2, Clock } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#0D1117] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
            06. Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Education & Continuous Learning
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Formal university education in software engineering supplemented with hands-on
            technical specializations and independent architectural coursework.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Education Card (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <span>University Education</span>
            </h3>

            {EDUCATION_DATA.map((edu) => (
              <div
                key={edu.field}
                className="bg-[#111827] border border-white/10 rounded-2xl p-7 relative"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-emerald-400 font-semibold uppercase">
                    {edu.status}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{edu.location}</span>
                  </span>
                </div>

                <h4 className="text-2xl font-bold text-white mb-1">
                  {edu.field}
                </h4>
                <p className="text-sm font-semibold text-slate-300 mb-4">
                  {edu.degree} · {edu.institution}
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {edu.description}
                </p>

                <div>
                  <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Core Coursework & Studies
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {edu.coreCoursework.map((course) => (
                      <div key={course} className="flex items-center gap-2 bg-[#151B23] p-2 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate">{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Courses (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <span>Certifications & Courses</span>
            </h3>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-[#111827] border border-white/5 hover:border-emerald-500/30 rounded-xl p-5 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-sm font-bold text-white leading-tight">
                      {cert.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        cert.status === "Completed"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : cert.status === "In Progress"
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-3">
                    {cert.issuer} {cert.year && `· ${cert.year}`}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono text-slate-300 bg-[#151B23] px-2 py-0.5 rounded border border-white/5"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#151B23] border border-white/5 rounded-xl text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-emerald-400 font-mono mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Easily Updatable</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Ongoing studies and international certifications are continuously added as requirements
                and specialized competencies are completed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
