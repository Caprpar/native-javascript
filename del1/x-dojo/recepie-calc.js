/*
Räknar ut totalkostnaden av en portion genom att mata in vikt samt kilopris för råvaror som läggs till i portionen
 */

let bread = {
  name: "Nattjästa frallor",
  portions: 4,
  water: [3.5, "dl"],
  yeast: [3, "krm"],
  salt: [1.5, "tsp"],
  sugar: [1, "tbsp"],
  rye: [3, "dl"],
  wheat: [4, "dl"]
}

// för varje ingridient, halvera måttet med 4
let portionAmount = 8
for (const [ingridient, volume]  of Object.entries(bread)) {
  bread[ingridient][0] = (volume[0] / bread.portions) * portionAmount
}

//Print out recepie
let recipie = (`${bread.name}: (${portionAmount} portioner)\n`)
for (const [ingridient, volume] of Object.entries(bread)){
  if (typeof volume === "object"){
    recipie += `${volume[0]} ${volume[1]}\t${ingridient}\n`
  }
}
console.log(recipie)
