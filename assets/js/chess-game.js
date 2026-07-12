const boardElement = document.getElementById('chess-board');
const turnDisplay = document.getElementById('turn-display');
let turn = 'white';
let selectedSquare = null;

const initialBoard = [
    ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'],
    ['♟', '♟', '♟', '♟', '♟', '♟', '♟', '♟'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['♙', '♙', '♙', '♙', '♙', '♙', '♙', '♙'],
    ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖']
];

function renderBoard() {
    boardElement.innerHTML = '';
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const square = document.createElement('div');
            square.className = `square ${(r + c) % 2 === 0 ? 'light' : 'dark'}`;
            if (selectedSquare && selectedSquare.r === r && selectedSquare.c === c) square.classList.add('selected');
            
            square.innerText = initialBoard[r][c] || '';
            square.onclick = () => handleSquareClick(r, c);
            boardElement.appendChild(square);
        }
    }
}

function handleSquareClick(r, c) {
    const piece = initialBoard[r][c];
    
    // Select a piece
    if (!selectedSquare && piece) {
        // Simple turn check (White is uppercase in logic, Black is lowercase)
        const isWhite = piece === piece.toUpperCase();
        if ((turn === 'white' && isWhite) || (turn === 'black' && !isWhite)) {
            selectedSquare = { r, c };
        }
    } 
    // Move piece
    else if (selectedSquare) {
        initialBoard[r][c] = initialBoard[selectedSquare.r][selectedSquare.c];
        initialBoard[selectedSquare.r][selectedSquare.c] = null;
        selectedSquare = null;
        turn = turn === 'white' ? 'black' : 'white';
        turnDisplay.innerText = turn.charAt(0).toUpperCase() + turn.slice(1);
    }
    renderBoard();
}

renderBoard();
