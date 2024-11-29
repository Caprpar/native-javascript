// * Ett textfält
/* const field = document.querySelector("input")
field.value = "Alice"
*/

// * Ett textfält, et stycke en knapp
/* const field = document.querySelector("input");
const greeting = document.querySelector("#greeting");
const btn = document.querySelector("#send");

btn.addEventListener("click", () => {
  let name = field.value;
  greeting.textContent = `Hej ${name}!`;
}); */

// * Ett textfält, ett stycke en knapp
const field = document.querySelector("input");
const greeting = document.querySelector("#greeting");
const btn = document.querySelector("#send");
const errorEl = document.querySelector("#errors");
errorEl.style.display = "block";
btn.disabled = true;

field.addEventListener("input", () => {
  btn.disabled = !field.value ? true : false;
  errorEl.style.display = !field.value ? "block" : "none";
});

btn.addEventListener("click", () => {
  let name = field.value;
  greeting.textContent = `Hej ${name}!`;
});


// * Ett textfält, et stycke en knapp
/* let form = document.querySelector("#form");
const field = document.querySelector("input");
const greeting = document.querySelector("#greeting");

const btn = document.querySelector("#send");
const consent = document.querySelector("#consent");

const errorEl = document.querySelector("#errors");
const nameError = document.querySelector("#name-error");
const consentError = document.querySelector("#consent-error");

errorEl.style.display = "block";
btn.disabled = true;

consent.addEventListener("click", () => {
  btn.disabled = consent.checked && field.value ? false : true;
  consentError.style.display = consent.checked ? "none" : "block";
  errorEl.style.display = field.value && consent.checked ? "none" : "block";
});

field.addEventListener("input", () => {
  btn.disabled = consent.checked && field.value ? false : true;
  nameError.style.display = !field.value ? "block" : "none";
  errorEl.style.display = field.value && consent.checked ? "none" : "block";
});

form.addEventListener("submit", () => {
  event.preventDefault();
  console.log("Hej");
  let name = field.value;
  greeting.textContent = `Hej ${name}!`;
});
 */