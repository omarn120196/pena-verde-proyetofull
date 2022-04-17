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