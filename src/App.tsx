import { useState, type ReactNode } from "react";
import { ImageIcon, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ─── Types ───────────────────────────────────────────────────────────────────
interface FaqItem {
  question: string;
  answer: ReactNode;
}

interface Feature {
  title: string;
  description: string;
  hasButton?: { label: string; href: string };
  reverse?: boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const devlogs = [
  { title: "IMPUNES agora na Steam!", href: "https://2nibble.com/impunes-agora-na-steam/" },
  { title: "IMPUNES Devlog: Objetos e vegetação", href: "https://2nibble.com/impunes-devlog-objetos-e-vegetacao/" },
  { title: "IMPUNES Devlog: Resumo 2022 até 2024", href: "https://2nibble.com/impunes-devlog-resumo-2022-ate-2024/" },
];

const projects = [
  { title: "IMPUNES", href: "https://2nibble.com/impunes/" },
  { title: "BUG", href: "https://2nibble.com/bug/" },
  { title: "WARPUNK", href: "https://2nibble.com/warpunk/" },
  { title: "NPD", href: "https://2nibble.com/npd/" },
];

const mediaLinks = [
  { label: "G1 Globo", href: "https://g1.globo.com/sc/santa-catarina/noticia/2024/02/17/gta-brasileiro-balneario-camboriu.ghtml" },
  { label: "Tecmundo", href: "https://www.tecmundo.com.br/voxel/502070-impunes-jogo-ao-estilo-gta-brasileiro-ganha-trailer-e-pagina-oficial-na-steam.htm" },
  { label: "Techtudo", href: "https://www.techtudo.com.br/noticias/2024/02/impunes-conheca-novo-jogo-de-acao-que-promete-ser-o-gta-brasileiro-edjogos.ghtml" },
  { label: "FlowGames", href: "https://flowgames.gg/impunes-gta-brasileiro-ganha-pagina-na-steam/" },
  { label: "NSC Total", href: "https://www.nsctotal.com.br/noticias/impunes-quer-ser-um-gta-brasileiro-com-mais-roleplay-e-participacao-da-comunidade" },
];

const features: Feature[] = [
  {
    title: "Bem vindo a Canário",
    description: "IMPUNES é um jogo de mundo aberto ambientado no Brasil, na cidade fictícia de Canário - Santa Camila, inspirada em Balneário Camboriú e Camboriú - Santa Catarina.",
  },
  {
    title: "Seja livre",
    description: "Um projeto focado no longo prazo, para uma experiência rica em conteúdo e inovadora em mecânicas, com atenção aos detalhes.",
    reverse: true,
  },
  {
    title: "Dentro ou fora da lei",
    description: "Roleplay-sandbox onde você escolhe suas direções e regras de jogo: Roube! Destrua! Ou só interprete um trabalhador. Prefere uma jogabilidade mais realista ou não? Você escolhe!",
    hasButton: { label: "Entenda como será a jogabilidade", href: "https://2nibble.com/gameplay/" },
  },
  {
    title: "Crie o seu próprio personagem",
    description: "Jogue como homem ou mulher; gordo ou magro; velho ou jovem... Dezenas de peças de roupas, ajustes corporais; centenas de estampas, tatuagens, etc.",
    hasButton: { label: "Confira nosso criador de personagem", href: "https://2nibble.com/characters/" },
    reverse: true,
  },
  {
    title: "Conteúdo da comunidade",
    description: "A comunidade do jogo, ou nós mesmos, podemos expandi-lo facilmente com novos assets, mecânicas, trabalhos ou até mesmo missões e múltiplas histórias! Graças ao nosso sistema amigável de scripting externo.",
    hasButton: { label: "Entenda como serão os conteúdos do IMPUNES", href: "https://2nibble.com/content/" },
  },
  {
    title: "Mundo aberto completo",
    description: "Uma cidade de 3 quilômetros de extensão com tudo o que uma cidade real tem que ter: Zonas residenciais, comerciais e industriais, rodovias, morros, florestas, praia, mar, rio... Inclui zona rural nos planos finais.",
    hasButton: { label: "Conheça nossa ambientação", href: "https://2nibble.com/world/" },
    reverse: true,
  },
  {
    title: "Gráficos imersivos",
    description: "IMPUNES não é um jogo focado em gráficos de última geração, mas buscamos proporcionar uma experiência de alto polimento e qualidade.",
  },
  {
    title: "Veículos brasileiros",
    description: "Carros, motos, bicicletas, triciclos, caminhões, ônibus, barcos... Com variações, customização e mecânicas detalhadas, como poeira, lama, desgaste, pingos de chuva, etc.",
    hasButton: { label: "Confira nossas mecânicas de veículos", href: "https://2nibble.com/vehicles/" },
    reverse: true,
  },
  {
    title: "Armas brasileiras",
    description: "Pistolas, revolveres, fuzis, submetralhadoras, espingardas, lança-foguetes, explosivos, armas brancas, artesanais, etc. Com física balística e alto nível de mecânicas e personalização.",
    hasButton: { label: "Confira nossas mecânicas de armas", href: "https://2nibble.com/weapons/" },
  },
  {
    title: "A maior representação já vista da natureza brasileira",
    description: "IMPUNES não é só cidade, mas também natureza! Quase toda a vegetação, e todos os animais, representam fielmente a vasta fauna e flora do sul do Brasil.",
    hasButton: { label: "Confira as vegetações e objetos do jogo", href: "https://2nibble.com/impunes-devlog-objetos-e-vegetacao/" },
    reverse: true,
  },
  {
    title: "Atividades",
    description: "Jogabilidade focada em muitas mecânicas e coisas para explorar e fazer. Um projeto de jogo que será atualizado e expandido indefinitivamente!",
  },
  {
    title: "Qualidade técnica",
    description: "Equipe conhecida pela alta qualidade técnica, buscando otimização e funcionalidades modernas, como 4K60, ultra widescreen, raytracing de áudio, GPU-driven, muitas opções gráficas para diferentes hardwares, etc.",
    hasButton: { label: "Confira mais detalhes específicos", href: "https://2nibble.com/impunes/details/" },
    reverse: true,
  },
];

const faqItems: FaqItem[] = [
  {
    question: "Como apoiar vocês?",
    answer: (
      <>
        Você pode doar por Pix ou outros métodos. Mais informações na{" "}
        <a href="https://2nibble.com/donate/" className="text-[#ff8a00] hover:underline">
          página de doação
        </a>
        , você inclusive recebe recompensas ao apoiar o projeto IMPUNES!
      </>
    ),
  },
  {
    question: "Quais são os membros da equipe?",
    answer: (
      <>
        Os desenvolvedores da 2nibble são muito cíclicos, portanto até o momento (2025) não estamos listando eles. Eles são listados em{" "}
        <a href="https://2nibble.com/news/" className="text-[#ff8a00] hover:underline">postagens de devlog</a> e créditos dos jogos que lançamos, e lançaremos.
        <br /><br />
        Em jogos já lançados por nós, até o momento, temos Valdir Júnior (Junior_Djjr, criador do site MixMods e co-fundador da 2nibble), Chrystian Farias (programador sênior de uma subsidiária e MVP da Microsoft), Lameque (Meck) e Vitor Kuhn.
        <br /><br />
        No momento, a quantidade de desenvolvedores do IMPUNES ativos constantes normalmente é de 2 ou 3, e no total são 5 ou 6. A equipe trabalha remotamente de diferentes partes do Brasil, tudo isso no tempo livre, sem salários, acreditando no potencial futuro.
      </>
    ),
  },
  {
    question: "Quando o IMPUNES lança?",
    answer: (
      <>
        Ainda sem data, e devido ao financiamento coletivo ser abaixo do esperado, a data prevista para um lançamento para PC na Steam ficou para 2027, mas a partir de 2025 pretendemos começar a lançar versões "demo" aos apoiadores, e você pode{" "}
        <a href="https://2nibble.com/donate/" className="text-[#ff8a00] hover:underline">apoiar aqui</a>{" "}
        para testar o jogo antes de todo mundo, além de acompanhar o projeto em contato exclusivo com os desenvolvedores!
      </>
    ),
  },
];

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#0B0B0B] text-white font-['Inter',system-ui,sans-serif] w-full min-h-screen flex flex-col">
      {/* ── NAVBAR ──────────────────────────────────────────────────────────── */}
      <Navbar />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center text-center py-20 px-6 relative overflow-hidden w-full">
        {/* Background gradient decoration */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(255,138,0,0.13)_0%,transparent_70%)]" />

        <div className="w-full max-w-[1440px] px-0 lg:px-8 xl:px-16 2xl:px-24">
           <ImgPlaceholder label="Banner principal — IMPUNES" />
        </div>

        <div className="relative z-10 mt-16 max-w-[1440px]">
          <span className="text-[12px] font-bold tracking-[3px] text-[#ff8a00] uppercase">
            2nibble Studios
          </span>
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-black leading-[1.05] my-4 md:my-6 tracking-[-2px]">
            Apoie o jogo
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.3rem)] text-white/70 max-w-[560px] mx-auto mb-10 leading-[1.6]">
            Receba recompensas ao ajudar o jogo IMPUNES a ser desenvolvido
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://2nibble.com/impunes/"
              className="bg-white text-black px-9 py-3.5 rounded-md font-bold no-underline text-sm tracking-[0.5px] hover:bg-neutral-200 transition-colors"
            >
              CONHEÇA
            </a>
            <a
              href="https://2nibble.com/donate/"
              className="bg-[#ff8a00] text-black px-9 py-3.5 rounded-md font-bold no-underline text-sm tracking-[0.5px] hover:bg-[#e07900] transition-colors"
            >
              APOIE ❤️
            </a>
            <a
              href="https://store.steampowered.com/app/3820550/IMPUNES/"
              className="bg-transparent text-white border border-[#444] px-9 py-3.5 rounded-md font-bold no-underline text-sm tracking-[0.5px] hover:bg-white/5 transition-colors"
            >
              Ver na Steam
            </a>
          </div>
        </div>
      </section>

      {/* ── NA MÍDIA ────────────────────────────────────────────────────────── */}
      <section className="py-8 px-6 border-y border-[#222] w-full">
        <div className="max-w-[1440px] mx-auto">
          <p className="text-center text-white/40 text-[12px] font-bold tracking-[3px] uppercase mb-5">
            IMPUNES na mídia
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {mediaLinks.map((m) => (
              <a
                key={m.label}
                href={m.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 no-underline text-[13px] font-semibold py-2 px-4 border border-[#222] rounded-full transition-all duration-200 hover:border-[#ff8a00] hover:text-[#ff8a00]"
              >
                {m.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEVLOGS ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 w-full">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold mb-10 tracking-[-1px]">
            Últimas novidades
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
            {devlogs.map((d) => (
              <a
                key={d.title}
                href={d.href}
                className="no-underline text-white bg-[#111] border border-[#222] rounded-[10px] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-[#333] block group"
              >
                <div className="h-[160px] bg-[#161616] flex flex-col items-center justify-center gap-2 text-[#444] group-hover:bg-[#1a1a1a] transition-colors">
                  <ImageIcon size={28} />
                  <span className="text-[11px] tracking-[1px]">IMAGEM</span>
                </div>
                <div className="p-4">
                  <p className="font-bold text-[15px] leading-[1.4] m-0">{d.title}</p>
                </div>
              </a>
            ))}
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
              2nibble: de gamers para gamers
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-white/70 leading-[1.8] m-0 text-[15px]">
              Nós somos uma pequena empresa startup de amantes de jogos e modding, com uma paixão pela produção de trabalhos ambiciosos, de alta qualidade, que fiquem marcados na cultura dos jogos eletrônicos brasileiros.
            </p>
            <p className="text-white/70 leading-[1.8] m-0 text-[15px]">
              Somos gamers como você, com desejos, buscando algo diferente, novo, criativo, que gostaríamos de ver na área de games. Ainda trabalhando com baixo orçamento, mas já demonstrando potencial.
            </p>
          </div>
        </div>
      </section>

      {/* ── NOSSOS TRABALHOS ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 w-full">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold mb-10 tracking-[-1px]">
            Nossos trabalhos
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.href}
                className="no-underline text-white bg-[#111] border border-[#222] rounded-[10px] p-8 flex flex-col items-center gap-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#ff8a00]"
              >
                <div className="w-[60px] h-[60px] bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                  <ImageIcon size={24} className="text-[#444]" />
                </div>
                <span className="font-bold text-[16px] tracking-[1px]">{p.title}</span>
              </a>
            ))}
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
                      className="bg-white text-black px-7 py-3 rounded-md font-bold no-underline text-[13px] tracking-[0.3px] inline-block hover:bg-neutral-200 transition-colors"
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
                href="https://2nibble.com/donate/"
                className="bg-[#ff8a00] text-black px-10 py-3.5 rounded-md font-bold no-underline text-[15px] hover:bg-[#e07900] transition-colors inline-block"
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
            href="https://2nibble.com/impunes/"
            className="bg-white text-black px-9 py-3.5 rounded-md font-bold no-underline text-[14px] hover:bg-neutral-200 transition-colors inline-block"
          >
            Progresso do IMPUNES
          </a>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#0e0e0e] border-t border-[#222] w-full">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-center mb-12 tracking-[-1px]">
            Perguntas frequentes sobre o IMPUNES
          </h2>

          <div className="flex flex-col gap-3">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className={`bg-[#111] border rounded-[10px] overflow-hidden transition-colors ${openFaq === i ? 'border-[#333]' : 'border-[#222]'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full bg-transparent border-none text-white p-5 px-6 cursor-pointer flex justify-between items-center gap-4 text-[16px] font-bold text-left hover:bg-white/5 transition-colors"
                >
                  {item.question}
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-[#ff8a00] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-[#555] shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-white/70 leading-[1.8] text-[15px]">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-white/50 mb-6 text-[15px]">Ainda tem alguma dúvida?</p>
            <a
              href="https://2nibble.com/faq/"
              className="bg-white text-black px-8 py-3 rounded-md font-bold no-underline text-[14px] hover:bg-neutral-200 transition-colors inline-block"
            >
              Ver todas as perguntas e respostas
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}