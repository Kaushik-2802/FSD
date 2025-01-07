class Game {
    constructor() {
      this.targetNumber = null;
      this.attempts = 0;
      this.isGameOver = false;
    }
  
    startNewGame() {
      this.targetNumber = Math.floor(Math.random() * 100) + 1;
      this.attempts = 0;
      this.isGameOver = false;
      console.log("Game started! Guess the number between 1 and 100.");
    }
  
    checkGuess(guess) {
      if (this.isGameOver) {
        console.log("Game over! Start a new game.");
        return;
      }
  
      this.attempts++;
  
      if (guess === this.targetNumber) {
        console.log(`Congratulations! You guessed the correct number ${this.targetNumber} in ${this.attempts} attempts.`);
        this.isGameOver = true;
      } else if (guess < this.targetNumber) {
        console.log("Higher!");
      } else {
        console.log("Lower!");
      }
    }
  }
  
  const game = new Game();
  game.startNewGame();
  
  // Example of checking guesses
  game.checkGuess(50); // Higher/Lower hint
  game.checkGuess(75); // Higher/Lower hint
  game.checkGuess(85); // Correct guess
  