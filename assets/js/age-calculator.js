document.addEventListener("DOMContentLoaded", function() {
    
    const calculateBtn = document.getElementById("calculate-btn");
    const resultDiv = document.getElementById("result");
    
    calculateBtn.addEventListener("click", function() {
        const birthdateInput = document.getElementById("birthdate").value;
        
        if (!birthdateInput) {
            resultDiv.innerHTML = "<span style='color: red;'>Please select a valid date of birth.</span>";
            return;
        }

        const birthDate = new Date(birthdateInput);
        const today = new Date();

        if (birthDate > today) {
            resultDiv.innerHTML = "<span style='color: red;'>Birth date cannot be in the future!</span>";
            return;
        }

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        // Adjust for negative days
        if (days < 0) {
            months--;
            // Get the number of days in the previous month
            const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
            days += previousMonth.getDate();
        }

        // Adjust for negative months
        if (months < 0) {
            years--;
            months += 12;
        }

        // Display the final result
        resultDiv.innerHTML = `
            <strong style="font-size: 20px;">You are:</strong><br>
            <span style="color: #007bff; font-weight: bold; font-size: 18px;">
                ${years} Years, ${months} Months, and ${days} Days old
            </span>
        `;
    });
});
