// Interação do menu responsivo e scroll suave
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.main-nav a');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.querySelector('.form-feedback');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('open'));
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
    }
  });
});

// Validação simples do formulário
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!name || !email || !message) {
    formFeedback.textContent = 'Por favor, preencha todos os campos antes de enviar.';
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    formFeedback.textContent = 'Informe um endereço de email válido.';
    return;
  }

  formFeedback.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
  contactForm.reset();
});

// Suave fade-in ao scroll para seções
const animatedSections = document.querySelectorAll('.section, .hero-section');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

animatedSections.forEach(section => observer.observe(section));
