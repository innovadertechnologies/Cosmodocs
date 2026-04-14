"use client";

import { useState, useEffect, useRef } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Ankita Gupta",
    role: "Senior Dental Surgeon",
    specialties: [
      "Implants, RCT & Smile Makeover",
      "Painless treatment",
      "Personalized care"
    ]
  },
  {
    id: 2,
    name: "Dr. Lokesh Yadav",
    role: "Maxillofacial Surgeon",
    specialties: [
      "Facial surgery expert",
      "Wisdom tooth & jaw treatments"
    ]
  },
  {
    id: 3,
    name: "Dr. Ravi Yadav",
    role: "Prosthodontist & Implantologist",
    specialties: [
      "Dental implants specialist",
      "Full mouth rehabilitation"
    ]
  },
  {
    id: 4,
    name: "Dr. Amit Dahiya",
    role: "Orthodontist",
    specialties: [
      "Braces & alignment expert",
      "Smile correction"
    ]
  },
  {
    id: 5,
    name: "Dr. Megha Chalana",
    role: "Endodontist",
    specialties: [
      "Root canal specialist",
      "Pain-free RCT"
    ]
  },
  {
    id: 6,
    name: "Dr. Pinky Galawat",
    role: "Dental Surgeon",
    specialties: [
      "General dentistry",
      "Preventive care"
    ]
  },
  {
    id: 7,
    name: "Dr. Pooja",
    role: "Pedodontist",
    specialties: [
      "Kids dental specialist",
      "Gentle child care"
    ]
  }
];

export default function Doctor() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? doctors.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 2000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsHovered(true); // Pause sliding while touching
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section
      id="doctor"
      className="py-16 md:py-24 relative overflow-hidden flex flex-col items-center justify-center font-sans z-0"
    >
      {/* Decorative Glows for Glassmorphism */}
      <div className="absolute top-0 right-0 w-full md:w-[600px] h-[600px] bg-medical-blue/5 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-full md:w-[600px] h-[600px] bg-lemon-green/10 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="w-full max-w-4xl px-4 sm:px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-medical-blue mb-10">
          Team of Specialists for Every Dental Need
        </h2>

        {/* Carousel Container formatted like FamilyCard */}
        <div
          className="relative overflow-hidden bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-[0_8px_32px_rgba(30,58,95,0.05)]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slides Wrapper */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {doctors.map((doc) => (
              <div
                key={doc.id}
                className="w-full flex-shrink-0 bg-transparent p-8 md:p-12 pb-16 flex flex-col justify-center items-center text-center transition-transform hover:scale-[1.01] duration-300 min-h-[350px]"
              >
                <div className="w-20 h-20 bg-medical-blue/5 border border-medical-blue/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-serif font-bold uppercase tracking-widest text-medical-blue">
                    {doc.name.replace("Dr. ", "").split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-medical-blue mb-2">
                  {doc.name}
                </h3>
                <p className="text-medical-blue/70 uppercase tracking-widest text-sm font-bold mb-8">
                  {doc.role}
                </p>

                <div className="flex w-full justify-center">
                  <ul className="space-y-3 sm:space-y-4 inline-block text-left">
                    {doc.specialties.map((item, i) => (
                      <li key={i} className="flex items-start justify-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-lemon-green shrink-0 mt-1.5 md:mt-2" />
                        <span className="text-medical-blue/90 text-sm md:text-lg font-medium leading-snug max-w-[260px] sm:max-w-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/60 hover:bg-white backdrop-blur-md border border-white rounded-full flex items-center justify-center text-medical-blue shadow-sm transition-colors z-10"
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/60 hover:bg-white backdrop-blur-md border border-white rounded-full flex items-center justify-center text-medical-blue shadow-sm transition-colors z-10"
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
            {doctors.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full h-2.5 ${idx === currentIndex ? "w-8 bg-medical-blue" : "w-2.5 bg-medical-blue/20 hover:bg-medical-blue/40"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
