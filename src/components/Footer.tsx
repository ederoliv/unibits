import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#222] pt-16 px-6 pb-8">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          {/* Logo + description */}
          <Link to="/" className="flex justify-center mb-2 no-underline">
            <img 
              src="/unibits-logo.png" 
              alt="Logo Unibits" 
              className="h-16 w-auto object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]" 
              onError={(e) => e.currentTarget.style.display = 'none'} 
            />
          </Link>
          <p className="text-white/70 text-[15px] md:text-[17px] leading-relaxed m-0 font-medium max-w-[450px]">
            Empresa brasileira desenvolvedora de jogos indie.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="w-full border-t border-[#222] pt-6 flex flex-col justify-center items-center gap-4 text-center">
          <p className="text-white/40 text-[13px] m-0 w-full">
            © Unibits™ 2026. All rights reserved. 
            <span className="block md:inline mt-2 md:mt-0 md:ml-2">
              Desenvolvido por{' '}
              <a 
                href="https://mekimi.com.br" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-[#32e6e2] hover:text-[#5af3ef] transition-colors font-bold no-underline"
              >
                Mekimi
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
