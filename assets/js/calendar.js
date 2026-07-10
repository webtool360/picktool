document.addEventListener("DOMContentLoaded", function () {

const monthYearDisplay = document.getElementById("month-year-display");
const daysGrid = document.getElementById("days-grid");
const datesGrid = document.getElementById("dates-grid");
const calendarToggle = document.getElementById("calendar-toggle");

let currentDate = moment();

const today = moment();

const daysOfWeek = [
"Sun",
"Mon",
"Tue",
"Wed",
"Thu",
"Fri",
"Sat"
];

const header = document.querySelector(".calendar-header");

const prevBtn = document.createElement("button");
prevBtn.innerHTML = "◀";
prevBtn.className = "nav-btn";

const nextBtn = document.createElement("button");
nextBtn.innerHTML = "▶";
nextBtn.className = "nav-btn";

const todayBtn = document.createElement("button");
todayBtn.innerHTML = "Today";
todayBtn.className = "nav-btn";

header.insertBefore(prevBtn, monthYearDisplay);

header.insertBefore(nextBtn, header.lastElementChild);

header.appendChild(todayBtn);

prevBtn.addEventListener("click", function () {

if (calendarToggle.checked) {

currentDate.subtract(1, "iMonth");

} else {

currentDate.subtract(1, "month");

}

renderCalendar();

});

nextBtn.addEventListener("click", function () {

if (calendarToggle.checked) {

currentDate.add(1, "iMonth");

} else {

currentDate.add(1, "month");

}

renderCalendar();

});

todayBtn.addEventListener("click", function () {

currentDate = moment();

renderCalendar();

});

function renderCalendar() {

daysGrid.innerHTML = "";
datesGrid.innerHTML = "";

daysOfWeek.forEach(function(day){

const cell = document.createElement("div");

cell.textContent = day;

cell.style.fontWeight = "bold";

daysGrid.appendChild(cell);

});

const isHijri = calendarToggle.checked;
    if (isHijri) {

monthYearDisplay.textContent = currentDate.format("iMMMM iYYYY");

const daysInMonth = currentDate.iDaysInMonth();

const firstDay = currentDate.clone().iDate(1).day();

for (let i = 0; i < firstDay; i++) {

const empty = document.createElement("div");
empty.className = "date-cell empty";
datesGrid.appendChild(empty);

}

for (let i = 1; i <= daysInMonth; i++) {

const cell = document.createElement("div");
cell.className = "date-cell";
cell.textContent = i;

if (
i === today.iDate() &&
currentDate.iMonth() === today.iMonth() &&
currentDate.iYear() === today.iYear()
) {

cell.style.background = "#3b5998";
cell.style.color = "#fff";
cell.style.borderRadius = "50%";
cell.style.fontWeight = "bold";

}

cell.addEventListener("click", function () {

alert(`Selected Hijri Date: ${i}/${currentDate.iMonth()+1}/${currentDate.iYear()}`);

});

datesGrid.appendChild(cell);

}

} else {

monthYearDisplay.textContent = currentDate.format("MMMM YYYY");

const daysInMonth = currentDate.daysInMonth();

const firstDay = currentDate.clone().date(1).day();

for (let i = 0; i < firstDay; i++) {

const empty = document.createElement("div");
empty.className = "date-cell empty";
datesGrid.appendChild(empty);

}

for (let i = 1; i <= daysInMonth; i++) {

const cell = document.createElement("div");
cell.className = "date-cell";
cell.textContent = i;

if (
i === today.date() &&
currentDate.month() === today.month() &&
currentDate.year() === today.year()
) {

cell.style.background = "#3b5998";
cell.style.color = "#fff";
cell.style.borderRadius = "50%";
cell.style.fontWeight = "bold";

}

cell.addEventListener("click", function () {

alert(`Selected Gregorian Date: ${i}/${currentDate.month()+1}/${currentDate.year()}`);

});

datesGrid.appendChild(cell);

}

}
    }

calendarToggle.addEventListener("change", function () {

renderCalendar();

});

renderCalendar();

});
