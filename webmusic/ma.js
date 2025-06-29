document.querySelector('.dropbtn').addEventListener('click', function(e){
    e.preventDefault();
    const dropdown = this.parentElement;
    dropdown.classlist.toggle('show');
})




// TAKE DROPDOWN MENU
const dropdownIcon = document.getElementById('dropdownIcon');
const dropdownMenu = document.getElementById('dropdownMenu');

// Tambahkan event listener untuk klik ikon
dropdownIcon.addEventListener('click', () => {
    // Toggle kelas "active" untuk menampilkan/menyembunyikan menu
    if (dropdownMenu.style.display === "none" || dropdownMenu.style.display === "") {
        dropdownMenu.style.display = "flex"; // Tampilkan menu
    } else {
        dropdownMenu.style.display = "none"; // Sembunyikan menu
    }
});


//close dropdown
window.addEventListener('click', function (e){
    if (!e.target.matches('.dropbtn')) {
        document.querySelectorAll('dropdown').forEach(function (dropdown) {
            dropdown.classList.remove('show');
        })
    }
})

const switchBtn = document.getElementById("switch-track");
let currentTrack = "beethoven";

switchBtn.addEventListener("click", () => {
  if (currentTrack === "beethoven") {
    audio.src = "mozart.mp3";
    trackTitle.textContent = "Mozart";
    switchBtn.textContent = "Switch to Beethoven";
    currentTrack = "mozart";
  } else {
    audio.src = "beethoven.mp3";
    trackTitle.textContent = "Beethoven";
    switchBtn.textContent = "Switch to Mozart";
    currentTrack = "beethoven";
  }
  audio.play();
  isPlaying = true;
  playBtn.textContent = "⏸";
  waveform.style.opacity = "1";
});








document.getElementById('home-link').addEventListener('click', function() {
    document.getElementById('home').classList.add('active');
    document.getElementById('studio-info').classList.remove('active');
})

document.getElementById('studio-info-link').addEventListener('click', function() {
    document.getElementById('studio-info').classList.add('active');
    document.getElementById('home').classList.remove('active');
})