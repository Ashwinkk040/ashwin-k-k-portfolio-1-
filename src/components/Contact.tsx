import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Copy,
  Check,
  ExternalLink,
  Send,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [recruiterName, setRecruiterName] = useState("");
  const [recruiterOrg, setRecruiterOrg] = useState("");
  const [recruiterSubject, setRecruiterSubject] = useState("");
  const [recruiterMsg, setRecruiterMsg] = useState("");

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleComposeEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectLine = encodeURIComponent(
      recruiterSubject.trim() ||
        `Opportunity Inquiry from ${recruiterOrg.trim() || "Recruiter"}`
    );
    const bodyText = encodeURIComponent(
      `Hi Ashwin,\n\n${recruiterMsg.trim() || "We came across your portfolio and would like to connect regarding an opportunity."}\n\nBest regards,\n${recruiterName.trim() || "Hiring Team"}${recruiterOrg.trim() ? `\n${recruiterOrg.trim()}` : ""}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subjectLine}&body=${bodyText}`;
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Contact
          </h2>
          <div className="h-1 w-12 bg-blue-500 rounded-full mt-3 mb-3" />
          <p className="text-sm text-slate-400">
            Open for entry-level engineering roles, campus recruitment, and technical internships
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Direct Channels Column */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Ashwin K K Card */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7">
              <div className="text-xs font-mono text-slate-400 mb-1">
                Candidate Profile
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">
                {PERSONAL_INFO.name}
              </h3>
              <p className="text-sm text-blue-400 font-medium mb-6">
                {PERSONAL_INFO.title}
              </p>

              <div className="space-y-4">
                {/* Email Channel */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-slate-400">
                        Email Address
                      </div>
                      <a
                        href={PERSONAL_INFO.emailLink}
                        className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={() =>
                        copyToClipboard(PERSONAL_INFO.email, "email")
                      }
                      className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                      title="Copy email address"
                    >
                      {copiedField === "email" ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <a
                      href={PERSONAL_INFO.emailLink}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Email Me
                    </a>
                  </div>
                </div>

                {/* Phone Channel */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-emerald-600/10 text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-slate-400">
                        Mobile Phone
                      </div>
                      <a
                        href={PERSONAL_INFO.phoneLink}
                        className="text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors truncate block font-mono"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                    <button
                      onClick={() =>
                        copyToClipboard(PERSONAL_INFO.phone, "phone")
                      }
                      className="p-2 text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                      title="Copy phone number"
                    >
                      {copiedField === "phone" ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                    <a
                      href={PERSONAL_INFO.phoneLink}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-sm transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Call Me
                    </a>
                  </div>
                </div>

                {/* LinkedIn Channel */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-blue-600/10 text-blue-400 shrink-0">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-slate-400">
                        Professional Network
                      </div>
                      <div className="text-sm font-semibold text-slate-200 truncate">
                        {PERSONAL_INFO.linkedin}
                      </div>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer shrink-0 whitespace-nowrap"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* GitHub Channel */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-slate-800 text-slate-300 shrink-0">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[11px] font-mono text-slate-400">
                        Code Repository
                      </div>
                      <div className="text-sm font-semibold text-slate-200 truncate">
                        {PERSONAL_INFO.github}
                      </div>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer shrink-0 whitespace-nowrap"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Message Form Column */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-2">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Direct Recruiter Inquiry</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mb-6">
                  Pre-populates an email directly to Ashwin K K with your details.
                </p>

                <form onSubmit={handleComposeEmail} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={recruiterName}
                        onChange={(e) => setRecruiterName(e.target.value)}
                        placeholder="e.g. Talent Acquisition"
                        className="w-full px-3 py-2 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        value={recruiterOrg}
                        onChange={(e) => setRecruiterOrg(e.target.value)}
                        placeholder="e.g. Technology Corp"
                        className="w-full px-3 py-2 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={recruiterSubject}
                      onChange={(e) => setRecruiterSubject(e.target.value)}
                      placeholder="e.g. Internship Opportunity / Placement Drive"
                      className="w-full px-3 py-2 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      value={recruiterMsg}
                      onChange={(e) => setRecruiterMsg(e.target.value)}
                      placeholder="Write your note, job opportunity details, or interview invitation..."
                      className="w-full px-3 py-2 text-sm rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Open in Email Client to Send</span>
                  </button>
                </form>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
                Direct recipient: {PERSONAL_INFO.email}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
