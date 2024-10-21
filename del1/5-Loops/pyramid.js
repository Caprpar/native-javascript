let uInput = prompt("Ange pyramidvåningar")
let stars

for(let levels = 0; levels < uInput; levels++) {
  stars = ""
  for(let starAmount = 0; starAmount <= levels; starAmount++) {
    stars += "* "
  }
  console.log(stars)
}
