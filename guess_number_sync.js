//'Guess the number game' 
//using 'readline-sync' module for synchronous input reading in JavaScript

const readline = require('readline-sync');

function generaterandomNumber(min=1, max=100){
  var min = Math.floor(min)
  var max = Math.ceil(max)
  var randomNumber = Math.floor(Math.random()*(max-min+1)+min)
  return randomNumber
};

// for reuse in other module
module.exports = generaterandomNumber;

// generate random number
randomNumber = generaterandomNumber();

for (i=1;i<=5;i++){
  const num = parseFloat(readline.question(`Enter ${i} `));
  if (num<randomNumber)
    console.log('Guess is smaller')
  }else if (num> randomNumber){
    console.log('Guess is greater')
  }else if (num===randomNumber && i<=5){
    console.log('Correct')
    var loopBreak = true
    break;
  }
};


// unsuccessful message display
if (!loopBreak){
  console.log('Attempts exhausted')
}