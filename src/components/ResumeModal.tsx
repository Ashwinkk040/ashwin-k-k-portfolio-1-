import React, { useEffect } from "react";
import {
  PERSONAL_INFO,
  EDUCATION_DATA,
  TECHNICAL_SKILLS,
  SOFT_SKILLS,
  PROJECTS_DATA,
  CERTIFICATIONS_DATA,
} from "../data/portfolioData";
import { ProfileImage } from "./ProfileImage";
import { X, Printer, Mail, Phone, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-10 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 shrink-0">
          <div className="text-xs font-mono text-slate-400">
            Resume View · Faithful to Original Credentials
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="overflow-y-auto pr-2 space-y-6 text-slate-200 print:text-black">
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1
                id="resume-title"
                className="text-3xl font-extrabold text-white tracking-tight"
              >
                {PERSONAL_INFO.name}
              </h1>
              <div className="text-sm font-semibold text-blue-400 mt-1">
                {PERSONAL_INFO.title}
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  {PERSONAL_INFO.phone}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  {PERSONAL_INFO.email}
                </span>
                <span>·</span>
                <span>LinkedIn: {PERSONAL_INFO.linkedin}</span>
                <span>·</span>
                <span>GitHub: {PERSONAL_INFO.github}</span>
              </div>
            </div>

            <div className="shrink-0 self-start sm:self-center">
              <ProfileImage size="sm" showUploadBadge={false} />
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-2">
              Career Objective
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
              "{PERSONAL_INFO.careerObjective}"
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div>
                    <div className="text-sm font-bold text-white">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-slate-400">
                      {edu.institution}, {edu.location}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 sm:text-right">
                    <div>{edu.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TECHNICAL_SKILLS.map((cat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80"
                >
                  <div className="text-xs font-bold text-slate-200 mb-1.5">
                    {cat.title}
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    {cat.skills.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div
                  key={proj.id}
                  className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div className="text-sm font-bold text-white">
                      {proj.title}
                    </div>
                    <div className="text-xs font-mono text-slate-400">
                      {proj.duration}
                    </div>
                  </div>

                  <div className="text-xs font-mono text-blue-400 mb-2">
                    Tech: {proj.technologies.join(", ")}
                  </div>

                  <p className="text-xs text-slate-300 mb-3">
                    {proj.description}
                  </p>

                  <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                    {proj.keyFeatures.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-3">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80"
                >
                  <div className="text-xs font-bold text-white mb-1">
                    {cert.title}
                  </div>
                  <div className="text-[11px] text-blue-400 mb-1">
                    {cert.provider}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Non-Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold mb-2">
              Non-Technical Skills
            </h2>
            <div className="text-xs text-slate-300 font-mono bg-slate-950/50 p-3.5 rounded-xl border border-slate-800/80">
              {SOFT_SKILLS.join(" · ")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
