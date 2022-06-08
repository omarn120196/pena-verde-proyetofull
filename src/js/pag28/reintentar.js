function reintentarCuestionario() {  

    const boton = document.querySelector('#reintentar');

    if(boton){

        boton.addEventListener('click', function (e) { 
            
            e.preventDefault();

            noPagina = 26;
            selectOpcion(noPagina);
            visualizarPagina();
        });
    }
}