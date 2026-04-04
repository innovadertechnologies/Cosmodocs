"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
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

  return (
    <>
      {<nav
        className="fixed top-0 left-0 right-0 z-[100]">
        <div className={`h-16 flex items-center justify-between transition-all duration-500 glass-card py-2.5 px-3 sm:px-4 lg:px-6 ${scrolled ? "shadow-lemon-green/10" : "shadow-md"
          }`}>
          {/* Logo */}
          <a href="#hero" className="flex items-center ml-2 lg:ml-6 gap-2 group">
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
            {/* <span className="font-serif font-bold text-lg tracking-tight hidden sm:block text-white">
              Cosmodocs
            </span> */}
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
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
            {/* <a
              href="tel:9958389360"
              className="hidden md:flex items-center gap-2 text-sm font-bold text-white/90 hover:text-lemon-green transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
              </svg>
              <span className="hidden lg:inline">9958389360</span>
            </a> */}
            <a
              href="#contact"
              className="bg-lemon-green text-medical-blue px-4 sm:px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-wide sm:tracking-widest shadow-lg shadow-lemon-green/20 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
            >
              Book Now
            </a>

            {/* Hamburger */}
            {/* <button
              className="lg:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 transition-all bg-white ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <div className={`w-6 h-0.5 transition-all bg-white ${menuOpen ? "opacity-0" : ""}`} />
              <div className={`w-6 h-0.5 transition-all bg-white ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button> */}
          </div>
        </div>
      </nav>}

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[90] bg-white transition-transform duration-500 lg:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <div className="flex flex-col h-full pt-24 pb-10 px-8">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-serif font-bold text-medical-blue hover:text-lemon-green transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-col gap-4">
            <a
              href="tel:9958389360"
              className="flex items-center justify-center gap-3 bg-medical-blue text-white py-4 rounded-2xl font-bold transition-transform active:scale-95 shadow-lg shadow-blue-900/20"
            >
              📞 9958389360
            </a>
            <div className="text-center text-gray-500 text-sm italic">
              Available Mon-Sat: 10am-8pm
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
