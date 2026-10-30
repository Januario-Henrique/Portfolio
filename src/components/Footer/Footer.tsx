import React from "react";
import { PROFILE } from "../../data/social";
import { Github, Linkedin, Mail, ArrowUp, Rocket } from "lucide-react";

interface FooterProps {
  onOpenDeployModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeployModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#0D1117] border-t border-white/5 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Title */}
          <div className="text-center md:text-left space-y-1">
            <p className="font-medium text-white">
              © 2026 {PROFILE.name}
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
              <span>Software Engineering Student • Full Stack Developer</span>
              {onOpenDeployModal && (
                <>
                  <span>•</span>
                  <button
                    onClick={onOpenDeployModal}
                    className="text-emerald-400 hover:text-emerald-300 font-medium inline-flex items-center gap-1 hover:underline"
                  >
                    <Rocket className="w-3 h-3" />
                    <span>Publicar na Vercel</span>
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-emerald-400 rounded-lg hover:bg-white/5 transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
