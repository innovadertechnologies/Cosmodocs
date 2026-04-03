"use client";

import { useState, useRef, useCallback } from "react";

const comparisons = [
  {
    title: "Dental Veneers",
    subtitle: "Smile Transformation",
    beforeImage: "", // User will add image path
    afterImage: "",  // User will add image path
  },
  {
    title: "Teeth Whitening",
    subtitle: "Instant Brightness",
    beforeImage: "",
    afterImage: "",
  },
  {
    title: "Full Mouth Rehabilitation",
    subtitle: "Complete Restoration",
    beforeImage: "",
    afterImage: "",
  },
];

function ComparisonCard({
  title,
  subtitle,
  beforeImage,
  afterImage,
}: {
  title: string;
  subtitle: string;
  beforeImage: string;
  afterImage: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
    document.body.style.userSelect = "none";
  };

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    document.body.style.userSelect = "";
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => handleMove(e.clientX),
    [handleMove]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => handleMove(e.touches[0].clientX),
    [handleMove]
  );

  // Placeholder backgrounds when no image is set
  const beforeBg = beforeImage
    ? `url(${beforeImage})`
    : "linear-gradient(135deg, #374151 0%, #1f2937 100%)";
  const afterBg = afterImage
    ? `url(${afterImage})`
    : "linear-gradient(135deg, #1e3a5f 0%, #0f766e 100%)";

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative w-full h-[340px] rounded-2xl overflow-hidden cursor-col-resize shadow-[0_8px_30px_rgba(0,0,0,0.2)] group-hover:shadow-[0_16px_50px_rgba(0,0,0,0.3)] transition-shadow duration-500 border border-white/10"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full Background) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: afterBg }}
        >
          {/* Placeholder text when no image */}
          {!afterImage && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 text-sm font-medium">After image placeholder</span>
            </div>
          )}
        </div>

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: beforeBg,
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          }}
        >
          {/* Placeholder text when no image */}
          {!beforeImage && (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/20 text-sm font-medium">Before image placeholder</span>
            </div>
          )}
        </div>

        {/* Slider Line & Handle */}
        <div
          className="absolute top-0 bottom-0 z-20"
          style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
        >
          {/* Vertical Line */}
          <div className="w-[2px] h-full bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />

          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" strokeWidth="2.5" strokeLinecap="round">
              <path d="M8 4l-6 8 6 8" />
              <path d="M16 4l6 8-6 8" />
            </svg>
          </div>
        </div>

        {/* Before Badge */}
        <div
          className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-opacity duration-300"
          style={{
            background: "rgba(0,0,0,0.5)",
            backdropFilter: "blur(8px)",
            color: "rgba(255,255,255,0.9)",
            opacity: sliderPos > 15 ? 1 : 0,
          }}
        >
          Before
        </div>

        {/* After Badge */}
        <div
          className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-opacity duration-300"
          style={{
            background: "rgba(30,58,95,0.6)",
            backdropFilter: "blur(8px)",
            color: "#D4E157",
            opacity: sliderPos < 85 ? 1 : 0,
          }}
        >
          After
        </div>

        {/* Bottom gradient for readability */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Card Footer */}
      <div className="mt-5 text-center">
        <h3 className="text-xl font-serif font-bold text-medical-blue">{title}</h3>
        <p className="text-xs uppercase tracking-[0.2em] text-medical-blue/50 font-bold mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <div className="mt-12 animate-fadeInUp">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        {/* <div className="inline-flex items-center gap-2 bg-medical-blue/5 border border-medical-blue/10 px-4 py-2 rounded-full mb-5">
          <span className="text-base">✨</span>
          <span className="text-medical-blue text-[10px] font-bold tracking-[0.2em] uppercase">
            Real Results
          </span>
        </div> */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-medical-blue leading-tight mb-4">
          See the Transformation
        </h2>
        <p className="text-medical-blue/60 text-base md:text-lg">
          Drag the slider to reveal stunning before &amp; after results from our patients.
        </p>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {comparisons.map((item) => (
          <ComparisonCard
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            beforeImage={item.beforeImage}
            afterImage={item.afterImage}
          />
        ))}
      </div>
    </div>
  );
}
