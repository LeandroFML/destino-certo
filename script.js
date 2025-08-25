// Aguardar o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript carregado com sucesso!")

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
    selectedAccessibilityNeeds: [],
  }

  // Função para criar modal genérico
  function createModal(content) {
    const modal = document.createElement("div")
    modal.className = "modal active"
    modal.innerHTML = content
    document.body.appendChild(modal)

    // Fechar modal ao clicar no X ou fora do modal
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.closest(".close-button")) {
        modal.remove()
      }
    })

    return modal
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
    `
    createModal(content)
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
    `

    const modal = createModal(content)

    // Adicionar evento de envio do formulário
    const form = modal.querySelector("#contact-form")
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      const formData = new FormData(this)
      alert(
        `Mensagem enviada com sucesso!\n\nObrigado ${formData.get("name")}, responderemos em breve no email ${formData.get("email")}.`,
      )
      modal.remove()
    })
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
    `
    createModal(content)
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
    `
    createModal(content)
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
    `
    createModal(content)
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
    `
    createModal(content)
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
                <li><strong>São Paulo Cultural (2 dias)</strong> - Museus, Parque Ibirapuera, Centro Histórico</li>
                <li><strong>Bahia Histórica (4 dias)</strong> - Salvador, Pelourinho, Praia do Forte</li>
                <li><strong>Campos do Jordão Romântico (2 dias)</strong> - Teleférico, Parques, Centro</li>
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
                <option value="sao-paulo">São Paulo</option>
                <option value="salvador">Salvador</option>
                <option value="campos-jordao">Campos do Jordão</option>
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
    `

    const modal = createModal(content)

    // Adicionar evento de envio do formulário
    const form = modal.querySelector("#itinerary-form")
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      const formData = new FormData(this)
      alert(
        `Solicitação enviada com sucesso!\n\nOlá ${formData.get("name")}, seu roteiro personalizado para ${formData.get("destination")} será enviado em até 24 horas no email ${formData.get("email")}.`,
      )
      modal.remove()
    })
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
    `
    createModal(content)
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
    `
    createModal(content)
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
    `
    createModal(content)
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
    `
    createModal(content)
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
            
            <div class="form-group">
              <label for="reg-password">Senha:</label>
              <input type="password" id="reg-password" name="password" required>
            </div>
            
            <div class="form-group">
              <label for="reg-accessibility">Suas necessidades de acessibilidade:</label>
              <select id="reg-accessibility" name="accessibility">
                <option value="">Selecione (opcional)</option>
                <option value="cadeira-rodas">Cadeira de rodas</option>
                <option value="mobilidade-reduzida">Mobilidade reduzida</option>
                <option value="deficiencia-visual">Deficiência visual</option>
                <option value="deficiencia-auditiva">Deficiência auditiva</option>
                <option value="alimentacao-especial">Alimentação especial</option>
                <option value="multiplas">Múltiplas necessidades</option>
              </select>
            </div>
            
            <div class="form-group checkbox-group">
              <label>
                <input type="checkbox" required>
                Aceito os <a href="#" onclick="alert('Termos de uso seriam exibidos aqui!')">termos de uso</a> e <a href="#" onclick="alert('Política de privacidade seria exibida aqui!')">política de privacidade</a>
              </label>
            </div>
            
            <div class="modal-buttons">
              <button type="submit" class="primary-button">Criar Conta</button>
              <button type="button" class="secondary-button" onclick="alert('Funcionalidade de login seria implementada aqui!')">Já tenho conta</button>
            </div>
          </form>
        </div>
      </div>
    `

    const modal = createModal(content)

    // Adicionar evento de envio do formulário
    const form = modal.querySelector("#registration-form")
    form.addEventListener("submit", function (e) {
      e.preventDefault()
      const formData = new FormData(this)
      alert(
        `Conta criada com sucesso!\n\nBem-vindo(a) ${formData.get("name")}! Sua conta foi criada e você já pode aproveitar todos os recursos personalizados do Destino Certo.`,
      )
      modal.remove()
    })
  }

  // Função para download de guias
  function downloadGuide(guideType) {
    alert(`Baixando guia de ${guideType}...`)
  }

  // Função para download de todos os recursos
  function downloadAllResources() {
    alert("Baixando todos os recursos de acessibilidade...")
  }

  // Função para renderizar filtros de acessibilidade
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

      filterButton.addEventListener("click", () => {
        toggleFilter(filter.name)
      })

      filtersContainer.appendChild(filterButton)
    })
  }

  // Função para renderizar hospedagens
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

      // Adicionar event listeners para os botões de detalhes
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

  // Função para renderizar atrações
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

    // Adicionar event listeners para os botões "Ver mais"
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
    if (accommodation.itinerary && accommodation.itinerary.length > 0) {
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
    } else {
      itineraryHTML = `<p>Itinerário personalizado disponível mediante solicitação.</p>`
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
              <button class="primary-button" onclick="alert('Redirecionando para reserva...')">Reservar Agora</button>
              <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    `

    createModal(content)
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
              <button class="primary-button" onclick="alert('Redirecionando para agendamento...')">Agendar Visita</button>
              <button class="secondary-button" onclick="this.closest('.modal').remove()">Fechar</button>
            </div>
          </div>
        </div>
      </div>
    `

    createModal(content)
  }

  // Função para alternar filtros
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

  // Função para filtrar hospedagens
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

  // Função para limpar filtros
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

  // Função para inicializar o planejador de rotas
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

    // Event listeners para botões de transporte
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
        } else {
          alert("Redirecionando para serviço de transporte...")
        }
      }
    })
  }

  // Função para inicializar todos os event listeners
  function initEventListeners() {
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

    // Event listeners para navegação suave
    document.querySelectorAll("[data-scroll-to]").forEach((link) => {
      link.addEventListener("click", function () {
        const target = this.getAttribute("data-scroll-to")
        const targetElement = document.getElementById(target)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      })
    })

    // Event listeners para todos os botões do footer e modais
    const buttonMappings = [
      { id: "guide-download-button", action: () => downloadGuide("acessibilidade") },
      { id: "team-button", action: () => showTeamModal() },
      { id: "team-button-alt", action: () => showTeamModal() },
      { id: "mission-button", action: () => showMissionModal() },
      { id: "contact-button", action: () => showContactModal() },
      { id: "certifications-button", action: () => showCertificationsModal() },
      { id: "resources-button", action: () => showResourcesModal() },
      { id: "reviews-button", action: () => showReviewsModal() },
      { id: "custom-itineraries-button", action: () => showCustomItinerariesModal() },
      { id: "guide-button", action: () => downloadGuide("acessibilidade") },
      { id: "privacy-button", action: () => alert("Política de privacidade seria exibida aqui!") },
      { id: "terms-button", action: () => alert("Termos de uso seriam exibidos aqui!") },
      { id: "programming-button", action: () => showMobilityModal() },
      { id: "other-projects-button", action: () => showVisualModal() },
      { id: "more-info-button", action: () => alert("Mais informações sobre o projeto seriam exibidas aqui!") },
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

    // Event listeners para acessibilidade específica
    document.querySelectorAll('[data-accessibility="hearing"]').forEach((button) => {
      button.addEventListener("click", () => showHearingModal())
    })

    document.querySelectorAll('[data-accessibility="diet"]').forEach((button) => {
      button.addEventListener("click", () => showDietModal())
    })

    // Event listener para cadastro/menu do usuário
    const userMenu = document.querySelector(".user-menu")
    if (userMenu) {
      userMenu.addEventListener("click", () => {
        showRegistrationModal()
      })
    }
  }

  // Função principal de inicialização
  function init() {
    console.log("Inicializando aplicação...")

    // Renderizar componentes iniciais
    renderAccessibilityFilters()
    renderAccommodations()
    renderAttractions()

    // Inicializar planejador de rotas
    initRoutePlanner()

    // Inicializar todos os event listeners
    initEventListeners()

    console.log("Aplicação inicializada com sucesso!")
  }

  // Tornar funções globais para uso em onclick
  window.showMissionModal = showMissionModal
  window.showContactModal = showContactModal
  window.showTeamModal = showTeamModal
  window.showCertificationsModal = showCertificationsModal
  window.showResourcesModal = showResourcesModal
  window.showReviewsModal = showReviewsModal
  window.showCustomItinerariesModal = showCustomItinerariesModal
  window.showMobilityModal = showMobilityModal
  window.showVisualModal = showVisualModal
  window.showHearingModal = showHearingModal
  window.showDietModal = showDietModal
  window.showRegistrationModal = showRegistrationModal
  window.downloadGuide = downloadGuide
  window.downloadAllResources = downloadAllResources

  // Inicializar a aplicação
  init()
})
