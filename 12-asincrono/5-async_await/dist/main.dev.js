"use strict";

/*
  ¿Pero cómo funciona?

  Notarán que hemos envuelto el código dentro de una función, y hemos incluido la palabra clave async antes de la palabra clave de la función. 
  Esto es necesario - tienes que crear una función async para definir un bloque de código en el que ejecutar tu código async; como dijimos antes, 
  await sólo funciona dentro de las funciones async.

  Dentro de la definición de la función myFetch() se puede ver que el código se parece mucho a la versión anterior de la promesa, pero hay algunas diferencias. 
  En lugar de necesitar encadenar un bloque .then() al final de cada método basado en la promesa, sólo necesitas añadir una palabra clave await antes 
  de la llamada al método, y luego asignar el resultado a una variable. La palabra clave await hace que el tiempo de ejecución de JavaScript detenga su código en esta línea, 
  permitiendo que otro código se ejecute mientras tanto, hasta que la llamada a la función async haya devuelto su resultado. Una vez que eso se completa, tu código continúa 
  ejecutándose comenzando en la siguiente línea. Por ejemplo, checa los comentarios del código:
*/
// Llamamos al método fetch() para recuperar la imagen y almacenarla en una variable
function myFetch() {
  var response;
  return regeneratorRuntime.async(function myFetch$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://raw.githubusercontent.com/mdn/learning-area/master/javascript/asynchronous/async-await/coffee.jpg"));

        case 2:
          response = _context.sent;

          if (response.ok) {
            _context.next = 7;
            break;
          }

          throw new Error("HTTP error! status: ".concat(response.status));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(response.blob());

        case 9:
          return _context.abrupt("return", _context.sent);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
}

myFetch().then(function (blob) {
  // Crear una URL de objeto que apunte al objeto blob
  var objectURL = URL.createObjectURL(blob); // Crear un elemento <img> para mostrar el blob (es una imagen)

  var image = document.createElement("img"); // Poner el src del <img> al URL del objeto para que la imagen lo muestre

  image.src = objectURL; // Agregar el elemento <img> al DOM

  document.body.appendChild(image);
})["catch"](function (e) {
  return console.log(e);
});