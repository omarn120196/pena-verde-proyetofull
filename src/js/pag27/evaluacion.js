class EvaluacionFinal{

    constructor(){
        this.contenedor = document.querySelector('#cont-evaluacion');
        this.aciertos = 0;
        this.preguntasRespuestas = [
            {
                pregunta: 'Persona de contacto entre el Comité de Comunicación y Control, las autoridades y la Compañía para la atención de obligaciones en materia de PLD/CFT.',
                respuestaA: 'Cualquier colaborador',
                respuestaB: 'Auditoría Interna',
                respuestaC: 'El Oficial de Cumplimiento',
                numero: 1
            },
            {
                pregunta: 'Actos u operaciones que consisten en hacer que los fondos obtenidos a través de la comisión de delitos parezcan como el fruto de actividades legales y circulen sin problema en el sistema financiero.',
                respuestaA: 'Narcotráfico',
                respuestaB: 'Lavado de dinero',
                respuestaC: 'Tráfico de influencias',
                numero: 2
            },
            {
                pregunta: 'Proceso por el que se obtienen los bienes o recursos de procedencia lícita o ilícita para presionar a los gobiernos generando terror o temor a la población.',
                respuestaA: 'Financiamiento al terrorismo',
                respuestaB: 'Operación inusual',
                respuestaC: 'Operación Relevante',
                numero: 3
            },
            {
                pregunta: 'En esta etapa, el dinero lavado vuelve a la circulación integrándose a la economía formal aparentando que se obtuvo legalmente, volviéndose extremadamente difícil distinguir si el dinero lavado tuvo un origen lícito o ilícito.',
                respuestaA: 'Colocación',
                respuestaB: 'Integración',
                respuestaC: 'Diversificación',
                numero: 4
            },
            {
                pregunta: 'Si un Cliente realiza una transacción superior a los $7,500 dólares en efectivo, corresponde a una operación:',
                respuestaA: 'Preocupante',
                respuestaB: 'Relevante',
                respuestaC: 'Inusual',
                numero: 5
            },
            {
                pregunta: 'El Comité de Comunicación y Control es el órgano colegiado encargado dentro de la Compañía para dictar y vigilar el cumplimiento de las medidas y procedimientos en materia de PLD/CFT.',
                respuestaA: 'Falso',
                respuestaB: 'Relevante',
                respuestaC: 'Verdadero',
                numero: 6
            }
        ]
    }

    acierto(){
        this.aciertos++;
    }

    intento(){
        this.intentos++;
    }
}

function evaluacionFinal(){

    const evaluacion = new EvaluacionFinal();

    //Preguntas
    pregunta1(evaluacion);
    pregunta2(evaluacion);
    pregunta3(evaluacion);
    pregunta4(evaluacion);
    pregunta5(evaluacion);
    pregunta6(evaluacion);
    pregunta7(evaluacion);
    pregunta8(evaluacion);
    pregunta9(evaluacion);
    pregunta10(evaluacion);
    pregunta11(evaluacion);
    pregunta12(evaluacion);
    pregunta13(evaluacion);
    pregunta14(evaluacion);
    pregunta15(evaluacion);
    pregunta16(evaluacion);

    //Evaluar
    calificacionFinal(evaluacion);

    //Reintentar
    reintentarCuestionario();

    //Cerrar Ventana
    cerrarVentana();

    //registrar
    registrar();
    
}

function pregunta1(evaluacion){

    const respA = document.querySelector('#respuestaA1');
    const respB = document.querySelector('#respuestaB1');
    const respC = document.querySelector('#respuestaC1');
    const bloquear = document.querySelector('#bloquearR-1');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoCorrecto');
            }, 2000);
        });
    }
}

function pregunta2(evaluacion){

    const respA = document.querySelector('#respuestaA2');
    const respB = document.querySelector('#respuestaB2');
    const respC = document.querySelector('#respuestaC2');
    const bloquear = document.querySelector('#bloquearR-2');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoCorrecto');
            }, 2000);
        });

        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoIncorrecto');
            }, 2000);
        });
    }
}

function pregunta3(evaluacion){

    const respA = document.querySelector('#respuestaA3');
    const respB = document.querySelector('#respuestaB3');
    const respC = document.querySelector('#respuestaC3');
    const bloquear = document.querySelector('#bloquearR-3');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoCorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoIncorrecto');
            }, 2000);
        });
    }
}

function pregunta4(evaluacion){

    const respA = document.querySelector('#respuestaA4');
    const respB = document.querySelector('#respuestaB4');
    const respC = document.querySelector('#respuestaC4');
    const bloquear = document.querySelector('#bloquearR-4');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoCorrecto');
            }, 2000);
        });

        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoIncorrecto');
            }, 2000);
        });
    }
}

function pregunta5(evaluacion){

    const respA = document.querySelector('#respuestaA5');
    const respB = document.querySelector('#respuestaB5');
    const respC = document.querySelector('#respuestaC5');
    const bloquear = document.querySelector('#bloquearR-5');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoCorrecto');
            }, 2000);
        });

        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoIncorrecto');
            }, 2000);
        });
    }
}

function pregunta6(evaluacion){

    const respA = document.querySelector('#respuestaA6');
    const respB = document.querySelector('#respuestaB6');
    const bloquear = document.querySelector('#bloquearR-6');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoCorrecto');
            }, 2000);
        });
    }
}

function pregunta7(evaluacion){

    const respA = document.querySelector('#respuestaA7');
    const respB = document.querySelector('#respuestaB7');
    const respC = document.querySelector('#respuestaC7');
    const bloquear = document.querySelector('#bloquearR-7');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoCorrecto');
            }, 2000);
        });

        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoIncorrecto');
            }, 2000);
        });
    }
}

function pregunta8(evaluacion){

    const respA = document.querySelector('#respuestaA8');
    const respB = document.querySelector('#respuestaB8');
    const bloquear = document.querySelector('#bloquearR-8');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoCorrecto');
            }, 2000);
        });
    }
}

function pregunta9(evaluacion){

    const respA = document.querySelector('#respuestaA9');
    const respB = document.querySelector('#respuestaB9');
    const respC = document.querySelector('#respuestaC9');
    const bloquear = document.querySelector('#bloquearR-9');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoCorrecto');
            }, 2000);
        });
    }
}

function pregunta10(evaluacion){

    const respA = document.querySelector('#respuestaA10');
    const respB = document.querySelector('#respuestaB10');
    const respC = document.querySelector('#respuestaC10');
    const bloquear = document.querySelector('#bloquearR-10');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoCorrecto');
            }, 2000);
        });
    }
}

function pregunta11(evaluacion){

    const respA = document.querySelector('#respuestaA11');
    const respB = document.querySelector('#respuestaB11');
    const respC = document.querySelector('#respuestaC11');
    const bloquear = document.querySelector('#bloquearR-11');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoCorrecto');
            }, 2000);
        });
    }
}

function pregunta12(evaluacion){

    const respA = document.querySelector('#respuestaA12');
    const respB = document.querySelector('#respuestaB12');
    const respC = document.querySelector('#respuestaC12');
    const bloquear = document.querySelector('#bloquearR-12');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoCorrecto');
            }, 2000);
        });

        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoIncorrecto');
            }, 2000);
        });
    }
}

function pregunta13(evaluacion){

    const respA = document.querySelector('#respuestaA13');
    const respB = document.querySelector('#respuestaB13');
    const respC = document.querySelector('#respuestaC13');
    const bloquear = document.querySelector('#bloquearR-13');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoCorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoIncorrecto');
            }, 2000);
        });
    }
}

function pregunta14(evaluacion){

    const respA = document.querySelector('#respuestaA14');
    const respB = document.querySelector('#respuestaB14');
    const bloquear = document.querySelector('#bloquearR-14');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoCorrecto');
            }, 2000);
        });
    }
}

function pregunta15(evaluacion){

    const respA = document.querySelector('#respuestaA15');
    const respB = document.querySelector('#respuestaB15');
    const bloquear = document.querySelector('#bloquearR-15');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoCorrecto');
            }, 2000);
        });
    }
}

function pregunta16(evaluacion){

    const respA = document.querySelector('#respuestaA16');
    const respB = document.querySelector('#respuestaB16');
    const respC = document.querySelector('#respuestaC16');
    const bloquear = document.querySelector('#bloquearR-16');

    if(evaluacion.contenedor){

        respA.addEventListener('click', function () {  
            respA.classList.add('respuesta-correcta');
            evaluacion.acierto();
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respA.classList.add('fondoCorrecto');
            }, 2000);
        });

        respB.addEventListener('click', function () {  
            respB.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respB.classList.add('fondoIncorrecto');
            }, 2000);
        });

        respC.addEventListener('click', function () {  
            respC.classList.add('respuesta-incorrecta');
            bloquearRespuesta(bloquear);
            setTimeout(()=>{
                respC.classList.add('fondoIncorrecto');
            }, 2000);
        });
    }
}

function bloquearRespuesta(div){
    div.classList.add('activado');
}

function calificacionFinal(evaluacion){

    const btnEvaluar = document.querySelector('#evaluarCuestionario');
    const calificacion = document.querySelector('#calificacion');
    const noPreguntas = 16;

    const intro = document.querySelector('#intro-evaluacion');
    const instruccion = document.querySelector('#instruccionEvaluacion');
    const btnInicio = document.querySelector('#cont-inicioEvaluacion');
    const contPreguntas = document.querySelector('#cont-preguntas');
    

    if(btnEvaluar){

        btnEvaluar.addEventListener('click', function(e){
            e.preventDefault();

            intro.classList.add('ocultar');
            instruccion.classList.add('ocultar');
            btnInicio.classList.add('ocultar');
            contPreguntas.classList.add('ocultar');
            btnEvaluar.parentElement.classList.add('ocultar');
    
            const promedio = parseInt((evaluacion.aciertos * 100) / 16);
            
            if(promedio >= 80){
                const retro = document.querySelector('#retro-positiva');       
                retroFinal(retro);
                calificacion.textContent = promedio; 
            }
            else{
                const retro = document.querySelector('#retro-negativa');
                retroFinal(retro);
            }   
        });
    }
}

function retroFinal(contenedor){
    contenedor.classList.add('visualizar');
    contenedor.style.opacity = 0;

    setTimeout(()=>{
        contenedor.style.opacity = 1;
    }, 300);
}