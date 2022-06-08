function visualizarMaletinesTel(){
    
    const btnCuadros = document.querySelectorAll('.btn2-pag20Tel');

    btnCuadros.forEach(boton=>{
        boton.addEventListener('click', function (e) {
            e.preventDefault();  
            const cuadro = boton.getAttribute('href');
            const visualizarCuadro = document.querySelector(cuadro);

            if(!visualizarCuadro.classList.contains('cuadros_activos')){
                visualizarCuadro.classList.add('cuadros_activos');
                visualizarCuadro.style.opacity = 0;

                setTimeout(()=>{
                    visualizarCuadro.style.opacity = 1;
                }, 300);
            }
            else{
                visualizarCuadro.classList.remove('cuadros_activos');
            }
        });
    });
    
}