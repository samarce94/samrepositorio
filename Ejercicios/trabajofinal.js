'use strict';

(() => {
    const bAppend = appendLI('becados');
    const AAppend = appendLI('Asesorias')
    const Rappend = appendLI('Repobados')
    const alumnosState = alumnosService({ alumnos: [] });

    
        const alumnosState = alumnosService({alumnos:[]});
        fetch('/alumnos')
        .then((res)=>{
            return res.json();
        })
        .then((alumnos)=>{
            console.log(alumnos);
        })
    (function () {
        const stateGenerator = (initialState => {
            const state = initialState;
            return {
                getState: () => ({ ...state }),
                agregarAlumno: (Alumno) => { state.alumnos.push(Alumno) }
            }
        })
        window.stateGenerator = stateGenerator;
    })();
});