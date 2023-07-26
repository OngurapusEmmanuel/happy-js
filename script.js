const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears = "12 Dec 2023";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  // console.log(days, hours, minutes, seconds);

  daysEl.innerHtml = days;
  hoursEl.innerHtml = formatTime(hours);
  minutesEl.innerHtml = formatTime(minutes);
  secondsEl.innerHtml = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
// initial call
countdown();

setInterval(countdown, 1000);
