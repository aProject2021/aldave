document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksMobile = document.getElementById('nav-links-mobile');
  const overlay = document.getElementById('overlay');

  // Mobile menu toggle
  if (menuToggle && navLinksMobile) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('header__toggle--open');
      navLinksMobile.classList.toggle('header__menu--mobile--open');
      if (overlay) {
        overlay.classList.toggle('overlay--active');
      }
    });
  }

  // Close menu on overlay click
  if (overlay) {
    overlay.addEventListener('click', function () {
      menuToggle.classList.remove('header__toggle--open');
      navLinksMobile.classList.remove('header__menu--mobile--open');
      overlay.classList.remove('overlay--active');
    });
  }

  // Close menu on link click (except dropdown trigger)
  const mobileLinks = document.querySelectorAll('.header__menu--mobile a:not(.header__mobile-dropdown-trigger)');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navLinksMobile) {
        navLinksMobile.classList.remove('header__menu--mobile--open');
      }
      if (menuToggle) {
        menuToggle.classList.remove('header__toggle--open');
      }
      if (overlay) {
        overlay.classList.remove('overlay--active');
      }
    });
  });

  // Mobile dropdown toggle
  const dropdownTrigger = document.getElementById('servicios-trigger');
  const dropdownMenu = document.getElementById('servicios-dropdown');
  
  if (dropdownTrigger && dropdownMenu) {
    dropdownTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      dropdownTrigger.classList.toggle('header__mobile-dropdown-trigger--open');
      dropdownMenu.classList.toggle('header__mobile-dropdown-menu--open');
    });
  }
});
