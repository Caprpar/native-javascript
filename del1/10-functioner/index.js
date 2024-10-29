//! functions

//* Uppgift 1
// let displayDialogBox = function () {
//   alert("Hej Vanja!");
// };

//* Uppgift 2
// let displayDialogBox = function (displayWord) {
//   alert(displayWord);
// };

//* Uppgift 3
// let concatenateAndLog = function (word1, word2) {
//   console.log(word1 + word2);
// };

//* Uppgift 4
// let logLength = function (myArray) {
//   console.log(myArray.length);
// };
//* Uppgift 5
const lookup = function (myObj, myChar) {
  console.log(myObj[myChar]);
};

let obj = {
  name: "pelle",
  age: 28,
  mail: "p@gmail.com",
};

lookup(obj, "name");
