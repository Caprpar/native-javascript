//! Blackjack

//* Uppgift 1
const aceOfHearts = { suit: "HEARTS", value: 1 };

//* Uppgift 2
function card(value, suit) {
  return { suit: suit, value, value };
}

//* Uppgift 3
let hearts = [];
for (let value = 1; value <= 13; value++) {
  hearts.push(card(value, "HEARTS"));
}

//* Uppgift 4
function prettyCard(card) {
  let suite, value;
  switch (card.suit) {
    case "HEARTS":
      suite = "♥";
      break;
    case "DIAMONDS":
      suite = "♣";
      break;
    case "SPADES":
      suite = "♠";
      break;
    case "DIAMONDS":
      suite = "♦";
      break;
  }

  switch (card.value) {
    case 1:
      value = "A";
      break;
    case 10:
      value = "T";
      break;
    case 11:
      value = "J";
      break;
    case 12:
      value = "Q";
      break;
    case 13:
      value = "K";
      break;
    default:
      value = card.value;
  }

  return value + suite;
}

//* Uppgift 5
let suits = ["HEARTS", "SPADES", "DIAMONDS", "CLUBS"];
let deck = [];
for (const suit of suits) {
  for (value = 1; value <= 13; value++) {
    deck.push({ suit: suit, value: value });
  }
}

//* Uppgift 6
function createDeck() {
  let suits = ["HEARTS", "SPADES", "DIAMONDS", "CLUBS"];
  let deck = [];
  for (const suit of suits) {
    for (value = 1; value <= 13; value++) {
      deck.push({ suit: suit, value: value });
    }
  }
  return deck;
}

//* Uppgift 7
function draw(deck) {
  return deck.pop();
}

//* Uppgift 8
function shuffle(deck) {
  for (let currentCard = 0; currentCard < deck.length; currentCard++) {
    let swapCard = Math.floor(Math.random() * (deck.length - 1 - currentCard + 1)) + currentCard;
    console.log(currentCard, swapCard);
    console.log(`Swapped ${prettyCard(deck[currentCard])} with ${prettyCard(deck[swapCard])})`);
    [deck[currentCard], deck[swapCard]] = [deck[swapCard], deck[currentCard]];
  }
}

function compare(deck, shuffled) {
  for (let cardIndex = 0; cardIndex < deck.length; cardIndex++) {
    console.log(prettyCard(deck[cardIndex]), prettyCard(shuffled[cardIndex]));
  }
}

//* Uppgift 9
function score(hand) {
  // Addera alla kortens värden
  // om något av korten är ess, kolla om totala värdet + 11 > 21, ge då ess värdet 1
  let value = 0;
  for (const card of hand) {
    card.value = card.value > 10 ? 10 : card.value;
    value += card.value === 1 ? 11 : card.value;
  }
  return value;
}

//* Uppgift 10
function score(hand) {
  let value = 0;
  // Change jack, queen and king value to 10 and push to handArray
  for (const card of hand) {
    card.value = card.value > 10 ? 10 : card.value; // Sets J, Q & Kings value to 10
    value += card.value === 1 ? 11 : card.value;
  }
  
  for (const card of hand) {
    value -= card.value === 1 && value > 21 ? 10 : 0;
  }
  return value;
}

score([
  { suite: "HEART", value: 10 },
  { suite: "HEART", value: 1 },
  { suite: "HEART", value: 1 },
  { suite: "HEART", value: 1 },
]);
// score([
//   { suite: "HEART", value: 11 },
//   { suite: "HEART", value: 1 },
// ]);
