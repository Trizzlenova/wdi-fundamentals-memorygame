var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

// var cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);

// var cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);



var checkForMatch = function() {
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  } else {
    alert("Sorry, try again")
  }
}

var flipCard = function(cardId) {
  cardsInPlay.push(cards[cardId]);
  console.log("User flipped " + cards[cardId]);
  if(cardsInPlay.length === 2){
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);
