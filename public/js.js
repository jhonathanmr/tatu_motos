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
