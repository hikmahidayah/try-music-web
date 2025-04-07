const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause");
const playPauseIcon = document.getElementById("icon-play-pause");

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseIcon.textContent = "Pause";
    } else {
        audio.pause();
        playPauseIcon.textContent = "Play";
    }
});
