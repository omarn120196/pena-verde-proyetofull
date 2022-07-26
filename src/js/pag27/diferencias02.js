function visualizarDifPag202(){
    
    const btnCuadros = document.querySelectorAll('.btn-pag20-2');

    btnCuadros.forEach(boton=>{
        boton.addEventListener("click", function(e){
            e.preventDefault();

            const noCuadro = boton.dataset.cuadro;

            console.log(noCuadro);
            const cuadroLavado = document.querySelector(`#l2-cuadro${noCuadro}`);
            console.log(cuadroLavado);
            const cuadroFinanciamiento = document.querySelector(`#f2-cuadro${noCuadro}`);

            cuadroLavado.classList.toggle('cuadros_activos');
            cuadroFinanciamiento.classList.toggle('cuadros_activos');

            cuadroFinanciamiento.style.opacity = 0;
            cuadroLavado.style.opacity = 0;
            setTimeout(()=>{
                cuadroFinanciamiento.style.opacity = 1;
                cuadroLavado.style.opacity = 1;
            }, 300);
        });
    });
    
}