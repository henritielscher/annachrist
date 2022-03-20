const burger = document.querySelector(".navbar-landing-burger");
const navbarLinks = document.querySelector(".navbar-landing");
const languageSelectors = document.querySelectorAll(".navbar-language div");

burger.addEventListener("click", (e) => {
  navbarLinks.classList.toggle("navbar-active");
  burger.classList.toggle("burger-toggle");
});

languageSelectors.forEach((selector) => {
  selector.addEventListener("click", () => {
    if (selector.classList.contains("active-language")) {
      return;
    } else {
      languageSelectors.forEach((sel) => {
        if (sel.classList.contains("active-language")) {
          sel.classList.remove("active-language");
        }
      });
    }
    selector.classList.toggle("active-language");
  });
});
