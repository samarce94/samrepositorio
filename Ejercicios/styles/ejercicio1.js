const cuadro = document.getElementById('square-test');
const boton = document.getElementById('reiniciar');
const squareLog = document.getElementById('square-log');
cuadro.addEventListener('click', function(evento){
    const span = document.createElement('span');
     span.innerText = event.target.style.background;
     console.log(span);
    boton.addEventListener('click', function(clear){  
    
     cuadro.style.backgroundColor ='white';
     cuadro.style.borderRadius = '0%';
     span.innerHTML = "";    
    });
   if(event.target.style.background ==='red'){
    event.target.style.background ='blue';
    event.target.style.borderRadius = '100%';
      
   }
    else{event.target.style.background = 'red'}

    squareLog.appendChild(span);
    
    
        
});


