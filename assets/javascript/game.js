// Generate random number between 19 and 120 and display on page 
// Assign random values between 1 and 12 to each of the 4 crystals that reassigns during reset 
// If crystal is clicked, it adds that value to guessed value
// If guessed total = Random Num, then 1 is added to Wins
// If guessed total < Random Num, then the game keeps going
// If guessed total > Random Num, then the player loses
// Game restarts when player wins or loses
        

// RESET RANDOM NUM

let randomNum = [];
let crystalVal = [];
let guessedTotal = [];
let addedTotal = [];
let winCounter = 0;
let lossCounter = 0;

function reset() {

    //random number at top
    randomNum = Math.floor(Math.random() * 120) + 19;
    console.log(randomNum);
    document.getElementById("randomNum").innerHTML = randomNum;

    //crystal values
    while(crystalVal.length < 4){
      let r = Math.floor(Math.random() *12) +1;
      if(crystalVal.indexOf(r) === -1) {
        crystalVal.push(r);
      };
    };
    console.log(crystalVal);
};

reset();


function doMath() {
  let value1 = parseInt(guessedTotal.shift());
  let value2 = parseInt(guessedTotal.shift());
  let result = plus(value1, value2);
  guessedTotal.push(result);
  winLose();
  console.log(guessedTotal);
};

function plus(a, b) {
  return a + b;
};

function winLose() {
  if (guessedTotal == randomNum) {
    alert("You win!");
    winCounter ++;
    console.log(winCounter, lossCounter);
    reset();
  }

  else if (guessedTotal > randomNum) {
    alert("You lost!");
    lossCounter --;
    console.log(winCounter, lossCounter);
    reset();
  }

};

// WHEN BUTTONS ARE CLICKED

$("#crystal1").on("click", function () {
    guessedTotal.push(crystalVal[0]);
    console.log(guessedTotal);
    if (guessedTotal.length > 1) {
      doMath();
    };
  });
  $("#crystal2").on("click", function () {
    guessedTotal.push(crystalVal[1]);
    console.log(guessedTotal);
    if (guessedTotal.length > 1) {
      doMath();
    };
  });
  $("#crystal3").on("click", function () {
    guessedTotal.push(crystalVal[2]);
    console.log(guessedTotal);
    if (guessedTotal.length > 1) {
      doMath();
    };
  });
  $("#crystal4").on("click", function () {
    guessedTotal.push(crystalVal[3]);
    console.log(guessedTotal);
    if (guessedTotal.length > 1) {
      doMath();
    };
  });









