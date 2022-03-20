const gliderImages = document.querySelectorAll(".glider-image");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-image");
const closeModal = document.querySelector(".modal-container i");
const modalContainer = document.querySelector(".modal-container");
const additionalInfos = document.querySelectorAll(".additional-list");
const sliderOverlayTitles = document.querySelectorAll(
  ".glider-image-overlay h1"
);

let resizeSliderTimer;

let minSlides = 2;
let maxSlides = gliderImages.length < 5 ? 4 : 5;

const slider = new Glider(document.querySelector(".glider"), {
  slidesToShow: 2,
  scrollLock: true,
  arrows: {
    prev: ".glider-prev",
    next: ".glider-next",
  },
});

document.addEventListener("DOMContentLoaded", () => {
  setSlidesToShow(0);
  setModalTitle();
});

window.addEventListener("resize", (e) => {
  setSlidesToShow(250);
  setModalTitle();
});

function setSlidesToShow(time) {
  clearTimeout(resizeSliderTimer);
  resizeSliderTimer = setTimeout(() => {
    if (window.innerWidth > 992 && window.innerWidth <= 1353) {
      slider.setOption({
        slidesToShow: maxSlides - 1,
      });
      // slider.updateControls();
    } else if (window.innerWidth > 1353) {
      slider.setOption({
        slidesToShow: maxSlides,
      });
    } else {
      slider.setOption({
        slidesToShow: minSlides,
      });
    }
    slider.refresh();
  }, time);
}

// Get Slider-Height and set Modal Title to correct top
function setModalTitle() {
  let sliderHeight = document.querySelector(".glider").getBoundingClientRect()
    .height;
  sliderOverlayTitles.forEach((slider) => {
    slider.style.top = `${sliderHeight - 40}px`;
  });
}

gliderImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    modalImage.src = e.currentTarget.dataset.src;
    modal.classList.toggle("active-modal");
  });
});

// Close modal when clicking next to the picture
modalContainer.addEventListener("click", (e) => {
  if (!e.target.classList.contains("modal-image")) {
    modal.classList.toggle("active-modal");
  }
});
