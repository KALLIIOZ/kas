// Observer para la sección de video
const video = document.getElementById("myVideo");
    
// Crear el observador para el video
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Reinicia el video cuando la sección es visible
            video.currentTime = 0;
            video.play();
        } else {
            // Pausa el video cuando la sección ya no es visible
            video.pause();
        }
    });
}, {
    threshold: 0.5 // Al menos el 50% del video debe estar visible
});

// Observa la sección del video
videoObserver.observe(document.getElementById("video"));