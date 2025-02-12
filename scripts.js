// Función para cambiar de sección
function cambiarSeccion(seccionId) {
  // Ocultar todas las secciones
  const secciones = document.querySelectorAll('.seccion');
  secciones.forEach(seccion => {
    seccion.classList.remove('active');
  });

  // Mostrar la sección seleccionada
  const seccionSeleccionada = document.getElementById(seccionId);
  seccionSeleccionada.classList.add('active');
}

// Agregar eventos a los botones de navegación
const botonesNavegacion = document.querySelectorAll('nav ul li a[href^="#"]');
botonesNavegacion.forEach(boton => {
  boton.addEventListener('click', function(event) {
    event.preventDefault();
    const seccionId = this.getAttribute('href').substring(1);
    cambiarSeccion(seccionId);
  });
});

// Función para abrir el buzón de sugerencias
function abrirBuzon() {
  // Abrir el formulario de Google en una nueva pestaña
  const url = 'https://forms.gle/rz1S5oraKyqbgjuk6';
  window.open(url, '_blank');
}

// Agregar evento al botón de buzón de sugerencias
const botonBuzon = document.getElementById('buzonBtn');
botonBuzon.addEventListener('click', function(event) {
  event.preventDefault();
  abrirBuzon();
});
