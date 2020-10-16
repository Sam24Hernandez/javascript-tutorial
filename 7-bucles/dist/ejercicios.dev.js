"use strict";

/*
    # Ejercicio:
    TODO: Imprime un simple countdown de lanzamiento hasta la caja de salida
    desde 10 hasta despegue de una nave,

    1. El bucle de 10 a 0. Le proporcionamos un inicializador - var i = 10;
    2. Para cada iteración, crea un nuevo párrafo y añadelo a la salida <div>, que hemos 
    seleccionado usando var output = document.querySelector('.output);

*/
var output = document.querySelector(".output");
output.innerHTML = "";
var i = 10;

while (i >= 0) {
  var para = document.createElement("p");

  if (i === 10) {
    para.textContent = "Countdown " + i;
  } else if (i === 0) {
    para.textContent = "¡Despegue!";
  } else {
    para.textContent = i;
  }

  output.appendChild(para);
  i--;
}