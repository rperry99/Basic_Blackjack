const PROJECT = "[Blackjack]";

// Create the deck of cards and shuffle it.
let deck = [];
let values = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
let suits = ["spade", "heart", "diamond", "club"];

for (let value in values) {
    for (let suit in suits) {
        let tempArr = [values[value], suits[suit]];
        deck.push(tempArr);
    }
}

shuffleDeck(deck);

// Functionality for the "Draw Card" button
const dealButton = document.querySelector(".deal");

dealButton.addEventListener("click", () => {
    // Grab the top card from the deck
    // Remove the top card from the deck
    // Display the top card from the deck
})

// Function to shuffle the deck of cards using Fisher-Yates Shuffle (Knuth Shuffle);
function shuffleDeck(deckOfCards) {
    let currentIndex = deckOfCards.length;

    // While there are elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining card...
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [deckOfCards[currentIndex], deckOfCards[randomIndex]] = [deckOfCards[randomIndex], deckOfCards[currentIndex]];
    }
}
