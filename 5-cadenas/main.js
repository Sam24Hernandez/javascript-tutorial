// Ejemplo de aprendizaje activo
/*
    # Tenemos una matriz de cadenas y un bucle que procesa cada valor
    en la matriz y lo muestra en una lista con viñetas. No es necesario
    que comprendas matrices y bucles en este mismo momento. 
*/

/*
    # TODO: Filtrado de mensajes de saludo
    Tenemos una matriz de mensajes de tarjetas de felicitación, pero
    queremos ordenarlos para que aparezcan solo los mensajes de Navidad.
    Usando if(...), para comprobar cada cadena y solo imprimirla en la lista si es un mensaje
    de Navidad.
*/

var list = document.querySelector('.output ul');
list.innerHTML = '';
var saludos = [
    'Feliz Cumpleaños', 
    'Feliz Navidad mi amor',
    'Una Feliz Navidad para toda tu familia',
    'Eres todo lo que quiero para mi Navidad',
    'Nos vemos pronto'
];

for (var i = 0; i < saludos.length; i++) {
    var input = saludos[i];
    
    // Inserta tu solución aqui
    if (saludos[i].indexOf('Navidad') !== -1) {
        var result = input;
        var listItem = document.createElement('li');
        listItem.textContent = result;
        list.appendChild(listItem);
    }
}

/*
    # En este ejercicio tenemos los nombres de las ciudades del Reino Unido, Pero las mayúsculas estan completamente desordenadas. 
    Queremos que los cambies para que estén en minúscula, a excepción de la primera letra. Una buena manera de hacerlo es:. 
*/

/*
    # TODO: Corrección de mayúscula    
    1. Convierte la totalidad de la cadena contenida en la variable input a minúsculas y guárdalas en una nueva variable.
    2. Toma la primera letra de la cadena en esta nueva variable y guárdala en otra variable.
    3. Usando esta última variable como una subcadena, reemplaza la primera letra de la cadena en minúscula con 
        la subcadena en mayúscula. Almacena el resultado de este procedimiento de reemplazo en otra nueva variable.
    4. Cambia el valor de la variable result a igual al resultado final. en vez de input.
*/
var list = document.querySelector('.outputTwo ul');
list.innerHTML = '';
var ciudades = [
    'lonDon', 
    'ManCHESTer', 
    'BiRmiNGHAM', 
    'liVERpoOL'
];

for (var i = 0; i < ciudades.length; i++) {
    var input = ciudades[i];
    
    // Solucion
    var lower = input.toLowerCase();
    var primeraLetra = lower.slice(0, 1);
    var capitalized = lower.replace(primeraLetra, primeraLetra.toUpperCase());

    var result = capitalized;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem); 
}

/*
    # En este último ejercicio, la matríz contiene un conjunto de cadenas que contienen información 
    sobre estaciones de tren en el Norte de Inglaterra. Las cadenas son elementos de datos que contienen el 
    código de estación de tres letras, seguidos de más datos legibles por máquina, seguidos de un punto y coma, 
    seguidos por el nombre de la estación legible por humanos. Por ejemplo:
*/

/*
    # TODO: Creando nuevas cadenas de partes viejas    
    MAN675847583748sjt567654;Manchester Piccadilly, queremos extraer el codigo y nombre de la estacion
    y juntarlos en una cadena con la siguiente estructura:
    MAN: Manchester Piccadilly

    1. Extrae las tres letras del código de estación y almacénalo en una nueva variable.
    2. Encuentra el número de índice de caracter del punto y coma.
    3. Extrae el nombre de la estación legible por humanos utilizando el número de índice de caracter 
        del punto y coma a modo de referencia y guardalo en una nueva variable.
    4. Concatenar las dos nuevas variables y un literal de cadena para hacer la cadena final.
    5. Cambia el valor de la variable de result a igual a la cadena final, no a  input.
*/

var list = document.querySelector('.outputThree ul');
list.innerHTML = '';
var estaciones = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

for (var i = 0; i < estaciones.length; i++) {
    var input = estaciones[i];

    // Solucion
    var code = input.slice(0, 3);
    var semiC = input.indexOf(';');
    var nombre = input.slice(semiC + 1);

    var result = code + ': ' + nombre;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
    
}