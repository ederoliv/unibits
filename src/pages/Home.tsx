import { ArrowDown, ArrowUpRight, Camera, MessageCircle, MonitorPlay } from "lucide-react";
import { Link } from "react-router-dom";
import { games } from "../data/games";
import HeroCarousel from "../components/HeroCarousel";

const studioPillars = [
  {
    number: "01",
    title: "Feitos para jogar",
    description: "Experiências mobile pensadas para serem divertidas, acessíveis e fáceis de levar com você.",
  },
  {
    number: "02",
    title: "Brasil em cada projeto",
    description: "Criamos jogos inspirados nas paisagens, nos veículos e na cultura que fazem parte do nosso dia a dia.",
  },
  {
    number: "03",
    title: "Sempre em evolução",
    description: "Ouvimos a comunidade e trabalhamos para que cada projeto continue crescendo com o tempo.",
  },
];

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <section id="sobre" className="scroll-mt-20 bg-[#202020] px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-[1fr_1.1fr] md:items-end md:gap-20">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#ffbd3f]">
              Quem somos
            </p>
            <h2 className="max-w-[600px] text-[clamp(2.6rem,6vw,5.5rem)] font-light italic leading-[0.98] tracking-[-0.06em] text-white">
              Isso define a{" "}
              <span className="font-black not-italic text-[#ffbd3f]">Unibits.</span>
            </h2>
          </div>
          <div className="max-w-[620px]">
            <p className="text-lg leading-relaxed text-white/85 md:text-xl">
              Somos uma equipe brasileira de desenvolvimento de jogos, criando experiências
              originais que levam o Brasil para dentro do universo dos games.
            </p>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              Com foco em jogos mobile, unimos entretenimento, otimização e atenção aos detalhes
              em cada projeto.
            </p>
            <a
              href="#nossos-jogos"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#ffbd3f] no-underline transition-colors hover:text-white"
            >
              Conheça nossos jogos <ArrowDown size={16} />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-20 grid max-w-[1200px] gap-3 md:grid-cols-3">
          {studioPillars.map((pillar) => (
            <article key={pillar.number} className="rounded-3xl bg-[#1a1a1a] p-7 md:p-9">
              <span className="text-sm font-bold tracking-widest text-[#ffbd3f]">{pillar.number}</span>
              <h3 className="mt-8 text-xl font-bold text-white">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/55">{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="nossos-jogos" className="scroll-mt-20 bg-[#171717] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#ffbd3f]">
                Nosso portfólio
              </p>
              <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-none tracking-[-0.05em] text-white">
                Nossos jogos<span className="text-[#ffbd3f]">.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/55 md:text-right">
              Mundos e experiências diferentes, criados para quem gosta de jogar do seu jeito.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {games.map((game) => (
              <Link
                key={game.id}
                to={`/jogo/${game.id}`}
                className="group overflow-hidden rounded-3xl bg-[#202020] no-underline transition-all duration-300 hover:-translate-y-1 hover:bg-[#262626]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#292929]">
                  <img
                    src={game.banners[0]}
                    alt={`Imagem de ${game.title}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.src = game.iconSrc;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  {game.isComingSoon && (
                    <span className="absolute left-5 top-5 rounded-full bg-[#ffbd3f] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-[#171717]">
                      Em breve
                    </span>
                  )}
                  <div className="absolute bottom-5 left-5 flex items-center gap-4 md:bottom-7 md:left-7">
                    <img
                      src={game.iconSrc}
                      alt=""
                      className="h-14 w-14 rounded-2xl object-cover shadow-xl md:h-16 md:w-16"
                    />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-[#ffbd3f]">
                        {game.isComingSoon ? "Novo projeto" : "Jogo mobile"}
                      </p>
                      <h3 className="mt-1 text-xl font-black text-white md:text-2xl">{game.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 p-5 md:p-7">
                  <p className="m-0 text-sm leading-relaxed text-white/60">{game.heroDescription}</p>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#ffbd3f] transition-colors group-hover:bg-[#ffbd3f] group-hover:text-[#171717]">
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="contatos" className="scroll-mt-20 bg-[#202020] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1000px] rounded-[2rem] bg-[#191919] px-6 py-12 text-center md:px-16 md:py-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#ffbd3f]">
            Vamos conversar
          </p>
          <h2 className="mx-auto max-w-3xl text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.05] tracking-[-0.05em] text-white">
            A próxima história começa com você.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/55 md:text-base">
            Acompanhe os projetos da Unibits, fale com a equipe e faça parte da comunidade.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="https://www.youtube.com/@Unibits"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-[#ffbd3f]/10 hover:text-[#ffbd3f]"
            >
              <MonitorPlay size={18} /> YouTube
            </a>
            <a
              href="https://www.instagram.com/unibitsstudios"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-[#ffbd3f]/10 hover:text-[#ffbd3f]"
            >
              <Camera size={18} /> Instagram
            </a>
            <a
              href="https://discord.com/invite/agyd4n5PUE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 px-5 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-[#ffbd3f]/10 hover:text-[#ffbd3f]"
            >
              <MessageCircle size={18} /> Discord
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
