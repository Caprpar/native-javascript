// * Funktioner högre ordning

function f(g) {
  g();
}

function f() {
  return alert;
}

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  let printMe = "* ".repeat(number);
  console.log(printMe);
});

console.log(numbers.find((number) => number > 2));
// Ouptput: 3

console.log(numbers.filter((number) => number > 2));
// Ouptput: [3, 4, 5]

let users = ["caspar danielsson", "olle ollson", "caspar viktorsson"];
console.log(users.filter((user) => user.includes("caspar")));
// Ouptput: ['caspar danielsson', 'caspar viktorsson']

console.log(numbers.map((number) => number + 1));
// Ouptput: [2, 3, 4, 5, 6]

console.log(numbers.map((number) => number + 1));
// Ouptput: [2, 3, 4, 5, 6]

console.log(numbers.map((number) => Math.floor(Math.random() * (number * number - number + 1) + number)));
// Ouptput: [1, 3, 4, 15, 18]
// Ouptput: [1 - 1*1, 2 - 2*2,3 - 3*3,4 - 4*4,5 - 5*5]
