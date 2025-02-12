function openModal() {
    document.getElementById("modal").style.display = "block";
}

function cerrarFormulario() {
    document.getElementById("modal").style.display = "none";
}

// Assuming navigateTo function exists
function navigateTo(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}
