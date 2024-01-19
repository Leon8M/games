const aiChoiceDisplay = document.getElementById('ai-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultGive = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
function generateComputerChoice() {
    const randomNumber = Math.floor( Math.random() * possibleChoices.length ) + 1// or use 3
    
    if (randomNumber === 1) {
        computerChoice  = 'rock'
    }else if(randomNumber === 2){
        computerChoice = 'paper'
    }else{
        computerChoice = 'scissors'
    }
    aiChoiceDisplay.innerHTML = computerChoice
}
function getResult(){
    if (computerChoice === userChoice){
        result = "Draw"
    }else if (computerChoice ===  'rock' && userChoice === 'paper'){
        result = "You win"
    }else if (computerChoice === 'rock' && userChoice === 'scissors'){
        result = "You lost"
    }else if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = "You win"
    }else if (computerChoice === 'paper' && userChoice === 'rock'){
        result = "You lost"
    }else if (computerChoice === 'scissors' && userChoice === 'rock'){
        result = "You win"
    }else if (computerChoice === 'scissors' && userChoice === 'paper'){
        result = "You lost"
    }
    resultGive.innerHTML = result
}