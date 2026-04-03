const reasons = [
  "Experienced Dental Experts",
  "Advanced Technology",
  "100% Painless Treatment",
  "Hygienic Clinic",
  "Affordable Pricing"
];

export default function WhyUs() {
  return (
    <section className="py-6 lg:py-4 relative overflow-hidden" id="why-us">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-0 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">

          {/* LEFT */}
          <div className="w-full lg:w-[35%] space-y-6 lg:space-y-8 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-medical-blue leading-tight uppercase">
              Looking for a <br />
              dentist near you in <br />
              <span className="text-lemon-green">Gurgaon?</span>
            </h2>

            <a
              href="#contact"
              className="bg-lemon-green text-medical-blue px-6 py-3 lg:px-8 lg:py-4 rounded-full font-bold text-xs lg:text-sm uppercase tracking-widest shadow-2xl shadow-lemon-green/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3"
            >
              Book Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* CENTER */}
          <div className="w-full lg:w-[30%] flex justify-center items-center py-8 lg:py-4 relative">
            {/* glow */}
            <div className="absolute w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-lemon-green/10 rounded-full blur-3xl -z-10"></div>

            <img
              src="/tooth.png"
              alt="Dental"
              className="max-w-[150px] sm:max-w-[200px] lg:max-w-[320px] w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* RIGHT */}
          <div className="w-full lg:w-[35%] lg:px-20 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-medical-blue mb-5 lg:mb-8">
              We provide:
            </h3>

            <ul className="space-y-4 lg:space-y-5 inline-block text-left">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-center gap-2 lg:gap-3">

                  {/* bullet */}
                  <span className="w-2.5 h-2.5 lg:w-3 lg:h-3 min-w-[10px] rounded-full bg-lemon-green shadow-[0_0_12px_rgba(181,211,51,0.5)] flex-shrink-0"></span>

                  {/* text */}
                  <span className="text-base lg:text-lg font-bold text-medical-blue/90">
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