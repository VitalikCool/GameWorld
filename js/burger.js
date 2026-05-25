const burgerMenu = document.querySelector(".menu-burger");
const listMenu = document.querySelector(".menu-list");

burgerMenu.addEventListener("click", function(e){
    e.stopPropagation();
    listMenu.classList.toggle("menu-active");
    listMenu.classList.toggle("menu-list");
})