import './style.css'

// Initialize Lucide icons
lucide.createIcons();

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission logic
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const messageInput = document.getElementById('message');
        const submitBtn = contactForm.querySelector('.submit-btn');
        
        const name = nameInput.value.trim();
        const message = messageInput.value.trim();
        
        if (!name || !message) {
            alert("Por favor, introduzca su nombre y su requerimiento.");
            return;
        }

        const originalText = submitBtn.innerText;
        submitBtn.innerText = "Conectando...";
        submitBtn.disabled = true;

        const whatsappNumber = "584242143713";
        const text = encodeURIComponent(`Hola Fredis, mi nombre es ${name}. He visto su web y necesito: ${message}`);
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;

        // Small delay for better UX
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            
            submitBtn.innerText = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
        }, 800);
    });
}

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
