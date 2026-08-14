// Carrega a lista do localStorage ou utiliza a lista padrão se for o primeiro acesso
const savedMovies = localStorage.getItem("marvel_movies");
let movies = savedMovies ? JSON.parse(savedMovies) : [
  {
    id: 1,
    title: "Homem de Ferro",
    year: "2008",
    duration: "2h 06min",
    logo: "imagens/homemdeferro.png",
    synopsis: "Tony Stark, gênio bilionário e filho de Howard Stark, herda as Indústrias Stark e vende armas até ser capturado no deserto por terroristas usarem sua tecnologia, criando um Reator Arc para salvar seu coração e a primeira armadura para fugir; ao ver suas armas nas mãos do mal, ele fecha a divisão de armamentos, enfrenta seu sócio traidor Obadiah Stane com uma nova armadura e encerra o filme revelando publicamente que ele é o homem de ferro",
    context: "O inicio do universo marvel, nasce uma saga de herois.",
    trailer: "https://www.youtube.com/results?search_query=homem+de+ferro+1+trailer+dublado",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 2,
    title: "Capitão América: O Primeiro Vingador",
    year: "2011",
    duration: "2h 04min",
    logo: "imagens/capitaoamerica.png",
    synopsis: "Steve Rogers se voluntaria para um experimento militar que o transforma no supersoldado Capitão América durante a Segunda Guerra Mundial, howard stark ele cria um escudo com o material mais forte do mundo (vibranio) ele luta contra o caveira vermeha para recuperar o tesseract, uma das joias do infinito, no final do filme ele ganha do nazista e derrot a (hydra) organização vila do filme,mas ele derruba seu aviao antes que chegue a nova york para não destruir a cidade, ele não consegue dar a sua primeira dança ao lado do amor da sua vida e fica congelado por 70 anos,acordando alguns meses após tony se revelar como homem de ferro.",
    context: "Apresenta o Tesseract (Joia do Espaço) e mostra como Steve Rogers ficou congelado por décadas.",
    trailer: "https://www.youtube.com/results?search_query=capitao+america+1+trailer+dublado",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 3,
    title: "Os Vingadores",
    year: "2012",
    duration: "2h 23min",
    logo: "imagens/vingadores.png",
    synopsis: "Nick Fury reúne a equipe de heróis para deter Loki (irmao de thor)e impedir uma invasão alienígena em Nova York.",
    context: "Primeiro grande encontro dos heróis e revelação de que Thanos estava por trás dos ataques.",
    trailer: "https://www.youtube.com/results?search_query=os+vingadores+1+trailer+dublado",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 4,
    title: "Vingadores: Era de Ultron",
    year: "2015",
    duration: "2h 21min",
    logo: "imagens/eradeultron.png",
    synopsis: "Tony Stark tenta criar um sistema de inteligência artificial para paz mundial, mas cria o temível vilão Ultron.",
    context: "Apresenta a Joia da Mente (no Visão), Feiticeira Escarlate e a semente da discórdia que dividirá os heróis.",
    trailer: "https://www.youtube.com/results?search_query=vingadores+era+de+ultron+trailer+dublado",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 5,
    title: "Capitão América: Guerra Civil",
    year: "2016",
    duration: "2h 27min",
    logo: "imagens/guerracivil.png",
    synopsis: "Desentendimentos políticos dividem os Vingadores em dois lados: um liderado pelo Capitão América e outro pelo Homem de Ferro.",
    context: "Introduce o Homem-Aranha e o Pantera Negra. A equipe se desacopla e fica fragilizada.",
    trailer: "https://www.youtube.com/results?search_query=capitao+america+guerra+civil+trailer+dublado",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 6,
    title: "Guardiões da Galáxia",
    year: "2014",
    duration: "2h 01min",
    logo: "imagens/guardioesdagalaxia.png",
    synopsis: "Um grupo improvável de saqueadores e criminosos espaciais precisa se unir para proteger um orbe poderoso.",
    context: "Apresenta o núcleo cósmico da Marvel e explica detalhadamente o que são as Joias do Infinito (Joia do Poder).",
    trailer: "https://www.youtube.com/results?search_query=guardioes+da+galaxia+trailer+dublado",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 7,
    title: "Thor: Ragnarok",
    year: "2017",
    duration: "2h 10min",
    logo: "imagens/thor.png",
    synopsis: "Thor perde seu martelo, é preso do outro lado do universo e precisa correr para salvar Asgard de sua irmã Hela.nesse filme ele faz as pazes com seu irmão loki e juntos vencem sua irma, mas perdem seu planeta e ficam vagando pelo expaço com seu reino e o hulk que foi resgatado após aparecer em um planeta proximo, no final aparece uma nive gigante e começa a atacar eles, quem será que pode ser?",
    context: "Destruição de Asgard e conexão direta com o início de Guerra Infinita no final do filme.",
    trailer: "https://www.youtube.com/results?search_query=thor+ragnarok+trailer+dublado",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 8,
    title: "Homem-Formiga e a Vespa",
    year: "2018",
    duration: "1h 58min",
    logo: "imagens/homemformiga.png",
    synopsis: "o homem formiga tenta equilibrar a vida de herói e pai enquanto embarca em uma missão no Reino Quântico no final do filme ele acaba ficando preso no reino quantico pq sua namorada sumiu e não o tirou de lá, pq será? .",
    context: "Apresenta conceitos fundamentais do Reino quantico",
    trailer: "https://www.youtube.com/results?search_query=homem+formiga+e+a+vespa+trailer+dublado",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 9,
    title: "Vingadores: Guerra Infinita",
    year: "2018",
    duration: "2h 29min",
    logo: "imagens/guerrainfinita.png",
    synopsis: "Thanos reúne as seis Joias do Infinito para realizar seu plano devastador de apagar metade da vida do universo.",
    context: "O momento mais crítico de todo o Universo Marvel.",
    trailer: "https://www.youtube.com/results?search_query=vingadores+guerra+infinita+trailer+dublado",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 10,
    title: "Vingadores: Ultimato",
    year: "2019",
    duration: "3h 01min",
    logo: "imagens/ultimato.png",
    synopsis: "Os heróis sobreviventes precisam encontrar uma maneira de desfazer as ações de Thanos e restaurar a ordem no universo.",
    context: "A grande e emocionante conclusão da saga de 11 anos.",
    trailer: "https://www.youtube.com/results?search_query=vingadores+ultimato+trailer+dublado",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 11,
    title: "Loki (Série)",
    year: "2021",
    duration: "2 Temporadas",
    logo: "imagens/loki.png",
    synopsis: "Após fugir com o Tesseract no meio da missao dos vingadores da viagem no tempo, Loki é capturado pela Autoridade de Variância Temporal (TVA) e explora as linhas do tempo e descobre que exitem milhares de universos, mas como eram muitos, ele se sacrifica para cuidar de todos os universos ao mesmo tempo enquando fica parado em seu trono.",
    context: "Abre oficialmente as portas para o Multiverso e variants no MCU.",
    trailer: "https://www.youtube.com/results?search_query=loki+serie+trailer+dublado",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 12,
    title: "Doutor Estranho no Multiverso da Loucura",
    year: "2022",
    duration: "2h 06min",
    logo: "imagens/doutorestranho.png",
    synopsis: "Stephen Strange viaja pelo multiverso para proteger uma garota com poderes únicos de uma ameaça sombria.",
    context: "Explora as consequências reais e perigosas de mexer com realidades paralelas.",
    trailer: "https://www.youtube.com/results?search_query=doutor+estranho+multiverso+da+loucura+trailer+dublado",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 13,
    title: "quarteto fantastico",
    year: "2025",
    duration: "A Confirmar",
    logo: "imagens/quartetofantastico.png",
    synopsis: "A Primeira Família da Marvel finalmente entra no universo cinematográfico para enfrentar grandes ameaças numéricas e espaciais.",
    context: "Introduz a equipe clássica para o novo capítulo das fases da Marvel e o grande vilão da nova fase, DOUTOR DESTINO.",
    trailer: "https://www.youtube.com/results?search_query=quarteto+fantastico+2025+trailer",
    watched: false,
    rating: 0,
    watchedDate: null
  },
  {
    id: 14,
    title: "Thunderbolts*",
    year: "2025",
    duration: "A Confirmar",
    logo: "imagens/thunderbolts.png",
    synopsis: "Um grupo de anti-heróis e ex-vilões é reunido para realizar missões de alto risco para o governo.",
    context: "A união dos renegados do MCU em uma nova dinâmica de equipe.",
    trailer: "https://www.youtube.com/results?search_query=thunderbolts+marvel+trailer",
    watched: false,
    rating: 0,
    watchedDate: null
  }
];

// Garante compatibilidade de dados salvos anteriormente
movies = movies.map(m => ({
  ...m,
  rating: m.rating || 0,
  watchedDate: m.watchedDate || null
}));

let selectedMovieId = null;

// Renderizar cards na tela
function renderMovies() {
  const grid = document.getElementById("movies-grid");
  if (!grid) return;
  grid.innerHTML = "";

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => openModal(movie.id);

    const dateTag = movie.watched && movie.watchedDate 
      ? `<div style="font-size: 0.75rem; color: #a0a0a0; margin-top: 4px;">📅 Visto em ${movie.watchedDate}</div>` 
      : '';

    const starsTag = movie.rating > 0 
      ? `<div style="color: #ffd700; font-size: 0.85rem; margin-top: 2px;">${'★'.repeat(movie.rating)}${'☆'.repeat(5 - movie.rating)}</div>` 
      : '';

    card.innerHTML = `
      <div class="card-number">${movie.id}</div>
      <div class="card-logo-box">
        <img src="${movie.logo}" alt="Logo ${movie.title}">
      </div>
      <div>
        <div class="card-title">${movie.title}</div>
        <div class="card-meta">${movie.year}</div>
        ${starsTag}
        ${dateTag}
      </div>
      <div class="status-tag ${movie.watched ? 'watched' : 'pending'}">
        ${movie.watched ? '✓ ASSISTIDO' : '○ PENDENTE'}
      </div>
    `;

    grid.appendChild(card);
  });

  updateProgress();
}

// Abrir Modal de Filme
function openModal(id) {
  selectedMovieId = id;
  const movie = movies.find(m => m.id === id);

  if (!movie) return;

  const logoEl = document.getElementById("modal-logo");
  const titleEl = document.getElementById("modal-title");
  const infoEl = document.getElementById("modal-info");
  const synopsisEl = document.getElementById("modal-synopsis");
  const contextEl = document.getElementById("modal-context");
  const trailerEl = document.getElementById("modal-trailer");

  if (logoEl) logoEl.src = movie.logo;
  if (titleEl) titleEl.innerText = `${movie.id}. ${movie.title}`;
  if (infoEl) infoEl.innerText = `${movie.year} • ${movie.duration}`;
  if (synopsisEl) synopsisEl.innerText = movie.synopsis;
  if (contextEl) contextEl.innerText = movie.context;
  if (trailerEl) trailerEl.href = movie.trailer;

  renderStarRating(movie.rating);

  const btnComplete = document.getElementById("btn-complete");
  if (btnComplete) {
    if (movie.watched) {
      btnComplete.innerText = "✓ Desmarcar como assistido";
      btnComplete.classList.add("watched");
    } else {
      btnComplete.innerText = "Marcar como Lido e Assistido";
      btnComplete.classList.remove("watched");
    }

    btnComplete.onclick = () => toggleWatched(movie.id);
  }

  const modal = document.getElementById("movie-modal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

// Renderizar Avaliação por Estrelas (sem causar erro de insertBefore)
function renderStarRating(currentRating) {
  let ratingContainer = document.getElementById("star-rating-box");
  
  if (!ratingContainer) {
    ratingContainer = document.createElement("div");
    ratingContainer.id = "star-rating-box";
    ratingContainer.style.margin = "15px 0";
    ratingContainer.style.textAlign = "center";

    // Procura o conteúdo do modal para inserir de forma segura
    const modalContent = document.querySelector("#movie-modal .modal-content");
    if (modalContent) {
      modalContent.appendChild(ratingContainer);
    }
  }

  ratingContainer.innerHTML = `
    <div style="font-size: 0.9rem; color: #ccc; margin-bottom: 5px;">Sua Avaliação:</div>
    <div id="stars-list" style="font-size: 1.8rem; cursor: pointer; color: #ffd700;">
      ${[1, 2, 3, 4, 5].map(star => `
        <span onclick="setRating(${star})" style="margin: 0 4px;">
          ${star <= currentRating ? '★' : '☆'}
        </span>
      `).join('')}
    </div>
  `;
}

// Definir Nota
function setRating(stars) {
  if (!selectedMovieId) return;
  const movie = movies.find(m => m.id === selectedMovieId);
  if (movie) {
    movie.rating = stars;
    localStorage.setItem("marvel_movies", JSON.stringify(movies));
    renderStarRating(stars);
    renderMovies();
  }
}

// Fechar Modal do Filme
function closeModal() {
  const modal = document.getElementById("movie-modal");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Funções para a Carta Secreta
function openLetterModal() {
  const letterModal = document.getElementById("letter-modal");
  if (letterModal) {
    letterModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

function closeLetterModal() {
  const letterModal = document.getElementById("letter-modal");
  if (letterModal) {
    letterModal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Alternar Estado, Validar Ordem Cronológica, Data e Salvar
function toggleWatched(id) {
  const currentIndex = movies.findIndex(m => m.id === id);
  const movie = movies[currentIndex];

  if (!movie) return;

  if (!movie.watched) {
    if (currentIndex > 0) {
      const previousMovie = movies[currentIndex - 1];
      if (!previousMovie.watched) {
        alert(`🚨 Opa! Para seguir a ordem cronológica da maratona, assista primeiro: "${previousMovie.title}".`);
        return;
      }
    }

    movie.watched = true;
    const now = new Date();
    movie.watchedDate = now.toLocaleDateString('pt-BR');
  } else {
    movie.watched = false;
    movie.watchedDate = null;
    movie.rating = 0;
  }
  
  localStorage.setItem("marvel_movies", JSON.stringify(movies));
  renderMovies();
  closeModal();
}

// Atualizar Progresso e Disparar Carta Secreta em 100%
function updateProgress() {
  const total = movies.length;
  const watchedCount = movies.filter(m => m.watched).length;
  const percentage = Math.round((watchedCount / total) * 100);

  const progressText = document.getElementById("progress-text");
  const progressBar = document.getElementById("progress-bar");
  const badge = document.getElementById("percentage-badge");

  if (progressText) progressText.innerText = `${watchedCount} / ${total} CONCLUÍDOS`;
  if (progressBar) progressBar.style.width = `${percentage}%`;

  if (badge) {
    badge.innerText = `${percentage}%`;
    if (percentage === 100) {
      badge.innerText = "100% CONCLUÍDO! ❤️";
      triggerConfetti();
      openLetterModal(); // Abre a carta quando atinge 100%!
    }
  }
}

// Confetes
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Fundo de Estrelas
function initSpace() {
  const canvas = document.getElementById("space-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let stars = [];
  const numStars = 60;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.7 + 0.3
      });
    }
  }

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(225, 200, 255, ${star.opacity})`;
      ctx.fill();

      star.y -= star.speed;

      if (star.y < 0) {
        star.y = canvas.height;
        star.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(animateStars);
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
    createStars();
  });

  resizeCanvas();
  createStars();
  animateStars();
}

// Fechar modais ao clicar fora
window.onclick = function(event) {
  const movieModal = document.getElementById("movie-modal");
  const letterModal = document.getElementById("letter-modal");

  if (event.target === movieModal) {
    closeModal();
  }
  if (event.target === letterModal) {
    closeLetterModal();
  }
};

// Executar após carregar a página
document.addEventListener("DOMContentLoaded", () => {
  renderMovies();
  initSpace();
});