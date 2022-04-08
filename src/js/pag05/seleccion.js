function seleccionarInfo06(){
    
    const btnInfo06 = document.querySelectorAll('.btn-info06');
    
    btnInfo06.forEach(boton=>{
        boton.addEventListener('click', function (e) {  
            e.preventDefault();

            const divInfo = boton.getAttribute('href');
            const divActivo = document.querySelector('.tabla-activa');
            const visualizar = document.querySelector(divInfo);

            divActivo.classList.remove('tabla-activa');
            visualizar.classList.add('tabla-activa');

            visualizar.style.opacity = 0;

            setTimeout(()=>{
                visualizar.style.opacity = 1;
            }, 300);
        });
    })
}