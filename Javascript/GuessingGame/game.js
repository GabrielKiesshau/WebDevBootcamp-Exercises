var number = 4;
var guess;

do {
    guess = prompt("Guess the number");
} while (number !== Number(guess))

console.log("You won!");