// Función para navegar entre secciones
function navigateTo(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        selectedSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Modal Functions
function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// Manejo del formulario de sugerencias
document.getElementById('suggestionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mensaje = document.getElementById('mensaje').value.trim();
    if (mensaje === '') {
        alert('Por favor, escribe una sugerencia antes de enviar.');
        return;
    }

    alert('¡Gracias por tu sugerencia! La tendremos en cuenta.');
    
    document.getElementById('mensaje').value = ''; 
    closeModal();
});

// Mostrar sección inicial basada en la URL
document.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1);
    navigateTo(hash || 'inicio');
});

// Smooth scrolling para los enlaces del menú
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href').substring(1);
        if (sectionId) navigateTo(sectionId);
    });
});
