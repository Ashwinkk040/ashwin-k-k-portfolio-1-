import React from "react";
import { SOFT_SKILLS } from "../data/portfolioData";
import {
  MessageSquare,
  Users,
  Lightbulb,
  Zap,
  Ear,
  Presentation,
  Check,
} from "lucide-react";

export const SoftSkills: React.FC = () => {
  const softSkillIcons: Record<string, React.ElementType> = {
    Communication: MessageSquare,
    "Teamwork & Collaboration": Users,
    "Problem Solving": Lightbulb,
    "Quick Learning": Zap,
    "Active Listener": Ear,
    "Presentation Skills": Presentation,
  };

  const skillDescriptions: Record<string, string> = {
    Communication:
      "Clear articulation of engineering ideas, technical requirements, and project status.",
    "Teamwork & Collaboration":
      "Cooperative mindset in group labs, academic projects, and peer development.",
    "Problem Solving":
      "Analytical approach to debugging code, optimizing queries, and algorithmic logic.",
    "Quick Learning":
      "Rapidly grasping new computer science concepts, tools, and technical frameworks.",
    "Active Listener":
      "Attentive comprehension of technical guidelines, feedback, and user requirements.",
    "Presentation Skills":
      "Structured demonstration of software systems, technical documentation, and project outcomes.",
  };

  return (
    <section id="soft-skills" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            Interpersonal Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Non-Technical Skills
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-3 mb-3" />
          <p className="text-sm text-slate-400">
            Professional and collaborative qualities essential for workplace integration and team productivity
          </p>
        </div>

        {/* 6 Cards Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOFT_SKILLS.map((skill) => {
            const Icon = softSkillIcons[skill] || Check;
            const description = skillDescriptions[skill];

            return (
              <div
                key={skill}
                className="bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-200 hover:shadow-lg hover:shadow-blue-950/20 group"
              >
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="p-2.5 rounded-xl bg-slate-800 text-blue-400 group-hover:bg-blue-600/10 group-hover:text-blue-300 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {skill}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
