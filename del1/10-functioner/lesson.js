// * Funktioner

function greet(name) {
  let temp = name;
  console.log(`Hej ${temp}!`);
}

let names = ["Caspar", "Ingo", "Hampus", "Morin", "Felix"];

for (const name of names) {
  greet(name);
}
