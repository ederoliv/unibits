export interface GameFeature {
  title: string;
  description: string;
}

export interface GameInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  featuresTitle: string;
  features: GameFeature[];
  conclusion: string;
  playStoreUrl: string;
  iconSrc: string;
  banners: string[];
}

export const games: GameInfo[] = [
  {
    id: "pocket-grau",
    title: "Pocket Grau - Online",
    subtitle: "A Adrenalina do Grau na Palma da Sua Mão",
    description: "O Pocket Grau é o simulador definitivo para quem vive a cultura das ruas brasileiras. Com foco total no realismo das manobras, o jogo permite que você domine a arte de empinar com precisão e estilo. Explore um ambiente virtual vibrante, sinta a física realista em cada \"chamada\" e conecte-se com outros pilotos em uma experiência online única.",
    featuresTitle: "O que você encontra:",
    features: [
      {
        title: "Customização Sem Limites",
        description: "Modifique tudo, da \"churrasqueira\" ao escapamento. Remova carenagens e deixe a moto com a cara da favela."
      },
      {
        title: "Física de Ponta",
        description: "Execute manobras como pé no chão, perna cruzada e o clássico \"grau\" com respostas imediatas aos comandos."
      },
      {
        title: "Garagem Completa",
        description: "Das populares Pop e CG até as lendárias motos de trilha e esportivas de alta cilindrada."
      },
      {
        title: "Mundo Vivo",
        description: "Encontre amigos no modo online e participe de rolês pelas ruas do mapa."
      }
    ],
    conclusion: "Prepare sua nave e mostre quem manda na quebrada!",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.Unibits.PocketGrau",
    iconSrc: "/icons/pocket-grau.png", // Placeholder
    banners: [
      "/images/pocket-grau-1.jpg", // Placeholders
      "/images/pocket-grau-2.jpg",
      "/images/pocket-grau-3.jpg",
    ]
  },
  {
    id: "moto-grau-br",
    title: "Moto Grau BR",
    subtitle: "Sinta o Ronco e Domine a Cidade",
    description: "Focado na imersão e na variedade, o Moto Grau BR leva a pilotagem mobile a outro nível. Mais do que apenas manobras, aqui você vive a rotina de um verdadeiro piloto: desde a manutenção na oficina até o trabalho nas ruas para conquistar sua próxima moto de luxo. Com gráficos otimizados e suporte a controles, a liberdade é total.",
    featuresTitle: "Destaques da Experiência:",
    features: [
      {
        title: "Frota de Elite",
        description: "Pilote ícones como a Titã 2025, XT660, África Twin e a imponente BMW X 900."
      },
      {
        title: "Vida de Entregador",
        description: "Utilize o sistema de trabalho para ganhar dinheiro, gerencie suas finanças pelo celular in-game e garanta seu seguro."
      },
      {
        title: "Realismo Absoluto",
        description: "Corte de giro autêntico e animações de manobras que replicam os movimentos reais dos pilotos profissionais."
      },
      {
        title: "Imersão Total",
        description: "Jogue em primeira pessoa para sentir cada curva ou use seu joystick favorito para uma gameplay de console no celular."
      }
    ],
    conclusion: "Trabalhe, conquiste e empine com estilo.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.Unibits.MotoGrau", // replace with correct store link later if needed
    iconSrc: "/icons/moto-grau.png", // Placeholder
    banners: [
      "/images/moto-grau-1.jpg", // Placeholders
      "/images/moto-grau-2.jpg",
      "/images/moto-grau-3.jpg",
    ]
  },
  {
    id: "grau-chapa-br",
    title: "Grau e Chapa BR",
    subtitle: "Mundo Aberto, Vida Real e Muita Manobra",
    description: "O Grau e Chapa BR é o encontro perfeito entre simulação de vida e adrenalina sobre rodas. Em um mapa de mundo aberto que mistura o clima urbano e rural do Brasil, você decide seu destino. Seja personalizando sua moto na oficina ou acelerando carros rebaixados, o jogo entrega uma experiência completa e leve, feita para rodar em qualquer dispositivo.",
    featuresTitle: "Por que jogar:",
    features: [
      {
        title: "Cultura das Ruas",
        description: "Um universo que respira o cotidiano brasileiro, com carros icônicos, motos e casas que servem de base para o jogador."
      },
      {
        title: "Economia Ativa",
        description: "Comece do zero, realize entregas e progrida até colecionar SUVs e as motos mais potentes do mercado."
      },
      {
        title: "Mecânicas Avançadas",
        description: "Sistema de embreagem real para cortes de giro precisos e manobras complexas como \"suicida\" e \"pé no banco\"."
      },
      {
        title: "Leve e Acessível",
        description: "Alta fidelidade gráfica projetada para manter o desempenho estável em diversos modelos de smartphones."
      }
    ],
    conclusion: "Sua vida, suas regras, seu grau.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.Unibits.GrauEChapa", // replace with correct store link later if needed
    iconSrc: "/icons/grau-chapa.png", // Placeholder
    banners: [
      "/images/grau-chapa-1.jpg", // Placeholders
      "/images/grau-chapa-2.jpg",
      "/images/grau-chapa-3.jpg",
    ]
  }
];
