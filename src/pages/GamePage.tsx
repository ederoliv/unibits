import { useParams, Navigate } from "react-router-dom";
import { games } from "../data/games";
import Carousel from "../components/Carousel";

export default function GamePage() {
  const { id } = useParams<{ id: string }>();
  const game = games.find((g) => g.id === id);

  if (!game) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full flex flex-col">
      {/* Hero section with carousel and logo/title overlay */}
      <section className="relative w-full pt-28 pb-10 flex justify-center px-4">
        <div className="w-[95%] md:w-[70%] max-w-[1440px] relative rounded-[2.5rem] overflow-hidden border border-[#333] shadow-2xl">
          <Carousel images={game.banners} />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 px-6">
            <img 
              src={game.iconSrc} 
              alt={`Ícone ${game.title}`} 
              className="w-20 h-20 md:w-28 md:h-28 rounded-3xl shadow-2xl mb-4 md:mb-6 object-cover border border-[#222]" 
              onError={(e) => {
                 // Fallback icon placeholder if not provided
                 e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><rect width="100" height="100" rx="32" fill="%23222"/><text x="50" y="50" fill="%23ff8a00" font-family="sans-serif" font-weight="bold" font-size="20" text-anchor="middle" alignment-baseline="middle">APP</text></svg>';
              }}
            />
            <h1 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-tight text-white mb-2 tracking-[-1px] text-center drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              {game.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content section */}
      <section className="py-20 px-6 max-w-[900px] mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.5rem,4vw,2.5rem)] font-extrabold text-[#ff8a00] mb-6 leading-tight tracking-[-0.5px]">
            {game.subtitle}
          </h2>
          <p className="text-white/80 leading-[1.8] text-[16px] md:text-[18px]">
            {game.description}
          </p>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 border-b border-[#222] pb-4 inline-block px-8">
            {game.featuresTitle}
          </h3>
          <div className="flex flex-col gap-8 items-center">
            {game.features.map((feature, idx) => (
              <div key={idx} className="max-w-[700px]">
                <h4 className="text-[18px] font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-white/70 leading-[1.8] text-[15px] mx-auto">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 text-center bg-[#111] p-10 rounded-3xl border border-[#222]">
          <p className="text-[18px] text-white/90 font-medium mb-8 leading-relaxed">
            {game.conclusion}
          </p>
          <a
            href={game.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ff8a00] text-black px-10 py-4 rounded-full font-bold no-underline text-[16px] hover:bg-[#e07900] transition-transform hover:-translate-y-1 inline-block shadow-lg"
          >
            BAIXAR NA PLAY STORE
          </a>
        </div>
      </section>
    </div>
  );
}
