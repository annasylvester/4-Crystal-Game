// Generate random number between 19 and 120 and display on page 
// Assign random values between 1 and 12 to each of the 4 crystals that reassigns during reset 
// If crystal is clicked, it adds that value to guessed value
// If guessed total = Random Num, then 1 is added to Wins
// If guessed total < Random Num, then the game keeps going
// If guessed total > Random Num, then the player loses
// Game restarts when player wins or loses
        
//---------------
let randomNum = "";
let crystalVal = [];
let crystal1 = "";
let crystal2 = "";
let crystal3 = "";
let crystal4 = "";
let guessedTotal = [];
let winCounter = 0;
let lossCounter = 0;
//----------------

// Reset Random Number

function resetNum() {
    randomNum = Math.floor(Math.random() * 120) + 19;
    console.log(randomNum);
    document.getElementById("randomNum").innerHTML = randomNum;

};
resetNum();

// Value of Crystals reset

while(crystalVal.length < 4){
    let r = Math.floor(Math.random() *12) +1;
    if(crystalVal.indexOf(r) === -1) crystalVal.push(r);
    console.log(crystalVal);
}









