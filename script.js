// Aguardar o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript carregado com sucesso!");

  // Dados
  const accessibilityFilters = [
    {
      name: "Rampas de Acesso",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
    },
    {
      name: "Elevadores",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`,
    },
    {
      name: "Banheiros Adaptados",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
    },
    {
      name: "Piso Tátil",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`,
    },
    {
      name: "Audiodescrição",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 0l-3.536 3.536m-3.536 3.536L7.758 8.464"></path></svg>`,
    },
    {
      name: "Estacionamento",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path></svg>`,
    },
  ];

  // Dados da equipe
  const teamMembers = [
    {
      name: "Vitor",
      role: "Sub-Líder do Projeto",
      image: "img/vitao_img.jpeg",
    },
    {
      name: "Leandro",
      role: "Especialista em Acessibilidade",
      image: "img/leandro_img.jpeg",
    },
    {
      name: "Leandro",
      role: "Pesquisador de Campo",
      image: "img/leandro2_img.jpeg",
    },
    {
      name: "Jonathan",
      role: "Responsável pela Documentação",
      image: "img/jhow_img.jpeg",
    },
    {
      name: "Arthur",
      role: "Líder do Projeto",
      image: "img/arthur_img.PNG",
    },
    {
      name: "Mesquita",
      role: "Designer Gráfico",
      image: "img/mesquita_img.jpeg",
    },
  ];

  const accommodations = [
    {
      name: "Hotel Copacabana Palace",
      image: "img/palace_copacabana.jpg",
      rating: "4.9",
      description:
        "Hotel histórico de luxo em Copacabana com quartos adaptados e serviços especializados para pessoas com deficiência.",
      details: {
        rooms: 239,
        bathrooms: 1,
        capacity: 4,
      },
      location: "Copacabana, Rio de Janeiro - RJ",
      city: "rio-de-janeiro",
      category: "praia", // Adicionado
      accessibilityFeatures: [
        {
          name: "Rampas de Acesso",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Elevadores Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`,
        },
        {
          name: "Banheiros Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
        {
          name: "Piscina Acessível",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"></path><path d="M7 21l4-9"></path><path d="M17 21l-4-9"></path><path d="M2 6h4c2 0 4 1.1 4 4"></path><path d="M22 6h-4c-2 0-4 1.1-4 4"></path></svg>`,
        },
      ],
      nearbyAttractions: ["Cristo Redentor", "Pão de Açúcar", "Praia de Copacabana", "Forte de Copacabana"],
      itinerary: [
        {
          day: "Dia 1",
          date: "15/03/2024",
          activities: [
            {
              time: "09:00",
              title: "Check-in no Hotel",
              description:
                "Recepção com equipe treinada para atendimento especializado e orientações sobre acessibilidade.",
            },
            {
              time: "14:00",
              title: "Visita ao Cristo Redentor",
              description: "Transporte adaptado até o Corcovado com van especial para cadeirantes.",
            },
            {
              time: "18:00",
              title: "Jantar no Restaurante do Hotel",
              description: "Cardápio com opções para dietas especiais e atendimento personalizado.",
            },
          ],
        },
        {
          day: "Dia 2",
          date: "16/03/2024",
          activities: [
            {
              time: "08:00",
              title: "Café da manhã",
              description: "Buffet com estações de altura acessível e assistência disponível.",
            },
            {
              time: "10:00",
              title: "Passeio pela Praia de Copacabana",
              description: "Cadeiras anfíbias disponíveis e acesso facilitado à praia.",
            },
            {
              time: "15:00",
              title: "Visita ao Pão de Açúcar",
              description: "Bondinho com acesso para cadeirantes e vista panorâmica da cidade.",
            },
          ],
        },
      ],
    },
    {
      name: "Ibis Budget Foz do Iguaçu",
      image: "img/ibis_img.jpg",
      rating: "4.2",
      description:
        "Hotel econômico com cerca de 10 quartos adaptados e excelente localização próxima às Cataratas do Iguaçu.",
      details: {
        rooms: 10,
        bathrooms: 1,
        capacity: 2,
      },
      location: "Foz do Iguaçu, PR",
      city: "foz-do-iguacu",
      category: "parque", // Adicionado
      accessibilityFeatures: [
        {
          name: "Quartos Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>`,
        },
        {
          name: "Rampas de Acesso",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Banheiros Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
      ],
      nearbyAttractions: ["Cataratas do Iguaçu", "Parque das Aves", "Itaipu", "Marco das Três Fronteiras"],
      itinerary: [
        {
          day: "Dia 1",
          date: "20/04/2024",
          activities: [
            {
              time: "09:00",
              title: "Check-in no Hotel",
              description: "Recepção com informações sobre acessibilidade local e transporte adaptado.",
            },
            {
              time: "14:00",
              title: "Visita às Cataratas do Iguaçu",
              description: "Ônibus adaptados e mirantes acessíveis com vista espetacular das cataratas.",
            },
            {
              time: "18:00",
              title: "Jantar no Porto Canoas",
              description: "Restaurante com estrutura inclusiva e vista para as cataratas.",
            },
          ],
        },
      ],
    },
    {
      name: "Hotel Sesc Gramado",
      image: "img/SescGramado_img.jpg",
      rating: "4.5",
      description: "Hotel com tarifa social acessível e estrutura completamente adaptada para pessoas com deficiência.",
      details: {
        rooms: 15,
        bathrooms: 1,
        capacity: 3,
      },
      location: "Gramado, RS",
      city: "gramado",
      category: "historica", // Adicionado
      accessibilityFeatures: [
        {
          name: "Tarifa Social",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6"></path></svg>`,
        },
        {
          name: "Rampas de Acesso",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Elevadores",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`,
        },
        {
          name: "Quartos Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>`,
        },
      ],
      nearbyAttractions: ["Catedral de Pedra", "Centro de Gramado", "Lago Negro", "Mini Mundo"],
      itinerary: [
        {
          day: "Dia 1",
          date: "10/05/2024",
          activities: [
            {
              time: "10:00",
              title: "Check-in no Hotel",
              description: "Recepção com tarifas sociais e orientações sobre acessibilidade na cidade.",
            },
            {
              time: "15:00",
              title: "Visita à Catedral de Pedra",
              description: "Entrada acessível em um dos pontos turísticos mais famosos da região.",
            },
            {
              time: "19:00",
              title: "Jantar no Bela Vista Café Colonial",
              description: "Restaurante com excelente acessibilidade e ambiente acolhedor.",
            },
          ],
        },
      ],
    },
    // {
    //   name: "Pousada Brisa do Mar",
    //   image: "img/brisa_img.jpg",
    //   rating: "4.8",
    //   description: "Pousada à beira-mar com quartos adaptados e vista deslumbrante para o oceano.",
    //   details: {
    //     rooms: 2,
    //     bathrooms: 1,
    //     capacity: 4,
    //   },
    //   location: "Praia do Forte, Bahia",
    //   city: "salvador",
    //   category: "praia", // Adicionado
    //   accessibilityFeatures: [
    //     {
    //       name: "Rampas de Acesso",
    //       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
    //     },
    //     {
    //       name: "Banheiros Adaptados",
    //       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
    //     },
    //     {
    //       name: "Esteiras na Areia",
    //       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h16M4 16h16"></path></svg>`,
    //     },
    //   ],
    //   nearbyAttractions: ["Projeto TAMAR", "Mercado de Artesanato", "Reserva Natural"],
    //   itinerary: [
    //     {
    //       day: "Dia 1",
    //       date: "15/06/2023",
    //       activities: [
    //         {
    //           time: "09:00",
    //           title: "Check-in",
    //           description: "Recepção com equipe especializada em acessibilidade.",
    //         },
    //         {
    //           time: "12:00",
    //           title: "Almoço no Restaurante da Pousada",
    //           description: "Cardápio com opções para dietas especiais.",
    //         },
    //         {
    //           time: "15:00",
    //           title: "Visita ao Projeto TAMAR",
    //           description: "Atração totalmente acessível com trilhas adaptadas.",
    //         },
    //       ],
    //     },
    //     {
    //       day: "Dia 2",
    //       date: "16/06/2023",
    //       activities: [
    //         {
    //           time: "08:00",
    //           title: "Café da manhã",
    //           description: "Buffet variado com atendimento personalizado.",
    //         },
    //         {
    //           time: "10:00",
    //           title: "Passeio pela praia",
    //           description: "Cadeiras anfíbias disponíveis mediante agendamento.",
    //         },
    //         {
    //           time: "14:00",
    //           title: "Tour pelo Mercado de Artesanato",
    //           description: "Local com acessibilidade completa e guias especializados.",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "Hotel Central Park",
    //   image: "img/park_img.jpg",
    //   rating: "4.7",
    //   description: "Hotel no coração da cidade com excelente infraestrutura para pessoas com mobilidade reduzida.",
    //   details: {
    //     rooms: 3,
    //     bathrooms: 2,
    //     capacity: 6,
    //   },
    //   location: "São Paulo, SP",
    //   city: "sao-paulo",
    //   category: "parque", // Adicionado
    //   accessibilityFeatures: [
    //     {
    //       name: "Elevadores",
    //       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`,
    //     },
    //     {
    //       name: "Banheiros Adaptados",
    //       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
    //     },
    //     {
    //       name: "Piso Tátil",
    //       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`,
    //     },
    //   ],
    //   nearbyAttractions: ["Parque Ibirapuera", "Museu de Arte", "Shopping Center"],
    //   itinerary: [
    //     {
    //       day: "Dia 1",
    //       date: "20/07/2023",
    //       activities: [
    //         {
    //           time: "14:00",
    //           title: "Check-in",
    //           description: "Recepção com equipe especializada e assistência personalizada.",
    //         },
    //         {
    //           time: "16:00",
    //           title: "Tour pelo hotel",
    //           description: "Apresentação das instalações e recursos de acessibilidade.",
    //         },
    //         {
    //           time: "19:00",
    //           title: "Jantar no restaurante do hotel",
    //           description: "Cardápio com opções para diversas restrições alimentares.",
    //         },
    //       ],
    //     },
    //     {
    //       day: "Dia 2",
    //       date: "21/07/2023",
    //       activities: [
    //         {
    //           time: "09:00",
    //           title: "Visita ao Parque Ibirapuera",
    //           description: "Transporte adaptado e guia especializado disponíveis.",
    //         },
    //         {
    //           time: "13:00",
    //           title: "Almoço em restaurante parceiro",
    //           description: "Local totalmente acessível próximo ao parque.",
    //         },
    //         {
    //           time: "15:00",
    //           title: "Visita ao Museu de Arte",
    //           description: "Museu com instalações acessíveis e exposições táteis.",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: "Pousada Montanha Verde",
    //   image: "img/MV_img.jpg",
    //   rating: "4.6",
    //   description: "Pousada em meio à natureza com chalés adaptados e trilhas acessíveis.",
    //   details: {
    //     rooms: 1,
    //     bathrooms: 1,
    //     capacity: 2,
    //   },
    //   location: "Campos do Jordão, SP",
    //   city: "campos-jordao",
    //   category: "historica", // Adicionado
    //   accessibilityFeatures: [
    //     {
    //       name: "Rampas de Acesso",
    //       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
    //     },
    //     {
    //       name: "Banheiros Adaptados",
    //       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
    //     },
    //     {
    //       name: "Estacionamento",
    //       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path></svg>`,
    //     },
    //   ],
    //   nearbyAttractions: ["Parque Amantikir", "Teleférico", "Centro Histórico"],
    //   itinerary: [
    //     {
    //       day: "Dia 1",
    //       date: "10/08/2023",
    //       activities: [
    //         {
    //           time: "12:00",
    //           title: "Check-in",
    //           description: "Recepção com assistência personalizada para hospedagem.",
    //         },
    //         {
    //           time: "15:00",
    //           title: "Passeio pelo jardim da pousada",
    //           description: "Caminhos adaptados com belas paisagens naturais.",
    //         },
    //         {
    //           time: "18:00",
    //           title: "Jantar especial",
    //           description: "Gastronomia típica da montanha com opções para dietas especiais.",
    //         },
    //       ],
    //     },
    //     {
    //       day: "Dia 2",
    //       date: "11/08/2023",
    //       activities: [
    //         {
    //           time: "09:30",
    //           title: "Visita ao Parque Amantikir",
    //           description: "Jardins com caminhos acessíveis e belezas naturais.",
    //         },
    //         {
    //           time: "14:00",
    //           title: "Passeio de teleférico",
    //           description: "Cabines adaptadas para cadeiras de rodas com vista panorâmica.",
    //         },
    //         {
    //           time: "17:00",
    //           title: "Tour pelo Centro Histórico",
    //           description: "Visita guiada com informações sobre a história local.",
    //         },
    //       ],
    //     },
    //   ],
    // },
  ];

  const attractions = [
    {
      name: "Cristo Redentor",
      image: "img/cristo_Redentor.webp",
      distance: "8 km do Hotel Copacabana Palace",
      city: "rio-de-janeiro",
      category: "historica", // Adicionado
      description:
        "Uma das Sete Maravilhas do Mundo Moderno, localizada no topo do Corcovado. Possui acesso adaptado através do Trem do Corcovado e van especial para pessoas com mobilidade reduzida.",
      accessibilityFeatures: [
        {
          name: "Trem Adaptado",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"></rect><circle cx="12" cy="12" r="2"></circle></svg>`,
        },
        {
          name: "Van Especial",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Banheiros Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
        {
          name: "Plataforma Acessível",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>`,
        },
      ],
      details: {
        duration: "3-4 horas (incluindo transporte)",
        bestTime: "Manhã (8h às 11h) ou final da tarde (15h às 17h)",
        services:
          "Trem do Corcovado com vagão adaptado, van especial para cadeirantes, guias especializados, audioguia em português",
      },
    },
    {
      name: "Pão de Açúcar",
      image: "img/pao_açucar.jpg",
      distance: "3 km do Hotel Copacabana Palace",
      city: "rio-de-janeiro",
      category: "praia", // Adicionado
      description:
        "Complexo turístico com bondinho que oferece vista panorâmica da cidade. Possui instalações adaptadas e bondinho acessível para cadeirantes.",
      accessibilityFeatures: [
        {
          name: "Bondinho Adaptado",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>`,
        },
        {
          name: "Rampas de Acesso",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Banheiros Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
      ],
      details: {
        duration: "2-3 horas",
        bestTime: "Final da tarde para o pôr do sol",
        services: "Bondinho com acesso para cadeirantes, estacionamento adaptado, loja de souvenirs acessível",
      },
    },
    {
      name: "Cataratas do Iguaçu",
      image: "img/cataratas_img.jpg",
      distance: "2 km do Ibis Budget Foz do Iguaçu",
      city: "foz-do-iguacu",
      category: "parque", // Adicionado
      description:
        "Uma das maiores quedas d'água do mundo com ônibus adaptados, mirantes acessíveis, passarelas com elevadores e banheiros adaptados.",
      accessibilityFeatures: [
        {
          name: "Ônibus Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"></rect><circle cx="7" cy="17" r="1"></circle><circle cx="17" cy="17" r="1"></circle></svg>`,
        },
        {
          name: "Mirantes Acessíveis",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`,
        },
        {
          name: "Elevadores",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`,
        },
        {
          name: "Banheiros Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
      ],
      details: {
        duration: "4-6 horas",
        bestTime: "Manhã (8h às 12h) para melhor iluminação",
        services:
          "Ônibus adaptados, passarelas com elevadores, mirantes acessíveis, restaurante Porto Canoas com estrutura inclusiva",
      },
    },
    {
      name: "Parque das Aves",
      image: "img/aves_img.jpg",
      distance: "3 km do Ibis Budget Foz do Iguaçu",
      city: "foz-do-iguacu",
      category: "parque", // Adicionado
      description:
        "Parque com trilhas planas e estruturadas, perfeito para cadeirantes, com mais de 1.400 aves de 150 espécies diferentes.",
      accessibilityFeatures: [
        {
          name: "Trilhas Planas",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Estrutura Adaptada",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>`,
        },
        {
          name: "Banheiros Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
      ],
      details: {
        duration: "2-3 horas",
        bestTime: "Manhã (9h às 12h) quando as aves estão mais ativas",
        services: "Trilhas estruturadas para cadeirantes, viveiros acessíveis, loja de souvenirs adaptada",
      },
    },
    {
      name: "Catedral de Pedra",
      image: "img/catedral_img.jpg",
      distance: "5 km do Hotel Sesc Gramado",
      city: "gramado",
      category: "historica", // Adicionado
      description:
        "Catedral gótica construída em pedra basáltica com entrada acessível, um clássico obrigatório da região.",
      accessibilityFeatures: [
        {
          name: "Entrada Acessível",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Rampas de Acesso",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Estacionamento Adaptado",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path></svg>`,
        },
      ],
      details: {
        duration: "1-2 horas",
        bestTime: "Qualquer horário, especialmente ao entardecer",
        services: "Entrada gratuita, estacionamento adaptado, arquitetura gótica impressionante",
      },
    },
    {
      name: "Centro de Gramado",
      image: "img/cgramadp_img.jpg",
      distance: "1 km do Hotel Sesc Gramado",
      city: "gramado",
      category: "historica", // Adicionado
      description:
        "Centro turístico com arquitetura europeia, lojas, restaurantes e cafés, todos com excelente acessibilidade.",
      accessibilityFeatures: [
        {
          name: "Calçadas Adaptadas",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Rampas de Acesso",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Lojas Acessíveis",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>`,
        },
        {
          name: "Restaurantes Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 6a4 4 0 0 1-4-4V8z"></path></svg>`,
        },
      ],
      details: {
        duration: "2-4 horas",
        bestTime: "Tarde e noite para aproveitar a iluminação",
        services: "Lojas com entrada acessível, restaurantes adaptados, estacionamento público adaptado",
      },
    },
    {
      name: "Projeto TAMAR",
      image: "img/PT_img.jpg",
      distance: "2 km da Praia do Forte",
      city: "salvador",
      category: "praia", // Adicionado
      description: "Centro de conservação de tartarugas marinhas com estrutura acessível para visitantes.",
      accessibilityFeatures: [
        {
          name: "Rampas",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Banheiros",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
      ],
      details: {
        duration: "2-3 horas",
        bestTime: "Manhã ou fim de tarde",
        services: "Guias especializados, Cadeiras de rodas disponíveis",
      },
    },
    // {
    //   name: "Parque Ibirapuera",
    //   image: "img/ibira_img.jpg",
    //   distance: "1,5 km do Hotel Central Park",
    //   city: "sao-paulo",
    //   category: "parque", // Adicionado
    //   description: "Maior parque urbano de São Paulo com trilhas acessíveis e atividades inclusivas.",
    //   accessibilityFeatures: [
    //     {
    //       name: "Trilhas Acessíveis",
    //       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
    //     },
    //     {
    //       name: "Banheiros Adaptados",
    //       icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
    //     },
    //   ],
    //   details: {
    //     duration: "Meio dia a dia inteiro",
    //     bestTime: "Manhã (dias de semana)",
    //     services: "Empréstimo de cadeiras de rodas, mapas táteis, bicicletário adaptado",
    //   },
    // },
  ];

  // Dados de rotas para cada destino
  const routeData = {
    "cristo-redentor": {
      city: "rio-de-janeiro",
      transport: {
        time: "6h 30min",
        distance: "430 km",
      },
      public: {
        time: "8h 15min",
        distance: "450 km",
      },
      flight: {
        time: "1h 10min (total)",
        distance: "360 km",
      },
      car: {
        time: "6h 30min",
        distance: "430 km",
      },
      busCompanies: ["• Viação 1001", "• Cometa", "• Útil", "• Banheiros adaptados"],
      metroCompanies: ["• CPTM São Paulo", "• MetrôRio", "• SuperVia", "• Todas estações com elevador"],
    },
    "cataratas-iguacu": {
      city: "foz-do-iguacu",
      transport: {
        time: "12h 15min",
        distance: "1044 km",
      },
      public: {
        time: "12h 30min",
        distance: "650 km",
      },
      flight: {
        time: "1h 45min (total)",
        distance: "850 km",
      },
      car: {
        time: "12h 15min",
        distance: "1044 km",
      },
      busCompanies: ["• Viação Catarinense", "• Pluma", "• Kaissara", "• Banheiros adaptados"],
      metroCompanies: [
        "• CPTM São Paulo",
        "• Transporte local adaptado",
        "• Ônibus urbanos acessíveis",
        "• Todas estações com elevador",
      ],
    },
    "gramado-centro": {
      city: "gramado",
      transport: {
        time: "12h 00min",
        distance: "1.118 km",
      },
      public: {
        time: "9h 20min",
        distance: "490 km",
      },
      flight: {
        time: "1h 30min (total)",
        distance: "883 km",
      },
      car: {
        time: "12h 00min",
        distance: "1.118 km",
      },
      busCompanies: ["• Viação Unesul", "• Eucatur", "• Planalto", "• Banheiros adaptados"],
      metroCompanies: [
        "• CPTM São Paulo",
        "• Trensurb Porto Alegre",
        "• Transporte local adaptado",
        "• Todas estações com elevador",
      ],
    },
  };

  // Estado da aplicação
  const state = {
    searchLocation: "",
    activeFilters: [],
    filteredAccommodations: [...accommodations],
    filteredAttractions: [...attractions],
    showSearchResults: false,
    selectedAccessibilityNeeds: [],
    routeDestination: null, // Nova propriedade para controlar filtro por rota
    currentCategory: null, // Nova propriedade para controlar filtro por categoria
  };

  // Função para filtrar por categoria
  function filterByCategory(category) {
    state.currentCategory = category;
    state.showSearchResults = true;
    state.searchLocation = ""; // Limpa a pesquisa de localização ao filtrar por categoria
    state.activeFilters = []; // Limpa os filtros de acessibilidade ao filtrar por categoria
    state.routeDestination = null; // Limpa o filtro de rota ao filtrar por categoria

    // Filtrar hospedagens por categoria
    state.filteredAccommodations = accommodations.filter((accommodation) => accommodation.category === category);

    // Filtrar atrações por categoria
    state.filteredAttractions = attractions.filter((attraction) => attraction.category === category);

    // Renderizar resultados
    renderAccommodations();
    renderAttractions();
    renderAccessibilityFilters(); // Atualiza os botões de filtro

    // Scroll para a seção de resultados
    const accommodationsSection = document.getElementById("accommodations");
    if (accommodationsSection) {
      accommodationsSection.scrollIntoView({ behavior: "smooth" });
    }

    // Atualizar título da seção
    const accommodationsTitle = document.getElementById("accommodations-title");
    if (accommodationsTitle) {
      const categoryNames = {
        praia: "Praias Acessíveis",
        parque: "Parques Nacionais",
        historica: "Cidades Históricas",
      };
      accommodationsTitle.textContent = categoryNames[category] || "Resultados da Pesquisa";
    }
  }

  // Função para limpar filtros
  function clearFilters() {
    state.currentCategory = null;
    state.routeDestination = null;
    state.searchLocation = "";
    state.showSearchResults = false;
    state.activeFilters = [];
    state.selectedAccessibilityNeeds = []; // Limpa as necessidades de acessibilidade selecionadas no planejador de rotas
    state.filteredAccommodations = [...accommodations];
    state.filteredAttractions = [...attractions];

    // Limpa os campos de input/select
    const locationInput = document.getElementById("location-input");
    if (locationInput) locationInput.value = "";
    const accessibilitySelect = document.getElementById("accessibility-select");
    if (accessibilitySelect) accessibilitySelect.value = "";
    const originSelect = document.getElementById("origin-select");
    if (originSelect) originSelect.value = "";
    const destinationSelect = document.getElementById("destination-select");
    if (destinationSelect) destinationSelect.value = "";

    // Remove a classe 'active' dos botões de acessibilidade do planejador de rotas
    document.querySelectorAll(".accessibility-option").forEach(button => {
      button.classList.remove("active");
    });

    // Esconde os resultados da rota
    const routeResults = document.getElementById("route-results");
    if (routeResults) routeResults.classList.add("hidden");

    renderAccommodations();
    renderAttractions();
    renderAccessibilityFilters();

    // Restaura o título padrão da seção de hospedagens
    const accommodationsTitle = document.getElementById("accommodations-title");
    if (accommodationsTitle) {
      accommodationsTitle.textContent = "Hospedagens Acessíveis";
    }
  }

  // Função para criar modal genérico
  function createModal(content) {
    const modal = document.createElement("div");
    modal.className = "modal active";
    modal.innerHTML = content;
    document.body.appendChild(modal);

    // Fechar modal ao clicar no X ou fora do modal
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.closest(".close-button")) {
        modal.remove();
      }
    });

    return modal;
  }

  // Função para mostrar Nossa Missão
  function showMissionModal() {
    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Nossa Missão</h2>

          <div class="accessibility-content">
            <div class="accessibility-section">
              <h4>Visão</h4>
              <ul>
                <li>Ser a principal plataforma de turismo acessível do Brasil</li>
                <li>Conectar pessoas com necessidades especiais a experiências incríveis</li>
                <li>Transformar o turismo em uma atividade verdadeiramente inclusiva</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Missão</h4>
              <ul>
                <li>Facilitar o planejamento de viagens acessíveis para todos</li>
                <li>Fornecer informações precisas sobre acessibilidade</li>
                <li>Promover a inclusão no setor turístico</li>
                <li>Capacitar pessoas com deficiência a explorar o mundo</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Valores</h4>
              <ul>
                <li>Inclusão e diversidade em primeiro lugar</li>
                <li>Transparência nas informações de acessibilidade</li>
                <li>Inovação tecnológica para melhor experiência</li>
                <li>Compromisso com a qualidade e confiabilidade</li>
                <li>Respeito às necessidades individuais</li>
              </ul>
            </div>
          </div>

          <div class="modal-buttons">
            <button class="primary-button" onclick="showContactModal(); this.closest('.modal').remove();">Entre em Contato</button>
            <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
          </div>
        </div>
      </div>
    `;
    createModal(content);
  }

  // Função para mostrar Contato
  function showContactModal() {
    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Entre em Contato</h2>

          <div class="accessibility-content">
            <div class="accessibility-section">
              <h4>Informações de Contato</h4>
              <ul>
                <li>Email: contato@destinocerto.com.br</li>
                <li>WhatsApp: (11) 99999-9999</li>
                <li>Telefone: (11) 3333-4444</li>
                <li>Horário: Segunda a Sexta, 8h às 18h</li>
              </ul>
            </div>
          </div>

          <form id="contact-form" class="registration-form">
            <div class="form-group">
              <label for="contact-name">Nome Completo:</label>
              <input type="text" id="contact-name" name="name" required>
            </div>

            <div class="form-group">
              <label for="contact-email">E-mail:</label>
              <input type="email" id="contact-email" name="email" required>
            </div>

            <div class="form-group">
              <label for="contact-subject">Assunto:</label>
              <select id="contact-subject" name="subject" required>
                <option value="">Selecione o assunto</option>
                <option value="duvida">Dúvida sobre acessibilidade</option>
                <option value="sugestao">Sugestão de melhoria</option>
                <option value="problema">Problema técnico</option>
                <option value="parceria">Proposta de parceria</option>
                <option value="outro">Outro</option>
              </select>
            </div>

            <div class="form-group">
              <label for="contact-message">Mensagem:</label>
              <textarea id="contact-message" name="message" rows="4" style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; resize: vertical;" required></textarea>
            </div>

            <div class="modal-buttons">
              <button type="submit" class="primary-button">Enviar Mensagem</button>
              <button type="button" class="secondary-button" onclick="this.closest('.modal').remove()">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const modal = createModal(content);

    // Adicionar evento de envio do formulário
    const form = modal.querySelector("#contact-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      alert(
        `Mensagem enviada com sucesso!\n\nObrigado ${formData.get("name")}, responderemos em breve no email ${formData.get("email")}.`,
      );
      modal.remove();
    });
  }

  // Função para mostrar modal da equipe
  function showTeamModal() {
    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Nossa Equipe</h2>
          <p>Conheça os membros da equipe que desenvolveram o projeto Destino Certo:</p>

          <div class="team-grid">
            ${teamMembers
              .map(
                (member) => `
              <div class="team-member">
                <div class="member-avatar">
                  <img src="${member.image}" alt="${member.name}">
                </div>
                <h3 class="member-name">${member.name}</h3>
                <p class="member-role">${member.role}</p>
              </div>
            `,
              )
              .join("")}
          </div>

          <div class="modal-buttons">
            <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
          </div>
        </div>
      </div>
    `;
    createModal(content);
  }

  // Função para mostrar Certificações
  function showCertificationsModal() {
    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Certificações e Parcerias</h2>

          <div class="accessibility-content">
            <div class="accessibility-section">
              <h4>Certificações Oficiais</h4>
              <ul>
                <li>ABNT NBR 9050 - Acessibilidade a edificações</li>
                <li>ISO 14001 - Sistema de Gestão Ambiental</li>
                <li>Certificação UNWTO - Turismo Acessível</li>
                <li>Selo de Acessibilidade Digital - W3C</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Parceiros Institucionais</h4>
              <ul>
                <li>Ministério do Turismo</li>
                <li>EMBRATUR - Instituto Brasileiro de Turismo</li>
                <li>Secretaria Nacional dos Direitos da Pessoa com Deficiência</li>
                <li>APAE - Associação de Pais e Amigos dos Excepcionais</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Parceiros Comerciais</h4>
              <ul>
                <li>Rede Hoteleira Accor</li>
                <li>Booking.com - Programa de Acessibilidade</li>
                <li>TAM/LATAM - Assistência Especial</li>
                <li>Localiza - Veículos Adaptados</li>
              </ul>
            </div>
          </div>

          <div class="info-box">
            <p><strong>Processo de Certificação:</strong> Todos os estabelecimentos passam por auditoria presencial para verificação dos recursos de acessibilidade antes de serem listados em nossa plataforma.</p>
          </div>

          <div class="modal-buttons">
            <button class="primary-button" onclick="alert('Redirecionando para formulário de certificação...')">Solicitar Certificação</button>
            <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
          </div>
        </div>
      </div>
    `;
    createModal(content);
  }

  // Função para mostrar Recursos Adicionais
  function showResourcesModal() {
    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Recursos Adicionais</h2>

          <div class="accessibility-content">
            <div class="accessibility-section">
              <h4>Downloads Disponíveis</h4>
              <ul>
                <li><button onclick="downloadGuide('acessibilidade')" style="color: #3b82f6; text-decoration: underline; background: none; border: none; cursor: pointer;">Guia Completo de Acessibilidade</button></li>
                <li><button onclick="downloadGuide('checklist')" style="color: #3b82f6; text-decoration: underline; background: none; border: none; cursor: pointer;">Checklist para Viagem Acessível</button></li>
                <li><button onclick="downloadGuide('emergencia')" style="color: #3b82f6; text-decoration: underline; background: none; border: none; cursor: pointer;">Contatos de Emergência</button></li>
                <li><button onclick="downloadGuide('direitos')" style="color: #3b82f6; text-decoration: underline; background: none; border: none; cursor: pointer;">Direitos da Pessoa com Deficiência</button></li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Aplicativos Recomendados</h4>
              <ul>
                <li>Be My Eyes - Assistência visual remota</li>
                <li>Wheelmap - Mapa de acessibilidade</li>
                <li>Voice Dream Reader - Leitor de texto</li>
                <li>Moovit - Transporte público acessível</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Links Úteis</h4>
              <ul>
                <li><button onclick="alert('Redirecionando para site do Ministério do Turismo...')" style="color: #3b82f6; text-decoration: underline; background: none; border: none; cursor: pointer;">Ministério do Turismo</button></li>
                <li><button onclick="alert('Redirecionando para EMBRATUR...')" style="color: #3b82f6; text-decoration: underline; background: none; border: none; cursor: pointer;">EMBRATUR</button></li>
                <li><button onclick="alert('Redirecionando para Secretaria dos Direitos da Pessoa com Deficiência...')" style="color: #3b82f6; text-decoration: underline; background: none; border: none; cursor: pointer;">Secretaria dos Direitos PcD</button></li>
                <li><button onclick="alert('Redirecionando para APAE...')" style="color: #3b82f6; text-decoration: underline; background: none; border: none; cursor: pointer;">APAE Nacional</button></li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Contatos de Emergência</h4>
              <ul>
                <li>SAMU: 192</li>
                <li>Bombeiros: 193</li>
                <li>Polícia: 190</li>
                <li>Ouvidoria Nacional: 100</li>
              </ul>
            </div>
          </div>

          <div class="modal-buttons">
            <button class="primary-button" onclick="downloadAllResources()">Baixar Todos os Recursos</button>
            <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
          </div>
        </div>
      </div>
    `;
    createModal(content);
  }

  // Função para mostrar Avaliações
  function showReviewsModal() {
    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Sistema de Avaliações</h2>

          <div class="accessibility-content">
            <div class="accessibility-section">
              <h4>Estatísticas Gerais</h4>
              <ul>
                <li>Avaliação média: 4.8/5 estrelas</li>
                <li>Total de avaliações: 2.847</li>
                <li>95% dos usuários recomendam</li>
                <li>Tempo médio de resposta: 2 horas</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Avaliações Recentes</h4>
              <ul>
                <li><strong>Maria S.</strong> - "Excelente plataforma! Encontrei tudo que precisava para minha viagem." ★★★★★</li>
                <li><strong>João P.</strong> - "Informações muito úteis sobre acessibilidade." ★★★★★</li>
                <li><strong>Ana C.</strong> - "Facilitou muito o planejamento da nossa viagem." ★★★★</li>
              </ul>
            </div>
          </div>

          <div class="modal-buttons">
            <button class="primary-button" onclick="alert('Redirecionando para formulário de avaliação...')">Deixar Avaliação</button>
            <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
          </div>
        </div>
      </div>
    `;
    createModal(content);
  }

  // Função para mostrar Roteiros Personalizados
  function showCustomItinerariesModal() {
    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Roteiros Personalizados</h2>

          <div class="accessibility-content">
            <div class="accessibility-section">
              <h4>Exemplos de Roteiros</h4>
              <ul>
                <li><strong>Rio de Janeiro Acessível (3 dias)</strong> - Cristo Redentor, Pão de Açúcar, Copacabana</li>
                <li><strong>Foz do Iguaçu Natural (2 dias)</strong> - Cataratas, Parque das Aves, Itaipu</li>
                <li><strong>Gramado Romântico (3 dias)</strong> - Catedral de Pedra, Centro, Lago Negro</li>
                <li><strong>São Paulo Cultural (2 dias)</strong> - Museus, Parque Ibirapuera, Centro Histórico</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Como Funciona</h4>
              <ul>
                <li>Preencha suas necessidades de acessibilidade</li>
                <li>Escolha destinos e duração da viagem</li>
                <li>Receba roteiro personalizado por email</li>
                <li>Suporte especializado durante toda a viagem</li>
              </ul>
            </div>
          </div>

          <form id="itinerary-form" class="registration-form">
            <div class="form-group">
              <label for="itinerary-name">Nome Completo:</label>
              <input type="text" id="itinerary-name" name="name" required>
            </div>

            <div class="form-group">
              <label for="itinerary-email">E-mail:</label>
              <input type="email" id="itinerary-email" name="email" required>
            </div>

            <div class="form-group">
              <label for="itinerary-destination">Destino Desejado:</label>
              <select id="itinerary-destination" name="destination" required>
                <option value="">Selecione o destino</option>
                <option value="rio">Rio de Janeiro</option>
                <option value="foz">Foz do Iguaçu</option>
                <option value="gramado">Gramado</option>
                <option value="sao-paulo">São Paulo</option>
                <option value="outro">Outro destino</option>
              </select>
            </div>

            <div class="form-group">
              <label for="itinerary-duration">Duração da Viagem:</label>
              <select id="itinerary-duration" name="duration" required>
                <option value="">Selecione a duração</option>
                <option value="1-2">1-2 dias</option>
                <option value="3-4">3-4 dias</option>
                <option value="5-7">5-7 dias</option>
                <option value="mais-7">Mais de 7 dias</option>
              </select>
            </div>

            <div class="form-group">
              <label for="itinerary-accessibility">Necessidades de Acessibilidade:</label>
              <select id="itinerary-accessibility" name="accessibility" required>
                <option value="">Selecione suas necessidades</option>
                <option value="cadeira-rodas">Cadeira de rodas</option>
                <option value="mobilidade-reduzida">Mobilidade reduzida</option>
                <option value="deficiencia-visual">Deficiência visual</option>
                <option value="deficiencia-auditiva">Deficiência auditiva</option>
                <option value="multiplas">Múltiplas necessidades</option>
              </select>
            </div>

            <div class="form-group">
              <label for="itinerary-notes">Observações Especiais:</label>
              <textarea id="itinerary-notes" name="notes" rows="3" style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; resize: vertical;" placeholder="Descreva outras necessidades específicas..."></textarea>
            </div>

            <div class="modal-buttons">
              <button type="submit" class="primary-button">Solicitar Roteiro</button>
              <button type="button" class="secondary-button" onclick="this.closest('.modal').remove()">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    `;

    const modal = createModal(content);

    // Adicionar evento de envio do formulário
    const form = modal.querySelector("#itinerary-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      alert(
        `Solicitação enviada com sucesso!\n\nOlá ${formData.get("name")}, seu roteiro personalizado para ${formData.get("destination")} será enviado em até 24 horas no email ${formData.get("email")}.`,
      );
      modal.remove();
    });
  }

  // Função para mostrar modal de Mobilidade Reduzida
  function showMobilityModal() {
    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Mobilidade Reduzida</h2>

          <div class="accessibility-content">
            <div class="accessibility-section">
              <h4>Hospedagens Adaptadas</h4>
              <ul>
                <li>Quartos com portas largas (mín. 80cm)</li>
                <li>Banheiros com barras de apoio</li>
                <li>Rampas de acesso em todas as áreas</li>
                <li>Elevadores com comandos em braile</li>
                <li>Vagas de estacionamento próximas</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Transporte Acessível</h4>
              <ul>
                <li>Veículos com rampa ou elevador</li>
                <li>Espaço para fixação de cadeira de rodas</li>
                <li>Cintos de segurança adaptados</li>
                <li>Motoristas treinados para assistência</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Atrações Inclusivas</h4>
              <ul>
                <li>Entrada gratuita para acompanhante</li>
                <li>Filas preferenciais</li>
                <li>Equipamentos de apoio disponíveis</li>
                <li>Rotas alternativas acessíveis</li>
              </ul>
            </div>
          </div>

          <div class="modal-buttons">
            <button class="primary-button" onclick="showCustomItinerariesModal(); this.closest('.modal').remove();">Solicitar Roteiro Personalizado</button>
            <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
          </div>
        </div>
      </div>
    `;
    createModal(content);
  }

  // Função para mostrar modal de Deficiência Visual
  function showVisualModal() {
    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Deficiência Visual</h2>

          <div class="accessibility-content">
            <div class="accessibility-section">
              <h4>Recursos para Hospedagem</h4>
              <ul>
                <li>Piso tátil em corredores e áreas comuns</li>
                <li>Sinalização em braile</li>
                <li>Quartos com layout padronizado</li>
                <li>Telefones com teclas em braile</li>
                <li>Cardápios em braile ou áudio</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Atrações Adaptadas</h4>
              <ul>
                <li>Audioguias detalhados</li>
                <li>Maquetes táteis</li>
                <li>Descrições verbais de obras e paisagens</li>
                <li>Guias especializados</li>
                <li>Cães-guia permitidos</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Transporte Inclusivo</h4>
              <ul>
                <li>Avisos sonoros de paradas</li>
                <li>Piso tátil nas estações</li>
                <li>Assistência para embarque/desembarque</li>
                <li>Informações em áudio</li>
              </ul>
            </div>
          </div>

          <div class="modal-buttons">
            <button class="primary-button" onclick="showCustomItinerariesModal(); this.closest('.modal').remove();">Solicitar Roteiro Personalizado</button>
            <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
          </div>
        </div>
      </div>
    `;
    createModal(content);
  }

  // Função para mostrar modal de Deficiência Auditiva
  function showHearingModal() {
    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Deficiência Auditiva</h2>

          <div class="accessibility-content">
            <div class="accessibility-section">
              <h4>Hospedagens Inclusivas</h4>
              <ul>
                <li>Sistemas de alerta visual (luzes piscantes)</li>
                <li>Telefones com amplificador de som</li>
                <li>TV com closed caption</li>
                <li>Funcionários com conhecimento em LIBRAS</li>
                <li>Despertadores vibratórios</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Atrações Adaptadas</h4>
              <ul>
                <li>Intérpretes de LIBRAS</li>
                <li>Materiais informativos visuais</li>
                <li>Legendas em vídeos e apresentações</li>
                <li>Aplicativos com tradução em tempo real</li>
                <li>Mapas e guias visuais detalhados</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Transporte Adaptado</h4>
              <ul>
                <li>Painéis informativos visuais</li>
                <li>Aplicativos de comunicação</li>
                <li>Sinalizações luminosas</li>
                <li>Mapas de rotas visuais</li>
              </ul>
            </div>
          </div>

          <div class="modal-buttons">
            <button class="primary-button" onclick="showCustomItinerariesModal(); this.closest('.modal').remove();">Solicitar Roteiro Personalizado</button>
            <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
          </div>
        </div>
      </div>
    `;
    createModal(content);
  }

  // Função para mostrar modal de Alimentação Especial
  function showDietModal() {
    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Alimentação Especial</h2>

          <div class="accessibility-content">
            <div class="accessibility-section">
              <h4>Opções em Hospedagens</h4>
              <ul>
                <li>Cardápios para diabéticos</li>
                <li>Opções sem glúten</li>
                <li>Pratos vegetarianos e veganos</li>
                <li>Alimentos sem lactose</li>
                <li>Cozinha adaptada para alergias alimentares</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Restaurantes Parceiros</h4>
              <ul>
                <li>Certificação para alergias alimentares</li>
                <li>Cardápios com informações nutricionais</li>
                <li>Chefs treinados em dietas especiais</li>
                <li>Ingredientes orgânicos disponíveis</li>
                <li>Preparo separado para evitar contaminação</li>
              </ul>
            </div>

            <div class="accessibility-section">
              <h4>Facilidades Adicionais</h4>
              <ul>
                <li>Supermercados com produtos especiais</li>
                <li>Farmácias com suplementos</li>
                <li>Delivery de alimentos especiais</li>
                <li>Geladeiras nos quartos</li>
              </ul>
            </div>
          </div>

          <div class="modal-buttons">
            <button class="primary-button" onclick="showCustomItinerariesModal(); this.closest('.modal').remove();">Solicitar Roteiro Personalizado</button>
            <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
          </div>
        </div>
      </div>
    `;
    createModal(content);
  }

  // Função para mostrar modal de cadastro/login
  function showRegistrationModal() {
    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Cadastro / Login</h2>

          <div class="accessibility-content">
            <div class="accessibility-section">
              <h4>Benefícios do Cadastro</h4>
              <ul>
                <li>Salvar suas preferências de acessibilidade</li>
                <li>Histórico de pesquisas e reservas</li>
                <li>Roteiros personalizados salvos</li>
                <li>Notificações sobre novos destinos</li>
                <li>Avaliações e comentários</li>
              </ul>
            </div>
          </div>

          <form id="registration-form" class="registration-form">
            <div class="form-group">
              <label for="reg-name">Nome Completo:</label>
              <input type="text" id="reg-name" name="name" required>
            </div>

            <div class="form-group">
              <label for="reg-email">E-mail:</label>
              <input type="email" id="reg-email" name="email" required>
            </div>

            
          </form>
        </div>
      </div>
    `;

    const modal = createModal(content);

    // Adicionar evento de envio do formulário
    const form = modal.querySelector("#registration-form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      alert(
        `Conta criada com sucesso!\n\nBem-vindo(a) ${formData.get("name")}! Sua conta foi criada e você já pode aproveitar todos os recursos personalizados do Destino Certo.`,
      );
      modal.remove();
    });
  }

  // Função para download de guias
  function downloadGuide(guideType) {
    alert(`Baixando guia de ${guideType}...`);
  }

  // Função para download de todos os recursos
  function downloadAllResources() {
    alert("Baixando todos os recursos de acessibilidade...");
  }

  // Função para atualizar informações de transporte baseado no destino
  function updateTransportInfo(destination) {
    const data = routeData[destination];
    if (!data) return;

    // Atualizar tempos e distâncias
    const transportTime = document.getElementById("transport-time");
    if (transportTime) transportTime.textContent = `Tempo: ${data.transport.time}`;
    const transportDistance = document.getElementById("transport-distance");
    if (transportDistance) transportDistance.textContent = `Distância: ${data.transport.distance}`;

    const publicTime = document.getElementById("public-time");
    if (publicTime) publicTime.textContent = `Tempo: ${data.public.time}`;
    const publicDistance = document.getElementById("public-distance");
    if (publicDistance) publicDistance.textContent = `Distância: ${data.public.distance}`;

    const flightTime = document.getElementById("flight-time");
    if (flightTime) flightTime.textContent = `Tempo: ${data.flight.time}`;
    const flightDistance = document.getElementById("flight-distance");
    if (flightDistance) flightDistance.textContent = `Distância: ${data.flight.distance}`;

    const carTime = document.getElementById("car-time");
    if (carTime) carTime.textContent = `Tempo: ${data.car.time}`;
    const carDistance = document.getElementById("car-distance");
    if (carDistance) carDistance.textContent = `Distância: ${data.car.distance}`;

    // Atualizar empresas de ônibus
    const busCompanies = document.getElementById("bus-companies");
    if (busCompanies) {
      busCompanies.innerHTML = data.busCompanies.map((company) => `<span>${company}</span>`).join("");
    }

    // Atualizar empresas de metrô/trem
    const metroCompanies = document.getElementById("metro-companies");
    if (metroCompanies) {
      metroCompanies.innerHTML = data.metroCompanies.map((company) => `<span>${company}</span>`).join("");
    }
  }

  // Função para renderizar filtros de acessibilidade
  function renderAccessibilityFilters() {
    const filtersContainer = document.getElementById("accessibility-filters");
    if (!filtersContainer) return;

    filtersContainer.innerHTML = "";

    accessibilityFilters.forEach((filter) => {
      const isActive = state.activeFilters.includes(filter.name);
      const filterButton = document.createElement("button");
      filterButton.className = `filter-button ${isActive ? "active" : ""}`;
      filterButton.setAttribute("data-filter", filter.name);

      filterButton.innerHTML = `
        <div class="filter-icon">${filter.icon}</div>
        <span class="filter-name">${filter.name}</span>
        ${isActive ? '<span class="filter-check"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>' : ""}
      `;

      filterButton.addEventListener("click", () => {
        toggleFilter(filter.name);
      });

      filtersContainer.appendChild(filterButton);
    });
  }

  // Função para renderizar hospedagens
  function renderAccommodations() {
    const accommodationsGrid = document.getElementById("accommodations-grid");
    const noResults = document.getElementById("no-results");

    if (!accommodationsGrid || !noResults) return;

    if (state.filteredAccommodations.length === 0 && state.showSearchResults) {
      accommodationsGrid.innerHTML = "";
      noResults.classList.remove("hidden");
    } else {
      noResults.classList.add("hidden");
      accommodationsGrid.innerHTML = "";

      state.filteredAccommodations.forEach((accommodation) => {
        const accommodationCard = document.createElement("div");
        accommodationCard.className = "accommodation-card";

        let accessibilityIconsHTML = "";
        accommodation.accessibilityFeatures.forEach((feature) => {
          accessibilityIconsHTML += `
            <div class="accessibility-icon" title="${feature.name}">
              ${feature.icon}
            </div>
          `;
        });

        let featuresHTML = "";
        accommodation.accessibilityFeatures.forEach((feature) => {
          featuresHTML += `
            <span class="feature-tag">
              ${feature.icon}
              <span>${feature.name}</span>
            </span>
          `;
        });

        accommodationCard.innerHTML = `
          <div class="accommodation-image">
            <img src="${accommodation.image}" alt="${accommodation.name}">
            <div class="accessibility-icons">
              ${accessibilityIconsHTML}
            </div>
          </div>
          <div class="accommodation-content">
            <div class="accommodation-header">
              <h3 class="accommodation-name">${accommodation.name}</h3>
              <div class="accommodation-rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" class="star-icon">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="rating-value">${accommodation.rating}</span>
              </div>
            </div>
            <p class="accommodation-description">${accommodation.description}</p>

            <div class="accommodation-details">
              <div class="detail-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>${accommodation.details.rooms} quartos</span>
              </div>
              <div class="detail-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${accommodation.location}</span>
              </div>
              <div class="detail-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 010 7.75"></path>
                </svg>
                <span>Para ${accommodation.details.capacity} pessoas</span>
              </div>
            </div>

            <div class="accessibility-features">
              <h4 class="features-title">Recursos de acessibilidade:</h4>
              <div class="features-list">
                ${featuresHTML}
              </div>
            </div>

            <button class="details-button" data-accommodation="${accommodation.name}">Ver detalhes e itinerário</button>
          </div>
        `;

        accommodationsGrid.appendChild(accommodationCard);
      });

      // Adicionar event listeners para os botões de detalhes
      document.querySelectorAll(".details-button").forEach((button) => {
        button.addEventListener("click", function () {
          const accommodationName = this.getAttribute("data-accommodation");
          const accommodation = state.filteredAccommodations.find((d) => d.name === accommodationName);
          if (accommodation) {
            openAccommodationModal(accommodation);
          }
        });
      });
    }

    const accommodationsTitle = document.getElementById("accommodations-title");
    if (accommodationsTitle) {
      accommodationsTitle.textContent = state.showSearchResults ? "Resultados da Pesquisa" : "Hospedagens Acessíveis";
    }
  }

  // Função para renderizar atrações
  function renderAttractions() {
    const attractionsGrid = document.getElementById("attractions-grid");
    if (!attractionsGrid) return;

    attractionsGrid.innerHTML = "";

    state.filteredAttractions.forEach((attraction) => {
      const attractionCard = document.createElement("div");
      attractionCard.className = "attraction-card";

      let featuresHTML = "";
      attraction.accessibilityFeatures.forEach((feature) => {
        featuresHTML += `
          <span class="attraction-feature">
            ${feature.icon}
            <span>${feature.name}</span>
          </span>
        `;
      });

      attractionCard.innerHTML = `
        <div class="attraction-image">
          <img src="${attraction.image}" alt="${attraction.name}">
        </div>
        <div class="attraction-content">
          <div class="attraction-header">
            <h3 class="attraction-name">${attraction.name}</h3>
            <span class="attraction-distance">${attraction.distance}</span>
          </div>
          <p class="attraction-description">${attraction.description}</p>

          <div class="attraction-features">
            <h4 class="attraction-features-title">Acessibilidade:</h4>
            <div class="attraction-features-list">
              ${featuresHTML}
            </div>
          </div>
          <button class="view-more-button" data-attraction="${attraction.name}">
            Ver mais
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      `;

      attractionsGrid.appendChild(attractionCard);
    });

    // Adicionar event listeners para os botões "Ver mais"
    document.querySelectorAll(".view-more-button").forEach((button) => {
      button.addEventListener("click", function () {
        const attractionName = this.getAttribute("data-attraction");
        const attraction = state.filteredAttractions.find((a) => a.name === attractionName);
        if (attraction) {
          openAttractionModal(attraction);
        }
      });
    });
  }

  // Função para abrir modal de hospedagem
  function openAccommodationModal(accommodation) {
    let featuresHTML = "";
    accommodation.accessibilityFeatures.forEach((feature) => {
      featuresHTML += `
        <div class="feature-card">
          <div class="feature-card-icon">
            ${feature.icon}
          </div>
          <div class="feature-card-content">
            <h4>${feature.name}</h4>
            <p>Disponível em toda a acomodação</p>
          </div>
        </div>
      `;
    });

    let nearbyAttractionsHTML = "";
    accommodation.nearbyAttractions.forEach((attraction) => {
      nearbyAttractionsHTML += `<li>${attraction}</li>`;
    });

    let itineraryHTML = "";
    if (accommodation.itinerary && accommodation.itinerary.length > 0) {
      accommodation.itinerary.forEach((day) => {
        let activitiesHTML = "";
        day.activities.forEach((activity) => {
          activitiesHTML += `
            <div class="itinerary-activity">
              <div class="itinerary-activity-time">${activity.time}</div>
              <div class="itinerary-activity-details">
                <div class="itinerary-activity-title">${activity.title}</div>
                <div class="itinerary-activity-description">${activity.description}</div>
              </div>
            </div>
          `;
        });

        itineraryHTML += `
          <div class="itinerary-day">
            <div class="itinerary-day-header">
              <div class="itinerary-day-title">${day.day}</div>
              <div class="itinerary-day-date">${day.date}</div>
            </div>
            <div class="itinerary-activities">
              ${activitiesHTML}
            </div>
          </div>
        `;
      });
    } else {
      itineraryHTML = `<p>Itinerário personalizado disponível mediante solicitação.</p>`;
    }

    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <div class="modal-image">
            <img src="${accommodation.image}" alt="${accommodation.name}">
          </div>

          <div class="modal-header">
            <h2>${accommodation.name}</h2>
            <div class="modal-rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="star-icon">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span class="rating-value">${accommodation.rating}</span>
            </div>
          </div>

          <p class="modal-description">${accommodation.description}</p>

          <div class="modal-location">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${accommodation.location}</span>
          </div>

          <div class="modal-section">
            <h3>Recursos de Acessibilidade</h3>
            <div class="features-grid">
              ${featuresHTML}
            </div>
          </div>

          <div class="modal-section">
            <h3>Atrações Próximas</h3>
            <ul class="nearby-attractions">
              ${nearbyAttractionsHTML}
            </ul>
          </div>

          <div class="modal-section">
            <h3>Itinerário Sugerido</h3>
            <div class="itinerary">
              ${itineraryHTML}
            </div>
          </div>

          <div class="modal-buttons">
           
            <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
          </div>
        </div>
      </div>
    `;

    createModal(content);
  }

  // Função para abrir modal de atração
  function openAttractionModal(attraction) {
    let featuresHTML = "";
    attraction.accessibilityFeatures.forEach((feature) => {
      featuresHTML += `
        <div class="feature-card">
          <div class="feature-card-icon">
            ${feature.icon}
          </div>
          <div class="feature-card-content">
            <h4>${feature.name}</h4>
            <p>Disponível na atração</p>
          </div>
        </div>
      `;
    });

    const content = `
      <div class="modal-content">
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <div class="modal-image">
            <img src="${attraction.image}" alt="${attraction.name}">
          </div>

          <div class="modal-header">
            <h2>${attraction.name}</h2>
            <span class="modal-distance">${attraction.distance}</span>
          </div>

          <p class="modal-description">${attraction.description}</p>

          <div class="modal-section">
            <h3>Recursos de Acessibilidade</h3>
            <div class="features-grid">
              ${featuresHTML}
            </div>
          </div>

          <div class="modal-section">
            <h3>Informações da Visita</h3>
            <div class="visit-info">
              <div class="info-item">
                <strong>Duração:</strong> ${attraction.details.duration}
              </div>
              <div class="info-item">
                <strong>Melhor horário:</strong> ${attraction.details.bestTime}
              </div>
              <div class="info-item">
                <strong>Serviços:</strong> ${attraction.details.services}
              </div>
            </div>
          </div>

          <div class="modal-buttons">
            
            <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
          </div>
        </div>
      </div>
    `;

    createModal(content);
  }

  // Função para alternar filtros
  function toggleFilter(filterName) {
    const index = state.activeFilters.indexOf(filterName);
    if (index > -1) {
      state.activeFilters.splice(index, 1);
    } else {
      state.activeFilters.push(filterName);
    }

    applyFilters();
    renderAccessibilityFilters();
  }

  // Função para aplicar filtros
  function applyFilters() {
    if (state.activeFilters.length === 0 && !state.routeDestination && !state.currentCategory && !state.searchLocation) {
      state.filteredAccommodations = [...accommodations];
      state.filteredAttractions = [...attractions];
      state.showSearchResults = false;
    } else {
      state.showSearchResults = true;

      // Filtrar hospedagens
      state.filteredAccommodations = accommodations.filter((accommodation) => {
        // Filtro por rota
        if (state.routeDestination) {
          const targetCity = routeData[state.routeDestination]?.city;
          if (targetCity && accommodation.city !== targetCity) {
            return false;
          }
        }

        // Filtro por categoria
        if (state.currentCategory && accommodation.category !== state.currentCategory) {
          return false;
        }

        // Filtro por localização (pesquisa principal)
        if (state.searchLocation) {
          const searchTerm = state.searchLocation.toLowerCase();
          if (!accommodation.name.toLowerCase().includes(searchTerm) &&
              !accommodation.location.toLowerCase().includes(searchTerm) &&
              !accommodation.description.toLowerCase().includes(searchTerm)) {
            return false;
          }
        }

        // Filtro por recursos de acessibilidade
        if (state.activeFilters.length > 0) {
          return state.activeFilters.every((filter) =>
            accommodation.accessibilityFeatures.some((feature) => feature.name === filter),
          );
        }

        return true;
      });

      // Filtrar atrações
      state.filteredAttractions = attractions.filter((attraction) => {
        // Filtro por rota
        if (state.routeDestination) {
          const targetCity = routeData[state.routeDestination]?.city;
          if (targetCity && attraction.city !== targetCity) {
            return false;
          }
        }

        // Filtro por categoria
        if (state.currentCategory && attraction.category !== state.currentCategory) {
          return false;
        }

        // Filtro por localização (pesquisa principal)
        if (state.searchLocation) {
          const searchTerm = state.searchLocation.toLowerCase();
          if (!attraction.name.toLowerCase().includes(searchTerm) &&
              !attraction.city.toLowerCase().includes(searchTerm) &&
              !attraction.description.toLowerCase().includes(searchTerm)) {
            return false;
          }
        }

        // Filtro por recursos de acessibilidade
        if (state.activeFilters.length > 0) {
          return state.activeFilters.every((filter) =>
            attraction.accessibilityFeatures.some((feature) => feature.name === filter),
          );
        }

        return true;
      });
    }

    renderAccommodations();
    renderAttractions();
  }

  // Event listeners para os botões do footer
  const beachesButton = document.getElementById("beaches-button");
  const parksButton = document.getElementById("parks-button");
  const citiesButton = document.getElementById("cities-button");

  if (beachesButton) {
    beachesButton.addEventListener("click", () => {
      filterByCategory("praia");
    });
  }

  if (parksButton) {
    parksButton.addEventListener("click", () => {
      filterByCategory("parque");
    });
  }

  if (citiesButton) {
    citiesButton.addEventListener("click", () => {
      filterByCategory("historica");
    });
  }

  // Event listeners para outros botões do footer e header
  const missionButton = document.getElementById("mission-button");
  const contactButton = document.getElementById("contact-button");
  const teamButton = document.getElementById("team-button"); // Botão na seção "Sobre o Projeto"
  const teamButtonAlt = document.getElementById("team-button-alt"); // Botão no footer
  const certificationsButton = document.getElementById("certifications-button");
  const resourcesButton = document.getElementById("resources-button");
  const reviewsButton = document.getElementById("reviews-button");
  const itinerariesButton = document.getElementById("custom-itineraries-button"); // ID corrigido no HTML

  const mobilityButton = document.getElementById("programming-button"); // ID do HTML
  const visualButton = document.getElementById("other-projects-button"); // ID do HTML
  const hearingButton = document.querySelector('[data-accessibility="hearing"]');
  const dietButton = document.querySelector('[data-accessibility="diet"]');

  const registrationButton = document.querySelector(".user-menu"); // Botão de login/cadastro no header
  const guideDownloadButton = document.getElementById("guide-download-button"); // Botão na seção de guia

  if (missionButton) {
    missionButton.addEventListener("click", showMissionModal);
  }

  if (contactButton) {
    contactButton.addEventListener("click", showContactModal);
  }

  if (teamButton) {
    teamButton.addEventListener("click", showTeamModal);
  }
  if (teamButtonAlt) {
    teamButtonAlt.addEventListener("click", showTeamModal);
  }

  if (certificationsButton) {
    certificationsButton.addEventListener("click", showCertificationsModal);
  }

  if (resourcesButton) {
    resourcesButton.addEventListener("click", showResourcesModal);
  }

  if (reviewsButton) {
    reviewsButton.addEventListener("click", showReviewsModal);
  }

  if (itinerariesButton) {
    itinerariesButton.addEventListener("click", showCustomItinerariesModal);
  }

  if (mobilityButton) {
    mobilityButton.addEventListener("click", showMobilityModal);
  }

  if (visualButton) {
    visualButton.addEventListener("click", showVisualModal);
  }

  if (hearingButton) {
    hearingButton.addEventListener("click", showHearingModal);
  }

  if (dietButton) {
    dietButton.addEventListener("click", showDietModal);
  }

  if (registrationButton) {
    registrationButton.addEventListener("click", showRegistrationModal);
  }

  if (guideDownloadButton) {
    guideDownloadButton.addEventListener("click", () => downloadGuide("completo"));
  }

  // Botão de pesquisa principal
  const searchButton = document.getElementById("search-button");
  if (searchButton) {
    searchButton.addEventListener("click", () => {
      state.searchLocation = document.getElementById("location-input").value;
      const accessibilitySelect = document.getElementById("accessibility-select");
      if (accessibilitySelect && accessibilitySelect.value) {
        state.activeFilters = [accessibilitySelect.value];
      } else {
        state.activeFilters = [];
      }
      state.currentCategory = null; // Limpa a categoria ao usar a pesquisa principal
      state.routeDestination = null; // Limpa o filtro de rota ao usar a pesquisa principal
      applyFilters();
      renderAccessibilityFilters();
    });
  }

  // Botão "Ver todos" / "Limpar filtros"
  const clearFiltersButton = document.getElementById("clear-filters-button");
  if (clearFiltersButton) {
    clearFiltersButton.addEventListener("click", clearFilters);
  }
  const clearFiltersButtonAlt = document.getElementById("clear-filters-button-alt");
  if (clearFiltersButtonAlt) {
    clearFiltersButtonAlt.addEventListener("click", clearFilters);
  }

  // Botões do planejador de rotas
  document.querySelectorAll(".accessibility-option").forEach(button => {
    button.addEventListener("click", function() {
      this.classList.toggle("active");
      const need = this.getAttribute("data-need");
      const index = state.selectedAccessibilityNeeds.indexOf(need);
      if (index > -1) {
        state.selectedAccessibilityNeeds.splice(index, 1);
      } else {
        state.selectedAccessibilityNeeds.push(need);
      }
    });
  });

  const calculateRouteBtn = document.getElementById("calculate-route-btn");
  if (calculateRouteBtn) {
    calculateRouteBtn.addEventListener("click", () => {
      const origin = document.getElementById("origin-select").value;
      const destination = document.getElementById("destination-select").value;

      if (!origin || !destination) {
        alert("Por favor, selecione a cidade de origem e o destino.");
        return;
      }

      // Atualiza as informações de transporte com base no destino selecionado
      updateTransportInfo(destination);

      // Exibe os resultados da rota
      const routeResults = document.getElementById("route-results");
      if (routeResults) routeResults.classList.remove("hidden");

      // Aplica o filtro de cidade para hospedagens e atrações
      state.searchLocation = ""; // Limpa a pesquisa principal
      state.activeFilters = []; // Limpa os filtros de acessibilidade principais
      state.currentCategory = null; // Limpa a categoria
      state.routeDestination = destination; // Define o destino da rota como filtro
      applyFilters();
      renderAccessibilityFilters(); // Re-renderiza os filtros para refletir o estado limpo
    });
  }

  // Inicializar a aplicação
  renderAccessibilityFilters();
  renderAccommodations();
  renderAttractions();

  // Tornar funções globais para uso nos modais (se necessário, embora com event listeners diretos seja menos comum)
  window.showMissionModal = showMissionModal;
  window.showContactModal = showContactModal;
  window.showTeamModal = showTeamModal;
  window.showCertificationsModal = showCertificationsModal;
  window.showResourcesModal = showResourcesModal;
  window.showReviewsModal = showReviewsModal;
  window.showCustomItinerariesModal = showCustomItinerariesModal;
  window.showMobilityModal = showMobilityModal;
  window.showVisualModal = showVisualModal;
  window.showHearingModal = showHearingModal;
  window.showDietModal = showDietModal;
  window.showRegistrationModal = showRegistrationModal;
  window.downloadGuide = downloadGuide;
  window.downloadAllResources = downloadAllResources;
  window.updateTransportInfo = updateTransportInfo;
  window.clearFilters = clearFilters;
});