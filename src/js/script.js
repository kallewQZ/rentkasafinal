/* =========================
   CAROUSEL
========================= */
const track = document.getElementById('carouselTrack');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let carouselInterval = null;

function updateCarousel(index) {
    if (!track) return;

    const cards = track.children;
    if (!cards.length) return;

    const gap = 20;
    const cardWidth = cards[0].offsetWidth + gap;

    track.style.transform = `translateX(-${cardWidth * index}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

// Dots clicáveis
dots.forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        currentIndex = idx;
        updateCarousel(currentIndex);
        restartCarousel();
    });
});

// Autoplay
function startCarousel() {
    if (!track) return;

    carouselInterval = setInterval(() => {
        const cards = track.children;
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel(currentIndex);
    }, 5000);
}

function restartCarousel() {
    clearInterval(carouselInterval);
    startCarousel();
}

// Ajusta ao redimensionar tela
window.addEventListener('resize', () => {
    updateCarousel(currentIndex);
});

startCarousel();

/* =========================
   FORMULÁRIO
========================= */
const form = document.getElementById('contactForm');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        form.reset();
    });
}

/* =========================
   MENU MOBILE
========================= */
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

if (menuToggle && mobileNav) {

    // Abrir / fechar menu
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        document.body.style.overflow =
            mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    // Fecha ao clicar em link
    document.querySelectorAll('.mobile-nav a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Fecha ao voltar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900) {
            mobileNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}
