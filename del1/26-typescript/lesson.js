/*
 * sessionStorage - sparar tills användare stänger fliken
 * localStorage  - Finns kvar när användaren besöker vår sajt nästa gång
 */

const revealBTN = document.querySelector("#reveal");
const localValue = document.querySelector("#local-data");
let userInput = document.querySelector("#userInput").value;
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  userInput = document.querySelector("#userInput").value;
  sessionStorage.setItem("input", JSON.stringify(userInput));
  localValue.style.display = "none";
});

revealBTN.addEventListener("click", (event) => {
  localValue.textContent = JSON.parse(sessionStorage.getItem("input"));
  console.log(localValue.textContent);
  localValue.style.display = "block";
});
