'use strict';
(() => {
    const bAppend = appendLI('becados');
    const rAppend = appendLI('reprobados');
    const aAppend = appendLI('asesorias');
    const alumnosState = alumnosService({ alumnos: [] });

    // function borrarAlumno[
    //     fetch('/alumnos?nombre=Odonnell');


    fetch('/alumnos')
        .then((res) => {
            return res.json()
        })
        .then((alumnos) => {
            alumnos.forEach((alumno) => {
                let promedioR;
                if (alumno.promedio < 60) {
                    promedioR = (alumno.promedio);
                    rAppend(alumno.nombre);
                }
                if (alumno.promedio < 80 && alumno.promedio > 60) {
                    aAppend(alumno.nombre);
                }
                if (alumno.promedio >= 80 || (alumno.destacado && alumno.promedio > 60)) {
                    bAppend(alumno.nombre);
                }
                function appendLI(id) {
                    const list = document.getElementById(id);
                    return (text) => {
                        const listItem = document.createElement('li');
                        listItem.appendChild(document.createTextNode(text));
                        list.appendChild(listItem);
                  }
                };

                function imprimirAlumnos(alumnos) {
                    document.getElementById('reprobados').innerHTML = '';
                    let reprobados = list.filter((alumno) => alumno.promedio < 30);
                    reprobados.reduce((promedio, alumno) => {
                        return promedio = promedio + alumno.promedio;
                    }, 0);
                    promedioR = reprobados / alumnos.lenght;
                    document.getElementById('promedio-reprobados').innerHTML = promedioR;
                    console.log(promedioR);

                    alumnos.forEach(alumno => {
                        bAppend(alumno.nombre);
                    
                    });
                

                };

            });
            
        });
})();
