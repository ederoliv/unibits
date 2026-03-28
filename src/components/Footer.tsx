import { useState } from "react";

const footerMenus = [
  {
    title: "Nossas Redes",
    links: [
      { label: "Facebook", href: "https://www.facebook.com/2nibble" },
      { label: "Instagram", href: "https://www.instagram.com/2nibble" },
      { label: "X", href: "https://twitter.com/2nibbleStudios" },
      { label: "Threads", href: "https://www.threads.net/@2nibble" },
      { label: "Youtube", href: "https://www.youtube.com/@2nibble" },
      { label: "TikTok", href: "https://www.tiktok.com/@2nibble" },
    ],
  },
  {
    title: "Utilidades",
    links: [
      { label: "Linktree", href: "https://linktr.ee/2nibble" },
      { label: "Downloads", href: "https://2nibble.com/downloads/" },
      { label: "FAQ", href: "https://2nibble.com/faq/" },
      { label: "Trabalhe conosco", href: "https://2nibble.com/contact" },
      { label: "Doação de material", href: "https://2nibble.com/donate/" },
    ],
  },
  {
    title: "Parceiros",
    links: [
      { label: "MixMods", href: "https://mixmods.com.br" },
      { label: "Vire nosso parceiro", href: "https://2nibble.com/contact" },
    ],
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-black border-t border-[#222] pt-16 px-6 pb-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-10 mb-14">
          {/* Logo + description */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-md bg-[#ff8a00] flex items-center justify-center font-black text-black text-sm">
                2N
              </div>
              <span className="font-bold text-base text-white">2nibble</span>
            </div>
            <p className="text-white/40 text-[13px] leading-relaxed m-0">
              Empresa startup brasileira desenvolvedora de jogos indie.
            </p>
          </div>

          {/* Menu columns */}
          {footerMenus.map((menu) => (
            <div key={menu.title}>
              <h4 className="text-[13px] font-bold tracking-[1.5px] uppercase text-white/50 mb-4">
                {menu.title}
              </h4>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {menu.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-white/50 hover:text-white no-underline text-sm transition-colors block"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-[13px] font-bold tracking-[1.5px] uppercase text-white/50 mb-4">
              Inscrever-se
            </h4>
            <p className="text-white/40 text-[13px] leading-relaxed mb-4">
              Assine nossa newsletter para ficar por dentro de novidades.
            </p>
            <div className="flex flex-col gap-2.5">
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#111] border border-[#222] rounded-md px-3.5 py-2.5 text-white text-sm outline-none focus:border-[#ff8a00] transition-colors"
              />
              <button
                className="bg-white text-black border-none rounded-md px-3.5 py-2.5 font-bold cursor-pointer text-[13px] hover:bg-white/90 transition-colors"
                type="button"
              >
                Inscrever
              </button>
            </div>
            <p className="text-white/30 text-[11px] mt-3 leading-relaxed">
              Ao assinar, você concorda com nossa{" "}
              <a href="https://2nibble.com/politica-de-privacidade/" className="text-white/50 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              .
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#222] pt-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-white/40 text-[13px] m-0">
            © 2nibble™ 2014-2026. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Instagram", "Facebook", "X", "Youtube"].map((s) => (
              <a
                key={s}
                href="https://2nibble.com/"
                className="text-white/40 hover:text-white no-underline text-[13px] transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
