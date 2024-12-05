// let url = `https://api.edamam.com/api/nutrition-data?app_id=d3b855f7&app_key=35b2a48f920867abd283496625b0ddd4&nutrition-type=logging&ingr="oats"`;

// TODO make so the key are retrived from external file
/* Returns url from chosen product */
function getIngredientUrl(product) {
  return `https://api.edamam.com/api/nutrition-data?app_id=d3b855f7&app_key=35b2a48f920867abd283496625b0ddd4&nutrition-type=logging&ingr=${product}`;
}

/** Retrive ingredient infomation from user input
 * @param {Text} name - Name of product input from user
 * @param {Number} gram - Amount of ingredient added to cooking batch
 * @param {JSON} data - JSON fetched from api, containng ingredient data
 *
 * @returns {Object} An object that contains all necessary data from ingredient
 */
function getIngredient(data, gram) {
  let ingredient = {};
  ingredient.name = data.ingredients[0].text;
  ingredient.weight = gram;
  ingredient.portionWeight = data.totalWeight;
  ingredient.displayNutrients = {
    Energy: true,
    Fat: true,
    Saturated: true,
    Carbs: true,
    Fiber: false,
    Protein: true,
    Cholesterol: false,
    Sodium: false,
    Calcium: true,
    Magnesium: false,
    Potassium: false,
    Iron: true,
    Zinc: false,
    Phosphorus: false,
    "Vitamin A": false,
    "Vitamin C": false,
    "Thiamin (B1)": false,
    "Riboflavin (B2)": false,
    "Niacin (B3)": false,
    "Vitamin B6": false,
    "Folate equivalent (total)": false,
    "Vitamin B12": true,
    "Vitamin D": true,
  };
  ingredient.nutritionData = data.totalNutrients;
  ingredient.nutritionDaily = data.totalDaily;

  setNutritionByWeight(ingredient);
  setDRIByWeight(ingredient);

  return ingredient;
}

/**
 * @param {Object} ingredient - JSON data from API
 * ingredient.nutritionData targets all vitamin daily per portion with
 * keys vitamin.label, vitamin.quantity and vitamin.unit.
 * with this funcion we mutate users ingredient input so vitamins match users chosen weight
 */
function setNutritionByWeight(ingredient) {
  let userWeight = ingredient.weight / ingredient.portionWeight;
  for (let [key, vitamin] of Object.entries(ingredient.nutritionData)) {
    vitamin.quantity *= userWeight;
  }
}

/**
 * @param {Object} ingredient - JSON data from API
 * ingredient.nutritionDaily targets all daily recomended intake vitamins with
 * keys vitamin.label, vitamin.quantity and vitamin.unit.
 * with this funcion we mutate users ingredient input so DRI match users chosen weight
 */
function setDRIByWeight(ingredient) {
  const userWeight = ingredient.weight / ingredient.portionWeight;
  for (let [key, vitamin] of Object.entries(ingredient.nutritionDaily)) {
    vitamin.quantity *= userWeight;
  }
}

/**  */
function addElementToParent(element, innerText, parent, classList = "") {
  let el = document.createElement(element);
  el.innerText = innerText ? innerText : "";
  if (classList) el.classList = classList;
  parent.appendChild(el);
}

/* Check if user input is a valid ingredient from the api */
function isValidInput(ingredient) {
  return ingredient.portionWeight ? true : false;
}

function displayWarning(id, display = true) {
  const warEl = document.querySelector(`#${id}`);
  if (display) {
    warEl.classList.remove("hidden");
  } else {
    warEl.classList.add("hidden");
  }
}

/* Go through nutritionToDisplay and return object nutritionvalue  */
function getNutritiousDataFromLabels(result, nutritionToDisplay) {
  let nutritions = {};
  for (const [nutrition, showNutrition] of Object.entries(nutritionToDisplay)) {
    if (showNutrition) {
      for (const [nutritionCode, data] of Object.entries(result)) {
        if (nutrition === data.label) {
          nutritions[nutrition] = data.quantity;
        }
      }
    }
  }
  return nutritions;
}

function addIngredientToList(ingredient) {
  const list = document.querySelector("#ingredient-list > ul");

  const newIngredient = document.createElement("li");
  newIngredient.classList = "ingredient";

  addElementToParent("p", `${ingredient.weight}g`, newIngredient);
  addElementToParent("p", `${ingredient.name}`, newIngredient, "grow");
  addElementToParent("div", "", newIngredient, "remove");

  list.appendChild(newIngredient);
}

// FIXME Fixa så batchens värden uppdateras utifrån useringredients
/** Get the total nutrient value from each userIngredient and return as object batch*/
function getBatchTotalValues(userIngredients) {
  // Declare batch with nutrition keynames from nutritionData
  // which are the same as nutritionDaily's keys
  let batch = {};
  for (const [name, data] of Object.entries(userIngredients[0].nutritionDaily)) {
    batch[name] = { name: data.label, data: 0, dri: 0 };
  }

  for (const nutrient of Object.keys(batch)) {
    for (const ingredient of userIngredients) {
      batch[nutrient].data += ingredient.nutritionData[nutrient].quantity;
      batch[nutrient].dri += ingredient.nutritionDaily[nutrient].quantity;
    }
  }

  return batch;
}

/**
 * @param {Array} list - ["egg", "wheat", "sugar"]
 * @param {Array} headers - ["ingredient", "amount"]
 * @param {String} listId - id of the table
 */
function generateTable(list, headers, tableId = "") {
  // remove table if tableId already exists, so it'll be able to update table
  if (document.querySelector(`#${tableId}`)) {
    document.querySelector(`#${tableId}`).remove();
  }
  let parent = document.querySelector("#nutrient-facts");
  let table = document.createElement("table");
  if (tableId) table.id = tableId;

  // set headers
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  for (const head of headers) {
    addElementToParent("th", head, tr);
  }

  thead.appendChild(tr);
  table.appendChild(thead);

  // Set table data
  let tbody = document.createElement("tbody");
  for (const label of list) {
    let row = [label, "0", "0"];
    let tr = document.createElement("tr");
    for (const item of row) {
      addElementToParent("td", item, tr);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  parent.appendChild(table);
}

/**
 * @param {Node} element - document.querySelecotr("#my-chart")
 * @param {List} data - myObj = [{caspar: 25}, {olle: 45}, {peder: 22}]
 */
function drawChart(element, data) {
  const colors = ["#999", "#000"];
  const options = {};
  new Chart(element, {
    type: "bar",
    data: {
      labels: Object.keys(data),
      datasets: [
        {
          backgroundColor: colors,
          label: "# of votes",
          data: Object.values(data),
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
// * Main ----- ----- ----- ----- -----
// * Prepare DOM Layout ----- ----- ----- ----- -----

let userIngredients = [];
let remove = document.querySelectorAll(".remove");

let lables = [
  "Energy",
  "Total lipid (fat)",
  "Fatty acids, total saturated",
  "Fatty acids, total monounsaturated",
  "Fatty acids, total polyunsaturated",
  "Carbohydrate, by difference",
  "Carbohydrates (net)",
  "Fiber, total dietary",
  "Protein",
  "Cholesterol",
  "Sodium, Na",
  "Calcium, Ca",
  "Magnesium, Mg",
  "Potassium, K",
  "Iron, Fe",
  "Zinc, Zn",
  "Phosphorus, P",
  "Vitamin A, RAE",
  "Vitamin C, total ascorbic acid",
  "Thiamin",
  "Riboflavin",
  "Niacin",
  "Vitamin B-6",
  "Folate, DFE",
  "Folate, food",
  "Folic acid",
  "Vitamin B-12",
  "Vitamin D (D2 + D3)",
  "Water",
];
generateTable(lables, ["Type", "DRI", "(g)"], "nutrient-table");

document.addEventListener("mouseover", (event) => {
  remove = document.querySelectorAll(".remove");

  /** Remove Node and ingredient from list when click on cross */
  remove.forEach((element) =>
    element.addEventListener("click", (event) => {
      // Remove from userList as well

      let ingredientWeight = element.parentElement.childNodes[0].innerText;
      let ingredientName = element.parentElement.childNodes[1].innerText;

      for (const [index, ingredient] of userIngredients.entries()) {
        if (ingredient.name === ingredientName && ingredientWeight.includes(String(ingredient.weight)))
          userIngredients.splice(index, 1);
      }
      console.log(userIngredients);
      event.target.parentElement.remove();
    })
  );
});

/**  */
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  const ingredient = document.querySelector("#ingredient").value;
  const weight = Number(document.querySelector("#weight").value);

  fetch(getIngredientUrl(ingredient))
    .then((response) => response.json())
    .then((result) => {
      let ingredient = getIngredient(result, weight);

      // Check if input is a valid ingredient
      if (isValidInput(ingredient)) {
        userIngredients.push(ingredient);
        generateTable(userIngredients, ["Type", "DRI", "(g)"], "nutrient-table");
        // TODO Append ingredient nutrition data and display ingredients stats
        console.log(getBatchTotalValues(userIngredients));
        addIngredientToList(ingredient);
        displayWarning("war-invalid-ingredient", false);
      } else {
        displayWarning("war-invalid-ingredient", true);
      }

      console.log(userIngredients);
    });

  event.preventDefault();
});
