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

const nomeXInput = document.getElementById("nomeX");
const nomeOInput = document.getElementById("nomeO");

function nomeJogador(simbolo) {

  if (simbolo === "X") {
    return nomeXInput.value || "Jogador 1";
  }

  return nomeOInput.value || "Jogador 2";
}

const simboloXSelect = document.getElementById("simboloX");

const simboloOSelect = document.getElementById("simboloO");

let simboloX = "X";
let simboloO = "O";

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

  simboloX = simboloXSelect.value;
  simboloO = simboloOSelect.value;

  const casa = evento.target;
  const index = casa.dataset.index;

  if (!jogoAtivo) return;
  if (tabuleiro[index] !== "") return;

  tabuleiro[index] = jogadorAtual;

  casa.textContent = jogadorAtual === "X" ? simboloX : simboloO;

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
      `${nomeJogador(jogadorAtual)} venceu!`;

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
    `Vez de ${nomeJogador(jogadorAtual)} (${jogadorAtual})`;

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

const btnConfig =
    document.getElementById("btn-config");

const modal =
    document.getElementById("config-modal");

const fecharConfig =
    document.getElementById("fechar-config");

const toggleDarkmode =
    document.getElementById("toggle-darkmode");

const toggleSom =
    document.getElementById("toggle-som");

const volumeSlider =
    document.getElementById("volume-slider");

const volumeValor =
    document.getElementById("volume-valor");

btnConfig.addEventListener("click", () => {

    modal.classList.add("ativo");

});

fecharConfig.addEventListener("click", () => {

    modal.classList.remove("ativo");

});

toggleDarkmode.addEventListener("change", () => {

    document.body.classList.toggle(
        "dark",
        toggleDarkmode.checked
    );

});

toggleSom.addEventListener("change", () => {

    musica.muted = !toggleSom.checked;

});

volumeSlider.addEventListener("input", () => {

    musica.volume =
        volumeSlider.value / 100;

    volumeValor.textContent =
        volumeSlider.value + "%";

});