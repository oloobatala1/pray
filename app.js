document.addEventListener("DOMContentLoaded", function() {
    const registroForm = document.getElementById('registroForm');

    if (registroForm) {
        registroForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const peticion = document.getElementById('peticion').value;
            const palabrasDePoder = document.getElementById('palabras-de-poder').value;
            const imagen = document.getElementById('imagen').files[0];

            localStorage.setItem('nombre', nombre);
            localStorage.setItem('peticion', peticion);
            localStorage.setItem('palabrasDePoder', palabrasDePoder);
            
            if (imagen) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    localStorage.setItem('imagen', event.target.result);
                    window.location.href = 'index-2.html';
                };
                reader.readAsDataURL(imagen);
            }
        });
    }

    if (window.location.pathname.includes('index-2.html')) {
        const nombreDisplay = document.getElementById('nombreDisplay');
        const peticionDisplay = document.getElementById('peticionDisplay');
        const palabrasDePoderDisplay = document.getElementById('palabrasDePoderDisplay');
        const imagenDisplay = document.getElementById('imagenDisplay');

        const nombre = localStorage.getItem('nombre');
        const peticion = localStorage.getItem('peticion');
        const palabrasDePoder = localStorage.getItem('palabrasDePoder');
        const imagen = localStorage.getItem('imagen');

        if (nombre && peticion && palabrasDePoder && imagen) {
            nombreDisplay.textContent = nombre;
            peticionDisplay.textContent = peticion;
            palabrasDePoderDisplay.innerHTML = `<div style="text-align: center; margin: 10px 0;">
                <span style="color: #27ae60; font-weight: bold; display: block;">Palabras de Poder:</span>
                <div style="margin-top: 0px;">${palabrasDePoder}</div>
            </div>`;
            
            imagenDisplay.src = imagen;
            
            // Define miConstante aquí usando nombre de localStorage
            const nombreDemonio = `${nombre} Te daré elogios públicos como recompensa por el cumplimiento de tu misión, para que otros puedan escuchar acerca de tu poder y te invoquen. Vete en paz y no me provoques daño ni pérdida a mí ni a mis seres queridos.`;
            document.getElementById("nombre-demonio").textContent = nombreDemonio;
        }

        const resetButton = document.getElementById('resetButton');
        if (resetButton) {
            resetButton.addEventListener('click', function() {
                localStorage.clear();
                window.location.href = 'index.html';
            });
        }
    }

    const fullscreenButton = document.getElementById('fullscreenButton');
    if (fullscreenButton) {
        fullscreenButton.addEventListener('click', function() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    alert(`Error al intentar entrar en pantalla completa: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        });
    }

    const imagenInput = document.getElementById('imagen');
    if (imagenInput) {
        imagenInput.addEventListener('change', function(event) {
            const fileName = event.target.files[0] ? event.target.files[0].name : 'No has seleccionado ningún archivo.';
            document.getElementById('fileNameDisplay').textContent = `Archivo seleccionado: ${fileName}`;
        });
    }
});


