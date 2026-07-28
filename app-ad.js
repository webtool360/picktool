// ==========================================
// AD INTERSTITIAL & SMARTLINK REDIRECT JS
// ==========================================

// Replace with your actual Adsterra Smartlink / Direct Link URL
const ADSTERRA_SMARTLINK = "https://www.highrevenuegate.com/YOUR_SMARTLINK_ID";

let targetAppUrl = "";
let initialTimerInterval = null;
let decisionTimerInterval = null;

// Event Listener: Attach ad trigger to all elements with class 'app-link'
document.addEventListener("DOMContentLoaded", function () {
    const appLinks = document.querySelectorAll(".app-link");

    appLinks.forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault(); // Stop instant navigation

            // Get target link from data-app-url or href attribute
            targetAppUrl = this.getAttribute("data-app-url") || this.getAttribute("href");

            // Open the Ad Modal and start timer
            showAdModal();
        });
    });
});

// Function to show modal and run initial 5-second timer
function showAdModal() {
    const modal = document.getElementById("adModal");
    const btn = document.getElementById("adContinueBtn");

    if (!modal || !btn) return;

    // Reset UI and display modal
    modal.style.display = "flex";
    btn.disabled = true;
    
    let initialSeconds = 5;
    btn.innerHTML = `Please wait (<span id="adTimer">${initialSeconds}</span>s)`;

    // Clear any active timers
    clearInterval(initialTimerInterval);
    clearInterval(decisionTimerInterval);

    // 1. Initial 5-second countdown phase
    initialTimerInterval = setInterval(function () {
        initialSeconds--;
        const timerSpan = document.getElementById("adTimer");
        
        if (timerSpan) {
            timerSpan.textContent = initialSeconds;
        }

        if (initialSeconds <= 0) {
            clearInterval(initialTimerInterval);
            startDecisionPhase(btn);
        }
    }, 1000);
}

// Function for secondary 3-second decision phase
function startDecisionPhase(btn) {
    let decisionSeconds = 3;
    btn.disabled = false;
    btn.textContent = `Continue to App (${decisionSeconds}s)`;

    // User clicked within 3 seconds -> Go to target URL (Play Store / App)
    btn.onclick = function () {
        clearInterval(decisionTimerInterval);
        closeAdModal();
        window.location.href = targetAppUrl;
    };

    // 2. Start 3-second countdown
    decisionTimerInterval = setInterval(function () {
        decisionSeconds--;

        if (decisionSeconds > 0) {
            btn.textContent = `Continue to App (${decisionSeconds}s)`;
        } else {
            // User failed to click within 3 seconds -> Trigger Smartlink (Ad)
            clearInterval(decisionTimerInterval);
            closeAdModal();
            window.location.href = ADSTERRA_SMARTLINK;
        }
    }, 1000);
}

// Function to close ad modal overlay
function closeAdModal() {
    const modal = document.getElementById("adModal");
    if (modal) {
        modal.style.display = "none";
    }
}
