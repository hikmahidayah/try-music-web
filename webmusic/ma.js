// Ambil elemen-elemen DOM
const audio = document.getElementById('audio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const volumeSlider = document.getElementById('volume');
const progressBar = document.getElementById('progress');
const currentTimeElem = document.getElementById('currentTime');
const durationElem = document.getElementById('duration');
// Fungsi format waktu detik ke mm:ss
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}

// Event play
playBtn.addEventListener('click', () => {
    audio.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline';
});
// Event pause
pauseBtn.addEventListener('click', () => {
    audio.pause();
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'inline';
});

// Kontrol volume
volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
    volumeSlider.setAttribute('aria-valuenow', volumeSlider.value);
});
// Seek progress bar
progressBar.addEventListener('input', () => {
    if (audio.duration) {
        const seekTime = (progressBar.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    }
});

// Update progress bar dan waktu berjalan
audio.addEventListener('timeupdate', () => {
    if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;
        progressBar.setAttribute('aria-valuenow', progress.toFixed(0));
        currentTimeElem.textContent = formatTime(audio.currentTime);
    }
});
// Set durasi saat metadata dimuat
audio.addEventListener('loadedmetadata', () => {
    durationElem.textContent = formatTime(audio.duration);
    progressBar.max = 100;
});

// Reset tombol saat lagu selesai
audio.addEventListener('ended', () => {
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'inline';
    progressBar.value = 0;
    currentTimeElem.textContent = '00:00';
});
// Set volume awal
audio.volume = volumeSlider.value;