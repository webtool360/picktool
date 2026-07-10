const screen = document.getElementById("screen");

function appendToScreen(value) { screen.value += value; }
function clearScreen() { screen.value = ""; }
function backspace() { screen.value = screen.value.slice(0, -1); }
function calculate() { screen.value = eval(screen.value); }

// Engineering Logic
function mathFunc(type) {
    let val = parseFloat(screen.value);
    if (type === 'sin') screen.value = Math.sin(val);
    if (type === 'cos') screen.value = Math.cos(val);
    if (type === 'sqrt') screen.value = Math.sqrt(val);
    if (type === 'pow') screen.value = Math.pow(val, 2);
}

// Toggle Mode
document.getElementById("toggle-btn").addEventListener("click", function() {
    const adv = document.querySelectorAll('.advanced');
    adv.forEach(btn => {
        btn.style.display = btn.style.display === "block" ? "none" : "block";
    });
    this.innerText = this.innerText.includes("Simple") ? "Switch to Engineering Mode" : "Switch to Simple Mode";
});
