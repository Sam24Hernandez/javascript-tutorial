// Creando nuestro constructor final
function Person(pila, apellido, edad, genero, intereses) {
  this.nombre = {
    pila: pila,
    apellido: apellido,
  };
  this.edad = edad;
  this.genero = genero;
  this.intereses = intereses;
  this.bio = function () {
    alert(
      this.nombre.pila +
        " " +
        this.nombre.apellido +
        " tiene " +
        this.edad +
        " años. Sus intereses " +
        this.intereses[0] +
        " y " +
        this.intereses[1] +
        "."
    );
  };
  this.saludo = function () {
    alert("Hola, yo soy " + this.nombre.pila + ".");
  };
}

// Instancia del nuevo objeto
var person1 = new Person("Sam", "Hernandez", 19, "masculino", [
  "música",
  "programación",
  "béisbol",
]);
