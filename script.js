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
      role: "Desenvolvedor Frontend",
      image: "img/vitao_img.jpeg",
    },
    {
      name: "Leandro",
      role: "Especialista em Acessibilidade",
      image: "img/leandro_img.jpeg",
    },
    {
      name: "Leandro",
      role: "Desenvolvedor Backend",
      image: "img/leandro2_img",
    },
    {
      name: "Jonathan",
      role: "Designer UX/UI",
      image: "img/jhow_img",
    },
    {
      name: "Arthur",
      role: "Gerente de Projeto",
      image: "img/arthur_img.PNG",
    },
    {
      name: "Mesquita",
      role: "Especialista em Mobilidade",
      image: "img/mesquita_img",
    },
  ]

  const accommodations = [
    {
      name: "Pousada Brisa do Mar",
      image: "img/brisa_img.jpg",
      rating: "4.8",
      price: 350,
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
      price: 520,
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
      price: 280,
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
    {
      name: "Resort Sol Nascente",
      image: "img/SN_img.jpg",
      rating: "4.9",
      price: 890,
      description: "Resort all-inclusive com infraestrutura completa de acessibilidade e atividades adaptadas.",
      details: {
        rooms: 2,
        bathrooms: 2,
        capacity: 5,
      },
      location: "Porto de Galinhas, PE",
      accessibilityFeatures: [
        {
          name: "Rampas de Acesso",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Elevadores",
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
      nearbyAttractions: ["Praia de Porto de Galinhas", "Passeio de Jangada", "Recife Antigo"],
      itinerary: [
        {
          day: "Dia 1",
          date: "05/09/2023",
          activities: [
            {
              time: "11:00",
              title: "Check-in",
              description: "Recepção VIP com bebida de boas-vindas e assistência personalizada.",
            },
            {
              time: "13:00",
              title: "Almoço no restaurante principal",
              description: "Buffet internacional com estações de serviço adaptadas.",
            },
            {
              time: "16:00",
              title: "Atividades na piscina",
              description: "Piscina com rampa de acesso e cadeira elevadora.",
            },
          ],
        },
        {
          day: "Dia 2",
          date: "06/09/2023",
          activities: [
            {
              time: "08:00",
              title: "Café da manhã",
              description: "Buffet variado com opções para todos os tipos de dietas.",
            },
            {
              time: "10:00",
              title: "Passeio à Praia",
              description: "Esteiras na areia e cadeiras anfíbias disponíveis.",
            },
            {
              time: "15:00",
              title: "Passeio de jangada adaptado",
              description: "Embarcação especial com acessibilidade para cadeirantes.",
            },
          ],
        },
      ],
    },
  ]

  const attractions = [
    {
      name: "Projeto TAMAR",
      image: "img/PT_img.jpg",
      distance: "2 km da Praia do Forte",
      description: "Centro de conservação de tartarugas marinhas com estrutura acessível para visitantes.",
      price: 45,
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
      price: 0,
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
    {
      name: "Teleférico de Campos do Jordão",
      image: "img/teleferico_img.jpg",
      distance: "3 km da Pousada Montanha Verde",
      description: "Passeio panorâmico com cabines adaptadas e vista para toda a cidade.",
      price: 80,
      accessibilityFeatures: [
        {
          name: "Cabines Adaptadas",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>`,
        },
        {
          name: "Rampas de Acesso",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
      ],
      details: {
        duration: "1 hora",
        bestTime: "Final da tarde para o pôr do sol",
        services: "Assistentes para embarque, descontos para PCDs",
      },
    },
    {
      name: "Passeio de Jangada nas Piscinas Naturais",
      image: "img/jangada_img.avif",
      distance: "4 km do Resort Sol Nascente",
      description: "Passeio em jangadas adaptadas para conhecer as famosas piscinas naturais.",
      price: 95,
      accessibilityFeatures: [
        {
          name: "Jangadas Adaptadas",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"></path><path d="M7 21l4-9"></path><path d="M17 21l-4-9"></path><path d="M2 6h4c2 0 4 1.1 4 4"></path><path d="M22 6h-4c-2 0-4 1.1-4 4"></path></svg>`,
        },
        {
          name: "Coletes Especiais",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"></path></svg>`,
        },
      ],
      details: {
        duration: "3-4 horas",
        bestTime: "Maré baixa - consultar horários",
        services: "Equipe treinada para assistência, equipamentos adaptados",
      },
    },
  ]

  // Estado da aplicação
  const state = {
    searchLocation: "",
    searchDate: "",
    selectedPrice: "",
    priceRange: 500,
    activeFilters: [],
    filteredAccommodations: [...accommodations],
    showSearchResults: false,
    modalContent: null,
  }

  // Função para lidar com cliques genéricos em botões
  function handleGenericButtonClick(message) {
    alert(message || "Esta funcionalidade será implementada em breve!")
  }

  // Renderizar filtros de acessibilidade
  function renderAccessibilityFilters() {
    const filtersContainer = document.getElementById("accessibility-filters")
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

    // Adicionar event listeners aos filtros
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
                        
                        <div class="price-tag">
                            R$ ${accommodation.price}/noite
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

      // Adicionar event listeners aos botões de detalhes
      document.querySelectorAll(".details-button").forEach((button) => {
        button.addEventListener("click", function () {
          const accommodationName = this.getAttribute("data-accommodation")
          const accommodation = state.filteredAccommodations.find((d) => d.name === accommodationName)
          openAccommodationModal(accommodation)
        })
      })
    }

    // Atualizar título da seção
    document.getElementById("accommodations-title").textContent = state.showSearchResults
      ? "Resultados da Pesquisa"
      : "Hospedagens Acessíveis"
  }

  // Renderizar atrações próximas
  function renderAttractions() {
    const attractionsGrid = document.getElementById("attractions-grid")
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

      const priceDisplay = attraction.price === 0 ? "Gratuito" : `R$ ${attraction.price},00 por pessoa`

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
                    
                    <div class="price-tag">
                        ${priceDisplay}
                    </div>
                    
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

    // Adicionar event listeners aos botões de ver mais
    document.querySelectorAll(".view-more-button").forEach((button) => {
      button.addEventListener("click", function () {
        const attractionName = this.getAttribute("data-attraction")
        const attraction = attractions.find((a) => a.name === attractionName)
        openAttractionModal(attraction)
      })
    })
  }

  // Renderizar equipe
  function renderTeam() {
    const teamGrid = document.querySelector(".team-grid")
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
    if (state.activeFilters.length === 0 && !state.searchLocation && !state.selectedPrice && state.priceRange === 500) {
      state.filteredAccommodations = [...accommodations]
      state.showSearchResults = false
    } else {
      state.showSearchResults = true

      state.filteredAccommodations = accommodations.filter((accommodation) => {
        // Filtrar por localização
        const matchLocation =
          !state.searchLocation || accommodation.location.toLowerCase().includes(state.searchLocation.toLowerCase())

        // Filtrar por preço selecionado
        let matchPriceSelect = true
        if (state.selectedPrice) {
          const [min, max] = state.selectedPrice.split("-").map((p) => Number.parseInt(p) || 1001)
          matchPriceSelect = accommodation.price >= min && (max === "1000+" || accommodation.price <= max)
        }

        // Filtrar por slider de preço
        const matchPriceRange = accommodation.price <= state.priceRange

        // Filtrar por filtros ativos
        const matchFilters =
          state.activeFilters.length === 0 ||
          state.activeFilters.every((filter) =>
            accommodation.accessibilityFeatures.some(
              (feature) => feature.name === filter || feature.name.includes(filter),
            ),
          )

        return matchLocation && matchPriceSelect && matchPriceRange && matchFilters
      })
    }
  }

  function clearFilters() {
    state.searchLocation = ""
    state.searchDate = ""
    state.selectedPrice = ""
    state.priceRange = 500
    state.activeFilters = []
    state.showSearchResults = false
    state.filteredAccommodations = [...accommodations]

    // Limpar campos de formulário
    document.getElementById("location-input").value = ""
    document.getElementById("date-input").value = ""
    document.getElementById("price-select").value = ""
    document.getElementById("price-slider").value = 500
    document.getElementById("price-value").textContent = `R$ 500`

    renderAccessibilityFilters()
    renderAccommodations()
  }

  // Funções para manipular modais
  function openAccommodationModal(accommodation) {
    const modalContent = document.getElementById("accommodation-modal-content")

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

    modalContent.innerHTML = `
            <div class="modal-image">
                <img src="${accommodation.image}" alt="${accommodation.name}">
            </div>
            <div class="modal-content-inner">
                <div class="modal-header">
                    <h2>${accommodation.name}</h2>
                    <div class="price-tag">
                        R$ ${accommodation.price}/noite
                    </div>
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
                
                <p>${accommodation.description}</p>
                
                <h3>Recursos de Acessibilidade</h3>
                <div class="features-grid">
                    ${featuresHTML}
                </div>
                
                <h3>Atrações Próximas</h3>
                <ul>
                    ${nearbyAttractionsHTML}
                </ul>
                
                <div class="itinerary-section">
                    <h3>Roteiro Sugerido</h3>
                    <div class="itinerary-days">
                        ${itineraryHTML}
                    </div>
                </div>
                
                <div class="info-box">
                    <p>
                        Esta acomodação possui equipe treinada para auxiliar pessoas com necessidades especiais. 
                        Recomendamos contato prévio para garantir a melhor experiência.
                    </p>
                </div>
                
                <div class="modal-buttons">
                    <button class="primary-button">Reservar agora</button>
                    <button class="secondary-button" id="close-accommodation-modal-btn">Fechar</button>
                </div>
            </div>
        `

    document.getElementById("accommodation-modal").classList.add("active")

    // Adicionar event listener ao botão de fechar
    document.getElementById("close-accommodation-modal-btn").addEventListener("click", () => {
      document.getElementById("accommodation-modal").classList.remove("active")
    })
  }

  function openAttractionModal(attraction) {
    const modalContent = document.getElementById("attraction-modal-content")

    let featuresHTML = ""
    attraction.accessibilityFeatures.forEach((feature) => {
      featuresHTML += `
                <div class="feature-card">
                    <div class="feature-card-icon">
                        ${feature.icon}
                    </div>
                    <div class="feature-card-content">
                        <h4>${feature.name}</h4>
                        <p>Disponível em toda a atração</p>
                    </div>
                </div>
            `
    })

    const priceDisplay = attraction.price === 0 ? "Gratuito" : `R$ ${attraction.price},00 por pessoa`

    modalContent.innerHTML = `
            <div class="modal-image">
                <img src="${attraction.image}" alt="${attraction.name}">
            </div>
            <div class="modal-content-inner">
                <div class="modal-header">
                    <h2>${attraction.name}</h2>
                    <div class="price-tag">
                        ${priceDisplay}
                    </div>
                </div>
                
                <div class="location-info">
                    <h3>Localização</h3>
                    <p>${attraction.distance}</p>
                </div>
                
                <p>${attraction.description}</p>
                
                <h3>Informações Úteis</h3>
                <div class="accommodation-details">
                    <div class="detail-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span>Duração: ${attraction.details.duration}</span>
                    </div>
                    <div class="detail-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <span>Melhor horário: ${attraction.details.bestTime}</span>
                    </div>
                    <div class="detail-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 010 7.75"></path>
                        </svg>
                        <span>Serviços: ${attraction.details.services}</span>
                    </div>
                </div>
                
                <h3>Recursos de Acessibilidade</h3>
                <div class="features-grid">
                    ${featuresHTML}
                </div>
                
                <div class="modal-buttons">
                    <button class="primary-button">Reservar ingresso</button>
                    <button class="secondary-button" id="close-attraction-modal-btn">Fechar</button>
                </div>
            </div>
        `

    document.getElementById("attraction-modal").classList.add("active")

    // Adicionar event listener ao botão de fechar
    document.getElementById("close-attraction-modal-btn").addEventListener("click", () => {
      document.getElementById("attraction-modal").classList.remove("active")
    })
  }

  // Inicializar a aplicação
  function init() {
    // Renderizar componentes iniciais
    renderAccessibilityFilters()
    renderAccommodations()
    renderAttractions()
    renderTeam()

    // Event listeners para pesquisa
    document.getElementById("search-button").addEventListener("click", () => {
      state.searchLocation = document.getElementById("location-input").value
      state.searchDate = document.getElementById("date-input").value
      state.selectedPrice = document.getElementById("price-select").value

      filterAccommodations()
      renderAccommodations()

      // Rolar para a seção de resultados
      document.getElementById("accommodations").scrollIntoView({ behavior: "smooth" })
    })

    // Event listener para slider de preço
    const priceSlider = document.getElementById("price-slider")
    const priceValue = document.getElementById("price-value")

    priceSlider.addEventListener("input", () => {
      state.priceRange = Number.parseInt(priceSlider.value)
      priceValue.textContent = `R$ ${state.priceRange}`

      filterAccommodations()
      renderAccommodations()
    })

    // Event listeners para limpar filtros
    document.querySelectorAll("#clear-filters-button, #clear-filters-button-alt").forEach((button) => {
      button.addEventListener("click", clearFilters)
    })

    // Event listeners para navegação
    document.querySelectorAll("[data-scroll-to]").forEach((link) => {
      link.addEventListener("click", function () {
        const target = this.getAttribute("data-scroll-to")
        document.getElementById(target).scrollIntoView({ behavior: "smooth" })
      })
    })

    // Event listeners para modais
    document.getElementById("guide-download-button").addEventListener("click", () => {
      document.getElementById("guide-modal").classList.add("active")
    })

    document.getElementById("team-button").addEventListener("click", () => {
      document.getElementById("team-modal").classList.add("active")
    })

    document.getElementById("team-button-alt").addEventListener("click", () => {
      document.getElementById("team-modal").classList.add("active")
    })

    document.getElementById("privacy-button").addEventListener("click", () => {
      document.getElementById("privacy-modal").classList.add("active")
    })

    document.getElementById("terms-button").addEventListener("click", () => {
      document.getElementById("terms-modal").classList.add("active")
    })

    document.getElementById("programming-button").addEventListener("click", () => {
      document.getElementById("programming-modal").classList.add("active")
    })

    document.getElementById("guide-button").addEventListener("click", () => {
      document.getElementById("guide-modal").classList.add("active")
    })

    document.getElementById("beaches-button").addEventListener("click", () => {
      state.searchLocation = "Praia"
      document.getElementById("location-input").value = "Praia"
      filterAccommodations()
      renderAccommodations()
      document.getElementById("accommodations").scrollIntoView({ behavior: "smooth" })
    })

    document.getElementById("parks-button").addEventListener("click", () => {
      state.searchLocation = "Campos"
      document.getElementById("location-input").value = "Campos"
      filterAccommodations()
      renderAccommodations()
      document.getElementById("accommodations").scrollIntoView({ behavior: "smooth" })
    })

    document.getElementById("cities-button").addEventListener("click", () => {
      state.searchLocation = "São Paulo"
      document.getElementById("location-input").value = "São Paulo"
      filterAccommodations()
      renderAccommodations()
      document.getElementById("accommodations").scrollIntoView({ behavior: "smooth" })
    })

    // Event listeners para fechar modais
    document
      .querySelectorAll(
        ".close-button, #close-guide-modal-btn, #close-team-modal-btn, #close-privacy-modal-btn, #close-terms-modal-btn, #close-programming-modal-btn",
      )
      .forEach((button) => {
        button.addEventListener("click", () => {
          document.querySelectorAll(".modal").forEach((modal) => {
            modal.classList.remove("active")
          })
        })
      })

    // Event listeners para botões de download
    document.getElementById("download-guide-button").addEventListener("click", () => {
      alert("Em um cenário real, o download do guia seria iniciado agora!")
      document.getElementById("guide-modal").classList.remove("active")
    })

    // Event listeners para outros botões
    document.getElementById("mission-button").addEventListener("click", () => {
      handleGenericButtonClick("Nossa missão é facilitar o planejamento de viagens acessíveis para todos!")
    })

    document.getElementById("more-info-button").addEventListener("click", () => {
      handleGenericButtonClick("Mais informações sobre o projeto de roteiros acessíveis seriam exibidas aqui!")
    })

    document.getElementById("certifications-button").addEventListener("click", () => {
      handleGenericButtonClick("Certificações de acessibilidade e parceiros oficiais seriam exibidos aqui!")
    })

    document.getElementById("reviews-button").addEventListener("click", () => {
      handleGenericButtonClick("Sistema de avaliações de acessibilidade de hospedagens seria exibido aqui!")
    })

    document.getElementById("other-projects-button").addEventListener("click", () => {
      handleGenericButtonClick("Informações sobre recursos para pessoas com deficiência visual seriam exibidas aqui!")
    })

    document.getElementById("resources-button").addEventListener("click", () => {
      handleGenericButtonClick("Recursos adicionais para viajantes com necessidades especiais seriam exibidos aqui!")
    })

    // Fechar modais clicando fora
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("active")
        }
      })
    })
  }

  // Iniciar a aplicação quando o DOM estiver carregado
  init()
})
