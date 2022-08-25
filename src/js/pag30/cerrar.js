function cerrarVentana(){

    const btnCerrar = document.querySelector('#cerrar');
    
    if(btnCerrar){

        btnCerrar.addEventListener('click', function (e) {  

            e.preventDefault();
            window.close();
            
            
        });
    }
}
