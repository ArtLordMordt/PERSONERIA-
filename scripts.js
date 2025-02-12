function cambiarSeccion(seccionId) {
    document.querySelectorAll('.seccion').forEach(seccion => {
        seccion.classList.remove('activa');
    });
    document.getElementById(seccionId).classList.add('activa');
}

function abrirBuzon() {
    window.open('https://forms.gle/rz1S5oraKyqbgjuk6', '_blank');
}
