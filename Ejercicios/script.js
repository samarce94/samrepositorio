 
// getElementById - Nos regresa el elemento dependiendo del ID
console.log(document.getElementById('square-test'));
 
// addEventListener - Dispara una funcion cuando pasa algun evento.
document.getElementById('square-test').addEventListener('click', function(event) {
    alert('click');
});

var valor1 = 2;
var valor2 = 3;
var sumaValores = valor1 + valor2;

console.log(sumarValores(valor1, valor2));
// 1. Una funcion pueden regresar un valor
function sumarValores(valor1, valor2){
    return valor1 + valor2;
}

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

// 2. las funciones anonimas no tienen un nombre

carros.forEach(function(value) {
    console.log(value);
});

// 3. Puedes poner como parametro otra funcion por que son como variables

numeros = [120, 31, 22, 35];

numeros.forEach(function(value, index){
    numeros[index] = modificar(value, function(valor){
        return valor / 2;
    });
});

function modificar(valor, modificador) {
    return modificador(valor)
}

// 4. Podemos reusar nuestras funciones en varias partes
function desplegarValor(value) {
    console.log(value);
}

carros.forEach(desplegarValor);
numeros.forEach(desplegarValor);