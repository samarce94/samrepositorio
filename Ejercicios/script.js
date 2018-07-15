/*  
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
numeros.forEach(desplegarValor); */

/*
// 1. Obtener todas las variables
const inputVal = document.getElementById('inputTxt');
const restaBtn = document.getElementById('resta');
const resultado = document.getElementById('resultado');
const wtf = document.getElementById('wtf');

// 2. Agregar eventListener
restaBtn.addEventListener('click', function(){
    // 3. Imprimir resta
    resultado.innerText = inputVal.value - 1;
});

// 4. Agregar suma
const sumaBtn = document.getElementById('suma');

sumaBtn.addEventListener('click', function(){
    // resultado.innerText = inputVal.value + 1;
    resultado.innerText = Number(inputVal.value) + 1;
});

// 5. Brainfuck

wtf.addEventListener('click', function() {
    // Declaramos un string que no puede ser convertido
    const a = 'a';
    const b = 'b';

    // Si algo que no puede ser convertido se aplica una operación regresa un NaN
    // resultado.innerText = a - 1;

    // Se puede usar un isNaN para validar
    // resultado.innerText = isNaN(a);

    resultado.innerText = isNaN(a) + isNaN(b);
});
*/

/*
// false, 0 , '' son equivalentes
console.log(false == 0);
console.log(false == '');
console.log(0 == '');
console.log('==================');

// Null y undefined son iguales, pero diferentes a todo lo demas
console.log(null == undefined);
console.log(null == false);
console.log(undefined == 0);
console.log('==================');

// NaN no es igual a nada mas
const aNaN = 'a' - 1;
const bNaN = 'b' - 1;
console.log(aNaN);
console.log(bNaN);
console.log(aNaN == bNaN);
console.log('==================');

// [] es verdadero pero diferente a true e igual a false
const arrayVacio = [];

if ([]){
    console.log('verdadero');
} else {
    console.log('falso');
}
console.log([] == true);
console.log([] == false);
*/

/*
console.log(42 == '42');
console.log(42 === '42');

console.log(1 == true);
console.log(1 === true);

console.log('true' == true);
console.log('true' === true);
*/

/*
console.log(true && true);
console.log(true && false);

console.log(false || false);
console.log(false || true);

console.log(!false, !true);*/

/* Ejercicio: Hacer un validador de contraseñas 
    - Una contraseña tiene que tener un numero o una mayuscula y  una longitod mayor a 3 y menoro  igual a 8
*/

// 1. Agregar elementos
const pass = document.getElementById('inputTxt');
const resultado = document.getElementById('resultado');

// 2. Agregar boleanos de comparacion
let hasNumber = false;
let hasUppercase = false;

// 3. Agregar listener
pass.addEventListener('keyup', function(evento) {
    // 4. Obtenemos el caracter actual
    const currentChar = evento.key;

    // 5. El caracter es un numero?
    if ( !isNaN(currentChar) ) {
        // 6. actualiza booleano de comparacion
        hasNumber = true;
    } else {
        // 7. El caracter es una mayuscula?
        if ( currentChar === currentChar.toUpperCase() ){
            // 8. Actualiza el booleano de comparacion
            hasUppercase = true;
        }
    }

    // 9. Tiene una mayuscla o un numero?
    if (hasNumber || hasUppercase) {
        // 10. La longitud es entre 3 y 8? 
        if (pass.value.length > 3 && pass.value.length <= 8) {
            // 11. Aprobar
            resultado.innerText = 'Aprobada';
        } else {
            // 12. Rechazar
            resultado.innerText = 'Rechazada';
        }
    } else {
        // 13. Rechazar
        resultado.innerText = 'Rechazada';
    }

});
