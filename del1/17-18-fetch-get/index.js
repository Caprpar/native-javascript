// * Fetch Uppgifter
// * BUS städer
let start = ["öre", "fri", "tupp", "ben", "bamse", "kung", "möln", "stock", "um", "å"];
let end = ["eå", "bro", "stad", "holm", "kust", "borg", "by", "ville", "town", "village", "mol"];
let url = "https://avancera.app/cities";

for (let i = 0; i < 100; i++) {
  let randStart = start[Math.floor(Math.random() * start.length)];
  let randEnd = end[Math.floor(Math.random() * end.length)];
  let randPop = Math.floor(Math.random() * (10000000 - 5000 + 1)) + 5000;
  let cityName = `${randStart}${randEnd}`;

  fetch(url, {
    body: `{"name":"${cityName}", "population": ${Number(randPop)}}`,
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
}

// * Uppgift: Alla städer
/*
fetch("https://avancera.app/cities/")
.then((response) => response.json())
.then((result) => console.log(result));
 */

// * Uppgift: En stad
/*
fetch("https://avancera.app/cities/4787e794-b3ac-4a63-bba0-03203f78e553")
.then((response) => response.json())
.then((result) => console.log(result));
*/

// * Uppgift: En valfri stad
/*
let userCityInput = prompt("Ange stads Id");
fetch(`https://avancera.app/cities/${userCityInput}`)
.then((response) => response.json())
.then((result) => console.log(result));
*/

// * Uppgift: En query-parameter
/*
let userQueryInput = prompt("Ange stads Id");
fetch(`https://avancera.app/cities/?name=${userQueryInput}`)
.then((response) => response.json())
.then((result) => console.log(result));
 */

// * Uppgift: två query-parameter
/*
let userCityQueryInput = prompt("Ange stads Id");
let userPopulationQueryInput = prompt("Ange minimum befolkning");
fetch(`https://avancera.app/cities/?name=${userCityQueryInput}&minPopulation=${userPopulationQueryInput}`)
  .then((response) => response.json())
  .then((result) => console.log(result));
  */

// * Uppgift: POST: Lägg till en stad
/* let cityInput = prompt("Ange stadsnamn");
let populationInput = prompt("Ange befolkningsmängd");
let url = "https://avancera.app/cities";

fetch(url, {
  body: `{"name":"${cityInput}", "population": ${Number(populationInput)}}`,
  headers: {
    "Content-Type": "application/json",
    },
    method: "POST",
    })
    .then((response) => response.json())
    .then((result) => console.log(result)); */

// * Uppgift: PUT: Ändra namn och befolkning
/*
let idInput = prompt("Ange ID");
let cityInput = prompt("Ändra stadsnamn");
let populationInput = Number(prompt("Ändra befolkningsmängd"));
let url = `https://avancera.app/cities/${idInput}`;

fetch(url, {
  body: `{"id":"${idInput}","name": "${cityInput}", "population": ${populationInput}}`,
  headers: {
    "Content-Type": "application/json",
    },
    method: "PUT",
    }).then((response) => console.log(response));
 */

// * Uppgift: DELETE: Ta bort en stad
/*
let idInput = prompt("Ange ID");
let url = `https://avancera.app/cities/${idInput}`;

fetch(url, {
  method: "DELETE",
}).then((response) => console.log(response));
*/

// * Uppgift: PATCH: Ändra namn
/* let idInput = prompt("Ange ID");
let updateToNameInput = prompt("Döp om staden");
let url = `https://avancera.app/cities/${idInput}`;

fetch(url, {
  body: `{"name" : "${updateToNameInput}"}`,
  headers: { "Content-Type": "application/json" },
  method: "PATCH",
}).then((response) => console.log(response));
 */

// * Uppgift: PATCH: Ändra namn och/eller befolkning
/*
let idInput = prompt("Ange ID");
let updateToNameInput = prompt("Döp om staden");
let updateToPopulationInput = Number(prompt("Ange ny befolkning"));
url = `https://avancera.app/cities/${idInput}`;

let patchThis;
if (updateToNameInput && updateToPopulationInput) {
  patchThis = {
    name: updateToNameInput,
    population: updateToPopulationInput,
  };
} else if (updateToNameInput) {
  patchThis = {
    name: updateToNameInput,
  };
} else if (updateToPopulationInput) {
  patchThis = {
    population: updateToPopulationInput,
  };
}
patchThis = JSON.stringify(patchThis);

fetch(url, {
  body: patchThis,
  headers: { "Content-Type": "application/json" },
  method: "PATCH",
}).then((response) => console.log(response));
 */
