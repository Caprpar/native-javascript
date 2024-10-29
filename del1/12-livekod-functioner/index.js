//! functions

//* Uppgift 1
function sum(myArray) {
  let sum = 0;
  for (const number of myArray) {
    sum += parseInt(number);
  }
  return sum;
}

//* Uppgift 2
function average(myArray) {
  let average = 0;
  for (const number of myArray) {
    average += parseInt(number);
  }
  average = average ? average / myArray.length : null;
  return average;
}

//* Uppgift 3
function reverse(myArr) {
  let reverse = [];
  for (const number of myArr) {
    reverse.unshift(number);
  }
  return reverse;
}

//* Uppgift 4
function repeat(myStr, repeatAmount) {
  let repeat = [];
  for (let repeatIdx = 0; repeatIdx < repeatAmount; repeatIdx++) {
    repeat.push(myStr);
  }
  return repeat;
}

//* Uppgift 5
function sum(...theArgs) {
  let total = 0;
  for (const arg of theArgs) {
    total += arg;
  }
  total = total ? total : 0;
  return total;
}
