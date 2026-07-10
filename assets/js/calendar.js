document.addEventListener("DOMContentLoaded", function() {
const monthYearDisplay = document.getElementById("month-year-display");
const daysGrid = document.getElementById("days-grid");
const datesGrid = document.getElementById("dates-grid");
const calendarToggle = document.getElementById("calendar-toggle");
let currentDate = moment();
function renderCalendar() {
datesGrid.innerHTML = "";
daysGrid.innerHTML = "";
const isHijri = calendarToggle.checked;
if (isHijri) {
monthYearDisplay.innerText = currentDate.format("iMMMM iYYYY");
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
daysOfWeek.forEach(day => {
const dayCell = document.createElement("div");
dayCell.innerText = day;
daysGrid.appendChild(dayCell);
});
const daysInMonth = currentDate.iDaysInMonth();
const firstDayOfMonth = currentDate.clone().iDate(1).day();
for (let i = 0; i < firstDayOfMonth; i++) {
const emptyCell = document.createElement("div");
emptyCell.classList.add("date-cell", "empty");
datesGrid.appendChild(emptyCell);
}
for (let i = 1; i <= daysInMonth; i++) {
const dateCell = document.createElement("div");
dateCell.classList.add("date-cell");
dateCell.innerText = i;
dateCell.addEventListener("click", function() {
alert(Selected Hijri Date: ${i}/${currentDate.iMonth() + 1}/${currentDate.iYear()});
});
datesGrid.appendChild(dateCell);
}
} else {
monthYearDisplay.innerText = currentDate.format("MMMM YYYY");
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
daysOfWeek.forEach(day => {
const dayCell = document.createElement("div");
dayCell.innerText = day;
daysGrid.appendChild(dayCell);
});
const daysInMonth = currentDate.daysInMonth();
const firstDayOfMonth = currentDate.clone().date(1).day();
for (let i = 0; i < firstDayOfMonth; i++) {
const emptyCell = document.createElement("div");
emptyCell.classList.add("date-cell", "empty");
datesGrid.appendChild(emptyCell);
}
for (let i = 1; i <= daysInMonth; i++) {
const dateCell = document.createElement("div");
dateCell.classList.add("date-cell");
dateCell.innerText = i;
dateCell.addEventListener("click", function() {
alert(Selected Gregorian Date: ${i}/${currentDate.month() + 1}/${currentDate.year()});
});
datesGrid.appendChild(dateCell);
}
}
}
calendarToggle.addEventListener("change", renderCalendar);
renderCalendar();
});
