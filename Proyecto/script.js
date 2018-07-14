/*
    Ejercicio: Agregar elementos a la lista si el input tiene contenido, y se cliquea agregar
        - Obtener el valor
        - Agregar el elemento
*/

// 1. Obtener elementos del DOM
var boton = document.getElementById('agregar');
var texto = document.getElementById('inputTxt');
var lista = document.getElementById('list');
var botonBorrar = document.getElementById('borrar');

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

texto.addEventListener('keyup', function(evento){
    if (evento.key === 'Enter') {
        // 3. Validar si existe
        if ( texto.value !== '' ) {
            // 4. Crear elemento, llenarlo y agregarlo
            var item = document.createElement('li');
            item.innerHTML = texto.value;
            lista.appendChild(item);
    
            // 5. Limpiar texto
            texto.value = '';
        }
    }
});

// Agregar eventListener para el boton de borrar
botonBorrar.addEventListener('click', function() {
    // Validar si existen elementos en la lista
    if (lista.childNodes.length !== 0) {
        // Limpiar lista
        lista.innerText = '';
    } else {
        // Si no hay elementos, desplegar una alerta
        alert('No hay elementos que borrar');
    }
});