//'Guess the number game' 
//using 'readline-sync' module for synchronous input reading in JavaScript

// const readline = require('readline-sync');

function generateRandomNumber(min=1, max=100){
  var min = Math.floor(min)
  var max = Math.ceil(max)
  var randomNumber = Math.floor(Math.random()*(max-min+1)+min)
  return randomNumber
};

randomNumber = generateRandomNumber();
console.log(randomNumber)

for (i=1;i<=5;i++){
  const num = parseFloat(readline.question(`Enter ${i} `));
  if (num<randomNumber){
    console.log('Guess is smaller')
  }else if (num> randomNumber){
    console.log('Guess is greater')
  }else if (num===randomNumber){
    console.log('Correct')
    break;
  }
};

console.log('Attempts exhausted')




// async Guess the number

//import readline module
const readline = require('readline');

// main function
function playGame(randomNumber, userInput){
  if (randomNumber===userInput){
    console.log('Correct')
    return true
    
  }else if (randomNumber<userInput){
    console.log('Guess is high')
    
  }else if (randomNumber>userInput){
    console.log('Guess is low')
    
  }
}


// define a function to get user inputs
function userInput(count, randomNumber){
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Enter a number ', function(string){
    const userGuess = parseFloat(string)
    console.log(userGuess)
    guessisCorrect = playGame(randomNumber, userGuess)
    rl.close()
    if (count<5 && !guessisCorrect){
      // recursive call; (n-1) times
      userInput(count+1, randomNumber)
    }

  });
}

// generate random num
const randomNumber = generateRandomNumber()
console.log(randomNumber)
userInput(1, randomNumber)

