// --- PART 1: SETUP & GLOBALS ---
const boardElement = document.getElementById("chess-board");
const turnDisplay = document.getElementById("turn-display");
const statusDisplay = document.getElementById("game-status");

let turn = "white";
let selectedSquare = null;
let validMoves = [];
let moveHistory = []; 

let board = [
    ["♜","♞","♝","♛","♚","♝","♞","♜"],
    ["♟","♟","♟","♟","♟","♟","♟","♟"],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    [null,null,null,null,null,null,null,null],
    ["♙","♙","♙","♙","♙","♙","♙","♙"],
    ["♖","♘","♗","♕","♔","♗","♘","♖"]
];

function isWhite(p) { return ["♙","♖","♘","♗","♕","♔"].includes(p); }
function isBlack(p) { return ["♟","♜","♞","♝","♛","♚"].includes(p); }
function inside(r, c) { return r >= 0 && r < 8 && c >= 0 && c < 8; }
function hasMoved(pieceType, r, c) {
    return moveHistory.some(m => m.piece === pieceType && m.from.r === r && m.from.c === c);
                            }
// --- PART 2: MOVEMENT LOGIC ---
function getValidMoves(r, c) {
    const piece = board[r][c];
    if (!piece) return [];
    let moves = [];

    function addMove(nr, nc) {
        if (!inside(nr, nc)) return;
        const target = board[nr][nc];
        if (!target || (isWhite(piece) ? isBlack(target) : isWhite(target))) {
            moves.push({ r: nr, c: nc });
        }
    }

    // Logic for Slides (Rook, Bishop, Queen)
    const addSlides = (dirs) => {
        dirs.forEach(d => {
            let nr = r + d[0], nc = c + d[1];
            while (inside(nr, nc)) {
                if (!board[nr][nc]) moves.push({ r: nr, c: nc });
                else { if (isWhite(piece) ? isBlack(board[nr][nc]) : isWhite(board[nr][nc])) moves.push({ r: nr, c: nc }); break; }
                nr += d[0]; nc += d[1];
            }
        });
    };

    switch (piece) {
        case "♙": // White Pawn
            if (inside(r - 1, c) && !board[r - 1][c]) { moves.push({ r: r - 1, c: c }); if (r === 6 && !board[r - 2][c]) moves.push({ r: r - 2, c: c }); }
            if (inside(r - 1, c - 1) && isBlack(board[r - 1][c - 1])) moves.push({ r: r - 1, c: c - 1 });
            if (inside(r - 1, c + 1) && isBlack(board[r - 1][c + 1])) moves.push({ r: r - 1, c: c + 1 });
            break;
        case "♟": // Black Pawn
            if (inside(r + 1, c) && !board[r + 1][c]) { moves.push({ r: r + 1, c: c }); if (r === 1 && !board[r + 2][c]) moves.push({ r: r + 2, c: c }); }
            if (inside(r + 1, c - 1) && isWhite(board[r + 1][c - 1])) moves.push({ r: r + 1, c: c - 1 });
            if (inside(r + 1, c + 1) && isWhite(board[r + 1][c + 1])) moves.push({ r: r + 1, c: c + 1 });
            break;
        case "♔": case "♚": // King & Castling
            for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) if (dr !== 0 || dc !== 0) addMove(r + dr, c + dc);
            // Castling Logic (Simple)
            if (piece === '♔' && !hasMoved('♔', 7, 4)) { if (!board[7][5] && !board[7][6] && !hasMoved('♖', 7, 7)) moves.push({ r: 7, c: 6 }); }
            break;
        case "♖": case "♜": addSlides([[-1, 0], [1, 0], [0, -1], [0, 1]]); break;
        case "♗": case "♝": addSlides([[-1, -1], [-1, 1], [1, -1], [1, 1]]); break;
        case "♕": case "♛": addSlides([[-1, 0], [1, 0], [0, -1], [0, 1], [-1, -1], [-1, 1], [1, -1], [1, 1]]); break;
    }
    return moves.filter(m => !wouldLeaveKingInCheck(r, c, m.r, m.c));
    }
// --- PART 3: RULES ENGINE ---
function findKing(color) {
    const king = (color === "white") ? "♔" : "♚";
    for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) if (board[r][c] === king) return { r, c };
    return null;
}

function isKingInCheck(color) {
    const king = findKing(color);
    if (!king) return false;
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const p = board[r][c];
            if (p && (color === 'white' ? isBlack(p) : isWhite(p))) {
                if (getValidMoves(r, c).some(m => m.r === king.r && m.c === king.c)) return true;
            }
        }
    }
    return false;
}

function wouldLeaveKingInCheck(fr, fc, tr, tc) {
    const moving = board[fr][fc];
    const target = board[tr][tc];
    board[tr][tc] = moving;
    board[fr][fc] = null;
    const isCheck = isKingInCheck(isWhite(moving) ? 'white' : 'black');
    board[fr][fc] = moving;
    board[tr][tc] = target;
    return isCheck;
}

function getAllLegalMoves(color) {
    let moves = [];
    for (let r = 0; r < 8; r++) for (let c = 0; c < 8; c++) {
        const p = board[r][c];
        if (p && (isWhite(p) === (color === 'white'))) moves.push(...getValidMoves(r, c));
    }
    return moves;
}

function checkGameState() {
    const color = turn;
    const inCheck = isKingInCheck(color);
    if (getAllLegalMoves(color).length === 0) {
        statusDisplay.textContent = inCheck ? `CHECKMATE! ${color === 'white' ? 'Black' : 'White'} wins!` : "STALEMATE! Draw.";
    } else {
        statusDisplay.textContent = inCheck ? "CHECK!" : "";
    }
         }
        // --- PART 4: INTERACTION & RENDERING ---
function renderBoard() {
    boardElement.innerHTML = "";
    for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
            const sq = document.createElement("div");
            sq.className = `square ${((r + c) % 2 === 0) ? "light" : "dark"}`;
            if (selectedSquare && selectedSquare.r === r && selectedSquare.c === c) sq.classList.add("selected");
            if (validMoves.some(m => m.r === r && m.c === c)) sq.classList.add("valid-move");
            sq.textContent = board[r][c] || "";
            sq.onclick = () => handleSquareClick(r, c);
            boardElement.appendChild(sq);
        }
    }
}

function handleSquareClick(r, c) {
    const piece = board[r][c];
    if (selectedSquare) {
        const legal = validMoves.find(m => m.r === r && m.c === c);
        if (legal) {
            let moved = board[selectedSquare.r][selectedSquare.c];
            // Insert this starting at line 148:
if (legal.type === 'enpassant') {
    const lastMove = moveHistory[moveHistory.length - 1];
    board[lastMove.to.r][lastMove.to.c] = null;
}
if (legal.type === 'castle') {
    if (legal.c === 6) { board[7][5] = board[7][7]; board[7][7] = null; }
    else if (legal.c === 2) { board[7][3] = board[7][0]; board[7][0] = null; }
}
            
            // Promotion
            if ((moved === '♙' && r === 0) || (moved === '♟' && r === 7)) moved = isWhite(moved) ? '♕' : '♛';
            board[r][c] = moved;
            board[selectedSquare.r][selectedSquare.c] = null;
            moveHistory.push({ from: selectedSquare, to: { r, c }, piece: moved });
            turn = (turn === "white") ? "black" : "white";
            turnDisplay.textContent = turn.charAt(0).toUpperCase() + turn.slice(1);
            selectedSquare = null; validMoves = []; checkGameState(); renderBoard(); return;
        }
    }
    if (piece && (isWhite(piece) === (turn === 'white'))) {
        selectedSquare = { r, c };
        validMoves = getValidMoves(r, c);
    } else { selectedSquare = null; validMoves = []; }
    renderBoard();
}

renderBoard();
// --- PART 5: ADVANCED MECHANICS & INIT ---

// 1. Completion of En Passant and Castling logic for getValidMoves
// Update your getValidMoves function to call these specific checks:

function getAdvancedMoves(r, c, moves) {
    const piece = board[r][c];
    
    // En Passant Implementation
    const lastMove = moveHistory[moveHistory.length - 1];
    if (lastMove && Math.abs(lastMove.from.r - lastMove.to.r) === 2 && lastMove.piece.toLowerCase() === '♟') {
        const epRow = lastMove.to.r;
        const epCol = lastMove.to.c;
        if (piece === '♙' && r === 3 && Math.abs(c - epCol) === 1) moves.push({ r: r - 1, c: epCol, type: 'enpassant' });
        if (piece === '♟' && r === 4 && Math.abs(c - epCol) === 1) moves.push({ r: r + 1, c: epCol, type: 'enpassant' });
    }

    // Castling Path Verification
    if (piece === '♔' && !hasMoved('♔', 7, 4)) {
        // King side
        if (!board[7][5] && !board[7][6] && !hasMoved('♖', 7, 7)) moves.push({ r: 7, c: 6, type: 'castle' });
        // Queen side
        if (!board[7][3] && !board[7][2] && !board[7][1] && !hasMoved('♖', 7, 0)) moves.push({ r: 7, c: 2, type: 'castle' });
    }
}

// 2. Final Initialization
document.addEventListener("DOMContentLoaded", () => {
    // This wrapper ensures the HTML is fully loaded before the JS runs
    renderBoard();
});

// 3. Helper to handle special move types in handleSquareClick
// Inside your handleSquareClick function, when executing a move:
/* 
    if (legal.type === 'enpassant') {
        // Remove the captured pawn that moved 2 squares
        board[lastMove.to.r][lastMove.to.c] = null;
    }
    if (legal.type === 'castle') {
        // Move the Rook associated with the castle
        if (legal.c === 6) { board[7][5] = board[7][7]; board[7][7] = null; }
        if (legal.c === 2) { board[7][3] = board[7][0]; board[7][0] = null; }
    }
*/
