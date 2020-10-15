"use strict";

// Aprendizaje activo ¡Imprimiendo esos productos!

/*
    # TODO: 
    
    1. Debajo de // number 1 hay un número de cadena, cada una de las cuales contiene un nombre de producto y un precio separados por dos puntos. 
        Nos gustaría que conviertas esto en una matriz y lo almacenamos en una matriz llamda products.
    2. En la misma línea que el comentario // number 2 es el comienzo de un ciclo for. En esta línea, actualmente tenemos i <= 0, que es una prueba 
        condicional que hace que el bucle que el bucle for se detenga inmediatamente, porque dice "detener cuando i es menor o igual 0", y  i comienza en 0. 
        Nos gustaría que reemplazaras esto con una prueba condicional que detenga el ciclo cuando i no sea inferior a la longitud la matriz products .
    3. justo debajo del comentario // number 3 queremos que escriba una línea de código que divide el elemento actual de la matriz (nombre:precio) 
        en dos elementos separados, uno que contiene solo el nombre y otros que contienen solo el precio.
    4. Como parte de la línea de código anterior, también querras convertir el precio de una cadena a un número. Si no pudes recordar como hacerlo, consulta el primer artículo de cadenas.
    5. Hay una variable llamada total que se crea y se le da un valor de 0 en la parte superior del código. Dentro del ciclo (debajo de // number 4) 
        queremos que agregues una línea que añade el precio actual del artículo a ese total en cada iteración del ciclo, de modo que al final del código el total 
        correcto se imprima en la factura. Es posible que necesites un operador de asignación para hacer esto.
    6. Queremos que cambies la línea justo de bajo // number 5 para que la variable itemText se iguale a "nombre de elemnto actual — $precio de elemento actual", por ejemplo 
        "Zapatos — $23.99" en cada caso, por lo que la información correcta artículo está impreso en la factura. Esto es simplemente una concatenación de cadenas, lo que debería ser familiar para ti.

*/
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = ''; // paso 1

var products = ['Pants:6.99', 'Calcetas:5.99', 'Short:14.99', 'Calzones:31.99', 'Zapatos:23.99']; // paso 2

for (var i = 0; i < products.length; i++) {
  // paso 3
  var subArray = products[i].split(':');
  var name = subArray[0]; // paso 4

  var price = Number(subArray[1]); // paso 5

  total += price; // paso 6

  itemText = name + ' — $' + price;
  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);