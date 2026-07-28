// Interstitial Ad Logic for Useful Apps Container
let adTimer = null;
let targetAppUrl = "";

function handleAppClick(event) {
    const link = event.currentTarget;
    const appUrl = link.getAttribute("href");

    if (appUrl && appUrl !== "#") {
        event.preventDefault(); // Pause immediate opening
        targetAppUrl = appUrl;

        let timeLeft = 5; // 5 second countdown
        const modal = document.getElementById("appAdModal");
        const countdownEl = document.getElementById("adCountdown");
        const skipBtn = document.getElementById("skipAdBtn");

        modal.style.display = "flex";
        countdownEl.innerText = timeLeft;
        skipBtn.disabled = true;
        skipBtn.classList.remove("active");
        skipBtn.innerText = "Please wait...";

        if (adTimer) clearInterval(adTimer);

        adTimer = setInterval(() => {
            timeLeft--;
            countdownEl.innerText = timeLeft;

            if (timeLeft <= 0) {
                clearInterval(adTimer);
                skipBtn.disabled = false;
                skipBtn.classList.add("active");
                skipBtn.innerText = "Continue to App ➔";
            }
        }, 1000);
    }
}

function skipAdNow() {
    if (targetAppUrl) {
        window.open(targetAppUrl, "_blank");
        document.getElementById("appAdModal").style.display = "none";
    }
}

// Automatically attach only to links inside #tab-useful-app
document.addEventListener("DOMContentLoaded", () => {
    const appContainer = document.getElementById("tab-useful-app");
    if (appContainer) {
        const appLinks = appContainer.querySelectorAll("a.tool-card");
        appLinks.forEach(link => {
            link.addEventListener("click", handleAppClick);
        });
    }
});
