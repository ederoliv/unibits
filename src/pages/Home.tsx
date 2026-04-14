import { MonitorPlay, Camera, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden w-full pt-32 pb-20">
        
        {/* Background Image Full Bleed */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img 
            src="/pocket_grau-banner.png" 
            alt="Banner principal" 
            className="w-full h-full object-cover" 
          />
          {/* Overlay escuro leve para garantir leitura do texto */}
          <div className="absolute inset-0 bg-[#0b0b0b]/50" />
        </div>

        {/* Background gradient decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,138,0,0.15)_0%,transparent_70%)]" />

        <div className="relative z-10 max-w-[1440px]">
          <span className="text-[12px] font-bold tracking-[3px] text-[#ff8a00] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Unibits Studios
          </span>
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-black leading-[1.05] my-4 md:my-6 tracking-[-2px] drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]">
            Domine as Ruas
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.3rem)] text-white max-w-[560px] mx-auto mb-10 leading-[1.6] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
            Sinta a adrenalina do grau na palma da sua mão. Personalize sua moto e mostre quem manda na quebrada.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/jogo/pocket-grau"
              className="bg-white text-black px-9 py-3.5 rounded-full font-bold no-underline text-sm tracking-[0.5px] hover:bg-neutral-200 transition-colors"
            >
              CONHEÇA
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.Unibits.PocketGrau"
              className="bg-white text-black px-9 py-3.5 rounded-full font-bold no-underline text-sm tracking-[0.5px] hover:bg-neutral-200 transition-colors"
              target="_blank"
            >
              Ver na Play Store
            </a>
          </div>
        </div>
      </section>

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
