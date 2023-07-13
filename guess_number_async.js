// async Guess the number

//import readline module
const readline = require('readline');

// import generaterandomNumber function from the other module
const generaterandomNumber = require('./guess_number_sync.js')

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
    guessisCorrect = playGame(randomNumber, userGuess)
    rl.close()
    if (count<5 && !guessisCorrect){
      // recursive call; (n-1) times
      userInput(count+1, randomNumber)
    }

    // unsuccess message
    if (count==5 && !guessisCorrect){
      console.log('Attempts Exhausted!')
    }

  });
}

// Generate random number
const randomNumber = generaterandomNumber();

// Check if the current file is the main module
if (require.main === module) {
  
  // Trigger user prompts
  userInput(1, randomNumber);
}
