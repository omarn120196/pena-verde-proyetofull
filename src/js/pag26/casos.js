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

            preguntasAseguradora1(aseguradora);
        });
    }
}

