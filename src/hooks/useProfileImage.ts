import { useState, useEffect, useCallback } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import {
  optimizeImage,
  saveImageToIndexedDB,
  getImageFromIndexedDB,
  clearImageFromIndexedDB,
  STORAGE_KEY,
  META_KEY,
} from "../utils/imageStorage";

export interface PhotoMeta {
  savedAt: string;
  fileName?: string;
  source: "custom" | "default";
}

export function useProfileImage() {
  const [imageUrl, setImageUrl] = useState<string>(PERSONAL_INFO.profileImage);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [savedNotification, setSavedNotification] = useState<string | null>(null);
  const [meta, setMeta] = useState<PhotoMeta>({
    savedAt: "",
    source: "default",
  });

  // Load from IndexedDB and localStorage on initial mount
  const loadStoredImage = useCallback(async () => {
    try {
      // 1. Check IndexedDB first (most reliable for binary data)
      const idbImage = await getImageFromIndexedDB(STORAGE_KEY);
      if (idbImage) {
        setImageUrl(idbImage);
        setIsCustom(true);
        const metaStr = localStorage.getItem(META_KEY);
        if (metaStr) {
          try {
            setMeta(JSON.parse(metaStr));
          } catch {
            // ignore
          }
        }
        return;
      }

      // 2. Fallback to localStorage
      const localImage = localStorage.getItem(STORAGE_KEY);
      if (localImage) {
        setImageUrl(localImage);
        setIsCustom(true);
        // Sync to IndexedDB for safety
        saveImageToIndexedDB(STORAGE_KEY, localImage);
        const metaStr = localStorage.getItem(META_KEY);
        if (metaStr) {
          try {
            setMeta(JSON.parse(metaStr));
          } catch {
            // ignore
          }
        }
      }
    } catch (err) {
      console.warn("Failed to load stored profile photo:", err);
    }
  }, []);

  useEffect(() => {
    loadStoredImage();

    // Listen to custom cross-component update events
    const handleUpdate = () => {
      loadStoredImage();
    };

    window.addEventListener("ashwin_photo_updated", handleUpdate);
    return () => window.removeEventListener("ashwin_photo_updated", handleUpdate);
  }, [loadStoredImage]);

  // Handle uploading and permanently saving new image file
  const handleUpload = async (file: File) => {
    setIsSaving(true);
    try {
      // 1. Optimize image (resizes to crisp 600x600, square crop, ~60KB JPEG)
      const optimizedDataUrl = await optimizeImage(file, 600, 0.88);

      // 2. Persist in IndexedDB
      await saveImageToIndexedDB(STORAGE_KEY, optimizedDataUrl);

      // 3. Persist in localStorage
      try {
        localStorage.setItem(STORAGE_KEY, optimizedDataUrl);
      } catch (err) {
        console.warn("localStorage write skipped:", err);
      }

      // 4. Update metadata
      const newMeta: PhotoMeta = {
        savedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        fileName: file.name,
        source: "custom",
      };
      try {
        localStorage.setItem(META_KEY, JSON.stringify(newMeta));
      } catch {
        // ignore
      }

      // 5. Update state
      setImageUrl(optimizedDataUrl);
      setIsCustom(true);
      setMeta(newMeta);
      setSavedNotification("Image successfully saved to portfolio!");

      // 6. Broadcast to all other components
      window.dispatchEvent(new Event("ashwin_photo_updated"));

      setTimeout(() => {
        setSavedNotification(null);
      }, 3500);
    } catch (err) {
      console.error("Failed to process profile image:", err);
      alert("Failed to process image. Please try a different photo.");
    } finally {
      setIsSaving(false);
    }
  };

  // Reset to default resume portfolio portrait
  const resetToDefault = async () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(META_KEY);
      await clearImageFromIndexedDB(STORAGE_KEY);
    } catch {
      // ignore
    }

    setImageUrl(PERSONAL_INFO.profileImage);
    setIsCustom(false);
    setMeta({ savedAt: "", source: "default" });
    setSavedNotification("Reset to default profile portrait.");

    window.dispatchEvent(new Event("ashwin_photo_updated"));

    setTimeout(() => {
      setSavedNotification(null);
    }, 2500);
  };

  return {
    imageUrl,
    isCustom,
    isSaving,
    savedNotification,
    meta,
    handleUpload,
    resetToDefault,
  };
}
