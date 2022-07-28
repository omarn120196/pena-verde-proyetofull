function relacionLavado(){

    seleccionarEnunciado();
    seleccionarDefinicion();
}

function seleccionarEnunciado(){
    
    const conceptos = document.querySelectorAll('.conceptos-lavado');

    conceptos.forEach(concepto=>{
        concepto.addEventListener('click', function () {  
            
            const select = document.querySelector('.seleccionC');

            if(select){
                select.classList.remove('seleccionC');
                concepto.classList.toggle('seleccionC');
            }
            else{
                concepto.classList.add('seleccionC');
            }

            evaluarRelacion();
        });
    });  
}

function seleccionarDefinicion(){
    
    const definiciones = document.querySelectorAll('.definicion-lavado');

    definiciones.forEach(definicion=>{
        definicion.addEventListener('click', function () {  
            
            const select = document.querySelector('.seleccionD');

            if(select){
                select.classList.remove('seleccionD');
                definicion.classList.toggle('seleccionD');
            }
            else{
                definicion.classList.add('seleccionD');
            }

            evaluarRelacion();
        });
    });  
}

function evaluarRelacion(){
    const enunciado = document.querySelector('.seleccionC');
    const definicion = document.querySelector('.seleccionD');

    if(enunciado && definicion){
        
        const noEnunciado = enunciado.dataset.relacion;
        const noDefinicion = definicion.dataset.relacion;

        if(noEnunciado == noDefinicion){

            const bloqEnunciado = document.querySelector(`#bloquearC${noEnunciado}`);
            const bloqDefinicion = document.querySelector(`#bloquearD${noDefinicion}`);

            bloqEnunciado.classList.add('activo');
            bloqDefinicion.classList.add('activo');

            switch(noEnunciado){
                case '1':
                    relacionarLineas(noEnunciado, .25, .50);
                    break;
                case '2':
                    relacionarLineas(noEnunciado, .45, .15);
                    break;
                case '3':
                    relacionarLineas(noEnunciado, .75, .80);
                    break;
                default :
                    break;
            }

            setTimeout(()=>{
                enunciado.classList.remove('seleccionC');
                definicion.classList.remove('seleccionD');
            }, 500);

            
        }
        else{

            setTimeout(()=>{
                enunciado.classList.remove('seleccionC');
                definicion.classList.remove('seleccionD');
            }, 500);
        }        
    }
}