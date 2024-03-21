let playerChoice;

const selectRock = document.querySelector("#rock");
selectRock.addEventListener("click", () => {
    playerChoice = "rock"
    playRound();
});

const selectPaper = document.querySelector("#paper");
selectPaper.addEventListener("click", () => {
    playerChoice = "paper"
    playRound();
});

const selectScissors = document.querySelector("#scissors");
selectScissors.addEventListener("click", () => {
    playerChoice = "scissors"
    playRound();
});

const roundResult = document.querySelector("#roundResult")
const body=document.querySelector("#body")
body.appendChild(roundResult)

const choices = ['rock', 'paper', 'scissors'];
let computerChoice
//let getPlayerChoice

//function setChoices() {

/* function getComputerChoice() {
    let choice = () => {
        let randomChoiceIndex = Math.floor((Math.random() * choices.length))
        return choices[randomChoiceIndex]
    }
    return choice()
} */

computerChoice = () => {
    let randomChoiceIndex = Math.floor((Math.random() * choices.length))
    return choices[randomChoiceIndex]
}

//getPlayerChoice = prompt("Choose! Rock, Paper or Scissors").toLowerCase()
//playerChoice = getPlayerChoice
//}

const gameRounds = 5
let computerWin = 0;
let playerWin = 0;

function playRound(me = playerChoice, computer = computerChoice()) {
    if (me === 'rock' && computer === 'paper') {
        roundResult.textContent = "Computer Wins!"
        computerWin++
    }
    if (me === 'paper' && computer === 'rock') {
        roundResult.textContent="Paper beats rock! You win"
        //alert("Paper beats rock! You win")
        playerWin++
    }
    if (me === 'rock' && computer === 'scissors') {
        roundResult.textContent="Rock beats scissors! You win"
        //alert("Rock beats scissors! You win")
        playerWin++
    }
    if (me === 'scissors' && computer === 'rock') {
        roundResult.textContent="Rock beats scissors! You lose"
        //alert("Rock beats scissors! You lose")
        computerWin++
    }
    if (me === 'paper' && computer === 'scissors') {
        roundResult.textContent="Scissors beats paper! You lose"
        //alert("Scissors beats paper! You lose")
        computerWin++
    }
    if (me === 'scissors' && computer === 'paper') {
        roundResult.textContent="Scissors beats paper! You win"
        //alert("Scissors beats paper! You win")
        playerWin++
    }
}

function playGame() {

    //playRound();
    for (let i = 0; i <= gameRounds; i++) {
        //setChoices();
        playRound();
    }
    alert("YOU HAVE PLAYED FIVE GAMES!")
    if (playerWin > computerWin) {
        alert("YOU WIN THE GAME")
    }
    else { alert("COMPUTER WINS THE GAME") }
}
//playGame()