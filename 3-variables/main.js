/* Declarar una variable */
let miNombre;
let miEdad;
let miPerro = 'Mike'; /* Esto es lo que harán la mayor parte del tiempo, ya que es más rápido. */
let verdadBoolean = true;
let forBoolean = false;

miNombre = 'Sam';
miEdad = 19;

/* Inicializar una variable */
console.log('Mi nombre es ' + miNombre + ', tengo ' + miEdad + ' años.');

/* 
    Tipado dinámico:  lo cual significa que, a diferencia de otros lenguajes, no es necesario especificar qué tipo de datos contendrá 
    una variable (números, cadenas, arreglos, etc.).
*/

let miString = 'Hola';
let miNumero = '777'; // Vaya, esto sigue siendo una cadena
typeof miNumero;
miNumero = 500; // mucho mejor - ahora este es un numero
typeof miNumero;

/*
    Constantes: una vez declarado no se puede cambiar   
*/
const diasEnSemana = 7;
// diasEnSemana = 8; si la declaras te arrojará un error
const horasEnDia = 24;
