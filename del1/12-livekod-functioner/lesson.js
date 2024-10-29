// * livekodning funktioner

// 1. [ ] som har lite produkter
// 2. [ ] användare ska kunna titta på produkterna
// 3. [ ] hitta produkt som man vill ha
// 4. [ ] lägga in i sin varukorg (cart)
// 5. [ ] kunna se sammanfattning av sin varukorg
// 6. [ ] betala

// 1. en lokal/hårdkodad databas
let chosenProduct = true;
let productDb = [
  { name: "Tröja", cost: 150 },
  { name: "Strumpor", cost: 80 },
  { name: "Jacka", cost: 1050 },
  { name: "Byxa", cost: 700 },
];

let cart = {
  chosenProducts: [],
  totalCost: 0,
};

// 2. Vi använder console.og för att visa produkterna för användaren

// 3. vi vill kunna välja en (tex "Jacka") och lägga in en dedikerad variabel för detta
// Gå igenom productDb- arrayen och leta efter "Jacka"-strängen.
// TODO: Fixa så chosen product inte kan vara null eller ""
// let chosenProduct = prompt("Skriv nameet på en produkt: ");
function getChosenProduct() {
  return prompt("Välj produkt");
}

function addToCart(chosenProduct) {
  for (const product of productDb) {
    if (product.name === chosenProduct) {
      cart.chosenProducts.push(chosenProduct);
      console.log(`Lade till ${chosenProduct} (${product.cost}kr)`);
      cart.totalCost += product.cost;
      return true;
    }
  }
  if (chosenProduct !== "") {
    console.log(`${chosenProduct} finns inte att köpa`);
    return false;
  }
  return false;
}

function summarize() {
  console.log("Din varukorg");
  for (const [index, product] of cart.chosenProducts.entries()) {
    console.log(`${index + 1}. ${product}`);
  }
  console.log(`Totalpris: ${cart.totalCost}`);
}

while (chosenProduct) {
  chosenProduct = getChosenProduct();
  addToCart(chosenProduct);
}

summarize();
