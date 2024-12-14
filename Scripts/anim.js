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
                // Stop observing after first reveal to prevent repeated animations
                observer.unobserve(entry.target);
            }
        });
    };

    const projectObserver = new IntersectionObserver(revealProject, observerOptions);

    projectContainers.forEach(container => {
        projectObserver.observe(container);
    });
});