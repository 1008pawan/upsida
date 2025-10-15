const track = document.querySelector("#cardTrack");
const cards = document.querySelectorAll("#cardTrack .card");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let index = 0;

function updateCarousel() {
  const screenWidth = window.innerWidth;
  let visibleCards = 3;
  if (screenWidth < 768) visibleCards = 1;

  // calculate card width including margin
  const cardStyle = getComputedStyle(cards[0]);
  const cardMarginRight = parseInt(cardStyle.marginRight) || 0;
  const cardWidth = cards[0].offsetWidth + cardMarginRight;

  const maxIndex = cards.length - visibleCards;

  // Infinite loop behavior
  if (index < 0) index = maxIndex;
  if (index > maxIndex) index = 0;

  track.style.transform = `translateX(-${index * cardWidth}px)`;
  track.style.transition = "transform 0.5s ease";
}

nextBtn.addEventListener("click", () => {
  index++;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index--;
  updateCarousel();
});

window.addEventListener("resize", updateCarousel);

// Initialize
updateCarousel();

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
