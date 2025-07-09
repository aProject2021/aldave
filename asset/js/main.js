document.addEventListener('DOMContentLoaded', function () {
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
  const typeSound = document.getElementById("typeSound");
  let audioAllowed = false;

  document.addEventListener("click", () => {
    audioAllowed = true;
  }, { once: true });

  function type() {



    if (i <= rawText.length) {
      // Tomamos solo la parte escrita hasta ahora
      const partial = rawText.substring(0, i);
      // Reemplazamos los \n por <br> justo antes de mostrarlo
      h1.innerHTML = partial.replace(/\n/g, "<br>");
      if (audioAllowed) {
        // Reproducir el audio una sola vez al iniciar
        typeSound.currentTime = 0;
        audioAllowed = false
        typeSound.play().catch(err => {
          console.log("Audio bloqueado por falta de interacción");
        });
      }
      i++;
      setTimeout(type, 80);
    } else {
      h1.style.borderRight = "none";
      // Detener el audio cuando termina de escribir
      typeSound.pause();
      typeSound.currentTime = 0;
    }
  }

  type();

});