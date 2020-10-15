"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* Declarar una variable */
var miNombre;
var miEdad;
var miPerro = 'Mike';
/* Esto es lo que harán la mayor parte del tiempo, ya que es más rápido. */

var verdadBoolean = true;
var forBoolean = false;
miNombre = 'Sam';
miEdad = 19;
/* Inicializar una variable */

console.log('Mi nombre es ' + miNombre + ', tengo ' + miEdad + ' años.');
/* 
    Tipado dinámico:  lo cual significa que, a diferencia de otros lenguajes, no es necesario especificar qué tipo de datos contendrá 
    una variable (números, cadenas, arreglos, etc.).
*/

var miString = 'Hola';
var miNumero = '777'; // Vaya, esto sigue siendo una cadena

_typeof(miNumero);

miNumero = 500; // mucho mejor - ahora este es un numero

_typeof(miNumero);
/*
    Constantes: una vez declarado no se puede cambiar   
*/


var diasEnSemana = 7; // diasEnSemana = 8; si la declaras te arrojará un error

var horasEnDia = 24;