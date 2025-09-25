// Mobile menu toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
  document.querySelector(".nav-menu").classList.toggle("active");
});

document.querySelectorAll(".nav-item.mega-parent > a").forEach((link) => {
  link.addEventListener("click", function (e) {
    const parent = this.parentElement;

    const megaMenu = parent.querySelector(".mega-menu");
    if (megaMenu) {
      e.preventDefault();
      parent.classList.toggle("active");
    }
  });
});
