const botoesJogar = document.querySelectorAll(".btn-jogar");

const musica = document.getElementById("bg-music");

let musicaLiberada = false;

function liberarMusica() {

  if (musicaLiberada) return;

  musicaLiberada = true;

  musica.volume = 0.25;

  const playPromise = musica.play();

  if (playPromise !== undefined) {
    playPromise.catch(() => {});
  }
}

document.body.addEventListener("click", liberarMusica);

botoesJogar.forEach((botao) => {

  botao.addEventListener("click", () => {

    liberarMusica();

    const destino = botao.dataset.link;

    botao.textContent = "Entrando...";

    setTimeout(() => {
      window.location.href = destino;
    }, 400);

  });

});