function goToMain() {
  window.location.href = "main.html"; // this will be the next page after home
}

function toggleMusic() {
  const audio = document.getElementById("bgMusic");
  const btn = document.querySelector(".mute-btn");
  
  if (audio.paused) {
    audio.play();
    btn.textContent = "🔊";
  } else {
    audio.pause();
    btn.textContent = "🔇";
  }
}
