document.addEventListener('DOMContentLoaded', () => {
    const docenteButton = document.getElementById('docenteButton');
    
    if (docenteButton) {
        docenteButton.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que el enlace siga su ruta
            docenteButton.querySelector('button').classList.add('bounce');
            
            // Remueve la clase después de la animación para permitirla repetirse
            setTimeout(() => {
                docenteButton.querySelector('button').classList.remove('bounce');
            }, 600); // Duración de la animación en milisegundos
        });
    }
});
