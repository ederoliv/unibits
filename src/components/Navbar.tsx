import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "https://unibits.com/" },
  { label: "Sobre", href: "https://unibits.com/about/" },
  { label: "Downloads", href: "https://unibits.com/downloads/" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true); // recolhe ao rolar para baixo
      } else {
        setIsHidden(false); // mostra ao rolar para cima
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'} bg-[#0b0b0b]/30 border-b-[0.5px] border-[#666]`}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <img src="/unibits-logo.png" alt="Logo" className="h-12 w-auto object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white hover:text-white transition-colors no-underline text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://unibits.com/contact"
            className="bg-white text-black px-5 py-2 rounded-full font-bold text-[13px] tracking-wide no-underline hover:bg-white/90 transition-colors shadow-sm"
          >
            CONTATE-NOS
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex bg-transparent border-none text-white cursor-pointer p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111] border-t border-[#222] px-6 py-4 pb-6">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="block text-white/80 hover:text-white py-2.5 text-[15px] border-b border-[#222] no-underline transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}