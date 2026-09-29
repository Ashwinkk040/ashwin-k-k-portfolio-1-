import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { ProfileImage } from "./ProfileImage";
import {
  ArrowDown,
  Linkedin,
  Github,
  Mail,
  ExternalLink,
  Copy,
  Check,
  Terminal,
  Code2,
  Database,
  MapPin,
  GraduationCap,
} from "lucide-react";

export const Hero: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<"java" | "sql">("java");
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const javaCode = `// Product Management System · CRUD Module
public class ProductService {
    private Connection conn;

    public void addProduct(Product product) throws SQLException {
        String sql = "INSERT INTO products (name, category, price, stock) "
                   + "VALUES (?, ?, ?, ?)";
        try (PreparedStatement stmt = conn.prepareStatement(sql)) {
            stmt.setString(1, product.getName());
            stmt.setString(2, product.getCategory());
            stmt.setDouble(3, product.getPrice());
            stmt.setInt(4, product.getStock());
            stmt.executeUpdate();
        }
    }
}`;

  const sqlCode = `-- Smart Tourism Management System · Relational Schema
CREATE TABLE destinations (
    destination_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    state VARCHAR(50) NOT NULL,
    description TEXT
);

CREATE TABLE bookings (
    booking_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    destination_id INT NOT NULL,
    booking_date DATE NOT NULL,
    FOREIGN KEY (destination_id) REFERENCES destinations(destination_id)
);`;

  const handleCopyCode = () => {
    const textToCopy = activeCodeTab === "java" ? javaCode : sqlCode;
    navigator.clipboard.writeText(textToCopy);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Subtle background gradient & circuit-inspired grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute -bottom-10 right-1/4 w-[400px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Subtle editorial status */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900/90 border border-slate-800 rounded-full text-xs font-mono text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Seeking Entry-Level / Internship Opportunities</span>
            </div>

            {/* Profile Avatar & Title Lockup on Mobile/Desktop */}
            <div className="flex items-center gap-4 mb-4 lg:hidden">
              <ProfileImage size="sm" showUploadBadge={false} />
              <div>
                <div className="text-xs font-mono text-blue-400">Ashwin K K</div>
                <div className="text-xs text-slate-400">Alva’s AIET · Moodbidri</div>
              </div>
            </div>

            {/* Display Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
              {PERSONAL_INFO.name}
            </h1>

            {/* Role Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-400 tracking-tight mb-5">
              {PERSONAL_INFO.title}
            </h2>

            {/* Short Supporting Statement strictly based on career objective */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.heroSupportingStatement}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto mb-8">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 ml-2" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-150 focus-visible:outline-2 focus-visible:outline-blue-500 cursor-pointer"
              >
                <span>Contact Me</span>
                <Mail className="w-4 h-4 ml-2 text-slate-400" />
              </a>
            </div>

            {/* Secondary Links: LinkedIn & GitHub with exact usernames */}
            <div className="pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-6 text-sm text-slate-400">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors group focus-visible:outline-2 focus-visible:outline-blue-500 rounded-sm"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-blue-500/50 transition-colors">
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="text-slate-400 font-mono">LinkedIn</span>
                  <span className="font-semibold text-slate-200 group-hover:text-blue-300 flex items-center gap-1">
                    {PERSONAL_INFO.linkedin}
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </span>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors group focus-visible:outline-2 focus-visible:outline-blue-500 rounded-sm"
              >
                <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-slate-600 transition-colors">
                  <Github className="w-4 h-4 text-slate-300" />
                </div>
                <div className="flex flex-col text-xs">
                  <span className="text-slate-400 font-mono">GitHub</span>
                  <span className="font-semibold text-slate-200 group-hover:text-white flex items-center gap-1">
                    {PERSONAL_INFO.github}
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Profile Image & Developer Workspace Card */}
          <div className="lg:col-span-5 w-full flex flex-col gap-6">
            {/* Profile Photo Card */}
            <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 backdrop-blur-sm flex flex-col sm:flex-row items-center gap-5 shadow-xl">
              <ProfileImage size="md" showUploadBadge={true} />
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="text-xs font-mono text-blue-400 mb-1 flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>CSE Student</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs text-slate-300 mb-2">
                  Alva’s Institute Of Engineering Technology
                </p>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <MapPin className="w-3 h-3 text-slate-400" />
                  <span>Moodbidri, India</span>
                </div>
                <div className="text-[10px] font-mono text-slate-500 mt-2">
                  Hover to upload custom photo
                </div>
              </div>
            </div>

            {/* Developer Workspace Terminal */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-sm">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950/80 border-b border-slate-800/90">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>project-code-viewer</span>
                  </span>
                </div>

                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono text-slate-400 hover:text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded transition-colors"
                  title="Copy code snippet"
                >
                  {copiedSnippet ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Tabs */}
              <div className="flex border-b border-slate-800 bg-slate-950/50 px-2 pt-1 gap-1">
                <button
                  onClick={() => setActiveCodeTab("java")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-colors rounded-t-lg ${
                    activeCodeTab === "java"
                      ? "bg-slate-900 text-blue-400 border-t-2 border-blue-500 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>ProductService.java</span>
                </button>
                <button
                  onClick={() => setActiveCodeTab("sql")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono transition-colors rounded-t-lg ${
                    activeCodeTab === "sql"
                      ? "bg-slate-900 text-blue-400 border-t-2 border-blue-500 font-semibold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Database className="w-3.5 h-3.5" />
                  <span>TourismSchema.sql</span>
                </button>
              </div>

              {/* Code Body */}
              <div className="p-3.5 bg-slate-950/90 overflow-x-auto text-[11px] font-mono leading-relaxed text-slate-300 max-h-48">
                <pre className="whitespace-pre">
                  <code>{activeCodeTab === "java" ? javaCode : sqlCode}</code>
                </pre>
              </div>

              {/* Bottom System Architecture Visual Spec */}
              <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Stack:</span>
                  <span className="text-slate-200">Java · JDBC · MySQL</span>
                </div>
                <div className="text-blue-400">Verified Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
