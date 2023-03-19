const menuIcon = document.querySelector(".menu-icon");
const leftSidebar = document.querySelector(".left-sidebar");

menuIcon.addEventListener("click", () => {
    leftSidebar.classList.toggle("active-sidebar")
})