'use strict';
(() => {
    const bAppend = appendLI('becados');
    const alumnosState = alumnosService({alumnos:[]});
    function imprimirAlumnos(alumnos){
        document.getElementById('becados').innerHTML= '';
        alumnos.forEach(alumno => {
            bAppend(alumno.nombre);
        });
    }
    function appendLI(id) {
        const list = document.getElementById(id);
        return (text) => {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(text));
            list.appendChild(listItem);
        }
    }
})();
