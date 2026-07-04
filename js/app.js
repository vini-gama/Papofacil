/**
 * app.js
 * Lógica do Papo Fácil: monta os filtros, sorteia cartas sem repetir
 * até esgotar o baralho, guarda favoritas no localStorage e liga
 * a interação (clique, teclado, acessibilidade).
 */
(function () {
  "use strict";

  const STORAGE_FAVORITES = "papofacil:favoritos";

  const els = {
    filterChips: document.getElementById("filterChips"),
    card: document.getElementById("card"),
    cardTab: document.getElementById("cardTab"),
    cardCategory: document.getElementById("cardCategory"),
    cardDot: document.getElementById("cardDot"),
    cardCategoryLabel: document.getElementById("cardCategoryLabel"),
    cardTitle: document.getElementById("cardTitle"),
    cardIndex: document.getElementById("cardIndex"),
    drawBtn: document.getElementById("drawBtn"),
    shuffleBtn: document.getElementById("shuffleBtn"),
    starBtn: document.getElementById("starBtn"),
    startersList: document.getElementById("startersList"),
    followupsList: document.getElementById("followupsList"),
    favToggle: document.getElementById("favToggle"),
    favCount: document.getElementById("favCount"),
    favoritesPanel: document.getElementById("favoritesPanel"),
    favList: document.getElementById("favList"),
  };

  let activeCategories = new Set(Object.keys(CATEGORIES));
  let deck = [];          // ids restantes para sortear na rodada atual
  let drawnCount = 0;     // quantas cartas já foram puxadas nesta rodada
  let currentTopic = null;
  let favorites = loadFavorites();

  // ---------- Persistência ----------

  function loadFavorites() {
    try {
      const raw = localStorage.getItem(STORAGE_FAVORITES);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch {
      return new Set();
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem(STORAGE_FAVORITES, JSON.stringify([...favorites]));
    } catch {
      /* localStorage indisponível: favoritas seguem só na sessão */
    }
  }

  // ---------- Filtros (chips de categoria) ----------

  function renderFilterChips() {
    els.filterChips.querySelectorAll(".chip").forEach((el) => el.remove());

    Object.entries(CATEGORIES).forEach(([key, cat]) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "chip";
      chip.style.setProperty("--dot-color", cat.color);
      chip.setAttribute("aria-pressed", String(activeCategories.has(key)));
      chip.innerHTML = `<span class="dot" aria-hidden="true"></span>${cat.label}`;
      chip.addEventListener("click", () => toggleCategory(key, chip));
      els.filterChips.appendChild(chip);
    });

    const resetBtn = document.createElement("button");
    resetBtn.type = "button";
    resetBtn.className = "chip-reset";
    resetBtn.textContent = "usar todas";
    resetBtn.addEventListener("click", () => {
      activeCategories = new Set(Object.keys(CATEGORIES));
      resetDeck();
      renderFilterChips();
    });
    els.filterChips.appendChild(resetBtn);
  }

  function toggleCategory(key, chipEl) {
    if (activeCategories.has(key)) {
      if (activeCategories.size === 1) return; // nunca deixa zerar tudo
      activeCategories.delete(key);
    } else {
      activeCategories.add(key);
    }
    chipEl.setAttribute("aria-pressed", String(activeCategories.has(key)));
    resetDeck();
  }

  // ---------- Baralho / sorteio ----------

  function filteredTopics() {
    return TOPICS.filter((t) => activeCategories.has(t.category));
  }

  function resetDeck() {
    deck = shuffle(filteredTopics().map((t) => t.id));
    drawnCount = 0;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function drawCard() {
    if (deck.length === 0) {
      resetDeck();
    }
    const id = deck.pop();
    drawnCount += 1;
    const topic = TOPICS.find((t) => t.id === id);
    renderCard(topic);
  }

  // ---------- Renderização da carta ----------

  function renderCard(topic) {
    currentTopic = topic;
    const cat = CATEGORIES[topic.category];
    const total = filteredTopics().length;

    // pequena animação de "puxar carta", respeitando prefers-reduced-motion
    els.card.classList.add("is-drawing");
    window.setTimeout(() => {
      els.cardTab.hidden = false;
      els.cardTab.textContent = cat.code;
      els.cardTab.style.setProperty("--tab-color", cat.color);

      els.cardCategory.hidden = false;
      els.cardDot.style.setProperty("--dot-color", cat.color);
      els.cardCategoryLabel.textContent = cat.label;

      els.cardTitle.innerHTML = "";
      els.cardTitle.textContent = topic.title;

      els.cardIndex.textContent = `Nº ${String(drawnCount).padStart(2, "0")} / ${total}`;

      renderList(els.startersList, topic.starters);
      renderList(els.followupsList, topic.followups);

      els.starBtn.disabled = false;
      updateStarButton();

      els.card.classList.remove("is-drawing");
    }, prefersReducedMotion() ? 0 : 140);
  }

  function renderList(listEl, items) {
    listEl.innerHTML = "";
    items.forEach((text, i) => {
      const li = document.createElement("li");
      const num = document.createElement("span");
      num.className = "num";
      num.textContent = String(i + 1).padStart(2, "0");
      const span = document.createElement("span");
      span.textContent = text;
      li.appendChild(num);
      li.appendChild(span);
      listEl.appendChild(li);
    });
  }

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  // ---------- Favoritas ----------

  function updateStarButton() {
    const isFav = currentTopic && favorites.has(currentTopic.id);
    els.starBtn.setAttribute("aria-pressed", String(Boolean(isFav)));
    els.starBtn.textContent = isFav ? "★" : "☆";
  }

  function toggleFavorite() {
    if (!currentTopic) return;
    if (favorites.has(currentTopic.id)) {
      favorites.delete(currentTopic.id);
    } else {
      favorites.add(currentTopic.id);
    }
    saveFavorites();
    updateStarButton();
    renderFavCount();
    renderFavoritesPanel();
  }

  function renderFavCount() {
    els.favCount.textContent = String(favorites.size);
  }

  function renderFavoritesPanel() {
    els.favList.innerHTML = "";
    if (favorites.size === 0) {
      const empty = document.createElement("p");
      empty.className = "favorites-empty";
      empty.textContent = "Nenhuma carta favoritada ainda. Toque na estrela de uma carta pra guardá-la aqui.";
      els.favList.appendChild(empty);
      return;
    }
    [...favorites].forEach((id) => {
      const topic = TOPICS.find((t) => t.id === id);
      if (!topic) return;
      const cat = CATEGORIES[topic.category];
      const li = document.createElement("li");
      li.className = "fav-chip";
      li.style.setProperty("--dot-color", cat.color);

      const label = document.createElement("span");
      label.textContent = topic.title;
      label.style.cursor = "pointer";
      label.addEventListener("click", () => {
        drawnCount += 1;
        renderCard(topic);
        els.card.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "center" });
      });

      const removeBtn = document.createElement("button");
      removeBtn.type = "button";
      removeBtn.setAttribute("aria-label", `Remover ${topic.title} das favoritas`);
      removeBtn.textContent = "✕";
      removeBtn.addEventListener("click", (ev) => {
        ev.stopPropagation();
        favorites.delete(id);
        saveFavorites();
        renderFavCount();
        renderFavoritesPanel();
        updateStarButton();
      });

      li.appendChild(label);
      li.appendChild(removeBtn);
      els.favList.appendChild(li);
    });
  }

  function toggleFavoritesPanel() {
    const isOpen = !els.favoritesPanel.hidden;
    els.favoritesPanel.hidden = isOpen;
    els.favToggle.setAttribute("aria-pressed", String(!isOpen));
    if (!isOpen) {
      renderFavoritesPanel();
      els.favoritesPanel.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "nearest" });
    }
  }

  // ---------- Eventos ----------

  els.drawBtn.addEventListener("click", drawCard);
  els.shuffleBtn.addEventListener("click", () => {
    resetDeck();
    drawCard();
  });
  els.starBtn.addEventListener("click", toggleFavorite);
  els.favToggle.addEventListener("click", toggleFavoritesPanel);

  document.addEventListener("keydown", (ev) => {
    const tag = (ev.target && ev.target.tagName) || "";
    if (tag === "INPUT" || tag === "TEXTAREA") return;
    if (ev.code === "Space") {
      ev.preventDefault();
      drawCard();
    }
  });

  // ---------- Inicialização ----------

  renderFilterChips();
  renderFavCount();
  resetDeck();
})();
