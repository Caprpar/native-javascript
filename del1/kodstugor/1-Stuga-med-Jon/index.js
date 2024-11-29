let browser = {
  log: function (...args) {
    let parent = document.getElementById("log");
    let child = document.createElement("p");

    if (args.length > 1) {
      let array = "[";
      args.forEach((arg) => {
        array += `${arg}, `;
      });
      args = `${array}]`;
    }

    child.innerText = `>> ${args}`;
    parent.append(child);
    console.log(args);
    return args;
  },
};

// * Kodstuga med Jon
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

function draw(deck) {
  return deck.pop();
}

function shuffle(deck) {
  for (let currentCard = 0; currentCard < deck.length; currentCard++) {
    let swapCard = Math.floor(Math.random() * (deck.length - 1 - currentCard + 1)) + currentCard;
    [deck[currentCard], deck[swapCard]] = [deck[swapCard], deck[currentCard]];
  }
}

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

// for (let x = 0; x < 1000; x++) browser.log(x);
browser.log(1 + 2);
