function visualizarPreguntas(evaluacion){

    const contenedor = document.querySelector('#cont-preguntas');
    const arregloPreguntas = evaluacion.preguntasRespuestas;
    let noPregunta = 1;

    if(contenedor){

        while(arregloPreguntas.length > 5){

            //Crear un indice aleatorio
            const index = Math.floor(Math.random() * arregloPreguntas.length);

            //Crear contenedor del set de pregunta-respuestas
            const contSet = document.createElement('div');
            contSet.classList.add('preguntas');

            if(arregloPreguntas[index].respuestaC){

                //Crear el HTML de 3 respuestas
                contSet.innerHTML = `
                <div class="cont-preguntas">
                    <div class="numero-Pregunta">
                        <h2>${noPregunta}</h2>
                    </div>
                    <div class="pregunta">
                        <p>${arregloPreguntas[index].pregunta}</p>
                    </div>
                </div>
    
                <div class="cont-respuestas">
                    <div class="incisos">
                        <div class="letras">
                            <h2>a.</h2>
                        </div>
                        <div class="respuesta" id="respuestaA${arregloPreguntas[index].numero}">
                            <p>${arregloPreguntas[index].respuestaA}</p>
                        </div>
                    </div>
                    <div class="incisos">
                        <div class="letras">
                            <h2>b.</h2>
                        </div>
                        <div class="respuesta" id="respuestaB${arregloPreguntas[index].numero}">
                            <p>${arregloPreguntas[index].respuestaB}</p>
                        </div>
                    </div>
                    <div class="incisos">
                        <div class="letras">
                            <h2>c.</h2>
                        </div>
                        <div class="respuesta" id="respuestaC${arregloPreguntas[index].numero}">
                            <p>${arregloPreguntas[index].respuestaC}</p>
                        </div>
                    </div>
    
                    <div class="bloquear-respuesta" id="bloquearR-${arregloPreguntas[index].numero}"></div>
                 </div>
                `;
            }
            else{
                
                //Crear el HTML de falso verdadero
                contSet.innerHTML = `
                <div class="cont-preguntas">
                    <div class="numero-Pregunta">
                        <h2>${noPregunta}</h2>
                    </div>
                    <div class="pregunta">
                        <p>${arregloPreguntas[index].pregunta}</p>
                    </div>
                </div>
    
                <div class="cont-respuestas">
                    <div class="incisos">
                        <div class="letras">
                            <h2>a.</h2>
                        </div>
                        <div class="respuesta" id="respuestaA${arregloPreguntas[index].numero}">
                            <p>${arregloPreguntas[index].respuestaA}</p>
                        </div>
                    </div>
                    <div class="incisos">
                        <div class="letras">
                            <h2>b.</h2>
                        </div>
                        <div class="respuesta" id="respuestaB${arregloPreguntas[index].numero}">
                            <p>${arregloPreguntas[index].respuestaB}</p>
                        </div>
                    </div>
                    
    
                    <div class="bloquear-respuesta" id="bloquearR-${arregloPreguntas[index].numero}"></div>
                 </div>
                `;
            }

            //Aumentar indice de pregunta
            noPregunta++;

            //Añadir al HTML
            contenedor.appendChild(contSet);

            //Remover la pregunta iterada
            arregloPreguntas.splice(index, 1);
        }

    }
}

