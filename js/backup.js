const btn = document.getElementById("btnHamburger");
const sideNav = document.getElementById("sidenav");

const slider = () => {
    sideNav.classList.contains("nav-slide")
        ? sideNav.classList.remove("nav-slide")
        : sideNav.classList.add("nav-slide");
};
