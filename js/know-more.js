document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.querySelector(".hero-section");
  const triggerPoint = window.innerHeight * 0.05;
  let clicked = false;

  function updateHeroState() {
    if (clicked || window.scrollY > triggerPoint) {
      heroSection.classList.add("scrolled");
    } else {
      heroSection.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateHeroState);

  heroSection.addEventListener("click", function () {
    clicked = !clicked;
    updateHeroState();
  });

  updateHeroState();
});
