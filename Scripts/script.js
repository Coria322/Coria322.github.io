const titulo = document.title;

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.title = "!Por favor vuelve¡ :(";
    }
    else{
        document.title = titulo;
    }
});