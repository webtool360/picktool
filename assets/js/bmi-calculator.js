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
        let suggestion = ""; // New variable for our helpful advice
        
        // Determine category, color, and suggestion text
        if (bmi < 18.5) {
            category = "Underweight";
            colorCode = "#f39c12"; // Orange
            suggestion = "Focus on a nutrient-rich diet with healthy proteins to safely build body mass. Consider consulting a doctor or nutritionist.";
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = "Normal weight";
            colorCode = "#27ae60"; // Green
            suggestion = "Great job! Maintain your current lifestyle with a balanced diet and regular physical activity to stay in this healthy range.";
        } else if (bmi >= 25 && bmi < 29.9) {
            category = "Overweight";
            colorCode = "#e67e22"; // Dark orange
            suggestion = "Incorporating more daily movement and monitoring portion sizes can help gently bring your BMI back into the normal range.";
        } else {
            category = "Obese";
            colorCode = "#e74c3c"; // Red
            suggestion = "It is highly recommended to speak with a healthcare provider to create a safe, personalized plan for diet and exercise.";
        }
        
        // Display the result and the suggestion on the screen
        resultDiv.innerHTML = `
            <strong style="font-size: 20px;">Your BMI: ${roundedBMI}</strong><br>
            <span style="color: ${colorCode}; font-weight: bold; font-size: 18px;">${category}</span>
            
            <hr style="margin: 15px 0; border: 0; border-top: 1px dashed #ccc;">
            
            <div style="text-align: left; font-size: 14px; line-height: 1.6; color: #444;">
                <strong>💡 Tip for you:</strong><br>
                ${suggestion}
            </div>
        `;
    });
});
