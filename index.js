document.querySelectorAll(".drum").forEach(function(drum) {
  drum.addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      playAudio("sounds/tom-1.mp3");
      break;
    case "a":
      playAudio("sounds/tom-2.mp3");
      break;
    case "s":
      playAudio("sounds/tom-3.mp3");
      break;
    case "d":
      playAudio("sounds/tom-4.mp3");
      break;
    case "j":
      playAudio("sounds/snare.mp3");
      break;
    case "k":
      playAudio("sounds/crash.mp3");
      break;
    case "l":
      playAudio("sounds/kick-bass.mp3");
      break;
    default:
      console.log(key);
  }
}

function playAudio(audioSrc) {
  let audio = new Audio(audioSrc);
  audio.play();
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
