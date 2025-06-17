document.getElementById("whatsapp-btn").addEventListener("click", function () {
  const phoneNumber = "573146355564";
  const message = encodeURIComponent("Hola, estoy interesado en los servicios de Tatu Motos.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
});

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.service-slide');
  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === currentSlide) {
      slide.classList.add('active');
    }
  });
}

// Botones
document.getElementById('nextSlide').addEventListener('click', () => showSlide(currentSlide + 1));
document.getElementById('prevSlide').addEventListener('click', () => showSlide(currentSlide - 1));

// Cambio automático
setInterval(() => {
  showSlide(currentSlide + 1);
}, 10000); // cada 10 segundos

function preventOpenNewTab(galleryItems) {
  galleryItems.forEach(item => {
    // Si el elemento es un enlace, prevenir la acción predeterminada
    const link = item.querySelector("a");
    if (link) {
      link.addEventListener("click", (e) => {
        e.preventDefault();  // Esto previene que el enlace abra una nueva ventana
      });
    }

    // Si el contenido es un video, prevenir la acción predeterminada
    const video = item.querySelector("video");
    if (video) {
      video.addEventListener("click", (e) => {
        e.preventDefault();  // Esto previene que se abra una nueva ventana
        e.stopPropagation(); // Esto evita que el evento se propague al modal
      });
    }

    // Si el contenido es una imagen, prevenir la acción predeterminada
    const img = item.querySelector("img");
    if (img) {
      img.addEventListener("click", (e) => {
        e.preventDefault();  // Esto previene que se abra una nueva ventana
      });
    }
  });
}

// Llamar a la función pasando los elementos de la galería
const galleryItems = document.querySelectorAll('.gallery-item');
preventOpenNewTab(galleryItems);
