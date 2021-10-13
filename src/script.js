let drumButtons = document.querySelectorAll("button");

drumButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.add("active-button");
    setTimeout(function () {
      button.classList.remove("active-button");
    }, 50);
  });
});

let buttonA = document.querySelector("#a-button");
buttonA.addEventListener("click", function () {
  let music = new Audio("sounds/clap.wav");
  music.play();
});
let buttonS = document.querySelector("#s-button");
buttonS.addEventListener("click", function () {
  let music = new Audio("sounds/hihat.wav");
  music.play();
});
let buttonD = document.querySelector("#d-button");
buttonD.addEventListener("click", function () {
  let music = new Audio("sounds/kick.wav");
  music.play();
});
let buttonF = document.querySelector("#f-button");
buttonF.addEventListener("click", function () {
  let music = new Audio("sounds/openhat.wav");
  music.play();
});
let buttonG = document.querySelector("#g-button");
buttonG.addEventListener("click", function () {
  let music = new Audio("sounds/boom.wav");
  music.play();
});
let buttonH = document.querySelector("#h-button");
buttonH.addEventListener("click", function () {
  let music = new Audio("sounds/ride.wav");
  music.play();
});
let buttonJ = document.querySelector("#j-button");
buttonJ.addEventListener("click", function () {
  let music = new Audio("sounds/snare.wav");
  music.play();
});
let buttonK = document.querySelector("#k-button");
buttonK.addEventListener("click", function () {
  let music = new Audio("sounds/tom.wav");
  music.play();
});
let buttonL = document.querySelector("#l-button");
buttonL.addEventListener("click", function () {
  let music = new Audio("sounds/tink.wav");
  music.play();
});
