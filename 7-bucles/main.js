// Ejemplo con el bucle for
var gatos = ["Bill", "Miel", "Biggles", "Jasmin"];
var info = "Mis gatos se llaman ";
var para = document.querySelector("p");

/*
    Esto muestra un bucle siendo usado para iterar sobre los elementos de un arreglo (matriz), y hacer algo con cada uno de ellos -
    un patrón muy común en JavaScript. Aquí:

    1. El iterador, i, inicia en 0 (var i = 0).
    2. Se le ha dicho que debe ejecutarse hasta que no sea menor que la longitud del arreglo gatos. Esto es importante  - 
        la condición de salida muestra la condicion bajo la cual el bucle seguirá iterando. Así, en este caso, mientras i < cats.length 
        sea verdadero, el bucle seguirá ejecutándose.
    3. Dentro del bucle, concatenamos el elemento del bucle actual (cats[i] es cats[lo que sea i en ese momento]) junto con una coma 
        y un espacio, al final de la variable info. Así:
            1. Durante la primera ejecución,  i = 0, así cats[0] + ', ' se concatenará con la información ("Bill, ").
            2. Durante la segunda ejecución, i = 1, así cats[1] + ', ' agregará el siguiente nombre ("Miel, ").
            3. Y así sucesivamente. Después de cada vez que se ejecute el bucle, se incrementará en 1 el valod de i (i++), 
                entonces el proceso comenzará de nuevo.
    4. Cuando i sea igual a cats.length, el bucle se detendrá, y el navegador se moverá al siguiente segmento de código bajo el bucle.

*/

for (var i = 0; i < gatos.length; i++) {
  if (i === gatos.length - 1) {
    info += " y " + gatos[i] + ".";
  } else {
    info += gatos[i] + ", ";
  }
}

para.textContent = info;

// Bucle while y do...while
var i = 0;
var cats = ["Bill", "Miel", "Biggles", "Jasmin"];
var info = "Mis gatos se llaman ";
var para = document.querySelector(".para");

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += " y " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }
  i++;
}

para.textContent = info;

// Bucle Do...While
var i = 0;
var cats = ["Bill", "Miel", "Biggles", "Jasmin"];
var info = "Mis gatos se llaman ";
var para = document.querySelector(".paraTwo");

do {
  if (i === cats.length - 1) {
    info += " y " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }
  i++;
} while (i < cats.length);

para.textContent = info;
