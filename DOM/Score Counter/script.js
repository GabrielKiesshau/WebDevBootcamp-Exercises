var player1Text = document.getElementById("player1Text");
var player2Text = document.getElementById("player2Text");

var player1button = document.getElementById("player1Button");
var player2button = document.getElementById("player2Button");
var resetbutton = document.getElementById("reset");
var gameOverText = document.getElementById("gameover");

var goal = parseInt(document.getElementById("goal").value);
var goalText = document.getElementById("goalText");

var player1Score = 0;
var player2Score = 0;

var gameOver = false;

player1button.addEventListener("click", function AddPlayer1()
{
    if (gameOver)
        return;
    
    player1Score++;
    IsGameOver();
    
    player1Text.textContent = `${player1Score}`;
});

player2button.addEventListener("click", function AddPlayer2()
{
    if (gameOver)
        return;
    
    player2Score++;
    IsGameOver();

    player2Text.textContent = `${player2Score}`;
});

resetbutton.addEventListener("click", function ResetGame()
{
    gameOver = false;
    gameOverText.textContent = "";
    goal = parseInt(document.getElementById("goal").value);
    goalText.textContent = goal;

    player1Score = 0;
    player1Text.style.color = "black";
    player1Text.textContent = `${player1Score}`;

    player2Score = 0;
    player2Text.style.color = "black";
    player2Text.textContent = `${player2Score}`;
});

function IsGameOver()
{
    if (!(player1Score >= goal || player2Score >= goal))
        return;
    
    if (player1Score >= goal)
        player1Text.style.color = "green";
    
    if (player2Score >= goal)
        player2Text.style.color = "green";
    
    gameOver = true;
    gameOverText.textContent = "Game Over";
}