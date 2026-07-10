document.addEventListener("DOMContentLoaded", function() {
    
    const calculateBtn = document.getElementById("calculate-btn");
    const resultDiv = document.getElementById("result");
    
    calculateBtn.addEventListener("click", function() {
        
        const weight = parseFloat(document.getElementById("weight").value);
        const height = parseFloat(document.getElementById("height").value);
        
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
            resultDiv.innerHTML = "<span style='color: red;'>Please enter valid positive numbers.</span>";
            return;
        }
        
        // Height is in cm, convert to meters
        const heightInMeters = height / 100;
        
        // BMI Formula: Weight / (Height * Height)
        const bmi = weight / (heightInMeters * heightInMeters);
        const roundedBMI = bmi.toFixed(1);
        
        let category = "";
        let colorCode = "";
        
        if (bmi < 18.5) {
            category = "Underweight";
            colorCode = "#f39c12"; // Orange
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
            colorCode = "#27ae60"; // Green
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
            colorCode = "#e67e22"; // Dark orange
        } else {
            category = "Obese";
            colorCode = "#e74c3c"; // Red
        }
        
        resultDiv.innerHTML = `
            <strong style="font-size: 20px;">Your BMI: ${roundedBMI}</strong><br>
            <span style="color: ${colorCode}; font-weight: bold; font-size: 18px;">${category}</span>
        `;
    });
});
