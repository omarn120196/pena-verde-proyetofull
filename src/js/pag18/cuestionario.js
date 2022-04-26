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
                pregunta: 'La herramienta que nos permite dejar constancia de la entrevista es el Formato de Identificación del Cliente con prima anual mayor a $7,500 dólares, para el caso de General de Seguros y General de Salud. Para el caso de Reaseguradora Patria es el Formato de Identificación de la Cedente.',
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

    evaluarV(){

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
    
            setTimeout(()=>{
                contActividad.style.opacity = 1;
                cargarCuestionario(cuestionario);
                verPreguntas(cuestionario);
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

function verPreguntas(cuestionario){

    const preguntaActual = document.querySelector('visualizar');

    if(preguntaActual){
        preguntaActual.classList.remove('visualizar');
    }

    cuestionario.siguientePregunta();
    const pregunta = document.querySelector(`#cont-pregunta${cuestionario.pregunta}`);

    pregunta.classList.add('visualizar');

    //Evaluar respuestas
    const respuestas = cuestionario.preguntasActividad1;
    if(cuestionario.contenedor){
        
        respuestas.forEach(pregunta=>{
            const {noPregunta, respuesta} = pregunta;

            if(respuesta === 'v'){
                respuestaV(cuestionario, noPregunta);
            }
            else if(respuesta === 'f'){
                respuestaF(cuestionario, noPregunta)
            }
        });
    }

}



function respuestaV(cuestionario, noPregunta){

    const v = document.querySelector(`#v${noPregunta}`);
    const f = document.querySelector(`#f${noPregunta}`);

    if(v && f){
        
        v.addEventListener('click', function () { 
            
            v.classList.add('respuesta-correcta');
            setTimeout(()=>{
                verPreguntas(cuestionario);
            }, 3000);
        });
    
        f.addEventListener('click', function () {  
            v.classList.add('respuesta-incorrecta');
            setTimeout(()=>{
                verPreguntas(cuestionario);
            }, 3000);
        });
    }
}

function respuestaF(cuestionario, noPregunta){

    const v = document.querySelector(`#v${noPregunta}`);
    const f = document.querySelector(`#f${noPregunta}`);

    if(v && f){
        v.addEventListener('click', function () {  
            v.classList.add('respuesta-incorrecta');
            setTimeout(()=>{
                verPreguntas(cuestionario);
            }, 3000);
        });
    
        f.addEventListener('click', function () {  
            v.classList.add('respuesta-correcta');
            setTimeout(()=>{
                verPreguntas(cuestionario);
            }, 3000);
        });
    }
}