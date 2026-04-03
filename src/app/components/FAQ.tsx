"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is dental treatment painful?",
    a: "No, all treatments at Cosmodocs are done using modern techniques and anaesthesia to ensure a completely painless experience. Your comfort is our top priority.",
  },
  {
    q: "How long does dental treatment take?",
    a: "It depends on the treatment. Simple procedures like teeth whitening take 30–60 minutes, while advanced treatments like dental implants or braces may require multiple visits.",
  },
  {
    q: "Do you offer free consultation?",
    a: "Yes, we provide expert consultation to understand your problem and suggest the best treatment plan tailored to your needs.",
  },
  {
    q: "How can I book an appointment?",
    a: "You can call us at 9958389360, WhatsApp us, or fill out the appointment form on this page for quick and easy booking.",
  },
  {
    q: "Are dental implants safe?",
    a: "Absolutely! Dental implants are the gold standard for tooth replacement. With our advanced technology, our implants have a very high success rate.",
  },
  {
    q: "What is the cost of dental treatment in Gurgaon?",
    a: "Our pricing is transparent and affordable. Costs vary by treatment — please book a consultation and our team will give you a detailed, no-hidden-charge estimate.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-4 relative" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row gap-10 lg:gap-24 relative z-10">
        {/* Left: Info */}
        <div className="lg:w-7/12 animate-fadeInUp">
          <h2 className="text-2xl sm:text-3xl lg:text-6xl font-serif font-bold text-medical-blue mb-4 lg:mb-8 leading-tight whitespace-nowrap lg:whitespace-normal">
            Everything You <br className="hidden lg:block" />
            <span className="text-lemon-green italic lg:whitespace-nowrap">Need To Know</span>
          </h2>
          <p className="text-medical-blue/70 text-sm lg:text-lg mb-2 lg:mb-12 leading-relaxed max-w-xl">
            Clear your doubts before starting your dental treatment at Cosmodocs. We ensure safe, painless, and advanced care for every patient.
          </p>

          <a
            href="#contact"
            className="hidden lg:flex w-fit group items-center gap-3 bg-lemon-green text-medical-blue px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl shadow-lemon-green/30 hover:scale-105 active:scale-95 transition-all"
          >
            Book Your Consultation Today
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right: Accordion */}
        <div className="lg:w-5/12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass-card transition-all duration-500 overflow-hidden cursor-pointer rounded-[32px] group animate-fadeInUp ${openIndex === index ? "border-lemon-green/40 shadow-2xl shadow-lemon-green/10" : "hover:border-medical-blue/20"
                }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="p-6 flex items-center gap-6 group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold font-serif text-xl transition-all flex-shrink-0 ${openIndex === index ? "bg-lemon-green text-medical-blue" : "bg-white/[0.03] text-white/20 border border-white/5 group-hover:text-white"
                  }`}>
                  {index + 1}
                </div>
                <div className="flex-grow flex items-center justify-between gap-4">
                  <span className={`text-lg font-bold transition-colors leading-snug ${openIndex === index ? "text-medical-blue" : "text-medical-blue/60 group-hover:text-medical-blue/80"
                    }`}>
                    {faq.q}
                  </span>
                  <div className={`transition-transform duration-500 flex-shrink-0 ${openIndex === index ? "rotate-180 text-lemon-green" : "text-medical-blue/20 group-hover:text-medical-blue/40"}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className={`px-6 transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-[500px] pb-8 opacity-100" : "max-h-0 opacity-0"
                }`}>
                <div className="pl-6 border-l-2 border-lemon-green/30 ml-6">
                  <p className="text-medical-blue/50 leading-relaxed font-medium">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}


        </div>
      </div>
    </section>
  );
}
