import React, { useState } from "react";
import { TECHNICAL_SKILLS } from "../data/portfolioData";
import {
  Code2,
  Database,
  BookOpen,
  Wrench,
  Cpu,
  Layers,
  Terminal,
  GitBranch,
  FolderGit2,
  Server,
  FileCode,
} from "lucide-react";

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categoryIcons: Record<string, React.ElementType> = {
    "Programming Languages": Code2,
    Database: Database,
    "Core Subjects": BookOpen,
    "Tools & Technologies": Wrench,
    Other: Cpu,
  };

  const skillSpecificIcons: Record<string, React.ElementType> = {
    C: Terminal,
    Java: Code2,
    Python: FileCode,
    MySQL: Database,
    SQL: Database,
    "Data Structures and Algorithms": Layers,
    DBMS: Database,
    "Object-Oriented Programming": Layers,
    Git: GitBranch,
    GitHub: FolderGit2,
    Eclipse: Wrench,
    "Apache Tomcat": Server,
    JDBC: Database,
    JSP: FileCode,
    "Basic Software Development": Cpu,
  };

  const categories = ["All", ...TECHNICAL_SKILLS.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === "All"
      ? TECHNICAL_SKILLS
      : TECHNICAL_SKILLS.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
              Technical Proficiencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technical Skills
            </h2>
            <div className="h-1 w-12 bg-blue-500 rounded-full mt-3 mb-3" />
            <p className="text-sm text-slate-400">
              Verified technical foundation and coursework strictly recorded in
              academic credentials
            </p>
          </div>

          {/* Category Filter Tabs (Zero-Pill Discipline: Segmented Controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-blue-600 text-white shadow-sm font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup) => {
            const CatIcon = categoryIcons[catGroup.title] || Code2;

            return (
              <div
                key={catGroup.title}
                className="bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 rounded-2xl p-6 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800/70">
                    <div className="p-2 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                      <CatIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {catGroup.title}
                      </h3>
                      <div className="text-[11px] font-mono text-slate-400">
                        {catGroup.skills.length} competencies
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 gap-2.5">
                    {catGroup.skills.map((skill) => {
                      const SkillIcon = skillSpecificIcons[skill] || Code2;
                      return (
                        <div
                          key={skill}
                          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl bg-slate-950/60 border border-slate-800/60 hover:border-blue-500/30 hover:bg-slate-950 transition-colors group"
                        >
                          <div className="p-1 rounded-md bg-slate-900 text-slate-400 group-hover:text-blue-400 transition-colors">
                            <SkillIcon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                            {skill}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/50 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Resume Listed</span>
                  <span className="text-blue-400 font-medium">Academic Core</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
