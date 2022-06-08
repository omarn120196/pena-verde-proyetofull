function seleccionar() {

    const respuestas = document.querySelectorAll('.respuesta');
    
    respuestas.forEach(respuesta =>{
        
        respuesta.addEventListener('click', function(){
            if(respuesta.classList.contains('respuestaC')){
                respuesta.classList.add('respuesta-correcta');

                setTimeout(()=>{
                    respuesta.classList.remove('respuesta-correcta');
                    respuesta.classList.add('fondoCorrecto');
                }, 2500);
            }
            else{
                respuesta.classList.add('respuesta-incorrecta');

                setTimeout(()=>{
                    respuesta.classList.remove('respuesta-incorrecta');
                }, 2500);
            }
        });
    });
}