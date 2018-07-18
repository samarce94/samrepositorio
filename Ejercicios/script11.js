'use strict';
(function () {
    //  const luis = {
    //      name: 'luis',
    //      lastName: 'Perez',
    //      adress:{
    //          street:'1st Avenue',
    //          city:'NY',
    //      }
    //  }
    //  console.log(luis);
    //  const Mario = {...luis};
    //  Mario.name = 'Mario';
    //  Mario.name = {...luis, adress:{...luis.address} };
    //  Mario.name = Mario;
    //  Mario.adress = '2st Avenue';
    //  console.log(Mario);
    //  console.log(luis);
    //  luis.name = 'Luis';
    //  console.log(luis);
    //  console.log(Mario);

    //  const Array1 = [1, 2, 3];
    //  const Array2 = [...Array1];
    //  Array1.push(4);
    //  console.log(Array1);
    //  console.log(Array2);
})();
'use strict';
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