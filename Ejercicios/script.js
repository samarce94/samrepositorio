 // getElementById - Nos regresa el elemento dependiendo del ID
 var squareTest = document.getElementById('square-test');
 console.log(squareTest);
 
 // getElementByTagName - Nos regresa un array de elementos dependiendo del tag
 var titulo = document.getElementsByTagName('h1');
 console.log(titulo);
 
 // createElement - Crea un elemento virtual que no se agrega al DOM
 var span = document.createElement('span');
 
 // innerHTML - Modifica el HTML que esta dentro del objeto
 titulo[0].innerHTML = 'Hola Academia';
 
 span.innerHTML = 'Este es un span';
 console.log(span);
 
 // appenChild - Agrega el elemento al final de otro objeto
 squareTest.appendChild(span);
 
 // style - Nos regresa un objeto con todos los estilos del elemento
 squareTest.style.background = "red";
 squareTest.style.color = "white";
 
 // setAttribute - Setea un atributo del elemento
 squareTest.setAttribute('data-value', 0);
 console.log(squareTest);
 
 // getAttribute - Setea un atributo del elemento
 console.log(squareTest.getAttribute('data-value'));
 
 // addEventListener - Dispara una funcion cuando pasa algun evento.
 squareTest.addEventListener('click', function(evento) {
     // evento - trae un objeto con la informacion del evento
     console.log(evento, evento.target);
 });