const navHamburger = document.getElementById("nav-hamburger");
const navMobile = document.getElementById("nav-mobile");
const crossMobile = document.getElementById("cross-mobile");
const slider = document.getElementById("slider");
const prevButton = document.querySelectorAll(".arrow-prev");
const nextButton = document.querySelectorAll(".arrow-next");
const sliderWidth = slider.offsetWidth;
const sliderContent = document.querySelectorAll(
  ".slider-container .slider img"
);
const dots = document.querySelectorAll("#images-dots a");
const lightbox = document.getElementById("lightbox");
const lightboxSlider = document.getElementById("lightbox-slider");
const lightboxSliderWidth = lightboxSlider.offsetWidth;
const lightboxClose = document.getElementById("lightbox-close");
const lightboxDotsContainer = document.getElementById("lightbox-dots");
console.log(lightboxDotsContainer);
let currentSlide = 0;

function createDots() {
  for (let i = 0; i < sliderContent.length; i++) {
    const dot = document.createElement("a");
    dot.setAttribute("data-index", i + 1);
    dot.classList.add("dot");
    if (i === 0) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", goToSlide);
    lightboxDotsContainer.appendChild(dot);
  }
}
function scrollToSlide() {
  const lightboxDots = document.querySelectorAll("#lightbox-dots a");
  slider.scrollTo({
    left: currentSlide * sliderWidth,
    behavior: "smooth",
  });
  lightboxSlider.scrollTo({
    left: currentSlide * lightboxSliderWidth,
    behavior: "smooth",
  });
  lightboxDots.forEach((dot) => {
    dot.classList.remove("active");
  });
  lightboxDots[currentSlide].classList.add("active");
}

function toggleMenu() {
  navMobile.classList.toggle("show-menu");
}
function closeLightBox() {
  lightbox.classList.remove("open");
}
function moveTorRight() {
  currentSlide = (currentSlide + 1) % sliderContent.length;
  scrollToSlide();
}

function moveToLeft() {
  currentSlide =
    (currentSlide - 1 + sliderContent.length) % sliderContent.length;
  scrollToSlide();
}

function goToSlide(e) {
  const slideIndex = e.target.dataset.index;
  currentSlide = slideIndex - 1;
  scrollToSlide();
}

function lightboxOpen() {
  lightbox.classList.add("open");
  currentSlide = Array.from(sliderContent).findIndex(
    (slide) => slide.src === this.src
  );
  scrollToSlide();
}

navHamburger.addEventListener("click", toggleMenu);

crossMobile.addEventListener("click", toggleMenu);

lightboxClose.addEventListener("click", closeLightBox);

for (prev of prevButton) {
  prev.addEventListener("click", moveToLeft);
}

for (next of nextButton) {
  next.addEventListener("click", moveTorRight);
}
for (content of sliderContent) {
  content.addEventListener("click", lightboxOpen);
}

dots.forEach((dot) => {
  dot.addEventListener("click", goToSlide);
});

document.addEventListener("DOMContentLoaded", createDots);
