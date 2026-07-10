document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-btn");
    const resultDiv = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        const assets = parseFloat(document.getElementById("total-assets").value);
        const rate = parseFloat(document.getElementById("type").value);

        if (isNaN(assets) || assets < 0) {
            resultDiv.innerHTML = "<span style='color: red;'>Please enter a valid amount.</span>";
            return;
        }

        const finalAmount = assets * rate;
        
        resultDiv.innerHTML = `
            <strong style="font-size: 16px;">Calculated Amount:</strong><br>
            <span style="color: #27ae60; font-weight: bold; font-size: 24px;">
                Rs. ${Math.round(finalAmount).toLocaleString()} PKR
            </span>
        `;
    });
});
