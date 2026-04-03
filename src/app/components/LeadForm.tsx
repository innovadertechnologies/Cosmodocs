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
    <section className="py-24 relative" id="contact">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-20 items-center relative z-10">
        {/* Left: Info */}
        <div className="lg:w-1/2 animate-fadeInUp text-left">

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-medical-blue mb-8 leading-tight">
            Confidence begins with a <span className="italic">healthy smile.</span> Let our specialists craft the look you've always dreamed of.
          </h2>
          <p className="text-medical-blue/80 text-xl font-bold mb-12 flex flex-col items-start gap-3">
            {/* <span className="w-8 h-[2px] bg-lemon-green" /> */}
            Get Expert Dental Consultation Today!
            <span className="text-lg font-normal text-medical-blue/60 max-w-md">
              Don’t ignore your dental problems. <br />
              Early treatment saves pain and money.
            </span>
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fadeInUp delay-500">
            <a
              href="tel:9958389360"
              className="inline-flex items-center justify-center gap-3 bg-medical-blue text-white py-4 px-10 rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-medical-blue/20"
            >
              <span className="text-xl">📞</span>
              Call Now
            </a>
            <a
              href="https://wa.me/919958389360?text=Hi%20Cosmodocs%2C%20I%20want%20to%20book%20an%20appointment"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 px-10 rounded-2xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#25D366]/20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-xl">💬</span>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right: Form Card */}
        <div className="lg:w-1/2 w-full max-w-xl mx-auto animate-fadeInUp delay-300">
          <div className="bg-medical-blue/90 backdrop-blur-2xl p-10 md:p-14 rounded-[48px] shadow-2xl relative overflow-hidden border border-white/10">
            {/* Form Accent Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lemon-green/50 to-transparent" />

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-lemon-green/10 text-lemon-green rounded-full flex items-center justify-center text-5xl mx-auto mb-8 border border-lemon-green/20 animate-float">
                  ✨
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-6">Success!</h3>
                <p className="text-white/50 mb-10 text-lg leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{form.name}</strong>! We'll reach out to your phone <strong>{form.phone}</strong> shortly.
                </p>
                <button
                  className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-bold hover:bg-lemon-green hover:text-medical-blue hover:border-lemon-green transition-all active:scale-95 shadow-2xl"
                  onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", treatment: "", time: "" }); }}
                >
                  Book New Slot
                </button>
              </div>
            ) : (
              <>
                <div className="mb-12 text-center">
                  <h3 className="text-3xl font-serif font-bold text-white mb-3">Fill the form & our team will call you shortly</h3>
                  {/* <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">Quick Response guaranteed</p> */}
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <label htmlFor="name" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      // placeholder="e.g. John Doe"
                      className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-[22px] focus:ring-2 focus:ring-lemon-green/20 focus:bg-white/[0.06] transition-all outline-none text-white font-medium placeholder:text-white/20"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="phone" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Active Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      // placeholder="e.g. 9958389360"
                      className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-[22px] focus:ring-2 focus:ring-lemon-green/20 focus:bg-white/[0.06] transition-all outline-none text-white font-medium placeholder:text-white/20"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label htmlFor="treatment" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Concern</label>
                      <select
                        id="treatment"
                        name="treatment"
                        className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-[22px] focus:ring-2 focus:ring-lemon-green/20 focus:bg-white/[0.06] transition-all outline-none text-white font-medium appearance-none"
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

                    <div className="space-y-3">
                      <label htmlFor="time" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Prefered Slot</label>
                      <select
                        id="time"
                        name="time"
                        className="w-full bg-white/[0.03] border border-white/5 p-5 rounded-[22px] focus:ring-2 focus:ring-lemon-green/20 focus:bg-white/[0.06] transition-all outline-none text-white font-medium appearance-none"
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
                    className="group w-full bg-lemon-green text-medical-blue py-6 rounded-2xl font-bold text-sm uppercase tracking-widest shadow-2xl shadow-lemon-green/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:scale-100"
                    disabled={loading}
                  >
                    {loading ? (
                      <span className="w-6 h-6 border-4 border-medical-blue/30 border-t-medical-blue rounded-full animate-spin" />
                    ) : (
                      <>
                        Request Priority Slot
                        <div className="w-8 h-8 rounded-full bg-medical-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </div>
                      </>
                    )}
                  </button>

                  {/* <p className="text-center text-[9px] text-white/20 font-bold uppercase tracking-[0.4em]">
                    🔒 Encrypted • Private • Clinic Certified
                  </p> */}
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
