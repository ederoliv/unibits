export interface GameFeature {
  title: string;
  description: string;
}

export interface GameInfo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroDescription: string;
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
    heroDescription: "O simulador definitivo de grau com realismo nas manobras. Customize sua moto e domine as ruas do Brasil.",
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
    heroDescription: "Vive a vida de piloto em um mundo aberto. Trabalhe, customize e realize as manobras mais radicais.",
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
    id: "patrulha-244",
    title: "Patrulha 244",
    subtitle: "Perseguições de tirar o fôlego sem lei",
    description: "O asfalto virou território sem lei, mas a brincadeira acabou. O governo do Estado formou a \"Patrulha 244\", uma unidade especial da polícia focada em uma única missão: tolerância zero contra manobras perigosas e fugas em vias públicas. Em Patrulha 244, você assume o papel de um oficial de elite em perseguições de tirar o fôlego. Sem suporte aéreo ou bloqueios, aqui é você contra o infrator. O sucesso depende da sua habilidade no guidão ou no volante para não deixar ninguém escapar.",
    heroDescription: "A lei está voltando para as ruas. Você é um policial de elite em perseguições perigosas.",
    featuresTitle: "Recursos do Jogo:",
    features: [
      {
        title: "Escolha seu estilo",
        description: "Assuma o controle de viaturas e motos, cada uma com dirigibilidade única para diferentes tipos de perseguição."
      },
      {
        title: "Ambiente urbano desafiador",
        description: "Patrulhe ruas e avenidas dinâmicas onde cada curva pode ser decisiva para a captura."
      },
      {
        title: "Perseguições em tempo real",
        description: "Sinta a adrenalina de caçar fugitivos que usam o tráfego e becos para tentar te despistar."
      },
      {
        title: "Foco na perícia",
        description: "Domine a arte de interceptar veículos em alta velocidade sem perder o controle."
      }
    ],
    conclusion: "O \"grau\" acabou. É hora de colocar a ordem de volta nas ruas.",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.Unibits.Patrulha244",
    iconSrc: "https://play-lh.googleusercontent.com/ip63AnDGCj8HxsiAiEfKoRDyq9arqcEYKDIOVXd25TeIP7NasrCTN5Pea8_J4YE8KnXmeMkpXi7b8cb8nonBIw=w240-h480-rw",
    banners: [
      "https://play-lh.googleusercontent.com/gxI08VONWgfYCOqv7UcAChRBwtw3KTK_OE_fsgd7pvvjmWDjWlGLrAqJdwucCo-a2e0bbYAxUQflrQ88bjS2TwA=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/FFMpFxLmKCI-2JRV2xXZNhEiLzevHwGqVmDhVN1czoNQKVi1NlVCFYIEfCw-F_vAzwK_hfIokvBuN8K2vXtsvw=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/lCGWbecgRlBU_AhG0nie5Wyb3mY7q4pEzjp59j8Ikc2d2zRE_E9kpP1bbkT2_js9Y4BHtan5H5PDptTI3j8j=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/0UVJUNAJhCFiC2pXOHFzEMjzp7UBBajDnEPuUW5e6Sejdz89a2yFDyKr7naY4XzVji8Hc_XshmYaEPp3KEZq=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/hIJdWScOn5x90kAuAOoLq-ylyY3FJc2cVSBCKdlTefqzHnfGXvcomzlE_DxeW2k2i4L0LUKZ1Csa4MBSB_P_Vg=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/GMfwn1AI2bv-z6ohGc_qTn3l2nus0EyaWF-1RpWzuzFVuQQCNnMTtg1E3gL34H_cdJ_Gu17SaazhRM5q_HC4EQ=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/zQom3TvxeGCDYdS7o5nRSgnXCG6Anj2bGD4SW-SaxTCcGCne7-lo8FzQEaQauTCBpDBPDWfuiSxzdA0eWUMIDBA=w2560-h1440-rw"
    ]
  }
];
