const html = document.querySelector("html");

const focoBt = document.querySelector(".app__card-button--foco");
const curtoBt = document.querySelector(".app__card-button--curto");
const longoBt = document.querySelector(".app__card-button--longo");
const listaBt = document.querySelectorAll(".app__card-button");

const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

const toggleMusica = document.querySelector("#alternar-musica");
const musica = new Audio("/sons/luna-rise-part-one.mp3");

const comecarBt = document.querySelector("#start-pause");
let tempoSeg = 5;

// Play e pause da música
musica.loop = true;
toggleMusica.addEventListener("change", () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
});

// Altera o contexto da página de acordo com o botão clicado
focoBt.addEventListener("click", () => {
  alterarContexto("foco");
  focoBt.classList.add("active");
});

curtoBt.addEventListener("click", () => {
  alterarContexto("descanso-curto");
  curtoBt.classList.add("active");
  console.log(curtoBt.classList[1]);
});

longoBt.addEventListener("click", () => {
  alterarContexto("descanso-longo");
  longoBt.classList.add("active");
});

function alterarContexto(contexto) {
  html.setAttribute("data-contexto", contexto);
  banner.setAttribute("src", `/imagens/${contexto}.png`);
  listaBt.forEach(function (contexto) {
    contexto.classList.remove("active");
  });
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `Otimize sua produtividade,<br/><strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;
    case "descanso-curto":
      titulo.innerHTML = `Que tal dar uma respirada?<br/><strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      break;
    case "descanso-longo":
      titulo.innerHTML = `Hora de voltar à superfície.<br/><strong class="app__title-strong">Faça uma pausa longa.</strong>`;
      break;

    default:
      break;
  }
}

//Contagem regressiva
comecarBt.addEventListener("click", () => {
  iniciar();
});

let regressao = () => {
  // console.log(tempoSeg);
  tempoSeg -= 1;
};

function iniciar() {
  console.log(tempoSeg);
  setInterval(regressao, 1000);
}
