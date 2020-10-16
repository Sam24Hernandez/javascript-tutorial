// Declarando mi primera variable

const titulo = document.querySelector("h1");

titulo.addEventListener("click", actualizaNombre);

function actualizaNombre() {
  let nombre = prompt("Ingresa un nuevo nombre");
  titulo.textContent = "Jugador 1: " + nombre;
}

/* 
    Reemplazar con esta funcion en el documento HTML,
    el evento onclick="crearParrafo()", por este trozo
    de código.
*/
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", crearParrafo);
}

/* Mala practica */
function crearParrafo() {
  let para = document.createElement("p");
  para.textContent = "¡Haz hecho click en el botón!";
  document.body.appendChild(para);
}

/* Sintáxis Básica */
// 1. Javascript no tiene en cuenta los espacios en blanco y las nuevas lineas:
var palabra = "Hola";
var saludo = "Hola Mundo";

// comentario de una sola linea

/*
 * Este es un comentario
 * de multiple linea
 */
