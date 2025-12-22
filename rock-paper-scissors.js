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

rockBtn.addEventListener('click', () => {
    playGame('rock', computerMove());
});
paperBtn.addEventListener('click', () => {
    playGame('paper', computerMove());
});
scissorsBtn.addEventListener('click', () => {
    playGame('scissors', computerMove());
});

function playGame(humanMove, computerMove) {
    if (humanMove === computerMove) {
        console.log(`You chose ${humanMove}. Computer chose ${computerMove}. Tie. User Score: ${humanScore}, Computer Score: ${computerScore}`);
    } else if (humanMove === 'rock') {
        if (computerMove === 'paper') {
            computerScore++;
            console.log(`You chose ${humanMove}. Computer chose ${computerMove}. You lose. User Score: ${humanScore}, Computer Score: ${computerScore}`);
        } else {
            humanScore++;
            console.log(`You chose ${humanMove}. Computer chose ${computerMove}. You win. User Score: ${humanScore}, Computer Score: ${computerScore}`);
        }
    } else if (humanMove === 'paper') {
        if (computerMove === 'rock') {
            humanScore++;
            console.log(`You chose ${humanMove}. Computer chose ${computerMove}. You win. User Score: ${humanScore}, Computer Score: ${computerScore}`);
        } else {
            computerScore++;
            console.log(`You chose ${humanMove}. Computer chose ${computerMove}. You lose. User Score: ${humanScore}, Computer Score: ${computerScore}`);
    }
    } else if (humanMove === 'scissors') {
        if (computerMove === 'rock') {
            computerScore++;
            console.log(`You chose ${humanMove}. Computer chose ${computerMove}. You lose. User Score: ${humanScore}, Computer Score: ${computerScore}`);
        } else if (computerMove === 'paper') {
            humanScore++;
            console.log(`You chose ${humanMove}. Computer chose ${computerMove}. You win. User Score: ${humanScore}, Computer Score: ${computerScore}`);
        } 
    }
}
