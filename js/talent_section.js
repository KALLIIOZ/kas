// Observer para la sección de talentos
const talentSection = document.getElementById('talent-section');
    
// Usa Intersection Observer para detectar cuando la sección de talentos está en el viewport
const talentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Selecciona todos los divs dentro de .row-1 y .row-2
            const circles = document.querySelectorAll('.row-1 div, .row-2 div');

            // Función para animar cada div con un retraso
            circles.forEach((circle, index) => {
                setTimeout(() => {
                    circle.style.transform = 'scale(4)'; // Crece al tamaño original
                    circle.style.opacity = 1; // Muestra el div
                }, index * 500); // Retraso de 0.5 segundos entre cada div
            });

            // Desactiva el observer después de la primera animación
            talentObserver.unobserve(talentSection);
        }
    });
});

// Observa la sección de talentos
talentObserver.observe(talentSection);