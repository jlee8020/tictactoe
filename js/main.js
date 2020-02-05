
// /*----- constants -----*/

// /*----- app's state (variables) -----*/
let board;
let turn;
let winner;
let playerOne;
let playerTwo;
let turnCount;


/*----- cached element references -----*/
let squares = document.querySelectorAll('div');
let message = document.querySelector('h2');


/*----- event listeners -----*/
document.getElementById('x').addEventListener('click',handleChoiceClick);
document.getElementById('o').addEventListener('click',handleChoiceClick);
document.getElementById('board').addEventListener('click',markBoard);

/*----- functions -----*/
init();

function init(){
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  turnCount = 0;
}

function handleChoiceClick(evt){
  playerOne = evt.target.textContent;
  
  if( playerOne === 'X'){
         playerTwo = 'O'; }
    else { 
        playerTwo = 'X'}
  if(playerOne !== 'replay'){
  message.textContent = `${playerOne} 's Turn`
  }
  else{
  message.textContent = `${playerTwo} 's Turn`};
};
  
init();

function markBoard(evt){
  console.log(turnCount);
  let idx = parseInt(evt.target.id.replace('sq',''));
  if (board[idx] !== null || winner) {
    return evt;
  }
  if (turn === 1) {
    evt.target.textContent = playerOne;
    message.textContent = `${playerOne} 's Turn`;
    board[idx]= 1;}
    else{
      evt.target.textContent= playerTwo;
      message.textContent = `${playerTwo} 's Turn`;
      board[idx]= -1;
    }
    turn *= -1;
    turnCount++;
    getWinner();
    
  }
  
  
  function getWinner (){
    
    if (turnCount === 9 && !winner){
      message.textContent = `Darn... it's a tie`}
    if(board[0] + board[1] + board[2] === 3 ||
      board[3] + board[4] + board[5] === 3 ||
      board[6] + board[7] + board[8] === 3 ||
      board[0] + board[3] + board[6] === 3 ||
      board[1] + board[4] + board[7] === 3 ||
      board[2] + board[5] + board[8] === 3 ||
      board[0] + board[4] + board[8] === 3 ||
      board[2] + board[4] + board[6] === 3){
        winner = true;
        message.textContent = `Whoohoo ${playerOne} Wins!`
        
      }
      if(board[0] + board[1] + board[2] === -3 ||
        board[3] + board[4] + board[5] === -3 ||
        board[6] + board[7] + board[8] === -3 ||
        board[0] + board[3] + board[6] === -3 ||
        board[1] + board[4] + board[7] === -3 ||
        board[2] + board[5] + board[8] === -3 ||
        board[0] + board[4] + board[8] === -3 ||
        board[2] + board[4] + board[6] === -3){
          winner = true;
          message.innerHTML = ` Whoohoo ${playerTwo} Wins!`
        };  
      };
      
    
      
    