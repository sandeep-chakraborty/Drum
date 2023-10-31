var buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    var inner = this.innerHTML;
    makeSound(inner);
    buttonAnimation(inner);
  });
});
document.addEventListener("keydown", function (event) {
  var inner = event.key;
  makeSound(inner);
  buttonAnimation(inner);
});

function makeSound(inner) {
  switch (inner) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    default:
      break;
  }
}
function buttonAnimation(currentkey) {
  var active = document.querySelector("." + currentkey);
  active.classList.add("pressed");
  active.classList.add("zoom");
  setTimeout(function () {
    active.classList.remove("pressed");
    active.classList.remove("zoom");
  }, 150);
}
