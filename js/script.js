let btnmenu = document.querySelector("#menu-btn");
let links = document.querySelector(".links");
btnmenu.onclick = () => {
    btnmenu.classList.toggle("fa-times");
    links.classList.toggle("active");
};