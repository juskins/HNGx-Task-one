// script.js
document.addEventListener("DOMContentLoaded", function () {
       const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
       const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
   
       // Get the current day of the week
       const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
       const today = new Date();
       const dayOfWeek = daysOfWeek[today.getUTCDay()];
   
       // Calculate the current UTC time in milliseconds for WAT (UTC+1)
       const utcOffsetMillis = 1 * 60 * 60 * 1000; // UTC+1 in milliseconds
       const watUtcTime = new Date().getTime() + utcOffsetMillis;
   
       // Update the elements with the values
       dayOfWeekElement.textContent = `Current Day of the Week: ${dayOfWeek}`;
       utcTimeElement.textContent = `Current UTC Time (WAT): ${watUtcTime} milliseconds`;
   });
   