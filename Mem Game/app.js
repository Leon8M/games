const cardArray = [
{
    name: 'fries',
    img: 'images/fries.png'
},
{
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
},
{
    name: 'hotdog',
    img: 'images/hotdog.png'
},
{
    name: 'ice-cream',
    img: 'images/ice-cream.png'
},
{
    name: 'milkshake',
    img: 'images/milkshake.png'
},
{
    name: 'pizza',
    img: 'images/pizza.png'
},
{
    name: 'fries',
    img: 'images/fries.png'
},
{
    name: 'cheeseburger',
    img: 'images/cheeseburger.png'
},
{
    name: 'hotdog',
    img: 'images/hotdog.png'
},
{
    name: 'ice-cream',
    img: 'images/ice-cream.png'
},
{
    name: 'milkshake',
    img: 'images/milkshake.png'
},
{
    name: 'pizza',
    img: 'images/pizza.png'
}

]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay  = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard(){
    for( let i = 0; i < cardArray.length; i++){
       const card =  document.createElement('img')
       card.setAttribute('src', 'images/blank.png')
       card.setAttribute('data-id', i)
       card.addEventListener('click', flipCard)
       gridDisplay.appendChild(card)
    }

}
createBoard();
function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    console.log(cards);
    console.log('check match');
    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert ('You clicked same image')
    } else if( cardsChosen[0] == cardsChosen[1]){
    alert ('That is a match')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Try again')
    }
    cardsChosen = []
    cardsChosenIds = [] 
    resultDisplay.textContent = cardsWon.length
   
    if (cardsWon.length == cardArray.length/2)  {
        resultDisplay.textContent = 'Congrats, You found them all'
    }
}

function flipCard(){
   let carsId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[carsId].name)
  cardsChosenIds.push(carsId)
  console.log(cardsChosen);
  console.log(cardsChosenIds);
   this.setAttribute('src', cardArray[carsId].img)
   if (cardsChosen.length === 2) {
    setTimeout ( checkMatch, 500)
   }
}




