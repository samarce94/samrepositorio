/*
    Ejercicio: Cada que se clique el cuadro:
        - Switchear el color entre rojo y azul
        - Agregar dentro del cuadro el nombre del color anterior.
*/

// 1. Separar el elemento en una variable
var squareEjercicio = document.getElementById('square-test');
var squareLog = document.getElementById('square-log');

// 2. Asignar atributo
squareEjercicio.setAttribute('data-color', 'red');

// 3. Agregar Event Listener
squareEjercicio.addEventListener('click', function(evento) {
    // 4. Obtener elemento cliqueado
    var elementoSeleccionado = evento.target;
    // 5. Obtener color guardado
    var color = elementoSeleccionado.getAttribute('data-color');

    // 6. Asignar el color de fondo
    elementoSeleccionado.style.background = color;

    // 7. validamos el color
    if (color === 'red') {
        elementoSeleccionado.setAttribute('data-color', 'blue');
    } else {
        elementoSeleccionado.setAttribute('data-color', 'red');
    }

    // 8. Crear un elemento virtual
    var nuevoTexto = document.createElement('span');
    // 9. Agregar el nombre del color
    nuevoTexto.innerHTML = color;
    // 10. Agregar el elemento
    squareLog.appendChild(nuevoTexto);
});

/*
    Ejercicio: Boton de reinicio:
        - Al darle click se borra todos los spans
        - El color se regresa a blanco
*/

// 1. Obtener boton
var boton = document.getElementById('reiniciar');

// 2. Agregar evento
boton.addEventListener('click', function(){
    // 3. limpiar texto
    squareLog.innerText = '';
    // 4. limpiar color
    squareEjercicio.style.background = 'white';
});
