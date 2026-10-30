import { Link } from "react-router-dom";
import { games } from "../data/games";

export default function Footer() {
  return (
    <footer className="bg-[#08060C] px-6 pb-8 pt-16 md:pt-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <Link to="/" className="inline-flex no-underline">
              <img
                src="/unibits-logo.png"
                alt="Unibits"
                className="h-14 w-auto object-contain"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/50">
              Estúdio brasileiro de jogos. Criamos experiências originais para jogar, explorar e
              compartilhar.
            </p>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">Explore</h2>
            <div className="mt-5 flex flex-col items-start gap-3">
              <Link to="/#sobre" className="text-sm text-white/60 no-underline transition-colors hover:text-white">Sobre a Unibits</Link>
              <Link to="/#nossos-jogos" className="text-sm text-white/60 no-underline transition-colors hover:text-white">Nossos jogos</Link>
              <Link to="/#contatos" className="text-sm text-white/60 no-underline transition-colors hover:text-white">Contato</Link>
              <Link to="/privacidade" className="text-sm text-white/60 no-underline transition-colors hover:text-white">Política de Privacidade</Link>
            </div>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-white/50">Jogos</h2>
            <div className="mt-5 flex flex-col items-start gap-3">
              {games.map((game) => (
                <Link
                  key={game.id}
                  to={`/jogo/${game.id}`}
                  className="text-sm text-white/60 no-underline transition-colors hover:text-white"
                >
                  {game.title}
                  {game.isComingSoon && <span className="ml-2 text-xs text-white/50">Em breve</span>}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">© Unibits™ 2026. Todos os direitos reservados.</p>
          <p className="m-0">
            Desenvolvido por{" "}
            <a href="https://mekimi.com.br" target="_blank" rel="noopener noreferrer" className="font-bold text-white/55 no-underline transition-colors hover:text-white">
              Mekimi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
