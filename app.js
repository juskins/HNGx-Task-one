// script.js
document.addEventListener("DOMContentLoaded", function () {
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');

    // Get the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getUTCDay()];

    // Get the current UTC time in milliseconds
    const utcTime = today.getTime();

    // Update the elements with the values
    dayOfWeekElement.textContent = `Current Day of the Week: ${dayOfWeek}`;
    utcTimeElement.textContent = `Current UTC Time: ${utcTime} milliseconds`;
});
