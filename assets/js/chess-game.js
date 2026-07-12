const boardElement = document.getElementById('chess-board');
const turnDisplay = document.getElementById('turn-display');
let turn = 'white';
let selectedSquare = null;

const whitePieces = ['♙', '♖', '♘', '♗', '♕', '♔'];
const blackPieces = ['♟', '♜', '♞', '♝', '♛', '♚'];

let board = [
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
    const validMoves = selectedSquare ? getValidMoves(selectedSquare.r, selectedSquare.c) : [];

    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const square = document.createElement('div');
            square.className = `square ${(r + c) % 2 === 0 ? 'light' : 'dark'}`;
            
            // Add Shading
            if (selectedSquare && selectedSquare.r === r && selectedSquare.c === c) square.classList.add('selected');
            if (validMoves.some(m => m.r === r && m.c === c)) square.classList.add('valid-move');
            
            square.innerText = board[r][c] || '';
            square.onclick = () => handleSquareClick(r, c);
            boardElement.appendChild(square);
        }
    }
}

// Basic movement logic: Can move to any empty square for now
function getValidMoves(r, c) {
    let moves = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === null) moves.push({r: i, c: j});
        }
    }
    return moves;
}

function handleSquareClick(r, c) {
    const piece = board[r][c];
    const isWhitePiece = whitePieces.includes(piece);
    const isBlackPiece = blackPieces.includes(piece);

    // Select a piece
    if (!selectedSquare && piece) {
        if ((turn === 'white' && isWhitePiece) || (turn === 'black' && isBlackPiece)) {
            selectedSquare = { r, c };
        }
    } 
    // Move piece
    else if (selectedSquare) {
        board[r][c] = board[selectedSquare.r][selectedSquare.c];
        board[selectedSquare.r][selectedSquare.c] = null;
        selectedSquare = null;
        turn = turn === 'white' ? 'black' : 'white';
        turnDisplay.innerText = turn.charAt(0).toUpperCase() + turn.slice(1);
    }
    renderBoard();
}

renderBoard();
    
