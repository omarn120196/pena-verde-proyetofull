function visualizarDifPag20(){
    
    const btnCuadros = document.querySelectorAll('.btn-pag20');
    console.log(btnCuadros);

    btnCuadros.forEach(boton=>{
        boton.addEventListener("click", function(e){
            e.preventDefault();

            const noCuadro = boton.dataset.cuadro;
            const cuadroLavado = document.querySelector(`#l-cuadro${noCuadro}`);

            const cuadroFinanciamiento = document.querySelector(`#f-cuadro${noCuadro}`);

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

