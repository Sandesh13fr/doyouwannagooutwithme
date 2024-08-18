onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};/*
function playSoundOnClick() {
  const audio = new Audio(""); // Replace with your audio file path
  audio.play();
}

document.addEventListener('click', playSoundOnClick);
*/
function playSoundOnClick() {
  const audio = new Audio("/Resources/Encanto.mp3"); // Replace with your audio file path

  // Add a class to the body to prevent page loading and animations
  document.body.classList.add('loading');

  audio.addEventListener('canplaythrough', () => {
    // Remove the loading class once audio is ready to play
    document.body.classList.remove('loading');
  });

  audio.play();
}

document.addEventListener('click', playSoundOnClick);
