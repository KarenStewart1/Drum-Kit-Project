let drumButtons = document.querySelectorAll("button");

drumButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.classList.add("active-button");
    setTimeout(function () {
      button.classList.remove("active-button");
    }, 50);
  });
});

let audio = document.querySelectorAll("audio");
audio.forEach(function (audio) {
  audio.classList.add("active-audio");
  setTimeout(function () {
    audio.classList.remove("active-audio");
  }, 80);
});
