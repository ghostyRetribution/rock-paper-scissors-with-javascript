// rock-paper-scissors game between a human and computer.
// and there are two score variables, one for each of them.
// for the computer to pick a move, a random number between 0 and 2 is chosen.
// 0 is for rock, 1 is for paper, and 2 is for scissors.
// the player move is taken using prompt().
// score will be added to the score variable of the player who wins
// by comparing the moves of the human and the computer.

const randomNumber = Math.floor(Math.random()* 3);
const humanMove = prompt('Please enter a move: ').toLowerCase();
if (humanMove !== 'rock' && humanMove !== 'paper' && humanMove !== 'scissor') {
    alert('Please enter a valid move')
} 

function computerMoveLogic() {
    let computerMove = undefined;
    if (randomNumber === 0) 
        computerMove = 'rock'
    else if (randomNumber === 1) 
        computerMove = 'paper'
    else 
        computerMove = 'scissors'
    return computerMove;
}

