// ===========================
// Congreso ARITAC 2026 - Main Script
// ===========================

// 1. Countdown Timer
function initCountdown() {
    // Set date: August 20, 2026 at 08:30:00
    const targetDate = new Date('August 20, 2026 08:30:00').getTime();

    const updateCountdown = () => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById('countdown').innerHTML = "<h3>¡EL CONGRESO HA COMENZADO!</h3>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('cd-days').innerText = days.toString().padStart(2, '0');
        document.getElementById('cd-hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('cd-minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('cd-seconds').innerText = seconds.toString().padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// 2. Agenda Tabs
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.agenda-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            // Add active to clicked
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// 3. Scroll Reveal Animation
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // trigger on load
}

// 4. WhatsApp RSVP
function initRSVP() {
    const form = document.getElementById('rsvpForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const empresa = document.getElementById('empresa').value;
        const email = document.getElementById('email').value;
        const asistencia = document.getElementById('asistencia').options[document.getElementById('asistencia').selectedIndex].text;
        const acompanantes = document.getElementById('acompanantes').options[document.getElementById('acompanantes').selectedIndex].text;

        const whatsappNumber = '527291026359'; // Aritac Support Number

        const text = `
━━━━━━━━━━━━━━━━━
🎫 *REGISTRO CONGRESO ARITAC 2026*
━━━━━━━━━━━━━━━━━

👤 *Nombre:* ${nombre}
🏢 *Empresa:* ${empresa}
📧 *Correo:* ${email}

✅ *Asistencia:* ${asistencia}
👥 *Acompañantes:* ${acompanantes}

━━━━━━━━━━━━━━━━━
_Nos vemos el 20 y 21 de Agosto en la Exhacienda del Carmen, Toluca._
        `.trim();

        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
    });
}

// Agenda Data - Updated
const agendaData = {
    jueves: [
        { time: '9:30 a 10:30', speaker: 'Rogelio Salcedo Villacampa', type: 'speaker' },
        { time: '10:30 a 11:30', speaker: 'PANEL', type: 'panel' },
        { time: '12:00 a 1:00', speaker: 'Alberto del Castillo Roman', type: 'speaker' },
        { time: '2:30 a 3:30', speaker: 'Martha Hernández Reyes', type: 'speaker' },
        { time: '3:30 a 4:30', speaker: 'Jimena Osio Rioseco', type: 'speaker' }
    ],
    viernes: [
        { time: '9:00 a 10:00', speaker: 'Juan Pablo Ventosa Franqués', type: 'speaker' },
        { time: '10:00 a 11:00', speaker: 'Fernando Soto Vilchis', type: 'speaker' },
        { time: '11:30 a 12:30', speaker: 'José Balam Hernández Aguilar / Samuel Adrian Fernández Ubando', type: 'speaker' },
        { time: '12:30 a 1:30', speaker: 'Miguel Ángel Andrade García Alonso', type: 'speaker' }
    ]
};

// Initialize everything on load
document.addEventListener('DOMContentLoaded', () => {
    initCountdown();
    initTabs();
    initScrollReveal();
    initRSVP();
});