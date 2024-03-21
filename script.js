const choices = ['rock', 'paper', 'scissors'];
        let computerChoice
        let getPlayerChoice
        let playerChoice
        function setChoices() {

            function getComputerChoice() {
                let choice = () => {
                    let randomChoiceIndex = Math.floor((Math.random() * choices.length))
                    return choices[randomChoiceIndex]
                }
                return choice()
            }

            computerChoice = getComputerChoice()
            getPlayerChoice = prompt("Choose! Rock, Paper or Scissors").toLowerCase()
            playerChoice = getPlayerChoice
        }

        const gameRounds = 5
        function playGame() {
            let computerWin = 0;
            let playerWin = 0;
            function playRound(me, computer) {
                me = playerChoice
                computer = computerChoice

                if (me === 'rock' && computer === 'paper') {
                    alert("Paper beats rock! You lose")
                    computerWin++
                }
                if (me === 'paper' && computer === 'rock') {
                    alert("Paper beats rock! You win")
                    playerWin++
                }
                if (me === 'rock' && computer === 'scissors') {
                    alert("Rock beats scissors! You win")
                    playerWin++
                }
                if (me === 'scissors' && computer === 'rock') {
                    alert("Rock beats scissors! You lose")
                    computerWin++
                }
                if (me === 'paper' && computer === 'scissors') {
                    alert("Scissors beats paper! You lose")
                    computerWin++
                }
                if (me === 'scissors' && computer === 'paper') {
                    alert("Scissors beats paper! You win")
                    playerWin++
                }
            }
            for (let i = 0; i <= gameRounds; i++) {
                setChoices();
                playRound();
            }
            alert("YOU HAVE PLAYED FIVE GAMES!")
            if (playerWin > computerWin) {
                alert("YOU WIN THE GAME")
            }
            else { alert("COMPUTER WINS THE GAME") }
        }
        //playGame()