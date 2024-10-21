// let maxTrials = 9
// let trialCount = 0
// let guessedLetters = ""
// input hangword

// While guessWord !== hangWord || trials <= maxTrials
// alert progress: blankWord
// input guessLetter
// Loop if letter in hangword
// if in hangword, replace index in blankWord with correct index
// if not in hangword, add trialCount++ add letter to guessedLetters
// alert not correct: show progress

let maxTrials = 9
let trialCount = 0
let guessedLetters = ""
const hangword = prompt("Ange ordet för hänga gubbe")
let guessWord = ""
let chosenLetter = ""
let tempGuessWord = ""
let correctLetters = ""

// generate guessWord
for (const char of hangword) {
  guessWord += "-"
}

// runs while "_" exists in guessWord
while (guessWord.includes("-")){
  chosenLetter = prompt(`Gissa bokstav\n${guessWord}`)
  guessedLetters += `${chosenLetter} `
  guessWord = ""
  // for each character in hangword
  let index = 0

  for (const char of hangword) {
    // if letter exist in word
    if (chosenLetter === char) {
      guessWord += `${chosenLetter}`
      correctLetters += `${chosenLetter}`
    }

    // if letter dont exist in word
    else {
      guessWord += `-`
    }
  }
  // alert(guessWord)
  // break
}
