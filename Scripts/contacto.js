document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('solicitud');

    // Verificamos si el formulario existe antes de agregar el event listener
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();  // Evita el envío normal del formulario

            // Obtén los valores de los campos
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const asunto = document.getElementById('asunto').value.trim();

            // Validación de campos no vacíos
            if (!nombre || !correo || !asunto) {
                alert('Por favor, rellena todos los campos.');
                return;  // Detiene la ejecución si algún campo está vacío
            }

            // Validación de correo electrónico
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(correo)) {
                alert('Por favor ingresa un correo válido.');
                return;  // Detiene la ejecución si el correo no es válido
            }

            // Formatea el nombre y correo en el formato "Nombre (correo)"
            const nombreCorreo = `${nombre} (${correo}) - Solicitud de Contacto`;

            // Codifica los valores para ser usados en la URL
            const encodedAsunto = encodeURIComponent(nombreCorreo);
            const encodedCuerpo = encodeURIComponent(asunto);

            // Crea la URL con los valores codificados
            const mailtoLink = `mailto:coriayo32@gmail.com?subject=${encodedAsunto}&body=${encodedCuerpo}`;

            // Abre la nueva pestaña con el mailto en lugar de la actual
            window.open(mailtoLink, '_blank');
        });
    } else {
        console.error('El formulario no se ha encontrado.');
    }
});
