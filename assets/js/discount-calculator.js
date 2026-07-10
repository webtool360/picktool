document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-btn");
    const resultDiv = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        const price = parseFloat(document.getElementById("price").value);
        const discount = parseFloat(document.getElementById("discount").value);

        if (isNaN(price) || isNaN(discount) || price < 0 || discount < 0) {
            resultDiv.innerHTML = "<span style='color: red;'>Please enter valid numbers.</span>";
            return;
        }

        const savings = (price * discount) / 100;
        const finalPrice = price - savings;
        
        resultDiv.innerHTML = `
            <strong style="font-size: 16px;">Final Price:</strong><br>
            <span style="color: #27ae60; font-weight: bold; font-size: 24px;">
                Rs. ${finalPrice.toLocaleString()} PKR
            </span><br>
            <small style="color: #666;">You save: Rs. ${savings.toLocaleString()}</small>
        `;
    });
});
