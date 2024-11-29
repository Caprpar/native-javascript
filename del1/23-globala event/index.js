// * En klickbar knapp: Del 1
addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector("#button");
  button.addEventListener("click", console.log);
});

// * Muspekarens horisontella position
addEventListener("click", (event) => {
  console.log(event.pageX);
});

// * Tangentkod
addEventListener("keydown", (event) => {
  console.log(event.code);
});

// * Shift
addEventListener("keydown", (event) => {
  if (event.shiftKey) {
    if (!event.code.includes("Shift")) console.log(event.code);
  }
});

// * Öka eller minska ett värde del 3
let valueEl = document.querySelector("#value");
let increase = document.querySelector("#increase");
let decrease = document.querySelector("#decrease");
decrease.disabled = true;
valueEl.textContent = 1;

function increaseValue() {
  valueEl.textContent = Number(valueEl.textContent) + 1;
  decrease.disabled = Number(valueEl.textContent) > 1 ? false : true;
}

function decreaseValue() {
  decrease.disabled = Number(valueEl.textContent) === 2 ? true : false;
  valueEl.textContent = Number(valueEl.textContent) - 1;
}
increase.addEventListener("click", () => {
  increaseValue();
});

decrease.addEventListener("click", () => {
  decreaseValue();
});

addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") increaseValue();
  if (event.code === "ArrowDown" && Number(valueEl.textContent) > 1) decreaseValue();
});
