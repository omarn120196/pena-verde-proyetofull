class Patria{

    constructor(contenedor){

        this.contenedor = contenedor;

        //Respuestas patria
        this.respuestaA1 = document.querySelector('#respuestaA1_2');
        this.respuestaB1 = document.querySelector('#respuestaB1_2');
        this.bloquear1 = document.querySelector('#bloqueo1_2');

        this.respuestaA2 = document.querySelector('#respuestaA2_2');
        this.respuestaB2 = document.querySelector('#respuestaB2_2');
        this.bloquear2 = document.querySelector('#bloqueo2_2');

        this.respuestaA3 = document.querySelector('#respuestaA3_2');
        this.respuestaB3 = document.querySelector('#respuestaB3_2');
        this.bloquear3 = document.querySelector('#bloqueo3_2');

        this.botones = document.querySelectorAll('.botonSiguiente2');

        this.bloquear = [
            this.bloquear1,
            this.bloquear2,
            this.bloquear3
        ]

        this.acietos = 0;
    }

    visualizar(indice){
        //Visualizar primer pregunta
        this.contenedor[indice].classList.add('visualizar');
        this.contenedor[indice].style.opacity = 0;            

        setTimeout(()=>{
            this.contenedor[indice].style.opacity = 1;
        });
    }

    ocultar(indice){
        this.contenedor[indice].style.opacity = 1;            

        setTimeout(()=>{
            this.contenedor[indice].style.opacity = 0;
            this.contenedor[indice].classList.remove('visualizar');
        });
    }
}

function preguntasPatria1(patria) {

   
    patria.respuestaA1.addEventListener('click', function(){
        patria.respuestaA1.classList.add('respuesta-incorrecta');
        bloquearPreguntaP(patria, 0);

        setTimeout(()=>{
            patria.respuestaA1.classList.remove('respuesta-incorrecta');
            patria.respuestaA1.classList.add('fondoIncorrecto');
            
        }, 2000);
    });
   
    patria.respuestaB1.addEventListener('click', function(){
        patria.respuestaB1.classList.add('respuesta-correcta');
        bloquearPreguntaP(patria, 0);

        setTimeout(()=>{
            patria.respuestaB1.classList.remove('respuesta-correcta');
            patria.respuestaB1.classList.add('fondoCorrecto');
            patria.acietos++;
            
        }, 2000);
    }); 
}

function preguntasPatria2(patria) {

   
    patria.respuestaA2.addEventListener('click', function(){
        patria.respuestaA2.classList.add('respuesta-correcta');
        bloquearPreguntaP(patria, 1);

        setTimeout(()=>{
            patria.respuestaA2.classList.remove('respuesta-correcta');
            patria.respuestaA2.classList.add('fondoCorrecto');
            patria.acietos++;
            
        }, 2000);
    });
   
    patria.respuestaB2.addEventListener('click', function(){
        patria.respuestaB2.classList.add('respuesta-incorrecta');
        bloquearPreguntaP(patria, 1);

        setTimeout(()=>{
            patria.respuestaB2.classList.remove('respuesta-incorrecta');
            patria.respuestaB2.classList.add('fondoIncorrecto');
            
        }, 2000);
    }); 
}

function preguntasPatria3(patria) {

   
    patria.respuestaA3.addEventListener('click', function(){
        patria.respuestaA3.classList.add('respuesta-incorrecta');
        bloquearPreguntaP(patria, 2);

        setTimeout(()=>{
            patria.respuestaA3.classList.remove('respuesta-incorrecta');
            patria.respuestaA3.classList.add('fondoIncorrecto');
            
        }, 2000);
    });
   
    patria.respuestaB3.addEventListener('click', function(){
        patria.respuestaB3.classList.add('respuesta-correcta');
        bloquearPreguntaP(patria, 2);

        setTimeout(()=>{
            patria.respuestaB3.classList.remove('respuesta-correcta');
            patria.respuestaB3.classList.add('fondoCorrecto');
            patria.acietos++;
            
        }, 2000);
    }); 
}

function bloquearPreguntaP(patria, indice) {  
    const bloqueo = patria.bloquear[indice];
    const btnSiguiente = patria.botones[indice];


    bloqueo.classList.add('activado');

    btnSiguiente.classList.add('visualizar');
    btnSiguiente.style.opacity = 0;

    setTimeout(()=>{
        btnSiguiente.style.opacity = 1;
    }, 2000);

    if(indice == 0){
        btnSiguiente.addEventListener('click', function (e) {  
            e.preventDefault();
            patria.ocultar(0);
            patria.visualizar(1);
            preguntasPatria2(patria);
        });
    }

    if(indice == 1){
        btnSiguiente.addEventListener('click', function (e) {  
            e.preventDefault();
            patria.ocultar(1);
            patria.visualizar(2);
            preguntasPatria3(patria);
        });
    }

    if(indice == 2){
        btnSiguiente.addEventListener('click', function (e) {  
            e.preventDefault();
            patria.ocultar(2);
            retroPatria(patria.acietos);
        });
    }
}

function retroPatria(puntos){

    const contenedorRetro = document.querySelector('#retro-patria');
    const bien = document.querySelector('#retro-patria #retro-bien');
    const mal = document.querySelector('#retro-patria #retro-mal');

    contenedorRetro.classList.add('visualizar');

    if(puntos==3){
        bien.classList.add('visualizar');

        bien.style.opacity = 0;
        setTimeout(()=>{
            bien.style.opacity = 1;

            //Pasar automaticamente a la evaluacion
            setTimeout(()=>{
                noPagina = 26
                selectOpcion(noPagina);
                visualizarPagina();
            }, 7000);
            
        }, 300);
    }
    else{
        mal.classList.add('visualizar');
        mal.style.opacity = 0;
        setTimeout(()=>{
            mal.style.opacity = 1;
        }, 300);
    }
}