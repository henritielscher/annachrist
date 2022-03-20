const burger = document.querySelector(".navbar-burger");
const navbar = document.querySelector(".navbar");
const languageButtons = document.querySelectorAll(".navbar-lang li");
const pageHeader = document.querySelector("header");
const scrollArrow = document.querySelector(".topscroll-arrow");
const mainHeader = document.querySelector(".main-header");
const footer = document.querySelector("footer");
const year = footer.querySelector(".year");

let resizeTimer;
let activeLanguage;
let headerPosition;
let currentPage = document.URL.split("/").splice(-1, 1).toString();

document.addEventListener("DOMContentLoaded", (e) => {
  activeLanguage = document.querySelector(".active-language").dataset.lang;
  let cookie = `lang=${activeLanguage};max-age=2419200;path=/`;
  document.cookie = cookie;
  year.innerHTML = new Date().getFullYear();
});

burger.addEventListener("click", (e) => {
  navbar.classList.toggle("navbar-active");
  burger.classList.toggle("burger-toggle");
});

languageButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.dataset.lang === activeLanguage) {
      return;
    } else {
      location.assign(`../${button.dataset.lang}/${currentPage}`);
    }
  });
});

// Scroll-Events Navbar & TopScroll-Arrow
document.addEventListener("scroll", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    console.log(document.body.clientHeight);
    if (
      window.scrollY > navbar.clientHeight &&
      document.body.clientHeight > 1050
    ) {
      pageHeader.classList.add("navbar-scroll");
    } else {
      pageHeader.classList.remove("navbar-scroll");
    }

    if (scrollArrow) {
      if (window.scrollY > 1200) {
        scrollArrow.classList.add("active-arrow");
      } else {
        scrollArrow.classList.remove("active-arrow");
      }
    }
  }, 100);
});

if (scrollArrow) {
  scrollArrow.addEventListener("click", () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  });
}
