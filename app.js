/* eslint-disable no-console */
import getRandomThrow from './get-random-throw.js';
import checkResult from './check-result.js';

let numberOfWins = 0;
let numberOfLosses = 0;
let numberOfDraws = 0;

const myButton = document.getElementById('button');

const updateSpans = () => {
    winSpan.textContent = numberOfWins;
    loseSpan.textContent = numberOfLosses;
    drawSpan.textContent = numberOfDraws;
};

const winSpan = document.getElementById('win');
const loseSpan = document.getElementById('lose');
const drawSpan = document.getElementById('draw');

myButton.onclick = () => { 
    const playerChoice = document.querySelector('input:checked').value;

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerChoice = getRandomThrow(randomNumber);
    // if (computerChoice === 'rock') {
        // .removeClass('hidden');
    // } if (computerChoice === 'paper') {
        // .removeClass('hidden2');
    // } if (computerChoice === 'scissors') {
        // .removeClass('hidden3');
    // } 


    let result = checkResult(playerChoice, computerChoice);

    if (result === 'win') {
        numberOfWins ++;
        console.log('win');
        console.log(computerChoice);
        console.log(playerChoice);
    } else if (result === 'lose') {
        numberOfLosses ++;
        console.log('lose');
        console.log(computerChoice);
        console.log(playerChoice);
    } else {
        numberOfDraws ++;
        console.log('draw');
        console.log(computerChoice);
        console.log(playerChoice);
    } 
    updateSpans();
};



//const summarySpan = document.getElementById('summary');
//const resetButton = document.getElementById('reset-button');






myButton.addEventListener('click', checkResult);

