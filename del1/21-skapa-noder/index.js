// *Skapa nodobjekt
// let text = document.createTextNode("Hello World!");
// document.body.appendChild(text);

// *Skapa elementnod
// let text = document.createTextNode("Hello World!");
// let element = document.createElement("h1");
// element.appendChild(text);
// document.body.appendChild(element);

// *Lägg till element, på slutet
// let ol = document.querySelector("ol");
// let li = document.createElement("li");
// let player = document.createTextNode("Caspar");
// li.appendChild(player);
// ol.appendChild(li);

// *Ta bort ett element
let ol = document.querySelector("ol");
let liArr = document.querySelectorAll("li");
let newLi = document.createElement("li");
let newLiText = document.createTextNode("Caspar");
newLi.appendChild(newLiText);
ol.insertBefore(newLi, liArr[2]);
