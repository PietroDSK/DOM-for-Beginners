const href = window.location.href;

console.log(href);

if (href === "http://127.0.0.1:5500/O-que-e-o-dom/") {
  console.log("É igual");
}

const h1Selecionado = document.querySelector("h1");
const h1Classes = h1Selecionado.classList;

function callbackh1() {
  console.log("Clicou em ", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackh1);

//Exercicios
//Retornar a url da página atual utilizando window
const url = window.location.href;
console.log(url);

//Seleciona o primeiro elemento da página que
//possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");
//Retorne a linguagem do navegador
console.log(window.navigator.language);
//Retorn a largura da Janela
console.log(window.innerWidth);
