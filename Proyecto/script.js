/*
    Ejercicio: Agregar elementos a la lista si el input tiene contenido, y se cliquea agregar
        - Obtener el valor
        - Agregar el elemento
*/

// 1. Obtener elementos del DOM
var boton = document.getElementById('agregar');
var texto = document.getElementById('inputTxt');
var lista = document.getElementById('list');

// 2. Agregar listener
boton.addEventListener('click', function(){
    // 3. Validar si existe
    if ( texto.value !== '' ) {
        // 4. Crear elemento, llenarlo y agregarlo
        var item = document.createElement('li');
        item.innerHTML = texto.value;
        lista.appendChild(item);

        // 5. Limpiar texto
        texto.value = '';
    }
});
