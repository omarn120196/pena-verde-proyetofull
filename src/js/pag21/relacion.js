let columnasRelacionadas = 0;

function cuestionario() {  
    seleccionarEnunciados();
    seleccionarDefiniciones();
}

function seleccionarEnunciados(){
    const enunciados = document.querySelectorAll('.enunciados');

    enunciados.forEach(enunciado=>{
        enunciado.addEventListener('click', function () {  
            
            const select = document.querySelector('.seleccion');

            if(select){
                select.classList.remove('seleccion');
                enunciado.classList.toggle('seleccion');
            }
            else{
                enunciado.classList.add('seleccion');
            }

            verificarRelacion();
        });
    });    
}

function seleccionarDefiniciones() {  
    const definiciones = document.querySelectorAll('.conceptos');

    definiciones.forEach(definicion=>{
        definicion.addEventListener('click', function () {  
            
            const select = document.querySelector('.seleccionado');

            if(select){
                select.classList.remove('seleccionado');
                definicion.classList.toggle('seleccionado');
            }
            else{
                definicion.classList.add('seleccionado');
            }

            verificarRelacion();
        });
    });
}

function verificarRelacion() {

    const enunciado = document.querySelector('.seleccion');
    const definicion = document.querySelector('.seleccionado');

    if(enunciado && definicion){
        
        const noEnunciado = enunciado.dataset.enunciado;
        const noDefinicion = definicion.dataset.definicion;

        if(noEnunciado == noDefinicion){

            const bloqEnunciado = document.querySelector(`#bloquearEnunciado${noEnunciado}`);
            const bloqDefinicion = document.querySelector(`#bloquearConcepto${noDefinicion}`);

            enunciado.classList.add('respuesta-correcta');
            definicion.classList.add('respuesta-correcta');
            bloqEnunciado.classList.add('activo');
            bloqDefinicion.classList.add('activo');

            switch(noEnunciado){
                case '1':
                    dibujarLineas(noEnunciado, .10, .50);
                    break;
                case '2':
                    dibujarLineas(noEnunciado, .30, .70);
                    break;
                case '3':
                    dibujarLineas(noEnunciado, .45, .10);
                    break;
                case '4':
                    dibujarLineas(noEnunciado, .65, .90);
                    break;
                case '5':
                    dibujarLineas(noEnunciado, .90, .30);
                    break;
                default :
                    break;
            }

            setTimeout(()=>{
                enunciado.classList.remove('seleccion');
                definicion.classList.remove('seleccionado');
                enunciado.classList.add('correcto');
                definicion.classList.add('correcto');
                
                columnasRelacionadas++;

                if(columnasRelacionadas == 5){
                    mensaje();
                }

            }, 3000);

            
        }
        else{
            enunciado.classList.add('respuesta-incorrecta');
            definicion.classList.add('respuesta-incorrecta');

            setTimeout(()=>{
                enunciado.classList.remove('respuesta-incorrecta');
                definicion.classList.remove('respuesta-incorrecta');
                enunciado.classList.remove('seleccion');
                definicion.classList.remove('seleccionado');
            }, 2500);
        }        
    } 
}

function mensaje() {  

    const intro = document.querySelector('.intro-pagina21');
    const inicio = document.querySelector('.cont-btnInicio');
    const actividad = document.querySelector('#cont-actividadRelacion');
    const mensaje = document.querySelector('#mensaje21');
    
    setTimeout(()=>{
        intro.classList.add('ocultar');
        inicio.classList.add('ocultar');
        actividad.classList.add('ocultar');

        mensaje.classList.add('ver');
        mensaje.style.opacity = 0;

        setTimeout(()=>{
            mensaje.style.opacity = 1;
        }, 300)
    }, 3000)

}
