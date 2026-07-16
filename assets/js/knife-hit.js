let level = 1;
let knivesLeft = 10;
let rotation = 0;
const target = document.getElementById('target');
const levelDisplay = document.getElementById('level-display');
const knifeInventory = document.getElementById('knife-inventory');

// List of objects that will appear as targets
const targets = ["🍊", "🍎", "😆", "🥱", "🤬", "🌚", "🌸", "💮", "🧭", "🍑", "☢️", "🌐", "⚽", "😎", "😡", "🍅", "🍆", "🥑", "🥕", "🌽"];

function gameLoop() {
    // Rotation speed increases slightly with every level
    rotation = (rotation + 2 + (level * 0.3)) % 360;
    target.style.transform = `rotate(${rotation}deg)`;
    requestAnimationFrame(gameLoop);
}

function throwKnife() {
    if (knivesLeft <= 0) return;
    
    // Create and animate the knife
    let knife = document.createElement('div');
    knife.className = 'knife';
    // Style it to stick to the center
    knife.style.transform = `rotate(${rotation}deg)`;
    document.getElementById('game-area').appendChild(knife);
    
    knivesLeft--;
    knifeInventory.innerText = `Knives Left: ${knivesLeft}`;
    
    if (knivesLeft === 0) {
        if (level < 20) {
            level++;
            setTimeout(() => {
                alert("Level Cleared! Next: Level " + level);
                resetLevel();
            }, 200);
        } else {
            alert("Game Completed! You are a master!");
            level = 1;
            resetLevel();
        }
    }
}

function resetLevel() {
    knivesLeft = 10;
    knifeInventory.innerText = `Knives Left: 10`;
    levelDisplay.innerText = `Level ${level}`;
    
    // Change the target object based on the current level
    // This uses the modulo operator to cycle through the list if level > targets.length
    target.innerText = targets[(level - 1) % targets.length];
    
    // Remove old knives from the board
    let existingKnives = document.querySelectorAll('.knife');
    existingKnives.forEach(k => k.remove());
}

// Initialize game
resetLevel();
gameLoop();
  
