console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[3];
//let cardThree = cards[2];
//let cardFour = cards[3];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
//cardsInPlay.push(cardThree);
//cardsInPlay.push(cardFour);

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
//console.log("User flipped " + cardThree);
//console.log("User flipped " + cardFour);

if (cardsInPlay.length === 2) {
} if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, try again");
}