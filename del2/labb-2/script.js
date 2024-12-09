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

  addElementToParent("p", `${ingredient.name}`, newIngredient, "grow");
  addElementToParent("p", `${ingredient.weight}g`, newIngredient);
  addElementToParent("div", "", newIngredient, "remove");

  list.appendChild(newIngredient);
}

function clearIngredientList() {
  const listEl = document.querySelector("#ingredient-list > ul");
  console.log(listEl);
  while (listEl.childNodes.length > 0) {
    listEl.removeChild(listEl.childNodes[0]);
    console.log("removed", listEl.childNodes[0]);
  }
}

/** Get the total nutrient value from each userIngredient and return as object batch*/
function getBatchTotalValues(userIngredients) {
  // FIXME add units
  let batch = {};
  if (userIngredients.length > 0) {
    for (const [name, data] of Object.entries(userIngredients[userIngredients.length - 1].nutritionDaily)) {
      batch[name] = { name: data.label, data: 0, dri: 0 };
    }

    for (const nutrient of Object.keys(batch)) {
      for (const ingredient of userIngredients) {
        try {
          batch[nutrient].data += ingredient.nutritionData[nutrient].quantity;
        } catch (error) {
          // console.log(error, nutrient, "DATA");
        }
        try {
          batch[nutrient].dri += ingredient.nutritionDaily[nutrient].quantity;
        } catch (error) {
          // console.log(error, nutrient, "DRI");
        }
      }
    }
  } else {
    batch = {
      ENERC_KCAL: {
        name: "Energy",
        data: 0,
        dri: 0,
      },
      FAT: {
        name: "Total lipid (fat)",
        data: 0,
        dri: 0,
      },
      FASAT: {
        name: "Fatty acids, total saturated",
        data: 0,
        dri: 0,
      },
      CHOCDF: {
        name: "Carbohydrate, by difference",
        data: 0,
        dri: 0,
      },
      FIBTG: {
        name: "Fiber, total dietary",
        data: 0,
        dri: 0,
      },
      PROCNT: {
        name: "Protein",
        data: 0,
        dri: 0,
      },
      CHOLE: {
        name: "Cholesterol",
        data: 0,
        dri: 0,
      },
      NA: {
        name: "Sodium, Na",
        data: 0,
        dri: 0,
      },
      CA: {
        name: "Calcium, Ca",
        data: 0,
        dri: 0,
      },
      MG: {
        name: "Magnesium, Mg",
        data: 0,
        dri: 0,
      },
      K: {
        name: "Potassium, K",
        data: 0,
        dri: 0,
      },
      FE: {
        name: "Iron, Fe",
        data: 0,
        dri: 0,
      },
      ZN: {
        name: "Zinc, Zn",
        data: 0,
        dri: 0,
      },
      P: {
        name: "Phosphorus, P",
        data: 0,
        dri: 0,
      },
      VITA_RAE: {
        name: "Vitamin A, RAE",
        data: 0,
        dri: 0,
      },
      VITC: {
        name: "Vitamin C, total ascorbic acid",
        data: 0,
        dri: 0,
      },
      THIA: {
        name: "Thiamin",
        data: 0,
        dri: 0,
      },
      RIBF: {
        name: "Riboflavin",
        data: 0,
        dri: 0,
      },
      NIA: {
        name: "Niacin",
        data: 0,
        dri: 0,
      },
      VITB6A: {
        name: "Vitamin B-6",
        data: 0,
        dri: 0,
      },
      FOLDFE: {
        name: "Folate, DFE",
        data: 0,
        dri: 0,
      },
      FOLFD: {
        name: "Folate, food",
        data: 0,
        dri: 0,
      },
      FOLAC: {
        name: "Folic acid",
        data: 0,
        dri: 0,
      },
      VITB12: {
        name: "Vitamin B-12",
        data: 0,
        dri: 0,
      },
      VITD: {
        name: "Vitamin D (D2 + D3)",
        data: 0,
        dri: 0,
      },
    };
  }
  return batch;
}

/**
 * @param {Array} batch - ["Energy", "Total lipid", "fatty acids"]
 * @param {Array} headers - ["type", "dri", "(g)"]
 * @param {String} listId - id of the table
 */
function generateTable(batch, headers, tableId = "") {
  // FIXME So it generates empty table if userInput is none
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
  for (const [key, item] of Object.entries(batch)) {
    // Formats dailyRecommendedIntake and nutrientData so it only has 1 decimal
    item.dri = item.dri ? item.dri.toFixed(1) : 0;
    item.data = item.data ? item.data.toFixed(1) : 0;

    // add items to current table row
    let row = [item.name, item.dri, item.data];
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

let recipe = [];
let remove = document.querySelectorAll(".remove");
const tableHeader = ["Type", "DRI", "Unit"];

generateTable(getBatchTotalValues(recipe), tableHeader, "nutrient-table");

document.addEventListener("mouseover", (event) => {
  remove = document.querySelectorAll(".remove");

  /** Remove Node and ingredient from list when click on cross */
  remove.forEach((element) =>
    element.addEventListener("click", (event) => {
      // Remove from userList as well

      let ingredientName = element.parentElement.childNodes[0].innerText;
      let ingredientWeight = element.parentElement.childNodes[1].innerText;

      for (const [index, ingredient] of recipe.entries()) {
        if (ingredient.name === ingredientName && ingredientWeight.includes(String(ingredient.weight)))
          recipe.splice(index, 1);
      }
      console.log(recipe);
      event.target.parentElement.remove();
      generateTable(getBatchTotalValues(recipe), tableHeader, "nutrient-table");
    })
  );
});

const saveRecpie = document.querySelector("#save-recipe");
saveRecpie.addEventListener("click", (event) => {
  console.log("Saved recpie");
});

const clearRecpie = document.querySelector("#clear-recipe");
clearRecpie.addEventListener("click", (event) => {
  recipe = [];
  generateTable(getBatchTotalValues(recipe), tableHeader, "nutrient-table");
  clearIngredientList();
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
        recipe.push(ingredient);

        generateTable(getBatchTotalValues(recipe), tableHeader, "nutrient-table");

        console.log(getBatchTotalValues(recipe));
        addIngredientToList(ingredient);
        displayWarning("war-invalid-ingredient", false);
      } else {
        displayWarning("war-invalid-ingredient", true);
      }

      console.log(recipe);
    });

  event.preventDefault();
});
