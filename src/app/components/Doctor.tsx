import Image from "next/image";

export default function Doctor() {
  return (
    <section className="py-5 relative overflow-hidden" id="doctor">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-24 items-center relative z-10">
        {/* Left: Image with Badges */}
        <div className="lg:w-1/2 flex justify-center animate-fadeInUp">
          <div className="relative group">
            {/* Decorative Background Glow */}
            <div className="absolute -inset-10 bg-medical-blue/10 rounded-full blur-[100px] group-hover:bg-medical-blue/20 transition-all duration-700" />

            <Image
              src="/doctor-ankita.png"
              alt="Dr. Ankita Gupta - Expert Dental Surgeon"
              width={460}
              height={560}
              className="relative z-10 object-cover group-hover:scale-105 transition-transform duration-700 rounded-[40px]"
              priority
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="lg:w-1/2 animate-fadeInUp delay-300">
          {/* <div className="inline-block bg-medical-blue/10 text-medical-blue px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-8 border border-medical-blue/20">
            About Our Expert
          </div> */}
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-medical-blue mb-8 leading-tight">
            Meet Your <br />
            <span className="text-medical-blue italic">Dental Expert.</span>
          </h2>

          <div className="mb-12">
            <h3 className="text-3xl font-serif font-bold text-medical-blue mb-2">Dr. Ankita Gupta</h3>
            <p className="text-medical-blue font-bold uppercase tracking-widest text-xs">Senior Dental Surgeon | Cosmodocs Gurgaon</p>
          </div>

          <div className="space-y-6 mb-12">
            {/* Removed medical blue icons from here */}
            {[
              "Expertise in Advanced Implantology",
              "Gold Standard Painless RCT Specialist",
              "Artistic Approach to Smile Makeovers",
              "15+ Years of Clinical Excellence",
            ].map((item) => (
              <div className="flex items-center gap-5 group" key={item}>
                <div className="w-2.5 h-2.5 rounded-full bg-lemon-green shadow-[0_0_10px_rgba(181,211,51,0.5)] shrink-0" />
                <span className="text-medical-blue font-medium md:text-lg">{item}</span>
              </div>
            ))}
          </div>



          {/* Removed CTA button as it contained medical blue text */}
        </div>
      </div>
    </section>
  );
}
