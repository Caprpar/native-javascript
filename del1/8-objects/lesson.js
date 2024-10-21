// Objects
let player = {
  age: 18,
  coins: 1337,
  items: [
    "sword",
    "headgear",
    "boots"
  ]
}
player.score = 900

for (const [key, value] of Object.entries(player)){
  console.log(`${key}: ${value}`)
}

let myArr = [1, 2, 3, 4]
for (const idx of myArr) {
  console.log(idx)
}
