// Función para mostrar una sección específica y ocultar las demás
function mostrarSeccion(idSeccion) {
    // Oculta todas las secciones
    const secciones = document.querySelectorAll("section");
    secciones.forEach(seccion => {
        seccion.classList.remove("seccion-activa");
        seccion.style.opacity = 0; // Asegura que la sección esté oculta
    });

    // Muestra la sección seleccionada
    const seccionActiva = document.getElementById(idSeccion);
    if (seccionActiva) {
        seccionActiva.classList.add("seccion-activa");
        setTimeout(() => {
            seccionActiva.style.opacity = 1; // Aplica la transición de opacidad
        }, 10); // Pequeño retraso para asegurar la transición
    }
}

// Configura los botones de navegación
document.addEventListener("DOMContentLoaded", () => {
    // Muestra la sección de inicio por defecto
    mostrarSeccion("inicio");

    // Asigna eventos a los botones de navegación
    const botones = document.querySelectorAll("nav button");
    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            const idSeccion = boton.getAttribute("onclick").replace("mostrarSeccion('", "").replace("')", "");
            mostrarSeccion(idSeccion);
        });
    });
});
