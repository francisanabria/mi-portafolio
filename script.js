const navLinks = document.querySelectorAll('.header__nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    // si quieres scroll suave:
    // e.preventDefault();
    // const target = document.querySelector(this.getAttribute('href'));
    // target.scrollIntoView({ behavior: 'smooth' });

    navLinks.forEach(l => l.classList.remove('is-active'));
    this.classList.add('is-active');
  });
});
// Carrusel infinito de skills
const skillsGrid = document.querySelector('.skills__grid');
const btnPrev = document.getElementById('skillsPrev');
const btnNext = document.getElementById('skillsNext');

if (skillsGrid && btnPrev && btnNext) {
  const step = 1; // cuántas tarjetas se mueven por vez

  const moveNext = () => {
    for (let i = 0; i < step; i++) {
      const first = skillsGrid.firstElementChild;
      skillsGrid.appendChild(first);
    }
  };

  const movePrev = () => {
    for (let i = 0; i < step; i++) {
      const last = skillsGrid.lastElementChild;
      skillsGrid.prepend(last);
    }
  };

  // Flechas
  btnNext.addEventListener('click', moveNext);
  btnPrev.addEventListener('click', movePrev);

  // Rueda del mouse: mover iconos, no la página
  skillsGrid.addEventListener('wheel', (e) => {
    e.preventDefault();           // evita que baje la página
    if (e.deltaY > 0) {
      moveNext();                 // rueda hacia abajo -> a la derecha
    } else {
      movePrev();                 // rueda hacia arriba -> a la izquierda
    }
  }, { passive: false });

}

(function () {
  const params = new URLSearchParams(window.location.search);
  if (!params.has('sent')) return;

  const successBox = document.getElementById('contact-success');
  const form = document.getElementById('contact-form');

  if (successBox && form) {
    form.style.display = 'none';
    successBox.classList.add('contact__success--visible');
  }
})();