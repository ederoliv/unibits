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
    iconSrc: "https://play-lh.googleusercontent.com/CXUHd_p6K57h6m8CEOVYT3Fdkb5kDzlNmDNGrBpwwrJ3eZAe-RMHbFSo_pJW8O8xNAdAyzPJa6IOzGdpFb1Qh8I=w240-h480-rw", // Placeholder
    banners: [
      "https://play-lh.googleusercontent.com/jo_unrrEPqweT6nohrf0t3DbF98hRT9D6B_5NPBWsG9Rnnf9MUgeBLacUA1HUwry70IAmhpNeEi7BN_2HYdt=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/0fJk4L30wrrntqsDzUK33C_aaRXtBqGlHP7Db2Idupkn3aq4m3xgFaQCeOj0Z8B3ZV17xlBlmekJv8j42NHkBYI=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/yGjE7Rk1A3xYsyoL-PlegQgnDrbkXsb-uwEreBLTH_u0n2PsU734180FpYAvU-tDB3QtLrVttC4nPWz4n0-r-g=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/Rt900JH0oJjFdKAmtfA6c-KPIsOmfEoNrv5AL1xCbEK-DD_DM1xhT4ajupN_T3qdfr5maOJalb9qsqzq4s7lsw=w2560-h1440-rw"
      
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
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.Unibits.MotoGrauBrasil", 
    iconSrc: "https://play-lh.googleusercontent.com/Eti6zDxukrYbompKRg_rCJyItB-T4jQIzg8EbRMC5yKBPnvxz3hkvBkeT18m7jh0UQ=w240-h480-rw",
    banners: [
      "https://play-lh.googleusercontent.com/MxjHBH1m-I603Nug9btVSB3f8W9-71yFCThOcdFIkXhMUAaIu0JTByrEQqIQv3nvtfUX=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/_gUw08FzAjSoBVfEA91RLx_BMJ4zbsZZBM7bXnCCxtakmuL1YZNa9uw9Z2AbPZcwQws=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/uDy9vir7WMtmEh0EJ6dm-rcJDJcSpXFEKsx5d2Cwbz12oxegZRGZ0-2gk7IEhfdY_-w=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/MUhXeexM8OhltAE2VDbKfxu_6rxyQF5j_mlL1lmliJFBUMhzj-Vswu_98TnrMS7U314l=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/08Ja8_-uV2uqNnfv_RwR0PBLhPN43Qkru8BEspaiiyxL7CR2MMo_tabuUNynV9bSRrM=w2560-h1440-rw",

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
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.Unibits.GrauChapaBR",
    iconSrc: "https://play-lh.googleusercontent.com/m4gdmQtwz1CYUYjB984FFS7ckaYEkxWLlVPdFfQAevfMm2IWNCjlNoME4tmgnXouHf5QtiaDfx3R1ZPlzyLYJXs=w240-h480-rw", // Placeholder
    banners: [
      "https://play-lh.googleusercontent.com/Vq0gaoGEG8XqwPuaoXzGCnCp67UkOcwo0moNnIN5OpKnPpkVUVyCHB-FDpx6zH5DgVLsLkY-pUjYKCGRT_31nQ=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/BJ0o1FgZT0p1aWv8pmGOD405h1_ODgU0Y8uH0XDYo75lY23NyDh-dudaSQtvgW1k5MhyGm1IgPqeh0nDFSWfr3U=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/RtzQ5lHcPvKlZ-zzUHjuYoyMsh5jUHV8kqGTHz0gRWxqhg-2ND-qSRwd4bzek2qbMvAKgI0swpOw5OHqSYWbLA=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/d2eeWafIyA3vcPWEKF9PWGXTYGuXhcL-Of4q7oNsj2Br7zEhRX_tPkEKGYnxDDt7aAmSqIdT7dR5ivF1Kb7TP5o=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/CNVp2WsZI7dALrYadvMIj3z3xCzk_IXH_uaVQLhPxYd6YWMgeQHCDfTUmM548b7MxJ4eC30zyoXntGYZNT1PaA=w2560-h1440-rw",
    ]
  }
];
