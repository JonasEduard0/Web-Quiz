const tabuleiro = document.getElementById("tabuleiro");
const tentativasTexto = document.getElementById("tentativas");
const paresTexto = document.getElementById("pares");

const reiniciarBtn = document.getElementById("reiniciar-btn");
const voltarBtn = document.getElementById("voltar-btn");

const musica = document.getElementById("bg-music");

const emojis = [
    "🐱",
    "🐶",
    "🔥",
    "⭐",
    "🎮",
    "🎵",
    "👑",
    "💎"
];

let cartas = [];
let primeiraCarta = null;
let segundaCarta = null;
let bloqueado = false;

let tentativas = 0;
let paresEncontrados = 0;

function embaralhar(array) {
    return array.sort(() => Math.random() - 0.5);
}

function criarJogo() {

    tabuleiro.innerHTML = "";

    cartas = embaralhar([...emojis, ...emojis]);

    tentativas = 0;
    paresEncontrados = 0;

    atualizarInfo();

    cartas.forEach((emoji, index) => {

        const carta = document.createElement("button");

        carta.classList.add("carta");

        carta.dataset.emoji = emoji;
        carta.dataset.index = index;

        carta.textContent = "❓";

        carta.addEventListener("click", virarCarta);

        tabuleiro.appendChild(carta);
    });
}

function virarCarta() {

    if (bloqueado) return;

    if (this.classList.contains("virada")) return;

    this.textContent = this.dataset.emoji;
    this.classList.add("virada");

    if (!primeiraCarta) {

        primeiraCarta = this;
        return;
    }

    segundaCarta = this;

    tentativas++;
    atualizarInfo();

    if (
        primeiraCarta.dataset.emoji ===
        segundaCarta.dataset.emoji
    ) {

        paresEncontrados++;

        atualizarInfo();

        primeiraCarta = null;
        segundaCarta = null;

        if (paresEncontrados === emojis.length) {

            setTimeout(() => {

                alert(
                    `Parabéns!\nVocê venceu em ${tentativas} tentativas.`
                );

            }, 200);

        }

    } else {

        bloqueado = true;

        setTimeout(() => {

            primeiraCarta.textContent = "❓";
            segundaCarta.textContent = "❓";

            primeiraCarta.classList.remove("virada");
            segundaCarta.classList.remove("virada");

            primeiraCarta = null;
            segundaCarta = null;

            bloqueado = false;

        }, 1000);
    }
}

function atualizarInfo() {

    tentativasTexto.textContent =
        `Tentativas: ${tentativas}`;

    paresTexto.textContent =
        `Pares: ${paresEncontrados}/${emojis.length}`;
}

reiniciarBtn.addEventListener(
    "click",
    criarJogo
);

voltarBtn.addEventListener(
    "click",
    () => window.location.href = "index.html"
);

function iniciarMusica() {

    const promessa = musica.play();

    if (promessa !== undefined) {
        promessa.catch(() => {});
    }
}

document.body.addEventListener(
    "click",
    iniciarMusica,
    { once: true }
);

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
    modal.style.display = "flex";
});

fecharConfig.addEventListener("click", () => {
    modal.style.display = "none";
});

toggleDarkmode.addEventListener("change", () => {

    document.body.classList.toggle(
        "dark",
        toggleDarkmode.checked
    );

    localStorage.setItem(
        "darkMode",
        toggleDarkmode.checked
    );
});

toggleSom.addEventListener("change", () => {

    musica.muted =
        !toggleSom.checked;

    localStorage.setItem(
        "somLigado",
        toggleSom.checked
    );
});

volumeSlider.addEventListener("input", () => {

    musica.volume =
        volumeSlider.value / 100;

    volumeValor.textContent =
        volumeSlider.value + "%";

    localStorage.setItem(
        "volume",
        volumeSlider.value
    );
});

toggleDarkmode.checked =
    localStorage.getItem("darkMode") === "true";

toggleSom.checked =
    localStorage.getItem("somLigado") !== "false";

volumeSlider.value =
    localStorage.getItem("volume") || 25;

volumeValor.textContent =
    volumeSlider.value + "%";

musica.volume =
    volumeSlider.value / 100;

musica.muted =
    !toggleSom.checked;

if (toggleDarkmode.checked) {
    document.body.classList.add("dark");
}

criarJogo();