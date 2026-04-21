"use client";
import Image from "next/image";

const products = [
  {
    image: "/dshine.png",
    name: "D-Shine Medicated Dental Paste",
    weight: "100g",
    tagline: "Dentist Recommended",
    description:
      "Relief from tooth sensitivity & strong cavity protection with Potassium Nitrate & Fluoride.",
    benefits: [
      "Reduces tooth sensitivity",
      "Prevents cavities & decay",
      "Fresh cooling feel all day",
    ],
    usage: "Brush twice daily for best results.",
    suitableFor: "Suitable For: 12+ years age.",
    cta: "Call to Order",
    phone: "tel:+919958389360",
  },
  {
    image: "/shynedent.png",
    name: "ShyneDent Whitening Dental Paste",
    weight: "100g",
    tagline: "Advanced Formula",
    description:
      "Relief from tooth sensitivity & strong cavity protection with Potassium Nitrate & Fluoride.",
    benefits: [
      "Reduces sensitivity",
      "Prevents cavities",
      "Fresh cooling feel",
    ],
    usage: "Brush twice daily for best results.",
    suitableFor: "Suitable For: 12+ years age.",
    cta: "Call to Order",
    phone: "tel:+919958389360",
  },
];

export default function DentalCareRange() {
  return (
    <section
      id="dental-care-range"
      className="py-10 lg:py-14 relative overflow-hidden"
    >
      {/* ── Section Header ── */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-14 px-4 animate-fadeInUp">
        <div className="inline-block text-medical-blue px-2 md:px-4 py-1.5 text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase mb-2 md:mb-3 whitespace-nowrap">
          Our Dental Care Range
        </div>
        <p className="text-medical-blue/70 text-sm md:text-lg lg:text-xl px-4 md:px-0 hidden md:block">
          Clinically formulated toothpastes recommended by our dental specialists — crafted for everyday protection.
        </p>
      </div>

      {/* ── Product Grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-[860px] mx-auto px-0">
        {products.map((product, index) => (
          <div
            key={product.name}
            className="bg-[#1e3a5f] text-white p-5 md:p-8 rounded-[14px] md:rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.25)] group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] animate-fadeInUp flex flex-col"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            {/* Badge */}
            <span className="self-end text-[9px] font-bold tracking-[0.12em] uppercase bg-lemon-green/20 text-lemon-green px-3 py-1 rounded-full mb-4">
              {product.tagline}
            </span>

            {/* Product Image */}
            <div className="w-full h-40 md:h-52 mb-5 md:mb-7 rounded-lg md:rounded-2xl overflow-hidden border border-white/10 group-hover:border-lemon-green/30 transition-all duration-500">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Name + Weight */}
            <h3 className="font-serif text-lg md:text-xl font-bold text-white leading-tight mb-1">
              {product.name}
            </h3>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-lemon-green/70 mb-3">
              {product.weight}
            </span>

            {/* Description */}
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              {product.description}
            </p>

            {/* Benefits */}
            <ul className="space-y-3 mb-5 flex-1">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-sm text-white/80 font-medium">
                  <span className="w-2.5 h-2.5 min-w-[10px] rounded-full bg-lemon-green shadow-[0_0_10px_rgba(181,211,51,0.5)] flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Usage note */}
            <div className="text-[10px] text-white/40 italic mb-5 space-y-1">
              <p className="flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" fill="none" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
                  <circle cx="10" cy="10" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                {product.usage}
              </p>
              <p className="flex items-center gap-1.5 pl-0.5">
                <svg viewBox="0 0 24 24" fill="none" className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true">
                  <path d="M12 2L4 5v6c0 5.25 3.5 10.15 8 11.35C16.5 21.15 20 16.25 20 11V5L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {product.suitableFor}
              </p>
            </div>

            {/* CTA Button */}
            <a
              href={product.phone}
              className="bg-lemon-green text-medical-blue px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl shadow-lemon-green/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-2 cursor-pointer mt-auto"
              aria-label={`Call to order ${product.name}`}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.22.49 2.55.76 3.93.76a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.39.27 2.71.76 3.93a1 1 0 01-.27 1.11l-2.37 2.75z" />
              </svg>
              {product.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
