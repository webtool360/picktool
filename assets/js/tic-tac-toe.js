let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;
const statusDisplay = document.getElementById('status');
const cells = document.querySelectorAll('.cell');

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6]             // Diagonal
];

function makeMove(index) {
    if (board[index] === "" && isGameActive) {
        board[index] = currentPlayer;
        cells[index].innerText = currentPlayer;
        cells[index].style.color = currentPlayer === "X" ? "#3b5998" : "#e74c3c";
        checkWinner();
    }
}

function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.innerText = `🎉 Player ${currentPlayer} Wins! 🎉`;
        statusDisplay.style.color = "#27ae60"; 
        isGameActive = false;
        return;
    }

    if (!board.includes("")) {
        statusDisplay.innerText = "It's a Draw! 🤝";
        statusDisplay.style.color = "#e67e22"; 
        isGameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerText = `Player ${currentPlayer}'s Turn`;
    statusDisplay.style.color = "#333";
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    isGameActive = true;
    statusDisplay.innerText = `Player ${currentPlayer}'s Turn`;
    statusDisplay.style.color = "#333";
    cells.forEach(cell => {
        cell.innerText = "";
    });
}
