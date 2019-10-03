import getRandomThrow from './get-random-throw.js';
import checkResult from './check-result.js';

const myButton = document.getElementById('button');


myButton.onclick = () => { 
    const playerChoice = document.querySelector('input:checked').value;

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerChoice = getRandomThrow(randomNumber);

    let result = checkResult(playerChoice, computerChoice);

    if (result === 'win') {
        console.log('win');
        console.log(computerChoice)
        console.log(playerChoice)
    } else if (result ==='lose') {
        console.log('lose');
        console.log(computerChoice)
        console.log(playerChoice)
    } else {
        console.log('draw');
        console.log(computerChoice)
        console.log(playerChoice)
    } 
}



   

// const winSpan = document.getElementById('win');
// const loseSpan = document.getElementById('lose');
// const drawSpan = document.getElementById('draw');
//const summarySpan = document.getElementById('summary');
//const resetButton = document.getElementById('reset-button');

// let numberOfWins = 0;
// let numberOfLosses = 0;
// let numberOfDraws = 0;

//const updateSpans = () => {
//    winSpan.textContent = numberOfWins;
//    loseSpan.textContent = numberOfLosses;
    // drawSpan.textContent = numberOfDraws;
// }


myButton.addEventListener('click', checkResult);

