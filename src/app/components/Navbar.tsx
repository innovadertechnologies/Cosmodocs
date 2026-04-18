"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Family Card", href: "#family-card" },
  { label: "Why Us", href: "#why-us" },
  { label: "Our Doctor", href: "#doctor" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      const elem = document.getElementById(targetId);
      if (elem) {
        const offset = 80;
        const elementPosition = elem.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100]">
        <div className={`h-16 flex items-center justify-between transition-all duration-500 glass-card py-2.5 px-3 sm:px-4 lg:px-6 ${scrolled ? "shadow-lemon-green/10" : "shadow-md"
          }`}>
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center ml-2 lg:ml-6 gap-2 group"
          >
            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden transition-all duration-300 group-hover:scale-105 flex items-center justify-center">
              <Image
                src="/cosmodocs_logo.png"
                alt="Cosmodocs Logo"
                width={56}
                height={56}
                className="object-contain rounded-full"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-xs font-bold uppercase tracking-wider hover:text-lemon-green transition-colors ${scrolled ? "text-medical-blue" : "text-white/70"
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="bg-lemon-green text-medical-blue px-4 sm:px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-wide sm:tracking-widest shadow-lg shadow-lemon-green/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              Book Now
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {(() => {
                const hamburgerColorClass = !menuOpen && scrolled ? "bg-medical-blue" : "bg-white";
                return (
                  <>
                    <div className={`w-6 h-0.5 transition-all ${hamburgerColorClass} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <div className={`w-6 h-0.5 transition-all ${hamburgerColorClass} ${menuOpen ? "opacity-0" : ""}`} />
                    <div className={`w-6 h-0.5 transition-all ${hamburgerColorClass} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                  </>
                );
              })()}
            </button>
          </div>
        </div>
      </nav>

      {/* Premium Mobile Menu */}
      <div className={`fixed inset-0 z-[90] bg-[#1a2f4d]/95 backdrop-blur-2xl transition-all duration-500 lg:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}>
        
        {/* Decorative glows inside menu */}
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-lemon-green/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-[-20%] w-[80vw] h-[80vw] bg-[#1e3a5f]/40 rounded-full blur-[120px] -z-10 pointer-events-none" />

        <div className={`flex flex-col h-full pt-32 pb-12 px-8 sm:px-12 transition-transform duration-500 ${menuOpen ? "translate-x-0" : "translate-x-12"}`}>
          <ul className="flex flex-col gap-6 sm:gap-8">
            {navLinks.map((link, index) => (
              <li 
                key={link.label}
                className={`transform transition-all duration-500 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                <a
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="group flex items-center w-fit text-4xl sm:text-5xl font-serif font-bold text-white hover:text-lemon-green transition-all"
                >
                  <span className="w-0 h-1 bg-lemon-green group-hover:w-8 sm:group-hover:w-12 transition-all duration-300 mr-0 group-hover:mr-4 sm:group-hover:mr-6 rounded-full opacity-0 group-hover:opacity-100"></span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div 
            className={`mt-auto transform transition-all duration-700 border-t border-white/10 pt-8 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: "700ms" }}
          >
            <p className="text-white/60 text-sm font-medium tracking-widest uppercase">Cosmodocs</p>
            <p className="text-white/40 text-xs mt-2">Premium Dental & Aesthetics</p>
          </div>
        </div>
      </div>
    </>
  );
}
