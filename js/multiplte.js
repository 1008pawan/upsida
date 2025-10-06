    (function () {
      const menuToggle = document.getElementById('menuToggle');
      const nav = document.getElementById('mainNav');
      const submenuButtons = document.querySelectorAll('.submenu-btn');

      // helpers
      const isMobile = () => window.innerWidth <= 768;
      function closeAllSubmenus() {
        document.querySelectorAll('.submenu').forEach(s => {
          s.classList.remove('open');
          // update aria on corresponding button
          const btn = s.parentElement.querySelector('.submenu-btn');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });
      }

      // Toggle main menu
      menuToggle.addEventListener('click', () => {
        const open = !nav.classList.contains('open');
        if (open) {
          nav.classList.add('open');
          menuToggle.classList.add('active');
          menuToggle.setAttribute('aria-expanded', 'true');
          nav.setAttribute('aria-hidden', 'false');
        } else {
          nav.classList.remove('open');
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          nav.setAttribute('aria-hidden', 'true');
          // hide submenus when main menu closes
          closeAllSubmenus();
        }
      });

      // Submenu toggle on click — only act for mobile widths (desktop uses hover)
      submenuButtons.forEach(btn => {
        btn.addEventListener('click', function (e) {
          if (!isMobile()) return; // let desktop hover behavior work
          e.preventDefault();

          const parent = btn.parentElement;
          const submenu = parent.querySelector('.submenu');
          const wasOpen = submenu.classList.contains('open');

          // close other submenus
          document.querySelectorAll('.submenu').forEach(s => {
            if (s !== submenu) s.classList.remove('open');
          });

          if (wasOpen) {
            submenu.classList.remove('open');
            btn.setAttribute('aria-expanded', 'false');
          } else {
            submenu.classList.add('open');
            btn.setAttribute('aria-expanded', 'true');
            // ensure main nav is open, if not open it
            if (!nav.classList.contains('open')) {
              nav.classList.add('open');
              menuToggle.classList.add('active');
              menuToggle.setAttribute('aria-expanded', 'true');
              nav.setAttribute('aria-hidden', 'false');
            }
          }
        });
      });

      // Close menu if clicked outside (mobile)
      document.addEventListener('click', (e) => {
        if (!isMobile()) return;
        if (!e.target.closest('.nav-inner')) {
          // close main menu and all submenus
          if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            nav.setAttribute('aria-hidden', 'true');
            closeAllSubmenus();
          }
        }
      });

      // On resize: if switching from mobile to desktop, ensure mobile-only states cleared
      window.addEventListener('resize', () => {
        if (!isMobile()) {
          // remove open attributes/classes added for mobile
          nav.classList.remove('open');
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          nav.setAttribute('aria-hidden', 'false'); // visible on desktop
          closeAllSubmenus();
        } else {
          // on mobile, hide nav by default
          nav.classList.remove('open');
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
          nav.setAttribute('aria-hidden', 'true');
          closeAllSubmenus();
        }
      });

      // initial accessibility state
      if (isMobile()) {
        nav.setAttribute('aria-hidden', 'true');
        menuToggle.setAttribute('aria-expanded', 'false');
      } else {
        nav.setAttribute('aria-hidden', 'false');
      }
    })();