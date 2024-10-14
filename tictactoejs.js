const cells = document.querySelectorAll('.cell');
const restartButton = document.getElementById('restart');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let isGameActive = true;

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const checkWinner = () => {
  for (let i = 0; i < winningConditions.length; i++) {
    const [a, b, c] = winningConditions[i];
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      alert(`Player ${currentPlayer} wins!`);
      isGameActive = false;
      return;
    }
  }
  if (!gameBoard.includes('')) {
    alert('It\'s a tie!');
    isGameActive = false;
  }
};

const handleClick = (e) => {
  const index = e.target.getAttribute('data-index');
  if (gameBoard[index] === '' && isGameActive) {
    gameBoard[index] = currentPlayer;
    e.target.innerText = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
};

cells.forEach(cell => cell.addEventListener('click', handleClick));

restartButton.addEventListener('click', () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.innerText = '');
  currentPlayer = 'X';
  isGameActive = true;
});
