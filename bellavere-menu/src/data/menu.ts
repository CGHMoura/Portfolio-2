export interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "entradas",
    label: "Entradas",
    items: [
      {
        name: "Jiaozi de Porco",
        description: "Massa artesanal recheada com carne suína, gengibre e cebolinha.",
        price: "R$ 28,90",
      },
      {
        name: "Rolinho Primavera",
        description: "Crocante por fora, recheio de legumes frescos e brotos de bambu.",
        price: "R$ 24,90",
      },
      {
        name: "Wonton Frito",
        description: "Pastéis dourados de camarão com molho agridoce da casa.",
        price: "R$ 26,90",
      },
      {
        name: "Pepino em Conserva Sichuan",
        description: "Pepino marinado com alho, gergelim e um toque de pimenta.",
        price: "R$ 19,90",
      },
    ],
  },
  {
    id: "dim-sum",
    label: "Dim Sum",
    items: [
      {
        name: "Har Gow",
        description: "Dim sum de camarão com massa delicada e translúcida.",
        price: "R$ 32,90",
        image: "har-gow",
      },
      {
        name: "Siu Mai",
        description: "Trouxinhas abertas de porco e camarão, cozidas no vapor.",
        price: "R$ 30,90",
      },
      {
        name: "Char Siu Bao",
        description: "Pão chinês no vapor recheado com porco agridoce.",
        price: "R$ 27,90",
      },
      {
        name: "Cheung Fun",
        description: "Rolinhos de massa de arroz com camarão e molho de soja especial.",
        price: "R$ 29,90",
      },
    ],
  },
  {
    id: "pratos-principais",
    label: "Pratos Principais",
    items: [
      {
        name: "Pato Laqueado",
        description: "Pato assado servido com panquecas finas, pepino e molho hoisin.",
        price: "R$ 89,90",
        image: "pato-laqueado",
      },
      {
        name: "Frango Kung Pao",
        description: "Frango salteado com amendoim, pimentões e molho agridoce picante.",
        price: "R$ 42,90",
      },
      {
        name: "Mapo Tofu",
        description: "Tofu macio, carne suína e molho picante de Sichuan.",
        price: "R$ 39,90",
        image: "mapo-tofu",
      },
      {
        name: "Porco Agridoce",
        description: "Cubos de porco crocantes envolvidos em molho agridoce clássico.",
        price: "R$ 44,90",
      },
      {
        name: "Frango Xadrez",
        description: "Frango salteado com castanhas, pimentões e legumes da estação.",
        price: "R$ 41,90",
      },
    ],
  },
  {
    id: "carnes",
    label: "Carnes",
    items: [
      {
        name: "Costela ao Molho de Soja e Mel",
        description: "Costela suína cozida lentamente, glaceada com soja e mel.",
        price: "R$ 56,90",
      },
      {
        name: "Carne Mongoliana",
        description: "Fatias de carne salteadas com cebolas e molho escuro levemente adocicado.",
        price: "R$ 49,90",
      },
      {
        name: "Char Siu",
        description: "Lombo suíno assado no estilo cantonês, fatiado e caramelizado.",
        price: "R$ 52,90",
      },
      {
        name: "Bife Acebolado Oriental",
        description: "Medalhões de carne com cebolas tostadas e molho de ostras.",
        price: "R$ 54,90",
      },
    ],
  },
  {
    id: "frutos-do-mar",
    label: "Frutos do Mar",
    items: [
      {
        name: "Camarão com Sal e Pimenta",
        description: "Camarões crocantes salteados com alho, pimenta e cebolinha.",
        price: "R$ 58,90",
      },
      {
        name: "Lula Kung Pao",
        description: "Lula salteada em fogo alto com amendoim e pimenta seca.",
        price: "R$ 55,90",
      },
      {
        name: "Peixe ao Vapor com Gengibre",
        description: "Filé de peixe branco ao vapor com gengibre fresco e cebolinha.",
        price: "R$ 62,90",
      },
      {
        name: "Camarão em Molho de Alho",
        description: "Camarões grandes envolvidos em molho de alho tostado e vinho shaoxing.",
        price: "R$ 59,90",
      },
    ],
  },
  {
    id: "macarrao-arroz",
    label: "Macarrão & Arroz",
    items: [
      {
        name: "Yakisoba Bellavere",
        description: "Macarrão salteado com legumes frescos e proteína à escolha.",
        price: "R$ 39,90",
      },
      {
        name: "Arroz Frito Yangzhou",
        description: "Arroz salteado com camarão, presunto, ovos e cebolinha.",
        price: "R$ 34,90",
      },
      {
        name: "Chow Mein de Legumes",
        description: "Macarrão crocante com legumes salteados em fogo alto.",
        price: "R$ 36,90",
      },
      {
        name: "Dan Dan Mian",
        description: "Macarrão de trigo com molho de gergelim, carne suína e pimenta.",
        price: "R$ 38,90",
      },
    ],
  },
  {
    id: "sobremesas",
    label: "Sobremesas",
    items: [
      {
        name: "Bao de Chocolate",
        description: "Pão chinês cozido no vapor recheado com chocolate.",
        price: "R$ 22,90",
        image: "bao-chocolate",
      },
      {
        name: "Pudim de Gergelim Preto",
        description: "Cremoso e delicado, com calda de gengibre.",
        price: "R$ 21,90",
      },
      {
        name: "Lichia com Calda de Jasmim",
        description: "Lichias frescas em calda levemente perfumada.",
        price: "R$ 19,90",
      },
    ],
  },
  {
    id: "bebidas",
    label: "Bebidas",
    items: [
      {
        name: "Chá de Jasmim",
        description: "Chá verde perfumado, servido na chaleira.",
        price: "R$ 14,90",
      },
      {
        name: "Chá Oolong",
        description: "Encorpado e tostado, ideal para acompanhar o cardápio.",
        price: "R$ 16,90",
      },
      {
        name: "Refrigerante",
        description: "Lata 350 ml — consulte os sabores disponíveis.",
        price: "R$ 8,90",
      },
      {
        name: "Água com ou sem gás",
        description: "Garrafa 500 ml.",
        price: "R$ 6,90",
      },
      {
        name: "Suco Natural",
        description: "Laranja, limão ou maracujá, feitos na hora.",
        price: "R$ 12,90",
      },
    ],
  },
];

export const restaurant = {
  name: "Bellavere",
  tagline: "Culinária Chinesa",
  intro: "Uma interpretação contemporânea da tradição chinesa.",
  address: "Rua Exemplo, 123 — São Paulo, SP",
  hours: "Terça a Domingo, 12:00 — 23:00",
  phone: "(11) 99999-9999",
  whatsapp: "5511999999999",
  instagram: "@bellavere",
};
