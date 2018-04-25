var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

//Create a function to check to if the cards match
var checkForMatch = function() {
  if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  } else {
    alert("Sorry, try again")
  }
}

//This function will call each card then check for a match
var flipCard = function(cardId) {
  cardsInPlay.push(cards[cardId]);
  console.log("User flipped " + cards[cardId]);
  if(cardsInPlay.length === 2){
    checkForMatch();
  }
}

flipCard(0);
flipCard(2);
