document.addEventListener("DOMContentLoaded", function () {

    const monthYearDisplay = document.getElementById("month-year-display");
    const daysGrid = document.getElementById("days-grid");
    const datesGrid = document.getElementById("dates-grid");
    const calendarToggle = document.getElementById("calendar-toggle");

    let currentDate = moment();

    function renderCalendar() {

        daysGrid.innerHTML = "";
        datesGrid.innerHTML = "";

        const isHijri = calendarToggle.checked;

        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        daysOfWeek.forEach(function (day) {
            const dayCell = document.createElement("div");
            dayCell.textContent = day;
            daysGrid.appendChild(dayCell);
        });

        if (isHijri) {

            monthYearDisplay.textContent = currentDate.format("iMMMM iYYYY");

            const daysInMonth = currentDate.iDaysInMonth();
            const firstDayOfMonth = currentDate.clone().iDate(1).day();

            for (let i = 0; i < firstDayOfMonth; i++) {
                const emptyCell = document.createElement("div");
                emptyCell.className = "date-cell empty";
                datesGrid.appendChild(emptyCell);
            }

            for (let i = 1; i <= daysInMonth; i++) {

                const dateCell = document.createElement("div");
                dateCell.className = "date-cell";
                dateCell.textContent = i;

                dateCell.addEventListener("click", function () {
                    alert(`Selected Hijri Date: ${i}/${currentDate.iMonth() + 1}/${currentDate.iYear()}`);
                });

                datesGrid.appendChild(dateCell);

            }

        } else {

            monthYearDisplay.textContent = currentDate.format("MMMM YYYY");

            const daysInMonth = currentDate.daysInMonth();
            const firstDayOfMonth = currentDate.clone().date(1).day();

            for (let i = 0; i < firstDayOfMonth; i++) {
                const emptyCell = document.createElement("div");
                emptyCell.className = "date-cell empty";
                datesGrid.appendChild(emptyCell);
            }

            for (let i = 1; i <= daysInMonth; i++) {

                const dateCell = document.createElement("div");
                dateCell.className = "date-cell";
                dateCell.textContent = i;

                dateCell.addEventListener("click", function () {
                    alert(`Selected Gregorian Date: ${i}/${currentDate.month() + 1}/${currentDate.year()}`);
                });

                datesGrid.appendChild(dateCell);

            }

        }

    }

    calendarToggle.addEventListener("change", renderCalendar);

    renderCalendar();

});
