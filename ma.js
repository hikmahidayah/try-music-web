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









document.getElementById('home-link').addEventListener('click', function() {
    document.getElementById('home').classList.add('active');
    document.getElementById('studio-info').classList.remove('active');
})

document.getElementById('studio-info-link').addEventListener('click', function() {
    document.getElementById('studio-info').classList.add('active');
    document.getElementById('home').classList.remove('active');
})