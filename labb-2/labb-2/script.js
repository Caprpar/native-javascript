// const url = getProductUrl("oats");

let totalDaily = {
  ENERC_KCAL: {
    label: "Energy",
    quantity: 11.669999999999998,
    unit: "%",
  },
  FAT: {
    label: "Fat",
    quantity: 6.369230769230768,
    unit: "%",
  },
  FASAT: {
    label: "Saturated",
    quantity: 3.66,
    unit: "%",
  },
  CHOCDF: {
    label: "Carbs",
    quantity: 13.259999999999998,
    unit: "%",
  },
  FIBTG: {
    label: "Fiber",
    quantity: 25.44,
    unit: "%",
  },
  PROCNT: {
    label: "Protein",
    quantity: 20.279999999999998,
    unit: "%",
  },
  CHOLE: {
    label: "Cholesterol",
    quantity: 0,
    unit: "%",
  },
  NA: {
    label: "Sodium",
    quantity: 0.05,
    unit: "%",
  },
  CA: {
    label: "Calcium",
    quantity: 3.24,
    unit: "%",
  },
  MG: {
    label: "Magnesium",
    quantity: 25.285714285714285,
    unit: "%",
  },
  K: {
    label: "Potassium",
    quantity: 5.47659574468085,
    unit: "%",
  },
  FE: {
    label: "Iron",
    quantity: 15.733333333333333,
    unit: "%",
  },
  ZN: {
    label: "Zinc",
    quantity: 21.654545454545456,
    unit: "%",
  },
  P: {
    label: "Phosphorus",
    quantity: 44.82857142857143,
    unit: "%",
  },
  VITA_RAE: {
    label: "Vitamin A",
    quantity: 0,
    unit: "%",
  },
  VITC: {
    label: "Vitamin C",
    quantity: 0,
    unit: "%",
  },
  THIA: {
    label: "Thiamin (B1)",
    quantity: 38.150000000000006,
    unit: "%",
  },
  RIBF: {
    label: "Riboflavin (B2)",
    quantity: 6.415384615384615,
    unit: "%",
  },
  NIA: {
    label: "Niacin (B3)",
    quantity: 3.60375,
    unit: "%",
  },
  VITB6A: {
    label: "Vitamin B6",
    quantity: 5.4923076923076914,
    unit: "%",
  },
  FOLDFE: {
    label: "Folate equivalent (total)",
    quantity: 8.4,
    unit: "%",
  },
  VITB12: {
    label: "Vitamin B12",
    quantity: 0,
    unit: "%",
  },
  VITD: {
    label: "Vitamin D",
    quantity: 0,
    unit: "%",
  },
};

const nutritionToDisplay = {
  Energy: true,
  Fat: true,
  Saturated: false,
  Carbs: false,
  Fiber: false,
  Protein: true,
  Cholesterol: false,
  Sodium: false,
  Calcium: false,
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
  "Vitamin B12": false,
  "Vitamin D": false,
};

/* Returns url from chosen product */
function getProductUrl(product) {
  return `https://api.edamam.com/api/nutrition-data?app_id=d3b855f7&app_key=35b2a48f920867abd283496625b0ddd4&nutrition-type=logging&ingr="${product}"`;
}

/* Go through nutritionToDisplay and return object nutritionvalue  */
function getNutritiousDataFromLabels(result, nutritionToDisplay) {
  let nutritions = {};
  for (const [nutrition, isShown] of Object.entries(nutritionToDisplay)) {
    if (isShown) {
      for (const [nutritionCode, data] of Object.entries(totalDaily)) {
        if (nutrition === data.label) {
          nutritions[nutrition] = data.quantity; // FIXME: Datan visar fel värden
        }
      }
    }
  }
  return nutritions;
}

function getProductLabels(url) {
  let labels = {};
}

//TODO: Skapa en fin funktion
fetch(url)
  .then((response) => response.json())
  .then((result) => {
    console.log(result);
    let nutritions = getNutritiousDataFromLabels(result, nutritionToDisplay);
    console.log(nutritions);
  });
