class Aseguradora{

    constructor(contenedor){

        this.contenedor = contenedor;

        //Respuestas Aseguradora
        this.respuestaA1 = document.querySelector('#respuestaA1_1');
        this.respuestaB1 = document.querySelector('#respuestaB1_1');
        this.bloquear1 = document.querySelector('#bloqueo1_1');
        this.btnSiguiente1 = document.querySelector('#siguiente1_1');

        this.respuestaA2 = document.querySelector('#respuestaA2_1');
        this.respuestaB2 = document.querySelector('#respuestaB2_1');
        this.bloquear1 = document.querySelector('#bloqueo2_1');
        this.btnSiguiente2 = document.querySelector('#siguiente2_1');

        this.respuestaA3 = document.querySelector('#respuestaA3_1');
        this.respuestaB3 = document.querySelector('#respuestaB3_1');
        this.bloquear1 = document.querySelector('#bloqueo3_1');
        this.btnSiguiente3 = document.querySelector('#siguiente3_1');

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
        console.log('ocultar');
    }

}

function iniciarCasos() {  

    elegirCaso();
    aseguradora();
}

function elegirCaso() {  
    
    const btnCasos = document.querySelectorAll('.btn-casos');

    btnCasos.forEach(boton=>{
        boton.addEventListener('click', function (e) {
            
            e.preventDefault();
            
            const casoID = boton.getAttribute('href');
            const divCaso = document.querySelector(casoID);
            const contenedorIntro = document.querySelector('#cont-pagina26');

            const h1 = document.querySelector('.header h1');

            contenedorIntro.classList.add('salida');
            divCaso.classList.add('caso-activo');

            divCaso.style.opacity = 0;
            setTimeout(()=>{
                h1.textContent = boton.textContent;
                divCaso.style.opacity = 1;
            }, 300);

        });
    });

}

function aseguradora() {  

    const botonIniciar = document.querySelector('#btn-iniciarAseguradora');
    const visualizar = document.querySelector('#cont-preguntasAseguradora');
    const preguntasAS = document.querySelectorAll('.preguntasAseguradora');
    
    if(botonIniciar){
        
        botonIniciar.addEventListener('click', function (e) {  
            e.preventDefault();
            
            const cont1 = document.querySelector('.intro-aseguradora');
            const cont2 = document.querySelector('#caso-aseguradora #cont-mano');
            const cont3 = document.querySelector('#caso-aseguradora #contCarrusel');

            cont1.classList.add('ocultar');
            cont2.classList.add('ocultar');
            cont3.classList.add('ocultar');

            visualizar.classList.add('visualizar');

            //Intanciar Clase Aseguradora
            const aseguradora = new Aseguradora(preguntasAS);
            aseguradora.visualizar(0);

            preguntasAseguradora(aseguradora);
        });
    }
}

function preguntasAseguradora(aseguradora) {

   
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

function bloquearPregunta(aseguradora, indice) {  
    const bloqueo = aseguradora.bloquear;
    console.log(bloqueo);
    // bloqueo.classList.add('activado');
}