document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.add("active-button");
    setTimeout(function () {
      button.classList.remove("active-button");
    }, 50);
  });
});
document.querySelector("#a-button").addEventListener("click", function () {
  playMusic("clap");
});
document.querySelector("#s-button").addEventListener("click", function () {
  playMusic("hihat");
});
document.querySelector("#d-button").addEventListener("click", function () {
  playMusic("kick");
});
document.querySelector("#f-button").addEventListener("click", function () {
  let music = new Audio("sounds/openhat.wav");
  playMusic("kick");
});
document.querySelector("#g-button").addEventListener("click", function () {
  playMusic("openhat");
});
document.querySelector("#h-button").addEventListener("click", function () {
  playMusic("ride");
});
document.querySelector("#j-button").addEventListener("click", function () {
  playMusic("snare");
});
document.querySelector("#k-button").addEventListener("click", function () {
  playMusic("tom");
});

document.querySelector("#l-button").addEventListener("click", function () {
  playMusic("tink");
});
function logKey(e) {
  let soundArray = [
    "clap",
    "hihat",
    "kick",
    "openhat",
    "boom",
    "ride",
    "snare",
    "tom",
    "tink",
  ];
  let keysArray = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  let chosenSound = soundArray[keysArray.indexOf(e.key)];
  playMusic(chosenSound);
}
function playMusic(chosenSound) {
  let music = new Audio(`sounds/${chosenSound}.wav`);
  music.play();
}
document.onkeydown = logKey;
