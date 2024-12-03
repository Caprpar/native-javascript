// let url = `https://api.edamam.com/api/nutrition-data?app_id=d3b855f7&app_key=35b2a48f920867abd283496625b0ddd4&nutrition-type=logging&ingr="oats"`;

/*
Skapa objekt som inehåller
- Produktnamn
- användarens graminput
- portionservering i gram
- objekt på näring som ska visas
- objekt på produktens näringsvärden
 */

const debugData = [
  {
    name: "oats",
    weight: 47,
    portionWeight: 60,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 182.82999999999998,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 3.243,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.5734,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 1.0246,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 1.1938,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 31.160999999999994,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 26.178999999999995,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 4.981999999999999,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 7.942999999999999,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 0.94,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 25.38,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 83.19,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 201.62999999999997,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 2.2184,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 1.8659000000000001,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 245.81,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 0,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.35861,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.06533,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.45167,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.055929999999999994,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 26.32,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 26.32,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 3.8634000000000004,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 9.141499999999999,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 4.989230769230768,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 2.867,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 10.386999999999999,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 19.928,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 15.885999999999997,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.03916666666666667,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 2.5380000000000003,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 19.807142857142857,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 4.289999999999999,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 12.324444444444444,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 16.962727272727275,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 35.11571428571428,
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
        quantity: 29.884166666666673,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 5.025384615384615,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 2.8229374999999997,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 4.302307692307692,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 6.58,
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
    },
  },
  {
    name: "flax seed",
    weight: 7,
    portionWeight: 21,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 37.379999999999995,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 2.9539999999999997,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.2562,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 0.5270999999999999,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 2.0089999999999995,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 2.0229999999999997,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 0.1119999999999998,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 1.9109999999999998,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 0.1085,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 1.281,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 2.0999999999999996,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 17.849999999999998,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 27.439999999999998,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 56.91,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.4011,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.30379999999999996,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 44.94,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 0.041999999999999996,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.11479999999999999,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.011269999999999999,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.2156,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.033109999999999994,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 6.09,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 6.09,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.021699999999999997,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 0.30099999999999993,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 0.48719999999999997,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 1.869,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 4.544615384615384,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 1.281,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 0.6743333333333332,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 7.643999999999999,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 2.562,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.0875,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 1.7850000000000001,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 6.533333333333333,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 1.2108510638297871,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 2.228333333333333,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 2.7618181818181817,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 6.42,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 0.04666666666666666,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 9.566666666666666,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.8669230769230768,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 1.3475000000000001,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 2.5469230769230764,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 1.5225,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.14466666666666664,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 0.2508333333333333,
        unit: "%",
      },
    },
  },
  {
    name: "chia seed",
    weight: 4,
    portionWeight: 12,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 19.439999999999998,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 1.2279999999999998,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.13319999999999999,
        unit: "g",
      },
      FATRN: {
        label: "Fatty acids, total trans",
        quantity: 0.005600000000000001,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 0.0924,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 0.948,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 1.6839999999999997,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 0.30799999999999983,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 1.376,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.6599999999999999,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 0.6399999999999999,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 25.24,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 13.399999999999999,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 16.279999999999998,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.30879999999999996,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.18319999999999997,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 34.4,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0.6479999999999999,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 0.064,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.024799999999999996,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.0068000000000000005,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.35319999999999996,
        unit: "mg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 1.96,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.019999999999999997,
        unit: "mg",
      },
      WATER: {
        label: "Water",
        quantity: 0.23199999999999998,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 0.972,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 1.8892307692307688,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.6659999999999999,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 0.5613333333333332,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 5.504,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 1.3199999999999998,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.026666666666666665,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 2.524,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 3.1904761904761902,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 0.3463829787234043,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 1.715555555555555,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 1.6654545454545453,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 4.914285714285714,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.072,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 0.0711111111111111,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 2.0666666666666664,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.523076923076923,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 2.2074999999999996,
        unit: "%",
      },
      VITB12: {
        label: "Vitamin B12",
        quantity: 0,
        unit: "%",
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.13333333333333333,
        unit: "%",
      },
    },
  },
  {
    name: "sunflower seeds",
    weight: 10,
    portionWeight: 12,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 58.4,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 5.15,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.446,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 1.8499999999999999,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 2.3100000000000005,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 2,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 1.14,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 0.8600000000000001,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 0.262,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 2.08,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 0.9000000000000001,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 7.8,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 32.5,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 64.5,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.525,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.5,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 66,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0.3,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 0.13999999999999999,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.148,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.035500000000000004,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.834,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.134,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 22.7,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 22.7,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 3.5200000000000005,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 0,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 0.47300000000000003,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 2.92,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 7.923076923076923,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 2.2300000000000004,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 0.6666666666666667,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 3.4400000000000004,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 4.16,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.0375,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 0.78,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 7.738095238095239,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 1.3723404255319147,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 2.916666666666667,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 4.545454545454545,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 9.428571428571429,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.03333333333333333,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 0.15555555555555556,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 12.333333333333332,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 2.730769230769231,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 5.2124999999999995,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 10.307692307692307,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 5.675,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 23.466666666666672,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 0,
        unit: "%",
      },
    },
  },
  {
    name: "banana",
    weight: 42,
    portionWeight: 126,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 37.379999999999995,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 0.1386,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.04704,
        unit: "g",
      },
      FATRN: {
        label: "Fatty acids, total trans",
        quantity: 0,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 0.01344,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 0.030659999999999996,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 9.576,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 8.484,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 1.092,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 5.124,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.45780000000000004,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 0.42,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 2.0999999999999996,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 11.34,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 150.35999999999999,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.10919999999999999,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.063,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 9.239999999999998,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 1.26,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 3.654,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.013019999999999999,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.030659999999999996,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.2793,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.15414,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 8.399999999999999,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 8.399999999999999,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.041999999999999996,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 0.21,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 31.458000000000002,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 1.869,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 0.21323076923076922,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.2352,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 3.192,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 4.368,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.9156000000000002,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.017499999999999998,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 0.21,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 2.7,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 3.1991489361702126,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 0.6066666666666666,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 0.5727272727272726,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 1.3199999999999998,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.13999999999999999,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 4.06,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 1.085,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 2.3584615384615377,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 1.745625,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 11.856923076923076,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 2.0999999999999996,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.27999999999999997,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 0.175,
        unit: "%",
      },
    },
  },
  {
    name: "oat milk",
    weight: 215,
    portionWeight: 266.40921134719036,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 132.0353083608902,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 2.507914136726859,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.8433011354852892,
        unit: "g",
      },
      FATRN: {
        label: "Fatty acids, total trans",
        quantity: 0,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 0.5985286879087552,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 0.6759101554457271,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 23.897188116545134,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 20.722517039165307,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 3.174671077379826,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 4.786064803382847,
        unit: "g",
      },
      "SUGAR.added": {
        label: "Sugars, added",
        quantity: 2.1077578576031937,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 4.292026474081763,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0.03185641390681089,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 62.86821129633204,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 28.924558638005678,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 67.7195179092318,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 145.12802966567187,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 1.3621454369714083,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 1.0788775692024877,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 137.44684112819246,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0.40802256127562697,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 0.49219424889162067,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.1769247879478138,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.08126320041224745,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.318537414884028,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.042039769092457456,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 12.299731089868345,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 12.299731089868345,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0.0016260929498654359,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0.004141333807885416,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.07790977277651756,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 0.5371078380744951,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 183.12335826012347,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 6.60176541804451,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 3.858329441118244,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 4.216505677426446,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 7.965729372181711,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 12.698684309519304,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 8.584052948163526,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0.010618804635603631,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 2.6195088040138352,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 2.8924558638005675,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 16.123694740293285,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 3.0878304184185508,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 7.567474649841157,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 9.807977901840797,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 19.635263018313207,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.045335840141736326,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 0.5468824987684675,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 14.743732328984484,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 6.251015416326726,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 1.9908588430251748,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 3.233828391727496,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 3.074932772467086,
        unit: "%",
      },
      VITB12: {
        label: "Vitamin B12",
        quantity: 0.06775387291105983,
        unit: "%",
      },
      VITD: {
        label: "Vitamin D",
        quantity: 0.027608892052569445,
        unit: "%",
      },
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.5193984851767838,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 0.4475898650620793,
        unit: "%",
      },
    },
  },
  {
    name: "peanut butter",
    weight: 48,
    portionWeight: 32,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 287.04,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 24.672,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 4.944000000000001,
        unit: "g",
      },
      FATRN: {
        label: "Fatty acids, total trans",
        quantity: 0.036000000000000004,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 12.432,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 6,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 10.704,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 8.303999999999998,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 2.4000000000000004,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 5.04,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 10.656,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 8.16,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 23.52,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 80.64,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 267.84000000000003,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.8351999999999999,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 1.2047999999999999,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 160.8,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 0,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.07200000000000001,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.09216,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 6.288,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.21167999999999998,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 41.76,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 41.76,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 4.368,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 0.14400000000000002,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 0.5904,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 14.352,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 37.956923076923076,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 24.72,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 3.568,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 9.600000000000001,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 21.312,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.33999999999999997,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 2.3520000000000003,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 19.200000000000003,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 5.698723404255319,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 4.639999999999999,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 10.952727272727271,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 22.97142857142857,
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
        quantity: 6,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 7.089230769230769,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 39.300000000000004,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 16.283076923076923,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 10.44,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 29.12,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 0.12,
        unit: "%",
      },
    },
  },
  {
    name: "seabuckthorn berry",
    weight: 14,
    portionWeight: 74,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 7.98,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 0.046200000000000005,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.00392,
        unit: "g",
      },
      FATRN: {
        label: "Fatty acids, total trans",
        quantity: 0,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 0.00658,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 0.02044,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 2.0300000000000002,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 1.6940000000000002,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 0.336,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 1.3944000000000003,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.1036,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 0.14,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 0.84,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 0.84,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 10.78,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.039200000000000006,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.022400000000000003,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 1.68,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0.42,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 1.3579999999999999,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.00518,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.005740000000000001,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.05852,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.007280000000000001,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 0.84,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 0.84,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.0798,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 2.702,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 11.788,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 0.399,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 0.07107692307692308,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.0196,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 0.6766666666666667,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 1.344,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.2072,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.005833333333333334,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 0.08399999999999999,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 0.19999999999999998,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 0.22936170212765958,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 0.2177777777777778,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 0.20363636363636364,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 0.24,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.04666666666666666,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 1.508888888888889,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.4316666666666667,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.44153846153846155,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 0.36575,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.56,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 0.21,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.5319999999999999,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 2.251666666666667,
        unit: "%",
      },
    },
  },
  {
    name: "lingon berry",
    weight: 14,
    portionWeight: 74,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 7.98,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 0.046200000000000005,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.00392,
        unit: "g",
      },
      FATRN: {
        label: "Fatty acids, total trans",
        quantity: 0,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 0.00658,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 0.02044,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 2.0300000000000002,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 1.6940000000000002,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 0.336,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 1.3944000000000003,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.1036,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 0.14,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 0.84,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 0.84,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 10.78,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.039200000000000006,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.022400000000000003,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 1.68,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0.42,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 1.3579999999999999,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.00518,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.005740000000000001,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.05852,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.007280000000000001,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 0.84,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 0.84,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.0798,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 2.702,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 11.788,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 0.399,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 0.07107692307692308,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.0196,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 0.6766666666666667,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 1.344,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.2072,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.005833333333333334,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 0.08399999999999999,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 0.19999999999999998,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 0.22936170212765958,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 0.2177777777777778,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 0.20363636363636364,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 0.24,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.04666666666666666,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 1.508888888888889,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.4316666666666667,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.44153846153846155,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 0.36575,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.56,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 0.21,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.5319999999999999,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 2.251666666666667,
        unit: "%",
      },
    },
  },
  {
    name: "blue berry",
    weight: 14,
    portionWeight: 74,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 7.98,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 0.046200000000000005,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.00392,
        unit: "g",
      },
      FATRN: {
        label: "Fatty acids, total trans",
        quantity: 0,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 0.00658,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 0.02044,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 2.0300000000000002,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 1.6940000000000002,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 0.336,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 1.3944000000000003,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.1036,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 0.14,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 0.84,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 0.84,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 10.78,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.039200000000000006,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.022400000000000003,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 1.68,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0.42,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 1.3579999999999999,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.00518,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.005740000000000001,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.05852,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.007280000000000001,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 0.84,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 0.84,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.0798,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 2.702,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 11.788,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 0.399,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 0.07107692307692308,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.0196,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 0.6766666666666667,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 1.344,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.2072,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.005833333333333334,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 0.08399999999999999,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 0.19999999999999998,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 0.22936170212765958,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 0.2177777777777778,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 0.20363636363636364,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 0.24,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.04666666666666666,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 1.508888888888889,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.4316666666666667,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.44153846153846155,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 0.36575,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.56,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 0.21,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.5319999999999999,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 2.251666666666667,
        unit: "%",
      },
    },
  },
  {
    name: "rass berry",
    weight: 14,
    portionWeight: 74,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 7.98,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 0.046200000000000005,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.00392,
        unit: "g",
      },
      FATRN: {
        label: "Fatty acids, total trans",
        quantity: 0,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 0.00658,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 0.02044,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 2.0300000000000002,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 1.6940000000000002,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 0.336,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 1.3944000000000003,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.1036,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 0.14,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 0.84,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 0.84,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 10.78,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.039200000000000006,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.022400000000000003,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 1.68,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0.42,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 1.3579999999999999,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.00518,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.005740000000000001,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.05852,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.007280000000000001,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 0.84,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 0.84,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.0798,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 2.702,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 11.788,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 0.399,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 0.07107692307692308,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.0196,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 0.6766666666666667,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 1.344,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.2072,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.005833333333333334,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 0.08399999999999999,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 0.19999999999999998,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 0.22936170212765958,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 0.2177777777777778,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 0.20363636363636364,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 0.24,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.04666666666666666,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 1.508888888888889,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.4316666666666667,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.44153846153846155,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 0.36575,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.56,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 0.21,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.5319999999999999,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 2.251666666666667,
        unit: "%",
      },
    },
  },
  {
    name: "cran berry",
    weight: 14,
    portionWeight: 74,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 7.98,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 0.046200000000000005,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.00392,
        unit: "g",
      },
      FATRN: {
        label: "Fatty acids, total trans",
        quantity: 0,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 0.00658,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 0.02044,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 2.0300000000000002,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 1.6940000000000002,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 0.336,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 1.3944000000000003,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.1036,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 0.14,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 0.84,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 0.84,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 10.78,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.039200000000000006,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.022400000000000003,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 1.68,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0.42,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 1.3579999999999999,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.00518,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.005740000000000001,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.05852,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.007280000000000001,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 0.84,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 0.84,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.0798,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 2.702,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 11.788,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 0.399,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 0.07107692307692308,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.0196,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 0.6766666666666667,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 1.344,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.2072,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.005833333333333334,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 0.08399999999999999,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 0.19999999999999998,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 0.22936170212765958,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 0.2177777777777778,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 0.20363636363636364,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 0.24,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.04666666666666666,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 1.508888888888889,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.4316666666666667,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.44153846153846155,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 0.36575,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 0.56,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 0.21,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.5319999999999999,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 2.251666666666667,
        unit: "%",
      },
    },
  },
  {
    name: "raisin",
    weight: 21,
    portionWeight: 58,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 62.79,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 0.0525,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.01974,
        unit: "g",
      },
      FATRN: {
        label: "Fatty acids, total trans",
        quantity: 0.00021,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 0.00504,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 0.01113,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 16.653,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 15.707999999999998,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 0.945,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 13.692,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.693,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 5.459999999999999,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 13.02,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 7.56,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 156.23999999999998,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.3759,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.0756,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 20.58,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 0.48299999999999993,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.02226,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.02625,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.16085999999999998,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.036539999999999996,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 1.05,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 1.05,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.025199999999999997,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 0.735,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 3.255,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 3.1395,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 0.08076923076923076,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.09870000000000001,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 5.550999999999999,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 3.78,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 1.386,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.22749999999999995,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 1.302,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 1.8,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 3.324255319148936,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 2.0883333333333334,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 0.6872727272727273,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 2.94,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 0.5366666666666665,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 1.855,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 2.0192307692307687,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 1.005375,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 2.81076923076923,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 0.2625,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.16799999999999998,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 0.6124999999999999,
        unit: "%",
      },
    },
  },
  {
    name: "coconut flakes",
    weight: 14,
    portionWeight: 20,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 92.39999999999999,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 9.03,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 8.008000000000001,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 0.3836,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 0.09883999999999998,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 3.3040000000000003,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 1.0220000000000002,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 2.282,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 1.029,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.9632000000000001,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 5.18,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 3.6399999999999997,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 12.6,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 76.02,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.4648,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.2814,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 28.84,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 0.21000000000000002,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.0084,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.014000000000000002,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.08442,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.041999999999999996,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 1.26,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 1.26,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.0616,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 0.041999999999999996,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 0.42000000000000004,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 4.619999999999999,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 13.892307692307693,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 40.040000000000006,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 1.1013333333333333,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 9.127999999999998,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 1.9264000000000003,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.21583333333333332,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 0.364,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 2.9999999999999996,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 1.6174468085106384,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 2.582222222222222,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 2.5581818181818177,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 4.12,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 0.23333333333333334,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.7,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 1.076923076923077,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 0.527625,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 3.2307692307692304,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 0.315,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.4106666666666666,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 0.034999999999999996,
        unit: "%",
      },
    },
  },
  {
    name: "apple",
    weight: 34,
    portionWeight: 242,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 17.68,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 0.05780000000000001,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 0.00952,
        unit: "g",
      },
      FATRN: {
        label: "Fatty acids, total trans",
        quantity: 0,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 0.00238,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 0.017339999999999998,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 4.692,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 3.8760000000000003,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 0.816,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 3.536,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.0884,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 0.34,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 2.04,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 1.7,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 36.38,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.0408,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.0136,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 3.7399999999999998,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 1.02,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 1.564,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.00578,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.008839999999999999,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.030940000000000002,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.013940000000000001,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 1.02,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 1.02,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.0612,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 0.748,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 29.104,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 0.884,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 0.08892307692307694,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 0.047599999999999996,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 1.564,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 3.264,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 0.1768,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.014166666666666666,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 0.204,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 0.40476190476190477,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 0.7740425531914893,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 0.22666666666666666,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 0.12363636363636364,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 0.5342857142857141,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.11333333333333333,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 1.7377777777777779,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 0.4816666666666667,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 0.6799999999999998,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 0.193375,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 1.0723076923076924,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 0.255,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.4080000000000001,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 0.6233333333333333,
        unit: "%",
      },
    },
  },
  {
    name: "walnut",
    weight: 19,
    portionWeight: 30,
    displayNutrients: {
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
    },
    nutritionData: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 124.25999999999999,
        unit: "kcal",
      },
      FAT: {
        label: "Total lipid (fat)",
        quantity: 12.387999999999998,
        unit: "g",
      },
      FASAT: {
        label: "Fatty acids, total saturated",
        quantity: 1.1646999999999998,
        unit: "g",
      },
      FAMS: {
        label: "Fatty acids, total monounsaturated",
        quantity: 1.6966999999999999,
        unit: "g",
      },
      FAPU: {
        label: "Fatty acids, total polyunsaturated",
        quantity: 8.968,
        unit: "g",
      },
      CHOCDF: {
        label: "Carbohydrate, by difference",
        quantity: 2.6029999999999993,
        unit: "g",
      },
      "CHOCDF.net": {
        label: "Carbohydrates (net)",
        quantity: 1.3299999999999996,
        unit: "g",
      },
      FIBTG: {
        label: "Fiber, total dietary",
        quantity: 1.273,
        unit: "g",
      },
      SUGAR: {
        label: "Sugars, total including NLEA",
        quantity: 0.49589999999999995,
        unit: "g",
      },
      PROCNT: {
        label: "Protein",
        quantity: 2.8879999999999995,
        unit: "g",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "mg",
      },
      NA: {
        label: "Sodium, Na",
        quantity: 0.37999999999999995,
        unit: "mg",
      },
      CA: {
        label: "Calcium, Ca",
        quantity: 18.619999999999997,
        unit: "mg",
      },
      MG: {
        label: "Magnesium, Mg",
        quantity: 30.019999999999996,
        unit: "mg",
      },
      K: {
        label: "Potassium, K",
        quantity: 83.78999999999999,
        unit: "mg",
      },
      FE: {
        label: "Iron, Fe",
        quantity: 0.5529,
        unit: "mg",
      },
      ZN: {
        label: "Zinc, Zn",
        quantity: 0.5871,
        unit: "mg",
      },
      P: {
        label: "Phosphorus, P",
        quantity: 65.74,
        unit: "mg",
      },
      VITA_RAE: {
        label: "Vitamin A, RAE",
        quantity: 0.18999999999999997,
        unit: "µg",
      },
      VITC: {
        label: "Vitamin C, total ascorbic acid",
        quantity: 0.247,
        unit: "mg",
      },
      THIA: {
        label: "Thiamin",
        quantity: 0.06479,
        unit: "mg",
      },
      RIBF: {
        label: "Riboflavin",
        quantity: 0.028499999999999998,
        unit: "mg",
      },
      NIA: {
        label: "Niacin",
        quantity: 0.21280000000000002,
        unit: "mg",
      },
      VITB6A: {
        label: "Vitamin B-6",
        quantity: 0.10203,
        unit: "mg",
      },
      FOLDFE: {
        label: "Folate, DFE",
        quantity: 18.619999999999997,
        unit: "µg",
      },
      FOLFD: {
        label: "Folate, food",
        quantity: 18.619999999999997,
        unit: "µg",
      },
      FOLAC: {
        label: "Folic acid",
        quantity: 0,
        unit: "µg",
      },
      VITB12: {
        label: "Vitamin B-12",
        quantity: 0,
        unit: "µg",
      },
      VITD: {
        label: "Vitamin D (D2 + D3)",
        quantity: 0,
        unit: "µg",
      },
      TOCPHA: {
        label: "Vitamin E (alpha-tocopherol)",
        quantity: 0.13299999999999998,
        unit: "mg",
      },
      VITK1: {
        label: "Vitamin K (phylloquinone)",
        quantity: 0.513,
        unit: "µg",
      },
      WATER: {
        label: "Water",
        quantity: 0.7733,
        unit: "g",
      },
    },
    nutritionDaily: {
      ENERC_KCAL: {
        label: "Energy",
        quantity: 6.213,
        unit: "%",
      },
      FAT: {
        label: "Fat",
        quantity: 19.058461538461536,
        unit: "%",
      },
      FASAT: {
        label: "Saturated",
        quantity: 5.8235,
        unit: "%",
      },
      CHOCDF: {
        label: "Carbs",
        quantity: 0.8676666666666666,
        unit: "%",
      },
      FIBTG: {
        label: "Fiber",
        quantity: 5.092,
        unit: "%",
      },
      PROCNT: {
        label: "Protein",
        quantity: 5.775999999999999,
        unit: "%",
      },
      CHOLE: {
        label: "Cholesterol",
        quantity: 0,
        unit: "%",
      },
      NA: {
        label: "Sodium",
        quantity: 0.015833333333333335,
        unit: "%",
      },
      CA: {
        label: "Calcium",
        quantity: 1.8619999999999999,
        unit: "%",
      },
      MG: {
        label: "Magnesium",
        quantity: 7.147619047619048,
        unit: "%",
      },
      K: {
        label: "Potassium",
        quantity: 1.7827659574468082,
        unit: "%",
      },
      FE: {
        label: "Iron",
        quantity: 3.0716666666666663,
        unit: "%",
      },
      ZN: {
        label: "Zinc",
        quantity: 5.337272727272726,
        unit: "%",
      },
      P: {
        label: "Phosphorus",
        quantity: 9.391428571428571,
        unit: "%",
      },
      VITA_RAE: {
        label: "Vitamin A",
        quantity: 0.02111111111111111,
        unit: "%",
      },
      VITC: {
        label: "Vitamin C",
        quantity: 0.27444444444444444,
        unit: "%",
      },
      THIA: {
        label: "Thiamin (B1)",
        quantity: 5.399166666666667,
        unit: "%",
      },
      RIBF: {
        label: "Riboflavin (B2)",
        quantity: 2.192307692307692,
        unit: "%",
      },
      NIA: {
        label: "Niacin (B3)",
        quantity: 1.33,
        unit: "%",
      },
      VITB6A: {
        label: "Vitamin B6",
        quantity: 7.848461538461537,
        unit: "%",
      },
      FOLDFE: {
        label: "Folate equivalent (total)",
        quantity: 4.654999999999999,
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
      TOCPHA: {
        label: "Vitamin E",
        quantity: 0.8866666666666666,
        unit: "%",
      },
      VITK1: {
        label: "Vitamin K",
        quantity: 0.4275,
        unit: "%",
      },
    },
  },
];

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

function updateNutrientInfo(nutrientList) {}

/**  */
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  const ingredient = document.querySelector("#ingredient").value;
  const weight = Number(document.querySelector("#weight").value);

  fetch(getIngredientUrl(ingredient))
    .then((response) => response.json())
    .then((result) => {
      let ingredient = getIngredient(result, weight);
      if (isValidInput(ingredient)) {
        userIngredients.push(ingredient);
        addIngredientToList(ingredient);
        displayWarning("war-invalid-ingredient", false);
      } else {
        displayWarning("war-invalid-ingredient", true);
      }
      // TODO Display warning if invalid ingredient

      // TODO Append ingredient nutrition data and display ingredients stats
      console.log(userIngredients);
    });

  event.preventDefault();
});
// tar emot ingredient och gram och consollar ut näringsvärden
