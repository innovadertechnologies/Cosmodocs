"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const DESKTOP_WIDTH = 1280;

export default function Hero() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function update() {
      setScale(Math.min(1, window.innerWidth / DESKTOP_WIDTH));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="relative overflow-hidden" id="hero">

      {/* ── MOBILE LAYOUT (visible only below md) ── */}
      <div className="flex flex-col md:hidden pt-28 pb-10 px-5 gap-6">

        {/* Heading */}
        <h1 className="text-3xl font-serif font-bold text-white leading-[1.15] animate-fadeInUp drop-shadow-2xl">
          Best Dental Clinic in Gurgaon
          <br />
          <span className="text-lemon-green text-xl italic">Painless Dental Care Near You</span>
        </h1>

        {/* Hero image */}
        <div className="relative w-full h-48 rounded-2xl overflow-hidden animate-fadeInUp">
          <Image
            src="/hero-bg.png"
            alt="Premium Dental Care"
            width={600}
            height={480}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-medical-blue/40 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/60" />
        </div>

        {/* Subheading */}
        <p className="text-base text-white/90 font-medium leading-relaxed animate-fadeInUp">
          Get advanced dental treatment from expert dentists at Cosmodocs.
        </p>

        {/* Bullet Points */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-4 animate-fadeInUp">
          {[
            "Dental Implants",
            "Root Canal (RCT)",
            "Crowns & Veneers",
            "Braces & Aligners",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-lemon-green flex items-center justify-center flex-shrink-0">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-white/90 font-semibold text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="bg-lemon-green text-medical-blue px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-2xl shadow-lemon-green/30 active:scale-95 transition-all flex items-center justify-center gap-2 animate-fadeInUp"
        >
          Book Your Appointment
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Stats - glass card grid like desktop */}
        <div className="grid grid-cols-4 gap-2 animate-fadeInUp">
          {[
            { val: "500+", lab: "Patients" },
            { val: "4.7★", lab: "Rated" },
            { val: "High", lab: "Success" },
            { val: "Expert", lab: "Dentists" },
          ].map((s) => (
            <div key={s.lab} className="glass-card p-2 rounded-lg border border-white/10 flex flex-col items-center text-center justify-center min-h-[52px]">
              <div className="text-xs font-serif font-bold text-lemon-green leading-tight">{s.val}</div>
              <div className="text-[8px] uppercase tracking-wide text-white/50 font-bold leading-tight mt-0.5">{s.lab}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── DESKTOP LAYOUT (hidden on mobile, unchanged) ── */}
      <div className="hidden md:block pt-12">
        <div
          style={{
            width: `${DESKTOP_WIDTH}px`,
            zoom: scale,
            margin: "0 auto",
          }}
          className="min-h-screen flex items-center px-10 relative z-10 pb-12"
        >
          <div className="grid grid-cols-[44%_56%] gap-16 items-center w-full">
            {/* Left Column: Content */}
            <div className="flex flex-col items-start text-left">

              {/* Heading */}
              <h1 className="text-5xl font-serif font-bold text-white leading-[1.1] mb-6 animate-fadeInUp delay-100 drop-shadow-2xl">
                Best Dental Clinic in Gurgaon  <br />
                <span className="text-lemon-green text-2xl italic">Painless Dental Care Near You</span>
              </h1>

              {/* Subheading */}
              <p className="text-xl text-white font-medium leading-relaxed max-w-xl mb-8 animate-fadeInUp delay-200">
                Get advanced dental treatment from expert dentists at Cosmodocs.
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-2 gap-y-3 gap-x-8 mb-10 animate-fadeInUp delay-300">
                {[
                  "Dental Implants",
                  "Root Canal Treatment (RCT)",
                  "Crowns and Veeners",
                  "Braces & Aligners",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 group">
                    <div className="w-5 h-5 rounded-full bg-lemon-green flex items-center justify-center flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-white/90 font-semibold text-base">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-6 animate-fadeInUp delay-400">
                <a
                  href="#contact"
                  className="bg-lemon-green text-medical-blue px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl shadow-lemon-green/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                >
                  Book Your Appointment Now
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <div className="flex items-center gap-4">
                  <a
                    href="tel:9958389360"
                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-white hover:text-medical-blue transition-all shadow-lg"
                    aria-label="Call Us"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/919958389360"
                    target="_blank"
                    className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white hover:scale-110 transition-all shadow-lg shadow-green-500/20"
                    aria-label="WhatsApp Us"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Stats Summary - Compact Glass Cards */}
              <div className="mt-10 grid grid-cols-4 gap-2 animate-fadeInUp delay-400 w-full max-w-3xl">
                {[
                  { val: "500+", lab: "Happy Patients" },
                  { val: "4.7★", lab: "Rated Clinic" },
                  { val: "High Success", lab: "Implants & RCT" },
                  { val: "Experienced", lab: "Trusted Dentists" },
                ].map((s) => (
                  <div key={s.lab} className="glass-card p-2 rounded-lg border border-white/10 hover:bg-white/10 transition-all group flex flex-col items-center text-center justify-center min-h-[60px]">
                    <div className="text-sm font-serif font-bold text-lemon-green">{s.val}</div>
                    <div className="text-[8px] uppercase tracking-wider text-white/50 font-bold leading-tight">{s.lab}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[480px] animate-fadeInUp delay-200 rounded-xl overflow-hidden ml-auto w-full">

              <Image
                src="/hero-bg.png"
                alt="Premium Dental Care"
                width={600}
                height={480}
                className="w-full h-full object-cover"
                priority
              />

              {/* subtle overlays */}
              <div className="absolute inset-0 bg-gradient-to-tr from-medical-blue/40 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/60" />

            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
