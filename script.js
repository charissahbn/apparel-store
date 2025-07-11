// Contact form alert
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! We’ll get back to you soon.');
  this.reset();
});

// Scroll reveal animation
const scrollElements = document.querySelectorAll('.fade-in');

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

scrollElements.forEach(el => scrollObserver.observe(el));

document.querySelectorAll('.slider-card').forEach(card => {
  const slides = card.querySelectorAll('.slide');
  const nextBtn = card.querySelector('.next');
  const prevBtn = card.querySelector('.prev');
  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });
});

  function zoomImage(img) {
    document.getElementById("modalImg").src = img.src;
    document.getElementById("imageModal").style.display = "flex";
  }
  function closeImage() {
    document.getElementById("imageModal").style.display = "none";
  }


