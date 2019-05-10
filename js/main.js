
var pastCard = document.getElementById('past');
var presentCard = document.getElementById('present');
var futureCard = document.getElementById('future');
pastCard.addEventListener('click', flipCard1);
presentCard.addEventListener('click', flipCard2);
futureCard.addEventListener('click', flipCard3);




var cards = [
    {
        cardName: 'The Fool',
        cardImage: "images/front/thefool.jpg",
    },
    {
        cardName: 'The Magician',
        cardImage: "images/front/themagician.jpg",
    },
    {
        cardName: 'The Empress',
        cardImage: "images/front/theempress.jpg",
    },
    {
        cardName: 'The Emperor',
        cardImage: "images/front/theemporer.jpg",
    }
];

const newArray = [];


//this works fine and hides the cards and button to deal again
// $('section').hide();
// // $('button').hide();


// // //didn't work to display the section
// $('#deck').on('click', event => {
//     $('section').show();
// }); 



function newArrayCards() {
    pastCard = newArray[0];
    presentCard = newArray[1];
    futureCard = newArray[2];
}

function shuffle(cards) {
    let newPosition,
        temp;

    for (var i = cards.length - 1; i > 0; i--) {
        newPosition = Math.floor(Math.random() * (i + 1));
        temp = cards[i];
        cards[i] = cards[newPosition];
        cards[newPosition] = temp;
        newArray.push(cards[0]);
        newArray.push(cards[1]);
        newArray.push(cards[2]);
        newArrayCards();

    }
    return cards;
}

console.log(shuffle(cards));

function flipCard1() {
    document.getElementById("past").innerHTML = '<img src="' + pastCard.cardImage + '">';
    pastCard.style.height = "300px";
    pastCard.style.width = "222px";
    pastCard.style.backgroundPosition = "center";
    pastCard.style.backgroundSize = "cover";

    console.log("user flipped " + pastCard.cardName + " " + pastCard.cardImage);
};


function flipCard2() {

    document.getElementById("present").innerHTML = '<img src="' + presentCard.cardImage + '">';
    presentCard.style.height = "300px";
    presentCard.style.width = "222px";
    presenttCard.style.backgroundPosition = "center";
    presenttCard.style.backgroundSize = "cover";

    console.log("User flipped " + presentCard.cardName + " " + presentCard.cardImage);
};

function flipCard3() {

    document.getElementById("future").innerHTML = '<img src="' + futureCard.cardImage + '">';
    futureCard.style.height = "300px";
    futureCard.style.width = "222px";
    futureCard.style.backgroundPosition = "center";
    futureCard.style.backgroundSize = "cover";
    console.log("User flipped " + futureCard.cardName + " " + futureCard.cardImage);
};
