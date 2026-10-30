import React, { useState, useEffect } from "react";
import { Github, Star, GitFork, ExternalLink, RefreshCw, FolderGit2, BookOpen } from "lucide-react";

const GITHUB_USERNAME = "Januario-Henrique";

interface RepoItem {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
}

export const GitHubActivity: React.FC = () => {
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchRepos() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
        );
        if (!res.ok) {
          throw new Error("GitHub API rate limit or error");
        }
        const data = await res.json();
        if (isMounted) {
          setRepos(data);
          setError(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(true);
          // Fallback repositories representing real profile work
          setRepos([
            {
              id: 1,
              name: "MotoSys-Mobile",
              description: "Mobile ride-hailing and motorcycle dispatching platform built with React Native & Expo.",
              html_url: `https://github.com/${GITHUB_USERNAME}`,
              language: "TypeScript",
              stargazers_count: 0,
              forks_count: 0,
              updated_at: new Date().toISOString(),
            },
            {
              id: 2,
              name: "Student-Management-System",
              description: "Academic full-stack platform with RBAC, attendance management, and PostgreSQL schemas.",
              html_url: `https://github.com/${GITHUB_USERNAME}`,
              language: "TypeScript",
              stargazers_count: 0,
              forks_count: 0,
              updated_at: new Date().toISOString(),
            },
            {
              id: 3,
              name: "Up-Skills-Hub",
              description: "Responsive career training and internship platform utilizing CSS Grid & modern UI/UX.",
              html_url: `https://github.com/${GITHUB_USERNAME}`,
              language: "HTML / CSS",
              stargazers_count: 0,
              forks_count: 0,
              updated_at: new Date().toISOString(),
            },
            {
              id: 4,
              name: "hotel-management-system",
              description: "Enterprise Java desktop administration system implementing DAO architecture & MySQL.",
              html_url: `https://github.com/${GITHUB_USERNAME}`,
              language: "Java",
              stargazers_count: 0,
              forks_count: 0,
              updated_at: new Date().toISOString(),
            },
          ]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="py-24 bg-[#0A0A0A] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-mono font-semibold tracking-wider text-emerald-400 uppercase mb-2">
              07. Code Repositories
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Development Activity
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Public code repositories and commits on GitHub demonstrating version control
              consistency, documentation, and active software building.
            </p>
          </div>

          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#111827] hover:bg-[#161F2E] border border-white/10 hover:border-emerald-500/30 rounded-xl transition-all shrink-0"
          >
            <Github className="w-4 h-4 text-emerald-400" />
            <span>github.com/{GITHUB_USERNAME}</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111827] hover:bg-[#151B23] border border-white/5 hover:border-emerald-500/30 rounded-2xl p-6 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-slate-300 group-hover:text-emerald-300 transition-colors">
                    <FolderGit2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <h3 className="text-sm font-bold truncate max-w-[200px]">
                      {repo.name}
                    </h3>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3">
                  {repo.description || "Public repository containing source code and engineering documentation."}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                {repo.language && (
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>{repo.language}</span>
                  </span>
                )}
                <span className="text-[11px] text-slate-500">
                  {repo.updated_at ? new Date(repo.updated_at).toLocaleDateString() : "Recent"}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
