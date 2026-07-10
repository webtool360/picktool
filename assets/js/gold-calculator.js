document.addEventListener("DOMContentLoaded", function() {
    
    const calculateBtn = document.getElementById("calculate-btn");
    const resultDiv = document.getElementById("result");
    
    // The standard weight of 1 Tola in the Pakistan market
    const TOLA_IN_GRAMS = 11.6638;
    
    calculateBtn.addEventListener("click", function() {
        
        // Get the values the user typed in
        const goldRate = parseFloat(document.getElementById("gold-rate").value);
        const rateUnit = document.getElementById("rate-unit").value;
        const goldWeight = parseFloat(document.getElementById("gold-weight").value);
        
        // Check for empty or invalid numbers
        if (isNaN(goldRate) || isNaN(goldWeight) || goldRate <= 0 || goldWeight <= 0) {
            resultDiv.innerHTML = "<span style='color: red;'>Please enter valid positive numbers.</span>";
            return;
        }
        
        let ratePerGram = 0;
        
        // If the user entered the rate for 1 Tola, we divide it by 11.6638 to find the 1 Gram rate
        if (rateUnit === "tola") {
            ratePerGram = goldRate / TOLA_IN_GRAMS;
        } else {
            // If they already entered the 1 Gram rate, we just use that number
            ratePerGram = goldRate;
        }
        
        // Multiply the rate per gram by the total weight they have
        const totalPrice = ratePerGram * goldWeight;
        
        // Round the number and add commas so it looks like real money (e.g., 2,500,000)
        const formattedPrice = Math.round(totalPrice).toLocaleString();
        
        // Display the final calculation to the screen
        resultDiv.innerHTML = `
            <strong style="font-size: 16px; color: #666;">Total Estimated Value:</strong><br>
            <span style="color: #27ae60; font-weight: bold; font-size: 24px;">
                Rs. ${formattedPrice} PKR
            </span>
            
            <hr style="margin: 15px 0; border: 0; border-top: 1px dashed #ccc;">
            
            <div style="text-align: left; font-size: 13px; color: #777;">
                <em>Note: 1 Tola is calculated at the standard ${TOLA_IN_GRAMS} grams.</em>
            </div>
        `;
    });
});
