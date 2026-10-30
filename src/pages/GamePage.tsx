import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { games } from "../data/games";
import Carousel from "../components/Carousel";

export default function GamePage() {
  const { id } = useParams<{ id: string }>();
  const game = games.find((item) => item.id === id);

  if (!game) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-[#202020] pb-20 pt-24 text-white md:pt-28">
      <section className="px-0 md:px-6">
        <div className="mx-auto max-w-[1200px]">
          <div className="relative overflow-hidden rounded-none bg-[#292929] md:rounded-[2rem]">
            <Carousel images={game.banners} />
            <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center bg-gradient-to-t from-black/70 via-black/20 to-black/20 px-6 text-center">
              <img
                src={game.iconSrc}
                alt={`Ícone ${game.title}`}
                className="mb-5 h-20 w-20 rounded-3xl object-cover shadow-2xl md:h-28 md:w-28"
                onError={(event) => {
                  event.currentTarget.src = "/unibits-logo.png";
                }}
              />
              {game.isComingSoon && (
                <span className="mb-3 rounded-full bg-[#ffbd3f] px-4 py-2 text-xs font-black uppercase tracking-wider text-[#171717]">
                  Em breve
                </span>
              )}
              <h1 className="text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-tight tracking-[-0.06em] text-white drop-shadow-lg">
                {game.title}<span className="text-[#ffbd3f]">.</span>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 pt-16 md:pt-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-white/50 no-underline transition-colors hover:text-[#ffbd3f]"
        >
          <ArrowLeft size={16} /> Voltar para Unibits
        </Link>

        <div className="mx-auto mt-12 max-w-[760px] text-center md:mt-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#ffbd3f]">
            {game.isComingSoon ? "Novo projeto" : "Jogo mobile"}
          </p>
          <h2 className="text-[clamp(1.7rem,4vw,3rem)] font-bold leading-tight tracking-[-0.04em] text-white">
            {game.subtitle}
          </h2>
          <p className="mt-6 text-base leading-[1.85] text-white/60 md:text-lg">
            {game.description}
          </p>
        </div>

        <div className="mt-20">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#ffbd3f]">
              Descubra
            </p>
            <h3 className="text-2xl font-black tracking-tight text-white md:text-3xl">
              {game.featuresTitle}
            </h3>
          </div>
          <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
            {game.features.map((feature, index) => (
              <article key={`${feature.title}-${index}`} className="rounded-3xl bg-[#191919] p-7 md:p-8">
                <h4 className="text-xl font-bold text-[#ffbd3f]">{feature.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-white/55 md:text-base">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] bg-[#191919] px-6 py-10 text-center md:mt-20 md:px-12 md:py-14">
          <p className="mx-auto max-w-2xl text-xl font-semibold leading-relaxed text-white md:text-2xl">
            {game.conclusion}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {game.isComingSoon ? (
              <span className="rounded-full bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-wider text-[#ffbd3f]">
                Em breve
              </span>
            ) : (
              <a
                href={game.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#ffbd3f] px-8 py-4 text-sm font-black uppercase tracking-wide text-[#171717] no-underline transition-transform hover:-translate-y-0.5"
              >
                Baixar na Play Store <ArrowUpRight size={17} />
              </a>
            )}
            {game.id === "pocket-grau" && (
              <a
                href="https://drive.google.com/drive/folders/1MjsuOIgr2kf-JulKPqkdqXBnaId7MjGO?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/5 px-8 py-4 text-sm font-bold text-white no-underline transition-colors hover:bg-white/10"
              >
                Skins padrão do Pocket Grau
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
