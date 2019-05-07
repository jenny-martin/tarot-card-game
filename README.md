#Title: Tarot Card Game

###Introduction: This tarot card generator will allow the user to receive a fun, quick, easy-to-use digital tarot reading.

##How to Play: 
* The user will see a deck of cards on the main page and will click on the deck of cards to deal out three randomly chosen cards from the deck. 

//will use array of numbers to represent cards to randomly generate 
//Click function to deal cards
//Math.random() to randomly select each card
//potentially a second linked array to hold the descriptions of each 
//card

```
var tarotCards = [1, 2, 3, 4, ...78]
;
```

```
function randomCardPicker() {
    return Math.floor(Math.random()*78);
}
```


* After the 3 cards have been chosen, they will appear face-down across the page. 

* The user will then click each card in order from left to right. 

* The first card represents the user's "past". When the user clicks this first card, it will flip over to reveal the card and artwork. 

* The user then clicks the second card to reveal user's "present", the card flips and displays the image. 

* The user clicks the third card to reveal the user's "future", this flips the card over and displays the image.

//Click function will be used to "flip" cards with setTimeOut() for 
//a small delay to create more anticipation and enhance user experience

* Once all cards have been flipped, the user may then reveal the meanings of each card. 

* After the reading is complete, there will be a form for feedback on whether or not they enjoyed the reading. And if not, to click the button for another reading. 

* The user will also have the choice to learn more about the cards chosen in their reading, the history of the tarot, more info about the creator and artwork in a separate page through clickable links.

####Stretch Goals

* to include fun sounds (background music) or animations (shuffling the deck)
* to include all 78 cards in the deck
* to offer the user the choice of multiple tarot spreads to choose from (ie - 1 Card/ 3 card/ Love Spread/ Career Spread/ Tree Of Life, etc.)

####Stretch Goals Future

* to eventually be able to loop through an API with all 78 cards in the deck
* to possibly offer the option of choosing from different decks/ artwork
* to offer the user the ability to login to their account, and save their readings to review again at a later date.

[wireframe-link](https://wireframe.cc/pro/edit/245136) 

link to game 
file:///Users/jennymartin/Fundamentals/code/tarot-card-game/index.html
