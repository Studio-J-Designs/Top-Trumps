var cards = [
  {
    name: "a",
    attack: 1,
    defend: 12,
  },
  {
    name: "b",
    attack: 2,
    defend: 11,
  },
  {
    name: "c",
    attack: 3,
    defend: 10,
  },
  {
    name: "d",
    attack: 4,
    defend: 9,
  },
  {
    name: "e",
    attack: 5,
    defend: 8,
  },
  {
    name: "f",
    attack: 6,
    defend: 7,
  },
  {
    name: "g",
    attack: 7,
    defend: 6,
  },
  {
    name: "h",
    attack: 8,
    defend: 5,
  },
  {
    name: "i",
    attack: 9,
    defend: 4,
  },
  {
    name: "j",
    attack: 10,
    defend: 3,
  },
  {
    name: "k",
    attack: 11,
    defend: 2,
  },
  {
    name: "l",
    attack: 12,
    defend: 1,
  },
];

var addCards = [];
var shuffle = [];
var p1Deck = [];

for (var i = 0; i < cards.length; i++) {
  addCards.push(cards[i].name);
  console.log(addCards);
};

// function shuffle(){
  for (var i = 0; i < addCards.length; i++) {
    p1Deck.push(addCards[Math.floor(Math.random() * (addCards.length - 1))]);
  };
  console.log(p1Deck);
// };
//
// shuffle();
