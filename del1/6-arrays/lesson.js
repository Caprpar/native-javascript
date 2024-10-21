let playerScores = [5, 15, 90, 60]
let playerNames = ["adam", "philip", "jonas", "pelle"]
let products = ["tröja", "byxor", "skor"]
/*
let myArray = ["test", 1, true, null]
let myString = "Banan"
console.log(myArray[1])
console.log(myString.split(""))
 */

/*
playerNames.forEach((item, playerIdx) => {
  console.log(playerIdx, item, playerScores[playerIdx])
})
 */
/*
for (let playerIdx = 0; playerIdx < playerNames.length; playerIdx++){
  console.log(`${playerIdx}: ${playerNames[playerIdx]}'s highscore: ${playerScores[playerIdx]}`)
}
*/
console.log("cart before:", products)
let addThis = ["trosor",
  "strumpor",
  "hatt",
  "skor"]

//  Lägger till saker som inte redan finns i varukorgen
addThis.forEach((item) => {
  if (!products.includes(item)) {
    products.push(item)
  }
})

console.log("cart after:", products)
let removed = products.pop()
console.log("cart after removing", removed, products)

console.log(products.splice(0))

// * Loops through all items in array
let myArr = [1, 2, 3, 4]
for (const idx of myArr) {
  console.log(idx)
}
