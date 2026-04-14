import { ImageIcon } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { features } from "./data/siteData";

// ─── Reusable Components ─────────────────────────────────────────────────────
function ImgPlaceholder({ label = "Imagem", className = "" }: { label?: string; className?: string }) {
  return (
    <div
      className={`bg-gradient-to-br from-[#1a1a1a] to-[#111111] border border-[#2a2a2a] rounded-lg flex flex-col items-center justify-center gap-2 text-[#555] w-full min-h-[220px] p-6 ${className}`}
    >
      <ImageIcon size={36} className="text-[#3a3a3a]" />
      <span className="text-[12px] tracking-[1px] uppercase">{label}</span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="bg-[#0B0B0B] text-white font-['Inter',system-ui,sans-serif] w-full min-h-screen flex flex-col">
      {/* ── NAVBAR ──────────────────────────────────────────────────────────── */}
      <Navbar />

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
          <span className="text-[12px] font-bold tracking-[3px] text-[#ff8a00] uppercase">
            Unibits Studios
          </span>
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-black leading-[1.05] my-4 md:my-6 tracking-[-2px]">
            Domine as Ruas
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.3rem)] text-white max-w-[560px] mx-auto mb-10 leading-[1.6]">
            Sinta a adrenalina do grau na palma da sua mão. Personalize sua moto e mostre quem manda na quebrada.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://unibits.com/impunes/"
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
      <section className="py-20 px-6 bg-[#0e0e0e] border-y border-[#222] w-full">
        <div className="max-w-[1440px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-16 items-center">
          <div>
            <span className="text-[12px] font-bold tracking-[3px] text-[#ff8a00] uppercase">
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

      {/* ── IMPUNES FEATURES ────────────────────────────────────────────────── */}
      <section className="pt-10 px-6 pb-20 border-t border-[#222] w-full">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-[60px]">
            <span className="text-[12px] font-bold tracking-[3px] text-[#ff8a00] uppercase">
              Conheça o jogo
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black mt-3 mb-0 tracking-[-2px]">
              IMPUNES
            </h2>
          </div>

          <div className="flex flex-col gap-16">
            {features.map((f, i) => (
              <div
                key={i}
                style={{ direction: f.reverse ? "rtl" : "ltr" }}
                className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-10 items-center"
              >
                {/* Image placeholder */}
                <div style={{ direction: "ltr" }}>
                  <ImgPlaceholder label={f.title} />
                </div>

                {/* Text */}
                <div style={{ direction: "ltr" }}>
                  <h3 className="text-[clamp(1.4rem,3vw,2rem)] font-extrabold m-0 mb-4 leading-[1.2] tracking-[-0.5px]">
                    {f.title}
                  </h3>
                  <p className="text-white/70 leading-[1.8] m-0 mb-6 text-[15px]">
                    {f.description}
                  </p>
                  {f.hasButton && (
                    <a
                      href={f.hasButton.href}
                      className="bg-white text-black px-7 py-3 rounded-full font-bold no-underline text-[13px] tracking-[0.3px] inline-block hover:bg-neutral-200 transition-colors"
                    >
                      {f.hasButton.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — GOSTOU? ───────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0e0e0e] border-t border-[#222] w-full">
        <div className="max-w-[1080px] mx-auto">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#111] border border-[#222] rounded-2xl p-14 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(255,138,0,0.11)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#ff8a00] rounded-xl flex items-center justify-center mx-auto mb-6 font-black text-black text-[18px]">
                2N
              </div>
              <h2 className="text-[clamp(2rem,5vw,3rem)] font-black m-0 mb-4 tracking-[-1px]">
                Gostou?
              </h2>
              <p className="text-white/70 leading-[1.7] max-w-[560px] mx-auto mb-8 text-[15px]">
                Para que o projeto IMPUNES seja executado, precisamos do seu apoio! Faça sua doação por Pix e receba recompensas, como acesso exclusivo ao nosso Discord, key do jogo na Steam, acesso antecipado e mais!
              </p>
              <a
                href="https://unibits.com/donate/"
                className="bg-[#ff8a00] text-black px-10 py-3.5 rounded-full font-bold no-underline text-[15px] hover:bg-[#e07900] transition-colors inline-block"
              >
                Apoie ❤️
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACOMPANHE O PROGRESSO ───────────────────────────────────────────── */}
      <section className="py-20 px-6 text-center w-full">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold mb-4 tracking-[-1px]">
            Acompanhe o progresso
          </h2>
          <p className="text-white/70 leading-[1.8] mb-8 text-[15px]">
            Criamos uma página amigável para você ficar por dentro do progresso atual e planos futuros (roadmap) do nosso jogo IMPUNES!
          </p>
          <a
            href="https://unibits.com/impunes/"
            className="bg-white text-black px-9 py-3.5 rounded-full font-bold no-underline text-[14px] hover:bg-neutral-200 transition-colors inline-block"
          >
            Progresso do IMPUNES
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}