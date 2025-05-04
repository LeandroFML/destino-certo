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

  const accessibleDestinations = [
    {
      name: "Praia do Forte, Bahia",
      image: "https://via.placeholder.com/400x300",
      rating: "4.8",
      description: "Praia com esteiras especiais para cadeirantes e estrutura completa de acessibilidade.",
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
    },
    {
      name: "Parque Ibirapuera, São Paulo",
      image: "https://via.placeholder.com/400x300",
      rating: "4.9",
      description: "Parque urbano com trilhas acessíveis, banheiros adaptados e playground inclusivo.",
      accessibilityFeatures: [
        {
          name: "Trilhas Acessíveis",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Banheiros Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
        {
          name: "Playground Inclusivo",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M9 16h.01M15 16h.01M9 14a3 3 0 100-6 3 3 0 000 6zM15 14a3 3 0 100-6 3 3 0 000 6z"></path></svg>`,
        },
      ],
    },
    {
      name: "Museu do Amanhã, Rio de Janeiro",
      image: "https://via.placeholder.com/400x300",
      rating: "4.7",
      description: "Museu totalmente acessível com audiodescrição, piso tátil e intérpretes de libras.",
      accessibilityFeatures: [
        {
          name: "Elevadores",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`,
        },
        {
          name: "Audiodescrição",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072m12.728 0l-3.536 3.536m-3.536 3.536L7.758 8.464"></path></svg>`,
        },
        {
          name: "Piso Tátil",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`,
        },
      ],
    },
  ]

  const nearbyAttractions = [
    {
      name: "Projeto TAMAR",
      image: "https://via.placeholder.com/300x200",
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
    },
    {
      name: "Mercado Municipal",
      image: "https://via.placeholder.com/300x200",
      distance: "1,5 km do Parque Ibirapuera",
      description: "Mercado tradicional com corredores amplos e elevadores para acesso aos mezaninos.",
      accessibilityFeatures: [
        {
          name: "Elevadores",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>`,
        },
        {
          name: "Corredores Amplos",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h16M4 16h16"></path></svg>`,
        },
      ],
    },
    {
      name: "Pão de Açúcar",
      image: "https://via.placeholder.com/300x200",
      distance: "3 km do Museu do Amanhã",
      description: "Ponto turístico com bondinho acessível e mirantes adaptados para cadeirantes.",
      accessibilityFeatures: [
        {
          name: "Bondinho Acessível",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>`,
        },
        {
          name: "Mirantes Adaptados",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="10" r="3"></circle><path d="M7 16.3c0-3 2.5-5.3 5-5.3s5 2.3 5 5.3"></path></svg>`,
        },
      ],
    },
    {
      name: "Jardim Botânico",
      image: "https://via.placeholder.com/300x200",
      distance: "4 km do Museu do Amanhã",
      description: "Jardim com trilhas acessíveis e placas em braile para identificação das espécies.",
      accessibilityFeatures: [
        {
          name: "Trilhas Acessíveis",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>`,
        },
        {
          name: "Placas em Braile",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`,
        },
      ],
    },
  ]

  // Estado da aplicação
  const state = {
    searchLocation: "",
    searchDate: "",
    selectedAccessibility: "",
    activeFilters: [],
    filteredDestinations: [...accessibleDestinations],
    showSearchResults: false,
    modalContent: null,
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

  // Renderizar destinos
  function renderDestinations() {
    const destinationsGrid = document.getElementById("destinations-grid")
    const noResults = document.getElementById("no-results")

    if (state.filteredDestinations.length === 0 && state.showSearchResults) {
      destinationsGrid.innerHTML = ""
      noResults.classList.remove("hidden")
    } else {
      noResults.classList.add("hidden")
      destinationsGrid.innerHTML = ""

      state.filteredDestinations.forEach((destination) => {
        const destinationCard = document.createElement("div")
        destinationCard.className = "destination-card"

        let accessibilityIconsHTML = ""
        destination.accessibilityFeatures.forEach((feature) => {
          accessibilityIconsHTML += `
                        <div class="accessibility-icon" title="${feature.name}">
                            ${feature.icon}
                        </div>
                    `
        })

        let featuresHTML = ""
        destination.accessibilityFeatures.forEach((feature) => {
          featuresHTML += `
                        <span class="feature-tag">
                            ${feature.icon}
                            <span>${feature.name}</span>
                        </span>
                    `
        })

        destinationCard.innerHTML = `
                    <div class="destination-image">
                        <img src="${destination.image}" alt="${destination.name}">
                        <div class="accessibility-icons">
                            ${accessibilityIconsHTML}
                        </div>
                    </div>
                    <div class="destination-content">
                        <div class="destination-header">
                            <h3 class="destination-name">${destination.name}</h3>
                            <div class="destination-rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="currentColor" class="star-icon">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span class="rating-value">${destination.rating}</span>
                            </div>
                        </div>
                        <p class="destination-description">${destination.description}</p>
                        <div class="accessibility-features">
                            <h4 class="features-title">Recursos de acessibilidade:</h4>
                            <div class="features-list">
                                ${featuresHTML}
                            </div>
                        </div>
                        <button class="details-button" data-destination="${destination.name}">Ver detalhes</button>
                    </div>
                `

        destinationsGrid.appendChild(destinationCard)
      })

      // Adicionar event listeners aos botões de detalhes
      document.querySelectorAll(".details-button").forEach((button) => {
        button.addEventListener("click", function () {
          const destinationName = this.getAttribute("data-destination")
          const destination = state.filteredDestinations.find((d) => d.name === destinationName)
          openDestinationModal(destination)
        })
      })
    }

    // Atualizar título da seção
    document.getElementById("destinations-title").textContent = state.showSearchResults
      ? "Resultados da Pesquisa"
      : "Destinos com Acessibilidade"
  }

  // Renderizar atrações próximas
  function renderAttractions() {
    const attractionsGrid = document.getElementById("attractions-grid")
    attractionsGrid.innerHTML = ""

    nearbyAttractions.forEach((attraction) => {
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

    // Adicionar event listeners aos botões de ver mais
    document.querySelectorAll(".view-more-button").forEach((button) => {
      button.addEventListener("click", function () {
        const attractionName = this.getAttribute("data-attraction")
        const attraction = nearbyAttractions.find((a) => a.name === attractionName)
        openAttractionModal(attraction)
      })
    })
  }

  // Renderizar equipe
  function renderTeam() {
    const teamGrid = document.querySelector(".team-grid")
    teamGrid.innerHTML = ""

    for (let i = 1; i <= 6; i++) {
      const teamMember = document.createElement("div")
      teamMember.className = "team-member"

      teamMember.innerHTML = `
                <div class="member-avatar">
                    <img src="https://via.placeholder.com/100" alt="Membro da equipe ${i}">
                </div>
                <h3 class="member-name">Estudante ${i}</h3>
                <p class="member-role">Desenvolvedor</p>
            `

      teamGrid.appendChild(teamMember)
    }
  }

  // Renderizar parceiros
  function renderPartners() {
    const partnersGrid = document.getElementById("partners-grid")
    partnersGrid.innerHTML = ""

    for (let i = 1; i <= 6; i++) {
      const partnerCard = document.createElement("div")
      partnerCard.className = "partner-card"

      partnerCard.innerHTML = `
                <div class="partner-logo">
                    <span>Logo Parceiro ${i}</span>
                </div>
                <h3 class="partner-name">Parceiro ${i}</h3>
                <p class="partner-description">Apoiador do projeto</p>
            `

      partnersGrid.appendChild(partnerCard)
    }
  }

  // Funções para manipular o estado
  function toggleFilter(filterName) {
    if (state.activeFilters.includes(filterName)) {
      state.activeFilters = state.activeFilters.filter((f) => f !== filterName)
    } else {
      state.activeFilters.push(filterName)
    }

    filterDestinations()
    renderAccessibilityFilters()
    renderDestinations()
  }

  function filterDestinations() {
    if (state.activeFilters.length === 0 && !state.searchLocation && !state.selectedAccessibility) {
      state.filteredDestinations = [...accessibleDestinations]
      state.showSearchResults = false
    } else {
      state.showSearchResults = true

      state.filteredDestinations = accessibleDestinations.filter((destination) => {
        // Filtrar por localização
        const matchLocation =
          !state.searchLocation || destination.name.toLowerCase().includes(state.searchLocation.toLowerCase())

        // Filtrar por acessibilidade selecionada
        const matchAccessibility =
          !state.selectedAccessibility ||
          destination.accessibilityFeatures.some((feature) =>
            feature.name.toLowerCase().includes(state.selectedAccessibility.toLowerCase()),
          )

        // Filtrar por filtros ativos
        const matchFilters =
          state.activeFilters.length === 0 ||
          state.activeFilters.every((filter) =>
            destination.accessibilityFeatures.some((feature) => feature.name === filter),
          )

        return matchLocation && matchAccessibility && matchFilters
      })
    }
  }

  function clearFilters() {
    state.searchLocation = ""
    state.searchDate = ""
    state.selectedAccessibility = ""
    state.activeFilters = []
    state.showSearchResults = false
    state.filteredDestinations = [...accessibleDestinations]

    // Limpar campos de formulário
    document.getElementById("location-input").value = ""
    document.getElementById("date-input").value = ""
    document.getElementById("accessibility-select").value = ""

    renderAccessibilityFilters()
    renderDestinations()
  }

  // Funções para manipular modais
  function openDestinationModal(destination) {
    const modalContent = document.getElementById("destination-modal-content")

    let featuresHTML = ""
    destination.accessibilityFeatures.forEach((feature) => {
      featuresHTML += `
                <div class="feature-card">
                    <div class="feature-card-icon">
                        ${feature.icon}
                    </div>
                    <div class="feature-card-content">
                        <h4>${feature.name}</h4>
                        <p>Disponível em todo o local</p>
                    </div>
                </div>
            `
    })

    modalContent.innerHTML = `
            <div class="modal-image">
                <img src="${destination.image}" alt="${destination.name}">
            </div>
            <div class="modal-content-inner">
                <div class="modal-header">
                    <h2>${destination.name}</h2>
                    <div class="destination-rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" class="star-icon">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span class="rating-value">${destination.rating}</span>
                    </div>
                </div>
                <p>${destination.description}</p>
                
                <h3>Recursos de Acessibilidade</h3>
                <div class="features-grid">
                    ${featuresHTML}
                </div>
                
                <div class="info-box">
                    <p>
                        Este destino possui equipe treinada para auxiliar pessoas com necessidades especiais. 
                        Recomendamos contato prévio para garantir a melhor experiência.
                    </p>
                </div>
                
                <div class="modal-buttons">
                    <button class="primary-button">Reservar Visita</button>
                    <button class="secondary-button" id="close-destination-modal-btn">Fechar</button>
                </div>
            </div>
        `

    document.getElementById("destination-modal").classList.add("active")

    // Adicionar event listener ao botão de fechar
    document.getElementById("close-destination-modal-btn").addEventListener("click", () => {
      document.getElementById("destination-modal").classList.remove("active")
    })
  }

  function openAttractionModal(attraction) {
    const modalContent = document.getElementById("destination-modal-content")

    let featuresHTML = ""
    attraction.accessibilityFeatures.forEach((feature) => {
      featuresHTML += `
                <div class="feature-card">
                    <div class="feature-card-icon">
                        ${feature.icon}
                    </div>
                    <div class="feature-card-content">
                        <h4>${feature.name}</h4>
                        <p>Disponível em todo o local</p>
                    </div>
                </div>
            `
    })

    modalContent.innerHTML = `
            <div class="modal-image">
                <img src="${attraction.image}" alt="${attraction.name}">
            </div>
            <div class="modal-content-inner">
                <div class="modal-header">
                    <h2>${attraction.name}</h2>
                </div>
                
                <div class="location-info">
                    <h3>Localização</h3>
                    <p>${attraction.distance}</p>
                </div>
                
                <p>${attraction.description}</p>
                
                <h3>Recursos de Acessibilidade</h3>
                <div class="features-grid">
                    ${featuresHTML}
                </div>
                
                <div class="modal-buttons">
                    <button class="primary-button">Planejar Visita</button>
                    <button class="secondary-button" id="close-destination-modal-btn">Fechar</button>
                </div>
            </div>
        `

    document.getElementById("destination-modal").classList.add("active")

    // Adicionar event listener ao botão de fechar
    document.getElementById("close-destination-modal-btn").addEventListener("click", () => {
      document.getElementById("destination-modal").classList.remove("active")
    })
  }

  // Inicializar a aplicação
  function init() {
    // Renderizar componentes iniciais
    renderAccessibilityFilters()
    renderDestinations()
    renderAttractions()
    renderTeam()
    renderPartners()

    // Event listeners para pesquisa
    document.getElementById("search-button").addEventListener("click", () => {
      state.searchLocation = document.getElementById("location-input").value
      state.searchDate = document.getElementById("date-input").value
      state.selectedAccessibility = document.getElementById("accessibility-select").value

      filterDestinations()
      renderDestinations()

      // Rolar para a seção de resultados
      document.getElementById("destinations").scrollIntoView({ behavior: "smooth" })
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

    document.getElementById("partners-button").addEventListener("click", () => {
      document.getElementById("partners-modal").classList.add("active")
    })

    document.getElementById("guide-button").addEventListener("click", () => {
      document.getElementById("guide-modal").classList.add("active")
    })

    document.getElementById("beaches-button").addEventListener("click", () => {
      state.searchLocation = "Praia"
      document.getElementById("location-input").value = "Praia"
      filterDestinations()
      renderDestinations()
      document.getElementById("destinations").scrollIntoView({ behavior: "smooth" })
    })

    document.getElementById("parks-button").addEventListener("click", () => {
      state.searchLocation = "Parque"
      document.getElementById("location-input").value = "Parque"
      filterDestinations()
      renderDestinations()
      document.getElementById("destinations").scrollIntoView({ behavior: "smooth" })
    })

    document.getElementById("cities-button").addEventListener("click", () => {
      state.searchLocation = "Museu"
      document.getElementById("location-input").value = "Museu"
      filterDestinations()
      renderDestinations()
      document.getElementById("destinations").scrollIntoView({ behavior: "smooth" })
    })

    // Event listeners para fechar modais
    document
      .querySelectorAll(
        ".close-button, #close-guide-modal-btn, #close-team-modal-btn, #close-privacy-modal-btn, #close-terms-modal-btn, #close-programming-modal-btn, #close-partners-modal-btn",
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
      alert("Nossa missão é promover o turismo acessível e inclusivo para todos!")
    })

    document.getElementById("more-info-button").addEventListener("click", () => {
      alert("Mais informações sobre o projeto seriam exibidas aqui!")
    })

    document.getElementById("certifications-button").addEventListener("click", () => {
      alert("Certificações de acessibilidade e inclusão seriam exibidas aqui!")
    })

    document.getElementById("reviews-button").addEventListener("click", () => {
      alert("Sistema de avaliações de acessibilidade seria exibido aqui!")
    })

    document.getElementById("other-projects-button").addEventListener("click", () => {
      alert("Outros projetos da feira do curso seriam exibidos aqui!")
    })
  }

  // Iniciar a aplicação quando o DOM estiver carregado
  init()
})
