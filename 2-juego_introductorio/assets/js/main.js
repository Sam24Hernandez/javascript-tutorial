/* 
    I. Declaraciones de variables y constantes para guardar los datos
*/

// 1. Asignamos un número al azar entre 1 y 100, calculando usando un algoritmo matemático.
let randomNumber = Math.floor(Math.random() * 100) + 1;

/* 
    Almacenamos una referencia a los párrafos de resultados en nuestro HTML, y se
    usarán para insertar valores en los párrafos más adelante en el código.
*/
const suposiciones = document.querySelector('.suposiciones');
const ultimoResultado = document.querySelector('.ultimoResultado');
const bajoOalto = document.querySelector('.bajoOalto');

// Almacenan referencias a la entrada del texto y al boton de "Enviar respuesta"
const adivinaSubmit = document.querySelector('.adivinaSubmit');
const adivinaField = document.querySelector('.adivinaField');

// Almacenan un conteo de intentos desde 1
let adivinaCount = 1;
// Boton de reinicio 
let reiniciarButton;
// Efoca el input, una vez se recarga la página
adivinaField.focus();

/* 
    II. Funciones 
    Las funciones son bloques de código reutilizable que puedes escribir una vez
    y ejecutarlas una y otra vez, ahorrando la necesidad de repetir el código todo
    el tiempo.
*/
function verificarAdivinanza() {
    /* 
        Establece su valor al valor actual ingresado dentro del campo de texto
        También se ejecuta el valor Number integrado, solo para asegurarnos de que el valor
        definitivamente sea un número.
    */
    let userNuevo = Number(adivinaField.value);

    // Bloque de código condicional:
    // Verificando si adivinaCount es igual a 1(es decir, si es su primer intento o no)
    if (adivinaCount === 1) {
        // Si es asi, el texto que se muestra es el siguiente 
        suposiciones.textContent = 'Intentos previos: ';
    }
    // Concatena el numero de intento
    suposiciones.textContent += userNuevo + ' ';

    /* 
        Si la respuesta del jugador es igual al randomNumber.
        Si es así, el jugador ha adivinado correctamente y ha ganado.
        Se muestra un mensaje de felicitación con color verde y se
        borra el contenido del cuadro de información de intentos.
    */
    if (userNuevo === randomNumber) {
        ultimoResultado.textContent = '¡Felicidades! ¡Lo has adivinado!';
        ultimoResultado.style.backgroundColor = 'green';
        bajoOalto.textContent = '';
        establecerGameOver();
    // Comprueba si este intento es el ultimo turno del jugador
    } else if (adivinaCount === 10) {
        ultimoResultado.textContent = '¡Fin del juego!';
        ultimoResultado.style.backgroundColor = 'red';
        establecerGameOver();
    // El jugador tiene mas intentos pero ha fallado y se muestra el mensaje.
    } else {
        ultimoResultado.textContent = '¡Incorrecto!';
        ultimoResultado.style.backgroundColor = 'red';
        
        if (userNuevo < randomNumber) {
            bajoOalto.textContent = 'El número es muy bajo';
        } else if (userNuevo > randomNumber) {
            bajoOalto.textContent = 'El número es muy alto';
        }
    }

    // Nos preparan el siguiente intento
    adivinaCount++;
    adivinaField.value = '';
    adivinaField.focus();
}

/* 
    III. Eventos y llamadas
    Los eventos son cosas que suceden en el navegador - se hace clic
    en el botón, se carga una página, se reproduce un video, etc.
    El evento escucha mediante el addEventListener, y ejecutan en respuesta
    a la activación del evento lo que se llama controladores de eventos.
*/
adivinaSubmit.addEventListener('click', verificarAdivinanza);

// IV. Finalizando la funcionalidad del juego
function establecerGameOver() {
    // Deshabilitan el campo de texto y el boton
    adivinaField.disabled = true;
    adivinaSubmit.disabled = true;
    // Creando un nuevo elemento <button> con un texto dentro
    reiniciarButton = document.createElement('button');
    reiniciarButton.textContent = 'Iniciar Nuevo Juego';    
    document.body.append(reiniciarButton);
    // Escucha eventos del nuevo boton para ejecutar el reinicio del juego
    reiniciarButton.addEventListener('click', reiniciarJuego);
}

// V. Reiniciar Juego
function reiniciarJuego() {
    // Reinicia el conteo en 1
    adivinaCount = 1;

    const resetParas = document.querySelectorAll('.resultParas p');

    // Bucle For
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';        
    }

    // Elimina de nuestro codigo el boton de reinicio
    reiniciarButton.parentNode.removeChild(reiniciarButton);

    adivinaField.disabled = false;
    adivinaSubmit.disabled = false;
    adivinaField.value = '';
    adivinaField.focus();

    ultimoResultado.style.backgroundColor = 'white';

    // Genera un nuevo numero al azar ¡para que no vuelvas a adivinar el mismo numero!
    randomNumber = Math.floor(Math.random() * 100) + 1;
}

