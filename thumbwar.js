// compLeft, compRight = computer
// p1Left, p1Right = playerOne
// p2Left, p2Right = playerTwo

// Player One vs. Computer

//let winnerdisplay = document.getElementById('canvas1');

// Get A Random Number from 1 to 20
function getRandomInt(max=20) {
  return Math.floor(Math.random() * max);
}

// Decide On A Side For Each Thumb
//const number = prompt("Should your thumb go left or right?");

// Arrow Function
const getEven = ( num ) => num % 2 === 0 ? 'even' : 'odd' //implicit return

console.log(getEven(getRandomInt()));



// display the result
//console.log(`The number is ${result}.`);

function compLeftOrRight() {
if(getEven(getRandomInt()) == 'even'){
    return "left";
    console.log('left');
    } else {
    return "right";
    console.log('right')
    }
}

// Create Player One
class playerOne {
  constructor(thumbpower) {
    this.thumbpower = Math.floor(Math.random() * max);
  }
}

const playerOne = new playerOne();
console.log(playerOne);

// Create Computer
class playerComp {
  constructor(thumbpower) {
    this.thumbpower = Math.floor(Math.random() * max);
  }
}

const playerComp = new playerComp();
console.log(playerComp);

// Create Player Two
class playerTwo {
  constructor(thumbpower) {
    this.thumbpower = Math.floor(Math.random() * max);
  }
}

const playerTwo = new playerTwo();
console.log(playerTwo);

// If P1 left is true, but Comp left is true = miss
// If P1 right is true, but Compt left is true = miss
// If P1 left is true, but Comp right is true = startGame
// If P1 right is true, but Comp left is true = startGame

// Quit game/reset button
// Display showing Game over

// Start Game
let startGame = document.getElementById("start-game");

function Start() {
  console.log("Round One start!");
  alert("Prepare your thumb! A new game will begin.");
  alert("1,2,3,4. I declare thumb war!");
  let attackThumbs = prompt(
    "Would you like to attack the alien ship or retreat?",
    "A for attack or R for retreat"
  );
  if (
    attackThumbs === "A" ||
    attackThumbs === "a" ||
    attackThumbs === "attack"
  ) {
    confirm("You have chosen to ATTACK");
  } else if (
    attackOrRetreat === "R" ||
    attackOrRetreat === "r" ||
    attackOrRetreat === "retreat"
  ) {
    confirm("You have chosen to RETREAT");
  } else {
    alert("click Start Game again");
  }
}

startGame.addEventListener("click", Start);
