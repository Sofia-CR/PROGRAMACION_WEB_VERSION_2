$(document).ready(function() {
    let selectedDate = null;

    // Configuración del calendario
    $('#calendar').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        dayClick: function(date, jsEvent, view) {
            if (selectedDate) {
                selectedDate.css('background-color', ''); // Resetear el color de la fecha previa
            }
            selectedDate = $(jsEvent.target);
            selectedDate.css('background-color', '#4CAF50'); // Resaltar la fecha seleccionada

            // Mostrar el div con la fecha seleccionada
            $('#selectedDate').text('Fecha seleccionada: ' + date.format('MMMM D, YYYY')).show();
            $('#continueButton').show(); // Mostrar el botón "Continuar"
        }
    });

    // Acción al hacer clic en el botón "Continuar"
    $('#continueButton').click(function() {
        if (selectedDate) {
            const selectedDateStr = selectedDate.data('date');
            window.location.href = 'elegirhorario.html?fecha=' + selectedDateStr;
        }
    });
});

