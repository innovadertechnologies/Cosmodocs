import Image from "next/image";
import BeforeAfter from "./BeforeAfter";

const services = [
  {
    image: "/dental_implants.jpeg",
    title: "Dental Implants",
    subtitle: "Premium Implants in Gurgaon",
    features: [
      "Permanent solution for missing teeth",
      "Natural look & strong bite",
      "Long-lasting & durable results",
      "Advanced implant technology",
    ],
  },
  {
    image: "/rct.jpeg",
    title: "Root Canal Treatment",
    subtitle: "Painless RCT in Gurgaon",
    features: [
      "100% painless procedure",
      "Saves your natural tooth",
      "Quick & safe treatment",
      "Instant relief from pain",
    ],
  },
  {
    image: "/teeth_whitening.jpeg",
    title: "Teeth Whitening",
    subtitle: "Instant Visible Results",
    features: [
      "Instant visible results",
      "Removes stains & yellowing",
      "Safe & effective process",
      "Enhances smile confidence",
    ],
  },
  {
    image: "/braces.jpeg",
    title: "Braces & Aligners",
    subtitle: "Straighter Teeth, Beautiful Smile",
    features: [
      "Straightens teeth effectively",
      "Invisible aligners available",
      "Comfortable treatment process",
      "Suitable for all age groups",
    ],
  },
  {
    image: "/smile_treatment.jpeg",
    title: "Smile Makeover",
    subtitle: "Complete Transformation",
    features: [
      "Complete smile transformation",
      "Customized treatment plan",
      "Improves facial aesthetics",
      "Boosts self-confidence",
    ],
  },
  {
    image: "/veeners.jpeg",
    title: "Veneers",
    subtitle: "Natural-Looking Enhancement",
    features: [
      "Fix stained, chipped & uneven teeth",
      "Natural-looking smile enhancement",
      "Improves shape, color & alignment",
      "Long-lasting aesthetic solution",
    ],
  },
  {
    image: "/crown.jpeg",
    title: "Crowns & Bridges",
    subtitle: "Restore Missing Teeth",
    features: [
      "Replaces missing teeth seamlessly",
      "Restores chewing & speaking ability",
      "Fixed & durable solution",
      "Matches natural tooth appearance",
    ],
  },
  {
    image: "/kids.jpeg",
    title: "Kids Dentistry",
    subtitle: "Gentle Care for Children",
    features: [
      "Gentle & child-friendly care",
      "Preventive treatments & checkups",
      "Painless procedures for kids",
      "Builds healthy dental habits early",
    ],
  },
];

export default function Services() {
  return (
    <section className="pt-4 pb-4 relative overflow-hidden" id="services">
      <div className="container mx-auto px-0 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-20 animate-fadeInUp">
          <div className="inline-block text-medical-blue px-2 md:px-4 py-1.5 text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase mb-2 md:mb-3 whitespace-nowrap">
            Our Services
          </div>
          {/* <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-lemon-green">
            Complete Dental Care
          </h2> */}
          <p className="text-medical-blue/70 text-sm md:text-lg lg:text-xl px-4 md:px-0 hidden md:block">
            From routine checkups to advanced smile makeovers — we offer world-class dental treatments tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 px-0">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-[#1e3a5f] text-white p-2.5 md:p-8 rounded-[14px] md:rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.25)] group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-full h-20 md:h-48 mb-2 md:mb-8 rounded-lg md:rounded-2xl overflow-hidden border border-white/10 group-hover:border-lemon-green/30 transition-all duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="text-[11px] sm:text-xs md:text-2xl font-serif font-bold text-white mb-1.5 md:mb-3 leading-tight min-h-[2.5em] flex items-center">
                {service.title}
              </h3>

              <ul className="space-y-1 md:space-y-4">
                {service.features.map((f, i) => (
                  <li key={f} className={`flex items-start gap-1.5 md:gap-3 text-[8px] sm:text-[9.5px] md:text-sm text-white/60 leading-tight ${i >= 2 ? 'hidden xs:flex' : ''}`}>
                    <span className="text-lemon-green/40 font-bold text-[10px] md:text-base leading-none">•</span>
                    <span className="line-clamp-2 md:line-clamp-none">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 text-center animate-fadeInUp delay-500">
          <a
            href="#contact"
            className="bg-lemon-green text-medical-blue px-4 py-3 sm:px-6 lg:px-8 lg:py-4 rounded-full font-bold text-[10px] sm:text-xs lg:text-sm uppercase tracking-widest shadow-2xl shadow-lemon-green/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-2 sm:gap-3 max-w-[95vw] mx-auto text-center leading-tight"
          >
            <span>Choose Your Treatment Now</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="flex-shrink-0">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Before & After Comparison */}
        <BeforeAfter />
      </div>
    </section>
  );
}
