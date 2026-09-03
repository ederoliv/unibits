import { MonitorPlay, Camera, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { games } from "../data/games";
import HeroCarousel from "../components/HeroCarousel";

export default function Home() {
  return (
    <>
      {/* ── HERO CAROUSEL ────────────────────────────────────────────────────── */}
      <HeroCarousel />

      {/* ── SOBRE ───────────────────────────────────────────────────────────── */}
      <section id="sobre" className="py-20 px-6 bg-[#0e0e0e] border-y border-[#222] w-full">
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center gap-10">
          <div>
            <span className="text-[12px] font-bold tracking-[3px] text-[#ff8a00] uppercase pt-4 block">
              Quem somos
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold mt-4 mb-0 leading-[1.1] tracking-[-1px]">
              Unibits: de gamers para gamers
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-white/70 leading-[1.8] m-0 text-[15px]">
              Somos uma equipe brasileira de desenvolvimento de jogos, focada em trazer o Brasil para o cenário mundial de games. Atualmente, utilizamos Unity® como motor gráfico, escolhida após uma criteriosa seleção para determinar a melhor opção para jogos mobile.
            </p>
            <p className="text-white/70 leading-[1.8] m-0 text-[15px]">
              Estamos comprometidos com o entretenimento e a otimização, sem comprometer a qualidade de nossos projetos. Nossa equipe é atualmente composta por um programador/modelador/game designer e um mapper.
            </p>
          </div>
        </div>
      </section>

      {/* ── NOSSOS JOGOS ──────────────────────────────────────────────────────── */}
      <section id="nossos-jogos" className="py-20 px-6 bg-[#111] border-y border-[#222] w-full">
        <div className="max-w-[800px] mx-auto flex flex-col items-center text-center gap-10">
          <div>
            <span className="text-[12px] font-bold tracking-[3px] text-[#ff8a00] uppercase pt-4 block">
              Nosso Portfólio
            </span>
            <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold mt-4 mb-0 leading-[1.1] tracking-[-1px]">
              Nossos Jogos
            </h2>
          </div>
          
          <div className="flex flex-col gap-6 w-full">
            {games.map(game => (
              <Link 
                key={game.id} 
                to={`/jogo/${game.id}`}
                className="flex items-center gap-6 p-4 md:p-6 bg-[#1a1a1a] border border-[#333] hover:border-[#ff8a00] rounded-[2rem] transition-all hover:bg-[#222] no-underline group text-left shadow-lg hover:-translate-y-1 w-full"
              >
                <img 
                  src={game.iconSrc} 
                  alt={game.title} 
                  className="w-20 h-20 md:w-28 md:h-28 rounded-2xl object-cover shadow-md group-hover:scale-105 transition-transform" 
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" rx="32" fill="%23222"/><text x="50" y="50" fill="%23ff8a00" font-family="sans-serif" font-weight="bold" font-size="20" text-anchor="middle" alignment-baseline="middle">APP</text></svg>';
                  }}
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-[1.3rem] md:text-2xl font-bold text-white mb-2 group-hover:text-[#ff8a00] transition-colors">{game.title}</h3>
                  <p className="text-white/60 text-[14px] md:text-[15px] leading-snug m-0">{game.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTATOS ────────────────────────────────────────────────────────── */}
      <section id="contatos" className="py-20 px-6 bg-[#0b0b0b] w-full border-b border-[#222]">
        <div className="max-w-[700px] mx-auto text-center">
          <span className="text-[12px] font-bold tracking-[3px] text-[#ff8a00] uppercase">
            Acompanhe a gente
          </span>
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold mt-4 mb-8 leading-[1.1] tracking-[-1px]">
            Nossos Contatos
          </h2>
          <p className="text-white/70 leading-[1.8] mb-12 text-[15px]">
            Fique por dentro das novidades, atualizações de desenvolvimento e converse com a comunidade!
          </p>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="https://www.youtube.com/@Unibits" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#111] hover:bg-[#ff0000] border border-[#333] hover:border-[#ff0000] transition-colors rounded-full px-6 py-3 text-white no-underline font-bold text-sm"
            >
              <MonitorPlay size={20} />
              YouTube
            </a>
            <a 
              href="https://www.instagram.com/unibitsstudios" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#111] hover:bg-[#e1306c] border border-[#333] hover:border-[#e1306c] transition-colors rounded-full px-6 py-3 text-white no-underline font-bold text-sm"
            >
              <Camera size={20} />
              Instagram
            </a>
            <a 
              href="https://discord.com/invite/agyd4n5PUE" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#111] hover:bg-[#5865F2] border border-[#333] hover:border-[#5865F2] transition-colors rounded-full px-6 py-3 text-white no-underline font-bold text-sm"
            >
              <MessageCircle size={20} />
              Discord
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
