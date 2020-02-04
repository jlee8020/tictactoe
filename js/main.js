
// /*----- constants -----*/

const colors = {
    'null' : 'blue',
    'X': 'purple',
    'O' : 'black',
};


// /*----- app's state (variables) -----*/
let board;
let turn;
let winner;
let playerOne;
let playerTwo;
let played;


/*----- cached element references -----*/
let squares = document.querySelectorAll('div');
let message = document.querySelector('h1');

/*----- event listeners -----*/
document.getElementById('x').addEventListener('click',handleChoiceClick);
document.getElementById('o').addEventListener('click',handleChoiceClick);
document.getElementById('board').addEventListener('click',markBoard);

/*----- functions -----*/
init();

function init(){
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  // render();
}

function handleChoiceClick(evt){
  playerOne = evt.target.textContent;
  if( playerOne === 'X'){
         playerTwo = 'O'; }
      else { playerTwo = 'X'
      }
  if(playerOne !== 'replay'){
  message.innerHTML = `${playerOne} Hugs ${playerOne} goes first!`
  }
  else{
  message.innerHTML = `${playerTwo} Kisses ${playerTwo} goes second!`};

};

init();
 
function markBoard(evt){
  let idx = parseInt(evt.target.id.replace('sq',''));
  if (turn === 1) {
   evt.target.textContent = playerOne;
    board[idx]= 1;}
  else{
    evt.target.textContent= playerTwo;
    board[idx]= -1;
    }
    turn *= -1;
  };
  
// function HandleTurn(){
// parsed1 = parseInt('X');
// playerOne = 1;
// parsed2 = parseInt('O');
// playerTwo = -1 * 1;
// };




// function render() {
//   board.forEach(function(mark, index) {
//   squares[index].textContent = mark;
//   });};

// function handleTurn() {
    
// };