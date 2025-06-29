const audio = document.getElementById("audio-player");
  const playBtn = document.getElementById("play-btn");
  const trackTitle = document.getElementById("track-title");
  const waveform = document.getElementById("wave");

  let isPlaying = true;

  playBtn.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      playBtn.textContent = "▶️";
      waveform.style.opacity = "0.5";
    } else {
      audio.play();
      playBtn.textContent = "⏸";
      waveform.style.opacity = "1";
    }
    isPlaying = !isPlaying;
  });

  // Play audio saat halaman dimuat
  window.onload = () => {
    audio.play();
  };