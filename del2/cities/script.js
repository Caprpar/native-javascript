async function getCities() {
  const response = await fetch("https://avancera.app/cities");
  const cities = await response.json();
  return cities;
}

async function addCity(name, population) {
  await fetch("https://avancera.app/cities", {
    body: JSON.stringify({ name: name, population: population }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });
}

async function editCity(id, newName, newPopulation) {
  let patchThis = JSON.stringify({ name: newName, population: Number(newPopulation) });
  await fetch("https://avancera.app/cities/" + id, {
    method: "PATCH",
    body: patchThis,
    headers: { "Content-Type": "application/json" },
  });
}

function appendChildToParent(elementType, parent, textContent, id = "", classList = "") {
  element = document.createElement(elementType);
  element.id = id;
  element.classList = classList;
  element.textContent = textContent;
  parent.appendChild(element);
  return element;
}

/* When adding a city to the list, give that city an induvidual eventlistener*/
function giveCityEventListener(element) {
  element.addEventListener("click", (event) => {
    let chosenNameEl = document.querySelector("#city-name-targeted");
    let chosenPopulationEl = document.querySelector("#city-population-targeted");
    const name = element.childNodes[0].textContent;
    const population = element.childNodes[1].textContent;
    chosenNameEl.textContent = name;
    chosenPopulationEl.textContent = population;
    sessionStorage.setItem("id", element.id);

    // set value of #new-name to chosen city
    // set value of #new-population to chosen population
    document.querySelector("#new-name").value = name;
    document.querySelector("#new-population").value = population;
  });
}

async function addCitiesToList(cities) {
  let parent = document.querySelector("aside > ul");
  for (const city of cities) {
    let currentCityEl = appendChildToParent("li", parent, "", city.id, "city");
    giveCityEventListener(currentCityEl, cities);
    appendChildToParent("div", currentCityEl, city.name, "", "");
    appendChildToParent("div", currentCityEl, city.population, "", "");
    // await new Promise((r) => setTimeout(r, 20));
  }
}

async function clearList(cities) {
  let ul = document.querySelector("ul");
  while (ul.childNodes.length != 0) {
    ul.removeChild(ul.childNodes[0]);
  }
}

async function updateCityList(cities) {
  clearList();
  cities = await getCities();
  await addCitiesToList(cities);
}

async function deleteCity(id) {
  await fetch("https://avancera.app/cities/" + id, { method: "DELETE" });
}

async function main() {
  let cities = await getCities();
  /* Displays all cities to an ul element */
  addCitiesToList(cities);

  /* ----- Event listeners -----*/
  document.querySelector("#add-city").addEventListener("click", async (event) => {
    let city = document.querySelector("#city-name-input").value;
    let population = Number(document.querySelector("#city-population-input").value);
    await addCity(city, population);
    await updateCityList(cities);
  });

  document.querySelector("#change").addEventListener("click", async (event) => {
    let id = sessionStorage.getItem("id");
    let newName = document.querySelector("#new-name").value;
    let newPopulation = document.querySelector("#new-population").value;
    await editCity(id, newName, newPopulation);
    await updateCityList(cities);
  });

  document.querySelector("#remove").addEventListener("click", async (event) => {
    let id = sessionStorage.getItem("id");
    await deleteCity(id);
    await updateCityList(cities);
  });
}

main();
