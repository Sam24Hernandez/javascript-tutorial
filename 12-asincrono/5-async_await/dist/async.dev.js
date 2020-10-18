"use strict";

/*
    En primer lugar tenemos la palabra clave "async", que se pone delante de una declaración de función 
    para convertirla en una función "async". Una función async es una función que sabe cómo esperar la 
    posibilidad de que la palabra clave await sea utilizada para invocar código asíncrono.
*/
// 1. Ejemplo básico de una función

/*
function hola() {
    return "Hola";
}
hola();
*/

/*
    Invocar la función ahora devuelve una promesa. Este es uno de los rasgos de las funciones de asincronía - 
    sus valores de retorno están garantizados para ser convertidos en promesas.
*/
// 2. Ejemplo de una función usando async

/*
    async function hello() { return "Hello" };
    hello();
*/
var hola = function hola() {
  return regeneratorRuntime.async(function hola$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", "Hola!");

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

hola(); // Ahora ejecuta en consola lo siguiente

hola().then(function (value) {
  return console.log(value);
}); // o incluso sólo la taquigrafía como

hola().then(console.log);