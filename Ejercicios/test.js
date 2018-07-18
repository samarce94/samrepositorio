// // creamos la promesa
// const promise = new Promise((res)=>{
//     setTimeout(()=> res('acabo timeout'),5000);
// });
// // creamos la promesa = ticket


// // consumes la promesa
// promise.then((res)=> console.log(res));
// console.log('hola');

// (()=>{
//     const alumnosState = alumnosService({alumnos:[]});
//     fetch('/cars')
   
// })

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