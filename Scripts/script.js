// Diccionario de mensajes divertidos relacionados con volver a la página
const mensajesAusencia = {
    tristes: [
        "¡Me has abandonado! 😢",
        "¿Me has olvidado? 🥺", 
        "Por favor, no me dejes solo... 😭",
        "¡Vuelve, te extraño! 💔"
    ],
    juguetones: [
        "¡Oye, aún estoy aquí! 👀",
        "¿Dónde te has metido? 🕵️",
        "¡Atención, vuelve pronto! 🚨",
        "Estoy solito sin ti... 🐶"
    ],
    dramaticos: [
        "¡El apocalipsis de las pestañas ha comenzado! 🌋",
        "Sin ti, mi mundo se derrumba... 🌪️",
        "¡Auxilio, me abandona mi humano! 🆘",
        "La soledad me consume... 🕳️"
    ]
};

// Título original de la página
const tituloOriginal = document.title;

// Función para seleccionar un mensaje aleatorio de una categoría
function obtenerMensajeAleatorio(categoria) {
    // Verificar que la categoría existe y tiene mensajes
    if (mensajesAusencia[categoria] && mensajesAusencia[categoria].length > 0) {
        const mensajes = mensajesAusencia[categoria];
        return mensajes[Math.floor(Math.random() * mensajes.length)];
    }
    // Si algo falla, devolver un mensaje por defecto
    return "¡Vuelve pronto! 👀";
}

// Escucha los cambios de visibilidad de la pestaña
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Selecciona aleatoriamente entre diferentes categorías de mensajes
        const categorias = Object.keys(mensajesAusencia);
        
        // Verificar que hay categorías
        if (categorias.length > 0) {
            const categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)];
            document.title = obtenerMensajeAleatorio(categoriaAleatoria);
        } else {
            // Mensaje por defecto si no hay categorías
            document.title = "¡Vuelve pronto! 👀";
        }
    } else {
        document.title = tituloOriginal;
    }
});