let slideIndex = 0;
showSlides();

// const photos=["img/birthDay.jpg","img/sharon1.jpg","img/sharon2.jpg","img/sharon3,jpg","img/sharon4.jpg","img/sharon5.jpg"]
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYears = "21 November 2024";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  // console.log(days, hours, minutes, seconds);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
// initial call
countdown();

setInterval(countdown, 1000);


let currentIndex=0;

// function changeBackground(){
//   currentIndex=(currentIndex+1)%photos.length;

//   console.log("current background image :",photos[currentIndex]);

//   document.body.style.backgroundImage=url(${photos[currentIndex]});

// }
// function ChangeBackgroundImage(){

//   var randomChange=document.getElementById('body');
// const images=['img/sharon1.jpg','img/sharon2.jpg','img/sharon3.jpg','img/sharon4.jpg','img/sharon5.jpg']

//   var bg=Math.floor(Math.random()*images.length);

//   randomChange.style.backgroundImage='url('+images[bg]+')';

// var delayInSeconds=5000;
// // }  var images=["img/sharon1.jpg","img/sharon2.jpg","img/sharon3.jpg","img/sharon4.jpg","img/sharon5.jpg"];

// ChangeBackgroundImage();
// setInterval(ChangeBackgroundImage,delayInSeconds);

var randomChange=document.getElementById('body'),
images=['img/sharon1.jpg','img/sharon2.jpg','img/sharon3.jpg']

var imgCount=images.length;

var number=Math.floor(Math.random()*imgCount);

window.onload=function(){

  randomChange.style.backgroundImage='url('+images[number]+')'
}
