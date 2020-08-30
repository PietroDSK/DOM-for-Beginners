// const imgs = document.querySelectorAll("img");

// imgs.forEach(function (item, index, array) {
//   //console.log(item, index, array);
// });

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item, index, array) {
  //console.log(item, index, array);
});

//ARROW FUNCTION
const imgs = document.querySelectorAll("img");

imgs.forEach((item, index, array) => {
  //console.log(item, index, array);
});

//Argumento unico não precisa de parenteses
imgs.forEach((item) => {
  //console.log(item, index, array);
});
//Se não tiver argumentos precisa de parenteses
let i = 0;
imgs.forEach(() => {
  //console.log(i++);
});

//Linha unica de codigo não precisa chaves
imgs.forEach(() => console.log(i++));
