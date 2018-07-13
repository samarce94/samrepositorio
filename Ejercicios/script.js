 
// getElementById - Nos regresa el elemento dependiendo del ID
console.log(document.getElementById('square-test'));
 
// addEventListener - Dispara una funcion cuando pasa algun evento.
document.getElementById('square-test').addEventListener('click', function(event) {
    alert('click');
});

var valor1 = 2;
var valor2 = 3;
var sumaValores = valor1 + valor2;

console.log(sumaValores);

var texto1 = 'Hola';
var texto2 = ' Mundo';

console.log(texto1, texto2);
console.log(texto1 + texto2);

var verdadero = true;
var falso = false;

console.log(verdadero, falso);

var noDefinido;
var nulo = null;

console.log(noDefinido, nulo);

var carro = {
    color: 'rojo',
    dobleTraccion: false,
    puertas: 4
}
console.log(carro, carro.color);

var carro0 = {
    color: 'rojo',
    dobleTraccion: false,
    puertas: 4
}
var carro1 = {
    color: 'blanco',
    dobleTraccion: false,
    puertas: 2
}
var carro2 = {
    color: 'azul',
    dobleTraccion: true,
    puertas: 4
}
var carro3 = {
    color: 'negro',
    dobleTraccion: false,
    puertas: 4
}
var carro4 = {
    color: 'verde',
    dobleTraccion: true,
    puertas: 2
}


var carros = [carro0, carro1, carro2, carro3];
console.log(carros.length);
carros.push(carro4);
console.log(carros, carros.length);

for(var i = 0; i < carros.length; i++) {
    console.log(carros[i]);
}