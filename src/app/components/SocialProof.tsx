const stats = [
  { num: "500+", label: "Happy Patients" },
  { num: "4.7", label: "Star Rated" },
  { num: "High", label: "Success Rate" },
  { num: "Expert", label: "Trusted Dentists" },
];

export default function SocialProof() {
  return (
    <div className="w-full bg-medical-blue py-16 px-4 md:px-6">

      <div className="max-w-[1200px] mx-auto">

        <div className="bg-white/5 backdrop-blur-xl py-10 px-8 rounded-[40px] border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex flex-wrap justify-between items-center gap-10">

          {stats.map((s, index) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-lemon-green font-serif leading-none mb-4">
                {s.num}
              </span>

              <span className="text-lemon-green font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-80">
                {s.label}
              </span>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}