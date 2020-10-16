"use strict";

// 1. Definimos una persona como funcion

/*function crearNuevaPersona(nombre) {
  var obj = {};
  obj.nombre = nombre;
  obj.saludo = function () {
    alert("Hola, Soy " + this.nombre + ".");
  };
  return obj;
}*/
// 2. Creamos una persona llamando a la funcion
// var sam = Persona("Sam");
// sam.nombre;
// sam.saludo();
// 1. Otra forma, funciones constructoras
function Persona(nombre) {
  this.nombre = nombre;

  this.saludo = function () {
    alert("Hola, Soy " + this.nombre + ".");
  };
} // 2. Otra forma, para llamar un constructor para crear objetos


var persona1 = new Persona("Sam");
/* new: se usa para indicar que queremos crear una nueva instancia del objeto */

/*{
    nombre: 'Sam',
    saludo: function() {
        alert("Hola, Soy " + this.nombre + ".");
    }
}*/

var persona2 = new Persona("Ivana");
/*{
    nombre: 'Ivana',
    saludo: function() {
        alert("Hola, Soy " + this.nombre + ".");
    }
}*/