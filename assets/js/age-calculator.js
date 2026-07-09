const birthDate = document.getElementById("birthDate");
const calculateAge = document.getElementById("calculateAge");
const ageResult = document.getElementById("ageResult");
const copyAge = document.getElementById("copyAge");

if (calculateAge) {

calculateAge.addEventListener("click", function () {

if (birthDate.value === "") {

ageResult.textContent = "Please select your birth date.";

return;

}

const birth = new Date(birthDate.value);
const today = new Date();

if (birth > today) {

ageResult.textContent = "Birth date cannot be in the future.";

return;

}

let years = today.getFullYear() - birth.getFullYear();
let months = today.getMonth() - birth.getMonth();
let days = today.getDate() - birth.getDate();

if (days < 0) {

months--;

const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);

days += previousMonth.getDate();

}

if (months < 0) {

years--;

months += 12;

}

ageResult.innerHTML =
"<strong>Your Age</strong><br>" +
years + " Years<br>" +
months + " Months<br>" +
days + " Days";

});

}

if (copyAge) {

copyAge.addEventListener("click", function () {

navigator.clipboard.writeText(ageResult.innerText);

copyAge.textContent = "Copied ✓";

setTimeout(function () {

copyAge.textContent = "Copy Result";

}, 2000);

});

}
