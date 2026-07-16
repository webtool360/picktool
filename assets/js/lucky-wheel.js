// Variable to keep track of total rotation so it doesn't snap backwards on retry
let currentRotation = 0;

function spinWheel() {
    const wheel = document.getElementById('wheel');
    const btn = document.getElementById('spinBtn');
    const resultText = document.getElementById('result-text');
    const retryBox = document.getElementById('retry-box');

    // Disable button and hide old results during spin
    btn.disabled = true;
    resultText.style.display = "none";
    retryBox.style.display = "none";

    /* 
       Wheel Rigging Logic:
       The "Bad Luck" segments are centered at 90, 210, and 330 degrees on the wheel.
       To make them stop exactly at the top (0 degrees) under the pointer, 
       we need to rotate the wheel by 270, 150, or 30 degrees respectively.
    */
    const badLuckTargetAngles = [30, 150, 270]; 
    
    // Pick a random "Bad Luck" stop
    const randomStop = badLuckTargetAngles[Math.floor(Math.random() * badLuckTargetAngles.length)];
    
    // Add 5 full fast spins (1800 degrees) + the rigged target stop
    const extraSpins = 1800; 
    
    // Calculate new total rotation 
    const nextRotation = (Math.floor(currentRotation / 360) * 360) + extraSpins + randomStop;
    currentRotation = nextRotation;

    // Apply the CSS spin
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    // Wait for the 4-second CSS transition to finish before showing the result
    setTimeout(() => {
        resultText.style.display = "block";
        retryBox.style.display = "block";
    }, 4000); 
}

function resetWheel() {
    // Hide the results and re-enable the spin button
    document.getElementById('result-text').style.display = "none";
    document.getElementById('retry-box').style.display = "none";
    document.getElementById('spinBtn').disabled = false;
}
