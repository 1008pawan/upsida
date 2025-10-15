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


// for video iframe

// JavaScript to handle popup
const openBtn = document.getElementById("openVideoPopup");
const closeBtn = document.getElementById("closeVideoPopup");
const videoModal = document.getElementById("videoModal");
const videoIframe = document.getElementById("videoIframe");

openBtn.addEventListener("click", function () {
  videoIframe.src =
    "https://www.youtube.com/embed/8N5D1m4Nq2c?si=T8SFdt1_7TV9sZuJ";
  videoModal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  videoIframe.src = ""; // Stop the video
  videoModal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target == videoModal) {
    videoIframe.src = "";
    videoModal.style.display = "none";
  }
});
