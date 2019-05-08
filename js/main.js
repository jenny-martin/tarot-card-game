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



// function getRandom() {
//     return Math.floor(Math.random() * cards.length);    
//   }

 

//   document.getElementsByClassName("deck").onClick = function() {
//       var index = getRandom(cards.length);
//       var chosenCard = cards[cards.cardImage];

//       document.getElementsByClassName("card").innerHTML = '<img src="images/front/' + chosenCard.image + '.jpg"><p>' + chosenCard.name + '</p>';
//   };

  //flipcard function ideas-----------------------



//const flipCard = function() {
    //     this.getAttribute('data-id');
    //     this.setAttribute('src', cards.cardImage);
    //     chosenCard.push(cards.cardImage);
    //     console.log("User flipped " + cards.cardImage);
    //     };

    //   function flipCard() {
    // $('.card').toggleClass("flip");  
    // }

// console.log("User flipped " + cards[index].cardName);
// console.log(cards[index].cardImage);
// pickedCards.push(cards[index].cardName);



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