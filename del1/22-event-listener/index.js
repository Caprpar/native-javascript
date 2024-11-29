// * En klickbar knapp: Del 1
/* let button = document.querySelector("#button");

button.addEventListener("click", console.log);
*/

// ! Ett hover-element
let hover = document.querySelector("#hover-area");
hover.addEventListener("mouseover", console.log);

// * Öka ett värde
/* let valueEl = document.querySelector("#value")
let increase = document.querySelector("#increase")
valueEl.textContent = 1
increase.addEventListener("click", () => {
valueEl.textContent = Number(valueEl.textContent)
+1}) */

// * Öka eller minska ett värde
/* let valueEl = document.querySelector("#value")
let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")
valueEl.textContent = 1
increase.addEventListener("click", () => {
  valueEl.textContent = Number(valueEl.textContent)
+1})
decrease.addEventListener("click", () => {
  valueEl.textContent = Number(valueEl.textContent)
-1}) */

// * Öka eller minska ett värde del 2
let valueEl = document.querySelector("#value");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
decrease.disabled = true;
valueEl.textContent = 1;
increase.addEventListener("click", () => {
  valueEl.textContent = Number(valueEl.textContent) + 1;
  decrease.disabled = Number(valueEl.textContent) > 1 ? false : true;
});
decrease.addEventListener("click", () => {
  decrease.disabled = Number(valueEl.textContent) === 2 ? true : false;
  valueEl.textContent = Number(valueEl.textContent) - 1;
});
