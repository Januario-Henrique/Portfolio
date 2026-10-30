import React, { useState } from "react";
import {
  X,
  ExternalLink,
  Copy,
  Check,
  Terminal,
  Globe,
  Rocket,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface DeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeployModal: React.FC<DeployModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"vercel" | "netlify" | "github">(
    "vercel"
  );
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const vercelSteps = [
    {
      title: "1. Enviar código para o GitHub",
      cmd: `git init\ngit add .\ngit commit -m "feat: portfolio launch"\ngit branch -M main\ngit remote add origin https://github.com/Januario-Henrique/portfolio.git\ngit push -u origin main`,
    },
    {
      title: "2. Conectar na Vercel (Gratuito)",
      desc: "Acesse vercel.com, faça login com o GitHub e clique em 'Add New Project' → 'Import'.",
      link: "https://vercel.com/new",
      linkText: "Abrir Vercel New Project",
    },
    {
      title: "3. Configuração Automática",
      desc: "A Vercel detecta Vite automaticamente. Build: 'vite build', Diretório: 'dist'. O arquivo vercel.json e /api/contact.ts já estão configurados no projeto!",
    },
    {
      title: "4. Deploy Imediato!",
      desc: "Clique em 'Deploy'. Em menos de 40 segundos seu portfólio estará online com HTTPS gratuito e CDN global.",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#0D1117] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#111827]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <Rocket className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                Como Publicar Grátis (Vercel & Equivalentes)
              </h3>
              <p className="text-xs text-slate-400">
                Hospedagem 100% gratuita, com HTTPS e domínio personalizado
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/5 bg-[#0D1117]">
          <button
            onClick={() => setActiveTab("vercel")}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === "vercel"
                ? "border-emerald-400 text-emerald-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Vercel (Recomendado)</span>
          </button>
          <button
            onClick={() => setActiveTab("netlify")}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === "netlify"
                ? "border-emerald-400 text-emerald-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Netlify</span>
          </button>
          <button
            onClick={() => setActiveTab("github")}
            className={`pb-3 px-3 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === "github"
                ? "border-emerald-400 text-emerald-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>GitHub Pages</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          {activeTab === "vercel" && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>vercel.json</strong> e <strong>/api/contact.ts</strong> já foram
                    incluídos no projeto para suporte completo e sem configuração adicional!
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                {vercelSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#111827] border border-white/5 space-y-2"
                  >
                    <p className="font-semibold text-white text-xs">{step.title}</p>
                    {step.desc && (
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {step.desc}
                      </p>
                    )}
                    {step.cmd && (
                      <div className="relative mt-2">
                        <pre className="p-3 rounded-lg bg-[#0A0A0A] border border-white/5 text-[11px] font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                          {step.cmd}
                        </pre>
                        <button
                          onClick={() => handleCopy(step.cmd, idx)}
                          className="absolute top-2 right-2 p-1.5 rounded-md bg-[#151B23] hover:bg-[#1C2430] text-slate-300 hover:text-white transition-colors"
                          title="Copiar comando"
                        >
                          {copiedIndex === idx ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    )}
                    {step.link && (
                      <a
                        href={step.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:underline mt-1 font-medium"
                      >
                        <span>{step.linkText}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "netlify" && (
            <div className="space-y-4 text-xs text-slate-300">
              <p className="leading-relaxed">
                O Netlify também oferece hospedagem gratuita para sempre com CDN global.
              </p>
              <div className="p-4 rounded-xl bg-[#111827] border border-white/5 space-y-3">
                <p className="font-semibold text-white">Método Drag & Drop (Sem Git):</p>
                <ol className="list-decimal list-inside space-y-1.5 text-slate-300">
                  <li>Execute <code className="text-emerald-400 font-mono">npm run build</code></li>
                  <li>Acesse <a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer" className="text-emerald-400 underline">app.netlify.com/drop</a></li>
                  <li>Arraste a pasta <code className="text-emerald-400 font-mono">dist</code> para o navegador</li>
                  <li>Pronto! O site fica online instantaneamente com SSL gratuito.</li>
                </ol>
              </div>
            </div>
          )}

          {activeTab === "github" && (
            <div className="space-y-4 text-xs text-slate-300">
              <p className="leading-relaxed">
                Você pode publicar diretamente no GitHub Pages do seu perfil:
              </p>
              <div className="relative">
                <pre className="p-3.5 rounded-xl bg-[#0A0A0A] border border-white/5 text-[11px] font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                  {`# 1. Instalar gh-pages\nnpm install --save-dev gh-pages\n\n# 2. Publicar\nnpm run build\nnpx gh-pages -d dist`}
                </pre>
                <button
                  onClick={() =>
                    handleCopy(
                      "npm install --save-dev gh-pages\nnpm run build\nnpx gh-pages -d dist",
                      99
                    )
                  }
                  className="absolute top-2.5 right-2.5 p-1.5 rounded-md bg-[#151B23] hover:bg-[#1C2430] text-slate-300 hover:text-white transition-colors"
                >
                  {copiedIndex === 99 ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#111827] flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Consulte <code className="text-emerald-400 font-mono">DEPLOY.md</code> na raiz do projeto.
          </span>
          <div className="flex items-center gap-3">
            <a
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-emerald-400 text-slate-950 hover:bg-emerald-300 rounded-lg transition-colors"
            >
              <span>Abrir Vercel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-semibold bg-[#151B23] hover:bg-white/10 text-white rounded-lg transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
