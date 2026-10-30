import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { games } from "../data/games";
import { ArrowDown, ArrowUpRight } from "lucide-react";

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
    <section className="relative isolate overflow-hidden bg-[#100D18] px-6 pb-16 pt-32 md:pb-20 md:pt-36">
      <div className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-[#B84DFF]/15 blur-[120px]" />
      <div className="mx-auto grid min-h-[480px] max-w-[1200px] items-center gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div key={game.id} className="relative z-10 hero-copy">
          <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#B84DFF]">
            <span className="h-px w-8 bg-[#B84DFF]" />
            Unibits Studios
          </p>
          <h1 className="max-w-[620px] text-[clamp(3rem,7vw,6.8rem)] font-black leading-[0.9] tracking-[-0.07em] text-white">
            {game.title}<span className="text-[#B84DFF]">.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-semibold leading-snug text-white/85 md:text-2xl">
            {game.subtitle}
          </p>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/55 md:text-base">
            {game.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to={`/jogo/${game.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-[#B84DFF] px-6 py-3.5 text-sm font-black uppercase tracking-wide text-[#100D18] no-underline transition-transform hover:-translate-y-0.5"
            >
              Conheça <ArrowUpRight size={17} />
            </Link>
            {game.isComingSoon ? (
              <span className="rounded-full bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white/60">
                Em breve
              </span>
            ) : (
              <a
                href={game.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white no-underline transition-colors hover:bg-white/10 hover:text-[#B84DFF]"
              >
                Play Store
              </a>
            )}
          </div>
        </div>

        <div key={`${game.id}-art`} className="relative">
          <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] bg-[#201A2B] shadow-2xl">
            <img
              src={game.banners[0]}
              alt={`Imagem de ${game.title}`}
              className="h-full w-full object-cover"
              onError={(event) => {
                event.currentTarget.src = game.iconSrc;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 md:bottom-7 md:left-7">
              <img src={game.iconSrc} alt="" className="h-12 w-12 rounded-xl object-cover shadow-lg md:h-14 md:w-14" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/85">
                {game.isComingSoon ? "Em desenvolvimento" : "Conheça o jogo"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-[1200px] items-center justify-between pt-5">
        <a href="#sobre" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/45 no-underline transition-colors hover:text-white">
          Role para explorar <ArrowDown size={15} />
        </a>
        <div className="flex items-center gap-2" aria-label="Escolher jogo em destaque">
          {games.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-[#B84DFF]" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Mostrar ${item.title}`}
              aria-pressed={index === currentIndex}
            />
          ))}
        </div>
        <span className="hidden text-xs font-bold tracking-widest text-white/35 sm:block">
          {String(currentIndex + 1).padStart(2, "0")} / {String(games.length).padStart(2, "0")}
        </span>
      </div>
      <style>{`
        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-copy { animation: heroReveal 450ms ease-out; }
        @media (prefers-reduced-motion: reduce) {
          .hero-copy { animation: none; }
        }
      `}</style>
    </section>
  );
}
