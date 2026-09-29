import React, { useState } from "react";
import { PROJECTS_DATA, ProjectItem } from "../data/portfolioData";
import { ProjectDetailModal } from "./ProjectDetailModal";
import {
  Calendar,
  Layers,
  ArrowRight,
  Database,
  Server,
  Code2,
  CheckCircle2,
  Package,
} from "lucide-react";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  return (
    <section id="projects" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            Academic & Practical Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projects
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-3 mb-3" />
          <p className="text-sm text-slate-400">
            Real-world academic systems developed with Java web technologies and
            relational database architectures
          </p>
        </div>

        {/* 2 Large Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => {
            const isProduct = project.id === "product-management-system";

            return (
              <div
                key={project.id}
                className="group relative bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/20 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar of Card */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{project.duration}</span>
                    </div>

                    {project.highlight && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {project.highlight}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="mb-6 space-y-2">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                      Key Highlights & Work:
                    </div>
                    {project.keyFeatures.map((feat, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Technology Tags (Zero-Pill discipline: unboxed subtle labels) */}
                  <div className="pt-5 border-t border-slate-800/80 mb-6">
                    <div className="text-[11px] font-mono text-slate-400 mb-2">
                      Technologies Stack:
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs font-mono text-slate-300">
                      {project.technologies.map((tech, index) => (
                        <React.Fragment key={tech}>
                          <span className="text-blue-300 font-medium">
                            {tech}
                          </span>
                          {index < project.technologies.length - 1 && (
                            <span
                              className="text-slate-600 select-none"
                              aria-hidden="true"
                            >
                              ·
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-blue-600 border border-slate-700/80 hover:border-blue-500 rounded-xl transition-all duration-150 focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
                  >
                    <span>View Project Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal Container */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
