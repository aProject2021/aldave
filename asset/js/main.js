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

  document.querySelectorAll('.service-item').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.service-item').forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      const target = item.getAttribute('data-target');
      document.querySelectorAll('.gallery .imagen').forEach(img => {
        img.classList.remove('active');
        if (img.getAttribute('data-id') === target) {
          img.classList.add('active');
        }
      });
    });
  });
  const anchoPantalla = window.innerWidth;
  let rawText = "El arte de construir marcas\nque hacen la diferencia";
  if (anchoPantalla <= 768) {
    rawText = "El arte de construir marcas que hacen la diferencia";
  }

  const h1 = document.getElementById("typed");
  let i = 0;

  function type() {
    if (i <= rawText.length) {
      // Tomamos solo la parte escrita hasta ahora
      const partial = rawText.substring(0, i);
      // Reemplazamos los \n por <br> justo antes de mostrarlo
      h1.innerHTML = partial.replace(/\n/g, "<br>");
      i++;
      setTimeout(type, 80);
    } else {
      h1.style.borderRight = "none";
    }
  }

  type();

});