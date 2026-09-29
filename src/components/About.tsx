import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { ProfileImage } from "./ProfileImage";
import {
  Code,
  Database,
  Globe,
  Layers,
  Lightbulb,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

export const About: React.FC = () => {
  const conceptIcons = [
    { name: "Programming", icon: Code, desc: "C, Java, Python development" },
    {
      name: "Database Management",
      icon: Database,
      desc: "MySQL, Relational Schema & SQL",
    },
    {
      name: "Web Technologies",
      icon: Globe,
      desc: "JSP, HTML, CSS, Tomcat",
    },
    {
      name: "Data Structures",
      icon: Layers,
      desc: "Algorithms & OOP concepts",
    },
    {
      name: "Problem Solving",
      icon: Lightbulb,
      desc: "Algorithmic thinking & logic",
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            Profile & Objectives
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-3" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Objective Statement Card */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-6 pb-6 border-b border-slate-800">
              <ProfileImage size="md" showUploadBadge={true} />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 rounded-lg bg-blue-600/10 text-blue-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {PERSONAL_INFO.name}
                  </h3>
                </div>
                <p className="text-xs text-blue-400 font-mono mb-1">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-slate-400">
                  Alva’s Institute Of Engineering Technology · Moodbidri
                </p>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400 mb-2">
              Career Objective:
            </div>
            <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed italic border-l-2 border-blue-500 pl-4 py-1 mb-8">
              "{PERSONAL_INFO.careerObjective}"
            </blockquote>

            {/* Quick Academic Highlights (strictly from resume) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800/80">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-slate-400">Current Status</div>
                  <div className="text-sm font-semibold text-white">
                    B.E. Computer Science (2024 - Present)
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-slate-400">Engineering Discipline</div>
                  <div className="text-sm font-semibold text-white">
                    Computer Science & Engineering
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-slate-400">Institution</div>
                  <div className="text-sm font-semibold text-white">
                    Alva’s Institute Of Engineering Technology
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-blue-400 mt-1 shrink-0" />
                <div>
                  <div className="text-xs font-mono text-slate-400">Focus Areas</div>
                  <div className="text-sm font-semibold text-white">
                    Core CS, DBMS, OOP & Web
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Highlighted Core Concepts */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="px-1">
              <h3 className="text-sm font-semibold text-slate-300 mb-1">
                Highlighted Competency Areas
              </h3>
              <p className="text-xs text-slate-400">
                Core technical domains highlighted in career objective
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {conceptIcons.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="p-2.5 rounded-lg bg-slate-800 text-blue-400 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {item.name}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
