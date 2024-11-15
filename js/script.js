document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            navbar.classList.add("blur-background");
        } else {
            navbar.classList.remove("blur-background");
        }
    });
});

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('open');
}
