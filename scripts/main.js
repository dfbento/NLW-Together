const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// efeito de sombra de scroll do header
function chanceHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight
  if (window.scrollY >= navHeight) {
    // scroll maior que altura do header
    header.classList.add('scroll')
  } else {
    // scroll menor que altura do header
    header.classList.remove('scroll')
  }
}

// TESTIMONIALS CAROUSEL

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

// SCROLL REVEAL JS - MOSTRAR ELEMENTOS QUANDO SCROLL NA PAGINA.
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .image, #home .text, 
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// back to up - botão voltar ao topo
function backToTop() {
  const backToUpButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToUpButton.classList.add('show')
  } else {
    backToUpButton.classList.remove('show')
  }
}

// when scroll page
window.addEventListener('scroll', function () {
  chanceHeaderWhenScroll()
  backToTop()
})
