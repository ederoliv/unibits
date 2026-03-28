import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "https://2nibble.com/" },
  { label: "Notícias", href: "https://2nibble.com/news/" },
  { label: "Trabalhos", href: "https://2nibble.com/works" },
  { label: "Sobre", href: "https://2nibble.com/about/" },
  { label: "Downloads", href: "https://2nibble.com/downloads/" },
  { label: "FAQ", href: "https://2nibble.com/faq/" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0b0b0b]/95 backdrop-blur-md border-b border-[#222]">
      <div className="max-w-[1440px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="https://2nibble.com/" className="flex items-center gap-2.5 no-underline">
          <div className="w-8 h-8 rounded-md bg-[#ff8a00] flex items-center justify-center font-black text-black text-sm">
            2N
          </div>
          <span className="font-bold text-lg text-white tracking-tight">2nibble</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-white/70 hover:text-white transition-colors no-underline text-sm font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="https://2nibble.com/contact"
            className="bg-white text-black px-5 py-2 rounded-md font-bold text-[13px] tracking-wide no-underline hover:bg-white/90 transition-colors"
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
