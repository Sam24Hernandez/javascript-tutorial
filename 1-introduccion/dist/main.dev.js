"use strict";

// Declarando mi primera variable
var titulo = document.querySelector('h1');
titulo.addEventListener('click', actualizaNombre);

function actualizaNombre() {
  var nombre = prompt('Ingresa un nuevo nombre');
  titulo.textContent = 'Jugador 1: ' + nombre;
}
/* 
    Reemplazar con esta funcion en el documento HTML,
    el evento onclick="crearParrafo()", por este trozo
    de código.
*/


var buttons = document.querySelectorAll('button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', crearParrafo);
}
/* Mala practica */


function crearParrafo() {
  var para = document.createElement('p');
  para.textContent = '¡Haz hecho click en el botón!';
  document.body.appendChild(para);
}