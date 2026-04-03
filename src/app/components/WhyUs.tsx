const reasons = [
  "Experienced Dental Experts",
  "Advanced Technology",
  "100% Painless Treatment",
  "Hygienic Clinic",
  "Affordable Pricing"
];

export default function WhyUs() {
  return (
    <section className="py-20 relative overflow-hidden" id="why-us">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">

          {/* Left Column: Text & CTA */}
          <div className="lg:w-[35%] text-left space-y-8">
            <div className="animate-fadeInUp">
              <h2 className="text-4xl lg:text-5xl font-bold text-medical-blue mb-6 leading-tight uppercase">
                Looking for a <br />
                dentist near me in <br />
                <span className="text-lemon-green">Gurgaon?</span>
              </h2>

            </div>

            <div className="animate-fadeInUp" style={{ animationDelay: '200ms' }}>
              <a
                href="#contact"
                className="inline-block bg-medical-blue text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-medical-blue/90 transition-all shadow-xl hover:-translate-y-1 active:scale-95"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Center Column: 3D Image */}
          <div className="lg:w-[30%] flex justify-center relative py-10 lg:py-0">
            {/* Subtle radial glow behind the tooth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-lemon-green/10 rounded-full blur-3xl -z-10"></div>
            <img
              src="/tooth.png"
              alt="Dental Health"
              className="w-full max-w-[320px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Right Column: Features List */}
          <div className="lg:w-[35%]">
            <h3 className="text-3xl lg:text-4xl font-bold text-medical-blue mb-8 animate-fadeInUp" style={{ animationDelay: '300ms' }}>
              We provide:
            </h3>
            <ul className="space-y-6">
              {reasons.map((reason, index) => (
                <li
                  key={index}
                  className="flex items-center gap-5 group animate-fadeInUp"
                  style={{ animationDelay: `${500 + (index * 100)}ms` }}
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-lemon-green shadow-[0_0_12px_rgba(181,211,51,0.5)] flex-shrink-0 group-hover:scale-125 transition-all duration-300"></span>
                  <span className="text-xl font-bold text-medical-blue/90 group-hover:text-medical-blue transition-colors tracking-tight">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
