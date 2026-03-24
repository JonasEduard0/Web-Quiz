const perguntas = {
  curiosidades: {
    facil: [
      { pergunta: "Qual é o maior planeta do sistema solar?", respostas: ["Terra", "Marte", "Júpiter", "Saturno"], correta: 2 },
      { pergunta: "Quantos continentes existem no mundo?", respostas: ["5", "6", "7", "8"], correta: 2 },
      { pergunta: "Qual animal é conhecido como o rei da selva?", respostas: ["Tigre", "Leão", "Elefante", "Urso"], correta: 1 },
      { pergunta: "Qual é o oceano mais profundo do mundo?", respostas: ["Atlântico", "Pacífico", "Índico", "Ártico"], correta: 1 },
      { pergunta: "Qual gás as plantas absorvem da atmosfera?", respostas: ["Oxigênio", "Hidrogênio", "Gás carbônico", "Nitrogênio"], correta: 2 },
      { pergunta: "Qual é o metal líquido em temperatura ambiente?", respostas: ["Ferro", "Mercúrio", "Ouro", "Alumínio"], correta: 1 },
      { pergunta: "Qual planeta é conhecido como planeta vermelho?", respostas: ["Vênus", "Marte", "Urano", "Netuno"], correta: 1 },
      { pergunta: "Quantos lados tem um triângulo?", respostas: ["2", "3", "4", "5"], correta: 1 },
      { pergunta: "Qual estrela ilumina a Terra?", respostas: ["Lua", "Marte", "Sol", "Vênus"], correta: 2 },
      { pergunta: "Qual é o maior mamífero do mundo?", respostas: ["Elefante", "Girafa", "Baleia-azul", "Rinoceronte"], correta: 2 }
    ],
    medio: [
      { pergunta: "Qual país é conhecido por ter inventado o papel?", respostas: ["Índia", "China", "Egito", "Japão"], correta: 1 },
      { pergunta: "Em que estado físico a água está a 0°C, geralmente?", respostas: ["Gasoso", "Líquido apenas", "Sólido ou líquido", "Plasma"], correta: 2 },
      { pergunta: "Quantos planetas há no Sistema Solar?", respostas: ["7", "8", "9", "10"], correta: 1 },
      { pergunta: "Qual é a capital da Austrália?", respostas: ["Sydney", "Melbourne", "Canberra", "Perth"], correta: 2 },
      { pergunta: "Que cientista formulou a lei da gravitação universal?", respostas: ["Galileu", "Newton", "Einstein", "Tesla"], correta: 1 },
      { pergunta: "Qual é o elemento químico representado por O?", respostas: ["Ouro", "Ozônio", "Oxigênio", "Ósmio"], correta: 2 },
      { pergunta: "Quantos dentes possui um adulto, normalmente?", respostas: ["28", "30", "32", "34"], correta: 2 },
      { pergunta: "Qual deserto é o maior do mundo em área quente?", respostas: ["Saara", "Atacama", "Gobi", "Kalahari"], correta: 0 },
      { pergunta: "Em que continente fica o Egito?", respostas: ["Ásia", "Europa", "África", "América"], correta: 2 },
      { pergunta: "Qual camada da Terra é onde vivemos?", respostas: ["Núcleo", "Manto", "Crosta", "Magma"], correta: 2 }
    ],
    dificil: [
      { pergunta: "Qual planeta tem o maior número de luas conhecidas atualmente entre os mais citados em quizzes escolares?", respostas: ["Júpiter", "Saturno", "Netuno", "Urano"], correta: 1 },
      { pergunta: "Qual é a velocidade aproximada da luz no vácuo?", respostas: ["300 mil km/s", "150 mil km/s", "30 mil km/s", "3 mil km/s"], correta: 0 },
      { pergunta: "Qual cientista propôs as três leis do movimento?", respostas: ["Einstein", "Darwin", "Newton", "Kepler"], correta: 2 },
      { pergunta: "Qual país tem formato popularmente comparado a uma bota?", respostas: ["Portugal", "Itália", "Grécia", "Croácia"], correta: 1 },
      { pergunta: "Qual gás é mais abundante na atmosfera terrestre?", respostas: ["Oxigênio", "Nitrogênio", "Hidrogênio", "Argônio"], correta: 1 },
      { pergunta: "Que órgão do corpo humano filtra o sangue e produz urina?", respostas: ["Fígado", "Pulmão", "Coração", "Rim"], correta: 3 },
      { pergunta: "Qual a unidade básica da vida?", respostas: ["Átomo", "Molécula", "Célula", "Tecido"], correta: 2 },
      { pergunta: "Qual oceano banha a costa leste do Brasil?", respostas: ["Pacífico", "Índico", "Atlântico", "Ártico"], correta: 2 },
      { pergunta: "Qual processo as plantas usam para produzir alimento?", respostas: ["Fermentação", "Fotossíntese", "Respiração", "Digestão"], correta: 1 },
      { pergunta: "Qual é o menor país do mundo?", respostas: ["Mônaco", "Vaticano", "Malta", "San Marino"], correta: 1 }
    ]
  },

  jogos: {
    facil: [
      { pergunta: "Qual empresa criou o personagem Mario?", respostas: ["Sony", "Nintendo", "Microsoft", "Sega"], correta: 1 },
      { pergunta: "Em Minecraft, qual material é necessário para fazer uma picareta de diamante?", respostas: ["Madeira", "Pedra", "Ferro", "Diamante"], correta: 3 },
      { pergunta: "Qual jogo popular tem o mapa chamado Summoner's Rift?", respostas: ["Valorant", "League of Legends", "Fortnite", "CS:GO"], correta: 1 },
      { pergunta: "Qual console é da empresa Sony?", respostas: ["Xbox", "Switch", "PlayStation", "GameCube"], correta: 2 },
      { pergunta: "Em Free Fire, quantos jogadores entram normalmente em uma partida?", respostas: ["20", "30", "40", "50"], correta: 3 },
      { pergunta: "Qual personagem é conhecido por coletar anéis dourados?", respostas: ["Mario", "Crash", "Sonic", "Link"], correta: 2 },
      { pergunta: "Qual empresa criou o Xbox?", respostas: ["Sony", "Microsoft", "Nintendo", "Valve"], correta: 1 },
      { pergunta: "Qual destes é um jogo de futebol?", respostas: ["Minecraft", "FC 25", "Valorant", "The Sims"], correta: 1 },
      { pergunta: "Qual cor é o encanador Mario?", respostas: ["Verde", "Azul e vermelho", "Amarelo", "Roxo"], correta: 1 },
      { pergunta: "Em Minecraft, qual criatura explode perto do jogador?", respostas: ["Zumbi", "Esqueleto", "Creeper", "Aranha"], correta: 2 }
    ],
    medio: [
      { pergunta: "Qual empresa desenvolveu o jogo League of Legends?", respostas: ["Valve", "Ubisoft", "Riot Games", "Epic Games"], correta: 2 },
      { pergunta: "Qual franquia possui o personagem Link?", respostas: ["Metroid", "The Legend of Zelda", "Final Fantasy", "Donkey Kong"], correta: 1 },
      { pergunta: "Em qual jogo aparece o personagem Kratos?", respostas: ["God of War", "Halo", "Resident Evil", "Overwatch"], correta: 0 },
      { pergunta: "Qual gênero de jogo é Valorant?", respostas: ["Corrida", "FPS tático", "MOBA", "RPG"], correta: 1 },
      { pergunta: "Qual destes jogos é da Valve?", respostas: ["CS2", "Fortnite", "Roblox", "Free Fire"], correta: 0 },
      { pergunta: "Qual item revive o jogador em Minecraft?", respostas: ["Maçã dourada", "Totem da Imortalidade", "Poção de vida", "Diamante"], correta: 1 },
      { pergunta: "Qual empresa criou o console Switch?", respostas: ["Nintendo", "Sony", "Sega", "SNK"], correta: 0 },
      { pergunta: "Em Pokémon, como se chama a criatura elétrica mais famosa?", respostas: ["Charmander", "Pikachu", "Bulbasaur", "Squirtle"], correta: 1 },
      { pergunta: "Qual série é famosa pelo modo battle royale com construção?", respostas: ["PUBG", "Apex Legends", "Fortnite", "Warzone"], correta: 2 },
      { pergunta: "Qual destes jogos é sandbox?", respostas: ["Minecraft", "Valorant", "FIFA", "Street Fighter"], correta: 0 }
    ],
    dificil: [
      { pergunta: "Qual estúdio criou The Last of Us?", respostas: ["Rockstar", "Naughty Dog", "Insomniac", "Santa Monica"], correta: 1 },
      { pergunta: "Em Dark Souls, acender fogueiras serve principalmente para quê?", respostas: ["Salvar e descansar", "Ganhar ouro", "Trocar armas", "Aumentar mapa"], correta: 0 },
      { pergunta: "Qual franquia popular possui o subtítulo 'Breath of the Wild'?", respostas: ["Final Fantasy", "Zelda", "Monster Hunter", "Persona"], correta: 1 },
      { pergunta: "Em jogos competitivos, o termo FPS significa:", respostas: ["Fast Play Style", "Frames Per Second ou First Person Shooter dependendo do contexto", "Full Power System", "File Processing Speed"], correta: 1 },
      { pergunta: "Qual empresa é dona da Steam?", respostas: ["Valve", "EA", "Ubisoft", "Riot"], correta: 0 },
      { pergunta: "Qual desses jogos é conhecido pelo gênero soulslike?", respostas: ["Elden Ring", "Rocket League", "The Sims", "Fall Guys"], correta: 0 },
      { pergunta: "Quem é o protagonista principal de Red Dead Redemption 2?", respostas: ["John Marston", "Arthur Morgan", "Trevor", "CJ"], correta: 1 },
      { pergunta: "Qual destes jogos não é MOBA?", respostas: ["League of Legends", "Dota 2", "Smite", "Valorant"], correta: 3 },
      { pergunta: "Em Resident Evil, a Umbrella é:", respostas: ["Uma cidade", "Uma corporação", "Uma arma", "Uma doença"], correta: 1 },
      { pergunta: "Qual jogo popularizou muito o gênero auto chess no PC moderno?", respostas: ["Teamfight Tactics", "Auto Chess", "StarCraft", "Warcraft III Reforged"], correta: 1 }
    ]
  },

  animes: {
    facil: [
      { pergunta: "Qual é o nome do protagonista de Naruto?", respostas: ["Sasuke", "Naruto Uzumaki", "Kakashi", "Gaara"], correta: 1 },
      { pergunta: "Em Dragon Ball, quem é o principal rival de Goku?", respostas: ["Kuririn", "Piccolo", "Vegeta", "Gohan"], correta: 2 },
      { pergunta: "Qual anime tem o personagem Monkey D. Luffy?", respostas: ["Bleach", "Naruto", "One Piece", "Attack on Titan"], correta: 2 },
      { pergunta: "Em Death Note, qual é o nome do caderno especial?", respostas: ["Dark Book", "Note of Death", "Death Note", "Shinigami Book"], correta: 2 },
      { pergunta: "Qual anime fala sobre titãs gigantes?", respostas: ["Tokyo Ghoul", "One Punch Man", "Attack on Titan", "Demon Slayer"], correta: 2 },
      { pergunta: "Qual personagem de One Piece usa chapéu de palha?", respostas: ["Zoro", "Luffy", "Sanji", "Ace"], correta: 1 },
      { pergunta: "Em Naruto, qual é o nome da raposa de nove caudas?", respostas: ["Kurama", "Shukaku", "Matatabi", "Gyuki"], correta: 0 },
      { pergunta: "Qual anime tem o personagem Goku?", respostas: ["Bleach", "Dragon Ball", "One Piece", "Naruto"], correta: 1 },
      { pergunta: "Qual personagem usa o caderno para matar em Death Note?", respostas: ["L", "Near", "Light Yagami", "Mello"], correta: 2 },
      { pergunta: "Qual anime tem Tanjiro como protagonista?", respostas: ["Demon Slayer", "Jujutsu Kaisen", "Bleach", "Black Clover"], correta: 0 }
    ],
    medio: [
      { pergunta: "Qual é o nome do irmão de Edward em Fullmetal Alchemist?", respostas: ["Alphonse", "Roy", "Ling", "Winry"], correta: 0 },
      { pergunta: "Qual organização Itachi integrou em Naruto?", respostas: ["Anbu", "Akatsuki", "Hebi", "Raiz"], correta: 1 },
      { pergunta: "Em One Piece, o tesouro procurado por Luffy se chama:", respostas: ["Grand Line", "Red Line", "One Piece", "Laugh Tale"], correta: 2 },
      { pergunta: "Quem é o mentor de Tanjiro em Demon Slayer?", respostas: ["Rengoku", "Urokodaki", "Tengen", "Muzan"], correta: 1 },
      { pergunta: "Qual personagem é conhecido como o espadachim de três espadas em One Piece?", respostas: ["Sanji", "Mihawk", "Zoro", "Shanks"], correta: 2 },
      { pergunta: "Em Jujutsu Kaisen, quem é o protagonista?", respostas: ["Megumi", "Itadori", "Gojo", "Yuta"], correta: 1 },
      { pergunta: "Qual anime tem caçadores e formigas quimera?", respostas: ["Bleach", "Hunter x Hunter", "Blue Lock", "Haikyuu"], correta: 1 },
      { pergunta: "Em Attack on Titan, Eren pertence inicialmente a qual distrito?", respostas: ["Shiganshina", "Trost", "Utopia", "Mitras"], correta: 0 },
      { pergunta: "Quem é o detetive rival de Light em Death Note?", respostas: ["L", "Misa", "Ryuk", "Matsuda"], correta: 0 },
      { pergunta: "Em Dragon Ball Z, qual transformação vem primeiro?", respostas: ["Super Saiyajin Blue", "Super Saiyajin", "Ultra Instinct", "Super Saiyajin 3"], correta: 1 }
    ],
    dificil: [
      { pergunta: "Qual é o nome do capitão da 10ª divisão em Bleach durante boa parte da série clássica?", respostas: ["Hitsugaya", "Aizen", "Byakuya", "Kenpachi"], correta: 0 },
      { pergunta: "Em Naruto, qual clã possui o Byakugan?", respostas: ["Uchiha", "Nara", "Hyuga", "Akimichi"], correta: 2 },
      { pergunta: "Quem treinou Gon no uso inicial mais profundo de Nen em Hunter x Hunter?", respostas: ["Hisoka", "Wing", "Biscuit", "Kite"], correta: 1 },
      { pergunta: "Em One Piece, qual imperador tem poder da fruta do dragão azul?", respostas: ["Shanks", "Big Mom", "Kaido", "Barba Negra"], correta: 2 },
      { pergunta: "No anime Code Geass, qual é o nome do protagonista?", respostas: ["Suzaku", "Lelouch", "C.C.", "Schneizel"], correta: 1 },
      { pergunta: "Em Fullmetal Alchemist, qual é a regra básica da alquimia?", respostas: ["Poder absoluto", "Equivalência de troca", "Magia negra", "Contrato espiritual"], correta: 1 },
      { pergunta: "Em Attack on Titan, o nome do comandante de grande destaque do Corpo de Exploração é:", respostas: ["Levi", "Erwin Smith", "Hange", "Reiner"], correta: 1 },
      { pergunta: "Qual anime tem o personagem Thorfinn?", respostas: ["Vinland Saga", "Berserk", "Dororo", "Dr. Stone"], correta: 0 },
      { pergunta: "Quem é o shinigami que acompanha Light?", respostas: ["Rem", "Ryuk", "Gelus", "Sidoh"], correta: 1 },
      { pergunta: "Em Jujutsu Kaisen, Sukuna divide corpo com:", respostas: ["Gojo", "Megumi", "Yuji Itadori", "Geto"], correta: 2 }
    ]
  },

  musica: {
    facil: [
      { pergunta: "Quantas notas musicais naturais existem?", respostas: ["5", "6", "7", "8"], correta: 2 },
      { pergunta: "Qual instrumento tem teclas pretas e brancas?", respostas: ["Violão", "Bateria", "Piano", "Flauta"], correta: 2 },
      { pergunta: "Qual desses é um instrumento de corda?", respostas: ["Violino", "Trompete", "Tambor", "Saxofone"], correta: 0 },
      { pergunta: "Qual símbolo musical indica silêncio?", respostas: ["Clave", "Pausa", "Semínima", "Colcheia"], correta: 1 },
      { pergunta: "Qual artista é conhecido como Rei do Pop?", respostas: ["Elvis Presley", "Michael Jackson", "Bruno Mars", "The Weeknd"], correta: 1 },
      { pergunta: "Qual instrumento é muito usado no rock para solos?", respostas: ["Triângulo", "Guitarra", "Pandeiro", "Violoncelo"], correta: 1 },
      { pergunta: "Qual destes é um instrumento de percussão?", respostas: ["Bateria", "Flauta", "Violino", "Piano"], correta: 0 },
      { pergunta: "Qual instrumento geralmente tem 6 cordas?", respostas: ["Bateria", "Violão", "Flauta", "Trombone"], correta: 1 },
      { pergunta: "Qual destes sopra para tocar?", respostas: ["Flauta", "Pandeiro", "Tambor", "Violino"], correta: 0 },
      { pergunta: "Qual símbolo musical vem no começo da pauta?", respostas: ["Clave", "Pausa", "Bemol", "Ponto"], correta: 0 }
    ],
    medio: [
      { pergunta: "Qual destes é um instrumento de sopro?", respostas: ["Saxofone", "Violão", "Bateria", "Harpa"], correta: 0 },
      { pergunta: "No compasso 4/4, o número de cima indica:", respostas: ["Quantas notas existem na música inteira", "Quantos tempos por compasso", "A velocidade da canção", "O tom da música"], correta: 1 },
      { pergunta: "Qual artista é frequentemente chamado de Rei do Rock?", respostas: ["Freddie Mercury", "Elvis Presley", "Prince", "Bono"], correta: 1 },
      { pergunta: "Qual termo indica uma música mais rápida?", respostas: ["Lento", "Adagio", "Allegro", "Pianissimo"], correta: 2 },
      { pergunta: "Qual destes pode tocar acordes com facilidade?", respostas: ["Violão", "Flauta doce", "Saxofone", "Triângulo"], correta: 0 },
      { pergunta: "Qual sinal aumenta meio tom?", respostas: ["Bemol", "Sustenido", "Pausa", "Clave"], correta: 1 },
      { pergunta: "Qual estilo musical nasceu fortemente com improvisação e swing?", respostas: ["Jazz", "Metal", "Funk carioca", "Sertanejo"], correta: 0 },
      { pergunta: "Qual dessas vozes é geralmente a mais grave entre as masculinas?", respostas: ["Tenor", "Barítono", "Baixo", "Contralto"], correta: 2 },
      { pergunta: "Qual instrumento usa arco com frequência?", respostas: ["Violino", "Bateria", "Clarinete", "Trompete"], correta: 0 },
      { pergunta: "Pianissimo indica tocar:", respostas: ["Muito forte", "Bem devagar", "Muito suave", "Muito agudo"], correta: 2 }
    ],
    dificil: [
      { pergunta: "Quantos semitons existem em uma oitava?", respostas: ["8", "10", "12", "14"], correta: 2 },
      { pergunta: "Qual intervalo existe entre Dó e Sol?", respostas: ["Terça", "Quarta", "Quinta", "Sexta"], correta: 2 },
      { pergunta: "Qual dessas famílias inclui violino, viola, violoncelo e contrabaixo?", respostas: ["Madeiras", "Metais", "Cordas friccionadas", "Percussão"], correta: 2 },
      { pergunta: "Em teoria musical, o sustenido faz o som ficar:", respostas: ["Meio tom acima", "Um tom abaixo", "Dois tons acima", "Sem alteração"], correta: 0 },
      { pergunta: "Qual destes compositores é associado ao período clássico?", respostas: ["Mozart", "Chopin", "Debussy", "Hans Zimmer"], correta: 0 },
      { pergunta: "Qual o nome da velocidade da música?", respostas: ["Timbre", "Compasso", "Andamento", "Escala"], correta: 2 },
      { pergunta: "Qual destes termos indica aumentar gradualmente o volume?", respostas: ["Diminuendo", "Crescendo", "Adagio", "Staccato"], correta: 1 },
      { pergunta: "Qual elemento diferencia principalmente sons de mesma altura e intensidade?", respostas: ["Timbre", "Compasso", "Escala", "Clave"], correta: 0 },
      { pergunta: "Qual dessas escalas é formada apenas por teclas brancas a partir do dó?", respostas: ["Menor harmônica", "Cromática", "Maior de dó", "Pentatônica menor"], correta: 2 },
      { pergunta: "Em harmonia básica, um acorde tríade é formado por:", respostas: ["2 notas", "3 notas", "4 notas", "5 notas"], correta: 1 }
    ]
  }
};

const imagensTemas = {
  curiosidades: "curiosidade.jpg",
  jogos: "jogo.jpg",
  animes: "anime.jpg",
  musica: "musica.jpg"
};

const menuInicial = document.getElementById("menu-inicial");
const selecaoDificuldadeTela = document.getElementById("selecao-dificuldade");
const quizTela = document.getElementById("quiz");
const resultadoTela = document.getElementById("resultado");

const tituloDificuldade = document.getElementById("titulo-dificuldade");
const subtituloDificuldade = document.getElementById("subtitulo-dificuldade");
const btnVoltarMenu = document.getElementById("btn-voltar-menu");
const dificuldadeBtns = document.querySelectorAll(".dificuldade-btn");

const temaTitulo = document.getElementById("tema-titulo");
const modoInfo = document.getElementById("modo-info");
const contador = document.getElementById("contador");
const progresso = document.getElementById("progresso");
const perguntaEl = document.getElementById("pergunta");
const respostasEl = document.getElementById("respostas");
const feedbackEl = document.getElementById("feedback");
const proximaBtn = document.getElementById("proxima-btn");
const pontuacaoFinal = document.getElementById("pontuacao-final");
const reiniciarBtn = document.getElementById("reiniciar-btn");

const btnConfig = document.getElementById("btn-config");
const btnSair = document.getElementById("btn-sair");
const btnCompeticao = document.getElementById("btn-competicao");
const temaBtns = document.querySelectorAll(".tema-btn");

const configModal = document.getElementById("config-modal");
const fecharConfig = document.getElementById("fechar-config");
const toggleDarkmode = document.getElementById("toggle-darkmode");
const toggleSom = document.getElementById("toggle-som");
const volumeSlider = document.getElementById("volume-slider");
const volumeValor = document.getElementById("volume-valor");

const musicaFundo = document.getElementById("bg-music");
const fundoCategoria = document.getElementById("fundo-categoria");
const fundoTrack = document.getElementById("fundo-track");

let temaAtual = "";
let dificuldadeAtual = "";
let indicePergunta = 0;
let pontuacao = 0;
let somLigado = true;
let modoCompeticao = false;
let perguntasAtuais = [];
let musicaLiberada = false;

temaBtns.forEach((botao) => {
  botao.addEventListener("click", () => {
    liberarAudio();
    temaAtual = botao.dataset.tema;
    modoCompeticao = false;
    abrirSelecaoDificuldade();
  });
});

btnCompeticao.addEventListener("click", () => {
  liberarAudio();
  modoCompeticao = true;
  temaAtual = "";
  abrirSelecaoDificuldade();
});

dificuldadeBtns.forEach((botao) => {
  botao.addEventListener("click", () => {
    dificuldadeAtual = botao.dataset.dificuldade;

    if (modoCompeticao) {
      iniciarModoCompeticao();
    } else {
      iniciarQuizNormal();
    }
  });
});

btnVoltarMenu.addEventListener("click", () => {
  selecaoDificuldadeTela.classList.remove("ativa");
  menuInicial.classList.add("ativa");
  esconderFundoCategoria();
});

btnConfig.addEventListener("click", () => {
  liberarAudio();
  configModal.classList.add("ativo");
});

fecharConfig.addEventListener("click", () => {
  configModal.classList.remove("ativo");
});

configModal.addEventListener("click", (event) => {
  if (event.target === configModal) {
    configModal.classList.remove("ativo");
  }
});

toggleDarkmode.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

toggleSom.addEventListener("change", () => {
  somLigado = toggleSom.checked;

  if (somLigado) {
    tocarMusica();
  } else {
    musicaFundo.pause();
  }
});

volumeSlider.addEventListener("input", () => {
  const volume = Number(volumeSlider.value) / 100;
  musicaFundo.volume = volume;
  volumeValor.textContent = `${volumeSlider.value}%`;
});

btnSair.addEventListener("click", () => {
  alert("Para sair, feche a aba do navegador.");
});

proximaBtn.addEventListener("click", () => {
  indicePergunta++;

  if (indicePergunta < perguntasAtuais.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
});

reiniciarBtn.addEventListener("click", () => {
  resultadoTela.classList.remove("ativa");
  menuInicial.classList.add("ativa");
  esconderFundoCategoria();
});

function abrirSelecaoDificuldade() {
  menuInicial.classList.remove("ativa");
  quizTela.classList.remove("ativa");
  resultadoTela.classList.remove("ativa");
  selecaoDificuldadeTela.classList.add("ativa");

  if (modoCompeticao) {
    tituloDificuldade.textContent = "Modo Competição";
    subtituloDificuldade.textContent = "Escolha a dificuldade das 30 perguntas aleatórias.";
    aplicarFundoCompeticao();
  } else {
    tituloDificuldade.textContent = `Tema: ${formatarTema(temaAtual)}`;
    subtituloDificuldade.textContent = "Escolha a dificuldade para começar.";
    aplicarFundoTema(temaAtual);
  }
}

function iniciarQuizNormal() {
  indicePergunta = 0;
  pontuacao = 0;
  perguntasAtuais = embaralharArray([...perguntas[temaAtual][dificuldadeAtual]]);

  selecaoDificuldadeTela.classList.remove("ativa");
  resultadoTela.classList.remove("ativa");
  quizTela.classList.add("ativa");

  temaTitulo.textContent = `Tema: ${formatarTema(temaAtual)}`;
  modoInfo.textContent = `Modo normal • ${formatarDificuldade(dificuldadeAtual)} • ${perguntasAtuais.length} perguntas`;

  aplicarFundoTema(temaAtual);
  tocarMusica();
  mostrarPergunta();
}

function iniciarModoCompeticao() {
  indicePergunta = 0;
  pontuacao = 0;
  perguntasAtuais = gerarPerguntasCompeticao(dificuldadeAtual, 30);

  selecaoDificuldadeTela.classList.remove("ativa");
  resultadoTela.classList.remove("ativa");
  quizTela.classList.add("ativa");

  temaTitulo.textContent = "Modo Competição";
  modoInfo.textContent = `${formatarDificuldade(dificuldadeAtual)} • 30 perguntas aleatórias`;

  aplicarFundoCompeticao();
  tocarMusica();
  mostrarPergunta();
}

function mostrarPergunta() {
  const perguntaAtual = perguntasAtuais[indicePergunta];

  contador.textContent = `Pergunta ${indicePergunta + 1}/${perguntasAtuais.length}`;
  progresso.style.width = `${((indicePergunta + 1) / perguntasAtuais.length) * 100}%`;

  if (modoCompeticao) {
    perguntaEl.textContent = `[${formatarTema(perguntaAtual.tema)}] ${perguntaAtual.pergunta}`;
  } else {
    perguntaEl.textContent = perguntaAtual.pergunta;
  }

  respostasEl.innerHTML = "";
  feedbackEl.textContent = "";
  proximaBtn.classList.add("oculto");

  perguntaAtual.respostas.forEach((resposta, index) => {
    const botao = document.createElement("button");
    botao.textContent = resposta;
    botao.classList.add("resposta-btn");
    botao.addEventListener("click", () => verificarResposta(index, botao));
    respostasEl.appendChild(botao);
  });
}

function verificarResposta(indiceSelecionado, botaoClicado) {
  const perguntaAtual = perguntasAtuais[indicePergunta];
  const botoes = document.querySelectorAll(".resposta-btn");

  botoes.forEach((botao) => {
    botao.disabled = true;
  });

  if (indiceSelecionado === perguntaAtual.correta) {
    botaoClicado.classList.add("correta");
    feedbackEl.textContent = "Resposta correta!";
    pontuacao++;
    tocarSom("acerto");
  } else {
    botaoClicado.classList.add("errada");
    botoes[perguntaAtual.correta].classList.add("correta");
    feedbackEl.textContent = "Resposta errada!";
    tocarSom("erro");
  }

  proximaBtn.classList.remove("oculto");
}

function mostrarResultado() {
  quizTela.classList.remove("ativa");
  resultadoTela.classList.add("ativa");

  if (modoCompeticao) {
    pontuacaoFinal.textContent = `Você fez ${pontuacao} de ${perguntasAtuais.length} pontos no modo competição (${formatarDificuldade(dificuldadeAtual)}).`;
    aplicarFundoCompeticao();
  } else {
    pontuacaoFinal.textContent = `Você acertou ${pontuacao} de ${perguntasAtuais.length} perguntas em ${formatarTema(temaAtual)} (${formatarDificuldade(dificuldadeAtual)}).`;
    aplicarFundoTema(temaAtual);
  }
}

function aplicarFundoTema(tema) {
  const imagem = imagensTemas[tema];
  fundoTrack.innerHTML = "";

  for (let i = 0; i < 4; i++) {
    const item = document.createElement("div");
    item.classList.add("fundo-item");
    item.style.backgroundImage = `url("${imagem}")`;
    fundoTrack.appendChild(item);
  }

  fundoCategoria.classList.remove("oculto");
}

function aplicarFundoCompeticao() {
  fundoTrack.innerHTML = "";
  const ordem = ["curiosidades", "jogos", "animes", "musica", "curiosidades", "jogos", "animes", "musica"];

  ordem.forEach((tema) => {
    const item = document.createElement("div");
    item.classList.add("fundo-item");
    item.style.backgroundImage = `url("${imagensTemas[tema]}")`;
    fundoTrack.appendChild(item);
  });

  fundoCategoria.classList.remove("oculto");
}

function esconderFundoCategoria() {
  fundoCategoria.classList.add("oculto");
  fundoTrack.innerHTML = "";
}

function formatarTema(tema) {
  if (tema === "curiosidades") return "Curiosidades";
  if (tema === "jogos") return "Jogos";
  if (tema === "animes") return "Animes";
  if (tema === "musica") return "Música";
  return tema;
}

function formatarDificuldade(dificuldade) {
  if (dificuldade === "facil") return "Fácil";
  if (dificuldade === "medio") return "Médio";
  if (dificuldade === "dificil") return "Difícil";
  return dificuldade;
}

function liberarAudio() {
  if (!musicaLiberada) {
    musicaLiberada = true;
  }
}

function tocarMusica() {
  if (!somLigado) return;
  if (!musicaLiberada) return;

  musicaFundo.volume = Number(volumeSlider.value) / 100;

  const promessa = musicaFundo.play();
  if (promessa !== undefined) {
    promessa.catch(() => {});
  }
}

function tocarSom(tipo) {
  if (!somLigado) return;

  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  if (tipo === "acerto") {
    oscillator.frequency.value = 700;
  } else {
    oscillator.frequency.value = 250;
  }

  gainNode.gain.value = 0.08;
  oscillator.start();

  setTimeout(() => {
    oscillator.stop();
    audioContext.close();
  }, 180);
}

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function gerarPerguntasCompeticao(dificuldade, quantidade) {
  const todas = [];

  for (const tema in perguntas) {
    perguntas[tema][dificuldade].forEach((pergunta) => {
      todas.push({
        ...pergunta,
        tema: tema
      });
    });
  }

  const embaralhadas = embaralharArray([...todas]);
  return embaralhadas.slice(0, quantidade);
}