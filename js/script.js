// Menunggu hingga seluruh konten halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan elemen navbar
    const navbar = document.querySelector(".navbar");

    // Menambahkan event listener untuk mendeteksi pergerakan scroll
    window.addEventListener("scroll", () => {
        // Jika scroll melewati 100px, tambahkan efek blur pada navbar
        if (window.scrollY > 100) {
            navbar.classList.add("blur-background");
        } else {
            // Jika kurang dari 100px, hapus efek blur
            navbar.classList.remove("blur-background");
        }
    });
});

// Fungsi untuk menampilkan atau menyembunyikan menu
function toggleMenu() {
    // Mendapatkan elemen menu
    const menu = document.querySelector('.menu');
    // Menambahkan atau menghapus kelas "open" untuk mengatur tampilan menu
    menu.classList.toggle('open');
}
