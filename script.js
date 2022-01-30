// Computer chooses randomly between Rock, Paper & Scissors

function computerPlay (min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    let x = Math.floor(Math.random()*(max - min + 1)) + min;
    if (x == 0) {

        return "rock";

    } else if (x == 1) {

        return "paper";

    } else if (x == 2) {        
        return "scissors";
    };
        
};


// playRound determines who won the Round!

function playRound(playerPlayed, computerPlayed) {
    
    if ((playerPlayed == "rock" && computerPlayed == "scissors") || 
        (playerPlayed == "scissors" && computerPlayed == "paper") || 
        (playerPlayed == "paper" && computerPlayed == "rock")) {

        return "player";

    } else if ((playerPlayed == "rock" &&  computerPlayed == "paper") || 
                (playerPlayed == "scissors" && computerPlayed == "rock") || 
                (playerPlayed == "paper" && computerPlayed == "scissors")) {

        return "computer";

    } else {
        return "even"
    };
};

// Updates the Player/Computer Name and Score

function wirteToScore () {
    gameBarTextPlayer.textContent = `${playerName}`
    gameBarScorePlayer.textContent = `${playerScore}`;
    gameBarTextComputer.textContent = `RODRIGO`;
    gameBarScoresComputer.textContent = `${computerScore}`;
};

// Updates the Scoreboard

function updateScore (wins) {
    
    

    if (wins == "player") {
        
        playerScore++;
        wirteToScore ();

    } else if (wins == "computer") {

        computerScore++;
        wirteToScore ();

    } else if (wins == "even") {

        wirteToScore ();

    };

};

// Shows us what was played from the player and computer

function updateSign (playerPlayed, computerPlayed) {
    if (playerPlayed === "rock") {
        gameBarSignPlayer.textContent = "🤜";
    } else if (playerPlayed === "paper") {
        gameBarSignPlayer.textContent = "🤚";
    } else {
        gameBarSignPlayer.textContent = "✄"
    }
    if (computerPlayed === "rock") {
        gameBarSignComputer.textContent = "🤜";
    } else if (computerPlayed === "paper") {
        gameBarSignComputer.textContent = "🤚";
    } else {
        gameBarSignComputer.textContent = "✄"
    }
}

// Updates Textarea

function updateTextArea (){
    if ((playerPlayed == "rock" && computerPlayed == "scissors") ||
    (playerPlayed == "scissors" && computerPlayed == "rock" )) {

        introText.textContent = `Stein schleift Schere. `;
        console.log(playerPlayed);

    } else if ((playerPlayed == "paper" && computerPlayed == "rock") ||
    (playerPlayed == "rock" && computerPlayed == "paper" )) {

        introText.textContent = `Papier umwickelt den Stein!`;
        console.log(playerPlayed);

    } else if ((playerPlayed == "scissors" && computerPlayed == "paper") ||
    (playerPlayed == "paper" && computerPlayed == "scissors" )) {

        introText.textContent = `Schere schneidet Papier. `;
        console.log(playerPlayed);
    } else {
        introText.textContent = `Beide gleiches gespielt. Nochmal!`
        console.log(playerPlayed);
    }
};

function isWinner() {
    if (playerScore === 5){
        introText.textContent = `Glückwunsch. Du hast Rodrigo besiegt! Probiere es nochmal.`;
    } else if (computerScore === 5){
        introText.textContent = `Schade. Du hast gegen Rodrigo verloren! Probiere es nochmal.`;
    };
};

function newGame() {

};


let wins;
let playerScore = 0;
let computerScore = 0;
let playerPlayed;
let computerPlayed;
let playerName = prompt("Wie heißt du?");


const body = document.querySelector("#pageFlex");
const gameBar = document.querySelector("#gameBar");
const gameBarSigns = document.querySelector("#signs");
const gameBarNames = document.querySelector("#names");
const gameBarScores = document.querySelector("#scores");
const textArea = document.querySelector('#textArea');


const introText = document.createElement('p');
const butIWill = document.createElement('p');
const gameBarTextPlayer = document.createElement("p");
const gameBarTextComputer = document.createElement("p");
const gameBarSignPlayer = document.createElement("p");
const gameBarSignComputer = document.createElement("p");
const gameBarScorePlayer = document.createElement("p");
const gameBarScoresComputer = document.createElement("p");


gameBarSignPlayer.className = "pics";
gameBarSignPlayer.textContent = "?";
// gameBarSignPlayer.classList.add("gap");

gameBarSignComputer.className = "pics";
gameBarSignComputer.textContent = "?";
// gameBarSignComputer.classList.add("gap");

gameBarTextPlayer.textContent = `${playerName}`;
gameBarTextPlayer.classList.add("gloria");
gameBarTextPlayer.id = "playerName";

gameBarTextComputer.textContent = `RODRIGO`;
gameBarTextComputer.id = "computerName";
gameBarTextComputer.classList.add("rodrigo");
// gameBarTextComputer.classList.add("gap");


gameBarScorePlayer.textContent = `${playerScore}`;
// gameBarScorePlayer.classList.add("gap");

gameBarScoresComputer.textContent = `${computerScore}`;
// gameBarScoresComputer.classList.add("gap");


body.appendChild(gameBar);
gameBarNames.appendChild(gameBarTextPlayer);
gameBarNames.appendChild(gameBarTextComputer);
gameBarSigns.appendChild(gameBarSignPlayer);
gameBarSigns.appendChild(gameBarSignComputer);
gameBarScores.appendChild(gameBarScorePlayer);
gameBarScores.appendChild(gameBarScoresComputer);
textArea.appendChild(introText);
introText.appendChild(butIWill);





introText.classList.add('gameProgress');
introText.textContent = (`Wähle einen Zeichen aus!`);


butIWill.classList.add("gameProgress");
butIWill.textContent = (`But I will still let you play a game of 🤜 Rock, 🤚 Paper and ✄ Scissors!`);


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (playerScore == 5 || computerScore == 5) {
            
            // newGame();
        } else {
            playerPlayed = e.target.id;
        computerPlayed = computerPlay(0, 2);
        updateSign(playerPlayed, computerPlayed);
        wins = playRound(playerPlayed, computerPlayed);
        updateScore(wins);
        
        updateTextArea();
        isWinner();
        }
    });
    
    
});

