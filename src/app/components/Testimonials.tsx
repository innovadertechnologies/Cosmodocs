export default function Testimonials() {
  return (
    <section id="testimonials" className="pt-10 pb-12 md:pt-14 md:pb-16 relative">
      <div className="max-w-[1200px] mx-auto relative z-10 px-4 flex flex-col items-center">
        <div className="text-center mb-8 md:mb-10 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-medical-blue mb-4 tracking-tight leading-tight">
            Patient Stories
          </h2>
          <p className="text-medical-blue/80 max-w-[320px] md:max-w-2xl mx-auto text-base md:text-lg px-2 leading-tight md:leading-normal">
            Hear directly from our patients about their experiences <br className="block md:hidden" /> and smile transformations with Cosmodocs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 w-full">
          {/* Reel 1 */}
          <div
            className="w-full max-w-[340px] h-[600px] rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] bg-white relative animate-fadeInUp flex-shrink-0"
            style={{ animationDelay: '100ms' }}
          >
            <iframe 
              src="https://www.instagram.com/reel/DWBqyBykfVt/embed" 
              className="w-full h-full border-none absolute inset-0 md:-mt-2" 
              scrolling="no" 
              allow="encrypted-media"
            ></iframe>
          </div>

          {/* Reel 2 */}
          <div
            className="w-full max-w-[340px] h-[600px] rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.1)] bg-white relative animate-fadeInUp flex-shrink-0"
            style={{ animationDelay: '200ms' }}
          >
            <iframe 
              src="https://www.instagram.com/reel/DV0x5KbEZi4/embed" 
              className="w-full h-full border-none absolute inset-0 md:-mt-2" 
              scrolling="no" 
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
