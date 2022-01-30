function computerPlay (min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    let x = Math.floor(Math.random()*(max - min + 1)) + min;
    if (x == 0) {
        return "rock";
    } else if (x == 1) {
        return "paper";
    } else if (x == 2) {
        return "scissor";
    }

}
function playerSelection(e){
    playerPlayed = e.target.id; 
    return playerPlayed;
};


function playRound(playerPlayed, computerPlayed) {
    
    if ((playerPlayed == "rock" && computerPlayed == "scissor") || 
        (playerPlayed == "scissor" && computerPlayed == "paper") || 
        (playerPlayed == "paper" && computerPlayed == "rock")) {
        alert("player")
        return "player";
    } else if ((playerPlayed == "rock" &&  computerPlayed == "paper") || 
                (playerPlayed == "scissor" && computerPlayed == "rock") || 
                (playerPlayed == "paper" && computerPlayed == "scissor")) {
        return "computer";
    } else {
        return "even"
    }
}

async function clickButton () {
    let playerClicked = new Promise( (resolve) => {
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                resolve: (e.target.id);
            });
        });
        
    });
    document.getElementsByClassName("buttons").innerHTML = await playerClicked;
    consolelog(playerClicked);
    return playerClicked;
};

function playGame (playerPlayed) {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome to liberties Tic Tac Toe Game!");
    console.log("The one who wins more rounds wins!");
    let playerName = "Mato";
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i+1) + "!")
        
        
        
        
        
        const computerPlayed = computerPlay(0,2);
        if (playerPlayed == undefined || computerPlayed == undefined) {
            i--;
            break;
        }
        let wins = playRound(playerPlayed, computerPlayed);
        if (wins == "player") {
            playerScore++;
            console.log(`${playerName} played: ${playerPlayed}\nComputer played: ${computerPlayed}\n${playerName} wins this round!!! \n***Scoreboard*** \n${playerName}: ${playerScore}\nComputer: ${computerScore}`);
        } else if (wins == "computer") {
            computerScore++;
            console.log(`${playerName} played: ${playerPlayed}\nComputer played: ${computerPlayed}\nComputer wins this round!!! \n***Scoreboard*** \n${playerName}: ${playerScore}\nComputer: ${computerScore}`);
        } else if (wins == "even") {
            console.log(`${playerName} played: ${playerPlayed}\nComputer played: ${computerPlayed}\nNobody wins this round! \n***Scoreboard*** \n${playerName}: ${playerScore}\nComputer: ${computerScore}`);
        };
        if ((playerScore == 3) || (computerScore == 3)) {
            break;
        };
     };
     if (playerScore > computerScore) {
        console.log("You win!");
     } else if (playerScore < computerScore) {
         console.log("You lose!")
     } else {console.log("Its a Draw! Refresh to try again!")}
};

function updateScore (wins) {
    if (wins == "player") {
        playerScore++;
        console.log(`${playerName} played: ${playerPlayed}\nComputer played: ${computerPlayed}\n${playerName} wins this round!!! \n***Scoreboard*** \n${playerName}: ${playerScore}\nComputer: ${computerScore}`);
    } else if (wins == "computer") {
        computerScore++;
        console.log(`${playerName} played: ${playerPlayed}\nComputer played: ${computerPlayed}\nComputer wins this round!!! \n***Scoreboard*** \n${playerName}: ${playerScore}\nComputer: ${computerScore}`);
    } else if (wins == "even") {
        console.log(`${playerName} played: ${playerPlayed}\nComputer played: ${computerPlayed}\nNobody wins this round! \n***Scoreboard*** \n${playerName}: ${playerScore}\nComputer: ${computerScore}`);
    };
}


const gameContainer = document.querySelector('#gameContainer');


const introText = document.createElement('p');
introText.classList.add('gameProgress');
introText.textContent = (`Welcome to liberties "Rock, Paper, Scissors" Game!`);


gameContainer.appendChild(introText);

// playGame();
let wins;
let playerName = "Mato";
let playerScore = 0;
let computerScore = 0;
let playerPlayed;
let computerPlayed;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
        playerPlayed = e.target.id;
        let computerPlayed = computerPlay(0,2);
        console.log(computerPlayed);
        wins = playRound(playerPlayed, computerPlayed);
        updateScore(wins);
        console.log(playerScore);
        console.log(computerScore);
        alert(`${wins} won this round`);
        alert(playerPlayed);
    
    });
    
});









