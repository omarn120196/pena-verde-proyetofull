function desplegar(){

    fichas1();
    fichas2();
}

function fichas1(){

    const btnFichas = document.querySelectorAll('.btnFichas');
    
    btnFichas.forEach(boton=>{
        boton.addEventListener('click', function(e){
            e.preventDefault();
            const contenedor = boton.getAttribute('href');
            const visualizar = document.querySelector(contenedor);

            visualizar.classList.toggle('visualizar');
        });
    });
}

function fichas2(){
    const btnFichas = document.querySelectorAll('.btnImagen');
    
    btnFichas.forEach(boton=>{
        boton.addEventListener('click', function(e){
            e.preventDefault();
            const contenedor = boton.getAttribute('href');
            const visualizar = document.querySelector(contenedor);

            visualizar.classList.toggle('visualizar');
        });
    });
}