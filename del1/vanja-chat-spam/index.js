// Om vi tänker oss en webbshopp som har lite produkter,
// som en användare ska kunna titta på, hitta och lägga
// in i sin varukorg (cart), och sen kunna se sammanfattning
// av och betala sen.

// Steg-för-steg:
// 1. [x] som har lite produkter
// 2. [x] en användare ska kunna titta på produkterna
// 3. [p] hitta produkt som man vill ha
// 4. [x] lägga in vald produkt i sin varukorg (cart)
// 5. [x] kunna se sammanfattning av sin varukorg
// 6. [x] lägg till möjlighet att ha priser
// 7. [x] betala-funktion

//1. En lokal/hårdkodad databas. I framtiden hämtar vi denna info från internet via web api:er
let allProductsDb = [
  { name: "Tröja", price: 45, color: "blue", size: "l" },
  { name: "Sockor", price: 300, color: "blue", size: "l" },
  { name: "Jacka", price: 22, color: "yellow", size: "l" },
  { name: "Slips", price: 400, color: "red", size: "l" },
  { name: "Byxa", price: 43, color: "blue", size: "l" },
];

//2. vi använder oss av console.log för att visa produkterna för användaren
console.log("Tillgängliga produkter: ", allProductsDb);

let userCart = { chosenProducts: [], totalCost: 0 };

//-------3 till 5------------------------------------

//För att användaren ska kunna köpa mer, måste steg 4 köras igen men också steg 3
//3. Vi vill kunna välja en produkt (ex: "Jacka") och lägga in en dedikerad variabel för detta
//Gå igenom productDb-arrayen och leta efter "Jacka"-strängen
//***** TODO: Fixa så chosenProduct inte kan vara null eller "" eller nåt som inte finns i productDb
const chooseAndAddProductToCart = function (cart, productDb) {
  // while (xxxxx) {  lösa punkt TODO ovan
  const chosenProduct = prompt("Skriv namnet på en produkt:");
  console.log("Du har valt produkten: " + chosenProduct);

  for (let index = 0; index < productDb.length; index++) {
    if (productDb[index].name === chosenProduct) {
      cart.totalCost += productDb[index].price;
      console.log("Yea, produkten finns i produkt-databasen!");
    }
  }
  // }

  //4. Lägga in vald produkt i varukorg
  // let cartChosenProducts = []
  // let totalCost = 0
  // cart = { chosenProducts: [], totalCost: 0 }
  cart.chosenProducts.push(chosenProduct);

  //5. se sammanfattning av ens valda produkter (chosenProducts) i varukorgen (cart)
  console.log("Varukorgen innehåller: ", cart);
};

const previewPaymentInfo = function (cart) {
  //TODO: Lägg så man kan ta emot vouchers/rabattkoder och ta med det i totaltpriset
  // let voucher
  console.log("Du ska betala: " + (cart.totalCost + 120) + " SEK");
};

while (true) {
  chooseAndAddProductToCart(userCart, allProductsDb);
  previewPaymentInfo(userCart);
  // TODO: Skriv ut totalpriset på webbsidan
  // document.querySelector("#p").textContent =
}
