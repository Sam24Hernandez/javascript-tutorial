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
let hola = async () => {
  return "Hola!";
};
hola();

// Ahora ejecuta en consola lo siguiente
hola().then((value) => console.log(value));

// o incluso sólo la taquigrafía como
hola().then(console.log);
