
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
        cardName: 'Strength',
        cardImage: "images/front/strength.jpg",
    },
    {
        cardName: 'The Magician',
        cardImage: "images/front/themagician.jpg",
    },
    {
        cardName: 'Death',
        cardImage: "images/front/death.jpg",
    },
    {
        cardName: 'The Empress',
        cardImage: "images/front/theempress.jpg",
    },
    {
        cardName: 'The Emperor',
        cardImage: "images/front/theemporer.jpg",
    },
    {
        cardName: 'The Hanged Man',
        cardImage: "images/front/hangedman.jpg",
    },
    {
        cardName: 'The Hermit',
        cardImage: "images/front/hermit.jpg",
    },
    {
        cardName: 'The High Priestess',
        cardImage: "images/front/highpriestess.jpg",
    },
    {
        cardName: 'Justice',
        cardImage: "images/front/justice.jpg",
    },
    {
        cardName: 'The Wheel of Fortune',
        cardImage: "images/front/wheeloffortune.jpg",
    },
    {
        cardName: 'The Chariot',
        cardImage: "images/front/thechariot.jpg",
    },
    {
        cardName: 'The Heirophant',
        cardImage: "images/front/thehierophant.jpg",
    },
    {
        cardName: 'The Moon',
        cardImage: "images/front/moon.jpg",
    },
    {
        cardName: 'The Sun',
        cardImage: "images/front/sun.jpg",
    },
    {
        cardName: 'Judgement',
        cardImage: "images/front/judgement.jpg",
    },
    {
        cardName: 'The World',
        cardImage: "images/front/world.jpg",
    },
    {
        cardName: 'The Devil',
        cardImage: "images/front/devil.jpg",
    },
    {
        cardName: 'The Tower',
        cardImage: "images/front/tower.jpg",
    },
    {
        cardName: 'The Star',
        cardImage: "images/front/star.jpg",
    },
    {
        cardName: 'Temperance',
        cardImage: "images/front/temperance.jpg",
    }
];

const newArray = [];

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
        newArray.push(cards[3]);
        newArray.push(cards[4]);
        newArray.push(cards[5]);
        newArray.push(cards[6]);
        newArray.push(cards[7]);
        newArray.push(cards[8]);
        newArray.push(cards[9]);
        newArray.push(cards[10]);
        newArray.push(cards[11]);
        newArray.push(cards[12]);
        newArray.push(cards[13]);
        newArray.push(cards[14]);
        newArray.push(cards[15]);
        newArray.push(cards[16]);
        newArray.push(cards[17]);
        newArray.push(cards[18]);
        newArray.push(cards[19]);
        newArray.push(cards[20]);
        newArrayCards();

    }
    return cards;
}

console.log(shuffle(cards));

function flipCard1() {

    document.getElementById("past").innerHTML = '<img src="' + pastCard.cardImage + '">';
    pastCard.visibility = "visible";
    console.log("user flipped " + pastCard.cardName + " " + pastCard.cardImage);
};


function flipCard2() {

    document.getElementById("present").innerHTML = '<img src="' + presentCard.cardImage + '">';
    presentCard.visibility = "visible";
    console.log("User flipped " + presentCard.cardName + " " + presentCard.cardImage);
};

function flipCard3() {

    document.getElementById("future").innerHTML = '<img src="' + futureCard.cardImage + '">';
    futureCard.visibility = "visible";
    console.log("User flipped " + futureCard.cardName + " " + futureCard.cardImage);
};



function getAnotherReading() {
    window.location.reload(true);
};

