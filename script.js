// Computer chooses randomly between Rock, Paper & Scissors

function computerPlay(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  let x = Math.floor(Math.random() * (max - min + 1)) + min;
  if (x == 0) {
    return "rock";
  } else if (x == 1) {
    return "paper";
  } else if (x == 2) {
    return "scissors";
  }
}

// playRound determines who won the Round!

function playRound(playerPlayed, computerPlayed) {
  if (
    (playerPlayed == "rock" && computerPlayed == "scissors") ||
    (playerPlayed == "scissors" && computerPlayed == "paper") ||
    (playerPlayed == "paper" && computerPlayed == "rock")
  ) {
    return "player";
  } else if (
    (playerPlayed == "rock" && computerPlayed == "paper") ||
    (playerPlayed == "scissors" && computerPlayed == "rock") ||
    (playerPlayed == "paper" && computerPlayed == "scissors")
  ) {
    return "computer";
  } else {
    return "even";
  }
}

// Updates the Player/Computer Name and Score

function wirteToScore() {
  gameBarTextPlayer.textContent = `${playerName}`;
  gameBarScorePlayer.textContent = `${playerScore}`;
  gameBarTextComputer.textContent = `RODRIGO`;
  gameBarScoresComputer.textContent = `${computerScore}`;
}

// Updates the Scoreboard

function updateScore(wins) {
  if (wins == "player") {
    playerScore++;
    paraMidText.textContent = `Die Runde geht an dich.`;
    wirteToScore();
  } else if (wins == "computer") {
    computerScore++;
    paraMidText.textContent = `Die Runde geht an Rodrigo.`;
    wirteToScore();
  } else if (wins == "even") {
    wirteToScore();
    paraMidText.textContent = `Unentschieden.`;
  }
}

// Shows us what was played from the player and computer

function updateSign(playerPlayed, computerPlayed) {
  if (playerPlayed === "rock") {
    gameBarSignPlayer.textContent = "🤜";

    document.getElementById("signs").style.transform = "rotate(0deg)";
  } else if (playerPlayed === "paper") {
    gameBarSignPlayer.textContent = "🤚";
    document.getElementById("signs").style.transform = "rotate(90deg)";
  } else if (playerPlayed === "scissors") {
    gameBarSignPlayer.textContent = "✌️";
    document.getElementById("signs").style.transform = "rotate(90deg)";
  }
  if (computerPlayed === "rock") {
    document.getElementById("signs2").style.transform = "rotate(180deg)";

    gameBarSignComputer.textContent = "🤜";
    gameBarSignComputer.classList.add("mirrored");
  } else if (computerPlayed === "paper") {
    gameBarSignComputer.textContent = "🤚";
    document.getElementById("signs2").style.transform = "rotate(-90deg)";
  } else if (computerPlayed === "scissors") {
    gameBarSignComputer.textContent = "✌️";
    document.getElementById("signs2").style.transform = "rotate(-90deg)";
  }
}

// Updates the Mid (X) div

function updateMid() {
  if (
    (playerPlayed === "rock" && computerPlayed === "paper") ||
    (playerPlayed === "paper" && computerPlayed === "scissors") ||
    (playerPlayed === "scissors" && computerPlayed === "rock")
  ) {
    midSign.textContent = "🙁";
  } else if (
    (playerPlayed === "paper" && computerPlayed === "rock") ||
    (playerPlayed === "scissors" && computerPlayed === "paper") ||
    (playerPlayed === "rock" && computerPlayed === "scissors")
  ) {
    midSign.textContent = "🙂";
  } else if (
    (playerPlayed === "rock" && computerPlayed === "rock") ||
    (playerPlayed === "paper" && computerPlayed === "paper") ||
    (playerPlayed === "scissors" && computerPlayed === "scissors")
  ) {
    midSign.textContent = "🙃";
  }
}

// Updates Textarea

function updateTextArea() {
  if (
    (playerPlayed == "rock" && computerPlayed == "scissors") ||
    (playerPlayed == "scissors" && computerPlayed == "rock")
  ) {
    introText.textContent = `Stein schleift Schere. `;
  } else if (
    (playerPlayed == "paper" && computerPlayed == "rock") ||
    (playerPlayed == "rock" && computerPlayed == "paper")
  ) {
    introText.textContent = `Papier umwickelt den Stein!`;
  } else if (
    (playerPlayed == "scissors" && computerPlayed == "paper") ||
    (playerPlayed == "paper" && computerPlayed == "scissors")
  ) {
    introText.textContent = `Schere schneidet Papier. `;
  } else {
    introText.textContent = `Beide gleiches gespielt. Nochmal!`;
  }
}

function isWinner() {
  if (playerScore === 5) {
    introText.textContent = `Glückwunsch. Du hast Rodrigo besiegt! Probiere es nochmal.`;
    midSign.textContent = "😄";
    paraMidText.textContent = `${playerName} siegt.`;
  } else if (computerScore === 5) {
    introText.textContent = `Schade. Du hast gegen Rodrigo verloren! Probiere es nochmal.`;
    midSign.textContent = "🤠";
    paraMidText.textContent = "Rodrigo siegt.";
  }
}

function newGame() {
  playerScore = 0;
  computerScore = 0;

  gameBarSignComputer.textContent = "?";
  gameBarSignPlayer.textContent = "?";
  gameBarScorePlayer.textContent = "0";
  gameBarScoresComputer.textContent = "0";
  document.getElementById("signs2").style.transform = "rotate(0deg)";
  document.getElementById("signs").style.transform = "rotate(0deg)";
  buttonNewGame.replaceWith(buttonsFooter);
  introText.textContent = `Neues Spiel!`;
  paraMidText.textContent = ``;
  midSign.textContent = "";
}

let wins;
let playerScore = 0;
let computerScore = 0;
let playerPlayed;
let computerPlayed;
let playerName = "Mato";

const body = document.querySelector("#pageFlex");
const gameBar = document.querySelector("#gameBar");
const gameBarSigns = document.querySelector(".signs");
const gameBarNames = document.querySelector(".names");
const gameBarScores = document.querySelector(".scores");
const textArea = document.querySelector("#textArea");
const gameBarTextPlayer = document.querySelector("#names");
const gameBarTextComputer = document.querySelector("#names2");
const gameBarSignPlayer = document.querySelector("#signs");
const gameBarSignComputer = document.querySelector("#signs2");
const gameBarScorePlayer = document.querySelector("#scores");
const gameBarScoresComputer = document.querySelector("#scores2");
const midSign = document.querySelector("#midSign");
const buttonsFooter = document.querySelector("#buttons");
const midText = document.querySelector("#mid-text");

const paraMidText = document.createElement("p");
const introText = document.createElement("p");
const butIWill = document.createElement("p");
const buttonNewGame = document.createElement("button");

gameBarSignPlayer.classList.add("playerSide");
gameBarSignPlayer.textContent = "?";

gameBarSignComputer.classList.add("computerSide");
gameBarSignComputer.textContent = "?";

gameBarTextPlayer.textContent = `${playerName}`;
gameBarTextPlayer.classList.add("gloria");
gameBarTextPlayer.id = "playerName";

gameBarTextComputer.textContent = `RODRIGO`;
gameBarTextComputer.id = "computerName";
gameBarTextComputer.classList.add("rodrigo");

gameBarScorePlayer.textContent = `${playerScore}`;

gameBarScoresComputer.textContent = `${computerScore}`;

buttonNewGame.id = "new-game-button";
buttonNewGame.textContent = "Neues Spiel!";

body.appendChild(gameBar);

textArea.appendChild(introText);
introText.appendChild(butIWill);

midText.appendChild(paraMidText);

introText.classList.add("gameProgress");
introText.textContent = `Wähle einen Zeichen aus!`;

butIWill.classList.add("gameProgress");
butIWill.textContent = `But I will still let you play a game of 🤜 Rock, 🤚 Paper and ✄ Scissors!`;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playerPlayed = e.target.id;
    computerPlayed = computerPlay(0, 2);
    updateSign(playerPlayed, computerPlayed);
    wins = playRound(playerPlayed, computerPlayed);
    updateScore(wins);
    updateMid(playerPlayed, computerPlayed);

    updateTextArea();
    isWinner();

    if (playerScore == 5 || computerScore == 5) {
      buttonsFooter.replaceWith(buttonNewGame);
    }
  });
});

buttonNewGame.addEventListener("click", () => {
  newGame();
});
