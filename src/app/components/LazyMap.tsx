"use client";

import { useState } from "react";

/**
 * LazyMap — Client island for Google Maps.
 * Shows a click-to-load placeholder instead of loading the Google Maps
 * iframe immediately, eliminating a heavy third-party request from the
 * critical path. The iframe only loads when the user explicitly clicks.
 */
export default function LazyMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 relative" style={{ height: 180 }}>
      {!loaded ? (
        <button
          onClick={() => setLoaded(true)}
          className="absolute inset-0 w-full bg-white/5 hover:bg-white/10 transition-colors flex flex-col items-center justify-center gap-2 cursor-pointer group"
          aria-label="Load map"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-lemon-green group-hover:scale-110 transition-transform">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <span className="text-white/70 text-xs font-semibold tracking-wide">Tap to view our location</span>
          <span className="text-white/30 text-[10px]">Unit 111, Spaze Corporate Park, Sector 69</span>
        </button>
      ) : (
        <iframe
          src="https://www.google.com/maps?q=Cosmodocs+Dental+Clinic+Gurgaon&output=embed"
          width="100%"
          height="180"
          style={{ border: 0 }}
          loading="lazy"
          title="Cosmodocs Dental Clinic Location"
          allowFullScreen
        />
      )}
    </div>
  );
}
