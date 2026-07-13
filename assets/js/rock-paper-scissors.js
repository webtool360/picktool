let p1Score = 0;
let p2Score = 0;
let currentPlayer = 1;
let p1Choice = "";

function playTurn(choice) {
    const statusDisplay = document.getElementById('status');
    const resultMessage = document.getElementById('result-message');
    
    const emojiMap = {
        'rock': '🪨',
        'paper': '📄',
        'scissors': '✂️'
    };

    if (currentPlayer === 1) {
        // Player 1 makes a move, hide it, and switch to Player 2
        p1Choice = choice;
        currentPlayer = 2;
        
        statusDisplay.innerText = "Player 2's Turn";
        resultMessage.innerText = "Player 1 locked in! Player 2, choose your weapon.";
        resultMessage.style.color = "#f1c40f"; // Yellow text
    } else {
        // Player 2 makes a move, calculate winner
        let p2Choice = choice;
        
        let matchResult = `Player 1: ${emojiMap[p1Choice]} vs Player 2: ${emojiMap[p2Choice]}<br>`;

        if (p1Choice === p2Choice) {
            matchResult += "It's a Draw! 🤝";
            resultMessage.style.color = "white";
        } else if (
            (p1Choice === 'rock' && p2Choice === 'scissors') ||
            (p1Choice === 'paper' && p2Choice === 'rock') ||
            (p1Choice === 'scissors' && p2Choice === 'paper')
        ) {
            p1Score++;
            document.getElementById('p1-score').innerText = p1Score;
            matchResult += "🎉 Player 1 Wins!";
            resultMessage.style.color = "#2ecc71"; // Bright Green
        } else {
            p2Score++;
            document.getElementById('p2-score').innerText = p2Score;
            matchResult += "🎉 Player 2 Wins!";
            resultMessage.style.color = "#2ecc71"; // Bright Green
        }

        // Show result and reset to Player 1's turn
        resultMessage.innerHTML = matchResult;
        currentPlayer = 1;
        statusDisplay.innerText = "Player 1's Turn";
    }
}

function resetGame() {
    p1Score = 0;
    p2Score = 0;
    currentPlayer = 1;
    p1Choice = "";
    
    document.getElementById('p1-score').innerText = p1Score;
    document.getElementById('p2-score').innerText = p2Score;
    
    document.getElementById('status').innerText = "Player 1's Turn";
    
    const resultMessage = document.getElementById('result-message');
    resultMessage.innerText = "Waiting for Player 1...";
    resultMessage.style.color = "white";
}
