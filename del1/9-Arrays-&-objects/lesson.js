//* Arrays & Objects

let arrInArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(arrInArr[1]);
// console.log(arrInArr[1][1]);

let objInObj = {
  a: { a: 1, b: 2, c: 3 },
  b: { d: 4, e: 5, f: 6 },
  c: { g: 7, h: 8, i: 9 },
};

// console.log(objInObj.a.b);
// console.log(objInObj.b.e);

let objInArr = [
  { a: 1, b: 2, c: 3 },
  { d: 4, e: 5, f: 6 },
  { g: 7, h: 8, i: 9 },
];
// console.log(objInArr[1].d);

let arrInObj = {
  a: [1, 2, 3],
  b: [4, 5, 6],
  c: [7, 8, 9],
};

// console.log(arrInObj.b[2]);

let numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}

for (const arr of arrInObj.b) {
  console.log(arr);
}
