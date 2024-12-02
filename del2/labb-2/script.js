// let url = `https://api.edamam.com/api/nutrition-data?app_id=d3b855f7&app_key=35b2a48f920867abd283496625b0ddd4&nutrition-type=logging&ingr="oats"`;

/*
Skapa objekt som inehåller
- Produktnamn
- användarens graminput
- portionservering i gram
- objekt på näring som ska visas
- objekt på produktens näringsvärden
 */

let userIngredients = [];

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
  if (data.totalWeight === 0) {
    console.log("Invalid ingredient");
    return false;
  }
  // FIXME: Fix so if portionweight = 0, that means the input ingredient is invalid
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

function addElementToParent(element, innerText, parent, classList = "") {
  let el = document.createElement(element);
  el.innerText = innerText ? innerText : "";
  el.classList = classList;
  parent.appendChild(el);
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

/**  */
let form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  const ingredient = document.querySelector("#ingredient").value;
  const weight = Number(document.querySelector("#weight").value);

  fetch(getIngredientUrl(ingredient))
    .then((response) => response.json())
    .then((result) => {
      let ingredient = getIngredient(result, weight);
      addIngredientToList(ingredient);
      // TODO Raise input error when input is false
      // TODO add ingr to html element
      // TODO Append ingredient nutrition data and display ingredients stats
      console.log(ingredient);
    });

  event.preventDefault();
});
// tar emot ingredient och gram och consollar ut näringsvärden
