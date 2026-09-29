import React from "react";
import { CERTIFICATIONS_DATA } from "../data/portfolioData";
import { Award, Calendar, CheckCircle2, Cloud, Database, Layers } from "lucide-react";

export const Certifications: React.FC = () => {
  const getCertIcon = (title: string) => {
    if (title.toLowerCase().includes("cloud")) return Cloud;
    if (title.toLowerCase().includes("database") || title.toLowerCase().includes("mysql"))
      return Database;
    return Layers;
  };

  return (
    <section id="certifications" className="py-20 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            Professional Qualifications
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Certifications
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-3 mb-3" />
          <p className="text-sm text-slate-400">
            Industry and academic certifications earned to supplement engineering coursework
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => {
            const CertIcon = getCertIcon(cert.title);

            return (
              <div
                key={index}
                className="bg-slate-900/80 border border-slate-800 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between hover:shadow-xl hover:shadow-blue-950/20"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                      <CertIcon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  <div className="text-sm font-medium text-blue-400 mb-4">
                    {cert.provider}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Completed</span>
                  </span>
                  <span className="text-slate-400">Official Resume</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
