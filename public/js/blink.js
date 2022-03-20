const blinkHeader = document.querySelector(".main-header");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => blinkHeader.parentElement.classList.toggle("blink"), 1200);
});
