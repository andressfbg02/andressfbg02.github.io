document.addEventListener('DOMContentLoaded', function () {
    const listaPersonas = document.getElementById('lista-personas');

    function registrarPersona() {
        const nombre = document.getElementById('nombre').value;
        const edad = document.getElementById('edad').value;
        const tipoDiabetes = document.getElementById('tipo-diabetes').value;
        const tipoInsulina = document.getElementById('tipo-insulina').value;
        const accionLenta = document.getElementById('accion-lenta').value;
        const accionRapida = document.getElementById('accion-rapida').value;

        const personaInfo = `${nombre} - ${edad} - ${tipoDiabetes} - ${tipoInsulina} - Acción Lenta: ${accionLenta} - Acción Rápida: ${accionRapida}`;

        const listItem = document.createElement('li');
        listItem.textContent = personaInfo;
        listaPersonas.appendChild(listItem);

        // Limpia los campos del formulario
        document.getElementById('nombre').value = '';
        document.getElementById('edad').value = '';
        document.getElementById('tipo-diabetes').value = 'Tipo 1';
        document.getElementById('tipo-insulina').value = '';
        document.getElementById('accion-lenta').value = '';
        document.getElementById('accion-rapida').value = '';
    }

    // Agrega un ejemplo pre-registrado
    registrarPersona();
});
