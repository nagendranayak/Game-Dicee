reset();
var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

function diceeRoll1() {
  randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
  var randomImageSource = "images/" + randomImage1; // images/dice1.png - images/dice6.png
  var image1 = document.querySelector(".img1");
  image1.setAttribute("src", randomImageSource);
}

function diceeRoll2() {
  randomNumber2 = Math.floor((Math.random() * 6) + 1);
  var randomImage2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImage2);

}


var spinDiceeButton = document.querySelector(".spinDicee");
spinDiceeButton.addEventListener("click", function() {
  if (p1Score !== winningScore && p2Score !== winningScore) {
    diceeRoll1();
    diceeRoll2();
    scoreCard();
    declareWinner();
    winSound();
    //finalWinner();
    document.querySelector(".img1").classList.remove("pressed");
    document.querySelector(".img2").classList.remove("pressed");
  } if (p1Score === winningScore) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
  }
  if (p2Score === winningScore) {
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
  }
  if(p1Score === p2Score && p1Score === winningScore){
    document.querySelector("h1").innerHTML = "Draw Match";
    }
  if(p1Score === winningScore || p2Score === winningScore){
      document.querySelector("#player1Score").classList.add("wingo");
      document.querySelector("#player2Score").classList.add("wingo");
    }
});

var winningScoreDisplay = document.querySelector(".winningScoreDisplay");
var inputNum = document.querySelector("input");
inputNum.addEventListener("change", function() {
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});

var p1ScoreDisplay = document.querySelector("#player1Score");
var p2ScoreDisplay = document.querySelector("#player2Score");
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;

function scoreCard() {
  if (randomNumber1 >= randomNumber2) {
    p1Score = p1Score + 1;
    p1ScoreDisplay.innerHTML = p1Score;
  }
   if (randomNumber2 >= randomNumber1) {
    p2Score = p2Score + 1;
    p2ScoreDisplay.innerHTML = p2Score;
  }
}

function declareWinner() {
  if (p1Score < winningScore && p2Score < winningScore) {
  //player one won
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Point to Player One";
  }
  // player two won
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Point to Player Two 🚩";
  }
  // Draw
  else {
    document.querySelector("h1").innerHTML = "Draw! Each Player Takes Point";
  }
}
}

var resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function() {
  reset();
});

function winSound() {
  if (randomNumber1 >= randomNumber2) {
    var winMusic = new Audio("newgametone.mp3");
    winMusic.play();
  } else if (randomNumber2 >= randomNumber1) {
    var winMusic2 = new Audio("newgametone.mp3");
    winMusic2.play();
  }
}

function reset() {
  document.querySelector("h1").innerHTML = "The Dicee Game";
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
  document.querySelector(".img1").classList.add("pressed");
  document.querySelector(".img2").classList.add("pressed");
  p1Score = 0;
  p2Score = 0;
  document.querySelector("#player1Score").textContent = 0;
  document.querySelector("#player2Score").textContent = 0;
  document.querySelector("#player1Score").classList.remove("wingo");
  document.querySelector("#player2Score").classList.remove("wingo");
  winSound();

}
