// Navigation Functions
function navigateTo(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  // Show selected section
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = 'block';
    // Smooth scroll to section
    selectedSection.scrollIntoView({ behavior: 'smooth' });
  }
}

// Modal Functions
function openModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
}

// Close modal when pressing Escape
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

// Form Submission
document.getElementById('suggestionForm').addEventListener('submit', function(e) {
  e.preventDefault();
  // Get form data
  const mensaje = document.getElementById('mensaje').value;
  // Here you would typically send the data to a server
  // For now, we'll just show an alert
  const mensajeGracias = document.getElementById('mensaje-gracias');
  mensajeGracias.style.display = 'block';
  mensajeGracias.textContent = '¡Gracias por tu sugerencia! La tendremos en cuenta.';
  // Clear form and close modal
  document.getElementById('mensaje').value = '';
  closeModal();
});

// Show initial section on page load
document.addEventListener('DOMContentLoaded', function() {
  navigateTo('inicio');
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.href.split('#')[1];
    navigateTo(sectionId);
  });
});
