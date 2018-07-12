 
// getElementById - Nos regresa el elemento dependiendo del ID
console.log(document.getElementById('square-test'));
 
// addEventListener - Dispara una funcion cuando pasa algun evento.
document.getElementById('square-test').addEventListener('click', function(event) {
    alert('click');
});