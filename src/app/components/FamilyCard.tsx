"use client";
import { useState } from "react";
import Image from "next/image";

export default function FamilyCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", members: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.members) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    if (!/^\d{10}$/.test(form.phone)) {
      setErrorMsg("Please enter a valid 10-digit phone number.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    fetch('/api/form', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: form.name,
        phone: form.phone,
        concern: `Family Card Request - ${form.members} Members`
      }),
    }).catch((error) => console.error("Submission error:", error));

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-white/40 backdrop-blur-2xl border border-white/60 rounded-3xl shadow-[0_8px_32px_rgba(30,58,95,0.05)] my-10 max-w-[1100px] mx-auto z-0" id="family-card">

        {/* MOBILE BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0 lg:hidden opacity-[0.12] pointer-events-none">
          <Image
            src="/familycard.png"
            alt="Background Graphic"
            fill
            className="object-cover object-center scale-110"
            priority
          />
        </div>

        {/* SPLIT BACKGROUND (Glassy) */}
        <div className="absolute top-0 right-0 w-full lg:w-[45%] h-full bg-white/20 -z-10 border-l border-white/30" />

        {/* DECORATIVE SHAPES (Transparent) */}
        <div className="absolute top-8 left-8 w-12 h-16 bg-white/50 rounded-tl-full rounded-br-full opacity-80 -z-10 hidden md:block" />
        <div className="absolute bottom-6 left-6 w-24 h-24 bg-white/40 rounded-full opacity-60 -z-10 hidden md:block" />
        <div className="absolute top-12 right-12 w-8 h-8 bg-medical-blue/5 rounded-tl-lg rounded-br-lg rotate-12 -z-10 hidden lg:block" />
        <div className="absolute bottom-16 right-[40%] w-4 h-4 bg-lemon-green/40 rounded-full -z-10 hidden lg:block" />

        <div className="px-6 md:px-10 lg:px-14 pt-10 pb-0 lg:py-14 z-10 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 lg:min-h-[380px]">

            {/* LEFT SIDE: Typography and Content */}
            <div className="w-full lg:w-[55%] flex flex-col space-y-6 z-20 pb-10 lg:pb-0">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-[46px] font-bold font-sans text-medical-blue leading-[1.1] tracking-tight mb-3">
                  Cosmodocs <br /> Family Card.
                </h2>
                <p className="text-base md:text-lg text-gray-600 font-medium max-w-lg mb-1">
                  Exclusive, full-service premium healthcare for all generations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-1">

                {/* Offers */}
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-medical-blue uppercase tracking-wider mb-3 border-b-2 border-lemon-green inline-block pb-1 bg-white/50 backdrop-blur-sm lg:bg-transparent px-1 rounded">Family Offers</h3>
                  <ul className="space-y-2.5">
                    {[
                      "Unlimited Consultations (1 Yr)",
                      "Free Dental X-Rays",
                      "18% Off on Zirconia Crowns",
                      "15% Off on All Treatments",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-800 lg:text-gray-700 font-semibold lg:font-medium">
                        <svg className="w-4 h-4 text-[#40858C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Zirconia Benefits */}
                <div className="flex-1">
                  <h3 className="text-sm font-bold text-medical-blue uppercase tracking-wider mb-3 border-b-2 border-lemon-green inline-block pb-1 bg-white/50 backdrop-blur-sm lg:bg-transparent px-1 rounded">Zirconia Benefits</h3>
                  <ul className="space-y-2.5">
                    {[
                      "10–15 Years Warranty",
                      "Metal-Free & Lightweight",
                      "Less Plaque Retention",
                      "Excellent Aesthetics",
                      "Stain & Temp Resistant",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-gray-800 lg:text-gray-700 font-semibold lg:font-medium">
                        <svg className="w-4 h-4 text-[#40858C] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                        <span className="text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="pt-8 flex flex-wrap gap-4 relative z-20">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-medical-blue text-white hover:bg-[#2A595E] hover:shadow-lg transition-all duration-300 px-7 py-3 rounded-full text-xs font-semibold tracking-wider"
                >
                  Get Family Card Now
                </button>
                <a href="#services" className="hidden lg:inline-flex border-2 border-medical-blue/20 bg-white/70 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none text-medical-blue hover:border-medical-blue hover:bg-medical-blue/5 transition-colors duration-300 px-7 py-3 rounded-full text-xs font-semibold tracking-wider items-center">
                  View Services
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Enormous Image (Desktop Only now) */}
            <div className="hidden lg:flex w-full lg:w-[45%] justify-center lg:justify-end items-center relative h-full min-h-[350px] lg:min-h-[450px]">
              <div className="relative w-full max-w-[600px] lg:max-w-[900px] aspect-[16/10] lg:aspect-auto lg:w-[160%] lg:h-[160%] lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-[-10%] z-10 mt-8 lg:mt-0">
                <Image
                  src="/familycard.png"
                  alt="Happy Family Dental Care"
                  fill
                  className="object-contain object-center lg:object-right drop-shadow-2xl"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POPUP MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-medical-blue/80 backdrop-blur-sm animate-fadeIn">
          <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl relative overflow-hidden animate-slideUp border border-gray-100">

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-500 rounded-full hover:bg-gray-200 transition-colors z-20"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>

            {submitted ? (
              <div className="text-center p-10">
                <div className="w-16 h-16 bg-lemon-green/20 rounded-full flex items-center justify-center mx-auto mb-5 text-lemon-green">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h3 className="text-2xl font-serif font-bold text-medical-blue mb-4">You're All Set!</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  We've received your Cosmodocs Family Card request. Our team will reach out to you shortly.
                </p>
                <button
                  className="bg-medical-blue text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-lemon-green transition-colors w-full"
                  onClick={() => setIsModalOpen(false)}
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="p-8 sm:p-10">
                <div className="mb-6 text-center">
                  <h3 className="text-2xl font-serif font-bold text-medical-blue mb-2">Claim Your Card</h3>
                  <p className="text-gray-500 text-sm">Secure premium care for your family today.</p>
                </div>

                {errorMsg && (
                  <div className="mb-5 p-3 bg-red-50 text-red-600 border border-red-100 rounded-xl text-sm text-center">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] px-1">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:ring-2 focus:ring-lemon-green/50 focus:bg-white transition-all outline-none text-gray-800 font-medium text-sm"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] px-1">Active Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:ring-2 focus:ring-lemon-green/50 focus:bg-white transition-all outline-none text-gray-800 font-medium text-sm"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="members" className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] px-1">Family Members</label>
                    <select
                      id="members"
                      name="members"
                      className="w-full bg-gray-50 border border-gray-200 p-3.5 rounded-xl focus:ring-2 focus:ring-lemon-green/50 focus:bg-white transition-all outline-none text-gray-800 font-medium appearance-none text-sm"
                      value={form.members}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select members</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group w-full bg-lemon-green text-medical-blue py-4 rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#A3BF2D] shadow-lg shadow-lemon-green/20 hover:shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:scale-100"
                      disabled={loading}
                    >
                      {loading ? (
                        <span className="w-5 h-5 border-4 border-medical-blue/30 border-t-medical-blue rounded-full animate-spin" />
                      ) : (
                        <>
                          Request Family Card
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
