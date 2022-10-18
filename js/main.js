const btnHamburger = document.querySelector("#btnHamburger");
const sideNav = document.querySelector("#sidenav");

btnHamburger.addEventListener("click", function () {
    if (btnHamburger.classList.contains("open")) {
        btnHamburger.classList.remove("open");
        sideNav.classList.remove("nav-slide");
    } else {
        btnHamburger.classList.add("open");
        sideNav.classList.add("nav-slide");
    }
});
