function visualizarPag12(){
    
    const btnCuadros = document.querySelectorAll('.btn_cuadros12');

    btnCuadros.forEach(boton=>{
        boton.addEventListener('click', function () {  
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