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

// trigger user prompts
userInput(1, randomNumber)

