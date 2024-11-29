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
function getProductUrl(product) {
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
  // FIXME: Fix so if portionweight = 0, that means the input ingredient is invalid
  let ingredient = {};
  ingredient.name = data.ingredients[0].text;
  ingredient.weight = gram;
  ingredient.portionWeight = data.totalWeight;
  ingredient.displayNutrients = {
    Energy: false,
    Fat: false,
    Saturated: false,
    Carbs: false,
    Fiber: false,
    Protein: false,
    Cholesterol: false,
    Sodium: false,
    Calcium: false,
    Magnesium: false,
    Potassium: false,
    Iron: false,
    Zinc: false,
    Phosphorus: false,
    "Vitamin A": false,
    "Vitamin C": false,
    "Thiamin (B1)": false,
    "Riboflavin (B2)": false,
    "Niacin (B3)": false,
    "Vitamin B6": false,
    "Folate equivalent (total)": false,
    "Vitamin B12": false,
    "Vitamin D": false,
  };
  ingredient.nutritionData = data.totalNutrients;
  ingredient.nutritionDaily = data.totalDaily;

  setNutritionByWeight(ingredient);
  // TODO make setDailyRecomendedIntakeByWeight(ingredient) function

  return ingredient;
}

/**
 * The API gives us a weight property that is the average portion amount relative to the
 * ingredient, since I want the nutrition values to be assigned accordingly to the
 * choosen weight. I change nutrient value.
 */
function setNutritionByWeight(ingredient) {
  let product = ingredient.weight / ingredient.portionWeight;
  for (let [key, vitamin] of Object.entries(ingredient.nutritionData)) {
    vitamin.quantity *= product;
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

let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  const ingredient = document.querySelector("#ingredient").value;
  const weight = Number(document.querySelector("#weight").value);

  fetch(getProductUrl(ingredient))
    .then((response) => response.json())
    .then((result) => {
      let input = getIngredient(result, weight);
      console.log(input);
      setNutritionByWeight(input);
    });

  event.preventDefault();
});
// tar emot ingredient och gram och consollar ut näringsvärden
