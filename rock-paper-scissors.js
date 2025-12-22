// rock-paper-scissors game between a human and computer.
// and there are two score variables, one for each of them.
// for the computer to pick a move, a random number between 0 and 2 is chosen. 0 is for rock, 1 is for paper, and 2 is for scissors.
// the player move is taken using prompt().
// score will be added to their respective variables.

let humanScore = 0;
let computerScore = 0;

function computerMove() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return 'rock';
    else if (randomNumber === 1) return 'paper'; 
    else return 'scissors';
}

const rockBtn = document.querySelector('#rockBtn');
const paperBtn = document.querySelector('#paperBtn');
const scissorsBtn = document.querySelector('#scissorsBtn');
const container = document.querySelector('#container');
container.classList.add('container');

rockBtn.addEventListener('click', () => {
    playGame('rock', computerMove());
});
paperBtn.addEventListener('click', () => {
    playGame('paper', computerMove());
});
scissorsBtn.addEventListener('click', () => {
    playGame('scissors', computerMove());
});

function displayScore() {
    container.textContent = `Human Score: ${humanScore}
        \n Computer Score: ${computerScore}`;
}
displayScore()

function playGame(humanMove, computerMove) {
    if (humanMove === computerMove) {
        displayScore()
    } else if (humanMove === 'rock') {
        if (computerMove === 'paper') {
            computerScore++;
            displayScore()
        } else {
            humanScore++;
            displayScore()
        }
    } else if (humanMove === 'paper') {
        if (computerMove === 'rock') {
            humanScore++;
            displayScore()
        } else {
            computerScore++;
            displayScore()
    }
    } else if (humanMove === 'scissors') {
        if (computerMove === 'rock') {
            computerScore++;
            displayScore()
        } else if (computerMove === 'paper') {
            humanScore++;
            displayScore()
        } 
    }
    if (humanScore === 5) alert('You won!');
    if (computerScore === 5) alert('Computer won!')
}
