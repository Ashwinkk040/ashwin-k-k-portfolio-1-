/**
 * Utilities for optimizing and saving profile images with zero quota errors.
 */

const STORAGE_KEY = "ashwin_portfolio_custom_photo";
const META_KEY = "ashwin_portfolio_photo_meta";
const DB_NAME = "ashwin_portfolio_db";
const STORE_NAME = "profile_images";

// Initialize IndexedDB
function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === "undefined" || !window.indexedDB) {
      reject(new Error("IndexedDB not supported"));
      return;
    }
    const request = window.indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

export async function saveImageToIndexedDB(key: string, dataUrl: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(dataUrl, key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch (err) {
    console.warn("IndexedDB save fallback:", err);
  }
}

export async function getImageFromIndexedDB(key: string): Promise<string | null> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readonly");
      const store = tx.objectStore(STORE_NAME);
      const req = store.get(key);
      req.onsuccess = () => resolve((req.result as string) || null);
      req.onerror = () => reject(req.error);
    });
  } catch {
    return null;
  }
}

export async function clearImageFromIndexedDB(key: string): Promise<void> {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, "readwrite");
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(key);
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  } catch {
    // ignore
  }
}

/**
 * Resizes and center-crops an uploaded image to a clean 600x600 square JPEG.
 * Reduces 5MB-10MB mobile camera photos to ~60KB so they fit permanently into
 * browser storage with zero QuotaExceeded errors.
 */
export function optimizeImage(file: File, maxSize = 600, quality = 0.85): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Failed to read image file"));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("Failed to decode image"));
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = maxSize;
        canvas.height = maxSize;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          resolve(reader.result as string);
          return;
        }

        // Center-crop calculation (square 1:1)
        const srcW = img.width;
        const srcH = img.height;
        const minDim = Math.min(srcW, srcH);
        const srcX = (srcW - minDim) / 2;
        const srcY = (srcH - minDim) / 2;

        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, srcX, srcY, minDim, minDim, 0, 0, maxSize, maxSize);

        const optimizedBase64 = canvas.toDataURL("image/jpeg", quality);
        resolve(optimizedBase64);
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

export { STORAGE_KEY, META_KEY };
