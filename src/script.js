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
function logKey(e) {
  let chosenSound = soundArray[keysArray.indexOf(e.key)];
  let button = document.querySelector(`#${e.key}-button`);
  button.classList.add("active-button");
  setTimeout(function () {
    button.classList.remove("active-button");
  }, 70);
  playMusic(chosenSound);
}
function playMusic(chosenSound) {
  let music = new Audio(`sounds/${chosenSound}.wav`);
  music.play();
}
document.querySelectorAll("button").forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.add("active-button");
    setTimeout(function () {
      button.classList.remove("active-button");
    }, 70);
    let chosenSound =
      soundArray[keysArray.indexOf(button.innerText.charAt(0).toLowerCase())];
    playMusic(chosenSound);
  });
});
document.onkeydown = logKey;
