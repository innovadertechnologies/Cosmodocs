"use client";
import { useState, useEffect } from "react";

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


export default function PopupContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    treatment: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    // Show popup after 2 seconds if not previously closed in this session
    const timer = setTimeout(() => {
      if (!hasClosed) {
        setIsOpen(true);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [hasClosed]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.treatment) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      setErrorMsg("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    // Send request in background 
    fetch('/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: form.name,
        phone: form.phone,
        concern: form.treatment
      }),
    }).catch(error => console.error("Submission error:", error));

    // Optimistically reflect success UI after short delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Auto close after 3 seconds of success
      setTimeout(() => {
        setIsOpen(false);
        setHasClosed(true);
        setForm({ name: "", phone: "", treatment: "" }); // Reset form
      }, 3000);
    }, 800);
  };

  const handleClose = () => {
    setIsOpen(false);
    setHasClosed(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="w-full max-w-sm animate-fadeInUp relative">
        <button
          onClick={handleClose}
          className="absolute -top-12 right-0 md:-right-12 md:top-0 text-white/50 hover:text-white transition-colors w-10 h-10 flex items-center justify-center bg-black/20 hover:bg-black/40 rounded-full cursor-pointer z-10"
          aria-label="Close popup"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="bg-medical-blue/95 shadow-2xl relative overflow-hidden border border-white/10 rounded-[24px] p-6 sm:p-8">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-lemon-green/50 to-transparent" />

          {submitted ? (
            <div className="text-center py-6">
              <h3 className="text-xl font-serif font-bold text-white mb-3">Thank you!</h3>
              <p className="text-white/60 mb-5 text-sm leading-relaxed">
                Cosmodocs will reach you out soon.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 text-center">
                <h3 className="text-xl font-serif font-bold text-white mb-2 leading-tight">Get a Free Consultation Today!</h3>
                <p className="text-white/50 text-xs">Drop your details below and we will call you back.</p>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-red-200 text-xs text-center animate-fadeInUp">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="popup-name" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Full Name</label>
                  <input
                    id="popup-name"
                    name="name"
                    type="text"
                    className="w-full bg-white/[0.03] border border-white/5 p-3 rounded-xl focus:ring-2 focus:ring-lemon-green/20 focus:bg-white/[0.06] transition-all outline-none text-white font-medium placeholder:text-white/20 text-sm"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="popup-phone" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Active Phone</label>
                  <input
                    id="popup-phone"
                    name="phone"
                    type="tel"
                    className="w-full bg-white/[0.03] border border-white/5 p-3 rounded-xl focus:ring-2 focus:ring-lemon-green/20 focus:bg-white/[0.06] transition-all outline-none text-white font-medium placeholder:text-white/20 text-sm"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="popup-treatment" className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] px-1">Concern</label>
                  <select
                    id="popup-treatment"
                    name="treatment"
                    className="w-full bg-white/[0.03] border border-white/5 p-3 rounded-xl focus:ring-2 focus:ring-lemon-green/20 focus:bg-white/[0.06] transition-all outline-none text-white font-medium appearance-none text-sm"
                    value={form.treatment}
                    onChange={handleChange}
                    required
                  >
                    <option value="" className="bg-medical-blue">Concern</option>
                    {treatments.map((t) => (
                      <option key={t} value={t} className="bg-medical-blue">{t}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="group w-full bg-lemon-green text-medical-blue mt-2 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-2xl shadow-lemon-green/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:scale-100"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="w-5 h-5 border-4 border-medical-blue/30 border-t-medical-blue rounded-full animate-spin" />
                  ) : (
                    <>
                      Book Consultation
                      <div className="w-5 h-5 rounded-full bg-medical-blue text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
  );
}
