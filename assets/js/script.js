// Declaring constants

let playerScore = 0;
let computerScore = 0;
let answer = ``;
let players = ["1", "2", "3", "4", "5"];

const messages = document.getElementById("messages");
const buttons = document.getElementsByClassName("controls");
const choices = ["rock", "paper", "scissors"];

// Function for the HTML modals

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Added so function doesn't start until DOM Loads
// Added click event listeners to buttons

document.addEventListener("DOMContentLoaded", function () {
  for (let button of buttons) {
    button.addEventListener("click", function () {
      let playerChoice = this.getAttribute("data-choice");
      runGame(playerChoice);
    });
  }
});

function runGame(playerChoice) {
  let computerChoice = [Math.floor(Math.random() * 3)];
  let result = compare(playerChoice, computerChoice);
}

// Compare function uses the data choice as an index number to pull one of the choices from the choices array

function compare(playerChoice, computerChoice) {
  if (choices[playerChoice] === choices[computerChoice]) {
    answer = `You chose: ${choices[playerChoice]}<br>The Computer chose: ${choices[computerChoice]}<br>You tied on this round!`;
  } else if (choices[playerChoice] === "rock") {
    if (choices[computerChoice] === "paper") {
      answer = `You chose: ${choices[playerChoice]}<br>The Computer chose: ${choices[computerChoice]}<br>Paper covers Rock. You lost this round!`;
    } else if (choices[computerChoice] === "scissors") {
      answer = `You chose: ${choices[playerChoice]}<br>The Computer chose: ${choices[computerChoice]}<br>Rock smashes Scissors. You won this round!`;
    }
  } else if (choices[playerChoice] === "paper") {
    if (choices[computerChoice] === "scissors") {
      answer = `You chose: ${choices[playerChoice]}<br>The Computer chose: ${choices[computerChoice]}<br>Scissors cuts Paper. You lost this round!`;
    } else {
      answer = `You chose: ${choices[playerChoice]}<br>The Computer chose: ${choices[computerChoice]}<br>Paper covers Rock. You won this round!`;
    }
  } else if (choices[playerChoice] === "scissors") {
    if (choices[computerChoice] === "rock") {
      answer = `You chose: ${choices[playerChoice]}<br>The Computer chose: ${choices[computerChoice]}<br>Rock smashes Scissors. You lost this round!`;
    } else if (choices[computerChoice] === "paper") {
      answer = `You chose: ${choices[playerChoice]}<br>The Computer chose: ${choices[computerChoice]}<br>Scissors cut Paper. You won this round!`;
    }
  }
  result(answer);
}

// To display a message for the returned answer, and trigger increment score

function result(answer) {
  let gameEnd = document.getElementById("messages");
  console.log("answer: ", answer);
  gameEnd.innerHTML = answer;

  incrementScore();
}

// Scoring function

function incrementScore() {
  if (answer.includes(`won`)) {
    playerScore++;
  } else if (answer.includes(`lost`)) {
    computerScore++;
  }
  document.getElementById("player-score").innerHTML = `${playerScore}`;
  document.getElementById("computer-score").innerHTML = `${computerScore}`;

  bestOfThree();
}

// Function to determine best of three to see who wins

function bestOfThree() {
  if (playerScore === 3) {
    document.getElementById("messages").innerHTML =
      "You Won! Click the reset button to play again.";
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    showMyLeaderboardModal();
  } else if (computerScore === 3) {
    document.getElementById("messages").innerHTML =
      "Better Luck Next Time! Click the reset button to play again";
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    showMyLeaderboardModal();
  }

  // Reset button function. To enable control buttons.

  document.getElementById("reset").onclick = function () {
    playerScore = 0;
    document.getElementById("player-score").innerHTML = `${"0"}`;
    computerScore = 0;
    document.getElementById("computer-score").innerHTML = `${"0"}`;
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("messages").innerHTML = "Want to play again?";
  };
}

// Leaderboard Function

const leaderboard = document.getElementById("myleaderboardModal");

function showMyLeaderboardModal() {
  leaderboard.style.display = "flex";
}

const username = document.getElementById("leaderboard-input");
const usernameSubmit = document.getElementById("leaderboard-submit");

function validateform() {
  var username = document.getElementById("leaderboard-input").value;
  if (username.trim() == "") {
    alert("Please enter a username to continue");
    return false;
  } else {
    leaderboard.style.display = "none";
  }
}

function handleLeaderboardSubmit() {
  validateform();
  players.push(username.value);
  players.shift();

  username.value = "";
  {
    displayLeaderboard();
    localStorage.setItem("leaderBoardStorage", JSON.stringify(players));
  }
}

usernameSubmit.addEventListener("click", handleLeaderboardSubmit);

const leaderboardContainer = document.getElementById("leaderboard-container");

function displayLeaderboard() {
  let newLeaderboard = "";
  players.forEach((it) => {
    let playerMarkUp = `<div id="leaderboard-container">${it}</div>`;
    newLeaderboard += playerMarkUp;
  });
  leaderboardContainer.innerHTML = newLeaderboard;
}

function handleLoad() {
  const loadLeaderboard = JSON.parse(
    localStorage.getItem("leaderBoardStorage")
  );
  if (loadLeaderboard) {
    players = loadLeaderboard;
  }
}

handleLoad();
displayLeaderboard();
