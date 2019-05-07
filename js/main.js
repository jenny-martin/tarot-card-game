/*----- constants -----*/ 
// const cards = ["The Fool", "Magician", "High Priestess", "The Empress", "The Emperor"];

const cards = [
    {
    cardName: 'The Fool',
    cardImage: "https://i.imgur.com/WO2zYYY.jpg",
},
{
    cardName: 'The Magician',
    cardImage: "https://i.imgur.com/yGnfblM.jpg",
},
{
    cardName: 'The Empress',
    cardImage: "https://i.imgur.com/Vu5SR2Y.jpg",
},
{
    cardName: 'The Emporer',
    cardImage: "https://i.imgur.com/yq8mv76.jpg",
}
];

const pickedCards = [];



/*----- app's state (variables) -----*/ 



/*----- cached element references -----*/ 



/*----- event listeners -----*/ 

cards.forEach(card => card.addEventListener('click', flipCard));


/*----- functions -----*/



const createBoard = function() {
    let theBoard = document.getElementById("the-board");
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        theBoard.appendChild(cardElement);
    }
}


const flipCard = function(cards) {
console.log("User flipped " + cards.cardName);
console.log(cards.cardImage);
pickedCards.push(cards.cardName);
}

createBoard();

// flipCard(cards[0]);
// flipCard(cards[2]);