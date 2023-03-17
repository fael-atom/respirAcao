const circulo = document.querySelector(".circle");
const botaoStart = document.querySelector(".start-btn");
const botaoStop = document.querySelector(".stop-btn");
let intervaloId;
let intervaloId2;
let tamanhoAtual = 1;
let transitionInicial = "all 7s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
let contagem = document.querySelector(".contagem-regressiva");


botaoStart.addEventListener("click", () => {

  // Mostra o contador
  contagem.classList.toggle("hide");

  // Faz a contagem regressiva
  let i = 3;
  intervaloId2 = setInterval(() => {
    if ((i > 1) && (i < 4)){
      contagem.querySelector("p").innerHTML = --i;
    } else {
      clearInterval(intervaloId2);
      contagem.classList.toggle("hide");
    }    
  }, 2100);

  // Mostra o botão de Stop
  botaoStop.classList.toggle("hide");

  // Esconde o botão de Start
  botaoStart.classList.toggle("hide");

  // Redefine o valor de transition
  // circulo.style.transition = transitionInicial;

  // Faz a primeira iteração
  // animarCirculo();

  // Loop da animação
  intervaloId = setInterval(animarCirculo, 7000);
});

botaoStop.addEventListener("click", () => {
  // Mostra o botão de Stop
  botaoStop.classList.toggle("hide");

  // Esconde o botão de Start
  botaoStart.classList.toggle("hide");

  // Para o loop da animação
  clearInterval(intervaloId);

  // Volta instantaneamente o círculo para o tamanho inicial
  circulo.style.transform = "scale(1)";

  // Remove a transição suave na volta do círculo para a posição inicial
  // circulo.style.transition = "transform 0s";

  // Oculta a palavra do círculo
  circulo.querySelector("p").innerHTML = "";
});

function animarCirculo() {
  if (tamanhoAtual == 1) {
    tamanhoAtual = 0.1;
    circulo.querySelector("p").innerHTML = "Expire";
  } else {
    tamanhoAtual = 1;
    circulo.querySelector("p").innerHTML = "Inspire";

  }

  // Muda a escala de tamanho do círculo
  circulo.style.transform = `scale(${tamanhoAtual})`;
}
