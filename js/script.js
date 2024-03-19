document.addEventListener("DOMContentLoaded", function() {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slider img");
  const slideWidth = slides[0].clientWidth;
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }, 4000); // Change slide every 3 seconds
});
