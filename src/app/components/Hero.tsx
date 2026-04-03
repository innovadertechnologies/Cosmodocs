import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden" id="hero">
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start text-left">
            {/* Badge */}
            {/* <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-8 animate-fadeInUp shadow-xl">
              <span className="text-xl">🦷</span>
              <span className="text-lemon-green text-xs font-bold tracking-[0.2em] uppercase">
                Premium Dental Care
              </span> */}
            {/* </div> */}

            {/* Heading */}
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-[1.1] mb-6 animate-fadeInUp delay-100 drop-shadow-2xl">
              Best Dental Clinic in Gurgaon  <br />
              <span className="text-lemon-green text-2xl italic">Painless Dental Care Near You</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white font-medium leading-relaxed max-w-xl mb-8 animate-fadeInUp delay-200">
              Get advanced dental treatment from expert dentists at Cosmodocs.
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-10 animate-fadeInUp delay-300">
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
                  <span className="text-white/90 font-semibold text-sm md:text-base">{item}</span>
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
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-2 animate-fadeInUp delay-400 w-full lg:max-w-3xl">
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

          {/* Right Column: Image with Overlay */}
          <div className="relative h-[420px] lg:h-[480px] animate-fadeInUp delay-200">

            <Image
              src="/hero-bg.png"
              alt="Premium Dental Care"
              fill
              className="object-cover rounded-xl"
              priority
            />

            {/* subtle overlays */}
            <div className="absolute inset-0 bg-gradient-to-tr from-medical-blue/40 via-transparent to-transparent rounded-xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark/60 rounded-xl" />

          </div>
        </div>
      </div>
    </section >
  );
}
