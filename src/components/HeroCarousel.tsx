import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { games } from "../data/games";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % games.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const game = games[currentIndex];

  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden w-full pt-32 pb-20">
      {/* Animated Background with current game banner */}
      <div className="absolute inset-0 w-full h-full z-0 transition-opacity duration-1000">
        <img 
          src={game.banners[0]} 
          alt={game.title} 
          className="w-full h-full object-cover" 
          onError={(e) => {
            e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 600"><rect width="1200" height="600" fill="%231a1a1a"/></svg>';
          }}
        />
        {/* Overlay escuro para garantir leitura do texto */}
        <div className="absolute inset-0 bg-[#0b0b0b]/60" />
      </div>

      {/* Background gradient decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,138,0,0.15)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-[1440px] w-full flex flex-col items-center">
        <span className="text-[12px] font-bold tracking-[3px] text-[#ff8a00] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Unibits Studios
        </span>
        
        <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black leading-[1.05] my-4 md:my-6 tracking-[-2px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)] animate-fade-in">
          {game.title}
        </h1>
        
        <p className="text-[clamp(0.9rem,2vw,1.2rem)] text-[#ff8a00] font-bold max-w-[600px] mx-auto mb-4 leading-[1.4] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {game.subtitle}
        </p>
        
        <p className="text-[clamp(0.85rem,1.8vw,1rem)] text-white/90 max-w-[680px] mx-auto mb-10 leading-[1.6] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          {game.description}
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            to={`/jogo/${game.id}`}
            className="bg-white text-black px-9 py-3.5 rounded-full font-bold no-underline text-sm tracking-[0.5px] hover:bg-neutral-200 transition-colors"
          >
            CONHEÇA
          </Link>
          <a
            href={game.playStoreUrl}
            className="bg-[#ff8a00] text-black px-9 py-3.5 rounded-full font-bold no-underline text-sm tracking-[0.5px] hover:bg-[#e07900] transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play Store
          </a>
        </div>

        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {games.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex 
                  ? "bg-[#ff8a00] w-8" 
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to game ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Animated fade-in keyframes */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
