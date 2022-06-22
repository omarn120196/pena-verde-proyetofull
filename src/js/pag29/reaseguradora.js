class Reaseguradora{

    constructor(contenedor){

        this.contenedor = contenedor;

        //Respuestas reaseguradora
        this.respuestaA1 = document.querySelector('#respuestaA1_3');
        this.respuestaB1 = document.querySelector('#respuestaB1_3');
        this.bloquear1 = document.querySelector('#bloqueo1_3');

        this.respuestaA2 = document.querySelector('#respuestaA2_3');
        this.respuestaB2 = document.querySelector('#respuestaB2_3');
        this.bloquear2 = document.querySelector('#bloqueo2_3');

        this.respuestaA3 = document.querySelector('#respuestaA3_3');
        this.respuestaB3 = document.querySelector('#respuestaB3_3');
        this.bloquear3 = document.querySelector('#bloqueo3_3');

        this.botones = document.querySelectorAll('.botonSiguiente3');

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

function preguntasReaseguradora1(reaseguradora) {

   
    reaseguradora.respuestaA1.addEventListener('click', function(){
        reaseguradora.respuestaA1.classList.add('respuesta-incorrecta');
        bloquearPreguntaR(reaseguradora, 0);

        setTimeout(()=>{
            reaseguradora.respuestaA1.classList.remove('respuesta-incorrecta');
            reaseguradora.respuestaA1.classList.add('fondoIncorrecto');
            
        }, 2000);
    });
   
    reaseguradora.respuestaB1.addEventListener('click', function(){
        reaseguradora.respuestaB1.classList.add('respuesta-correcta');
        bloquearPreguntaR(reaseguradora, 0);

        setTimeout(()=>{
            reaseguradora.respuestaB1.classList.remove('respuesta-correcta');
            reaseguradora.respuestaB1.classList.add('fondoCorrecto');
            reaseguradora.acietos++;
            
        }, 2000);
    }); 
}

function preguntasReaseguradora2(reaseguradora) {

   
    reaseguradora.respuestaA2.addEventListener('click', function(){
        reaseguradora.respuestaA2.classList.add('respuesta-correcta');
        bloquearPreguntaR(reaseguradora, 1);

        setTimeout(()=>{
            reaseguradora.respuestaA2.classList.remove('respuesta-correcta');
            reaseguradora.respuestaA2.classList.add('fondoCorrecto');
            reaseguradora.acietos++;
            
        }, 2000);
    });
   
    reaseguradora.respuestaB2.addEventListener('click', function(){
        reaseguradora.respuestaB2.classList.add('respuesta-incorrecta');
        bloquearPreguntaR(reaseguradora, 1);

        setTimeout(()=>{
            reaseguradora.respuestaB2.classList.remove('respuesta-incorrecta');
            reaseguradora.respuestaB2.classList.add('fondoIncorrecto');
            
        }, 2000);
    }); 
}

function preguntasReaseguradora3(reaseguradora) {

   
    reaseguradora.respuestaA3.addEventListener('click', function(){
        reaseguradora.respuestaA3.classList.add('respuesta-incorrecta');
        bloquearPreguntaR(reaseguradora, 2);

        setTimeout(()=>{
            reaseguradora.respuestaA3.classList.remove('respuesta-incorrecta');
            reaseguradora.respuestaA3.classList.add('fondoIncorrecto');
            
        }, 2000);
    });
   
    reaseguradora.respuestaB3.addEventListener('click', function(){
        reaseguradora.respuestaB3.classList.add('respuesta-correcta');
        bloquearPreguntaR(reaseguradora, 2);

        setTimeout(()=>{
            reaseguradora.respuestaB3.classList.remove('respuesta-correcta');
            reaseguradora.respuestaB3.classList.add('fondoCorrecto');
            reaseguradora.acietos++;
            
        }, 2000);
    }); 
}

function bloquearPreguntaR(reaseguradora, indice) {  
    const bloqueo = reaseguradora.bloquear[indice];
    const btnSiguiente = reaseguradora.botones[indice];


    bloqueo.classList.add('activado');

    btnSiguiente.classList.add('visualizar');
    btnSiguiente.style.opacity = 0;

    setTimeout(()=>{
        btnSiguiente.style.opacity = 1;
    }, 2000);

    if(indice == 0){
        btnSiguiente.addEventListener('click', function (e) {  
            e.preventDefault();
            reaseguradora.ocultar(0);
            reaseguradora.visualizar(1);
            preguntasReaseguradora2(reaseguradora);
        });
    }

    if(indice == 1){
        btnSiguiente.addEventListener('click', function (e) {  
            e.preventDefault();
            reaseguradora.ocultar(1);
            reaseguradora.visualizar(2);
            preguntasReaseguradora3(reaseguradora);
        });
    }

    if(indice == 2){
        btnSiguiente.addEventListener('click', function (e) {  
            e.preventDefault();
            reaseguradora.ocultar(2);
            retroReaseguradora(reaseguradora.acietos);
        });
    }
}

function retroReaseguradora(puntos){

    const contenedorRetro = document.querySelector('#retro-reaseguradora');
    const bien = document.querySelector('#retro-reaseguradora #retro-bien');
    const mal = document.querySelector('#retro-reaseguradora #retro-mal');

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