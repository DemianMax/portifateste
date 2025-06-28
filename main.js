// main.js
// Modularized GSAP + ScrollTrigger animações para as seções

// 1. Animação letra a letra da frase principal (INTRO)
function animateIntroText() {
  const intro = document.querySelector('.intro-headline');
  const text = intro.textContent;
  intro.textContent = '';
  // Cria um span para cada letra
  text.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = 0;
    span.style.display = 'inline-block';
    intro.appendChild(span);
  });
  // Animação GSAP: fade-in letra a letra
  gsap.to('.intro-headline span', {
    opacity: 1,
    y: 0,
    stagger: 0.045,
    duration: 1.2,
    ease: "power2.out",
    delay: 0.5
  });
}

// 2. Animações de entrada via scroll + Parallax SVGs na Seção 2
function animateSecondary() {
  // Fade-in da frase secundária
  gsap.from('.secondary-headline', {
    scrollTrigger: {
      trigger: '#secondary',
      start: 'top 80%',
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: 'power2.out'
  });

  // Parallax dos SVGs
  gsap.to('.parallax-back', {
    scrollTrigger: {
      trigger: '#secondary',
      scrub: 0.7,
      start: 'top bottom',
      end: 'bottom top'
    },
    y: -70,
    x: 25,
    ease: 'none'
  });
  gsap.to('.parallax-mid', {
    scrollTrigger: {
      trigger: '#secondary',
      scrub: 0.6,
      start: 'top bottom',
      end: 'bottom top'
    },
    y: 45,
    x: -45,
    ease: 'none'
  });
  gsap.to('.parallax-front', {
    scrollTrigger: {
      trigger: '#secondary',
      scrub: 0.5,
      start: 'top bottom',
      end: 'bottom top'
    },
    y: 90,
    x: 60,
    ease: 'none'
  });
}

// 3. Animação das colunas e SVGs na Seção 3
function animateAuthority() {
  gsap.from('.authority-main', {
    scrollTrigger: {
      trigger: '.authority-main',
      start: 'top 80%',
    },
    x: -50,
    opacity: 0,
    duration: 1.1,
    ease: 'power2.out'
  });
  gsap.from('.authority-sub', {
    scrollTrigger: {
      trigger: '.authority-sub',
      start: 'top 85%',
    },
    x: -30,
    opacity: 0,
    duration: 1.1,
    delay: 0.3,
    ease: 'power2.out'
  });
  // Parallax SVGs
  gsap.to('.parallax-svga', {
    scrollTrigger: {
      trigger: '#authority',
      scrub: 0.7,
      start: 'top bottom',
      end: 'bottom top'
    },
    y: 44,
    x: 14,
    ease: 'none'
  });
  gsap.to('.parallax-svgb', {
    scrollTrigger: {
      trigger: '#authority',
      scrub: 0.7,
      start: 'top bottom',
      end: 'bottom top'
    },
    y: -24,
    x: -18,
    ease: 'none'
  });
  gsap.to('.parallax-svgc', {
    scrollTrigger: {
      trigger: '#authority',
      scrub: 0.7,
      start: 'top bottom',
      end: 'bottom top'
    },
    y: 10,
    x: 36,
    ease: 'none'
  });
}

// 4. Animação dos cards de projetos
function animateProjects() {
  gsap.from('.projects-transition h3', {
    scrollTrigger: {
      trigger: '.projects-transition h3',
      start: 'top 90%',
    },
    opacity: 0,
    y: 40,
    duration: 1.1,
    ease: 'power2.out'
  });
  gsap.from('.project-card', {
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 85%',
    },
    opacity: 0,
    y: 50,
    stagger: 0.15,
    duration: 1.1,
    ease: 'power2.out'
  });
}

// 5. Animação da CTA/Contato
function animateContact() {
  gsap.from('.contact h2', {
    scrollTrigger: {
      trigger: '.contact',
      start: 'top 85%',
    },
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power2.out'
  });
  gsap.from('.contact-btn', {
    scrollTrigger: {
      trigger: '.contact-btn',
      start: 'top 90%',
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.9,
    ease: 'power2.out',
    delay: 0.3
  });
}

// Inicializa todas as animações ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  animateIntroText();
  animateSecondary();
  animateAuthority();
  animateProjects();
  animateContact();
});