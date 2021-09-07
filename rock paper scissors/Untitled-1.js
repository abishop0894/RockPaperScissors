let game = ["rock", "paper", "scissors"];

let PlayerOneChoice = prompt("Salutations. Please select rock, paper, or scissors.");

for (i = 0; i < game.length; i++) {
game[i] = game[Math.floor(Math.random() * game.length)];
console.log(game[i]);

if (PlayerOneChoice === "rock" && game[i] === "paper") {
    alert("you're not off to a good start");
    console.log("complete");
    break;
}

if (PlayerOneChoice === "paper" && game[i] === "rock") {
    alert("you win this round!");
    console.log("congrats");
    break;
}

if (PlayerOneChoice === "scissors" && game[i] === "paper" ) {
alert("you win this round!");
console.log("congrats");
break;
}

if (PlayerOneChoice === "paper" && game[i] === "scissors" ) {
    alert("you lose this round");
    console.log("try again");
    break;
    

} 

if (PlayerOneChoice === "rock" && game[i] === "scissors") {
    alert("you win this round!");
    console.log("congrats");
    break; 
}

if (PlayerOneChoice === "scissors" && game[i] === "rock") {
    alert("you lose this round");
    console.log("try again");
    break;

} 

if (PlayerOneChoice === game[i]) {
    alert("tie, try again");
    console.log("try again dood");
    break;
    } else {
        alert("We're playing rock paper scissors and you entered " + PlayerOneChoice + ".." + " thats not an option. Try again!");
        break;
        console.log("huh?")
    }

} 



