const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const timerDisplay = document.getElementById('timer');
let timerInterval;
let timeLeft = 0;
const colors = ['#FF5252', '#4CAF50', '#2196F3', '#FFEB3B']; // Red, Green, Blue, Yellow

function startTimer(seconds) {
    clearInterval(timerInterval);
    timeLeft = seconds;
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Game Over.");
        }
    }, 1000);
    initGame();
}

function updateTimerDisplay() {
    let m = Math.floor(timeLeft / 60);
    let s = timeLeft % 60;
    timerDisplay.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
}

function initGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw top bubbles
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 8; j++) {
            ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            ctx.beginPath();
            ctx.arc(j * 45 + 30, i * 40 + 30, 15, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    // Draw Shooter (Machine)
    ctx.fillStyle = '#333';
    ctx.fillRect(canvas.width / 2 - 20, canvas.height - 40, 40, 40);
}

// Firing interaction
canvas.addEventListener('click', (e) => {
    // Simple visual feedback
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();
});
                 
