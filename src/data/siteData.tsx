// ─── Types ───────────────────────────────────────────────────────────────────
export interface Feature {
  title: string;
  description: string;
  hasButton?: { label: string; href: string };
  reverse?: boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────────
export const mediaLinks = [
  { label: "G1 Globo", href: "https://g1.globo.com/sc/santa-catarina/noticia/2024/02/17/gta-brasileiro-balneario-camboriu.ghtml" },
  { label: "Tecmundo", href: "https://www.tecmundo.com.br/voxel/502070-impunes-jogo-ao-estilo-gta-brasileiro-ganha-trailer-e-pagina-oficial-na-steam.htm" },
  { label: "Techtudo", href: "https://www.techtudo.com.br/noticias/2024/02/impunes-conheca-novo-jogo-de-acao-que-promete-ser-o-gta-brasileiro-edjogos.ghtml" },
  { label: "FlowGames", href: "https://flowgames.gg/impunes-gta-brasileiro-ganha-pagina-na-steam/" },
  { label: "NSC Total", href: "https://www.nsctotal.com.br/noticias/impunes-quer-ser-um-gta-brasileiro-com-mais-roleplay-e-participacao-da-comunidade" },
];

export const features: Feature[] = [
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
    hasButton: { label: "Entenda como será a jogabilidade", href: "https://unibits.com/gameplay/" },
  },
  {
    title: "Crie o seu próprio personagem",
    description: "Jogue como homem ou mulher; gordo ou magro; velho ou jovem... Dezenas de peças de roupas, ajustes corporais; centenas de estampas, tatuagens, etc.",
    hasButton: { label: "Confira nosso criador de personagem", href: "https://unibits.com/characters/" },
    reverse: true,
  },
  {
    title: "Conteúdo da comunidade",
    description: "A comunidade do jogo, ou nós mesmos, podemos expandi-lo facilmente com novos assets, mecânicas, trabalhos ou até mesmo missões e múltiplas histórias! Graças ao nosso sistema amigável de scripting externo.",
    hasButton: { label: "Entenda como serão os conteúdos do IMPUNES", href: "https://unibits.com/content/" },
  },
  {
    title: "Mundo aberto completo",
    description: "Uma cidade de 3 quilômetros de extensão com tudo o que uma cidade real tem que ter: Zonas residenciais, comerciais e industriais, rodovias, morros, florestas, praia, mar, rio... Inclui zona rural nos planos finais.",
    hasButton: { label: "Conheça nossa ambientação", href: "https://unibits.com/world/" },
    reverse: true,
  },
  {
    title: "Gráficos imersivos",
    description: "IMPUNES não é um jogo focado em gráficos de última geração, mas buscamos proporcionar uma experiência de alto polimento e qualidade.",
  },
  {
    title: "Veículos brasileiros",
    description: "Carros, motos, bicicletas, triciclos, caminhões, ônibus, barcos... Com variações, customização e mecânicas detalhadas, como poeira, lama, desgaste, pingos de chuva, etc.",
    hasButton: { label: "Confira nossas mecânicas de veículos", href: "https://unibits.com/vehicles/" },
    reverse: true,
  },
  {
    title: "Armas brasileiras",
    description: "Pistolas, revolveres, fuzis, submetralhadoras, espingardas, lança-foguetes, explosivos, armas brancas, artesanais, etc. Com física balística e alto nível de mecânicas e personalização.",
    hasButton: { label: "Confira nossas mecânicas de armas", href: "https://unibits.com/weapons/" },
  },
  {
    title: "A maior representação já vista da natureza brasileira",
    description: "IMPUNES não é só cidade, mas também natureza! Quase toda a vegetação, e todos os animais, representam fielmente a vasta fauna e flora do sul do Brasil.",
    hasButton: { label: "Confira as vegetações e objetos do jogo", href: "https://unibits.com/impunes-devlog-objetos-e-vegetacao/" },
    reverse: true,
  },
  {
    title: "Atividades",
    description: "Jogabilidade focada em muitas mecânicas e coisas para explorar e fazer. Um projeto de jogo que será atualizado e expandido indefinitivamente!",
  },
  {
    title: "Qualidade técnica",
    description: "Equipe conhecida pela alta qualidade técnica, buscando otimização e funcionalidades modernas, como 4K60, ultra widescreen, raytracing de áudio, GPU-driven, muitas opções gráficas para diferentes hardwares, etc.",
    hasButton: { label: "Confira mais detalhes específicos", href: "https://unibits.com/impunes/details/" },
    reverse: true,
  },
];
