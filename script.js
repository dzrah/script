var btn = document.getElementById("randomize");
const audio = new Audio("tomp3.cc - Drumroll sound effect_320kbps.mp3");

btn.addEventListener("click", function () {
  btn.disabled = true;
  audio.play();
  var cpt = 0;
  var interval = setInterval(function () {
    cpt++;
    var random = Math.floor(Math.random() * 150 + 1);
    document.getElementById("lucky").innerHTML = "" + random;
    if (cpt === 80) {
      btn.disabled = false;
      clearInterval(interval);
    }
  }, 70);
});
