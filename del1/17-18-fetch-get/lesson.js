// * JSON
// * Let me console.log in browser window with browser.log()
let browser = {
  log: function (...args) {
    let parent = document.getElementById("log");
    let child = document.createElement("p");

    if (args.length > 1) {
      let array = "[";
      args.forEach((arg) => {
        array += `${arg}, `;
      });
      args = `${array}]`;
    }

    child.innerHTML = `>> ${args}`;
    parent.append(child);
    console.log(args);
    return args;
  },
};

browser.log("Hello lesson.js");

/**
 * *JSON SETTINGS POST */
let obj = {
  body: '{"name" : "Teststad", "population" : 123}',
  headers: {
    "Content-Type": "application/json",
  },
  method: "POST",
};

browser.log("Hej");

let apis = [
  "https://avancera.app/cities/",
  "https://helsingborgshem.se/rentalobject/Listapartment/published?sortOrder=NEWEST&timestamp=",
];

// const promise = fetch(apis[0], { mode: "no-cors" });
// promise.then((resp) => resp.json()).then((result) => console.log(result));

/*
promise
  .then((response) => {
    let myJSON = response.json();
    return myJSON;
  })
  .then((cities) =>
    cities.forEach((city) => {
      browser.log("Namn: " + city.name);
      browser.log("Population: " + city.population);
      browser.log("ID: " + city.id);
      browser.log("\n");
    })
  );
 */
/*
let hbg = [];
fetch(apis[1], { mode: "no-cors" })
  .then((resp) => resp.json())
  .then((result) => {
    hbg = result;
    browser.log(hbg);
  }); */

function addCity(name, population, url) {
  fetch(url, {
    body: JSON.stringify({ name: name, population: population }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  })
    .then((response) => response.json())
    .then((result) => console.log(result));
}

function getCityObject(city, url) {
  fetch(`https://avancera.app/cities?name=Stockholm`)
    .then((response) => response)
    .then((result) => {
      city = JSON.parse(result);
      browser.log(city);
      city;
    });
}

function deleteCity(city, url) {
  fetch(`${url}${city.id}`, {
    method: "DELETE",
  });
}
let url = "https://avancera.app/cities";

// addCity("Solefteo", 1337, url);
// getCityObject("Stockholm", apis[1]);
// deleteCity()
