// Event listeners for clicking on drum elements
document.querySelectorAll(".drum").forEach(function(drum) {
  drum.addEventListener("click", function() {
    // Get the inner HTML of the clicked drum element
    let buttonInnerHTML = this.innerHTML;
    // Call the makeSound function with the inner HTML as argument
    makeSound(buttonInnerHTML);
    // Call the buttonAnimation function with the inner HTML as argument
    buttonAnimation(buttonInnerHTML);
  });
});

// Event listener for keypress events
document.addEventListener("keypress", function(event) {
  // Call the makeSound function with the pressed key as argument
  makeSound(event.key);
  // Call the buttonAnimation function with the pressed key as argument
  buttonAnimation(event.key);
});

// Function to play corresponding sound based on the key pressed or drum clicked
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

// Function to play audio based on the audio source provided
function playAudio(audioSrc) {
  let audio = new Audio(audioSrc);
  audio.play();
}

// Function to add animation effect to the button being pressed
function buttonAnimation(currentKey) {
  // Select the button element with class equal to the pressed key
  let activeButton = document.querySelector("." + currentKey);
  // Add the 'pressed' class to the active button to animate it
  activeButton.classList.add("pressed");
  // Remove the 'pressed' class after 100 milliseconds to end the animation
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

