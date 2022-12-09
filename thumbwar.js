computer = a
playerOne = b
playerTwo = c

// Player One vs. Computer
let winnerdisplay = document.getElementById('canvas1');

// If P1 left is true, but Comp left is true = miss
// If P1 right is true, but Compt left is true = miss
// If P1 left is true, but Comp right is true = startGame
// If P1 right is true, but Comp left is true = startGame



// Quit game/reset button
// Display showing Game over 

// Start Game
let startGame = document.getElementById("start-game");

function Start(){
    console.log("Round One start!");
    alert("Prepare you thumb! A new game will begin.");
    alert("1,2,3,4. I declare thumb war!")
    let attackOrRetreat = prompt("Would you like to attack the alien ship or retreat?", "A for attack or R for retreat");
    if (attackOrRetreat === "A" || attackOrRetreat==="a"|| attackOrRetreat==="attack") {
        confirm("You have chosen to ATTACK"); 
    } else if (attackOrRetreat === "R" || attackOrRetreat==="r" || attackOrRetreat==="retreat") {
        confirm("You have chosen to RETREAT");
    } else {
        alert("click Start Game again")
    };
};

startGame.addEventListener("click", Start);