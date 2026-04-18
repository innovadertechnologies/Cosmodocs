"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const REDIRECT_DELAY = 5;

export default function ThankYouPage() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(REDIRECT_DELAY);

  useEffect(() => {
    // Trigger entrance animation after mount
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    // Countdown tick every second
    if (countdown <= 0) {
      router.push("/");
      return;
    }
    const tick = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(tick);
  }, [countdown, router]);

  return (
    <main className="min-h-screen bg-medical-blue flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-lemon-green/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-lemon-green/5 blur-[120px] pointer-events-none" />

      {/* Animated top bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lemon-green/60 to-transparent" />

      <div
        className="relative z-10 text-center max-w-lg mx-auto transition-all duration-700"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
        }}
      >
        {/* Checkmark icon */}
        <div className="flex items-center justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-lemon-green/10 border border-lemon-green/30 flex items-center justify-center shadow-2xl shadow-lemon-green/10">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-lemon-green"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
          Thank You!
        </h1>
        <p className="text-white/60 text-base sm:text-lg leading-relaxed mb-2">
          Your consultation request has been received.
        </p>
        <p className="text-white/40 text-sm sm:text-base leading-relaxed mb-6">
          The Cosmodocs team will reach out to you shortly.
        </p>

        {/* Countdown bar */}
        <div className="mb-10">
          <p className="text-white/30 text-xs mb-2 tracking-widest uppercase">
            Redirecting to home in{" "}
            <span className="text-lemon-green font-bold">{countdown}s</span>
          </p>
          <div className="w-48 mx-auto h-0.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-lemon-green/60 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${(countdown / REDIRECT_DELAY) * 100}%` }}
            />
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-lemon-green text-medical-blue px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl shadow-lemon-green/20 hover:scale-[1.03] active:scale-95 transition-all"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Back to Home
          </Link>
          <a
            href="https://wa.me/919958389360?text=Hi%20Cosmodocs%2C%20I%20just%20submitted%20a%20consultation%20request"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-[#25D366]/20 active:scale-95 transition-all"
          >
            <span className="text-lg">💬</span>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
