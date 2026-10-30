import React, { useState } from "react";
import { PROFILE } from "../../data/social";
import {
  MapPin,
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Code2,
  CheckCircle2,
  Layers,
  Copy,
  Check,
} from "lucide-react";

interface HeroProps {
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCvModal }) => {
  const [activeTab, setActiveTab] = useState<"profile" | "architecture" | "principles">("profile");
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = () => {
    navigator.clipboard.writeText("npx januario-henrique");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-96 h-96 bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Subtle grid background pattern */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Identity & Professional Positioning */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status Badge & Location unboxed metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full font-mono font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{PROFILE.status}</span>
              </div>

              <div className="flex items-center gap-1.5 text-slate-400 font-medium">
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{PROFILE.location}</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                <span>{PROFILE.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-emerald-400">
                {PROFILE.mainTitle}
              </p>
            </div>

            {/* Professional Statement */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-pretty">
              {PROFILE.statement}
            </p>

            {/* Core Domain Disciplines - Clean unboxed text with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-400 font-mono">
              {PROFILE.domains.map((domain, index) => (
                <React.Fragment key={domain}>
                  <span className="text-slate-300 hover:text-emerald-400 transition-colors">
                    {domain}
                  </span>
                  {index < PROFILE.domains.length - 1 && (
                    <span className="text-slate-600 select-none">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-900/30 hover:shadow-emerald-900/50 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-200 bg-[#151B23] hover:bg-[#1C2430] border border-white/10 hover:border-emerald-500/40 rounded-xl transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Download CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Quick Shell Snippet */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400 hover:text-white" />
                  <span className="text-xs">GitHub</span>
                </a>
                <span className="text-slate-700">|</span>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-slate-400 hover:text-white" />
                  <span className="text-xs">LinkedIn</span>
                </a>
                <span className="text-slate-700">|</span>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-slate-400 hover:text-white" />
                  <span className="text-xs">Email</span>
                </a>
              </div>

              {/* Developer terminal micro badge */}
              <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 bg-[#111827] border border-white/5 rounded-lg text-xs font-mono text-slate-400">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-slate-300">npx januario-henrique</span>
                <button
                  onClick={handleCopyCommand}
                  className="ml-1 text-slate-500 hover:text-slate-200 transition-colors"
                  title="Copy terminal command"
                  aria-label="Copy terminal command"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Visual Component */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0D1117] border border-white/10 shadow-2xl shadow-black/80 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#161B22] border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#EC6A5E]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#F5BF4F]/80" />
                  <div className="w-3 h-3 rounded-full bg-[#62C554]/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>developer.config.ts</span>
                  </span>
                </div>

                {/* Tab selector */}
                <div className="flex items-center gap-1 p-0.5 bg-[#0D1117] rounded-lg">
                  <button
                    onClick={() => setActiveTab("profile")}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "profile"
                        ? "bg-[#21262D] text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    bio
                  </button>
                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "architecture"
                        ? "bg-[#21262D] text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    stack
                  </button>
                  <button
                    onClick={() => setActiveTab("principles")}
                    className={`px-2 py-0.5 text-[11px] font-mono rounded transition-colors ${
                      activeTab === "principles"
                        ? "bg-[#21262D] text-white"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    mindset
                  </button>
                </div>
              </div>

              {/* Code viewer body */}
              <div className="p-5 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto min-h-[300px]">
                {activeTab === "profile" && (
                  <div className="space-y-1">
                    <p className="text-slate-500">
                      <span className="text-purple-400">export const</span> developer = &#123;
                    </p>
                    <p className="pl-4">
                      name: <span className="text-emerald-300">"{PROFILE.name}"</span>,
                    </p>
                    <p className="pl-4">
                      location: <span className="text-emerald-300">"{PROFILE.location}"</span>,
                    </p>
                    <p className="pl-4">
                      role: <span className="text-amber-300">"Software Engineering Student"</span>,
                    </p>
                    <p className="pl-4">
                      focus: [<span className="text-emerald-300">"Backend"</span>, <span className="text-emerald-300">"Full Stack"</span>, <span className="text-emerald-300">"APIs"</span>],
                    </p>
                    <p className="pl-4">
                      availability: <span className="text-emerald-400">true</span>,
                    </p>
                    <p className="pl-4">
                      github: <span className="text-blue-300">"@{PROFILE.githubUsername}"</span>,
                    </p>
                    <p className="pl-4">
                      approach: <span className="text-slate-400">&#40;&#41; =&gt; &#123;</span>
                    </p>
                    <p className="pl-8 text-emerald-400">
                      return <span className="text-amber-300">"Real-world problems → resilient solutions"</span>;
                    </p>
                    <p className="pl-4 text-slate-400">&#125;</p>
                    <p className="text-slate-500">&#125;;</p>

                    <div className="pt-4 border-t border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
                      <span className="text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Ready for Internships & Projects</span>
                      </span>
                      <span className="text-slate-500">Kigali, RW</span>
                    </div>
                  </div>
                )}

                {activeTab === "architecture" && (
                  <div className="space-y-1">
                    <p className="text-purple-400">interface TechStack &#123;</p>
                    <p className="pl-4 text-slate-400">
                      languages: [<span className="text-amber-300">"Java"</span>, <span className="text-amber-300">"TypeScript"</span>, <span className="text-amber-300">"Python"</span>, <span className="text-amber-300">"SQL"</span>],
                    </p>
                    <p className="pl-4 text-slate-400">
                      backend: [<span className="text-emerald-300">"Node.js"</span>, <span className="text-emerald-300">"Express"</span>, <span className="text-emerald-300">"Spring Boot"</span>, <span className="text-emerald-300">"REST APIs"</span>],
                    </p>
                    <p className="pl-4 text-slate-400">
                      databases: [<span className="text-blue-300">"PostgreSQL"</span>, <span className="text-blue-300">"MySQL"</span>, <span className="text-blue-300">"Supabase"</span>],
                    </p>
                    <p className="pl-4 text-slate-400">
                      frontend: [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Next.js"</span>, <span className="text-cyan-300">"React Native"</span>],
                    </p>
                    <p className="pl-4 text-slate-400">
                      mobile: <span className="text-emerald-400">"Expo / Cross-Platform"</span>,
                    </p>
                    <p className="text-purple-400">&#125;</p>

                    <div className="pt-3 border-t border-white/5 text-[11px] text-slate-400">
                      <span className="text-slate-400">Targeting scalable, strongly-typed system engineering.</span>
                    </div>
                  </div>
                )}

                {activeTab === "principles" && (
                  <div className="space-y-1.5">
                    <p className="text-slate-500">
                      <span className="text-purple-400">const</span> engineeringLifecycle = [
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-emerald-400">"01_Problem"</span>: "Examine stakeholder friction & requirements",
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-emerald-400">"02_Design"</span>: "Model UML diagrams, schemas & contracts",
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-emerald-400">"03_Code"</span>: "Clean OOP, modular services & typed APIs",
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-emerald-400">"04_Test"</span>: "Validate edge-cases & relational integrity",
                    </p>
                    <p className="pl-4 text-slate-300">
                      <span className="text-emerald-400">"05_Deploy"</span>: "Observability, cloud deployment & iteration",
                    </p>
                    <p className="text-slate-500">];</p>
                    <p className="pt-2 text-slate-400">
                      /* Continuous learning • Methodical problem solving */
                    </p>
                  </div>
                )}
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-2 bg-[#11161D] border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Januario Henrique · Rwanda</span>
                </span>
                <span>UTF-8 · TS 5.x</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
