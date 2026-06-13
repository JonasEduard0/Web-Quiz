let vida = 100;
let mana = 50;
let ouro = 0;

let sala = 1;

let dano = 15;

const vidaTxt = document.getElementById("vida");
const manaTxt = document.getElementById("mana");
const ouroTxt = document.getElementById("ouro");
const armaTxt = document.getElementById("arma");
const salaTxt = document.getElementById("sala");

const titulo = document.getElementById("tituloEvento");
const texto = document.getElementById("textoEvento");
const acoes = document.getElementById("acoes");

function atualizarHUD(){

vidaTxt.textContent = vida;
manaTxt.textContent = mana;
ouroTxt.textContent = ouro;
salaTxt.textContent = sala;
}

function avancar(){

if(sala >= 10){

dragao();

return;
}

sala++;

gerarSala();

atualizarHUD();
}

function gerarSala(){

const tipo = Math.floor(Math.random()*5);

if(tipo===0) inimigo();
if(tipo===1) bau();
if(tipo===2) mercador();
if(tipo===3) fonte();
if(tipo===4) vazia();
}

function inimigo(){

titulo.textContent="Inimigo";

texto.textContent=
"Um goblin apareceu!";

acoes.innerHTML=`

<button onclick="lutar()">Atacar</button>

<button onclick="avancar()">Fugir</button>
`;
}

function lutar(){

vida -= Math.floor(Math.random()*15);

ouro += 20;

texto.textContent=
"Você venceu e ganhou 20 moedas.";

acoes.innerHTML=
'<button onclick="avancar()">Continuar</button>';

atualizarHUD();

if(vida<=0){

gameOver();
}
}

function bau(){

titulo.textContent="Baú";

ouro += 30;

texto.textContent=
"Você encontrou um baú com 30 moedas.";

acoes.innerHTML=
'<button onclick="avancar()">Continuar</button>';

atualizarHUD();
}

function mercador(){

titulo.textContent="Mercador";

texto.textContent=
"Espada de Ferro por 50 moedas.";

acoes.innerHTML=`

<button onclick="comprarArma()">Comprar</button>

<button onclick="avancar()">Ignorar</button>
`;
}

function comprarArma(){

if(ouro>=50){

ouro-=50;

dano=30;

armaTxt.textContent=
"Espada de Ferro";

texto.textContent=
"Nova arma adquirida!";
}
else{

texto.textContent=
"Ouro insuficiente.";
}

acoes.innerHTML=
'<button onclick="avancar()">Continuar</button>';

atualizarHUD();
}

function fonte(){

titulo.textContent="Fonte Mágica";

vida=Math.min(100,vida+25);

mana=Math.min(50,mana+15);

texto.textContent=
"Você recuperou energia.";

acoes.innerHTML=
'<button onclick="avancar()">Continuar</button>';

atualizarHUD();
}

function vazia(){

titulo.textContent="Sala Vazia";

texto.textContent=
"Nada encontrado.";

acoes.innerHTML=
'<button onclick="avancar()">Continuar</button>';
}

function dragao(){

titulo.textContent=
"DRAGÃO ANCIÃO";

texto.textContent=
"O chefe final apareceu!";

acoes.innerHTML=
'<button onclick="lutarDragao()">Lutar</button>';
}

function lutarDragao(){

const ataque =
Math.floor(Math.random()*50)+20;

if(dano >= 30){

texto.textContent=
"Você derrotou o Dragão e encontrou o tesouro!";

acoes.innerHTML=
"<h2>🏆 VITÓRIA!</h2>";
}
else{

vida -= ataque;

atualizarHUD();

if(vida<=0){

gameOver();
return;
}

texto.textContent=
"O dragão é forte demais!";

}
}

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

const musica =
document.getElementById("bg-music");

btnConfig.onclick = () => {

    modal.style.display = "flex";
};

fecharConfig.onclick = () => {

    modal.style.display = "none";
};

toggleDarkmode.onchange = () => {

    document.body.classList.toggle(
        "dark-mode",
        toggleDarkmode.checked
    );
};

toggleSom.onchange = () => {

    musica.muted = !toggleSom.checked;
};

volumeSlider.oninput = () => {

    musica.volume =
        volumeSlider.value / 100;
};

document.body.addEventListener(
    "click",
    () => {

        musica.play().catch(()=>{});

    },
    { once:true }
);

function gameOver(){

titulo.textContent=
"GAME OVER";

texto.textContent=
"Você morreu na dungeon.";

acoes.innerHTML=
'<button onclick="location.reload()">Recomeçar</button>';
}

document.getElementById("reiniciarBtn")
.addEventListener("click",()=>location.reload());

gerarSala();
atualizarHUD();