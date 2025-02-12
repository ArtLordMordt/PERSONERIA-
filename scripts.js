document.addEventListener("DOMContentLoaded", function () {
  // Función para cambiar de sección
  function cambiarSeccion(seccionId) {
    const secciones = document.querySelectorAll('.seccion');

    // Ocultar todas las secciones
    secciones.forEach(seccion => seccion.classList.remove('active'));

    // Mostrar la sección seleccionada
    const seccionSeleccionada = document.getElementById(seccionId);
    if (seccionSeleccionada) {
      seccionSeleccionada.classList.add('active');
    }
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

  // Asegurar que al cargar la página, la sección activa sea 'inicio'
  cambiarSeccion('inicio');

  // Función para abrir el buzón de sugerencias en una nueva pestaña
  function abrirBuzon() {
    const url = 'https://forms.gle/rz1S5oraKyqbgjuk6';
    window.open(url, '_blank');
  }

  // Agregar evento al botón de buzón de sugerencias
  const botonBuzon = document.getElementById('buzonBtn');
  if (botonBuzon) {
    botonBuzon.addEventListener('click', function(event) {
      event.preventDefault();
      abrirBuzon();
    });
  }
});
