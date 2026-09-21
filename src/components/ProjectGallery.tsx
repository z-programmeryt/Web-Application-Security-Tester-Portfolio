"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Star, GitFork, ChevronRight, X, Tag, Wrench, Shield, FileText, Zap } from "lucide-react";
import { Github } from "@/components/icons/BrandIcons";
import { allProjects, projectFilters, type Project, type ProjectFilterId } from "@/data/projects";
import { useTilt } from "@/hooks/useTilt";
import { useSpotlight } from "@/hooks/useSpotlight";
import Reveal from "@/components/Reveal";

function FeaturedCard({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  const { ref: tiltRef, handleMouseMove: tiltMove, handleMouseLeave: tiltLeave } = useTilt(3);
  const { ref: spotRef, handleMouseMove: spotMove } = useSpotlight();

  return (
    <article
      ref={(el: HTMLDivElement | null) => { tiltRef.current = el; spotRef.current = el; }}
      onMouseMove={(e) => { tiltMove(e); spotMove(e); }}
      onMouseLeave={tiltLeave}
      className="group relative glass-card spotlight overflow-hidden preserve-3d"
    >
      <div className="p-6 sm:p-8 md:p-10">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full">✦ Featured</span>
              <span className="px-3 py-1 text-xs font-medium bg-electric-500/10 text-electric-300 border border-electric-500/15 rounded-full">{project.categoryLabel}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 group-hover:text-electric-300 transition-colors">{project.title}</h3>
            <p className="text-text-secondary leading-relaxed mb-6 max-w-xl">{project.longDescription || project.description}</p>
            <div className="grid sm:grid-cols-2 gap-2 mb-6">
              {project.features.slice(0, 4).map((f) => (
                <div key={f} className="flex items-start gap-2 text-sm text-text-muted">
                  <Zap className="w-3.5 h-3.5 text-electric-400 mt-0.5 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 6).map((t) => (
                <span key={t} className="px-2.5 py-1 text-[11px] font-mono bg-navy-800/50 border border-border-subtle rounded-md text-text-muted">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => onSelect(project)} className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 bg-electric-500 hover:bg-electric-400 text-white text-sm font-semibold rounded-xl shadow-lg shadow-electric-500/20 transition-all">
                <span className="relative z-10">Full Details</span>
                <ChevronRight className="w-4 h-4 relative z-10" />
              </button>
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-medium hover:border-electric-500/40 text-sm font-medium rounded-xl transition-all hover:bg-electric-500/5">
                <Github className="w-4 h-4" /> Source
              </a>
            </div>
          </div>
          {project.stats && (
            <div className="flex md:flex-col gap-4 md:gap-3 md:w-32 flex-shrink-0">
              <div className="glass-card !rounded-xl p-4 text-center flex-1">
                <Star className="w-4 h-4 text-amber-400 mx-auto mb-1" />
                <p className="text-lg font-bold text-text-primary">{project.stats.stars}</p>
                <p className="text-[10px] text-text-muted">Stars</p>
              </div>
              <div className="glass-card !rounded-xl p-4 text-center flex-1">
                <GitFork className="w-4 h-4 text-text-muted mx-auto mb-1" />
                <p className="text-lg font-bold text-text-primary">{project.stats.forks}</p>
                <p className="text-[10px] text-text-muted">Forks</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function GalleryCard({ project, onSelect }: { project: Project; onSelect: (p: Project) => void }) {
  const { ref: spotRef, handleMouseMove: spotMove } = useSpotlight();

  return (
    <article
      ref={spotRef}
      onMouseMove={spotMove}
      className="group glass-card spotlight overflow-hidden hover:scale-[1.02] transition-all duration-400 flex flex-col"
    >
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2.5 py-0.5 text-[10px] font-medium bg-electric-500/10 text-electric-300 border border-electric-500/15 rounded-full">{project.categoryLabel}</span>
          <span className={`w-1.5 h-1.5 rounded-full ${project.ownership === "original" ? "bg-emerald-400" : "bg-amber-400"}`} />
          <span className="text-[10px] text-text-muted">{project.ownershipLabel}</span>
        </div>
        <h3 className="text-lg font-bold text-text-primary group-hover:text-electric-300 transition-colors mb-2">{project.title}</h3>
        <p className="text-sm text-text-muted leading-relaxed line-clamp-2 mb-4 flex-1">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.languages.map((lang) => (
            <span key={lang} className="px-2 py-0.5 text-[10px] font-mono bg-navy-800/50 border border-border-subtle rounded text-text-muted">{lang}</span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4">
          <button onClick={() => onSelect(project)} className="flex items-center gap-1 text-sm text-electric-400 hover:text-electric-300 transition-colors font-medium">
            Details <ChevronRight className="w-4 h-4" />
          </button>
          <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="p-2 text-text-muted hover:text-text-primary transition-colors" aria-label={`View ${project.title} on GitHub`}>
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </article>
  );
}

function DetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={`${project.title} details`}>
      <div className="absolute inset-0 bg-navy-950/90 backdrop-blur-md" onClick={onClose} />
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-card !rounded-2xl shadow-2xl animate-scale-in">
        <div className="p-6 sm:p-8">
          <button onClick={onClose} className="absolute top-5 right-5 p-2 text-text-muted hover:text-text-primary glass-card !rounded-lg transition-all" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
          <div className="mb-6 pr-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-1 text-xs font-medium bg-electric-500/10 text-electric-300 border border-electric-500/15 rounded-full">{project.categoryLabel}</span>
              {project.stats && (
                <div className="flex items-center gap-3 text-xs text-text-muted">
                  <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" />{project.stats.stars}</span>
                  <span className="flex items-center gap-1"><GitFork className="w-3.5 h-3.5" />{project.stats.forks}</span>
                </div>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">{project.title}</h2>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <span className={`w-2 h-2 rounded-full ${project.ownership === "original" ? "bg-emerald-400" : "bg-amber-400"}`} />
              {project.ownershipLabel}
              {project.license && <span>• {project.license}</span>}
              {project.updatedAt && <span>• {project.updatedAt}</span>}
            </div>
          </div>
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-xs font-mono text-electric-400 uppercase tracking-wider mb-3"><FileText className="w-4 h-4" /> Overview</h3>
            <p className="text-text-secondary leading-relaxed">{project.longDescription || project.description}</p>
          </div>
          <div className="mb-6 glass-card !rounded-xl p-4 border-electric-500/15">
            <h3 className="flex items-center gap-2 text-xs font-mono text-electric-400 uppercase tracking-wider mb-2"><Shield className="w-4 h-4" /> Security Relevance</h3>
            <p className="text-sm text-text-secondary">{project.securityRelevance}</p>
          </div>
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-xs font-mono text-electric-400 uppercase tracking-wider mb-3"><Wrench className="w-4 h-4" /> Key Features</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-text-secondary"><span className="text-electric-400 mt-0.5">▹</span>{f}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-xs font-mono text-electric-400 uppercase tracking-wider mb-3"><Tag className="w-4 h-4" /> Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span key={t} className="px-3 py-1 text-xs font-mono bg-navy-800/50 border border-border-subtle rounded-lg text-text-secondary">{t}</span>
              ))}
            </div>
          </div>
          {project.attribution && (
            <div className="mb-6 glass-card !rounded-xl p-4 border-amber-500/15">
              <h3 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">Attribution</h3>
              <p className="text-sm text-text-secondary">{project.attribution}</p>
            </div>
          )}
          <div className="flex flex-wrap gap-3 pt-6">
            <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="magnetic-btn inline-flex items-center gap-2 px-5 py-2.5 bg-electric-500 hover:bg-electric-400 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-electric-500/20">
              <Github className="w-4 h-4 relative z-10" /> <span className="relative z-10">View on GitHub</span> <ExternalLink className="w-3.5 h-3.5 relative z-10" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterId>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeFilter === "all" ? allProjects : allProjects.filter((p) => p.category === activeFilter);
  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured && p.slug !== featured?.slug);

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setSelectedProject(null); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedProject]);

  return (
    <section className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-10">
            {projectFilters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                  activeFilter === f.id ? "bg-electric-500 text-white shadow-lg shadow-electric-500/20" : "glass-card text-text-secondary hover:text-text-primary"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {featured && (
          <Reveal delay={0.08} className="mb-6">
            <FeaturedCard project={featured} onSelect={setSelectedProject} />
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((project, i) => (
              <Reveal key={project.slug} delay={(i % 3) * 0.08}>
                <GalleryCard project={project} onSelect={setSelectedProject} />
              </Reveal>
            ))}
          </div>
        )}

        {filtered.length === 0 && <p className="text-center text-text-muted py-12">No projects in this category yet.</p>}
      </div>

      {selectedProject && <DetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}