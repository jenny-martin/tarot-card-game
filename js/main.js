/*----- constants -----*/ 



const cards = [
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






/*----- app's state (variables) -----*/ 



/*----- cached element references -----*/ 



/*----- event listeners -----*/ 




/*----- functions -----*/

//this works fine and hides the cards and button to deal again
// $('section').hide();
// $('button').hide();


// //didn't work to display the section
// $('#deck').on('click', event => {
//     $('section').show();
// }); 


//shuffles the cards
function shuffle(cards) {
    let newPosition,
        temp;

for(var i = cards.length - 1; i > 0; i--) {
    newPosition = Math.floor(Math.random() * (i + 1));
    temp = cards[i];
    cards[i] = cards[newPosition];
    cards[newPosition] = temp;
} 
return cards;
};

//selects 3 random cards from array and deals them facedown
function getRandom() {
    return Math.floor(Math.random() * cards.length);    
  }

const getReading = document.querySelector('.deck');

getReading.addEventListener('click', shuffle(cards));
console.log(cards);


//   document.getElementsByClassName("deck").onClick = function(shuffle,cards) {
//     console.log(shuffle(cards));

    //   let dealtCards = getRandom(cards.length) * 3;
    //   let index = this.getAttribute('data-id');
    //   let chosenCard = cards(cards.cardImage);

    //  document.getElementsByClassName("card").innerHTML = url('img src="images/back/');
//   };




  //flipcard function ideas-----------------------


// const flipCard = function() {
//         this.getAttribute('data-id');
//         this.setAttribute('src', cards.cardImage);
//         chosenCard.push(cards.cardImage);
//         console.log("User flipped " + cards.cardImage);
//         };

    

// console.log("User flipped " + cards.cardName);
// console.log(cards.cardImage);
// chosenCard.push(cards.cardName);



//this removes the card from the deck once it's been selected --------
//   $('.deck').click(function() {
//     picked.length = 0;
//     $(this).remove();
//     $('.card.flip').fadeIn();
//     flipCard();
//   });


//removes card from deck once used
//   var removeCard = function(k) {
// 	for (var j=k; j<cards.length; j++) {
// 		cards[j] = cards[j+1];	
// 	}
// 	cardsLeftToDeal--;
// 	cardsDealt++;
// };



//creates the game board --------------------------------------
// const createBoard = function() {
//     let theBoard = document.getElementById("the-board");
//     for (var i = 0; i < cards.length; i++) {
//         var cardElement = document.createElement('img');
//         cardElement.setAttribute('src', "images/back.png");
//         cardElement.setAttribute('data-id', i);
//         cardElement.addEventListener('click', flipCard);
//         theBoard.appendChild(cardElement);
//     }
// }


//createBoard();