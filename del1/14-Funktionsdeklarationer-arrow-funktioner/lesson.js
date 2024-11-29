// * Funktionsdeklarationer arrow funktioner
// * Lambda, anonyma funktioner

// Funktionsuttryck
/* let add = function (a, b) {
  return a + b;
};
 */
// Funktionsdeklaration
/* function add(a, b) {
  return a + b;
} */

function range(start = 0, stop, steps = 1) {
  let list = [];
  for (let _ = start; _ <= stop; _ += steps) {
    list.push(parseInt(_));
  }
  return list;
}

// Arrow-function
let greeting = () => "Hej";

/* return random integer from min to max*/
let randInt = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

for (let idx in range(0, 10)) {
  console.log(randInt(4, 9));
}
