import React from "react";
import { EDUCATION_DATA } from "../data/portfolioData";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Timeline & Cards Layout */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 ml-2 sm:ml-4 space-y-10">
          {EDUCATION_DATA.map((item, index) => {
            const isBE = item.isCurrent;

            return (
              <div key={index} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-125 ${
                    isBE
                      ? "bg-blue-500 border-slate-950 shadow-md shadow-blue-500/50 ring-4 ring-blue-500/20"
                      : "bg-slate-700 border-slate-950"
                  }`}
                />

                {/* Card Container */}
                <div
                  className={`rounded-2xl p-6 sm:p-7 transition-all duration-200 ${
                    isBE
                      ? "bg-slate-900/90 border border-blue-500/30 shadow-xl shadow-blue-950/20 ring-1 ring-blue-500/10"
                      : "bg-slate-900/50 border border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <GraduationCap
                        className={`w-5 h-5 ${
                          isBE ? "text-blue-400" : "text-slate-400"
                        }`}
                      />
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {item.degree}
                      </h3>
                    </div>

                    {isBE && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                        Current Degree
                      </span>
                    )}
                  </div>

                  <div className="text-base font-semibold text-slate-200 mb-4">
                    {item.institution}
                  </div>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
