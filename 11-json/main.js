const header = document.querySelector("header");
const section = document.querySelector("section");

/*
 * 1. Almacenar la URL del JSON que se quiere recuperar en una
 *    variable.
 */
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

/*
 * 2. Crear una solicitud, debemos crear una nueva instancia de objeto
 *    de solicitud desde el constructor XMLHttpRequest, utilizando la plabra
 *    clave new.
 */
const request = new XMLHttpRequest();

/*
 * 3. Abrimos una nueva solicitud el método open().
 */
request.open("GET", requestURL);

/*
 * 4. Establecer el responseType al JSON, de esta forma
 *    ese XHR sabe que el servidor estará retornando JSON
 *    y será convertido a objeto Javascript.
 */
request.responseType = "json";
request.send();

/*
 * 5. Esperar la respuesta a retornar desde el servidor y luego,
 *    manejarla.
 */
request.onload = function () {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
};

/* Probando el encabezado */
function populateHeader(jsonObj) {
  const myH1 = document.createElement("h1");
  myH1.textContent = jsonObj["squadName"];
  header.appendChild(myH1);

  const myPara = document.createElement("p");
  myPara.textContent =
    "Hometown: " + jsonObj["homeTown"] + " // Formado: " + jsonObj["formed"];
  header.appendChild(myPara);
}

/* Creando las tarjetas de información del heroes */
function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];

  for (var i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Identidad secreta: " + heroes[i].secretIdentity;
    myPara2.textContent = "Edad: " + heroes[i].age;
    myPara3.textContent = "Superpoderes:";

    const superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
