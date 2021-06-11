function guessingGame(num) {
    let random = Math.floor(Math.random() * 100)
    let gameOver = false
    let numbGuesses = 0
    return function guess(num){
      if(gameOver) return "The game is over, you already won!";
      numbGuesses++
      
      if(num === random){
        gameOver = true;
        const guess = numbGuesses === 1 ? "guess" : "guesses"
        return `You win! You found ${num} in ${numbGuesses} ${guess}.`
      }

      if(num < random) return `${num} is too low!`;
      if(num > random) return `${num} is too high!`
    }
    
}

module.exports = { guessingGame };
