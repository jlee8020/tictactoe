// /*------Constants------*/
const totalTurns = 9;

// // /*------Variables (state)------*/

// // // Variables might include (board/turn/winner)
// let board;


// /*------Cached Element References------*/

// // You might choose to put your game status here

// /*------Event Listeners------*/

// /*------Functions------*/

let getMarker(){
    let message = `Choose your marker between X or O or Q to quit: `
    let marker = ' ';
    if(marker !== 'Q'){
    
    }

}


if(playerChoice = 'X'){

}

function init(){


  function render(){
    function render(){
      board.forEach(function(mark, idx){
        console.log(mark,idx);
      });
    };
  };
};
init();

function startGame(){
  

  let board = ['', '', '', '', '', '','','','', ''];
}

  const playerButton = function(){
    let char = '';
  while (char !== 'Q'){
    let message = `Choose your Symbol between X and X`;

  }
  }

  function isGameOver() {
    if(playerTurns + aiTurns === 9){
      totalTurns.length === total
    }


      wrongLetters.length === WRONG_GUESS_HUNG_COUNT
    );
  }
    

      Some functions you might choose to use:

Initialization function:
Where you set your initial state, setting up 
what the board will look like upon loading

On-Click function:
Set up what happens when one of the elements
is clicked


Check winner function:
Checks the current state of the board for
a winner and changes the state of the winner
variable if so


Render function:
Displays the current state of the board
on the page, updating the elements to reflect
either X or O depending on whose turn it is

TIC TAC TOE 

Pseudocode

This program will have 2 players. 
	Player 1 - User Input
	Player 2 - AI
Get Player Name
Player 1 chooses between X or O
	If user chooses O, AI will be assigned X
	If user chooses X then AI will be assigned O
Initial message: “Please choose between button 1 or button 2!”
Initialize board
Message - Good luck!
	
Players will take turns playing
	Player 1 Input First
	AI responds
	Player 1 goes again
	AI responds…. Etc

There will be 9 Total turns.
First player to assign/pick 3 containers in a row diagonally or horizontally wins!
Message: “Tic tac toe 3 in a Row!

Game Over
Play again
Reset/Break

/*----- constants -----*/
const WORDS = [
    'DEVELOPER', 'ENGINEER', 'NODE', 'JAVASCRIPT',
    'CODING', 'HTML', 'BACK END', 'GUI', 'BOOLEAN',
    'REACT', 'FUNCTION', 'COMPUTER SCIENCE',
    'SEPARATION OF CONCERNS'
  ];
  const WRONG_GUESS_HUNG_COUNT = 6;
  const SPRITE_WIDTH = 11.25;
  
  /*----- app's state (variables) -----*/
  let secretWord;
  let guessWord;
  let usedLetters;
  let wrongLetters;
  
  /*----- cached element references -----*/
  const guessEl = document.getElementById('guess');
  const letterBtns = document.querySelectorAll('#letters > button');
  const msgEl = document.querySelector('h1');
  const replayBtn = document.getElementById('replay');
  const gallowsEl = document.getElementById('gallows');
  
  /*----- event listeners -----*/
  document.getElementById('letters')
    .addEventListener('click', handleLetterClick);
  replayBtn.addEventListener('click', init);
  
  
  /*----- functions -----*/
  init(); 
  function isGameOver() {
    return (
      secretWord === guessWord ||
      wrongLetters.length === WRONG_GUESS_HUNG_COUNT
    );
  }
  
  function handleLetterClick(evt) {
    let letter = evt.target.textContent;
    if (
      evt.target.tagName !== 'BUTTON' ||
      check if letter is in the usedLetters array
      usedLetters.includes(letter) ||
      isGameOver()
    ) return;
    usedLetters.push(letter);
    if (secretWord.includes(letter)) {
      Good guess!
      let newGuessWord = '';
      for (let i = 0; i < secretWord.length; i++) {
        newGuessWord += secretWord.charAt(i) === letter  ? letter : guessWord.charAt(i);
      }
      guessWord = newGuessWord;
    } else {
      // Bogus guess :(
      wrongLetters.push(letter);
    }
    render();
  }
  
  function render() {
    render guessWord
    guessEl.textContent = guessWord;
    render the buttons
    letterBtns.forEach(function(btn) {
      let letter = btn.textContent;
      if (wrongLetters.includes(letter)) {
        btn.className = 'wrong';
      } else if (usedLetters.includes(letter)) {
        btn.className = 'correct';
      } else {
        btn.className = '';
      }
    });
    replayBtn.style.visibility = isGameOver() ? 'visible' : 'hidden';
    render the gallows
    gallowsEl.style.backgroundPositionX = `-${SPRITE_WIDTH * wrongLetters.length}vmin`;
    renderMessage();
  }
  
  function renderMessage() {
    if (secretWord === guessWord) {
      msgEl.textContent = "Congrats! You guessed the word!";
    } else if (wrongLetters.length === WRONG_GUESS_HUNG_COUNT) {
      msgEl.textContent = "Sorry, you've been hung!";
    } else {
      msgEl.textContent = 'Good Luck!';
    }
  }
  
  function init() {
    let rndIdx = Math.floor(Math.random() * WORDS.length);
    secretWord = WORDS[rndIdx];
    guessWord = '';
    for (let char of secretWord) {
      guessWord += char === ' ' ? ' ' : '_';
    }
    usedLetters = [];
    wrongLetters = [];
    render();
  }