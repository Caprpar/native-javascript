let products = [
  {
    type: "boots",
    price: 900,
    stock: 4,
  },
  {
    type: "socks",
    price: 75,
    stock: 20,
  },
  {
    type: "underwear",
    price: 150,
    stock: 11,
  },
  {
    type: "accesoaries",
    price: 1000,
    stock: 9,
  },
  {
    type: "shirt",
    price: 90,
    stock: 9,
  },
];

for (let product of products) {
  let productElement = document.createElement("div");
  let productText = document.createElement("p");
  let productType = document.createTextNode(product.type);
  let productPrice = document.createTextNode(product.price);
  let productStock = document.createTextNode(product.stock);

  productElement.classList = "product";
  productText.appendChild(productType);
  productText.appendChild(productPrice);
  productText.appendChild(productStock);
  productElement.appendChild(productText);
  document.body.appendChild(productElement);
}
