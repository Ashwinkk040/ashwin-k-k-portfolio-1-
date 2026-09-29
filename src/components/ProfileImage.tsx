import React, { useRef, useState } from "react";
import {
  Camera,
  RotateCcw,
  User,
  CheckCircle2,
  Upload,
  Download,
  X,
  Sparkles,
} from "lucide-react";
import { useProfileImage } from "../hooks/useProfileImage";

interface ProfileImageProps {
  size?: "lg" | "md" | "sm";
  className?: string;
  showUploadBadge?: boolean;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  size = "lg",
  className = "",
  showUploadBadge = true,
}) => {
  const {
    imageUrl,
    isCustom,
    isSaving,
    savedNotification,
    meta,
    handleUpload,
    resetToDefault,
  } = useProfileImage();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const sizeClasses = {
    lg: "w-44 h-44 sm:w-56 sm:h-56",
    md: "w-28 h-28 sm:w-36 sm:h-36",
    sm: "w-10 h-10",
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleUpload(file);
      setHasError(false);
    }
  };

  const downloadImage = () => {
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = "ashwin-portfolio-photo.jpg";
    a.click();
  };

  return (
    <>
      <div className={`relative group inline-block select-none ${className}`}>
        {/* Outer ambient glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300" />

        {/* Image Container */}
        <div
          onClick={() => showUploadBadge && setModalOpen(true)}
          className={`relative ${sizeClasses[size]} rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-700/80 group-hover:border-blue-500/60 shadow-xl transition-all ${
            showUploadBadge ? "cursor-pointer" : ""
          }`}
          title={showUploadBadge ? "Click to manage or save portfolio photo" : undefined}
        >
          {!hasError ? (
            <img
              src={imageUrl}
              alt="Ashwin K K - Computer Science Engineering Student"
              referrerPolicy="no-referrer"
              onError={() => setHasError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 text-slate-400 p-4">
              <User className="w-10 h-10 text-slate-500 mb-1" />
              <span className="text-[11px] font-mono text-center">Ashwin K K</span>
            </div>
          )}

          {/* Persistent Saved Badge on Image */}
          <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-sm pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{isCustom ? "Saved in Portfolio" : "Active"}</span>
          </div>

          {/* Hover overlay hint */}
          {showUploadBadge && size !== "sm" && (
            <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 text-white text-xs font-medium">
              <Camera className="w-4 h-4 text-blue-400" />
              <span>Change Photo</span>
            </div>
          )}
        </div>

        {/* Direct quick action buttons */}
        {showUploadBadge && (
          <div className="absolute top-2 right-2 flex items-center gap-1 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
              className="p-1.5 rounded-lg bg-slate-950/90 hover:bg-blue-600 text-slate-300 hover:text-white border border-slate-800 hover:border-blue-500 shadow-md transition-colors cursor-pointer"
              title="Upload / Update photo"
              aria-label="Upload photo"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>

            {isCustom && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  resetToDefault();
                }}
                className="p-1.5 rounded-lg bg-slate-950/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 shadow-md transition-colors cursor-pointer"
                title="Reset to default photo"
                aria-label="Reset to default photo"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              aria-hidden="true"
            />
          </div>
        )}

        {/* Real-time saving status toast notification */}
        {savedNotification && (
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 px-3 py-1 rounded-full text-xs font-mono shadow-lg animate-in fade-in slide-in-from-top-1 z-30 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>{savedNotification}</span>
          </div>
        )}
      </div>

      {/* Photo Management Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-5">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Camera className="w-4 h-4 text-blue-400" />
                  <span>Portfolio Photo Manager</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Update and permanently save your photo in your portfolio
                </p>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Photo Preview */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-xl mb-3">
                <img
                  src={imageUrl}
                  alt="Ashwin K K"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-2 left-2 px-2.5 py-1 rounded-full bg-slate-950/90 border border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Saved in Portfolio</span>
                </div>
              </div>

              {meta.savedAt && (
                <div className="text-[11px] font-mono text-slate-400">
                  Last saved: {meta.savedAt}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => fileInputRef.current?.click()}
                disabled={isSaving}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-md transition-colors cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>{isSaving ? "Saving..." : "Upload & Save New Photo"}</span>
              </button>

              <button
                onClick={downloadImage}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/80 rounded-xl transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Saved Photo</span>
              </button>

              {isCustom && (
                <button
                  onClick={() => {
                    resetToDefault();
                    setModalOpen(false);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-slate-400 hover:text-rose-300 hover:bg-rose-950/20 rounded-xl transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset to Default Photo</span>
                </button>
              )}
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 text-center">
              Your photo persists automatically across page reloads & visits
            </div>
          </div>
        </div>
      )}
    </>
  );
};
