//Seleciona pelo ID
const animais = document.getElementById("animais");

//Seleciona pela Classe
const gridSection = document.getElementsByClassName("grid-section");

//Seletor geral único
const primeiraLI = document.querySelector("li");
console.log(primeiraLI);

const primeiraUL = document.querySelector("ul");
console.log(primeiraUL);

//Selecionando links
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

//Seletor geral Lista
//Não atualiza após alteração
const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);

//Atualiza após alteração
const gridSectionHTML = document.getElementsByClassName("grid-section");
//Não Atualiza após alteração
const gridSectionNode = document.querySelectorAll(".grid-section");

// console.log(gridSectionHTML);
// console.log(gridSectionNode);

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

//Transformando arrays like em array
const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});
