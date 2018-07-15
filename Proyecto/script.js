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
        addElement(texto.value);

        // 5. Limpiar texto
        texto.value = '';
    }
});

texto.addEventListener('keyup', function(evento){
    if (evento.key === 'Enter') {
        // 3. Validar si existe
        if ( texto.value !== '' ) {
            // 4. Crear elemento, llenarlo y agregarlo
            addElement(texto.value);
    
            // 5. Limpiar texto
            texto.value = '';
        }
    }
});

/* EJERCICIO: 
    - Toggle clase done al li cuando se le da click
    - remover todos los li que tienen la clase done cuando se le da click al boton limpiar
*/

// 1. Agrega elemento a lista
function addElement(texto) {
    var item = document.createElement('li');
    item.innerHTML = texto;
    // 2. Agrega event Litener al crearlo
    item.addEventListener('click', liListener);
    lista.appendChild(item);
}

// 3. lo que hace el listener
function liListener (evento) {
    // 4. Obtiene las clases
    const classList = evento.target.classList;
    // 5. Si contiene done
    if (classList.contains('done')) {
        // 6. quita la clase
        classList.remove('done');
    } else {
        // 7. agrega la clase
        classList.add('done');
    }
}

// 8. Obtiene boton de borrar
const removeBtn = document.getElementById('borrar');

// 9. EventListener al boton de borrar
removeBtn.addEventListener('click', function() {
    // 10. convierte el HTML collection en array
    const items = Array.from(lista.getElementsByClassName('done'));

    // 11. Por cada item que existe 
    items.forEach(function(item) {
        // 12. Remueve el item
        lista.removeChild(item);
    });

});