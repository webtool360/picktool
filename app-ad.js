// ==========================================
// AD INTERSTITIAL & SMARTLINK REDIRECT JS
// ==========================================

// Your Active Adsterra Smartlink
const ADSTERRA_SMARTLINK = "https://www.effectivecpmnetwork.com/c1zfmzeyf?key=f27990728598253b0a867a89e433d884";

let targetAppUrl = "";
let initialTimerInterval = null;
let decisionTimerInterval = null;

// Attach click handlers to all app links once DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const appLinks = document.querySelectorAll(".app-link");

    appLinks.forEach(function (element) {
        element.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent instant navigation

            // Grab destination link from data-app-url or href attribute
            targetAppUrl = this.getAttribute("data-app-url") || this.getAttribute("href");

            // Open ad interstitial modal
            showAdModal();
        });
    });
});

// Phase 1: Show modal and run initial 5-second waiting timer
function showAdModal() {
    const modal = document.getElementById("adModal");
    const btn = document.getElementById("adContinueBtn");

    if (!modal || !btn) return;

    // Reset UI and disable button
    modal.style.display = "flex";
    btn.disabled = true;
    
    let initialSeconds = 5;
    btn.innerHTML = `Please wait (<span id="adTimer">${initialSeconds}</span>s)`;

    // Clear any running timers to prevent bugs
    clearInterval(initialTimerInterval);
    clearInterval(decisionTimerInterval);

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

// Phase 2: 3-second decision window for user to click
function startDecisionPhase(btn) {
    let decisionSeconds = 3;
    btn.disabled = false;
    btn.textContent = `Continue to App (${decisionSeconds}s)`;

    // User clicked within 3 seconds -> Go to target App/Play Store
    btn.onclick = function () {
        clearInterval(decisionTimerInterval);
        closeAdModal();
        window.open(targetAppUrl, '_blank');
    };

    // Start 3-second countdown
    decisionTimerInterval = setInterval(function () {
        decisionSeconds--;

        if (decisionSeconds > 0) {
            btn.textContent = `Continue to App (${decisionSeconds}s)`;
        } else {
            // User failed to click in time -> Redirect to Smartlink (Ad)
            clearInterval(decisionTimerInterval);
            closeAdModal();
            window.location.href = ADSTERRA_SMARTLINK;
        }
    }, 1000);
}

// Close the modal overlay
function closeAdModal() {
    const modal = document.getElementById("adModal");
    if (modal) {
        modal.style.display = "none";
    }
}
