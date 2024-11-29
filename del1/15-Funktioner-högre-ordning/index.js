// * Funktioner av högre nivå

// * Uppgift 1
let call = (f) => f();

// * Uppgift 2
let f = () => {
  let u = () => "Hello World!";
  return u;
};

// * Uppgift 3
function forEach(array, func) {
  for (let index of array) {
    func(index);
  }
}

// * Uppgift 4
function find(array, func) {
  for (let idx of array) {
    if (func(idx)) {
      return idx;
    }
  }
}

console.log(
  find([1, 2, 3], function (n) {
    return n > 2;
  })
); // 3
console.log(find(["Hej", "Hejdå"], (s) => s.length === 5)); // Hejdå

// * Uppgift 5
function filter(array, func) {
  let tempArray = [];
  for (let idx of array) {
    if (func(idx)) {
      tempArray.push(idx);
    }
  }
  return tempArray;
}

console.log(filter([5, 10, 15], (value) => value !== 5)); // [10, 15]
