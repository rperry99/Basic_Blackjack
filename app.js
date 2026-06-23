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
const DEALBUTTON = document.querySelector(".deal");

DEALBUTTON.addEventListener("click", () => {
    // Grab the top card from the deck
    let currentCardValue = deck[0][0];
    let currentCardSuit = deck[0][1];

    // Remove the top card from the deck
    deck.shift();

    // Display the top card from the deck
    const CARD = document.querySelector(".card");
    const CARDSUIT_VALUE = document.querySelectorAll(".card__suit-value");
    const CARDSUIT_SUIT = document.querySelectorAll(".card__suit-suit img");
    const CARDVALUE = document.querySelector(".card__value");

    // Change the center card value;
    CARDVALUE.innerText = currentCardValue;

    // Change the value of the left and right values;
    CARDSUIT_VALUE.forEach((value, index) => {
        value.innerText = currentCardValue;
    })

    // Change the suit of the left and right values;
    CARDSUIT_SUIT.forEach((suit, index) => {
        suit.src = `assets/${currentCardSuit}.png`;
    })

    // Add corresponding color class to the card
    if ( currentCardSuit == "spade" || currentCardSuit == "club") {
        CARD.classList.add("black");
        CARD.classList.remove("red");
    } else if  ( currentCardSuit == "heart" || currentCardSuit == "diamond") {
        CARD.classList.remove("black");
        CARD.classList.add("red");
    }

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
