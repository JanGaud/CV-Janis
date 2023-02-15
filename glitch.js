const glitch = document.getElementById("glitch");

setInterval(function() {
  glitch.dataset.text = glitch.innerHTML;
  glitch.classList.toggle("glitch");
}, 2000);
