import Image from "next/image";

export default function Doctor() {
  return (
    <section className="pt-10 pb-4 md:pt-14 md:pb-6 lg:pt-16 lg:pb-8 relative overflow-hidden" id="doctor">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between 
                  gap-6 md:gap-10 lg:gap-16 
                  px-4 sm:px-6 md:px-10 lg:px-12 xl:px-20">

        {/* Left */}
        <div className="w-full lg:w-[48%] flex justify-center">
          <div className="relative group">

            {/* Glow */}
            <div className="absolute -inset-6 md:-inset-10 bg-medical-blue/10 rounded-full blur-[80px] md:blur-[100px]" />
            <Image
              src="/dr_ankita.png"
              alt="Dr. Ankita Gupta - Expert Dental Surgeon"
              width={460}
              height={560}
              className="relative z-10 object-contain 
             w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[380px]
             h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[450px]
             rounded-[24px] md:rounded-[40px]
             group-hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[48%] animate-fadeInUp text-center lg:text-left">

          <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-serif font-bold text-medical-blue 
                     mb-4 md:mb-6 leading-tight">
            Meet Your Dental Expert
          </h2>

          <div className="mb-6 md:mb-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-medical-blue mb-1">
              Dr. Ankita Gupta
            </h3>
            <p className="text-medical-blue font-bold uppercase tracking-widest text-[10px] pt-2 sm:text-xs">
              Senior Dental Surgeon | Cosmodocs Gurgaon
            </p>
          </div>

          <div className="flex justify-center lg:justify-start">
            <div className="space-y-3 md:space-y-5 inline-block text-left">
              {[
                "Expertise in Dental Implants, RCT & Smile Makeover",
                "Focus on painless & comfortable treatment",
                "Personalized care for every patient",
                "Trusted by hundreds of happy patient",
              ].map((item) => (
                <div className="flex items-start justify-start gap-3 md:gap-4" key={item}>
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-lemon-green shrink-0 mt-1.5 md:mt-2" />
                  <span className="text-medical-blue text-sm sm:text-base md:text-lg leading-snug md:leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
