class Aseguradora{

    constructor(contenedor){

        this.contenedor = contenedor;

        //Respuestas Aseguradora
        this.respuestaA1 = document.querySelector('#respuestaA1_1');
        this.respuestaB1 = document.querySelector('#respuestaB1_1');
        this.bloquear1 = document.querySelector('#bloqueo1_1');

        this.respuestaA2 = document.querySelector('#respuestaA2_1');
        this.respuestaB2 = document.querySelector('#respuestaB2_1');
        this.bloquear2 = document.querySelector('#bloqueo2_1');

        this.respuestaA3 = document.querySelector('#respuestaA3_1');
        this.respuestaB3 = document.querySelector('#respuestaB3_1');
        this.bloquear3 = document.querySelector('#bloqueo3_1');

        this.botones = document.querySelectorAll('.botonSiguiente1');

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
        //Visualizar primer pregunta
        this.contenedor[indice].style.opacity = 1;            

        setTimeout(()=>{
            this.contenedor[indice].style.opacity = 0;
            this.contenedor[indice].classList.remove('visualizar');
        });
    }
}

function preguntasAseguradora1(aseguradora) {

   
    aseguradora.respuestaA1.addEventListener('click', function(){
        aseguradora.respuestaA1.classList.add('respuesta-incorrecta');
        
        setTimeout(()=>{
            aseguradora.respuestaA1.classList.remove('respuesta-incorrecta');
            aseguradora.respuestaA1.classList.add('fondoIncorrecto');
            bloquearPregunta(aseguradora, 0);
        }, 2000);
    });
   
    aseguradora.respuestaB1.addEventListener('click', function(){
        aseguradora.respuestaB1.classList.add('respuesta-correcta');
        
        setTimeout(()=>{
            aseguradora.respuestaB1.classList.remove('respuesta-correcta');
            aseguradora.respuestaB1.classList.add('fondoCorrecto');
            aseguradora.acietos++;
            bloquearPregunta(aseguradora, 0);
        }, 2000);
    }); 
}

function preguntasAseguradora2(aseguradora) {

   
    aseguradora.respuestaA2.addEventListener('click', function(){
        aseguradora.respuestaA2.classList.add('respuesta-correcta');
        
        setTimeout(()=>{
            aseguradora.respuestaA2.classList.remove('respuesta-correcta');
            aseguradora.respuestaA2.classList.add('fondoCorrecto');
            aseguradora.acietos++;
            bloquearPregunta(aseguradora, 1);
        }, 2000);
    });
   
    aseguradora.respuestaB2.addEventListener('click', function(){
        aseguradora.respuestaB2.classList.add('respuesta-incorrecta');
        
        setTimeout(()=>{
            aseguradora.respuestaB2.classList.remove('respuesta-incorrecta');
            aseguradora.respuestaB2.classList.add('fondoIncorrecto');
            bloquearPregunta(aseguradora, 1);
        }, 2000);
    }); 
}

function preguntasAseguradora3(aseguradora) {

   
    aseguradora.respuestaA3.addEventListener('click', function(){
        aseguradora.respuestaA3.classList.add('respuesta-correcta');
        
        setTimeout(()=>{
            aseguradora.respuestaA3.classList.remove('respuesta-correcta');
            aseguradora.respuestaA3.classList.add('fondoCorrecto');
            aseguradora.acietos++;
            bloquearPregunta(aseguradora, 2);
        }, 2000);
    });
   
    aseguradora.respuestaB3.addEventListener('click', function(){
        aseguradora.respuestaB3.classList.add('respuesta-incorrecta');
        
        setTimeout(()=>{
            aseguradora.respuestaB3.classList.remove('respuesta-incorrecta');
            aseguradora.respuestaB3.classList.add('fondoIncorrecto');
            bloquearPregunta(aseguradora, 2);
        }, 2000);
    }); 
}

function bloquearPregunta(aseguradora, indice) {  
    const bloqueo = aseguradora.bloquear[indice];
    const btnSiguiente = aseguradora.botones[indice];


    bloqueo.classList.add('activado');

    btnSiguiente.classList.add('visualizar');
    btnSiguiente.style.opacity = 0;

    setTimeout(()=>{
        btnSiguiente.style.opacity = 1;
    });

    if(indice == 0){
        btnSiguiente.addEventListener('click', function (e) {  
            e.preventDefault();
            aseguradora.ocultar(0);
            aseguradora.visualizar(1);
            preguntasAseguradora2(aseguradora);
        });
    }

    if(indice == 1){
        btnSiguiente.addEventListener('click', function (e) {  
            e.preventDefault();
            aseguradora.ocultar(1);
            aseguradora.visualizar(2);
            preguntasAseguradora3(aseguradora);
        });
    }

    if(indice == 2){
        btnSiguiente.addEventListener('click', function (e) {  
            e.preventDefault();
            // aseguradora.ocultar(1);
            // aseguradora.visualizar(2);
            // preguntasAseguradora3(aseguradora);
            console.log('Retroalimentacion');
        });
    }
}