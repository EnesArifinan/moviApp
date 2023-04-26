// video durdurup calistirma
var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}

// sayfalar arsi gecis
const elestiri = document.querySelector("#elestiri");
const oneri = document.querySelector("#oneri");

elestiri.addEventListener("click", () => {
  window.location.href = "elestiri/index.html";
});

oneri.addEventListener("click", () => {
  window.location.href = "oneri/index.html";
});
