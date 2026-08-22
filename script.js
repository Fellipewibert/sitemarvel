// Incremente esta versão caso faça alterações no defaultMovies, nos characters ou nas infinityStones.
// A alteração na versão força a atualização do localStorage mantendo o progresso salvo.
const CURRENT_DATA_VERSION = "marvel_v5";

const defaultMovies = [
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
    title: "Quarteto Fantástico",
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

// LISTA COMPLETA DE PERSONAGENS PRINCIPAIS
const characters = [
  {
    id: 1,
    name: "Tony Stark",
    realName: "Homem de Ferro",
    logo: "imagens/tony.png",
    powers: "Genialidade tática e científica, armaduras tecnológicas de alta precisão com propulsores, lasers e inteligência artificial.",
    history: "Gênio, bilionário e filantropo. Após ser capturado por terroristas, construiu sua primeira armadura para escapar. Tornou-se o pilar tecnológico dos Vingadores e financiou a equipe até o fim da saga."
  },
  {
    id: 2,
    name: "Steve Rogers",
    realName: "Capitão América",
    logo: "imagens/america.png",
    powers: "Força, agilidade, resistência e reflexos no pico do potencial humano, mestre em combate corpo a corpo e manejo do escudo de Vibranium.",
    history: "Rejeitado pelo exército por sua saúde frágil, voluntariou-se para o Projeto Super-Soldado na Segunda Guerra Mundial. Congelado por décadas, acordou nos tempos modernos para liderar os Vingadores."
  },
  {
    id: 3,
    name: "Thor Odinson",
    realName: "Thor",
    logo: "imagens/thorper.png",
    powers: "Manipulação de trovões e raios, voo, superforça asgardiana, longevidade e controle de armas místicas como Mjolnir e Stormbreaker.",
    history: "Príncipe de Asgard, banido à Terra por sua arrogância até aprender o valor da humildade. Luta para proteger os Nove Reinos e vingar a destruição do seu povo."
  },
  {
    id: 4,
    name: "Bruce Banner",
    realName: "Hulk",
    logo: "imagens/hulk.png",
    powers: "Força física ilimitada baseada na raiva, regeneração celular acelerada, invulnerabilidade e intelecto de nível genial.",
    history: "Cientista atingido por uma dose maciça de radiação gama. Durante anos lutou contra a fera dentro de si, até conseguir fundir sua mente brilhante com a força avassaladora do Hulk."
  },
  {
    id: 5,
    name: "Natasha Romanoff",
    realName: "Viúva Negra",
    logo: "imagens/viuva.png",
    powers: "Mestre em artes marciais, espionagem avançada, táticas de interrogatório, acrobacias de elite e uso do 'Sopro da Viúva'.",
    history: "Treinada desde a infância na infame Sala Vermelha soviética. Redimiu seu passado ao se tornar agente da S.H.I.E.L.D. e uma das integrantes mais leais do grupo fundador dos Vingadores."
  },
  {
    id: 6,
    name: "Clint Barton",
    realName: "Gavião Arqueiro",
    logo: "imagens/gaviao.png",
    powers: "Pontaria perfeita e infalível, mestre no uso do arco e flecha, combate corpo a corpo e uso de flechas de alta tecnologia.",
    history: "Agente veterano da S.H.I.E.L.D. e arqueiro de precisão cirúrgica. Coração e alma tática dos Vingadores, disposto a tudo para proteger sua família e seus companheiros de equipe."
  },
  {
    id: 7,
    name: "Peter Parker",
    realName: "Homem-Aranha",
    logo: "imagens/aranha.png",
    powers: "Sentido aranha (premonição de perigo), aderência a superfícies, agilidade sobre-humana, superforça e disparadores de teia.",
    history: "Picado por uma aranha geneticamente modificada no Queens. Recrutado por Tony Stark, aprendeu a dolorosa lição de que com grandes poderes vêm grandes responsabilidades."
  },
  {
    id: 8,
    name: "Nick Fury",
    realName: "Nick Fury",
    logo: "imagens/niki.png",
    powers: "Estrategista militar mestre, especialista em espionagem, liderança tática global e conhecimento absoluto dos segredos da Terra.",
    history: "Lendário Diretor da S.H.I.E.L.D. e idealizador da 'Iniciativa Vingadores'. Trabalhou nas sombras durante décadas para unir os heróis mais poderosos da Terra contra ameaças mundiais."
  },
  {
    id: 9,
    name: "Loki Laufeyson",
    realName: "Deus da Trapaça",
    logo: "imagens/lokiper.png",
    powers: "Feitiçaria asgardiana, ilusões ópticas, projeção astral, telecinesia, transfiguração e controle sobre o fluxo temporal.",
    history: "Filho biológico de um Gigante de Gelo adotado por Odin. Passou de vilão invejoso do irmão a salvador supremo da Árvore do Tempo e guardião do Multiverso."
  },
  {
    id: 10,
    name: "Stephen Strange",
    realName: "Doutor Estranho",
    logo: "imagens/estranho.png",
    powers: "Artes Místicas, manipulação da energia astral, criação de portais dimensionais, espelhamento de realidade e uso de artefatos mágicos.",
    history: "Um neurocirurgião renomado que perdeu o movimento das mãos em um acidente. Ao buscar cura no Kamar-Taj, tornou-se o Mago Supremo e guardião da Terra contra ameaças místicas."
  },
  {
    id: 11,
    name: "James Rhodes",
    realName: "Máquina de Combate",
    logo: "imagens/james.png",
    powers: "Treinamento militar de elite, uso da armadura tática militar equipada com miniguns, mísseis pesados e repulsores.",
    history: "Coronel da Força Aérea dos EUA e melhor amigo de Tony Stark. Serve como ponte entre os Vingadores e as forças armadas, operando a armadura pesada Máquina de Combate."
  },
  {
    id: 12,
    name: "Wong",
    realName: "Mago Supremo",
    logo: "imagens/wong.png",
    powers: "Mestre das Artes Místicas, manipulação de relíquias mágicas, abertura de portais e combate corporal com energia mística.",
    history: "Guardião das relíquias de Kamar-Taj e leal aliado de Stephen Strange. Assumiu o título oficial de Mago Supremo e atua ativamente na defesa do ecossistema místico da Terra."
  },
  {
    id: 13,
    name: "Wanda Maximoff",
    realName: "Feiticeira Escarlate",
    logo: "imagens/wanda.png",
    powers: "Magia do Caos, alteração da realidade, telecinesia, controle mental, telepatia e criação de matéria do zero.",
    history: "Submetida a experimentos com a Joia da Mente. Após traumas intensos ao longo da vida, libertou todo o seu poder místico ancestral para se tornar a lendária Feiticeira Escarlate."
  },
  {
    id: 14,
    name: "Wade Wilson",
    realName: "Deadpool",
    logo: "imagens/deadpool.png",
    powers: "Fator de cura regenerativo acelerado e quase imortal, mestre em artes marciais, tiro, esgrima e consciência da quarta parede.",
    history: "Ex-mercenário que ganhou fator de cura após um experimento genético para curar seu câncer. Conhecido por seu humor ácido e por quebrar constantemente a quarta parede."
  },
  {
    id: 15,
    name: "Thanos",
    realName: "O Titã Louco",
    logo: "imagens/thanos.png",
    powers: "Força e invulnerabilidade titânica, intelecto estratégico supremo e domínio absoluto quando em posse das Joias do Infinito.",
    history: "Conquistador cósmico de Titã que presenciou a ruína do seu mundo. Reuniu as seis Joias do Infinito para apagar metade do universo, acreditando trazer o equilíbrio perfeito."
  },
  {
    id: 16,
    name: "Ultron",
    realName: "Ultron",
    logo: "imagens/ultron.png",
    powers: "Inteligência artificial autoconsciente, corpo de Vibranium, manipulação de redes cibernéticas, voo e rajadas de concussão.",
    history: "Criado por Tony Stark e Bruce Banner como um programa de paz global. Ao ganhar consciência, concluiu que a única forma de salvar a Terra seria erradicando a humanidade."
  },
  {
    id: 17,
    name: "Victor Von Doom",
    realName: "Doutor Destino",
    logo: "imagens/destino.png",
    powers: "Intelecto de nível gênio, maestria em feitiçaria e artes místicas, além de uma armadura cibernética de altíssima tecnologia.",
    history: "Governante de Latvéria e um dos homens mais inteligentes e perigosos do multiverso. Une ciência e magia para exercer controle absoluto e impor sua própria ordem cósmica."
  }
];

// LISTA COMPLETA DAS JOIAS DO INFINITO
const infinityStones = [
  {
    id: 1,
    name: "imagens/espaço.png",
    color: "Azul 🔷",
    logo: "imagens/espaço.png",
    power: "Concede ao utilizador a capacidade de manipular o espaço, permitindo teletransporte instantâneo para qualquer lugar do universo, criação de buracos de minhoca e alteração das leis da física espacial.",
    container: "Originalmente contida dentro do **Tesseract**. Aparece em *Capitão América: O Primeiro Vingador*, *Os Vingadores* e *Vingadores: Guerra Infinita*."
  },
  {
    id: 2,
    name: "Joia da Mente",
    color: "Amarela 🟡",
    logo: "imagens/mente.png",
    power: "Garante habilidades psíquicas absolutas, incluindo telepatia, controle mental, aumento exponencial da inteligência e concessão de consciência própria a seres sintéticos.",
    container: "Originalmente guardada no **Cetro de Loki** e posteriormente colocada na testa do **Visão**. Destaque em *Os Vingadores*, *Vingadores: Era de Ultron* e *Vingadores: Guerra Infinita*."
  },
  {
    id: 3,
    name: "Joia da Realidade",
    color: "Vermelha 🔴",
    logo: "imagens/realidade.png",
    power: "Permite ao usuário alterar a própria matéria e realidade à sua vontade, transformando ilusões em matéria física tangível e desafiando as leis naturais.",
    container: "Aparece na forma líquida conhecida como **Éter**. Introduzida em *Thor: O Mundo Sombrio* e guardada temporariamente com o Colecionador em *Guardiões da Galáxia*."
  },
  {
    id: 4,
    name: "Joia do Poder",
    color: "Roxa 🟣",
    logo: "imagens/poder.png",
    power: "Fornece energia e força destrutiva quase ilimitadas. Capaz de dizimar planetas inteiros e amplificar o poder de qualquer outra joia próxima.",
    container: "Guardada dentro do **Orbe**. Vista em *Guardiões da Galáxia*, onde a equipe se une para conter seu poder devastador, e mantida em segurança em Xandar até a chegada de Thanos."
  },
  {
    id: 5,
    name: "Joia do Tempo",
    color: "Verde 🟢",
    logo: "imagens/tempo.png",
    power: "Garante controle total sobre o tempo: permite voltar ou avançar no tempo, criar loops temporais infinitos e visualizar futuros possíveis.",
    container: "Protegida dentro do artefato místico **Olho de Agamotto**, sob a guarda do Doutor Estranho em Kamar-Taj. Aparece em *Doutor Estranho* e *Vingadores: Guerra Infinita*."
  },
  {
    id: 6,
    name: "Joia da Alma",
    color: "Laranja 🟠",
    logo: "imagens/alma.png",
    power: "Possui consciência própria e controle sobre a essência viva de todas as almas do universo. Exige um sacrifício supremo para ser reivindicada.",
    container: "Escondida no planeta **Vormir**, sob a vigilância do Caveira Vermelha. Requer o sacrifício de uma alma amada (como visto com Gamora em *Guerra Infinita* e Viúva Negra em *Ultimato*)."
  }
];

// Gerenciamento do LocalStorage com mesclagem e sincronização automática de campos
function loadMoviesData() {
  const savedVersion = localStorage.getItem("marvel_data_version");
  const savedMovies = localStorage.getItem("marvel_movies");

  if (!savedMovies) {
    localStorage.setItem("marvel_data_version", CURRENT_DATA_VERSION);
    localStorage.setItem("marvel_movies", JSON.stringify(defaultMovies));
    return defaultMovies;
  }

  let parsed = [];
  try {
    parsed = JSON.parse(savedMovies);
  } catch (e) {
    parsed = [];
  }

  // Atualiza versão e preserva status do usuário enquanto atualiza títulos/sinopses do código
  localStorage.setItem("marvel_data_version", CURRENT_DATA_VERSION);

  const updatedMovies = defaultMovies.map(defMovie => {
    const found = parsed.find(m => m.id === defMovie.id);
    if (found) {
      return {
        ...defMovie,
        watched: typeof found.watched === "boolean" ? found.watched : false,
        rating: typeof found.rating === "number" ? found.rating : 0,
        watchedDate: found.watchedDate || null
      };
    }
    return defMovie;
  });

  localStorage.setItem("marvel_movies", JSON.stringify(updatedMovies));
  return updatedMovies;
}

let movies = loadMoviesData();
let selectedMovieId = null;
let selectedCharacterId = null;
let selectedStoneId = null;

// ALTERNAR ENTRE ABAS (Filmes / Personagens / Joias)
function switchTab(tabName) {
  const moviesSec = document.getElementById("movies-section");
  const charsSec = document.getElementById("characters-section");
  const stonesSec = document.getElementById("stones-section");

  const btnMovies = document.getElementById("btn-tab-movies");
  const btnChars = document.getElementById("btn-tab-characters");
  const btnStones = document.getElementById("btn-tab-stones");

  // Oculta todas as seções por padrão
  if (moviesSec) moviesSec.style.display = "none";
  if (charsSec) charsSec.style.display = "none";
  if (stonesSec) stonesSec.style.display = "none";

  // Remove classe ativa de todos os botões
  if (btnMovies) btnMovies.classList.remove("active");
  if (btnChars) btnChars.classList.remove("active");
  if (btnStones) btnStones.classList.remove("active");

  if (tabName === 'movies') {
    if (moviesSec) moviesSec.style.display = "block";
    if (btnMovies) btnMovies.classList.add("active");
  } else if (tabName === 'characters') {
    if (charsSec) charsSec.style.display = "block";
    if (btnChars) btnChars.classList.add("active");
    renderCharacters();
  } else if (tabName === 'stones') {
    if (stonesSec) stonesSec.style.display = "block";
    if (btnStones) btnStones.classList.add("active");
    renderStones();
  }
}

// Renderizar Cards dos Personagens
function renderCharacters() {
  const grid = document.getElementById("characters-grid");
  if (!grid) return;
  grid.innerHTML = "";

  characters.forEach(char => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => openCharModal(char.id);

    const subTitle = char.realName || "Herói Marvel";

    card.innerHTML = `
      <div class="card-logo-box">
        <img src="${char.logo}" alt="${char.name}">
      </div>
      <div>
        <div class="card-title">${char.name}</div>
        <div class="card-meta">${subTitle}</div>
      </div>
      <div class="status-tag watched" style="margin-top: 8px;">
        🔍 VER DETALHES
      </div>
    `;

    grid.appendChild(card);
  });
}

// Renderizar Cards das Joias do Infinito
function renderStones() {
  const grid = document.getElementById("stones-grid");
  if (!grid) return;
  grid.innerHTML = "";

  infinityStones.forEach(stone => {
    const card = document.createElement("div");
    card.className = "card";
    card.onclick = () => openStoneModal(stone.id);

    card.innerHTML = `
      <div class="card-logo-box">
        <img src="${stone.logo}" alt="${stone.name}">
      </div>
      <div>
        <div class="card-title">${stone.name}</div>
        <div class="card-meta">${stone.color}</div>
      </div>
      <div class="status-tag watched" style="margin-top: 8px;">
        💎 VER PODER
      </div>
    `;

    grid.appendChild(card);
  });
}

// ABRIR MODAL DO PERSONAGEM
function openCharModal(id) {
  selectedCharacterId = id;
  const char = characters.find(c => c.id === id);
  if (!char) return;

  const logoEl = document.getElementById("char-modal-logo");
  const titleEl = document.getElementById("char-modal-title");
  const realNameEl = document.getElementById("char-modal-realname");
  const powersEl = document.getElementById("char-modal-powers");
  const historyEl = document.getElementById("char-modal-history");

  if (logoEl) logoEl.src = char.logo;
  if (titleEl) titleEl.innerText = char.name;
  if (realNameEl) realNameEl.innerText = char.realName;
  if (powersEl) powersEl.innerText = char.powers;
  if (historyEl) historyEl.innerText = char.history;

  const modal = document.getElementById("char-modal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

// FECHAR MODAL DO PERSONAGEM
function closeCharModal() {
  const modal = document.getElementById("char-modal");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// ABRIR MODAL DA JOIA DO INFINITO
function openStoneModal(id) {
  selectedStoneId = id;
  const stone = infinityStones.find(s => s.id === id);
  if (!stone) return;

  const logoEl = document.getElementById("stone-modal-logo");
  const titleEl = document.getElementById("stone-modal-title");
  const colorEl = document.getElementById("stone-modal-color");
  const powerEl = document.getElementById("stone-modal-power");
  const containerEl = document.getElementById("stone-modal-container");

  if (logoEl) logoEl.src = stone.logo;
  if (titleEl) titleEl.innerText = stone.name;
  if (colorEl) colorEl.innerText = stone.color;
  if (powerEl) powerEl.innerText = stone.power;
  if (containerEl) containerEl.innerHTML = stone.container;

  const modal = document.getElementById("stone-modal");
  if (modal) {
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
  }
}

// FECHAR MODAL DA JOIA DO INFINITO
function closeStoneModal() {
  const modal = document.getElementById("stone-modal");
  if (modal) modal.style.display = "none";
  document.body.style.overflow = "auto";
}

// Renderizar cards de filmes na tela
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

// Renderizar Avaliação por Estrelas
function renderStarRating(currentRating) {
  let ratingContainer = document.getElementById("star-rating-box");
  
  if (!ratingContainer) {
    ratingContainer = document.createElement("div");
    ratingContainer.id = "star-rating-box";
    ratingContainer.style.margin = "15px 0";
    ratingContainer.style.textAlign = "center";

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
      openLetterModal();
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
  const charModal = document.getElementById("char-modal");
  const stoneModal = document.getElementById("stone-modal");
  const letterModal = document.getElementById("letter-modal");

  if (event.target === movieModal) closeModal();
  if (event.target === charModal) closeCharModal();
  if (event.target === stoneModal) closeStoneModal();
  if (event.target === letterModal) closeLetterModal();
};

// Executar após carregar a página
document.addEventListener("DOMContentLoaded", () => {
  renderMovies();
  initSpace();
});
