const casas = document.querySelectorAll(".casa");

const statusTexto = document.getElementById("status");

const reiniciarBtn = document.getElementById("reiniciar-btn");

const voltarBtn = document.getElementById("voltar-btn");

const musica = document.getElementById("bg-music");

let jogadorAtual = "X";

let jogoAtivo = true;

let tabuleiro = [
  "", "", "",
  "", "", "",
  "", "", ""
];

const combinacoesVitoria = [

  [0,1,2],
  [3,4,5],
  [6,7,8],

  [0,3,6],
  [1,4,7],
  [2,5,8],

  [0,4,8],
  [2,4,6]

];

function iniciarMusica() {

  musica.volume = 0.25;

  const promessa = musica.play();

  if (promessa !== undefined) {
    promessa.catch(() => {});
  }

}

document.body.addEventListener("click", iniciarMusica, {
  once: true
});

casas.forEach((casa) => {

  casa.addEventListener("click", jogar);

});

function jogar(evento) {

  const casa = evento.target;

  const index = casa.dataset.index;

  if (!jogoAtivo) return;

  if (tabuleiro[index] !== "") return;

  tabuleiro[index] = jogadorAtual;

  casa.textContent = jogadorAtual;

  verificarResultado();

}

function verificarResultado() {

  let venceu = false;

  for (const combinacao of combinacoesVitoria) {

    const [a, b, c] = combinacao;

    if (
      tabuleiro[a] &&
      tabuleiro[a] === tabuleiro[b] &&
      tabuleiro[a] === tabuleiro[c]
    ) {

      venceu = true;

      break;

    }

  }

  if (venceu) {

    statusTexto.textContent =
      `Jogador ${jogadorAtual} venceu!`;

    jogoAtivo = false;

    return;
  }

  if (!tabuleiro.includes("")) {

    statusTexto.textContent = "Empate!";

    jogoAtivo = false;

    return;
  }

  jogadorAtual =
    jogadorAtual === "X" ? "O" : "X";

  statusTexto.textContent =
    `Vez do jogador ${jogadorAtual}`;

}

reiniciarBtn.addEventListener("click", reiniciarJogo);

function reiniciarJogo() {

  jogadorAtual = "X";

  jogoAtivo = true;

  tabuleiro = [
    "", "", "",
    "", "", "",
    "", "", ""
  ];

  statusTexto.textContent =
    "Vez do jogador X";

  casas.forEach((casa) => {

    casa.textContent = "";

  });

}

voltarBtn.addEventListener("click", () => {

  window.location.href = "index.html";

});