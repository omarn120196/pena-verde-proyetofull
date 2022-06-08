function visualizarInfo14(){
    verInfoPC();
    verInfoMovil();
}

function verInfoPC(){
    const btnPC = document.querySelectorAll('.btn-pc');
    
    btnPC.forEach(boton=>{
        boton.addEventListener('click', function (e) {  
            e.preventDefault();

            const cuadro = boton.getAttribute('href');
            const cuadroActivo = document.querySelector('.cuadro-activo');
            const visualizar = document.querySelector(cuadro);

            cuadroActivo.classList.remove('cuadro-activo');
            visualizar.classList.add('cuadro-activo');

            visualizar.style.opacity = 0;

            setTimeout(()=>{
                visualizar.style.opacity = 1;
            }, 300);
        });
    });
}

function verInfoMovil(){
    const botones = document.querySelectorAll('.btn-info-movil');

    botones.forEach(boton=>{
        boton.addEventListener('click', function(e){

            e.preventDefault();
            
            const enlace = boton.getAttribute('href');
            const visualizar = document.querySelector(enlace);

            const parrafo = visualizar.firstElementChild;

            visualizar.classList.toggle('desplegar');
            parrafo.classList.toggle('desplegar');

        });
    });
}   