const hamburger = document.querySelector(".hamburger");
const topnav = document.querySelector(".topnav");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    topnav.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    topnav.classList.remove("active");
}