const menu = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const homepage = document.querySelector(".homepage");

menu.addEventListener("click", function() {
    navbar.classList.toggle("change"); 
    homepage.classList.toggle("hidden");
});