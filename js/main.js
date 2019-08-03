

var pastCard = document.getElementById('past');
var presentCard = document.getElementById('present');
var futureCard = document.getElementById('future');
pastCard.addEventListener("click", flipCard1);
presentCard.addEventListener("click", flipCard2);
futureCard.addEventListener("click", flipCard3);

var cardsArray = [
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
        cardImage: "images/front/thedevil.jpg",
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
cardsArray = shuffle(cardsArray);

function newArrayCards() {
    pastCard = cardsArray[0];
    presentCard = cardsArray[1];
    futureCard = cardsArray[2];
}

function shuffle(cardsArray) {
var currentPass = cardsArray.length;
var index, temp;

while (currentPass > 0) {
    index = Math.floor(Math.random() * currentPass);
    currentPass --;

    temp = cardsArray[currentPass];
    cardsArray[currentPass] = cardsArray[index];
    cardsArray[index] = temp;
    newArrayCards();
}
   return cardsArray;  
}

console.log(shuffle(cardsArray));
 
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

