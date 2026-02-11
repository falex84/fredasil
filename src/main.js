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

// WhatsApp Widget Toggle Logic
const waWidget = document.getElementById('waWidget');
const waChatWindow = document.getElementById('waChatWindow');
const waToggle = document.getElementById('waToggle');
const waIconWhatsApp = waToggle.querySelector('.wa-icon-whatsapp');
const waIconClose = waToggle.querySelector('.wa-icon-close');

if (waToggle && waChatWindow) {
    waToggle.addEventListener('click', () => {
        const isActive = waChatWindow.classList.toggle('active');
        waToggle.classList.toggle('active');
        
        if (isActive) {
            waIconWhatsApp.style.display = 'none';
            waIconClose.style.display = 'block';
        } else {
            waIconWhatsApp.style.display = 'block';
            waIconClose.style.display = 'none';
        }
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
