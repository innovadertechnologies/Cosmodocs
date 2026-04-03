import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-transparent text-white pt-24 pb-10 overflow-hidden">

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none opacity-40" />

      <div className="relative max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LEFT - BRAND */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/20">
              <Image
                src="/cosmodocs_logo.png"
                alt="logo"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-2xl font-serif font-bold">Cosmodocs</h2>
          </div>

          <p className="text-white/70 text-sm leading-relaxed">
            Cosmodocs Clinic offers advanced and compassionate dental care
            with a focus on comfort, precision and long-term oral health.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-6 text-white">Quick Links</h3>
          <ul className="space-y-3 text-white/70 text-sm">
            <li><a href="#hero" className="hover:text-lemon-green">Home</a></li>
            <li><a href="#services" className="hover:text-lemon-green">Services</a></li>
            <li><a href="#why-us" className="hover:text-lemon-green">Why Us</a></li>
            <li><a href="#doctor" className="hover:text-lemon-green">Doctor</a></li>
            <li><a href="#contact" className="hover:text-lemon-green">Contact</a></li>
          </ul>
        </div>

        {/* LOCATION (MAP) */}
        <div>
          <h3 className="font-semibold mb-6 text-white">Our Location</h3>

          <div className="rounded-2xl overflow-hidden border border-white/10 group relative">
            <iframe
              src="https://www.google.com/maps?q=Cosmodocs+Dental+Clinic+Gurgaon&output=embed"
              width="100%"
              height="180"
              style={{ border: 0 }}
              loading="lazy"
            />
            {/* Absolute overlay to capture clicks and redirect to the specific requested map link */}
            <a
              href="https://www.google.com/maps/place/Cosmodocs+Dental+Clinic+%7C+Best+Dentist+in+Gurugram+%7C+Best+Dental+Care+in+Gurugram+%7C+Smile+Makeover+in+Gurugram/data=!4m2!3m1!1s0x0:0x1acf56d63e9e7446?sa=X&ved=1t:2428&ictx=111"
              target="_blank"
              rel="noreferrer"
              className="absolute inset-0 bg-transparent"
              aria-label="Open location in Google Maps"
            />
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-6 text-white">Get in Touch</h3>

          <div className="space-y-4 text-sm text-white/70">
            <a href="tel:+919958389360" className="flex items-center gap-3 hover:text-lemon-green hover:translate-x-1 transition-all">
              <span>📞</span> +91 9958389360
            </a>

            <a href="https://www.google.com/maps/place/Cosmodocs+Dental+Clinic+%7C+Best+Dentist+in+Gurugram+%7C+Best+Dental+Care+in+Gurugram+%7C+Smile+Makeover+in+Gurugram/data=!4m2!3m1!1s0x0:0x1acf56d63e9e7446?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-lemon-green hover:translate-x-1 transition-all">
              <span>📍</span> <span>Gurgaon, Haryana, India</span>
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-[12px] bg-white/10 flex items-center justify-center hover:bg-lemon-green hover:text-medical-blue hover:-translate-y-1 transition-all shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-[12px] bg-white/10 flex items-center justify-center hover:bg-lemon-green hover:text-medical-blue hover:-translate-y-1 transition-all shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-12 text-center text-white/40 text-xs">
        © {new Date().getFullYear()} Cosmodocs. All rights reserved.
      </div>

    </footer>
  );
}