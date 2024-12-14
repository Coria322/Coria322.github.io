// Scroll Animation Script
document.addEventListener('DOMContentLoaded', () => {
    const projectContainers = document.querySelectorAll('.proy-container');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const revealProject = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-animation');
                // No se detiene la observación, para que se active de nuevo en el futuro
            } else {
                // Aquí puedes agregar un efecto cuando el elemento sale de la vista, si lo deseas
                entry.target.classList.remove('reveal-animation');
            }
        });
    };

    const projectObserver = new IntersectionObserver(revealProject, observerOptions);

    projectContainers.forEach(container => {
        projectObserver.observe(container);
    });
});
