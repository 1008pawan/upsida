  // Toggle main menu
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // Toggle submenus on mobile
  document.querySelectorAll(".nav-item.mega-parent > a").forEach(link => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // prevent link redirect
        link.parentElement.classList.toggle("active");
      }
    });
  });