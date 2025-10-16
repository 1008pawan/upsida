const partners = document.querySelector(".partners");
const leftBtn = document.querySelectorAll(".arrow-btn")[0];
const rightBtn = document.querySelectorAll(".arrow-btn")[1];

rightBtn.addEventListener("click", () => {
  partners.scrollBy({ left: 160, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  partners.scrollBy({ left: -160, behavior: "smooth" });
});

const btnDirectors = document.getElementById("btn-directors");
const btnLeadership = document.getElementById("btn-leadership");
const directorsSection = document.getElementById("directors-section");
const leadershipSection = document.getElementById("leadership-section");

btnDirectors.addEventListener("click", function () {
  directorsSection.style.display = "block";
  leadershipSection.style.display = "none";
  btnDirectors.classList.add("btn-active");
  btnDirectors.classList.remove("btn-outline-danger");
  btnLeadership.classList.remove("btn-active");
  btnLeadership.classList.add("btn-outline-danger");
});

btnLeadership.addEventListener("click", function () {
  directorsSection.style.display = "none";
  leadershipSection.style.display = "block";
  btnLeadership.classList.add("btn-active");
  btnLeadership.classList.remove("btn-outline-danger");
  btnDirectors.classList.remove("btn-active");
  btnDirectors.classList.add("btn-outline-danger");
});
