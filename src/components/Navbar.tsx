import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { games } from "../data/games";

const navLinks = [
  { label: "Início", path: "/" },
  { label: "Sobre", href: "https://unibits.com/about/" },
  { label: "Nossos jogos", isDropdown: true },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Dropdown states
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true); // recolhe ao rolar para baixo
        setDesktopDropdownOpen(false); // fechar dropdown no scroll down
      } else {
        setIsHidden(false); // mostra ao rolar para cima
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Fechar o menu móvel quando mudar de tela
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'} bg-[#0b0b0b]/70 border-b-[0.5px] border-[#666]`}
    >
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 no-underline">
          <img src="/unibits-logo.png" alt="Logo" className="h-12 w-auto object-contain" onError={(e) => e.currentTarget.style.display = 'none'} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 relative items-center">
          {navLinks.map((l) => {
            if (l.isDropdown) {
              return (
                <div 
                  key={l.label} 
                  className="relative group"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <button className="text-white hover:text-white transition-colors text-sm font-medium flex items-center gap-1 cursor-pointer bg-transparent border-none">
                    {l.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {desktopDropdownOpen && (
                    <div className="absolute top-full left-0 pt-2 w-[220px] z-50">
                      <div className="bg-[#111] border border-[#222] rounded-lg shadow-xl overflow-hidden py-2 flex flex-col">
                        {games.map(game => (
                          <Link 
                            key={game.id} 
                            to={`/jogo/${game.id}`}
                            onClick={() => setDesktopDropdownOpen(false)}
                            className="text-white/80 hover:text-white hover:bg-white/10 px-4 py-3 text-sm transition-colors no-underline text-left"
                          >
                            {game.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            if (l.path) {
              return (
                <Link
                  key={l.label}
                  to={l.path}
                  className="text-white hover:text-white transition-colors no-underline text-sm font-medium"
                >
                  {l.label}
                </Link>
              );
            }
            return (
              <a
                key={l.label}
                href={l.href}
                className="text-white hover:text-white transition-colors no-underline text-sm font-medium"
              >
                {l.label}
              </a>
            );
          })}
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
        <div className="md:hidden bg-[#111] border-t border-[#222] px-6 py-4 pb-6 flex flex-col">
          {navLinks.map((l) => {
            if (l.isDropdown) {
              return (
                <div key={l.label} className="border-b border-[#222]">
                  <button 
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="w-full text-white/80 py-3 text-[15px] flex justify-between items-center bg-transparent border-none cursor-pointer"
                  >
                    {l.label}
                    <ChevronDown size={18} className={`transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="flex flex-col ml-4 pb-2">
                      {games.map(game => (
                        <Link 
                          key={game.id} 
                          to={`/jogo/${game.id}`}
                          onClick={() => setMenuOpen(false)}
                          className="text-white/60 hover:text-white py-2.5 text-[14px] no-underline transition-colors"
                        >
                          {game.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            if (l.path) {
              return (
                <Link
                  key={l.label}
                  to={l.path}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white/80 hover:text-white py-3 text-[15px] border-b border-[#222] no-underline transition-colors"
                >
                  {l.label}
                </Link>
              );
            }
            return (
              <a
                key={l.label}
                href={l.href}
                className="block text-white/80 hover:text-white py-3 text-[15px] border-b border-[#222] no-underline transition-colors"
              >
                {l.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}