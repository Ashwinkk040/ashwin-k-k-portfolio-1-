import React, { useEffect } from "react";
import { ProjectItem } from "../data/portfolioData";
import { X, Calendar, CheckCircle, Database, Layers, Code2 } from "lucide-react";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8 mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
            <Calendar className="w-3.5 h-3.5" />
            <span>{project.duration}</span>
            {project.highlight && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-emerald-400 font-semibold">
                  {project.highlight}
                </span>
              </>
            )}
          </div>

          <h3
            id="modal-project-title"
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <div className="mb-6 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80">
          <div className="text-xs font-mono text-slate-400 mb-1">
            Project Overview
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Technologies List (Clean unboxed representation) */}
        <div className="mb-6">
          <div className="text-xs font-mono text-slate-400 mb-2.5 flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-blue-400" />
            <span>Technologies Employed</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-950 border border-slate-800 text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features & Architecture Work */}
        <div className="mb-6">
          <div className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Key Features & Technical Work</span>
          </div>

          <ul className="space-y-2.5">
            {project.keyFeatures.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm text-slate-300"
              >
                <CheckCircle className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Note */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>Academic Project Verification</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
