import Image from "next/image";

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
    image: "/crown_bridges.jpeg",
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
    <section className="pt-6 pb-6 relative overflow-hidden" id="services">
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeInUp">
          <div className="inline-block text-medical-blue px-4 py-1.5  text-3xl font-bold tracking-[0.2em] uppercase mb-3 ">
            Our Services
          </div>
          {/* <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-lemon-green">
            Complete Dental Care
          </h2> */}
          <p className="text-medical-blue/70  text-lg md:text-xl">
            From routine checkups to advanced smile makeovers — we offer world-class dental treatments tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-[#1e3a5f] text-white p-8 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.25)] group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative w-full h-48 mb-8 rounded-2xl overflow-hidden border border-white/10 group-hover:border-lemon-green/30 transition-all duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white mb-3 leading-tight">
                {service.title}
              </h3>
              {/* <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-8">
                {service.subtitle}
              </p> */}

              <ul className="space-y-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/60 leading-snug">
                    <span className="text-white/40 font-bold text-base leading-none">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-24 text-center animate-fadeInUp delay-500">
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 bg-lemon-green text-medical-blue px-10 py-5 rounded-full font-bold text-lg border border-white/10 hover:bg-lemon-green/90 transition-all"
          >
            Choose Your Treatment & Book Appointment Now

            <div className="w-8 h-8 flex items-center justify-center transition-transform group-hover:translate-x-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
