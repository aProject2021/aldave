document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const overlay = document.getElementById('overlay');

  // Al hacer click en el botón hamburguesa
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');     // Cambia a "X"
    navLinks.classList.toggle('open');       // Muestra u oculta el menú
    overlay.classList.toggle('active');      // Activa el fondo oscuro
  });

  // Al hacer click fuera del menú (overlay)
  overlay.addEventListener('click', () => {
    menuToggle.classList.remove('open');
    navLinks.classList.remove('open');
    overlay.classList.remove('active');
  });
})