// * Generate random number
// * While note guessed right number
// * clue if higher or lower
// * Reward when guessd right

// Random number 1-100
let randomNumber = Math.floor(Math.random() * 100)
let userInput = prompt(`Vad är det hemliga nummret?`)
let status
let count = 0
console.log(randomNumber)

while (parseInt(userInput) !== randomNumber){
  count++
  status = userInput < randomNumber ? "större än" : "mindre än"
  userInput = prompt(`Nummret är ${status} ${userInput}, försök igen`)
}
alert(`${userInput} Är rätt! Det tog dig ${count} försök.`)
