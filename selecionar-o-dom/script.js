//EXERCICIOS
//Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
//Retorne no console apenas as imagens que começaram com a palavra imagem
const imagens2 = document.querySelectorAll('[src^="img/imagem"]');
//OU
const imagens3 = document.querySelectorAll('img[src^="img/imagem"]');
//Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"');
//selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector(".animais-descricao h2");
//Selecione o ultimo p do site
const paragrafos = document.querySelectorAll("p");

console.log(paragrafos[paragrafos.length - 1]);
