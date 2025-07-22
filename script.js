document.addEventListener("DOMContentLoaded", () => {
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
  ]

  // Dados da equipe
  const teamMembers = [
    {
      name: "Vitor",
      role: "Sub-Lider",
      image: "img/vitao_img.jpeg",
    },
    {
      name: "Leandro",
      role: "Conversa com Especialista",
      image: "img/leandro_img.jpeg",
    },
    {
      name: "Leandro",
      role: "Pesquisa de Campo",
      image: "img/leandro2_img.jpeg",
    },
    {
      name: "Jonathan",
      role: "Documentação",
      image: "img/jhow_img.jpeg",
    },
    {
      name: "Arthur",
      role: "Lider",
      image: "img/arthur_img.PNG",
    },
    {
      name: "Mesquita",
      role: "Design Logo",
      image: "img/mesquita_img.jpeg",
    },
  ]

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
      name: "Pousada Brisa do Mar",
      image: "img/brisa_img.jpg",
      rating: "4.8",
      description: "Pousada à beira-mar com quartos adaptados e vista deslumbrante para o oceano.",
      details: {
        rooms: 2,
        bathrooms: 1,
        capacity: 4,
      },
      location: "Praia do Forte, Bahia",
      accessibilityFeatures: [
        {
          name: "Rampas de Acesso",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Banheiros Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
        {
          name: "Esteiras na Areia",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h16M4 16h16"></path></svg>`,
        },
      ],
      nearbyAttractions: ["Projeto TAMAR", "Mercado de Artesanato", "Reserva Natural"],
      itinerary: [
        {
          day: "Dia 1",
          date: "15/06/2023",
          activities: [
            {
              time: "09:00",
              title: "Check-in",
              description: "Recepção com equipe especializada em acessibilidade.",
            },
            {
              time: "12:00",
              title: "Almoço no Restaurante da Pousada",
              description: "Cardápio com opções para dietas especiais.",
            },
            {
              time: "15:00",
              title: "Visita ao Projeto TAMAR",
              description: "Atração totalmente acessível com trilhas adaptadas.",
            },
          ],
        },
        {
          day: "Dia 2",
          date: "16/06/2023",
          activities: [
            {
              time: "08:00",
              title: "Café da manhã",
              description: "Buffet variado com atendimento personalizado.",
            },
            {
              time: "10:00",
              title: "Passeio pela praia",
              description: "Cadeiras anfíbias disponíveis mediante agendamento.",
            },
            {
              time: "14:00",
              title: "Tour pelo Mercado de Artesanato",
              description: "Local com acessibilidade completa e guias especializados.",
            },
          ],
        },
      ],
    },
    {
      name: "Hotel Central Park",
      image: "img/park_img.jpg",
      rating: "4.7",
      description: "Hotel no coração da cidade com excelente infraestrutura para pessoas com mobilidade reduzida.",
      details: {
        rooms: 3,
        bathrooms: 2,
        capacity: 6,
      },
      location: "São Paulo, SP",
      accessibilityFeatures: [
        {
          name: "Elevadores",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`,
        },
        {
          name: "Banheiros Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
        {
          name: "Piso Tátil",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`,
        },
      ],
      nearbyAttractions: ["Parque Ibirapuera", "Museu de Arte", "Shopping Center"],
      itinerary: [
        {
          day: "Dia 1",
          date: "20/07/2023",
          activities: [
            {
              time: "14:00",
              title: "Check-in",
              description: "Recepção com equipe especializada e assistência personalizada.",
            },
            {
              time: "16:00",
              title: "Tour pelo hotel",
              description: "Apresentação das instalações e recursos de acessibilidade.",
            },
            {
              time: "19:00",
              title: "Jantar no restaurante do hotel",
              description: "Cardápio com opções para diversas restrições alimentares.",
            },
          ],
        },
        {
          day: "Dia 2",
          date: "21/07/2023",
          activities: [
            {
              time: "09:00",
              title: "Visita ao Parque Ibirapuera",
              description: "Transporte adaptado e guia especializado disponíveis.",
            },
            {
              time: "13:00",
              title: "Almoço em restaurante parceiro",
              description: "Local totalmente acessível próximo ao parque.",
            },
            {
              time: "15:00",
              title: "Visita ao Museu de Arte",
              description: "Museu com instalações acessíveis e exposições táteis.",
            },
          ],
        },
      ],
    },
    {
      name: "Pousada Montanha Verde",
      image: "img/MV_img.jpg",
      rating: "4.6",
      description: "Pousada em meio à natureza com chalés adaptados e trilhas acessíveis.",
      details: {
        rooms: 1,
        bathrooms: 1,
        capacity: 2,
      },
      location: "Campos do Jordão, SP",
      accessibilityFeatures: [
        {
          name: "Rampas de Acesso",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Banheiros Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
        {
          name: "Estacionamento",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path></svg>`,
        },
      ],
      nearbyAttractions: ["Parque Amantikir", "Teleférico", "Centro Histórico"],
      itinerary: [
        {
          day: "Dia 1",
          date: "10/08/2023",
          activities: [
            {
              time: "12:00",
              title: "Check-in",
              description: "Recepção com assistência personalizada para hospedagem.",
            },
            {
              time: "15:00",
              title: "Passeio pelo jardim da pousada",
              description: "Caminhos adaptados com belas paisagens naturais.",
            },
            {
              time: "18:00",
              title: "Jantar especial",
              description: "Gastronomia típica da montanha com opções para dietas especiais.",
            },
          ],
        },
        {
          day: "Dia 2",
          date: "11/08/2023",
          activities: [
            {
              time: "09:30",
              title: "Visita ao Parque Amantikir",
              description: "Jardins com caminhos acessíveis e belezas naturais.",
            },
            {
              time: "14:00",
              title: "Passeio de teleférico",
              description: "Cabines adaptadas para cadeiras de rodas com vista panorâmica.",
            },
            {
              time: "17:00",
              title: "Tour pelo Centro Histórico",
              description: "Visita guiada com informações sobre a história local.",
            },
          ],
        },
      ],
    },
  ]

  const attractions = [
    {
      name: "Cristo Redentor",
      image: "img/cristo_Redentor.webp",
      distance: "8 km do Hotel Copacabana Palace",
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
      name: "Projeto TAMAR",
      image: "img/PT_img.jpg",
      distance: "2 km da Praia do Forte",
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
    {
      name: "Parque Ibirapuera",
      image: "img/ibira_img.jpg",
      distance: "1,5 km do Hotel Central Park",
      description: "Maior parque urbano de São Paulo com trilhas acessíveis e atividades inclusivas.",
      accessibilityFeatures: [
        {
          name: "Trilhas Acessíveis",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Banheiros Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
      ],
      details: {
        duration: "Meio dia a dia inteiro",
        bestTime: "Manhã (dias de semana)",
        services: "Empréstimo de cadeiras de rodas, mapas táteis, bicicletário adaptado",
      },
    },
  ]

  // Estado da aplicação
  const state = {
    searchLocation: "",
    activeFilters: [],
    filteredAccommodations: [...accommodations],
    showSearchResults: false,
    modalContent: null,
    selectedAccessibilityNeeds: [],
  }

  // Adicionar dados para as novas funcionalidades
  const accessibilityInfo = {
    mobilityReduced: {
      title: "Mobilidade Reduzida",
      content: `
        <h3>Recursos para Pessoas com Mobilidade Reduzida</h3>
        <div class="accessibility-content">
          <div class="accessibility-section">
            <h4>🏨 Hospedagens</h4>
            <ul>
              <li>Quartos adaptados com portas largas (mín. 80cm)</li>
              <li>Banheiros com barras de apoio e box acessível</li>
              <li>Camas com altura adequada para transferência</li>
              <li>Controles de luz e ar condicionado ao alcance</li>
              <li>Rampas de acesso em todas as áreas</li>
            </ul>
          </div>
          
          <div class="accessibility-section">
            <h4>🎯 Atrações</h4>
            <ul>
              <li>Elevadores e rampas em pontos turísticos</li>
              <li>Estacionamento preferencial próximo</li>
              <li>Cadeiras de rodas disponíveis para empréstimo</li>
              <li>Guias treinados para assistência</li>
              <li>Rotas alternativas para locais de difícil acesso</li>
            </ul>
          </div>
          
          <div class="accessibility-section">
            <h4>🚗 Transporte</h4>
            <ul>
              <li>Veículos adaptados com rampa ou elevador</li>
              <li>Espaço para fixação de cadeira de rodas</li>
              <li>Motoristas treinados para assistência</li>
              <li>Agendamento prioritário</li>
            </ul>
          </div>
        </div>
      `,
    },
    visualImpairment: {
      title: "Deficiência Visual",
      content: `
        <h3>Recursos para Pessoas com Deficiência Visual</h3>
        <div class="accessibility-content">
          <div class="accessibility-section">
            <h4>🏨 Hospedagens</h4>
            <ul>
              <li>Quartos com layout padronizado e móveis fixos</li>
              <li>Informações em Braille (cardápio, instruções)</li>
              <li>Piso tátil nos corredores principais</li>
              <li>Telefones com teclas em Braille</li>
              <li>Equipe treinada para orientação</li>
            </ul>
          </div>
          
          <div class="accessibility-section">
            <h4>🎯 Atrações</h4>
            <ul>
              <li>Audioguias com descrições detalhadas</li>
              <li>Maquetes táteis de monumentos</li>
              <li>Placas informativas em Braille</li>
              <li>Guias especializados em audiodescrição</li>
              <li>Caminhos com piso tátil</li>
            </ul>
          </div>
          
          <div class="accessibility-section">
            <h4>🐕 Cão-Guia</h4>
            <ul>
              <li>Acesso liberado em todos os estabelecimentos</li>
              <li>Área específica para necessidades do animal</li>
              <li>Água e alimentação disponível</li>
              <li>Equipe orientada sobre legislação</li>
            </ul>
          </div>
        </div>
      `,
    },
    hearingImpairment: {
      title: "Deficiência Auditiva",
      content: `
        <h3>Recursos para Pessoas com Deficiência Auditiva</h3>
        <div class="accessibility-content">
          <div class="accessibility-section">
            <h4>🏨 Hospedagens</h4>
            <ul>
              <li>Quartos com sinalizadores visuais (campainha, telefone)</li>
              <li>Despertadores com vibração</li>
              <li>TV com closed caption</li>
              <li>Funcionários com conhecimento básico de Libras</li>
              <li>Comunicação por escrito disponível</li>
            </ul>
          </div>
          
          <div class="accessibility-section">
            <h4>🎯 Atrações</h4>
            <ul>
              <li>Intérpretes de Libras em tours</li>
              <li>Materiais informativos visuais</li>
              <li>Aplicativos com tradução em Libras</li>
              <li>Legendas em vídeos informativos</li>
              <li>Sinalizadores visuais de emergência</li>
            </ul>
          </div>
          
          <div class="accessibility-section">
            <h4>📱 Tecnologia</h4>
            <ul>
              <li>Apps de tradução instantânea</li>
              <li>QR codes com informações visuais</li>
              <li>Chat online para comunicação</li>
              <li>Vídeos com legendas e Libras</li>
            </ul>
          </div>
        </div>
      `,
    },
    specialDiet: {
      title: "Alimentação Especial",
      content: `
        <h3>Opções de Alimentação Especial</h3>
        <div class="accessibility-content">
          <div class="accessibility-section">
            <h4>🥗 Restrições Alimentares</h4>
            <ul>
              <li>Cardápios sem glúten certificados</li>
              <li>Opções veganas e vegetarianas</li>
              <li>Pratos sem lactose</li>
              <li>Alimentação kosher e halal</li>
              <li>Cardápios para diabéticos</li>
            </ul>
          </div>
          
          <div class="accessibility-section">
            <h4>👨‍🍳 Preparo Especializado</h4>
            <ul>
              <li>Cozinha separada para alérgicos</li>
              <li>Chefs treinados em dietas especiais</li>
              <li>Ingredientes orgânicos disponíveis</li>
              <li>Informações nutricionais detalhadas</li>
              <li>Personalização de pratos</li>
            </ul>
          </div>
          
          <div class="accessibility-section">
            <h4>🏥 Necessidades Médicas</h4>
            <ul>
              <li>Dietas para disfagia (dificuldade de deglutição)</li>
              <li>Alimentação pastosa ou líquida</li>
              <li>Controle de sódio e açúcar</li>
              <li>Suplementação nutricional</li>
              <li>Horários flexíveis para medicação</li>
            </ul>
          </div>
        </div>
      `,
    },
  }

  // Função para gerar PDF
  function generateAccessibilityGuide() {
    const pdfContent = `
GUIA DE ACESSIBILIDADE - DESTINO CERTO

ÍNDICE
1. Introdução à Acessibilidade no Turismo
2. Direitos das Pessoas com Deficiência
3. Tipos de Acessibilidade
4. Checklist para Viagem Acessível
5. Recursos por Tipo de Necessidade
6. Contatos de Emergência
7. Legislação Aplicável

1. INTRODUÇÃO À ACESSIBILIDADE NO TURISMO

O turismo acessível é um direito fundamental que garante que todas as pessoas, independentemente de suas limitações físicas, sensoriais ou cognitivas, possam desfrutar de experiências de viagem seguras e prazerosas.

2. DIREITOS DAS PESSOAS COM DEFICIÊNCIA

- Acesso a todos os espaços públicos e privados de uso coletivo
- Atendimento prioritário
- Acompanhante gratuito quando necessário
- Transporte adaptado
- Informações em formatos acessíveis

3. TIPOS DE ACESSIBILIDADE

3.1 ACESSIBILIDADE FÍSICA
- Rampas com inclinação adequada (máx. 8,33%)
- Elevadores com dimensões mínimas
- Portas com largura mínima de 80cm
- Banheiros adaptados com barras de apoio
- Estacionamento preferencial

3.2 ACESSIBILIDADE SENSORIAL
- Piso tátil para orientação
- Informações em Braille
- Audioguias e audiodescrição
- Intérpretes de Libras
- Sinalizadores visuais

3.3 ACESSIBILIDADE COGNITIVA
- Informações claras e objetivas
- Pictogramas universais
- Ambientes com baixo estímulo sensorial
- Rotinas previsíveis
- Apoio personalizado

4. CHECKLIST PARA VIAGEM ACESSÍVEL

ANTES DA VIAGEM:
□ Verificar acessibilidade do transporte
□ Confirmar adaptações da hospedagem
□ Pesquisar acessibilidade das atrações
□ Levar documentos médicos
□ Verificar seguro de viagem
□ Confirmar medicamentos necessários

DURANTE A VIAGEM:
□ Manter documentos acessíveis
□ Ter contatos de emergência
□ Verificar rotas alternativas
□ Confirmar horários e reservas
□ Manter comunicação com familiares

5. RECURSOS POR TIPO DE NECESSIDADE

MOBILIDADE REDUZIDA:
- Cadeiras de rodas disponíveis
- Veículos adaptados
- Quartos no térreo ou com elevador
- Banheiros com barras de apoio
- Rampas de acesso

DEFICIÊNCIA VISUAL:
- Cão-guia permitido
- Audioguias disponíveis
- Piso tátil
- Informações em Braille
- Guias especializados

DEFICIÊNCIA AUDITIVA:
- Intérpretes de Libras
- Legendas em vídeos
- Sinalizadores visuais
- Aplicativos de tradução
- Comunicação escrita

6. CONTATOS DE EMERGÊNCIA

SAMU: 192
Bombeiros: 193
Polícia: 190
Defesa Civil: 199
Ouvidoria Nacional de Direitos Humanos: 100

7. LEGISLAÇÃO APLICÁVEL

- Lei Brasileira de Inclusão (Lei 13.146/2015)
- NBR 9050 (Acessibilidade a edificações)
- Decreto 5.296/2004
- Lei 10.098/2000
- Convenção sobre os Direitos das Pessoas com Deficiência

---

Este guia foi desenvolvido pelo projeto Destino Certo para promover o turismo acessível e inclusivo.

Para mais informações, visite nosso site ou entre em contato conosco.
    `

    const blob = new Blob([pdfContent], { type: "text/plain" })
    const url = window.URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "Guia_Acessibilidade_Destino_Certo.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  // Função para mostrar informações de acessibilidade
  function showAccessibilityInfo(type) {
    const info = accessibilityInfo[type]
    if (!info) return

    const modal = document.createElement("div")
    modal.className = "modal active"
    modal.innerHTML = `
      <div class="modal-content">
        <button class="close-button" onclick="this.closest('.modal').remove()">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          ${info.content}
          <div class="modal-buttons">
            <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
          </div>
        </div>
      </div>
    `

    document.body.appendChild(modal)

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove()
      }
    })
  }

  // Função para mostrar sistema de cadastro
  function showRegistrationModal() {
    const modal = document.createElement("div")
    modal.className = "modal active"
    modal.innerHTML = `
      <div class="modal-content">
        <button class="close-button" onclick="this.closest('.modal').remove()">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <h2>Cadastro Opcional</h2>
          <p>Cadastre-se para receber dicas personalizadas e novidades sobre turismo acessível!</p>
          
          <form id="registration-form" class="registration-form">
            <div class="form-group">
              <label for="reg-name">Nome Completo:</label>
              <input type="text" id="reg-name" name="name" required>
            </div>
            
            <div class="form-group">
              <label for="reg-email">E-mail:</label>
              <input type="email" id="reg-email" name="email" required>
            </div>
            
            <div class="form-group">
              <label for="reg-phone">Telefone (opcional):</label>
              <input type="tel" id="reg-phone" name="phone">
            </div>
            
            <div class="form-group">
              <label for="reg-accessibility">Necessidades de Acessibilidade:</label>
              <select id="reg-accessibility" name="accessibility">
                <option value="">Selecione (opcional)</option>
                <option value="mobility">Mobilidade Reduzida</option>
                <option value="visual">Deficiência Visual</option>
                <option value="hearing">Deficiência Auditiva</option>
                <option value="cognitive">Deficiência Cognitiva</option>
                <option value="multiple">Múltiplas Necessidades</option>
                <option value="none">Nenhuma Necessidade Especial</option>
              </select>
            </div>
            
            <div class="form-group checkbox-group">
              <label>
                <input type="checkbox" id="reg-newsletter" name="newsletter" checked>
                Quero receber newsletter com dicas de turismo acessível
              </label>
            </div>
            
            <div class="form-group checkbox-group">
              <label>
                <input type="checkbox" id="reg-terms" name="terms" required>
                Aceito os termos de uso e política de privacidade
              </label>
            </div>
            
            <div class="modal-buttons">
              <button type="submit" class="primary-button">Cadastrar</button>
              <button type="button" class="secondary-button" onclick="this.closest('.modal').remove()">Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    `

    document.body.appendChild(modal)

    document.getElementById("registration-form").addEventListener("submit", function (e) {
      e.preventDefault()

      const formData = new FormData(this)
      const userData = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        accessibility: formData.get("accessibility"),
        newsletter: formData.get("newsletter") === "on",
        terms: formData.get("terms") === "on",
      }

      localStorage.setItem("destinoCertoUser", JSON.stringify(userData))

      alert(
        `Cadastro realizado com sucesso!\n\nOlá ${userData.name}, você receberá nossas dicas de turismo acessível em ${userData.email}`,
      )

      modal.remove()
    })

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove()
      }
    })
  }

  // Função para mostrar modal da equipe
  function showTeamModal() {
    const modal = document.createElement("div")
    modal.className = "modal active"
    modal.innerHTML = `
      <div class="modal-content">
        <button class="close-button" onclick="this.closest('.modal').remove()">
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
    `

    document.body.appendChild(modal)

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove()
      }
    })
  }

  // Função para lidar com cliques genéricos em botões
  function handleGenericButtonClick(message) {
    alert(message || "Esta funcionalidade será implementada em breve!")
  }

  // Renderizar filtros de acessibilidade
  function renderAccessibilityFilters() {
    const filtersContainer = document.getElementById("accessibility-filters")
    if (!filtersContainer) return

    filtersContainer.innerHTML = ""

    accessibilityFilters.forEach((filter) => {
      const isActive = state.activeFilters.includes(filter.name)
      const filterButton = document.createElement("button")
      filterButton.className = `filter-button ${isActive ? "active" : ""}`
      filterButton.setAttribute("data-filter", filter.name)

      filterButton.innerHTML = `
        <div class="filter-icon">${filter.icon}</div>
        <span class="filter-name">${filter.name}</span>
        ${isActive ? '<span class="filter-check"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></span>' : ""}
      `

      filtersContainer.appendChild(filterButton)
    })

    document.querySelectorAll(".filter-button").forEach((button) => {
      button.addEventListener("click", function () {
        const filterName = this.getAttribute("data-filter")
        toggleFilter(filterName)
      })
    })
  }

  // Renderizar hospedagens
  function renderAccommodations() {
    const accommodationsGrid = document.getElementById("accommodations-grid")
    const noResults = document.getElementById("no-results")

    if (!accommodationsGrid || !noResults) return

    if (state.filteredAccommodations.length === 0 && state.showSearchResults) {
      accommodationsGrid.innerHTML = ""
      noResults.classList.remove("hidden")
    } else {
      noResults.classList.add("hidden")
      accommodationsGrid.innerHTML = ""

      state.filteredAccommodations.forEach((accommodation) => {
        const accommodationCard = document.createElement("div")
        accommodationCard.className = "accommodation-card"

        let accessibilityIconsHTML = ""
        accommodation.accessibilityFeatures.forEach((feature) => {
          accessibilityIconsHTML += `
            <div class="accessibility-icon" title="${feature.name}">
              ${feature.icon}
            </div>
          `
        })

        let featuresHTML = ""
        accommodation.accessibilityFeatures.forEach((feature) => {
          featuresHTML += `
            <span class="feature-tag">
              ${feature.icon}
              <span>${feature.name}</span>
            </span>
          `
        })

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
                  <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
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
        `

        accommodationsGrid.appendChild(accommodationCard)
      })

      document.querySelectorAll(".details-button").forEach((button) => {
        button.addEventListener("click", function () {
          const accommodationName = this.getAttribute("data-accommodation")
          const accommodation = state.filteredAccommodations.find((d) => d.name === accommodationName)
          if (accommodation) {
            openAccommodationModal(accommodation)
          }
        })
      })
    }

    const accommodationsTitle = document.getElementById("accommodations-title")
    if (accommodationsTitle) {
      accommodationsTitle.textContent = state.showSearchResults ? "Resultados da Pesquisa" : "Hospedagens Acessíveis"
    }
  }

  // Renderizar atrações próximas
  function renderAttractions() {
    const attractionsGrid = document.getElementById("attractions-grid")
    if (!attractionsGrid) return

    attractionsGrid.innerHTML = ""

    attractions.forEach((attraction) => {
      const attractionCard = document.createElement("div")
      attractionCard.className = "attraction-card"

      let featuresHTML = ""
      attraction.accessibilityFeatures.forEach((feature) => {
        featuresHTML += `
          <span class="attraction-feature">
            ${feature.icon}
            <span>${feature.name}</span>
          </span>
        `
      })

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
      `

      attractionsGrid.appendChild(attractionCard)
    })

    document.querySelectorAll(".view-more-button").forEach((button) => {
      button.addEventListener("click", function () {
        const attractionName = this.getAttribute("data-attraction")
        const attraction = attractions.find((a) => a.name === attractionName)
        if (attraction) {
          openAttractionModal(attraction)
        }
      })
    })
  }

  // Função para abrir modal de hospedagem
  function openAccommodationModal(accommodation) {
    let featuresHTML = ""
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
      `
    })

    let nearbyAttractionsHTML = ""
    accommodation.nearbyAttractions.forEach((attraction) => {
      nearbyAttractionsHTML += `<li>${attraction}</li>`
    })

    let itineraryHTML = ""
    accommodation.itinerary.forEach((day) => {
      let activitiesHTML = ""
      day.activities.forEach((activity) => {
        activitiesHTML += `
          <div class="itinerary-activity">
            <div class="itinerary-activity-time">${activity.time}</div>
            <div class="itinerary-activity-details">
              <div class="itinerary-activity-title">${activity.title}</div>
              <div class="itinerary-activity-description">${activity.description}</div>
            </div>
          </div>
        `
      })

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
      `
    })

    const modal = document.createElement("div")
    modal.className = "modal active"
    modal.innerHTML = `
      <div class="modal-content">
        <button class="close-button" onclick="this.closest('.modal').remove()">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <div class="modal-image">
            <img src="${accommodation.image}" alt="${accommodation.name}">
          </div>
          <div class="modal-content-inner">
            <div class="modal-header">
              <h2>${accommodation.name}</h2>
              <div class="accommodation-rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" class="star-icon">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="rating-value">${accommodation.rating}</span>
              </div>
            </div>
            <p>${accommodation.description}</p>

            <div class="location-info">
              <h3>Localização</h3>
              <p>${accommodation.location}</p>
            </div>

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
                  <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
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

            <h3>Recursos de Acessibilidade</h3>
            <div class="features-grid">
              ${featuresHTML}
            </div>

            <h3>Atrações Próximas</h3>
            <ul>
              ${nearbyAttractionsHTML}
            </ul>

            <h3>Itinerário Sugerido</h3>
            <div class="itinerary">
              ${itineraryHTML}
            </div>

            <div class="modal-buttons">
              <button class="primary-button">Reservar Agora</button>
              <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    `

    document.body.appendChild(modal)

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove()
      }
    })
  }

  // Função para abrir modal de atração
  function openAttractionModal(attraction) {
    let featuresHTML = ""
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
      `
    })

    const modal = document.createElement("div")
    modal.className = "modal active"
    modal.innerHTML = `
      <div class="modal-content">
        <button class="close-button" onclick="this.closest('.modal').remove()">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div class="modal-body">
          <div class="modal-image">
            <img src="${attraction.image}" alt="${attraction.name}">
          </div>
          <div class="modal-content-inner">
            <div class="modal-header">
              <h2>${attraction.name}</h2>
              <span class="attraction-distance">${attraction.distance}</span>
            </div>
            <p>${attraction.description}</p>

            <div class="info-box">
              <p><strong>Duração:</strong> ${attraction.details.duration}</p>
              <p><strong>Melhor horário:</strong> ${attraction.details.bestTime}</p>
              <p><strong>Serviços:</strong> ${attraction.details.services}</p>
            </div>

            <h3>Recursos de Acessibilidade</h3>
            <div class="features-grid">
              ${featuresHTML}
            </div>

            <div class="modal-buttons">
              <button class="primary-button">Agendar Visita</button>
              <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    `

    document.body.appendChild(modal)

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove()
      }
    })
  }

  // Renderizar equipe
  function renderTeam() {
    const teamGrid = document.querySelector(".team-grid")
    if (teamGrid) {
      teamGrid.innerHTML = ""

      teamMembers.forEach((member) => {
        const teamMember = document.createElement("div")
        teamMember.className = "team-member"

        teamMember.innerHTML = `
          <div class="member-avatar">
            <img src="${member.image}" alt="${member.name}">
          </div>
          <h3 class="member-name">${member.name}</h3>
          <p class="member-role">${member.role}</p>
        `

        teamGrid.appendChild(teamMember)
      })
    }
  }

  // Funções para manipular o estado
  function toggleFilter(filterName) {
    if (state.activeFilters.includes(filterName)) {
      state.activeFilters = state.activeFilters.filter((f) => f !== filterName)
    } else {
      state.activeFilters.push(filterName)
    }

    filterAccommodations()
    renderAccessibilityFilters()
    renderAccommodations()
  }

  function filterAccommodations() {
    if (state.activeFilters.length === 0 && !state.searchLocation) {
      state.filteredAccommodations = [...accommodations]
      state.showSearchResults = false
    } else {
      state.showSearchResults = true

      state.filteredAccommodations = accommodations.filter((accommodation) => {
        const matchLocation =
          !state.searchLocation || accommodation.location.toLowerCase().includes(state.searchLocation.toLowerCase())

        const matchFilters =
          state.activeFilters.length === 0 ||
          state.activeFilters.every((filter) =>
            accommodation.accessibilityFeatures.some(
              (feature) => feature.name === filter || feature.name.includes(filter),
            ),
          )

        return matchLocation && matchFilters
      })
    }
  }

  function clearFilters() {
    state.searchLocation = ""
    state.activeFilters = []
    state.showSearchResults = false
    state.filteredAccommodations = [...accommodations]

    const locationInput = document.getElementById("location-input")
    const accessibilitySelect = document.getElementById("accessibility-select")

    if (locationInput) locationInput.value = ""
    if (accessibilitySelect) accessibilitySelect.value = ""

    renderAccessibilityFilters()
    renderAccommodations()
  }

  // Função para o planejador de rotas
  function initRoutePlanner() {
    const calculateRouteBtn = document.getElementById("calculate-route-btn")
    const routeResults = document.getElementById("route-results")
    const originSelect = document.getElementById("origin-select")
    const destinationSelect = document.getElementById("destination-select")
    const accessibilityOptions = document.querySelectorAll(".accessibility-option")

    if (accessibilityOptions) {
      accessibilityOptions.forEach((option) => {
        option.addEventListener("click", function () {
          this.classList.toggle("active")
          const need = this.getAttribute("data-need")

          if (state.selectedAccessibilityNeeds.includes(need)) {
            state.selectedAccessibilityNeeds = state.selectedAccessibilityNeeds.filter((n) => n !== need)
          } else {
            state.selectedAccessibilityNeeds.push(need)
          }
        })
      })
    }

    if (calculateRouteBtn) {
      calculateRouteBtn.addEventListener("click", function () {
        const origin = originSelect ? originSelect.value : ""
        const destination = destinationSelect ? destinationSelect.value : ""

        if (!origin || !destination) {
          alert("Por favor, selecione a origem e o destino.")
          return
        }

        if (origin === "sao-paulo" && destination === "cristo-redentor") {
          this.disabled = true
          this.innerHTML = `
            <div style="display: flex; align-items: center; justify-content: center;">
              <div style="width: 20px; height: 20px; border: 2px solid #ffffff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite; margin-right: 8px;"></div>
              Calculando rotas acessíveis...
            </div>
          `

          const style = document.createElement("style")
          style.textContent = `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `
          document.head.appendChild(style)

          setTimeout(() => {
            this.disabled = false
            this.innerHTML = "Buscar Rotas Acessíveis"
            if (routeResults) {
              routeResults.classList.remove("hidden")
              routeResults.scrollIntoView({ behavior: "smooth" })
            }
          }, 2000)
        } else {
          alert("Atualmente, oferecemos apenas a rota de São Paulo para o Cristo Redentor.")
        }
      })
    }

    // Event listeners para botões de ação
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("start-navigation-btn")) {
        const buttonText = e.target.textContent
        if (buttonText.includes("Navegação")) {
          alert("Iniciando navegação GPS com informações de acessibilidade...")
        } else if (buttonText.includes("Uber")) {
          alert("Redirecionando para o aplicativo Uber...")
        } else if (buttonText.includes("99")) {
          alert("Redirecionando para o aplicativo 99...")
        } else if (buttonText.includes("Táxi")) {
          alert("Conectando com central de táxi acessível...")
        } else if (buttonText.includes("Ônibus")) {
          alert("Redirecionando para sistema de reservas de ônibus...")
        } else if (buttonText.includes("Metrô")) {
          alert("Redirecionando para informações do metrô...")
        } else if (buttonText.includes("Voo")) {
          alert("Redirecionando para consulta de voos...")
        } else if (buttonText.includes("Carro")) {
          alert("Redirecionando para locadoras de veículos adaptados...")
        }
      }
    })
  }

  // Inicializar a aplicação
  function init() {
    // Renderizar componentes iniciais
    renderAccessibilityFilters()
    renderAccommodations()
    renderAttractions()
    renderTeam()
    initRoutePlanner()

    // Event listeners para pesquisa
    const searchButton = document.getElementById("search-button")
    if (searchButton) {
      searchButton.addEventListener("click", () => {
        const locationInput = document.getElementById("location-input")
        if (locationInput) {
          state.searchLocation = locationInput.value
        }

        filterAccommodations()
        renderAccommodations()

        const accommodationsSection = document.getElementById("accommodations")
        if (accommodationsSection) {
          accommodationsSection.scrollIntoView({ behavior: "smooth" })
        }
      })
    }

    // Event listeners para limpar filtros
    const clearFiltersButtons = document.querySelectorAll("#clear-filters-button, #clear-filters-button-alt")
    clearFiltersButtons.forEach((button) => {
      if (button) {
        button.addEventListener("click", clearFilters)
      }
    })

    // Event listeners para navegação
    document.querySelectorAll("[data-scroll-to]").forEach((link) => {
      link.addEventListener("click", function () {
        const target = this.getAttribute("data-scroll-to")
        const targetElement = document.getElementById(target)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      })
    })

    // Event listeners para botões do footer e modais
    const buttonMappings = [
      { id: "guide-download-button", action: () => generateAccessibilityGuide() },
      { id: "team-button", action: () => showTeamModal() },
      { id: "team-button-alt", action: () => showTeamModal() },
      { id: "privacy-button", action: () => alert("Política de privacidade seria exibida aqui!") },
      { id: "terms-button", action: () => alert("Termos de uso seriam exibidos aqui!") },
      { id: "programming-button", action: () => showAccessibilityInfo("mobilityReduced") },
      { id: "guide-button", action: () => generateAccessibilityGuide() },
      { id: "other-projects-button", action: () => showAccessibilityInfo("visualImpairment") },
      {
        id: "mission-button",
        action: () =>
          handleGenericButtonClick("Nossa missão é facilitar o planejamento de viagens acessíveis para todos!"),
      },
      {
        id: "more-info-button",
        action: () =>
          handleGenericButtonClick("Mais informações sobre o projeto de roteiros acessíveis seriam exibidas aqui!"),
      },
      {
        id: "certifications-button",
        action: () =>
          handleGenericButtonClick("Certificações de acessibilidade e parceiros oficiais seriam exibidos aqui!"),
      },
      {
        id: "reviews-button",
        action: () =>
          handleGenericButtonClick("Sistema de avaliações de acessibilidade de hospedagens seria exibido aqui!"),
      },
      {
        id: "resources-button",
        action: () =>
          handleGenericButtonClick(
            "Recursos adicionais para viajantes com necessidades especiais seriam exibidos aqui!",
          ),
      },
    ]

    buttonMappings.forEach(({ id, action }) => {
      const button = document.getElementById(id)
      if (button) {
        button.addEventListener("click", action)
      }
    })

    // Event listeners para botões de busca por categoria
    const categoryButtons = [
      { id: "beaches-button", location: "Praia" },
      { id: "parks-button", location: "Campos" },
      { id: "cities-button", location: "São Paulo" },
    ]

    categoryButtons.forEach(({ id, location }) => {
      const button = document.getElementById(id)
      if (button) {
        button.addEventListener("click", () => {
          state.searchLocation = location
          const locationInput = document.getElementById("location-input")
          if (locationInput) {
            locationInput.value = location
          }
          filterAccommodations()
          renderAccommodations()
          const accommodationsSection = document.getElementById("accommodations")
          if (accommodationsSection) {
            accommodationsSection.scrollIntoView({ behavior: "smooth" })
          }
        })
      }
    })

    // Event listeners para acessibilidade no footer
    document.querySelectorAll('[data-accessibility="hearing"]').forEach((button) => {
      button.addEventListener("click", () => showAccessibilityInfo("hearingImpairment"))
    })

    document.querySelectorAll('[data-accessibility="diet"]').forEach((button) => {
      button.addEventListener("click", () => showAccessibilityInfo("specialDiet"))
    })

    // Event listener para cadastro
    const userMenu = document.querySelector(".user-menu")
    if (userMenu) {
      userMenu.addEventListener("click", showRegistrationModal)
    }
  }

  // Iniciar a aplicação quando o DOM estiver carregado
  init()
})
