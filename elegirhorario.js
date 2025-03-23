let selectedHour = null; // Inicializamos como null

// Función para seleccionar la hora
function selectHour(hour) {
    selectedHour = hour; // Guardar la hora seleccionada
}

// Función para confirmar la cita al hacer clic en el botón AGENDAR
function confirmAppointment() {
    if (selectedHour) {
        const confirmationMessage = 'Cita confirmada para las ' + selectedHour;

        // Mostrar el mensaje de confirmación en pantalla
        document.getElementById('selectedHour').textContent = confirmationMessage;

        console.log('La cita fue confirmada para: ' + selectedHour); // Registrar en la consola
    } else {
        alert('Por favor, selecciona una hora antes de agendar.');
    }
}




