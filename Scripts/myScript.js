let playerScore = 0;
let computerScore = 0;
let turn = 1;
let playerSelection = "";

const buttons = document.querySelectorAll("button");
const showTurn = document.querySelector("#showTurn");
const showScore = document.querySelector("#showScore");
const showResult = document.querySelector("#showResult");
const showFinalResult = document.querySelector("#showFinalResult");

displayTurn();
displayScore();

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});

function displayTurn(){
    showTurn.textContent = ("Turn = " + turn);
};

function displayScore(){
    showScore.textContent = ("SCORE: Player = " + playerScore + ", Computer = " + computerScore);
};

function computerPlay() {
    const movesArray = ["Rock","Paper","Scissors"];
    return computerSelection = movesArray[Math.floor(Math.random() * movesArray.length)];
};

function playerPlay(e){
    playerSelection = e.target.id;
};

function scoreComputation () { 

    turn++;
    
    if (playerSelection == "Rock" && computerSelection == "Paper") {
    ++computerScore;
    showResult.textContent = ("You lose! Paper beats Rock.");
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
    ++playerScore;
    showResult.textContent =  ("You win! Rock beats Scissors.");
    }
    else if (playerSelection == "Rock" && computerSelection == "Rock") {
    showResult.textContent =  ("Draw!");
    }

    else if (playerSelection == "Paper" && computerSelection == "Rock") {
    ++playerScore;
    showResult.textContent =  ("You win! Paper beats Rock.");
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
    ++computerScore;
    showResult.textContent =  ("You lose! Scissors beats Paper.");
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
    showResult.textContent =  ("Draw!")
    }

    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
    ++computerScore;
    showResult.textContent =  ("You lose! Rock beats Scissors.");
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
    ++playerScore;
    showResult.textContent =  ("You win! Scissors beats Paper.");
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    showResult.textContent =  ("Draw!")
    };

    if ((playerScore >=5) || (computerScore >=5)){
        if (playerScore > computerScore) {
            showFinalResult.textContent = "You won over computer!";
            } else  {
            showFinalResult.textContent = "Computer won.";
            };
        };
    
    displayScore();
}

function playRound(e) {      
   
    computerPlay();
    playerPlay(e);
    if ((playerScore < 5) && (computerScore < 5)) {
        scoreComputation();
        }
    displayTurn();
};




     


