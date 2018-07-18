'use strict';
function scopeTest(){
   const saludos = 'hola';
   return function(){
    console.log(saludos);
   }
}
const saludador = scopeTest();
