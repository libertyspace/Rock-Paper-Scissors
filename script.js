function computerPlay (min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    let x = Math.floor(Math.random()*(max - min + 1)) + min;
    console.log(x);
    if (x == 0) {
        return "rock";
    } else if (x == 1) {
        return "paper";
    } else if (x == 2) {
        return "scissor";
    }

}
function playerPlay(){
    let playerPlayed = prompt("Please type in your decision. Rock, Paper, Scissors and press Enter.");
    playerPlayed = playerPlayed.toLowerCase();
    if(playerPlayed == "rock") {
        return "rock";
    } else if ((playerPlayed == "paper") || (playerPlayed == "papers" )) {
        return "paper";
    } else if ((playerPlayed == "scissor") || (playerPlayed == "scissors"))  {
        return "scissor";
    } else {
        return alert("I didn't understand that. Please make a choise between Rock, Paper or Scissors!")
    }
} 

function playRound(playerPlayed, computerPlayed) {
    if ((playerPlayed == "rock" && computerPlayed == "scissor") || (playerPlayed == "scissor" && computerPlayed == "paper") || (playerPlayed == "paper" && computerPlayed == "rock")) {
        return "player";
    } else if ((playerPlayed == "rock" &&  computerPlayed == "paper") || (playerPlayed == "scissor" && computerPlayed == "rock") || (playerPlayed == "paper" && computerPlayed == "scissor")) {
        return "computer";
    } else {
        return "even"
    }
}

function playGame () {
    let playerScore = 0;
    let computerScore = 0;
    console.log("Welcome to liberties Tic Tac Toe Game!");
    console.log("The one who wins more rounds wins!");
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i+1) + " !")
        let playerPlayed = playerPlay();
        let computerPlayed = computerPlay(0, 2);
        if (playerPlayed == undefined || computerPlayed == undefined) {
            i--;
            continue;
        }
        let wins = playRound(playerPlayed, computerPlayed);
        if (wins == "player") {
            playerScore++;
            console.log(`Player played: ${playerPlayed}\n Computer played: ${computerPlayed}\n Player wins this round!!! \n ***Scoreboard*** \n Player: ${playerScore}\n Computer: ${computerScore}`);
        } else if (wins == "computer") {
            computerScore++;
            console.log(`Player played: ${playerPlayed}\n Computer played: ${computerPlayed}\n Computer wins this round!!! \n ***Scoreboard*** \n Player: ${playerScore}\n Computer: ${computerScore}`);
        } else if (wins == "even") {
            computerScore++;
            playerScore++;
            console.log(`Player played: ${playerPlayed}\n Computer played: ${computerPlayed}\n Nobody wins this round! Both players get a point. \n ***Scoreboard*** \n Player: ${playerScore}\n Computer: ${computerScore}`);
        }
     }
     if (playerScore > computerScore) {
        console.log("You win!");
     } else if (playerScore < computerScore) {
         console.log("You lose!")
     } else {console.log("Its a Draw! Refresh to try again!")}
}


playGame();