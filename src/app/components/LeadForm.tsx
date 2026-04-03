"use client";
import { useState } from "react";

const treatments = [
  "Dental Implants",
  "Root Canal Treatment (RCT)",
  "Teeth Whitening",
  "Braces & Aligners",
  "Smile Makeover",
  "Veneers",
  "Crowns & Bridges",
  "Kids Dentistry",
  "General Consultation",
];

const timeSlots = [
  "Morning (9am – 12pm)",
  "Afternoon (12pm – 3pm)",
  "Evening (5pm – 8pm)",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="pt-6 pb-6 sm:pt-8 sm:pb-16 md:pb-20 lg:pb-24 relative" id="contact">
      <div className="w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20
                      flex flex-col lg:flex-row gap-10 md:gap-14 lg:gap-20 items-center relative z-10">
        {/* Left: Info */}
        <div className="w-full lg:w-1/2 animate-fadeInUp text-center lg:text-left">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-medical-blue mb-4 sm:mb-6 md:mb-8 leading-tight">
            Get Expert Dental Consultation Today!
          </h2>
          <span className="text-base sm:text-lg font-normal text-medical-blue/60 max-w-md flex flex-col items-center lg:items-start mx-auto lg:mx-0">
            Don't ignore your dental problems. <br />
            Early treatment saves pain and money.
          </span>

          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 pt-8 sm:pt-10 md:pt-14 animate-fadeInUp delay-500">
            <a
              href="tel:9958389360"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-medical-blue text-white py-3 px-6 sm:py-4 sm:px-10 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-medical-blue/20"
            >
              <span className="text-lg sm:text-xl">📞</span>
              Call Now
            </a>
            <a
              href="https://wa.me/919958389360?text=Hi%20Cosmodocs%2C%20I%20want%20to%20book%20an%20appointment"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] text-white py-3 px-6 sm:py-4 sm:px-10 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#25D366]/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-lg sm:text-xl">💬</span>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Form Card */}
        <div className="w-full lg:w-1/2 max-w-xl mx-auto animate-fadeInUp delay-300">
          <div className="bg-medical-blue/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10 lg:p-14 rounded-3xl sm:rounded-[36px] md:rounded-[48px] shadow-2xl relative overflow-hidden border border-white/10">
            {/* Form Accent Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lemon-green/50 to-transparent" />

            {submitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-lemon-green/10 text-lemon-green rounded-full flex items-center justify-center text-3xl sm:text-5xl mx-auto mb-5 sm:mb-8 border border-lemon-green/20 animate-float">
                  ✨
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4 sm:mb-6">Success!</h3>
                <p className="text-white/50 mb-6 sm:mb-10 text-base sm:text-lg leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{form.name}</strong>! We'll reach out to your phone <strong>{form.phone}</strong> shortly.
                </p>
                <button
                  className="bg-white/5 border border-white/10 text-white px-6 py-3 sm:px-10 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:bg-lemon-green hover:text-medical-blue hover:border-lemon-green transition-all active:scale-95 shadow-2xl"
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", treatment: "", time: "" }); }}
                >
                  Book New Slot
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 sm:mb-8 md:mb-12 text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-white mb-2 sm:mb-3">Fill the form & our team will call you shortly</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 md:space-y-8">
                  <div className="space-y-2 sm:space-y-3">
                    <label htmlFor="name" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full bg-white/[0.03] border border-white/5 p-3.5 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl md:rounded-[22px] focus:ring-2 focus:ring-lemon-green/20 focus:bg-white/[0.06] transition-all outline-none text-white font-medium placeholder:text-white/20 text-sm sm:text-base"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <label htmlFor="phone" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Active Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full bg-white/[0.03] border border-white/5 p-3.5 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl md:rounded-[22px] focus:ring-2 focus:ring-lemon-green/20 focus:bg-white/[0.06] transition-all outline-none text-white font-medium placeholder:text-white/20 text-sm sm:text-base"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
                    <div className="space-y-2 sm:space-y-3">
                      <label htmlFor="treatment" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Concern</label>
                      <select
                        id="treatment"
                        name="treatment"
                        className="w-full bg-white/[0.03] border border-white/5 p-3.5 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl md:rounded-[22px] focus:ring-2 focus:ring-lemon-green/20 focus:bg-white/[0.06] transition-all outline-none text-white font-medium appearance-none text-sm sm:text-base"
                        value={form.treatment}
                        onChange={handleChange}
                        required
                      >
                        <option value="" className="bg-medical-blue">Select</option>
                        {treatments.map((t) => (
                          <option key={t} value={t} className="bg-medical-blue">{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <label htmlFor="time" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Prefered Slot</label>
                      <select
                        id="time"
                        name="time"
                        className="w-full bg-white/[0.03] border border-white/5 p-3.5 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl md:rounded-[22px] focus:ring-2 focus:ring-lemon-green/20 focus:bg-white/[0.06] transition-all outline-none text-white font-medium appearance-none text-sm sm:text-base"
                        value={form.time}
                        onChange={handleChange}
                        required
                      >
                        <option value="" className="bg-medical-blue">Select</option>
                        {timeSlots.map((t) => (
                          <option key={t} value={t} className="bg-medical-blue">{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group w-full bg-lemon-green text-medical-blue py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm uppercase tracking-widest shadow-2xl shadow-lemon-green/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 sm:gap-4 disabled:opacity-50 disabled:scale-100"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="w-5 h-5 sm:w-6 sm:h-6 border-4 border-medical-blue/30 border-t-medical-blue rounded-full animate-spin" />
                    ) : (
                      <>
                        Request Priority Slot
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-medical-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
