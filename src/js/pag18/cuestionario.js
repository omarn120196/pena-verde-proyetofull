class Actividad1{

    constructor(){
        this.pregunta = 0;
        this.contenedor = document.querySelector('#actividad-cuestionario');
        this.preguntasActividad1 = [
            {
                noPregunta: 1,
                pregunta: 'Al menos una vez al año, las Compañías deben identificar que los expedientes clasificados como ALTO RIESGO estén actualizados y completos.',
                respuesta: 'v'
            },
            {
                noPregunta: 2,
                pregunta: 'Una Operación relevante es aquella realizada por los Colaboradores relacionadas con el LD y FT.',
                respuesta: 'f'
            },
            {
                noPregunta: 3,
                pregunta: 'La herramienta que nos permite dejar constancia de la entrevista es el Formato de Identificación de Nacionalidad Extranjera o Mexicana o KYC (conocido como Formato de Identificación de la Cedente).',
                respuesta: 'v'
            },
            {
                noPregunta: 4,
                pregunta: 'Un expediente de identificación debe resguardarse durante 5 años.',
                respuesta: 'f'
            },
            {
                noPregunta: 5,
                pregunta: 'Los expedientes incompletos generan sanciones por parte de la autoridad.',
                respuesta: 'v'
            },
        ]
    }

    siguientePregunta(){
        this.pregunta++;
    }
}

function actividad1(){

    const cuestionario = new Actividad1;
    iniciarActividad1(cuestionario);
}

function iniciarActividad1(cuestionario) {  

    const btnInicio = document.querySelector('#inicioCuestionario');
    const intro = document.querySelector('#intro-cuestionario');
    const contActividad = document.querySelector('#actividad-cuestionario');

    if(btnInicio){
        btnInicio.addEventListener('click', function(e){
            e.preventDefault();
            intro.classList.add('desaparece');
            contActividad.classList.add('ver');
    
            contActividad.style.opacity = 0;
            cargarCuestionario(cuestionario);
    
            setTimeout(()=>{
                contActividad.style.opacity = 1;
                cuestionario.siguientePregunta();
                verCuestionario(cuestionario);
            }, 300);
        });
    }
}

function cargarCuestionario(cuestionario) {  

    const contenedor = document.querySelector('#actividad-cuestionario');
    const arregloPreguntas = cuestionario.preguntasActividad1;

    arregloPreguntas.forEach(preguntas => {
        const {noPregunta, pregunta} = preguntas;

        const contPregunta = document.createElement('div');
        contPregunta.classList.add('cont-preguntas');
        contPregunta.setAttribute('id', `cont-pregunta${noPregunta}`);

        contPregunta.innerHTML = `
        <div class="pregunta">
            <div class="cont-numero">
                <h3>${noPregunta}</h3>
            </div>
            <div class="cont-pregunta">
                <p>${pregunta}</p>
            </div>
        </div>
        <div class="respuestas">
            <div class="respuestas-caja verdadero" id="v${noPregunta}">
                <p>Verdadero</p>
            </div>
            <div class="respuestas-caja falso" id="f${noPregunta}">
                <p>Falso</p>
            </div>
        </div>
        `;
        contenedor.appendChild(contPregunta);
    });
}

function verCuestionario(cuestionario){
    
    const {pregunta, preguntasActividad1} = cuestionario;
    const contPregunta = document.querySelector(`#cont-pregunta${pregunta}`);
    const btnVerdadero = document.querySelector(`#v${pregunta}`);
    const btnFalso = document.querySelector(`#f${pregunta}`);

    const respuesta = preguntasActividad1[pregunta-1].respuesta;
    
    contPregunta.classList.add('visualizar');
    contPregunta.style.opacity = 0;

    setTimeout(()=>{
        contPregunta.style.opacity = 1;
    }, 300);

    if(respuesta === 'v'){
        evaluarVerdadero(cuestionario, btnVerdadero, btnFalso, contPregunta, pregunta);
    }
    else if(respuesta === 'f'){
        evaluarFalso(cuestionario, btnVerdadero, btnFalso, contPregunta, pregunta);
    }    
}

function evaluarVerdadero(cuestionario, btnVerdadero, btnFalso, contPregunta, pregunta){

    cuestionario.siguientePregunta();

    btnVerdadero.addEventListener('click', function(){
        btnVerdadero.classList.add('respuesta-correcta');
        setTimeout(()=>{
            btnVerdadero.classList.add('fondoCorrecto');
            setTimeout(()=>{
                contPregunta.classList.remove('visualizar');

                if(pregunta < 5){
                    verCuestionario(cuestionario);
                }
                else{
                    retroActividad1();
                }
            }, 2000);
        }, 2000);
    });

    btnFalso.addEventListener('click', function(){
        btnFalso.classList.add('respuesta-incorrecta');
        setTimeout(()=>{
            btnFalso.classList.add('fondoIncorrecto');
            setTimeout(()=>{
                contPregunta.classList.remove('visualizar');

                if(pregunta < 5){
                    verCuestionario(cuestionario);
                }
                else{
                    retroActividad1();
                }
            }, 2000);
        }, 2000);
    });
}

function evaluarFalso(cuestionario, btnVerdadero, btnFalso, contPregunta, pregunta){

    cuestionario.siguientePregunta();

    const totalPreguntas = cuestionario.preguntasActividad1.length;

    btnVerdadero.addEventListener('click', function(){
        btnVerdadero.classList.add('respuesta-incorrecta');
        setTimeout(()=>{
            btnVerdadero.classList.add('fondoIncorrecto');
            setTimeout(()=>{
                contPregunta.classList.remove('visualizar');

                if(pregunta < totalPreguntas){
                    verCuestionario(cuestionario);
                }
                else{
                    retroActividad1();
                }
            }, 2000);
        }, 2000);
    });

    btnFalso.addEventListener('click', function(){
        btnFalso.classList.add('respuesta-correcta');
        setTimeout(()=>{
            btnFalso.classList.add('fondoCorrecto');
            setTimeout(()=>{
                contPregunta.classList.remove('visualizar');

                if(pregunta < totalPreguntas){
                    verCuestionario(cuestionario);
                }
                else{
                    retroActividad1();
                }
            }, 2000);
        }, 2000);
    });
}

function retroActividad1(){
    
    const retro = document.querySelector('#retroActividad1');
    retro.classList.add('visualizar');
    retro.style.opacity = 0;

    setTimeout(()=>{
        retro.style.opacity = 1;
    }, 300);
}

