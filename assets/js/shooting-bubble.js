const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const colors = ['#FF5252', '#4CAF50', '#2196F3', '#FFEB3B'];
let bubbles = [];
let projectile = { x: 200, y: 350, dx: 0, dy: 0, color: colors[0], active: false };
let gameActive = false;

function createGrid() {
    bubbles = [];
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 8; c++) {
            bubbles.push({ x: c * 50 + 25, y: r * 40 + 20, color: colors[Math.floor(Math.random() * colors.length)], active: true });
        }
    }
}

// Find all connected bubbles of the same color
function getConnectedGroup(index, color, group = []) {
    if (index < 0 || index >= bubbles.length || !bubbles[index].active || bubbles[index].color !== color || group.includes(index)) {
        return group;
    }
    group.push(index);
    // Look for neighbors (simple distance check)
    bubbles.forEach((b, i) => {
        if (b.active && b.color === color && Math.hypot(bubbles[index].x - b.x, bubbles[index].y - b.y) < 60) {
            getConnectedGroup(i, color, group);
        }
    });
    return group;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    bubbles.forEach(b => {
        if (!b.active) return;
        if (b.y > 340) { gameActive = false; alert("Game Over! Line reached."); }
        ctx.fillStyle = b.color;
        ctx.beginPath(); ctx.arc(b.x, b.y, 18, 0, Math.PI*2); ctx.fill();
    });
    
    ctx.fillStyle = '#333';
    ctx.fillRect(190, 360, 20, 40);
    
    if (projectile.active) {
        projectile.x += projectile.dx; projectile.y += projectile.dy;
        ctx.fillStyle = projectile.color;
        ctx.beginPath(); ctx.arc(projectile.x, projectile.y, 18, 0, Math.PI*2); ctx.fill();
        
        if (projectile.x < 18 || projectile.x > 382) projectile.dx *= -1;
        
        bubbles.forEach((b, i) => {
            if (b.active && Math.hypot(projectile.x - b.x, projectile.y - b.y) < 36) {
                const group = getConnectedGroup(i, projectile.color);
                
                // Rule: If total count >= 3 (Group + Projectile), Pop them
                if (group.length + 1 >= 3) {
                    group.forEach(idx => bubbles[idx].active = false);
                } else {
                    // Rule: If total count < 3, add projectile to grid
                    bubbles.push({ x: b.x, y: b.y - 40, color: projectile.color, active: true });
                }
                
                projectile.active = false;
                projectile.x = 200; projectile.y = 350;
                projectile.color = colors[Math.floor(Math.random() * colors.length)];
            }
        });
        if (projectile.y < 0) { projectile.active = false; projectile.x = 200; projectile.y = 350; }
    }
    if (gameActive) requestAnimationFrame(draw);
}

function startGame(seconds) {
    createGrid();
    gameActive = true;
    let timeLeft = seconds;
    const timerDisplay = document.getElementById('timer');
    clearInterval(window.timer);
    window.timer = setInterval(() => {
        timeLeft--;
        let m = Math.floor(timeLeft / 60);
        let s = timeLeft % 60;
        timerDisplay.innerText = `${m}:${s < 10 ? '0' : ''}${s}`;
        if (timeLeft <= 0) { clearInterval(window.timer); gameActive = false; alert("Time's up!"); }
    }, 1000);
    draw();
}

createGrid();
ctx.fillStyle = "#333"; ctx.fillText("Tap time to play", 150, 200);
        
